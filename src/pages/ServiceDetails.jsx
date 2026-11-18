import { useParams, Link } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'
import { getServiceBySlug } from '../data/services'
import NotFound from './NotFound'
import PricingSection from '../components/services/PricingSection'

function DetailCard({ title, items, index }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#050505]/[0.07] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/25 hover:shadow-[0_25px_60px_-20px_rgba(37,99,235,0.18)]">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-7 flex items-center gap-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB]/[0.08] text-[13px] font-semibold tracking-wide text-[#2563EB]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-display text-xl font-bold tracking-tight text-[#050505]">
          {title}
        </h2>
      </div>

      <ul className="flex flex-1 flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[#71717A]">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#050505]/[0.08] bg-white px-3.5 py-1.5 text-sm font-medium text-[#050505] shadow-sm transition-colors hover:border-[#2563EB]/30 hover:text-[#2563EB]">
      {label}
    </span>
  )
}

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound />

  return (
    <>
      <Seo
        title={service.title}
        description={service.summary}
        path={`/services/${service.slug}`}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        {/* ambient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-32 h-[36rem] w-[36rem] rounded-full bg-[#2563EB]/[0.07] blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#1D4ED8]/[0.05] blur-[90px]"
        />

        {/* subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #050505 1px, transparent 1px),
              linear-gradient(to bottom, #050505 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          {/* breadcrumb */}
          <nav className="mb-12 flex items-center gap-2 text-sm text-[#A1A1AA]">
            <Link to="/" className="transition-colors hover:text-[#2563EB]">
              Home
            </Link>
            <span className="text-[#050505]/25">/</span>
            <Link to="/services" className="transition-colors hover:text-[#2563EB]">
              Services
            </Link>
            <span className="text-[#050505]/25">/</span>
            <span className="font-medium text-[#050505]">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-[#A1A1AA]">
              <span className="inline-block h-px w-8 bg-[#2563EB]" />
              SERVICE DETAILS
            </p>

            <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[#050505] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#71717A]">
              {service.summary}
            </p>

            <div className="mt-10">
              <Button
                to="/contact"
                className="!bg-[#2563EB] !px-7 !py-3.5 !text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:!bg-[#1D4ED8]"
              >
                Discuss this service
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Three pillars ── */}
      <section className="bg-[#F8F8F9] py-20 md:py-28">
        <Container>
          <div className="mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#050505] sm:text-4xl">
              How we approach it
            </h2>
            <p className="mt-4 text-lg text-[#71717A]">
              Clear outcomes, proven methods, and the right stack — every engagement is built around results.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <DetailCard
              title="Problems we solve"
              items={service.problems}
              index={0}
            />
            <DetailCard
              title="What you get"
              items={service.capabilities}
              index={1}
            />
            <DetailCard
              title="Technologies"
              items={service.technologies}
              index={2}
            />
          </div>
        </Container>
      </section>

      {/* ── Technologies highlight (if available) ── */}
      {service.technologies?.length > 0 && (
        <section className="border-y border-[#050505]/[0.06] bg-white py-16 md:py-20">
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-medium tracking-[0.2em] text-[#A1A1AA]">
                  TECH STACK
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#050505]">
                  Tools we use for this service
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

     {/* ── Pricing Section ── */}
    {service.pricing && (
      <PricingSection
        pricing={service.pricing}
        serviceTitle={service.title}
      />
    )}

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#1D4ED8]/15 blur-[90px]"
        />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 text-[11px] font-medium tracking-[0.22em] text-[#A1A1AA]">
              NEXT STEP
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to talk about {service.title.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#A1A1AA]">
              Share your goals and current challenges. We’ll respond with a clear point of view and recommended next steps.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                className="!bg-[#2563EB] !px-8 !py-3.5 !text-base !font-medium !text-white shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] transition-all hover:!bg-[#1D4ED8] hover:shadow-[0_0_60px_-8px_rgba(37,99,235,0.75)]"
              >
                Start a conversation
              </Button>
              <Button
                to="/services"
                variant="outline"
                className="!border-white/20 !px-6 !py-3.5 !text-white hover:!border-white/45 hover:!bg-white/5"
              >
                View all services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}