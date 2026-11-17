import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { siteConfig } from '../../data/siteConfig'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 md:py-36">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-[#1D4ED8]/20 blur-[100px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-16">
          {/* Text */}
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-[#A1A1AA]">
              <span className="inline-block h-px w-8 bg-[#2563EB]" />
              LET’S BUILD SOMETHING
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Have a product to build?
              <br />
              <span className="text-white/90">Tell us about it.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#A1A1AA]">
              We partner with ambitious teams to design and engineer digital products that stand out and scale.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Button
              to={siteConfig.cta.to}
              className="!bg-[#2563EB] !px-8 !py-4 !text-base !font-medium !text-white shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] transition-all hover:!bg-[#1D4ED8] hover:shadow-[0_0_60px_-8px_rgba(37,99,235,0.75)]"
            >
              {siteConfig.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}