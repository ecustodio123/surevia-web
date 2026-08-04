import {
  ArrowRight,
  BadgeCheck,
  Car,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Container,
  FileCheck2,
  Globe2,
  Handshake,
  MapPinned,
  Menu,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './App.css'

import cargoPortImage from './assets/surevia/optimized/cargo-port-cranes.jpg'
import cargoShipImage from './assets/surevia/optimized/cargo-ship-harbor.jpg'
import carsRoadImage from './assets/surevia/optimized/cars-road.jpg'
import containerPortImage from './assets/surevia/optimized/container-port.jpg'
import contenedoresImg from './assets/surevia/surevia_imagen-05.png'

const navigation = [
  { label: 'Inicio', path: '/home' },
  { label: 'Diagnóstico', path: '/diagnostico' },
  { label: 'Coberturas', path: '/coberturas' },
  { label: 'Respaldo', path: '/respaldo' },
  { label: 'Contacto', path: '/contacto' },
]

const coverageItems = [
  {
    icon: Container,
    title: 'Carga seca',
    text: 'Cobertura puerta a puerta ante averías, robo, asalto, guerra y huelgas.',
    image: cargoPortImage,
  },
  {
    icon: Globe2,
    title: 'Cargas perecibles',
    text: 'Todo riesgo con refrigeración, cold treatment y continuidad de seguro.',
    image: cargoShipImage,
  },
  {
    icon: Truck,
    title: 'Transporte local',
    text: 'Protección para cargas nacionalizadas o movilizadas dentro del Perú.',
    image: carsRoadImage,
  },
  {
    icon: FileCheck2,
    title: 'RC frente al MTC',
    text: 'Responsabilidad civil para agentes de carga ante errores u omisiones.',
    image: containerPortImage,
  },
  {
    icon: ClipboardCheck,
    title: 'Caución frente a SUNAT',
    text: 'Asesoría y emisión de pólizas caución para agencias de carga.',
    image: containerPortImage,
  },
  {
    icon: BadgeCheck,
    title: 'Contenedores',
    text: 'Cobertura del contenedor desde puerto hasta su devolución.',
    image: contenedoresImg,
  },
  {
    icon: Car,
    title: 'Seguro vehicular',
    text: 'Protección para unidades vinculadas a la operación logística.',
    image: carsRoadImage,
  },
]

const otherCoverageItems = [
  {
    icon: Container,
    title: 'Stock only',
    text: 'Cobertura para mercadería almacenada en puntos definidos.',
  },
  {
    icon: Car,
    title: 'Seguro vehicular',
    text: 'Protección para unidades vinculadas a la operación logística.',
  },
  {
    icon: Globe2,
    title: 'Seguro de viaje',
    text: 'Asistencia y protección para viajes corporativos o personales.',
  },
  {
    icon: ShieldCheck,
    title: 'Entre otros',
    text: 'Evaluamos coberturas adicionales según el tipo de operación.',
  },
]

const insuranceOptions = [...new Map([...coverageItems, ...otherCoverageItems].map((item) => (
  [item.title, item]
))).values()]

const whatsappNumber = '51974630063'
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hola, quiero solicitar un diagnóstico para mi operación logística.',
)}`

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'WhatsApp', href: whatsappHref, icon: FaWhatsapp },
]

function AnimatedYears() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 900
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(progress * 10))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return <>{value}</>
}

function BrandMark() {
  return (
    <Link className="brand" to="/home" aria-label="Surevia Group inicio">
      <span className="brand-logo" aria-hidden="true" />
    </Link>
  )
}

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1250)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="site-shell">
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
            <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

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
            <Route path="/home" element={<HomePage />} />
            <Route path="/diagnostico" element={<DiagnosticPage />} />
            <Route path="/coberturas" element={<CoveragePage />} />
            <Route path="/respaldo" element={<TrustPage />} />
            <Route path="/contacto" element={<ContactPage />} />
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

function AppLoader() {
  return (
    <motion.div
      className="app-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
      aria-label="Cargando Surevia Group"
    >
      <motion.div
        className="loader-card"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="loader-logo" aria-hidden="true" />
        <span className="loader-bar" aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <BrandMark />
        <p>Cargo Risk Management para operaciones logísticas y comercio exterior.</p>
        <div className="social-links" aria-label="Redes sociales">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-links">
        {navigation.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="footer-contact">
        <a href="mailto:gerencia@sureviagroup.com">gerencia@sureviagroup.com</a>
        <a href="tel:+51974630063">+51 974 630 063</a>
      </div>
    </footer>
  )
}

function PageCTA({
  eyebrow = 'Solicita un diagnóstico',
  title = 'Cuéntanos qué necesitas proteger y armemos la cobertura correcta.',
}) {
  return (
    <section className="page-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <Link className="primary-action" to="/contacto">
        Ir al formulario <ArrowRight size={18} />
      </Link>
    </section>
  )
}

function HomePage() {
  const proofPoints = [
    ['years', 'experiencia en seguros de carga'],
    ['A medida', 'según tu operación'],
    ['Lloyd’s', 'respaldo para logística internacional'],
  ]
  const riskPoints = [
    'Un retraso cuesta dinero.',
    'Un incidente rompe confianza.',
    'Una cobertura genérica deja expuesta la operación.',
  ]
  const featuredCoverage = coverageItems.slice(0, 3)

  return (
    <div className="home-page">
      <section className="hero-page">
        <div className="hero-copy">
          <p className="eyebrow">Cargo Risk Management</p>
          <h1>
            Protege tu operación logística.
          </h1>
          <p className="lead">
            En logística, un imprevisto en ruta, almacén o distribución no solo cuesta dinero:
            también pone en juego la continuidad del negocio. Surevia diseña estrategias de
            protección según la realidad de cada operación.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/diagnostico">
              Solicitar diagnóstico <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" to="/coberturas">
              Ver coberturas
            </Link>
          </div>

          <div className="proof-strip" aria-label="Indicadores de confianza">
            {proofPoints.map(([value, label]) => (
              <div key={value}>
                <strong>{value === 'years' ? <><AnimatedYears /> años</> : value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img src={containerPortImage} alt="Puerto de contenedores visto desde el aire" />
          <span className="hero-company-logo" aria-label="Surevia Group" />
          <div className="floating-proof">
            <ShieldCheck size={22} />
            <span>
              <AnimatedYears /> años protegiendo carga internacional
            </span>
          </div>
        </div>
      </section>

      <section className="home-steps" aria-labelledby="home-steps-title">
        <div className="steps-heading">
          <p className="eyebrow">Cómo protegemos tu operación</p>
          <h2 id="home-steps-title">Tres pasos para convertir el riesgo en una estrategia.</h2>
        </div>
        <div className="steps-layout">
          <article className="risk-step step-card">
            <span className="step-number">01</span>
            <div>
              <p className="eyebrow">El riesgo logístico</p>
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
              <Link className="text-link" to="/diagnostico">
                Ver enfoque <ArrowRight size={17} />
              </Link>
            </article>

            <article className="step-card coverage-step">
              <span className="step-number">03</span>
              <div className="section-heading-row">
                <div>
                  <p className="eyebrow">Coberturas</p>
                  <h3>Soluciones para operaciones reales.</h3>
                </div>
                <Link className="text-link" to="/coberturas">
                  Ver todas <ArrowRight size={17} />
                </Link>
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

function DiagnosticPage() {
  const steps = [
    ['01', 'Levantamiento operativo', 'Identificamos rutas, tipo de mercadería, almacenaje, incoterms y puntos críticos.'],
    ['02', 'Mapa de exposición', 'Traducimos la operación en riesgos concretos.'],
    ['03', 'Estrategia a medida', 'Diseñamos la cobertura que realmente responde.'],
  ]

  return (
    <section className="content-page diagnostic-page">
      <div className="page-heading">
        <p className="eyebrow">Diagnóstico antes que cotización</p>
        <h1>¿Cómo estás administrando los riegos? Cuéntanos</h1>
        <p className="lead">
          Comprar un seguro por cumplir es fácil. Diseñar una estrategia que proteja la
          operación requiere experiencia.
        </p>
      </div>

      <article className="risk-card">
        <div>
          <p className="eyebrow">Riesgo operativo</p>
          <h2>Una sola falla puede detenerlo todo.</h2>
        </div>
        <div className="risk-copy">
          <p>
            Un imprevisto en ruta, almacén o distribución no solo cuesta dinero: pone en
            juego la confianza de tus clientes.
          </p>
          <p>
            Cada operación enfrenta desafíos distintos. Por eso blindamos tu negocio con
            coberturas según tu modelo operativo.
          </p>
        </div>
      </article>

      <div className="process-grid">
        {steps.map(([number, title, text]) => (
          <article className="process-card" key={title}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="statement-band">
        <p>
          Nuestro enfoque no empieza con una cotización. Empieza con entender cómo se mueve
          tu carga y dónde se expone.
        </p>
      </div>

      <PageCTA />
    </section>
  )
}

function CoveragePage() {
  const [activeCoverageIndex, setActiveCoverageIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const coverageStep = 3
  const coverageGroupStarts = Array.from(
    { length: Math.ceil(coverageItems.length / coverageStep) },
    (_, index) => (index * coverageStep) % coverageItems.length,
  )
  const visibleCoverages = Array.from({ length: 3 }, (_, index) => {
    const coverageIndex = (activeCoverageIndex + index) % coverageItems.length
    return {
      ...coverageItems[coverageIndex],
      number: coverageIndex + 1,
    }
  })
  const goToCoverage = (direction) => {
    setActiveCoverageIndex((current) => (
      (current + (direction * coverageStep) + coverageItems.length) % coverageItems.length
    ))
  }

  useEffect(() => {
    if (isCarouselPaused) return undefined

    const timer = window.setInterval(() => {
      goToCoverage(1)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [isCarouselPaused])

  return (
    <section className="content-page">
      <div className="page-heading compact">
        <p className="eyebrow">Coberturas especializadas</p>
        <h1>Protección diseñada para la cadena logística.</h1>
      </div>

      <section
        className="coverage-carousel"
        aria-label="Coberturas principales"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        <div className="carousel-topline">
          <div>
            <p className="eyebrow">Soluciones principales</p>
            <h2>Coberturas para operaciones reales.</h2>
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

        <div className="carousel-dots" aria-label="Seleccionar grupo de coberturas">
          {coverageGroupStarts.map((startIndex, index) => (
            <button
              className={startIndex === activeCoverageIndex ? 'is-active' : ''}
              key={`coverage-dot-group-${startIndex}`}
              type="button"
              onClick={() => setActiveCoverageIndex(startIndex)}
              aria-label={`Ver grupo ${index + 1} de coberturas`}
              aria-current={startIndex === activeCoverageIndex ? 'true' : undefined}
            />
          ))}
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

function TrustPage() {
  return (
    <section className="content-page trust-page">

      <article className="about-card">
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2>El socio estratégico que protege el movimiento de tus mercancías.</h2>
        </div>
        <p>
          Llevamos 10 años transformando la gestión de riesgos en una ventaja competitiva
          para agencias de carga, aduanas y comercio exterior. Diseñamos soluciones para
          operar y crecer con tranquilidad.
        </p>
      </article>

      <div className="trust-grid">
        <article>
          <Handshake size={24} />
          <h2>Lloyd's</h2>
          <p>Acceso a un mercado especializado en riesgos logísticos complejos.</p>
        </article>
        <article>
          <MapPinned size={24} />
          <h2>Jurisdicción en Perú</h2>
          <p>Reclamaciones sujetas a jueces y tribunales del país.</p>
        </article>
        <article>
          <ShieldCheck size={24} />
          <h2>Gestión de siniestros</h2>
          <p>Atención personalizada para proteger cada embarque.</p>
        </article>
      </div>

      <article className="jurisdiction-feature">
        <div className="jurisdiction-copy">
          <p className="eyebrow">Beneficio exclusivo</p>
          <h2>Jurisdicción en Perú</h2>
          <p>
            Toda reclamación respecto a la operatividad, ejecución, alcances y coberturas
            de los seguros colocados en el Perú queda sujeta a la jurisdicción y
            competencia de jueces y tribunales de la República del Perú.
          </p>
        </div>
      </article>

      <PageCTA
        eyebrow="Hablemos con contexto"
        title="Comparte los datos de tu operación y conversemos sobre la mejor estrategia."
      />
    </section>
  )
}

function ContactPage() {
  const handleContactSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hola, quiero solicitar un diagnóstico.',
      `Nombre: ${data.get('nombre') || ''} ${data.get('apellido') || ''}`.trim(),
      `Correo: ${data.get('correo') || ''}`,
      `Teléfono: ${data.get('telefono') || ''}`,
      `Seguro de interés: ${data.get('seguro') || ''}`,
      `Detalle: ${data.get('detalle') || ''}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="content-page contact-page">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Hablemos de tu operación</p>
          <h1>Blindemos tu negocio antes de que el riesgo aparezca.</h1>
          <p className="lead">
            Cuéntanos qué necesitas proteger y te ayudamos a orientar la cobertura.
          </p>
        </div>
        <div className="contact-card">
          <p>Victoria Goicochea</p>
          <strong>Business Developer</strong>
          <a href="mailto:gerencia@sureviagroup.com">gerencia@sureviagroup.com</a>
          <a href="tel:+51974630063">+51 974 630 063</a>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <label>
              Nombre
              <input name="nombre" type="text" autoComplete="given-name" />
            </label>
            <label>
              Apellido
              <input name="apellido" type="text" autoComplete="family-name" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Correo
              <input name="correo" type="email" autoComplete="email" />
            </label>
            <label>
              Teléfono
              <input name="telefono" type="tel" autoComplete="tel" />
            </label>
          </div>
          <label>
            Seguro de interés
            <select name="seguro">
              <option value="">Selecciona una cobertura</option>
              {insuranceOptions.map(({ title }) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Detalle de la operación
            <textarea
              name="detalle"
              rows="5"
              placeholder="Cuéntanos sobre la carga, ruta, frecuencia o necesidad principal."
            />
          </label>
          <button className="primary-action form-submit" type="submit">
            Enviar solicitud <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default App
