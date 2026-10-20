import { Link } from 'react-router-dom'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/cucostudio',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.253h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/cucostudio',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cucostudio',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@cucostudio',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 border-t border-smoked-shadow/30 bg-smoked-powder">
      <div className="cuco-shell py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* THE FIRM */}
          <section aria-labelledby="footer-identity">
            <p className="cuco-kicker text-text-on-substrate-muted" id="footer-identity">
              THE FIRM
            </p>
            <Link
              aria-label="CUCO home"
              className="mt-4 inline-flex rounded-control bg-smoked-card p-3 shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
              to="/"
            >
              <img alt="CUCO" className="h-9 w-auto object-contain" src="/brand/cuco-logo.png" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-text-on-substrate-muted">
              We develop artists through disciplined education, cultural knowledge, and practical creative practice.
            </p>
          </section>

          {/* ADDRESS — REAL CONTENT */}
          <section aria-labelledby="footer-address">
            <p className="cuco-kicker text-text-on-substrate-muted" id="footer-address">
              ADDRESS
            </p>
            <div className="mt-4 rounded-card bg-smoked-card p-5 shadow-raised">
              <p className="text-sm font-semibold text-text-on-card-primary">
                Culture Collective Studio
              </p>
              <address className="mt-2 not-italic text-sm leading-6 text-text-on-card-secondary">
                Third floor, Chatrium Residence Riverside / Chatrium Hotel,
                <br />
                Soi Charoen Krung 70,
                <br />
                Bangkok, Thailand.
              </address>
              <div className="mt-3 border-t border-smoked-shadow/30 pt-3">
                <a
                  className="block text-xs text-text-on-card-secondary hover:text-text-on-card-primary"
                  href="mailto:info@culture-collective.com"
                >
                  info@culture-collective.com
                </a>
                <a
                  className="mt-1 block text-xs text-text-on-card-secondary hover:text-text-on-card-primary"
                  href="mailto:enroll@culture-collective.com"
                >
                  enroll@culture-collective.com
                </a>
                <a
                  className="mt-1 block text-xs text-text-on-card-secondary hover:text-text-on-card-primary"
                  href="tel:+661234567809"
                >
                  +66 1234 5678 09
                </a>
              </div>
            </div>
          </section>

          {/* SOCIAL */}
          <section aria-labelledby="footer-social">
            <p className="cuco-kicker text-text-on-substrate-muted" id="footer-social">
              SOCIAL MEDIA
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-control bg-smoked-card text-text-on-card-secondary shadow-raised transition-[box-shadow,transform,color] duration-200 hover:-translate-y-0.5 hover:text-smoked-ember hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  href={href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {svg}
                </a>
              ))}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-text-on-substrate-muted">
              Follow CUCO on the official channels.
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-smoked-shadow/20 bg-smoked-card">
        <div className="cuco-shell flex min-h-10 items-center justify-center py-3 text-center">
          <p className="cuco-mono text-[10px] uppercase tracking-[0.12em] text-text-on-card-secondary">
            © {new Date().getFullYear()} Culture Collective Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}