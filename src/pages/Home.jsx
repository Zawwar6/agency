import { Seo } from '../components/common/Seo'
import { Hero } from '../components/home/Hero'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { FinalCTA } from '../components/home/FinalCTA'
import { siteConfig } from '../data/siteConfig'

export default function Home() {
  return (
    <>
      <Seo description={siteConfig.tagline} path="/" />
      <Hero />
      <ServicesPreview />
      <FinalCTA />
    </>
  )
}
