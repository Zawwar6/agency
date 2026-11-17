import { Link } from 'react-router-dom'
import { Container } from '../common/Container'
import { services } from '../../data/services'

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Very subtle blue ambient glow (top right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#2563EB]/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#1D4ED8]/[0.05] blur-[80px]"
      />

      <Container className="relative">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-[#A1A1AA]">
            <span className="inline-block h-px w-8 bg-[#2563EB]" />
            WHAT WE BUILD
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#050505] sm:text-5xl lg:text-[3.25rem]">
            Capabilities that
            <br className="hidden sm:block" />
            move the needle
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#A1A1AA]">
            From first prototype to production-scale platforms — we design and engineer digital products that perform.
          </p>
        </div>

        {/* Services list */}
        <ul className="mt-16 divide-y divide-[#050505]/[0.08] border-y border-[#050505]/[0.08]">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                to={`/services/${service.slug}`}
                className="group relative flex flex-col gap-3 py-9 transition-colors md:flex-row md:items-center md:justify-between md:gap-12"
              >
                {/* Number + Title */}
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="font-mono text-sm tabular-nums text-[#A1A1AA] transition-colors group-hover:text-[#2563EB]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-[#050505] transition-colors group-hover:text-[#2563EB] sm:text-3xl">
                    {service.title}
                  </span>
                </div>

                {/* Summary + Arrow */}
                <div className="flex items-center justify-between gap-6 md:max-w-md md:justify-end">
                  <p className="text-[15px] leading-relaxed text-[#A1A1AA] transition-colors group-hover:text-[#050505]/70 md:text-right">
                    {service.summary}
                  </p>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#050505]/10 text-[#050505] transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Hover underline accent */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional bottom CTA */}
        <div className="mt-14 flex justify-end">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#050505] transition-colors hover:text-[#2563EB]"
          >
            View all services
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}