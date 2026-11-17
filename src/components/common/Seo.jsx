import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/siteConfig'

export function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const url = `${siteConfig.domain}${path}`
  const structuredData = { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.domain }
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
