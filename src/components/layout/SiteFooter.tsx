import {
  BriefcaseBusiness,
  Globe2,
  MessageCircle,
  Play,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const footerNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: Globe2,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: BriefcaseBusiness,
  },
  {
    label: 'YouTube',
    href: '#',
    icon: Play,
  },
]

function FooterMenuLink({
  label,
  to,
}: {
  label: string
  to: string
}) {
  return (
    <Link
      className="inline-flex min-h-10 items-center justify-center rounded-control bg-smoked-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
      to={to}
    >
      {label}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-16 border-t border-smoked-shadow/20 bg-smoked-powder">
      <div className="cuco-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section aria-labelledby="footer-identity">
            <p
              className="cuco-kicker text-text-on-substrate-muted"
              id="footer-identity"
            >
              THE FIRM
            </p>

            <Link
              aria-label="CUCO home"
              className="mt-5 inline-flex rounded-control bg-smoked-card p-4 shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
              to="/"
            >
              <img
                alt="CUCO"
                className="h-12 w-auto object-contain"
                src="/brand/cuco-logo.png"
              />
            </Link>

            <h2 className="cuco-editorial mt-5 max-w-xs text-2xl font-semibold leading-tight text-text-on-substrate-primary">
              Firm Authoritative Slogan
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-text-on-substrate-muted">
              A serious learning environment built around disciplined
              education, practical knowledge, and future-ready capability.
            </p>
          </section>

          <section aria-labelledby="footer-menu">
            <p
              className="cuco-kicker text-text-on-substrate-muted"
              id="footer-menu"
            >
              DEEP-PRESSED MENU
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid max-w-xs grid-cols-1 gap-3"
            >
              {footerNavigation.map((item) => (
                <FooterMenuLink
                  key={item.to}
                  label={item.label}
                  to={item.to}
                />
              ))}
            </nav>
          </section>

          <section aria-labelledby="footer-address">
            <p
              className="cuco-kicker text-text-on-substrate-muted"
              id="footer-address"
            >
              ADDRESS
            </p>

            <div className="mt-5 rounded-card bg-smoked-card p-5 shadow-raised">
              <p className="text-sm font-semibold text-text-on-card-primary">
                CUCO Learning Studio
              </p>

              <address className="mt-3 not-italic text-sm leading-6 text-text-on-card-secondary">
                Institutional address to be configured.
                <br />
                Contact details to be configured.
              </address>
            </div>
          </section>

          <section aria-labelledby="footer-social">
            <p
              className="cuco-kicker text-text-on-substrate-muted"
              id="footer-social"
            >
              SOCIAL MEDIA
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="inline-flex size-12 items-center justify-center rounded-control bg-smoked-card text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  href={href}
                  onClick={(event) => {
                    if (href === '#') {
                      event.preventDefault()
                    }
                  }}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              ))}
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-text-on-substrate-muted">
              Follow CUCO when the official social channels are connected.
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-smoked-shadow/20 bg-smoked-card">
        <div className="cuco-shell flex min-h-10 items-center justify-center py-2 text-center">
          <p className="cuco-mono text-[10px] uppercase tracking-[0.12em] text-text-on-card-secondary">
            © {new Date().getFullYear()} CUCO Learning Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}