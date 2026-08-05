import { AppLink } from './appLink'

export function BrandMark() {
  return (
    <AppLink className="brand" to="/home" aria-label="Surevia Group inicio">
      <span className="brand-logo" aria-hidden="true" />
    </AppLink>
  )
}
