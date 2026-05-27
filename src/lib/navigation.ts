export const primaryNavLinks = [
  { href: '/', label: '主页' },
  { href: '/categories', label: '分类' },
  { href: '/now', label: '现在' },
  { href: '/nav', label: '书签' },
  { href: '/newsletter', label: '订阅' },
  { href: '/para-notes', label: '笔记' }
]

export function getNextNavLink(pathname: string) {
  const currentIndex = getCurrentNavIndex(pathname)

  if (currentIndex === -1) return primaryNavLinks[0]

  return primaryNavLinks[(currentIndex + 1) % primaryNavLinks.length]
}

export function getPreviousNavLink(pathname: string) {
  const currentIndex = getCurrentNavIndex(pathname)

  if (currentIndex === -1) return primaryNavLinks[0]

  return primaryNavLinks[(currentIndex - 1 + primaryNavLinks.length) % primaryNavLinks.length]
}

function getCurrentNavIndex(pathname: string) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')

  return primaryNavLinks.findIndex(({ href }) => {
    const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '')
    return normalizedHref === '/'
      ? normalizedPath === '/'
      : normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`)
  })
}
