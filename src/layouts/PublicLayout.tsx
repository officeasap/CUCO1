
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { BottomNav } from '@/layouts/BottomNav'

const navigation = [
    { label: 'Home', to: '/' },           // <--- ADDED HOME BACK
  { label: 'Courses', to: '/courses' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Vertical Series', to: '/vertical-series' },
  { label: 'Contact', to: '/contact' },
]

function PublicNavigationLink({
  label,
  to,
}: {
  label: string
  to: string
}) {
  return (
    <NavLink
      className={({ isActive }) =>
        [
          'inline-flex min-h-11 items-center justify-center rounded-control px-4 py-2.5 text-sm font-semibold',
          'bg-smoked-card text-text-on-card-primary shadow-raised',
          'transition-[box-shadow,transform,color] duration-200 ease-cathedral',
          'focus-visible:outline-3 focus-visible:outline-offset-3',
          'focus-visible:outline-smoked-ember',
          'hover:-translate-y-0.5 hover:shadow-raised-hover',
          'active:translate-y-0.5 active:shadow-pressed',
          isActive ? 'shadow-pressed' : 'hover:text-text-on-card-primary',
        ].join(' ')
      }
      end={to === '/'}
      to={to}
    >
      {({ isActive }) => (
        <>
          <span aria-current={isActive ? 'page' : undefined}>{label}</span>
        </>
      )}
    </NavLink>
  )
}

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-smoked-powder text-text-on-substrate-primary">
      {/* SKIP LINK — WCAG AA. Visually hidden until keyboard-focused. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-smoked-ember focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-on-card-primary focus:shadow-raised"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-smoked-shadow/30 bg-smoked-powder shadow-raised">
        <div className="cuco-shell flex min-h-20 items-center justify-between gap-6">
          {/* LOGO — unchanged */}
          <Link
            aria-label="CUCO home"
            className="shrink-0 rounded-control bg-smoked-card p-2 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
            to="/"
          >
            <img
              alt="CUCO"
              className="h-11 w-auto object-contain"
              src="/brand/cuco-logo.png"
            />
          </Link>

          {/* DESKTOP NAV — Home dropped, Vertical Series added */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 lg:flex"
          >
            {navigation.map((item) => (
              <PublicNavigationLink
                key={item.to}
                label={item.label}
                to={item.to}
              />
            ))}
          </nav>

          {/* RIGHT CLUSTER — Sign in + Enter CUCO + mobile toggle */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                [
                  'hidden min-h-11 items-center justify-center rounded-control px-4 py-2.5 text-sm font-semibold text-text-on-substrate-muted',
                  'transition-colors duration-200 ease-cathedral',
                  'hover:text-text-on-card-primary',
                  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember',
                  isActive ? 'text-text-on-card-primary' : '',
                  'md:inline-flex',
                ].join(' ')
              }
            >
              Sign in
            </NavLink>

            <Link
              aria-label="Enter CUCO dashboard"
              className="hidden min-h-11 items-center justify-center rounded-control bg-smoked-ember px-5 py-3 text-sm font-bold tracking-[0.01em] text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember md:inline-flex"
              to="/dashboard"
            >
              Enter CUCO
            </Link>

            {/* MOBILE TOGGLE — replaces the hidden nav below lg */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-smoked-card text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember lg:hidden"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER — closes on link click */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="border-t border-smoked-shadow/30 bg-smoked-powder px-4 pb-6 pt-3 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {navigation.map((item) => (
                <PublicNavigationLink
                  key={item.to}
                  label={item.label}
                  to={item.to}
                />
              ))}

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-control bg-smoked-card px-4 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                >
                  Sign in
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-control bg-smoked-ember px-4 py-2.5 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                >
                  Enter CUCO
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN — id="main-content" is the skip-link target. DO NOT remove. */}
      <main
        id="main-content"
        className="relative z-10 min-h-[calc(100svh-80px)] pb-24 md:pb-0"
      >
        <Outlet />
      </main>

      <SiteFooter />

      <BottomNav />
    </div>
  )
}