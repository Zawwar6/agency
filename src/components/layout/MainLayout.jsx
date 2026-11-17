import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../navigation/Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from '../common/ScrollToTop'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { pageTransition } from '../../lib/motionVariants'

export function MainLayout() {
  const { pathname } = useLocation()
  useSmoothScroll()

  return (
    <>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main id="main" key={pathname} {...pageTransition}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
