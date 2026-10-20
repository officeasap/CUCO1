import { useProfile } from '@/lib/auth/useProfile'
import { useEnrollments } from '@/lib/auth/useEnrollments'

function formatStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

function formatTrack(track: string | null): string {
  if (!track) {
    return 'General learner'
  }

  return `${track.charAt(0).toUpperCase()}${track.slice(1)} track`
}

export function Dashboard() {
  const {
    profile,
    loading: profileLoading,
  } = useProfile()

  const {
    enrollments,
    loading: enrollmentsLoading,
    error: enrollmentError,
  } = useEnrollments()

  const loading = profileLoading || enrollmentsLoading

  const activeEnrollments = enrollments.filter(
    (enrollment) => enrollment.status === 'active',
  )

  const displayName =
    profile?.full_name?.trim() ||
    profile?.email?.trim() ||
    'Learner'

  return (
    <section className="space-y-5">
      <header>
        <p className="cuco-kicker text-text-on-substrate-muted">
          LEARNER DASHBOARD
        </p>

        <h1 className="cuco-editorial mt-3 text-5xl leading-none text-text-on-substrate-primary md:text-6xl">
          Welcome, {loading ? 'Learner' : displayName}.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-text-on-substrate-muted md:text-lg">
          Your CUCO learning environment, enrolments, and programme
          relationships live here.
        </p>
      </header>

      {enrollmentError ? (
        <div className="rounded-card bg-smoked-card p-5 shadow-raised">
          <p className="cuco-kicker text-smoked-error">
            LEARNING DATA
          </p>

          <p className="mt-2 text-sm leading-6 text-text-on-card-primary">
            We could not load your current enrolments. Please try again
            shortly.
          </p>
        </div>
      ) : null}

      <section
        aria-labelledby="enrolment-heading"
        className="space-y-4"
      >
        <div>
          <p className="cuco-kicker text-text-on-substrate-muted">
            ACADEMIC RELATIONSHIP
          </p>

          <h2
            id="enrolment-heading"
            className="cuco-editorial mt-2 text-3xl text-text-on-substrate-primary"
          >
            Your programmes
          </h2>
        </div>

        {loading ? (
          <div className="rounded-card bg-smoked-card p-6 shadow-raised">
            <p className="text-sm text-text-on-card-secondary">
              Loading your CUCO enrolments...
            </p>
          </div>
        ) : enrollments.length === 0 ? (
          <div className="rounded-card bg-smoked-card p-6 shadow-raised">
            <p className="cuco-kicker text-text-on-card-secondary">
              NO ENROLMENTS
            </p>

            <h3 className="cuco-editorial mt-2 text-2xl text-text-on-card-primary">
              Your learning journey starts here.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-text-on-card-secondary">
              You do not currently have a CUCO programme enrolment
              associated with this account.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {enrollments.map((enrollment) => {
              const program = enrollment.program

              return (
                <article
                  key={enrollment.id}
                  className="rounded-card bg-smoked-card p-6 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="cuco-kicker text-text-on-card-secondary">
                        PROGRAMME
                      </p>

                      <h3 className="cuco-editorial mt-2 text-3xl leading-tight text-text-on-card-primary">
                        {program?.title ?? 'CUCO Programme'}
                      </h3>
                    </div>

                    <span className="rounded-control bg-smoked-card px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-on-card-primary shadow-pressed">
                      {formatStatus(enrollment.status)}
                    </span>
                  </div>

                  {program?.description ? (
                    <p className="mt-4 text-sm leading-6 text-text-on-card-secondary">
                      {program.description}
                    </p>
                  ) : null}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-control bg-smoked-card p-4 shadow-pressed">
                      <p className="cuco-kicker text-text-on-card-secondary">
                        TRACK
                      </p>

                      <p className="mt-2 text-sm font-semibold text-text-on-card-primary">
                        {formatTrack(enrollment.track)}
                      </p>
                    </div>

                    <div className="rounded-control bg-smoked-card p-4 shadow-pressed">
                      <p className="cuco-kicker text-text-on-card-secondary">
                        STATUS
                      </p>

                      <p className="mt-2 text-sm font-semibold text-text-on-card-primary">
                        {formatStatus(enrollment.status)}
                      </p>
                    </div>
                  </div>

                  {enrollment.status === 'active' ? (
                    <p className="mt-5 text-sm font-semibold text-operational-success">
                      Active enrolment
                    </p>
                  ) : null}

                  {enrollment.status === 'completed' ? (
                    <p className="mt-5 text-sm font-semibold text-text-on-card-primary">
                      Programme completed
                    </p>
                  ) : null}
                </article>
              )
            })}
          </div>
        )}
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-card bg-smoked-card p-6 shadow-raised">
          <p className="cuco-kicker text-text-on-card-secondary">
            ENROLMENTS
          </p>

          <p className="cuco-numeric mt-3 text-4xl font-semibold text-text-on-card-primary">
            {loading ? '—' : enrollments.length}
          </p>

          <p className="mt-2 text-sm text-text-on-card-secondary">
            Programme relationships
          </p>
        </article>

        <article className="rounded-card bg-smoked-card p-6 shadow-raised">
          <p className="cuco-kicker text-text-on-card-secondary">
            ACTIVE
          </p>

          <p className="cuco-numeric mt-3 text-4xl font-semibold text-text-on-card-primary">
            {loading ? '—' : activeEnrollments.length}
          </p>

          <p className="mt-2 text-sm text-text-on-card-secondary">
            Currently active
          </p>
        </article>

        <article className="rounded-card bg-smoked-card p-6 shadow-raised">
          <p className="cuco-kicker text-text-on-card-secondary">
            LEARNER
          </p>

          <p className="mt-3 truncate text-lg font-semibold text-text-on-card-primary">
            {loading ? 'Loading...' : profile?.role || 'Learner'}
          </p>

          <p className="mt-2 text-sm text-text-on-card-secondary">
            CUCO profile role
          </p>
        </article>
      </section>
    </section>
  )
}