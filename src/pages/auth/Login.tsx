import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { authClient } from '@/lib/auth/client'
import { useSession } from '@/lib/auth/useSession'

export function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { session, loading: sessionLoading } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionLoading && session) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate, session, sessionLoading])

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail || !password) {
      setError('Enter your email address and password.')
      return
    }

    setSubmitting(true)
    const { error: signInError } = await authClient.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      setSubmitting(false)
      return
    }

    const from =
      typeof location.state === 'object' &&
      location.state !== null &&
      'from' in location.state &&
      typeof location.state.from === 'string'
        ? location.state.from
        : '/dashboard'

    navigate(from || '/dashboard', { replace: true })
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-smoked-powder px-4 py-12">
      {/* ESCAPE HATCH — top-left */}
      <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-control bg-smoked-card px-4 py-2 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="mx-auto w-full max-w-md">
        {/* NO .cath-card — flat surface only, no glow, no gradient */}
        <section className="rounded-card border border-smoked-shadow/30 bg-smoked-card p-6 shadow-raised md:p-10">
          <p className="cuco-kicker text-text-on-card-secondary">
            CUCO LEARNING STUDIO
          </p>

          <h1 className="cuco-editorial mt-3 text-3xl leading-tight text-text-on-card-primary md:text-4xl">
            Welcome back.
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-text-on-card-secondary">
            Sign in to continue your learning, programmes, and CUCO academic relationships.
          </p>

          {error ? (
            <div
              aria-live="polite"
              className="mt-6 rounded-control bg-smoked-powder p-4 shadow-pressed"
            >
              <p className="cuco-kicker text-smoked-error">SIGN-IN FAILED</p>
              <p className="mt-2 text-sm leading-6 text-text-on-card-primary">{error}</p>
            </div>
          ) : null}

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="cuco-kicker text-text-on-card-secondary" htmlFor="login-email">
                EMAIL ADDRESS
              </label>
              {/* focus: flat inset shadow only — NO colored ring */}
              <input
                autoComplete="email"
                className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none focus-visible:shadow-pressed"
                id="login-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div>
              <label className="cuco-kicker text-text-on-card-secondary" htmlFor="login-password">
                PASSWORD
              </label>
              <input
                autoComplete="current-password"
                className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none focus-visible:shadow-pressed"
                id="login-password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                type="password"
                value={password}
              />
            </div>

            <button
              className="inline-flex min-h-11 w-full items-center justify-center rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none"
              disabled={submitting || sessionLoading}
              type="submit"
            >
              {submitting ? 'Signing in...' : 'Enter CUCO'}
            </button>
          </form>

          <div className="mt-6 border-t border-smoked-shadow/30 pt-5 text-center">
            <p className="text-sm text-text-on-card-secondary">
              New to CUCO?{' '}
              <Link
                className="font-semibold text-text-on-card-primary underline decoration-smoked-ember underline-offset-4"
                to="/signup"
              >
                Create your account
              </Link>
            </p>
            <p className="mt-3 text-sm text-text-on-card-secondary">
              <Link to="/" className="hover:text-text-on-card-primary hover:underline transition-colors">
                Return to homepage
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}