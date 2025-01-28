import fs from 'fs'
import path from 'path'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://osdental.io"

export async function getStaticProps() {
  const staticPaths = [
    '',
    '#membership-section',
    '#about-us-section',
    '#benefits-section',
    '#integrations-section',
    '#service-section',
  ]

  const url = SITE_URL 
  const allPaths = [...staticPaths]
  const sitemapEntries = `<?xml version="1.0" encoding="UTF-8"?> 
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${url}</loc>
        <xhtml:link rel="alternate" hreflang="en" href="${url}" />
      </url>
    </urlset>`

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemapEntries,
    'utf8',
  )

  return { props: {} }
}

export default function SitemapPage() {
  return null
}
