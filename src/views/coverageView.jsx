import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { PageCTA } from '../components/pageCta'
import { coverageItems, otherCoverageItems } from '../data/siteData'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function CoverageView() {
  const [activeCoverageIndex, setActiveCoverageIndex] = useState(0)
  const isMobileCoverage = useMediaQuery('(max-width: 900px)')
  const coverageStep = isMobileCoverage ? 1 : 3
  const coverageGroupStarts = useMemo(
    () => Array.from(
      { length: Math.ceil(coverageItems.length / coverageStep) },
      (_, index) => (index * coverageStep) % coverageItems.length,
    ),
    [coverageStep],
  )
  const visibleCoverages = Array.from({ length: 3 }, (_, index) => {
    const coverageIndex = (activeCoverageIndex + index) % coverageItems.length
    return {
      ...coverageItems[coverageIndex],
      number: coverageIndex + 1,
    }
  })
  const goToCoverage = useCallback((direction) => {
    setActiveCoverageIndex((current) => (
      (current + (direction * coverageStep) + coverageItems.length) % coverageItems.length
    ))
  }, [coverageStep])

  useEffect(() => {
    setActiveCoverageIndex((current) => (
      coverageGroupStarts.includes(current)
        ? current
        : Math.floor(current / coverageStep) * coverageStep
    ))
  }, [coverageGroupStarts, coverageStep])

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToCoverage(1)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [goToCoverage])

  return (
    <section className="content-page">
      <div className="page-heading compact">
        <p className="eyebrow">Coberturas especializadas</p>
        <h1>Protección diseñada para la cadena logística.</h1>
      </div>

      <section
        className="coverage-carousel"
        aria-label="Coberturas principales"
      >
        <div className="carousel-topline">
          <div>
            <p className="eyebrow">Soluciones principales</p>
            <h2>Coberturas para operaciones reales.</h2>
          </div>
        </div>

        <div className="carousel-window">
          <AnimatePresence mode="wait">
            <motion.div
              className="coverage-slide-page"
              key={activeCoverageIndex}
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -34 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {visibleCoverages.map(({ icon: Icon, image, title, text, number }) => (
                <article className="coverage-slide-card" key={`${activeCoverageIndex}-${title}`}>
                  <img src={image} alt={title} />
                  <div className="coverage-slide-copy">
                    <span>{String(number).padStart(2, '0')}</span>
                    <Icon size={22} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-dots" aria-label="Seleccionar coberturas">
          {coverageGroupStarts.map((startIndex, index) => (
            <button
              className={startIndex === activeCoverageIndex ? 'is-active' : ''}
              key={`coverage-dot-group-${startIndex}`}
              type="button"
              onClick={() => setActiveCoverageIndex(startIndex)}
              aria-label={isMobileCoverage
                ? `Ver cobertura ${index + 1}`
                : `Ver grupo ${index + 1} de coberturas`}
              aria-current={startIndex === activeCoverageIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <div className="carousel-actions">
          <button
            type="button"
            onClick={() => goToCoverage(-1)}
            aria-label="Grupo anterior de coberturas"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goToCoverage(1)}
            aria-label="Siguiente grupo de coberturas"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section className="other-coverages">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Otros seguros</p>
            <h2>Opciones complementarias para cerrar brechas de protección.</h2>
          </div>
        </div>
        <div className="coverage-list">
          {otherCoverageItems.map(({ icon: Icon, title, text }) => (
            <article className="coverage-card" key={title}>
              <Icon size={22} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCTA
        eyebrow="Elige tu cobertura"
        title="Te ayudamos a encontrar el seguro que responde a tu operación."
      />
    </section>
  )
}
