
import { Link, NavLink, Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { BottomNav } from '@/layouts/BottomNav'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Our Story', to: '/our-story' },
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
      {label}
    </NavLink>
  )
}

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-smoked-powder text-text-on-substrate-primary">
      <header className="sticky top-0 z-50 w-full border-b border-smoked-shadow/30 bg-smoked-powder shadow-raised">
        <div className="cuco-shell flex min-h-20 items-center justify-between gap-6">
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

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {navigation.map((item) => (
              <PublicNavigationLink
                key={item.to}
                label={item.label}
                to={item.to}
              />
            ))}
          </nav>

          <Link
            className="hidden min-h-11 items-center justify-center rounded-control bg-smoked-ember px-5 py-3 text-sm font-bold tracking-[0.01em] text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
            to="/dashboard"
          >
            Enter CUCO
          </Link>
        </div>
      </header>

      <main className="relative z-10 min-h-[calc(100svh-80px)] pb-24 md:pb-0">
        <Outlet />
      </main>

      <SiteFooter />

      <BottomNav />
    </div>
  )
}
