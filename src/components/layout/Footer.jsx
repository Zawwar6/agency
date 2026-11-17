import { Link } from 'react-router-dom'
import { Container } from '../common/Container'
import { services } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-white">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-white/70">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Services">
          <ul className="space-y-2 text-white/80">
            {services.map((service) => (
              <li key={service.slug}><Link className="hover:text-sky" to={`/services/${service.slug}`}>{service.title}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="space-y-2 not-italic text-white/80">
          <p><a className="hover:text-sky" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.address}</p>
        </address>
      </Container>
    </footer>
  )
}
