import { AppLink } from './appLink'

export function BrandMark() {
  return (
    <AppLink className="brand" to="/home" aria-label="Surevia Group inicio">
      <span className="brand-symbol" aria-hidden="true" />
      <span className="brand-wordmark" aria-hidden="true">
        <strong>Surevia</strong>
        <span>Group</span>
      </span>
    </AppLink>
  )
}
