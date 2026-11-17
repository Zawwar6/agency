import { Link } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo title="Services" description="App, web, design and software development services." path="/services" />
      <Container className="py-24">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">Services</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="rounded-3xl border border-line p-8 transition hover:border-brand">
              <h2 className="font-display text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-muted">{service.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
