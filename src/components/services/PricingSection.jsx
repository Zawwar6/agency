import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { Button } from '../../components/common/Button'

export default function PricingSection({ pricing, serviceTitle }) {
  if (!pricing?.packages?.length) return null

  const isCustom = pricing.pricingType === 'Custom Quote'

  return (
    <section className="relative overflow-hidden bg-[#F8F8F9] py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-[#2563EB]">
            SIMPLE & TRANSPARENT PRICING
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-[#050505] sm:text-4xl">
            Invest in your next big idea.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#71717A]">
            Flexible packages designed around your goals.
            Choose the right plan for your {serviceTitle.toLowerCase()} project.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.packages.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                plan.popular
                  ? 'border-[#2563EB] shadow-[0_15px_50px_-20px_rgba(37,99,235,0.25)]'
                  : 'border-[#050505]/[0.08] shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2563EB] px-4 py-1.5 text-[10px] font-semibold tracking-wider text-white">
                  MOST POPULAR
                </span>
              )}

              <div>
                <p className="text-sm font-semibold text-[#71717A]">
                  {plan.name}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  {isCustom ? (
                    <span className="font-display text-3xl font-bold text-[#050505]">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-lg font-semibold text-[#050505]">
                        $
                      </span>
                      <span className="font-display text-5xl font-bold tracking-tight text-[#050505]">
                        {plan.price.toLocaleString('en-US')}
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-4 min-h-[48px] text-sm leading-relaxed text-[#71717A]">
                  {plan.description}
                </p>
              </div>

              <div className="my-7 h-px bg-[#050505]/[0.08]" />

              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-[#050505]">
                What's included
              </p>

              <ul className="flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#52525B]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3 w-3"
                      >
                        <path
                          d="M4 10.5L8 14L16 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                to={`/contact?service=${encodeURIComponent(serviceTitle)}&plan=${encodeURIComponent(plan.name)}`}
                className={`mt-9 w-full justify-center ${
                  plan.popular
                    ? '!bg-[#2563EB] !text-white hover:!bg-[#1D4ED8]'
                    : '!border !border-[#050505]/15 !bg-white !text-[#050505] hover:!border-[#2563EB] hover:!text-[#2563EB]'
                }`}
              >
                {isCustom ? 'Request a Quote' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#71717A]">
          Need something different?{' '}
          <Link
            to="/contact"
            className="font-semibold text-[#2563EB] hover:underline"
          >
            Let's discuss your requirements.
          </Link>
        </p>
      </Container>
    </section>
  )
}
