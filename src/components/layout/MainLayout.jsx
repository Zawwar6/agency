import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../navigation/Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from '../common/ScrollToTop'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

export function MainLayout() {
  const { pathname } = useLocation()
  useSmoothScroll()

  return (
    <>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading page">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand" aria-hidden="true" />
          </div>
        }
      >
        <main id="main" key={pathname}>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  )
}
