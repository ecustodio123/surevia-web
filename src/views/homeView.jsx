import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { AnimatedYears } from '../components/animatedYears'
import { AppLink } from '../components/appLink'
import { PageCTA } from '../components/pageCta'
import { coverageItems, homeSlides } from '../data/siteData'

export function HomeView({ countersReady }) {
  const [activeHomeSlide, setActiveHomeSlide] = useState(0)
  const activeSlide = homeSlides[activeHomeSlide]
  const goToHomeSlide = (direction) => {
    setActiveHomeSlide((current) => (
      (current + direction + homeSlides.length) % homeSlides.length
    ))
  }
  const proofPoints = [
    {
      key: 'years',
      path: '/respaldo',
      label: '+ de 10 años de trayectoria',
      content: (
        <>
          <strong><AnimatedYears start={countersReady} /></strong>
          <small>de trayectoria</small>
        </>
      ),
    },
    {
      key: 'coverage',
      path: '/coberturas',
      label: 'Coberturas nacionales e internacionales',
      content: (
        <>
          <strong>Coberturas</strong>
          <small>nacionales e internacionales</small>
        </>
      ),
    },
    {
      key: 'lloyds',
      path: '/respaldo',
      label: 'Respaldado por Lloyd’s',
      content: (
        <>
          <small>Respaldado por </small>
          <strong>Lloyd’s</strong>
        </>
      ),
    },
  ]
  const riskPoints = [
    'Un retraso cuesta dinero.',
    'Un incidente rompe confianza.',
    'Una cobertura genérica deja expuesta la operación.',
  ]
  const featuredCoverage = coverageItems.slice(0, 3)

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToHomeSlide(1)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero-carousel" aria-label="Presentación principal">
        <AnimatePresence initial={false}>
          <motion.picture
            className="home-hero-picture"
            key={activeSlide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <source media="(max-width: 900px)" srcSet={activeSlide.mobileImage} />
            <img className="home-hero-image" src={activeSlide.image} alt="" />
          </motion.picture>
        </AnimatePresence>

        <div className="home-hero-content">
          <h1>{activeSlide.title}</h1>
          <AppLink className="hero-info-button" to="/diagnostico">
            {activeSlide.cta}
          </AppLink>
        </div>

        <div className="home-hero-controls" aria-label="Indicadores principales">
          {proofPoints.map(({ key, path, label, content }) => (
            <AppLink aria-label={label} className="hero-proof-card" key={key} to={path}>
              <span>{content}</span>
              <ArrowRight size={22} />
            </AppLink>
          ))}
        </div>

        <div className="home-hero-links">
          <AppLink className="is-primary" to="/diagnostico">
            Diagnóstico
          </AppLink>
          <AppLink to="/coberturas">
            <span className="desktop-label">Coberturas</span>
            <span className="mobile-label">Servicios</span>
          </AppLink>
          <AppLink to="/contacto">
            Contacto
          </AppLink>
        </div>

        <div className="home-hero-dots" aria-label="Seleccionar imagen principal">
          {homeSlides.map((slide, index) => (
            <button
              className={index === activeHomeSlide ? 'is-active' : ''}
              key={slide.image}
              type="button"
              onClick={() => setActiveHomeSlide(index)}
              aria-label={`Ver imagen ${index + 1}`}
              aria-current={index === activeHomeSlide ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="home-hero-arrows">
          <button
            type="button"
            onClick={() => goToHomeSlide(-1)}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => goToHomeSlide(1)}
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </section>

      <section className="home-steps" aria-labelledby="home-steps-title">
        <div className="steps-heading" style={{marginTop: '3rem'}}>
          <p className="eyebrow">Cómo protegemos tu operación</p>
          <h2 id="home-steps-title">Tres pasos para convertir el riesgo en una estrategia.</h2>
        </div>
        <div className="steps-layout">
          <article className="risk-step step-card">
            <span className="step-number">01</span>
            <div>
              <p className="eyebrow">Conocer la operación logistica</p>
              <h3>Una sola falla puede cambiar toda la operación.</h3>
            </div>
            <div className="risk-pill-list">
              {riskPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </article>

          <div className="steps-pair">
            <article className="step-card diagnostic-step">
              <span className="step-number">02</span>
              <p className="eyebrow">Diagnóstico</p>
              <h3>Entendemos cómo se mueve tu carga.</h3>
              <p>Mapeamos rutas, carga y puntos críticos para construir una cobertura útil.</p>
              <AppLink className="text-link" to="/diagnostico">
                Ver enfoque <ArrowRight size={17} />
              </AppLink>
            </article>

            <article className="step-card coverage-step">
              <span className="step-number">03</span>
              <div className="section-heading-row">
                <div>
                  <p className="eyebrow">Coberturas</p>
                  <h3>Soluciones para operaciones reales.</h3>
                </div>
                <AppLink className="text-link" to="/coberturas">
                  Ver todas <ArrowRight size={17} />
                </AppLink>
              </div>
              <div className="home-coverage-list">
                {featuredCoverage.map(({ icon: Icon, title, text }) => (
                  <div key={title}>
                    <Icon size={20} />
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Siguiente paso"
        title="Diseñemos una estrategia para proteger tu operación logística."
      />
    </div>
  )
}
