import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'

export default function NotFound() {
  return (
    <Container className="py-32">
      <Seo title="Page not found" description="This page does not exist." path="/404" />
      <h1 className="font-display text-6xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The page may have moved. Start again from the homepage.</p>
      <Button to="/" className="mt-8">Go to homepage</Button>
    </Container>
  )
}
