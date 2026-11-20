import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'
import { getServiceBySlug } from '../data/services'
import NotFound from './NotFound'
import PricingSection from '../components/services/PricingSection'

/* ─────────────────────────────────────────────
   Motion variants
───────────────────────────────────────────── */
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

/* ─────────────────────────────────────────────
   Sub components
───────────────────────────────────────────── */
function DetailCard({ title, items, index }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/[0.05] bg-white p-9 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]"
    >
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 transition-transform duration-700 ease-out group-hover:scale-x-100" />

      {/* glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/0 opacity-0 blur-3xl transition-all duration-700 group-hover:bg-blue-500/15 group-hover:opacity-100" />

      <div className="relative mb-9 flex items-start justify-between">
        <div>
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[13px] font-semibold tracking-wider text-blue-600 ring-1 ring-blue-100">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-[1.4rem] font-semibold tracking-tight text-neutral-900">
            {title}
          </h3>
        </div>
      </div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        className="relative flex flex-1 flex-col gap-4"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={listItem}
            className="flex gap-3.5 text-[15px] leading-relaxed text-neutral-600"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

function TechChip({ label }) {
  return (
    <motion.span
      variants={fadeUp}
      whileHover={{ y: -2, scale: 1.03 }}
      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700"
    >
      {label}
    </motion.span>
  )
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function ServiceDetails() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound />

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Seo
        title={service.title}
        description={service.summary}
        path={`/services/${service.slug}`}
      />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[88vh] overflow-hidden bg-white">
        {/* ambient lighting */}
        <div className="pointer-events-none absolute -right-32 -top-40 h-[50rem] w-[50rem] rounded-full bg-blue-500/[0.07] blur-[160px]" />
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-500/[0.05] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-blue-400/[0.04] blur-[100px]" />

        {/* grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <Container className="relative flex min-h-[88vh] flex-col justify-center pt-28 pb-24">
          {/* breadcrumb */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-16 flex items-center gap-2.5 text-sm text-neutral-400"
          >
            <Link to="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <span className="text-neutral-300">/</span>
            <Link to="/services" className="transition-colors hover:text-blue-600">
              Services
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="font-medium text-neutral-800">{service.title}</span>
          </motion.nav>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Service Details
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-2xl text-xl leading-relaxed text-neutral-500 sm:text-[1.35rem]"
            >
              {service.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-14 flex flex-wrap items-center gap-5">
              <Button
                to="/contact"
                className="group relative !overflow-hidden !rounded-full !bg-neutral-950 !px-9 !py-4 !text-white transition-all duration-300 hover:!bg-blue-600"
              >
                <span className="relative z-10 font-medium">Discuss this service</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Button>

              <Link
                to="/services"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                ← All services
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          APPROACH
      ══════════════════════════════════════ */}
      <section className="relative bg-black py-28 md:py-36">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20 max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white"
            >
              Approach
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              How we approach it
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-neutral-500"
            >
              Clear outcomes, proven methods, and the right stack — every engagement is built around results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 lg:grid-cols-3"
          >
            <DetailCard title="Problems we solve" items={service.problems} index={0} />
            <DetailCard title="What you get" items={service.capabilities} index={1} />
            <DetailCard title="Technologies" items={service.technologies} index={2} />
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════ */}
      {service.technologies?.length > 0 && (
        <section className="border-y border-neutral-100 bg-white py-20 md:py-24">
          <Container>
            <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Tech Stack
                </p>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-neutral-950">
                  Tools we use
                </h3>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {service.technologies.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════
          PRICING
      ══════════════════════════════════════ */}
      {service.pricing && (
        <PricingSection
          pricing={service.pricing}
          serviceTitle={service.title}
        />
      )}

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-neutral-950 py-32 md:py-40">
        {/* soft glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        <Container className="relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500"
            >
              Next Step
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Ready to talk about<br className="hidden sm:block" />
              {service.title.toLowerCase()}?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-400"
            >
              Share your goals and current challenges. We’ll respond with a clear point of view and recommended next steps.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                to="/contact"
                className="group relative !overflow-hidden !rounded-full !bg-white !px-10 !py-4 !text-neutral-950 transition-all duration-300 hover:!bg-blue-500 hover:!text-white"
              >
                <span className="relative z-10 font-medium">Start a conversation</span>
              </Button>

              <Button
                to="/services"
                variant="outline"
                className="!rounded-full !border-white/20 !px-8 !py-4 !text-white hover:!border-white/40 hover:!bg-white/5"
              >
                View all services
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  )
}