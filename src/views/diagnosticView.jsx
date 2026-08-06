import { PageCTA } from '../components/pageCta'
import { diagnosticImages } from '../data/siteData'

const steps = [
  ['01', 'Levantamiento operativo', 'Identificamos rutas, tipo de mercadería, almacenaje, incoterms y puntos críticos.'],
  ['02', 'Mapa de exposición', 'Traducimos la operación en riesgos concretos.'],
  ['03', 'Estrategia a medida', 'Diseñamos la cobertura que realmente responde.'],
]

export function DiagnosticView() {
  return (
    <section className="content-page diagnostic-page">
      <div className="page-heading">
        <p className="eyebrow">Diagnóstico antes que cotización</p>
        <h1>¿Cómo estás administrando los riesgos? Cuéntanos</h1>
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

      <section className="diagnostic-flow" aria-label="Proceso de diagnóstico">
        <div className="diagnostic-flow-media">
          <img src={diagnosticImages.primary} alt="Inspección de carga para diagnóstico logístico" />
          <img src={diagnosticImages.secondary} alt="Equipo revisando documentación de operación logística" />
        </div>
        <div className="diagnostic-flow-steps">
          {steps.map(([number, title, text]) => (
            <article className="diagnostic-flow-step" key={title}>
              <span className="step-number">{number}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="statement-band">
        <p>
          Nuestro enfoque no empieza con una cotización. Inicia con entender cómo se mueve
          tu mercadería y dónde se expone.
        </p>
      </div>

      <PageCTA />
    </section>
  )
}
