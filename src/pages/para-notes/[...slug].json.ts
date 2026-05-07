import type { APIRoute } from 'astro'
import MarkdownIt from 'markdown-it'
import {
  getAllNotes,
  getNoteById,
  paraCategoryLabels,
  prepareBodyForRender,
  type ParaCategory
} from '@/utils/para-notes'

// Build image URL map: /src/para-notes/Project/image/x.png -> Project/image/x.png
const imageModules = import.meta.glob(
  '/src/para-notes/**/*.{png,jpg,jpeg,gif,webp,svg,PNG,JPG,JPEG,GIF,WEBP,SVG}',
  { eager: true, query: '?url', import: 'default' }
)
const imageUrlMap = new Map<string, string>()
for (const [absPath, url] of Object.entries(imageModules)) {
  imageUrlMap.set(absPath.replace('/src/para-notes/', ''), url as string)
}

function makeImageResolver(noteId: string): (src: string) => string {
  return function resolveImagePath(src: string): string {
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
      return src
    }
    const noteDir = noteId.split('/').slice(0, -1).join('/')
    const parts = noteDir ? noteDir.split('/') : []
    for (const part of src.split('/')) {
      if (part === '..') parts.pop()
      else if (part !== '.') parts.push(part)
    }
    return imageUrlMap.get(parts.join('/')) ?? src
  }
}

const md = new MarkdownIt({ html: true, linkify: true })

export function getStaticPaths() {
  return getAllNotes().map((n) => ({
    params: { slug: n.id },
    props: { noteId: n.id }
  }))
}

export const GET: APIRoute = ({ props }) => {
  const { noteId } = props as { noteId: string }
  const note = getNoteById(noteId)
  if (!note) {
    return new Response(JSON.stringify({ error: 'not found' }), {
      status: 404,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    })
  }

  const { category, title, rawContent } = note
  const categoryLabel = paraCategoryLabels[category as ParaCategory] ?? category

  const resolveImagePath = makeImageResolver(noteId)
  const bodyForRender = prepareBodyForRender(rawContent, title)
  const rewritten = bodyForRender.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_match, alt, src) => `![${alt}](${resolveImagePath(src.trim())})`
  )

  const html = md.render(rewritten)

  return new Response(
    JSON.stringify({
      id: noteId,
      title,
      category,
      categoryLabel,
      html
    }),
    {
      headers: { 'content-type': 'application/json; charset=utf-8' }
    }
  )
}
