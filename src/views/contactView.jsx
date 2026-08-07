import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { insuranceOptions } from '../data/siteData'

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export function ContactView() {
  const [formStatus, setFormStatus] = useState({ message: '', type: 'idle' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const form = event.currentTarget
    const fullName = `${data.get('nombre') || ''} ${data.get('apellido') || ''}`.trim()
    const message = [
      'Hola, quiero solicitar un diagnóstico.',
      `Nombre: ${fullName}`,
      `Correo: ${data.get('correo') || ''}`,
      `Teléfono: ${data.get('telefono') || ''}`,
      `Seguro de interés: ${data.get('seguro') || ''}`,
      `Detalle: ${data.get('detalle') || ''}`,
    ].join('\n')

    if (!web3FormsAccessKey) {
      setFormStatus({
        message: 'Falta configurar la variable VITE_WEB3FORMS_ACCESS_KEY.',
        type: 'error',
      })
      return
    }

    data.append('access_key', web3FormsAccessKey)
    data.append('subject', 'Nueva solicitud desde la web de Surevia')
    data.append('from_name', 'Surevia Web')
    data.append('name', fullName)
    data.append('email', data.get('correo') || '')
    data.append('message', message)

    setIsSubmitting(true)
    setFormStatus({ message: '', type: 'idle' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'No se pudo enviar el formulario.')
      }

      form.reset()
      setFormStatus({
        message: 'Solicitud enviada. Te contactaremos pronto.',
        type: 'success',
      })
    } catch {
      setFormStatus({
        message: 'No pudimos enviar la solicitud. Inténtalo nuevamente.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
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
            <strong style={{color: '#08060d'}}>Victoria Goicochea</strong>
            <strong>Business Developer</strong>
            <a href="mailto:gerencia@sureviagroup.com">
              <Mail size={18} />
              <span>gerencia@sureviagroup.com</span>
            </a>
            <a href="https://wa.me/51974630063" target="_blank" rel="noreferrer">
              <FaWhatsapp size={18} />
              <span>+51 974 630 063</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" hidden />
          <div className="form-row">
            <label>
              Nombre
              <input name="nombre" type="text" autoComplete="given-name" required />
            </label>
            <label>
              Apellido
              <input name="apellido" type="text" autoComplete="family-name" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Correo
              <input name="correo" type="email" autoComplete="email" required />
            </label>
            <label>
              Teléfono
              <input name="telefono" type="tel" autoComplete="tel" required />
            </label>
          </div>
          <label>
            Seguro de interés
            <select name="seguro" required>
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
              required
            />
          </label>
          <button className="primary-action form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar solicitud'} <ArrowRight size={18} />
          </button>
          {formStatus.message && (
            <p className={`form-status is-${formStatus.type}`} role="status">
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
