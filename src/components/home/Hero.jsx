import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { siteConfig } from '../../data/siteConfig'

const headlineLines = ['Websites. Apps.', 'Built for what’s next.']

export function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = gsap.context(() => {
      // Headline lines
      gsap.from('.hero-line', {
        yPercent: 110,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.14,
      })

      // Eyebrow, tagline, CTAs
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 0.85,
        delay: 0.45,
        stagger: 0.1,
        ease: 'power3.out',
      })

      // Visual cluster
      gsap.from('.hero-visual', {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1.2,
        delay: 0.35,
        ease: 'power3.out',
      })

      // Floating ambient orbs
      gsap.to('.hero-orb-1', {
        yPercent: 14,
        xPercent: 6,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: 'sine.inOut',
      })
      gsap.to('.hero-orb-2', {
        yPercent: -10,
        xPercent: -8,
        repeat: -1,
        yoyo: true,
        duration: 9,
        ease: 'sine.inOut',
      })
      gsap.to('.hero-orb-3', {
        yPercent: 8,
        repeat: -1,
        yoyo: true,
        duration: 6.5,
        ease: 'sine.inOut',
      })

      // Gentle float on mockup cards
      gsap.to('.float-a', {
        y: -14,
        rotate: 1.5,
        repeat: -1,
        yoyo: true,
        duration: 5.5,
        ease: 'sine.inOut',
      })
      gsap.to('.float-b', {
        y: 12,
        rotate: -1.2,
        repeat: -1,
        yoyo: true,
        duration: 6.2,
        ease: 'sine.inOut',
        delay: 0.4,
      })
      gsap.to('.float-c', {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 4.8,
        ease: 'sine.inOut',
        delay: 0.8,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="hero-orb-1 pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[#2563EB]/30 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="hero-orb-2 pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#1D4ED8]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="hero-orb-3 pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#2563EB]/20 blur-[100px]"
      />

      {/* Fine architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]"
      />

      <Container className="relative py-24 md:py-32 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* ── Left content ── */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <p className="hero-fade mb-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-[#A1A1AA]">
              <span className="inline-block h-px w-8 bg-[#2563EB]" />
              DIGITAL EXPERIENCES · BUILT TO PERFORM
            </p>

            {/* Headline */}
            <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {headlineLines.map((line) => (
                <span key={line} className="block overflow-hidden pb-1.5">
                  <span className="hero-line block">{line}</span>
                </span>
              ))}
            </h1>

            {/* Tagline */}
            <p className="hero-fade mt-7 max-w-md text-lg leading-relaxed text-[#A1A1AA] sm:text-xl">
              Thoughtful design. Powerful technology. Real results.
            </p>

            {/* CTAs */}
            <div className="hero-fade mt-10 flex flex-wrap gap-4">
              <Button
                to={siteConfig.cta.to}
                variant="light"
                className="!bg-[#2563EB] !text-white hover:!bg-[#1D4ED8] !border-transparent shadow-[0_0_40px_-8px_rgba(37,99,235,0.55)]"
              >
                Start a Project
              </Button>
              <Button
                to="/services"
                variant="outline"
                className="!border-white/20 !text-white hover:!border-white/50 hover:!bg-white/5"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* ── Right visual ── */}
          <div className="hero-visual relative lg:col-span-6 xl:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none">
              {/* Main dashboard mockup */}
              <div className="float-a absolute left-[8%] top-[6%] z-20 w-[68%] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 h-2 w-24 rounded-full bg-white/10" />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-28 rounded-full bg-white/15" />
                    <div className="h-7 w-20 rounded-lg bg-[#2563EB]/80" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="mb-2 h-2 w-12 rounded-full bg-white/20" />
                      <div className="h-6 w-16 rounded bg-white/25" />
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="mb-2 h-2 w-10 rounded-full bg-white/20" />
                      <div className="h-6 w-14 rounded bg-[#2563EB]/50" />
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="mb-2 h-2 w-14 rounded-full bg-white/20" />
                      <div className="h-6 w-12 rounded bg-white/20" />
                    </div>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex h-24 items-end gap-1.5 pt-2">
                    {[40, 65, 45, 80, 55, 90, 70, 50, 75, 60].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-[#1D4ED8]/60 to-[#2563EB]/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary floating card – mobile app */}
              <div className="float-b absolute bottom-[8%] right-[4%] z-30 w-[38%] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="border-b border-white/10 px-3 py-2.5">
                  <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#2563EB]/70" />
                    <div className="space-y-1">
                      <div className="h-2 w-16 rounded-full bg-white/25" />
                      <div className="h-1.5 w-10 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <div className="h-16 rounded-xl bg-gradient-to-br from-[#2563EB]/30 to-[#1D4ED8]/10" />
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/15" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-[#2563EB]/80" />
                    <div className="h-8 w-8 rounded-lg border border-white/15" />
                  </div>
                </div>
              </div>

              {/* Small glass status panel */}
              <div className="float-c absolute right-[12%] top-[18%] z-40 w-36 rounded-xl border border-white/15 bg-white/[0.08] p-3 shadow-lg backdrop-blur-md">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-medium tracking-wide text-white/80">
                    LIVE
                  </span>
                </div>
                <div className="text-xs text-white/60">Deployed</div>
                <div className="mt-1 text-sm font-semibold text-white">v2.4.1</div>
              </div>

              {/* Tiny accent card */}
              <div className="absolute bottom-[28%] left-[2%] z-10 w-28 rounded-lg border border-white/10 bg-white/[0.05] p-2.5 backdrop-blur-md">
                <div className="mb-1.5 h-1.5 w-12 rounded-full bg-[#2563EB]/60" />
                <div className="h-1.5 w-16 rounded-full bg-white/15" />
              </div>

              {/* Soft glow under the cluster */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[80px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}