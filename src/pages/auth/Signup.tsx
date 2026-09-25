
import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { authClient } from '@/lib/auth/client'
import { useSession } from '@/lib/auth/useSession'

export function Signup() {
  const navigate = useNavigate()
  const { session, loading: sessionLoading } = useSession()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionLoading && session) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate, session, sessionLoading])

  async function handleSubmit(
    event: SyntheticEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setError(null)
    setSuccess(null)

    const normalizedName = fullName.trim()
    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedName) {
      setError('Enter your full name.')
      return
    }

    if (!normalizedEmail || !password) {
      setError('Enter your email address and password.')
      return
    }

    if (password.length < 6) {
      setError('Your password must contain at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Your passwords do not match.')
      return
    }

    setSubmitting(true)

    const {
      data: { user },
      error: signUpError,
    } = await authClient.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        data: {
          full_name: normalizedName,
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setSubmitting(false)
      return
    }

    if (!user) {
      setError('CUCO could not create your account. Please try again.')
      setSubmitting(false)
      return
    }

    if (user.email_confirmed_at || user.confirmed_at) {
      navigate('/dashboard', { replace: true })
      return
    }

    setSuccess(
      'Your CUCO account has been created. Check your email to confirm your account, then sign in.',
    )
    setSubmitting(false)
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-smoked-powder px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto w-full max-w-xl">
        <section className="rounded-card bg-smoked-card p-6 shadow-raised md:p-10">
          <p className="cuco-kicker text-text-on-card-secondary">
            JOIN CUCO
          </p>

          <h1 className="cuco-editorial mt-3 text-4xl leading-none text-text-on-card-primary md:text-5xl">
            Start learning.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-text-on-card-secondary md:text-base">
            Create your CUCO learner account and enter the learning
            studio.
          </p>

          {error ? (
            <div
              aria-live="polite"
              className="mt-6 rounded-control bg-smoked-card p-4 shadow-pressed"
            >
              <p className="cuco-kicker text-smoked-error">
                ACCOUNT CREATION FAILED
              </p>

              <p className="mt-2 text-sm leading-6 text-text-on-card-primary">
                {error}
              </p>
            </div>
          ) : null}

          {success ? (
            <div
              aria-live="polite"
              className="mt-6 rounded-control bg-smoked-card p-4 shadow-pressed"
            >
              <p className="cuco-kicker text-smoked-success">
                ACCOUNT CREATED
              </p>

              <p className="mt-2 text-sm leading-6 text-text-on-card-primary">
                {success}
              </p>
            </div>
          ) : null}

          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-name"
              >
                FULL NAME
              </label>

              <input
                autoComplete="name"
                className="mt-2 h-12 w-full rounded-control bg-smoked-card px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
                id="signup-name"
                name="name"
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Your full name"
                required
                type="text"
                value={fullName}
              />
            </div>

            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-email"
              >
                EMAIL ADDRESS
              </label>

              <input
                autoComplete="email"
                className="mt-2 h-12 w-full rounded-control bg-smoked-card px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
                id="signup-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-password"
              >
                PASSWORD
              </label>

              <input
                autoComplete="new-password"
                className="mt-2 h-12 w-full rounded-control bg-smoked-card px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
                id="signup-password"
                minLength={6}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 6 characters"
                required
                type="password"
                value={password}
              />
            </div>

            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-confirm-password"
              >
                CONFIRM PASSWORD
              </label>

              <input
                autoComplete="new-password"
                className="mt-2 h-12 w-full rounded-control bg-smoked-card px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
                id="signup-confirm-password"
                minLength={6}
                name="confirmPassword"
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Repeat your password"
                required
                type="password"
                value={confirmPassword}
              />
            </div>

            <button
              className="inline-flex min-h-12 w-full items-center justify-center rounded-control bg-smoked-ember px-5 py-3 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
              disabled={submitting || sessionLoading}
              type="submit"
            >
              {submitting ? 'Creating account...' : 'Create CUCO account'}
            </button>
          </form>

          <div className="mt-8 border-t border-smoked-shadow/30 pt-6 text-center">
            <p className="text-sm text-text-on-card-secondary">
              Already have a CUCO account?{' '}
              <Link
                className="font-semibold text-text-on-card-primary underline decoration-smoked-ember underline-offset-4"
                to="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
