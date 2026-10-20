import { useMemo, useState } from 'react'
import type { SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { authClient } from '@/lib/auth/client'

// ============================================================
// CATHEDRAL FORM — Deep Neumorphism + Magnetic Shadow
// No borders. No glow. No blur.
// Every input is a carved channel. The card floats.
// ============================================================

function getPasswordStrength(password: string): {
  score: 0 | 1 | 2 | 3 | 4
  label: string
} {
  if (password.length === 0) return { score: 0, label: '' }
  if (password.length < 8) return { score: 1, label: 'Too short' }

  let score = 1
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  const clamped = Math.min(score, 4) as 0 | 1 | 2 | 3 | 4
  const labels: Record<number, string> = {
    1: 'Weak',
    2: 'Fair',
    3: 'Good',
    4: 'Strong',
  }
  return { score: clamped, label: labels[clamped] ?? '' }
}

export function Signup() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const strength = useMemo(() => getPasswordStrength(password), [password])
  const passwordsMatch =
    confirmPassword.length > 0 && confirmPassword === password
  const passwordsMismatch =
    confirmPassword.length > 0 && confirmPassword !== password

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const normalizedEmail = email.trim().toLowerCase()

    if (!firstName.trim() || !lastName.trim()) {
      setError('Enter your first and last name.')
      return
    }
    if (!normalizedEmail) {
      setError('Enter a valid email address.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!acceptedTerms) {
      setError('You must accept the terms to continue.')
      return
    }

    setSubmitting(true)
    const { error: signUpError } = await authClient.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        data: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setSubmitting(false)
      return
    }

    navigate('/dashboard', { replace: true })
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

      <div className="mx-auto w-full max-w-xl">
        {/* CARD — no border, magnetic shadow grounds it as a physical object */}
        <section
          className="rounded-card bg-smoked-card p-6 md:p-8"
          style={{
            boxShadow: [
              // INNER BEVEL — subtle top highlight + bottom shadow = carved object
              'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
              'inset 0 -1px 0 rgba(0, 0, 0, 0.5)',
              // CONTACT SHADOW — a short, tight shadow directly under the card
              '0 2px 4px rgba(0, 0, 0, 0.4)',
              // MAIN SHADOW — the primary object separation
              '0 12px 28px -8px rgba(0, 0, 0, 0.7)',
              // AMBIENT SHADOW — the magnetic drop that grounds it
              '0 40px 80px -20px rgba(0, 0, 0, 0.85)',
            ].join(', '),
          }}
        >
          <p className="cuco-kicker text-text-on-card-secondary">
            CUCO LEARNING STUDIO
          </p>
          <h1 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-card-primary md:text-3xl">
            Create your account.
          </h1>
          <p className="mt-2 max-w-sm text-sm leading-6 text-text-on-card-secondary">
            Begin your application to the CUCO studio.
          </p>

          {error ? (
            <div
              aria-live="polite"
              className="mt-5 rounded-control bg-smoked-powder p-3 shadow-pressed"
            >
              <p className="cuco-kicker text-smoked-error">SIGN-UP FAILED</p>
              <p className="mt-1.5 text-sm leading-6 text-text-on-card-primary">
                {error}
              </p>
            </div>
          ) : null}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* FIRST + LAST NAME — 2-column on sm+ */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  className="cuco-kicker text-text-on-card-secondary"
                  htmlFor="signup-first-name"
                >
                  FIRST NAME
                </label>
                <input
                  autoComplete="given-name"
                  className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary outline-none placeholder:text-text-on-card-secondary/70 transition-shadow duration-200 ease-cathedral focus:outline-none"
                  id="signup-first-name"
                  name="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Jane"
                  required
                  type="text"
                  value={firstName}
                  style={{
                    boxShadow: [
                      'inset 0 3px 8px rgba(0, 0, 0, 0.65)',
                      'inset 0 -1px 1px rgba(255, 255, 255, 0.04)',
                      'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
                    ].join(', '),
                  }}
                />
              </div>

              <div>
                <label
                  className="cuco-kicker text-text-on-card-secondary"
                  htmlFor="signup-last-name"
                >
                  LAST NAME
                </label>
                <input
                  autoComplete="family-name"
                  className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary outline-none placeholder:text-text-on-card-secondary/70 transition-shadow duration-200 ease-cathedral focus:outline-none"
                  id="signup-last-name"
                  name="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Doe"
                  required
                  type="text"
                  value={lastName}
                  style={{
                    boxShadow: [
                      'inset 0 3px 8px rgba(0, 0, 0, 0.65)',
                      'inset 0 -1px 1px rgba(255, 255, 255, 0.04)',
                      'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
                    ].join(', '),
                  }}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-email"
              >
                EMAIL ADDRESS
              </label>
              <input
                autoComplete="email"
                className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary outline-none placeholder:text-text-on-card-secondary/70 transition-shadow duration-200 ease-cathedral focus:outline-none"
                id="signup-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
                style={{
                  boxShadow: [
                    'inset 0 3px 8px rgba(0, 0, 0, 0.65)',
                    'inset 0 -1px 1px rgba(255, 255, 255, 0.04)',
                    'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
                  ].join(', '),
                }}
              />
            </div>

            {/* PASSWORD + STRENGTH METER */}
            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-password"
              >
                PASSWORD
              </label>
              <input
                autoComplete="new-password"
                className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary outline-none placeholder:text-text-on-card-secondary/70 transition-shadow duration-200 ease-cathedral focus:outline-none"
                id="signup-password"
                minLength={8}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                required
                type="password"
                value={password}
                style={{
                  boxShadow: [
                    'inset 0 3px 8px rgba(0, 0, 0, 0.65)',
                    'inset 0 -1px 1px rgba(255, 255, 255, 0.04)',
                    'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
                  ].join(', '),
                }}
              />

              {/* Strength meter — 4 bars, ember → success */}
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex flex-1 gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={[
                          'h-1 flex-1 rounded-full transition-colors duration-300 ease-cathedral',
                          level <= strength.score
                            ? strength.score <= 1
                              ? 'bg-smoked-error'
                              : strength.score === 2
                                ? 'bg-smoked-warning'
                                : 'bg-smoked-success'
                            : 'bg-smoked-powder shadow-pressed',
                        ].join(' ')}
                      />
                    ))}
                  </div>
                  <span className="cuco-kicker shrink-0 text-text-on-card-secondary">
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                className="cuco-kicker text-text-on-card-secondary"
                htmlFor="signup-confirm-password"
              >
                CONFIRM PASSWORD
              </label>
              <input
                autoComplete="new-password"
                className="mt-2 h-11 w-full rounded-control border-none bg-smoked-powder px-4 text-sm text-text-on-card-primary outline-none placeholder:text-text-on-card-secondary/70 transition-shadow duration-200 ease-cathedral focus:outline-none"
                id="signup-confirm-password"
                minLength={8}
                name="confirmPassword"
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Re-enter your password"
                required
                type="password"
                value={confirmPassword}
                style={{
                  boxShadow: passwordsMismatch
                    ? 'inset 0 3px 8px rgba(0, 0, 0, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.04), inset 0 0 0 1px rgba(216, 92, 85, 0.4)'
                    : passwordsMatch
                      ? 'inset 0 3px 8px rgba(0, 0, 0, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.04), inset 0 0 0 1px rgba(86, 205, 100, 0.4)'
                      : 'inset 0 3px 8px rgba(0, 0, 0, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.04), inset 0 1px 2px rgba(0, 0, 0, 0.3)',
                }}
              />
              {passwordsMismatch && (
                <p className="mt-1.5 text-[11px] leading-4 text-smoked-error">
                  Passwords do not match.
                </p>
              )}
              {passwordsMatch && (
                <p className="mt-1.5 text-[11px] leading-4 text-smoked-success">
                  Passwords match.
                </p>
              )}
            </div>

            {/* TERMS */}
            <label className="flex cursor-pointer items-start gap-2.5 pt-1">
              <span className="relative mt-0.5 inline-flex h-4 w-4 shrink-0">
                <input
                  checked={acceptedTerms}
                  className="peer sr-only"
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  type="checkbox"
                />
                <span
                  className="absolute inset-0 rounded-[4px] bg-smoked-powder transition-shadow duration-200 ease-cathedral peer-checked:bg-smoked-ember"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(0, 0, 0, 0.65), inset 0 -1px 1px rgba(255, 255, 255, 0.04)',
                  }}
                  aria-hidden="true"
                />
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-4 w-4 text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 8.5l3 3 6-6" />
                </svg>
              </span>
              <span className="text-[11px] leading-4 text-text-on-card-secondary">
                I agree to the CUCO{' '}
                <Link
                  className="font-semibold text-text-on-card-primary underline decoration-smoked-ember underline-offset-2"
                  to="/terms"
                >
                  Terms
                </Link>{' '}
                and{' '}
                <Link
                  className="font-semibold text-text-on-card-primary underline decoration-smoked-ember underline-offset-2"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* SUBMIT */}
            <button
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none"
              disabled={submitting}
              type="submit"
            >
              {submitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="mt-5 border-t border-smoked-shadow/20 pt-4 text-center">
            <p className="text-sm text-text-on-card-secondary">
              Already have an account?{' '}
              <Link
                className="font-semibold text-text-on-card-primary underline decoration-smoked-ember underline-offset-4"
                to="/login"
              >
                Sign in
              </Link>
            </p>
            <p className="mt-2 text-xs text-text-on-card-secondary">
              <Link
                to="/"
                className="transition-colors hover:text-text-on-card-primary hover:underline"
              >
                Return to homepage
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}