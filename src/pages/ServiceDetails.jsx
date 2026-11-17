import { useParams } from 'react-router-dom'
import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'
import { getServiceBySlug } from '../data/services'
import NotFound from './NotFound'

function BulletSection({ title, items }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <ul className="mt-4 space-y-2 text-muted">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound />

  return (
    <>
      <Seo title={service.title} description={service.summary} path={`/services/${service.slug}`} />
      <Container className="py-24">
        <h1 className="font-display text-5xl font-bold sm:text-6xl">{service.title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted">{service.summary}</p>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <BulletSection title="Problems we solve" items={service.problems} />
          <BulletSection title="What you get" items={service.capabilities} />
          <BulletSection title="Technologies" items={service.technologies} />
        </div>
        <Button to="/contact" className="mt-16">Discuss {service.title.toLowerCase()}</Button>
      </Container>
    </>
  )
}
