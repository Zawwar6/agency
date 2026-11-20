import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { navigation } from '../../data/navigation'
import { services } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'
import { menuPanel } from '../../lib/motionVariants'

const linkClass = ({ isActive }) => (
  `inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
    isActive ? 'bg-tint text-brand' : 'text-ink hover:bg-tint hover:text-brand'
  }`
)

function ServicesDropdown() {
  return (
    <ul className="invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl shadow-slate-900/10 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {services.map((service) => (
        <li key={service.slug}>
          <Link
            to={`/services/${service.slug}`}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-tint hover:text-brand"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-brand hover:bg-tint hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => window.localStorage.getItem('theme') === 'dark')
  const close = () => setOpen(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[68px] items-center justify-between rounded-2xl border border-line bg-white/90 px-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-5">
          <Link
            to="/"
            className="navbar-brand flex h-12 w-[142px] shrink-0 items-center justify-center overflow-hidden rounded-xl sm:w-[158px]"
            aria-label="Digital Fliper home"
            onClick={close}
          >
            <img
              src="/DigitalFliper.png"
              alt="Digital Fliper"
              className="h-12 w-full object-cover object-center"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <div key={item.to} className="group relative">
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={15} aria-hidden="true" />}
                </NavLink>
                {item.hasDropdown && <ServicesDropdown />}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark((value) => !value)} />
            <Button
              to={siteConfig.cta.to}
              className="hidden !min-h-11 !items-center !gap-2 !py-2.5 md:!inline-flex"
            >
              {siteConfig.cta.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full bg-tint text-ink transition hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile"
              {...menuPanel}
              className="mt-2 overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-slate-900/10 md:hidden"
            >
              <Container className="px-3 py-3">
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        onClick={close}
                        className={({ isActive }) => (
                          `flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors ${
                            isActive ? 'bg-tint text-brand' : 'text-ink hover:bg-tint hover:text-brand'
                          }`
                        )}
                      >
                        {item.label}
                        {item.hasDropdown && <ChevronDown size={16} aria-hidden="true" />}
                      </NavLink>
                      {item.hasDropdown && (
                        <ul className="mb-2 ml-4 space-y-1 border-l border-line pl-3">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                to={`/services/${service.slug}`}
                                onClick={close}
                                className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-tint hover:text-brand"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  to={siteConfig.cta.to}
                  onClick={close}
                  className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-5 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {siteConfig.cta.label}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
