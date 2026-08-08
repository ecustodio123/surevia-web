import { navigation, socialLinks } from '../data/siteData'
import { AppLink } from './appLink'
import { BrandMark } from './brandMark'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
          <AppLink key={item.path} to={item.path}>
            {item.label}
          </AppLink>
        ))}
      </div>
      <div className="footer-contact">
        <a href="mailto:gerencia@sureviagroup.com">gerencia@sureviagroup.com</a>
        <a href="mailto:comercial@sureviagroup.com">comercial@sureviagroup.com</a>
        <a href="tel:+51974630063">+51 974 630 063</a>
      </div>
      <p className="footer-legal">
        © {currentYear} Surevia Group. Todos los derechos reservados.
      </p>
    </footer>
  )
}
