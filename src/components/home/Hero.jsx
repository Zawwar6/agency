import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { siteConfig } from '../../data/siteConfig'

const headlineLines = ['Apps and software', 'people keep using.']

export function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.12 })
      gsap.from('.hero-fade', { opacity: 0, y: 16, duration: 0.8, delay: 0.5, stagger: 0.1 })
      gsap.to('.hero-orb', { yPercent: 12, repeat: -1, yoyo: true, duration: 6, ease: 'sine.inOut' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-navy py-24 text-white md:py-36">
      <div aria-hidden="true" className="hero-orb absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand/60 blur-[120px]" />
      <Container className="relative">
        <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {headlineLines.map((line) => (
            <span key={line} className="block overflow-hidden pb-2"><span className="hero-line block">{line}</span></span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-xl text-lg text-white/75">{siteConfig.tagline}</p>
        <div className="hero-fade mt-10 flex flex-wrap gap-4">
          <Button to={siteConfig.cta.to} variant="light">{siteConfig.cta.label}</Button>
          <Button to="/services" variant="outline" className="!border-white/30 !text-white hover:!border-white">See services</Button>
        </div>
      </Container>
    </section>
  )
}
