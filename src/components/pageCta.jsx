import { ArrowRight } from 'lucide-react'

import { AppLink } from './appLink'

export function PageCTA({
  eyebrow = 'Solicita un diagnóstico',
  title = 'Cuéntanos qué necesitas proteger y armemos la cobertura correcta.',
}) {
  return (
    <section className="page-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <AppLink className="primary-action" to="/contacto">
        Ir al formulario <ArrowRight size={18} />
      </AppLink>
    </section>
  )
}
