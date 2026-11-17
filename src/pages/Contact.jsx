import { useState } from 'react'
import { Seo } from '../components/common/Seo'
import { Container } from '../components/common/Container'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import { submitInquiry } from '../lib/submitInquiry'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 20
const inputClass = 'w-full rounded-xl border border-line px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand'
const initialValues = { name: '', email: '', company: '', service: '', budget: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!emailPattern.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.service) errors.service = 'Choose a service.'
  if (values.message.trim().length < MIN_MESSAGE_LENGTH) errors.message = `Describe your project in at least ${MIN_MESSAGE_LENGTH} characters.`
  return errors
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block font-medium">{label}</span>
      {children}
      {error && <span role="alert" className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    try {
      await submitInquiry(values)
      setStatus({ type: 'success', message: 'Thanks. We will reply soon.' })
      setValues(initialValues)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  return (
    <>
      <Seo title="Contact" description="Tell us about your project." path="/contact" />
      <Container className="grid gap-16 py-24 md:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Tell us about your project</h1>
          <p className="mt-6 text-muted">Or write to <a className="text-brand underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Field label="Name" error={errors.name}><input className={inputClass} name="name" value={values.name} onChange={handleChange} autoComplete="name" /></Field>
          <Field label="Email" error={errors.email}><input className={inputClass} type="email" name="email" value={values.email} onChange={handleChange} autoComplete="email" /></Field>
          <Field label="Company"><input className={inputClass} name="company" value={values.company} onChange={handleChange} autoComplete="organization" /></Field>
          <Field label="Service" error={errors.service}>
            <select className={inputClass} name="service" value={values.service} onChange={handleChange}>
              <option value="">Select a service</option>
              {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
            </select>
          </Field>
          <Field label="Budget"><input className={inputClass} name="budget" value={values.budget} onChange={handleChange} /></Field>
          <Field label="Project description" error={errors.message}><textarea className={inputClass} rows={5} name="message" value={values.message} onChange={handleChange} /></Field>
          <button type="submit" className="min-h-11 rounded-full bg-brand px-8 py-3 font-medium text-white hover:bg-blue-700">Send inquiry</button>
          {status.message && <p role="status" className={status.type === 'error' ? 'text-red-600' : 'text-brand'}>{status.message}</p>}
        </form>
      </Container>
    </>
  )
}
