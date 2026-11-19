import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { navigation } from '../../data/navigation'
import { services } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'
import { menuPanel } from '../../lib/motionVariants'

const linkClass = ({ isActive }) => `transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`

function ServicesDropdown() {
  return (
    <ul className="invisible absolute left-0 top-full w-64 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      {services.map((service) => (
        <li key={service.slug}>
          <Link to={`/services/${service.slug}`} className="block rounded-xl px-4 py-2 hover:bg-tint">{service.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
      <Link to="/">   
      <img
        src="/DigitalFliper.png"
        alt="Digital Fliper"
        className="w-[170px] mt-5 h-auto object-contain"
      /></Link>


        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink to={item.to} className={linkClass}>{item.label}</NavLink>
              {item.hasDropdown && <ServicesDropdown />}
            </div>
          ))}
          <Button to={siteConfig.cta.to} className="!py-2">{siteConfig.cta.label}</Button>
        </nav>

        <button type="button" className="md:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" {...menuPanel} className="border-t border-line bg-white md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} onClick={close} className="py-3">{service.title}</Link>
              ))}
              <Link to="/contact" onClick={close} className="py-3 font-medium text-brand">{siteConfig.cta.label}</Link>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
