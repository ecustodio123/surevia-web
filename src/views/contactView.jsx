import { ArrowRight } from 'lucide-react'

import { insuranceOptions, whatsappNumber } from '../data/siteData'

export function ContactView() {
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
        <div className="contact-copy">
          <p className="eyebrow">Hablemos de tu operación</p>
          <h1>Blindemos tu negocio antes de que el riesgo aparezca.</h1>
          <p className="lead">
            Cuéntanos qué necesitas proteger y te ayudamos a orientar la cobertura.
          </p>
          <div className="contact-card">
            <p>Victoria Goicochea</p>
            <strong>Business Developer</strong>
            <a href="mailto:gerencia@sureviagroup.com">gerencia@sureviagroup.com</a>
            <a href="tel:+51974630063">+51 974 630 063</a>
          </div>
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
