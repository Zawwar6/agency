import { Link } from 'react-router-dom'
import { Container } from '../common/Container'
import { services } from '../../data/services'

export function ServicesPreview() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">What we build</h2>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to={`/services/${service.slug}`} className="group grid gap-2 py-8 md:grid-cols-2 md:items-center">
                <span className="font-display text-3xl font-bold transition-colors group-hover:text-brand">{service.title}</span>
                <span className="text-muted">{service.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
