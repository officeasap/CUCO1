import { Bell, LogOut, Search, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import { authClient } from '@/lib/auth/client'
import { useProfile } from '@/lib/auth/useProfile'
import { useSession } from '@/lib/auth/useSession'

export function TopBar() {
  const { session, loading: sessionLoading } = useSession()

  const {
    profile,
    loading: profileLoading,
  } = useProfile()

  const email = session?.user.email

  const displayName =
    profile?.full_name?.trim() ||
    email ||
    'Learner'

  const avatarUrl = profile?.avatar_url?.trim() || null

  const role =
    profile?.role?.trim() ||
    'Learner'

  const loading = sessionLoading || profileLoading

  async function handleSignOut() {
    await authClient.auth.signOut()
  }

  return (
    <header className="sticky top-0 z-30 h-14 border-b border-smoked-shadow/30 bg-smoked-powder md:h-16">
      <div className="cuco-shell flex h-full items-center gap-3">
        <Link
          aria-label="CUCO home"
          className="shrink-0 transition-transform duration-200 hover:-translate-y-px active:translate-y-px"
          to="/"
        >
          <img
            alt="CUCO"
            className="h-9 w-auto object-contain md:h-10"
            src="/brand/cuco-logo.png"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 md:block">
          <p className="cuco-kicker text-text-on-substrate-muted">
            CURRENT PROGRAM
          </p>

          <p className="mt-0.5 truncate text-sm font-semibold text-text-on-substrate-primary">
            CUCO Learning Studio
          </p>
        </div>

        <label className="relative hidden min-w-0 max-w-sm flex-1 lg:block">
          <span className="sr-only">Search CUCO</span>

          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-on-substrate-muted"
          />

          <input
            className="h-10 w-full rounded-control bg-smoked-card pl-9 pr-3 text-sm text-text-on-card-primary shadow-pressed outline-none transition-[box-shadow] duration-200 placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
            placeholder="Search scripts, questions..."
            type="search"
          />
        </label>

        <button
          aria-label="Notifications"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-control bg-smoked-card text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-raised-hover active:translate-y-px active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-smoked-ember"
          type="button"
        >
          <Bell aria-hidden="true" className="size-4" />
        </button>

        <div className="flex min-w-0 items-center gap-2">
          <div
            aria-label={
              avatarUrl
                ? `${displayName} profile image`
                : `${displayName} profile image placeholder`
            }
            className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-control bg-smoked-card shadow-pressed"
          >
            {avatarUrl ? (
              <img
                alt={`${displayName} profile`}
                className="size-full object-cover"
                src={avatarUrl}
              />
            ) : (
              <img
                alt="CUCO profile image placeholder"
                className="size-full object-contain p-2"
                src="/brand/cuco-logo.png"
              />
            )}
          </div>

          <div className="hidden min-w-0 max-w-40 lg:block">
            <p className="truncate text-sm font-semibold text-text-on-substrate-primary">
              {loading ? 'Loading...' : displayName}
            </p>

            <p className="cuco-mono mt-0.5 truncate text-[10px] uppercase tracking-[0.14em] text-text-on-substrate-muted">
              {role}
            </p>
          </div>

          {session ? (
            <button
              aria-label="Sign out"
              className="hidden size-10 shrink-0 items-center justify-center rounded-control bg-smoked-card text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 hover:-translate-y-px hover:shadow-raised-hover active:translate-y-px active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-smoked-ember lg:inline-flex"
              onClick={handleSignOut}
              type="button"
            >
              <LogOut aria-hidden="true" className="size-4" />
            </button>
          ) : (
            <div
              aria-hidden="true"
              className="hidden size-10 shrink-0 items-center justify-center rounded-control bg-smoked-card text-text-on-card-secondary shadow-pressed lg:flex"
            >
              <UserRound className="size-4" />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}