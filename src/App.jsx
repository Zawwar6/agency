import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
