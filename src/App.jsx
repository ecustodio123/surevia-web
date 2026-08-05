import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './App.css'

import { AppLoader } from './components/appLoader'
import { BrandMark } from './components/brandMark'
import { Footer } from './components/footer'
import { ScrollProgressBar } from './components/scrollProgressBar'
import { navigation, whatsappHref } from './data/siteData'
import { scrollToPageTop } from './utils/scrollToPageTop'
import { ContactView } from './views/contactView'
import { CoverageView } from './views/coverageView'
import { DiagnosticView } from './views/diagnosticView'
import { HomeView } from './views/homeView'
import { TrustView } from './views/trustView'

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [countersReady, setCountersReady] = useState(false)
  const isDiagnosticRoute = location.pathname === '/diagnostico'
  const isCoverageRoute = location.pathname === '/coberturas'
  const shellClassName = [
    'site-shell',
    isDiagnosticRoute ? 'site-shell-diagnostic' : '',
    isCoverageRoute ? 'site-shell-coverage' : '',
  ].filter(Boolean).join(' ')

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1250)
    const counterTimer = window.setTimeout(() => {
      setCountersReady(true)
    }, 1600)

    return () => {
      window.clearTimeout(loaderTimer)
      window.clearTimeout(counterTimer)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    scrollToPageTop()
  }, [location.pathname])

  return (
    <div className={shellClassName}>
      <AnimatePresence>
        {isLoading && <AppLoader />}
      </AnimatePresence>

      <header className="site-header">
        <BrandMark />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                setMenuOpen(false)
                window.setTimeout(scrollToPageTop, 0)
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <ScrollProgressBar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeView countersReady={countersReady} />} />
            <Route path="/diagnostico" element={<DiagnosticView />} />
            <Route path="/coberturas" element={<CoverageView />} />
            <Route path="/respaldo" element={<TrustView />} />
            <Route path="/contacto" element={<ContactView />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}

export default App
