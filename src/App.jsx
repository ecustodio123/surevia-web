import {
  ArrowRight,
  BadgeCheck,
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
import { useState } from 'react'
import './App.css'

import containersImage from './assets/surevia/logistics-containers.png'
import dryCargoImage from './assets/surevia/dry-cargo.png'
import localTransportImage from './assets/surevia/local-transport.png'
import containersPolicyImage from './assets/surevia/containers.png'
import jurisdictionImage from './assets/surevia/jurisdiction.png'

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
    text: 'Protección de puerta a puerta frente a accidentes, averías, robo, asalto, guerra y huelgas.',
  },
  {
    icon: Globe2,
    title: 'Cargas perecibles',
    text: 'Cobertura todo riesgo con cláusula de refrigeración, cold treatment y continuidad de seguro.',
  },
  {
    icon: Truck,
    title: 'Transporte local',
    text: 'Continuidad de cobertura para cargas nacionalizadas, CIF o movilizadas dentro del territorio peruano.',
  },
  {
    icon: FileCheck2,
    title: 'RC frente al MTC',
    text: 'Producto diseñado para agentes de carga ante errores u omisiones que repercutan en terceros.',
  },
  {
    icon: ClipboardCheck,
    title: 'Caución frente a SUNAT',
    text: 'Asesoría y emisión de pólizas caución para agencias de carga, según evaluación financiera.',
  },
  {
    icon: BadgeCheck,
    title: 'Contenedores',
    text: 'Protección del viaje del contenedor desde puerto hasta devolución, incluyendo daños físicos y limpieza.',
  },
]

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

  return (
    <div className="site-shell">
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
    </div>
  )
}

function HomePage() {
  const proofPoints = [
    ['10 años', 'transformando riesgos en ventaja competitiva'],
    ['A medida', 'coberturas según el modelo operativo'],
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
            Cuando una falla detiene la operación, la cobertura correcta sostiene la confianza.
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
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img src={containersImage} alt="Operación logística con contenedores" />
          <div className="floating-proof">
            <ShieldCheck size={22} />
            <span>10 años protegiendo carga internacional</span>
          </div>
        </div>
      </section>

      <section className="home-risk-panel" aria-labelledby="home-risk-title">
        <div>
          <p className="eyebrow">El riesgo logístico</p>
          <h2 id="home-risk-title">Una sola falla puede cambiar toda la operación.</h2>
        </div>
        <div className="risk-pill-list">
          {riskPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="home-preview-grid">
        <article className="home-diagnostic-card">
          <p className="eyebrow">Diagnóstico</p>
          <h2>Antes de cotizar, entendemos cómo se mueve tu carga.</h2>
          <p>
            Mapeamos rutas, mercadería, almacenes, responsabilidades e imprevistos para
            construir una estrategia que responda cuando las cosas salen mal.
          </p>
          <Link className="text-link" to="/diagnostico">
            Ver enfoque <ArrowRight size={17} />
          </Link>
        </article>

        <article className="home-coverage-card">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Coberturas</p>
              <h2>Soluciones para operaciones reales.</h2>
            </div>
            <Link className="text-link" to="/coberturas">
              Ver todas <ArrowRight size={17} />
            </Link>
          </div>
          <div className="home-coverage-list">
            {featuredCoverage.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="home-cta">
        <p className="eyebrow">Siguiente paso</p>
        <h2>Diseñemos una estrategia para proteger tu operación logística.</h2>
        <Link className="primary-action" to="/contacto">
          Hablemos <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}

function DiagnosticPage() {
  const steps = [
    ['01', 'Levantamiento operativo', 'Identificamos rutas, tipo de mercadería, almacenaje, incoterms y puntos críticos.'],
    ['02', 'Mapa de exposición', 'Traducimos la operación en riesgos concretos: pérdida, demora, robo, avería o responsabilidad.'],
    ['03', 'Estrategia a medida', 'Diseñamos la cobertura que responde cuando las cosas salen mal, no solo cuando el contrato la exige.'],
  ]

  return (
    <section className="content-page diagnostic-page">
      <div className="page-heading">
        <p className="eyebrow">Diagnóstico antes que cotización</p>
        <h1>No creemos en soluciones genéricas.</h1>
        <p className="lead">
          Comprar un seguro de transporte por cumplir con un contrato es fácil. Diseñar
          una estrategia que realmente proteja la operación requiere experiencia. En el
          entorno logístico actual, los riesgos evolucionan rápido.
        </p>
      </div>

      <article className="risk-card">
        <div>
          <p className="eyebrow">Riesgo operativo</p>
          <h2>Una sola falla puede detenerlo todo.</h2>
        </div>
        <div className="risk-copy">
          <p>
            En el mundo de la logística y la cadena de suministro, un imprevisto en la
            ruta, un incidente en el almacén o un retraso en la distribución no solo
            cuesta dinero: pone en juego la confianza de tus clientes.
          </p>
          <p>
            Sabemos que cada operación es única y enfrenta desafíos diferentes. Por eso,
            no creemos en soluciones genéricas. Blindamos tu negocio con coberturas
            diseñadas según tu modelo operativo.
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
          tu carga, dónde se expone y qué necesita tu negocio para seguir operando.
        </p>
      </div>
    </section>
  )
}

function CoveragePage() {
  return (
    <section className="content-page">
      <div className="page-heading compact">
        <p className="eyebrow">Coberturas especializadas</p>
        <h1>Protección diseñada para la cadena logística.</h1>
      </div>

      <div className="coverage-layout">
        <div className="coverage-list">
          {coverageItems.map(({ icon: Icon, title, text }) => (
            <article className="coverage-card" key={title}>
              <Icon size={22} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="coverage-media">
          <img src={dryCargoImage} alt="Seguro para carga seca" />
          <img src={localTransportImage} alt="Seguro de transporte local" />
          <img src={containersPolicyImage} alt="Seguro de contenedores" />
        </div>
      </div>
    </section>
  )
}

function TrustPage() {
  return (
    <section className="content-page trust-page">
      <div className="page-heading">
        <p className="eyebrow">Respaldo y continuidad</p>
        <h1>La confianza también se diseña.</h1>
        <p className="lead">
          Surevia trabaja con el respaldo de Lloyd's y aseguradoras de prestigio
          internacional para estructurar coberturas sólidas, con capacidad de respuesta
          ante operaciones complejas.
        </p>
      </div>

      <article className="about-card">
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2>El socio estratégico que protege el movimiento de tus mercancías.</h2>
        </div>
        <p>
          Llevamos 10 años en el mercado transformando la gestión de riesgos en una
          ventaja competitiva para agencias de carga, aduanas y empresas de comercio
          exterior. Entendemos a fondo la realidad y los imprevistos de la logística
          internacional, lo que nos permite diseñar soluciones de seguros avanzadas para
          que puedas operar y crecer con total tranquilidad.
        </p>
      </article>

      <div className="trust-grid">
        <article>
          <Handshake size={24} />
          <h2>Lloyd's</h2>
          <p>Acceso a un mercado especializado para riesgos complejos de logística internacional.</p>
        </article>
        <article>
          <MapPinned size={24} />
          <h2>Jurisdicción en Perú</h2>
          <p>Beneficio comercial para reclamaciones sujetas a jueces y tribunales del país.</p>
        </article>
        <article>
          <ShieldCheck size={24} />
          <h2>Gestión de siniestros</h2>
          <p>Atención personalizada para proteger la continuidad operativa de cada embarque.</p>
        </article>
      </div>

      <img className="wide-image" src={jurisdictionImage} alt="Beneficio de jurisdicción en Perú" />
    </section>
  )
}

function ContactPage() {
  return (
    <section className="content-page contact-page">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Hablemos de tu operación</p>
          <h1>Blindemos tu negocio antes de que el riesgo aparezca.</h1>
          <p className="lead">
            El siguiente paso natural es un diagnóstico de rutas, carga, frecuencia,
            responsabilidades y puntos de exposición.
          </p>
        </div>
        <div className="contact-card">
          <p>Victoria Goicochea</p>
          <strong>Business Developer</strong>
          <a href="mailto:gerencia@sureviagroup.com">gerencia@sureviagroup.com</a>
          <a href="tel:+51997602207">+51 997 602 207</a>
          <a href="https://sureviagroup.com" target="_blank" rel="noreferrer">
            sureviagroup.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default App
