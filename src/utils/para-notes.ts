export type ParaCategory = 'Project' | 'Areas' | 'Resources' | 'Archives'

export interface ParaNote {
  id: string
  category: ParaCategory
  filename: string
  title: string
  excerpt: string
  rawContent: string
}

export const paraCategories: readonly ParaCategory[] = [
  'Project',
  'Areas',
  'Resources',
  'Archives'
] as const

export const paraCategoryLabels: Record<ParaCategory, string> = {
  Project: '项目',
  Areas: '领域',
  Resources: '资源',
  Archives: '归档'
}

export const paraCategoryDescriptions: Record<ParaCategory, string> = {
  Project: '进行中的项目和实验',
  Areas: '需要持续关注的领域',
  Resources: '参考资料、提示词和工具',
  Archives: '已完成的工作和历史记录'
}

const rawModules = import.meta.glob('/src/para-notes/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n?/

function stripFrontmatter(content: string): { body: string; frontmatter: string | null } {
  const m = content.match(FRONTMATTER_RE)
  if (!m) return { body: content, frontmatter: null }
  return { body: content.slice(m[0].length), frontmatter: m[1] }
}

function extractFrontmatterTitle(fm: string): string | null {
  const m = fm.match(/^title:\s*['"]?([^'"\n]+?)['"]?\s*$/m)
  return m ? m[1].trim() : null
}

function extractH1(body: string): string | null {
  const m = body.match(/^#\s+(.+?)\s*$/m)
  if (!m) return null
  return cleanInlineMarkdown(m[1])
}

function cleanInlineMarkdown(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/(?<![A-Za-z0-9])_([^_]+)_(?![A-Za-z0-9])/g, '$1')
    .trim()
}

function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/^(area_|project_|archive_|a_)/, '')
    .replace(/[_-]+/g, ' ')
    .trim()
}

function extractTitle(content: string, filename: string): string {
  const { body, frontmatter } = stripFrontmatter(content)
  if (frontmatter) {
    const t = extractFrontmatterTitle(frontmatter)
    if (t) return t
  }
  const h1 = extractH1(body)
  if (h1) return h1
  return titleFromFilename(filename)
}

function extractExcerpt(content: string, maxLen = 90): string {
  const { body } = stripFrontmatter(content)
  // Drop fenced code blocks before scanning lines
  const stripped = body.replace(/```[\s\S]*?```/g, '')
  const lines = stripped.split('\n')
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue
    if (line.startsWith('#')) continue
    if (line.startsWith('|')) continue
    if (line.startsWith('---')) continue
    if (line.startsWith('>')) continue
    const clean = line
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]+/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    if (!clean) continue
    if (clean.length > maxLen) return clean.slice(0, maxLen).trim() + '…'
    return clean
  }
  return ''
}

let cachedNotes: ParaNote[] | null = null

export function getAllNotes(): ParaNote[] {
  if (cachedNotes) return cachedNotes
  const notes: ParaNote[] = []
  for (const [absPath, content] of Object.entries(rawModules)) {
    const id = absPath.replace('/src/para-notes/', '').replace(/\.md$/, '')
    if (id.endsWith('/README') || id === 'README') continue
    const segments = id.split('/')
    const category = segments[0] as ParaCategory
    if (!paraCategories.includes(category)) continue
    const filename = segments[segments.length - 1]
    notes.push({
      id,
      category,
      filename,
      title: extractTitle(content, filename),
      excerpt: extractExcerpt(content),
      rawContent: content
    })
  }
  notes.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))
  cachedNotes = notes
  return notes
}

export function getNotesByCategory(): Map<ParaCategory, ParaNote[]> {
  const map = new Map<ParaCategory, ParaNote[]>()
  for (const cat of paraCategories) map.set(cat, [])
  for (const note of getAllNotes()) {
    map.get(note.category)!.push(note)
  }
  return map
}

export function getNoteById(id: string): ParaNote | undefined {
  return getAllNotes().find((n) => n.id === id)
}

// ────────────────────────────────────────────────────────────
// Folder tree
// ────────────────────────────────────────────────────────────

export interface NoteTreeFolder {
  kind: 'folder'
  name: string
  path: string
  children: NoteTreeNode[]
  count: number
}

export interface NoteTreeLeaf {
  kind: 'note'
  id: string
  title: string
  excerpt: string
}

export type NoteTreeNode = NoteTreeFolder | NoteTreeLeaf

const collator = new Intl.Collator('zh-Hans-CN', { numeric: true, sensitivity: 'base' })

function sortNodes(nodes: NoteTreeNode[]): NoteTreeNode[] {
  // Folders first, then leaves; alphabetical (zh-Hans-CN) within each group.
  return nodes.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === 'folder' ? -1 : 1
    const aName = a.kind === 'folder' ? a.name : a.title
    const bName = b.kind === 'folder' ? b.name : b.title
    return collator.compare(aName, bName)
  })
}

function countLeaves(nodes: NoteTreeNode[]): number {
  let n = 0
  for (const node of nodes) {
    if (node.kind === 'note') n++
    else n += node.count
  }
  return n
}

/**
 * Build a folder tree for one PARA category. The category segment itself is
 * stripped from each leaf's path: a note at `Resources/python_tools/foo` will
 * appear under a `python_tools` folder in the tree returned for `Resources`.
 */
export function getNoteTree(category: ParaCategory): NoteTreeNode[] {
  const notes = getAllNotes().filter((n) => n.category === category)

  type FolderBuilder = {
    kind: 'folder'
    name: string
    path: string
    childrenMap: Map<string, FolderBuilder>
    leaves: NoteTreeLeaf[]
  }

  const root: FolderBuilder = {
    kind: 'folder',
    name: category,
    path: category,
    childrenMap: new Map(),
    leaves: []
  }

  for (const note of notes) {
    const parts = note.id.split('/')
    // parts[0] === category; strip it. The last part is the filename (leaf).
    const folderSegments = parts.slice(1, -1)
    let cursor = root
    let cumulative = category
    for (const seg of folderSegments) {
      cumulative = `${cumulative}/${seg}`
      let child = cursor.childrenMap.get(seg)
      if (!child) {
        child = {
          kind: 'folder',
          name: seg,
          path: cumulative,
          childrenMap: new Map(),
          leaves: []
        }
        cursor.childrenMap.set(seg, child)
      }
      cursor = child
    }
    cursor.leaves.push({
      kind: 'note',
      id: note.id,
      title: note.title,
      excerpt: note.excerpt
    })
  }

  function finalize(builder: FolderBuilder): NoteTreeFolder {
    const children: NoteTreeNode[] = []
    for (const child of builder.childrenMap.values()) {
      children.push(finalize(child))
    }
    for (const leaf of builder.leaves) {
      children.push(leaf)
    }
    sortNodes(children)
    return {
      kind: 'folder',
      name: builder.name,
      path: builder.path,
      children,
      count: countLeaves(children)
    }
  }

  return finalize(root).children
}

/**
 * Strip frontmatter and the first H1 (when it matches the page title) so the
 * rendered body doesn't duplicate the header shown above it.
 */
export function prepareBodyForRender(content: string, title: string): string {
  const { body } = stripFrontmatter(content)
  const h1Re = /^#\s+(.+?)\s*$/m
  const m = body.match(h1Re)
  if (m && m.index !== undefined) {
    const matchedTitle = m[1].trim()
    if (matchedTitle === title) {
      return body.slice(0, m.index) + body.slice(m.index + m[0].length).replace(/^\n+/, '')
    }
  }
  return body
}
