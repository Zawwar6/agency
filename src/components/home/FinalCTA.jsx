import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { siteConfig } from '../../data/siteConfig'

export function FinalCTA() {
  return (
    <section className="bg-tint py-24">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2 className="max-w-xl font-display text-4xl font-bold sm:text-5xl">Have a product to build? Tell us about it.</h2>
        <Button to={siteConfig.cta.to}>{siteConfig.cta.label}</Button>
      </Container>
    </section>
  )
}
