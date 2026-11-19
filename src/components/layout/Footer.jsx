import { Link } from 'react-router-dom'
import { Container } from '../common/Container'
import { services } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  return (
    <footer className="bg-white py-16 text-black">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/">   
          <img
            src="/DigitalFliper.png"
            alt="Digital Fliper"
            className="w-[180px] mt-5 h-auto object-contain"
          /></Link>
        </div>
        <nav aria-label="Services">
          <ul className="space-y-2 text-black">
            {services.map((service) => (
              <li key={service.slug}><Link className="hover:text-sky" to={`/services/${service.slug}`}>{service.title}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="space-y-2 not-italic text-black">
          <p><a className="text-black" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.address}</p>
        </address>
      </Container>
    </footer>
  )
}
