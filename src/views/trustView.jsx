import { Handshake, MapPinned, ShieldCheck } from 'lucide-react'

import { PageCTA } from '../components/pageCta'
import { trustVideoPoster } from '../data/siteData'

export function TrustView() {
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
          <p>Acceso al mercado en el que nació el seguro de mercancías, lo que lo hace altamente especializado en riesgos logísticos complejos.</p>
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

      {/* //TODO: Update video */}
      {/* <section className="trust-video-section" aria-labelledby="trust-video-title">
        <div>
          <p className="eyebrow">Lorem ipsum</p>
          <h2 id="trust-video-title">Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eu nunc. Sed
            euismod, nunc ut aliquam aliquam.
          </p>
        </div>
        <div className="video-frame">
          <video controls preload="metadata" poster={trustVideoPoster}>
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section> */}

      <PageCTA
        eyebrow="Hablemos con contexto"
        title="Comparte los datos de tu operación y conversemos sobre la mejor estrategia."
      />
    </section>
  )
}
