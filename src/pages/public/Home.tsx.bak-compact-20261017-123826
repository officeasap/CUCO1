
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Globe2,
  Play,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function PressedLink({
  children,
  to,
  variant = 'primary',
}: {
  children: React.ReactNode
  to: string
  variant?: 'primary' | 'secondary'
}) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-3 rounded-control px-6 py-3.5 text-sm font-semibold transition-[box-shadow,transform,color] duration-200 ease-cathedral focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember active:translate-y-0.5'

  const styles =
    variant === 'primary'
      ? 'bg-smoked-ember text-text-on-card-primary shadow-raised hover:-translate-y-0.5 hover:shadow-raised-hover active:shadow-pressed'
      : 'bg-smoked-card text-text-on-card-primary shadow-raised hover:-translate-y-0.5 hover:shadow-raised-hover active:shadow-pressed'

  return (
    <Link className={`${base} ${styles}`} to={to}>
      {children}
    </Link>
  )
}

function PhysicalImagePlaceholder({
  label,
  aspect = 'wide',
}: {
  label: string
  aspect?: 'wide' | 'portrait'
}) {
  const isStudioPortrait = label === 'CUCO / STUDIO PORTRAIT'
  const isArchiveCulture = label === 'ARCHIVE / CULTURE COLLECTIVE'

  const imageSrc = isStudioPortrait
    ? '/brand/hero-stage.jpg'
    : isArchiveCulture
      ? '/brand/tuthor.png'
      : null

  return (
    <div
      aria-label={`${label} image`}
      className={[
        'relative overflow-hidden rounded-card bg-smoked-card shadow-float',
        aspect === 'wide'
          ? 'min-h-64 md:min-h-80'
          : 'min-h-80 md:min-h-[30rem]',
      ].join(' ')}
      role="img"
    >
      <div className="absolute inset-5 overflow-hidden rounded-card bg-smoked-powder shadow-pressed">
        {imageSrc ? (
          <div className="flex h-full w-full items-center justify-center">
            <img
              alt={label}
              className={
                isArchiveCulture
                  ? 'h-auto max-h-full w-auto max-w-full object-contain p-6 md:p-10'
                  : 'h-full w-full object-cover'
              }
              src={imageSrc}
            />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="rounded-control bg-smoked-card p-4 shadow-physical">
              <Play
                aria-hidden="true"
                className="h-6 w-6 text-text-on-card-primary"
              />
            </div>

            <p className="cuco-kicker mt-5 text-text-on-substrate-muted">
              {label}
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-text-on-substrate-muted">
              Editorial photography will occupy this frame.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function DisciplineCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <article className="group rounded-card bg-smoked-card p-6 shadow-physical transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <span className="cuco-kicker text-text-on-card-secondary">
          {number}
        </span>

        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 text-text-on-card-secondary transition-transform duration-200 ease-cathedral group-hover:translate-x-1"
        />
      </div>

      <h3 className="cuco-editorial mt-10 text-3xl text-text-on-card-primary md:text-4xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-text-on-card-secondary">
        {description}
      </p>
    </article>
  )
}

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="cuco-shell relative py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-3 rounded-control bg-smoked-card px-4 py-3 shadow-physical">
              <span className="h-2.5 w-2.5 rounded-full bg-smoked-ember shadow-contact" />

              <span className="cuco-kicker text-text-on-card-secondary">
                CULTURE COLLECTIVE STUDIO
              </span>
            </div>

            <h1 className="cuco-editorial mt-8 max-w-5xl text-6xl leading-[0.84] text-text-on-substrate-primary sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Theatre
              <br />
              <span className="text-smoked-ember">reborn.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-text-on-substrate-primary md:text-2xl md:leading-9">
              Bold, multicultural theatre — reborn as a global online studio.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-on-substrate-muted md:text-lg">
              Professional-level training in acting, directing, writing, voice
              and speech, and singing — built from the artistic practice of
              Culture Collective Studio in Bangkok.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PressedLink to="/courses">
                Browse Courses
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </PressedLink>

              <PressedLink to="/our-story" variant="secondary">
                Our Story
              </PressedLink>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <ArrowDown
                aria-hidden="true"
                className="h-5 w-5 text-smoked-ember"
              />

              <span className="cuco-kicker text-text-on-substrate-muted">
                ENTER THE STUDIO
              </span>
            </div>
          </div>

          <PhysicalImagePlaceholder
            aspect="portrait"
            label="CUCO / STUDIO PORTRAIT"
          />
        </div>
      </section>

      {/* FOUNDING STATEMENT */}
      <section className="border-y border-smoked-shadow/20 bg-smoked-card/40">
        <div className="cuco-shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <p className="cuco-kicker text-text-on-substrate-muted">
                THE STUDIO
              </p>

              <h2 className="cuco-editorial mt-4 text-5xl leading-[0.9] text-text-on-substrate-primary md:text-6xl">
                From Bangkok
                <br />
                to anywhere.
              </h2>
            </div>

            <div>
              <p className="text-2xl leading-9 text-text-on-substrate-primary md:text-3xl md:leading-10">
                Founded by American director, playwright, and educator{' '}
                <strong>Loni Berry</strong>, Culture Collective Studio spent
                six years creating provocative, multilingual, award-winning
                theatre in Bangkok.
              </p>

              <p className="mt-7 max-w-3xl text-base leading-8 text-text-on-substrate-muted md:text-lg">
                The work brought classic plays and original writing together
                with artists from different cultures, challenging audiences
                while creating space for connection, identity, and
                experimentation.
              </p>

              <div className="mt-8">
                <Link
                  className="inline-flex items-center gap-3 rounded-control bg-smoked-card px-5 py-3 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  to="/our-story"
                >
                  Discover the story
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVID → ONLINE TRANSFORMATION */}
      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <PhysicalImagePlaceholder
            aspect="wide"
            label="ARCHIVE / CULTURE COLLECTIVE"
          />

          <div className="flex flex-col justify-between rounded-card bg-smoked-card p-7 shadow-float md:p-10">
            <div>
              <p className="cuco-kicker text-text-on-card-secondary">
                THE NEXT ACT
              </p>

              <h2 className="cuco-editorial mt-5 text-5xl leading-[0.9] text-text-on-card-primary md:text-6xl">
                When theatre
                <br />
                stopped,
                <br />
                the work didn't.
              </h2>

              <p className="mt-7 text-base leading-7 text-text-on-card-secondary md:text-lg">
                COVID brought live theatre to a halt. CUCO carries the studio's
                artistic practice forward — online, global, and focused on
                serious training.
              </p>
            </div>

            <div className="mt-10 border-t border-smoked-shadow/30 pt-6">
              <div className="flex items-center gap-3">
                <Globe2
                  aria-hidden="true"
                  className="h-5 w-5 text-smoked-ember"
                />

                <span className="text-sm font-semibold text-text-on-card-primary">
                  Students anywhere. Artists everywhere.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-smoked-card/35 py-16 md:py-24">
        <div className="cuco-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="cuco-kicker text-text-on-substrate-muted">
                THE TRAINING FLOOR
              </p>

              <h2 className="cuco-editorial mt-4 max-w-3xl text-5xl leading-[0.9] text-text-on-substrate-primary md:text-7xl">
                Learn the craft.
                <br />
                Make the work.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-text-on-substrate-muted">
              Professional-level courses designed for artists at different
              stages of their journey, delivered live online.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <DisciplineCard
              description="Character, text, presence, and the Gister technique."
              number="01"
              title="Acting"
            />

            <DisciplineCard
              description="Composition, rehearsal, interpretation, and directing."
              number="02"
              title="Directing"
            />

            <DisciplineCard
              description="Build scenes and one-act work from the page outward."
              number="03"
              title="Writing"
            />

            <DisciplineCard
              description="Develop clarity, physicality, projection, and speech."
              number="04"
              title="Voice & Speech"
            />

            <DisciplineCard
              description="Technique and performance training for the singing artist."
              number="05"
              title="Singing"
            />
          </div>
        </div>
      </section>

      {/* TANDEM FLAGSHIP */}
      <section className="cuco-shell py-16 md:py-24">
        <div className="overflow-hidden rounded-card bg-smoked-card shadow-float">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-7 md:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-control bg-smoked-ember px-3 py-2 text-xs font-bold tracking-[0.12em] text-text-on-card-primary shadow-physical">
                  FLAGSHIP
                </span>

                <span className="cuco-kicker text-text-on-card-secondary">
                  EIGHT-WEEK ONLINE LABORATORY
                </span>
              </div>

              <h2 className="cuco-editorial mt-7 text-6xl leading-[0.85] text-text-on-card-primary md:text-8xl">
                Tandem
              </h2>

              <p className="mt-7 max-w-2xl text-2xl leading-9 text-text-on-card-primary md:text-3xl">
                Three disciplines.
                <br />
                One collaboration.
                <br />
                Eight weeks.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-text-on-card-secondary md:text-lg">
                Writers, directors, and actors work together inside one
                integrated online laboratory. Each discipline brings its own
                craft into the room — then all three converge to make the
                final work.
              </p>

              <div className="mt-9">
                <PressedLink to="/courses">
                  Explore Tandem
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </PressedLink>
              </div>
            </div>

            <div className="border-t border-smoked-shadow/30 p-5 lg:border-l lg:border-t-0 lg:p-7">
              <div className="grid h-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                  <Clock3
                    aria-hidden="true"
                    className="h-5 w-5 text-smoked-ember"
                  />

                  <p className="cuco-kicker mt-5 text-text-on-substrate-muted">
                    TIME
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-text-on-substrate-primary">
                    60 hours
                  </p>

                  <p className="mt-2 text-sm leading-6 text-text-on-substrate-muted">
                    18 live sessions across eight weeks.
                  </p>
                </div>

                <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                  <Users
                    aria-hidden="true"
                    className="h-5 w-5 text-smoked-ember"
                  />

                  <p className="cuco-kicker mt-5 text-text-on-substrate-muted">
                    COLLABORATION
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-text-on-substrate-primary">
                    3 disciplines
                  </p>

                  <p className="mt-2 text-sm leading-6 text-text-on-substrate-muted">
                    Writers, directors, and actors working together.
                  </p>
                </div>

                <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                  <Play
                    aria-hidden="true"
                    className="h-5 w-5 text-smoked-ember"
                  />

                  <p className="cuco-kicker mt-5 text-text-on-substrate-muted">
                    DELIVERABLE
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-text-on-substrate-primary">
                    Recorded reading
                  </p>

                  <p className="mt-2 text-sm leading-6 text-text-on-substrate-muted">
                    A live Zoom script-in-hand reading captured on video.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL STUDIO STATEMENT */}
      <section className="cuco-shell pb-16 md:pb-24">
        <div className="rounded-card bg-smoked-card p-7 shadow-float md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-control bg-smoked-powder p-4 shadow-pressed">
                <Globe2
                  aria-hidden="true"
                  className="h-7 w-7 text-smoked-ember"
                />
              </div>

              <p className="cuco-kicker mt-6 text-text-on-card-secondary">
                THE GLOBAL STUDIO
              </p>
            </div>

            <div>
              <h2 className="cuco-editorial text-5xl leading-[0.9] text-text-on-card-primary md:text-7xl">
                Your stage
                <br />
                doesn't need
                <br />
                four walls.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-text-on-card-secondary">
                Whether you're a seasoned performer or picking up a script for
                the first time, CUCO is where your story begins.
              </p>

              <div className="mt-8">
                <PressedLink to="/courses">
                  Find your course
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </PressedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="border-t border-smoked-shadow/20">
        <div className="cuco-shell py-16 text-center md:py-24 lg:py-28">
          <p className="cuco-kicker text-text-on-substrate-muted">
            CULTURE COLLECTIVE STUDIO · CUCO
          </p>

          <h2 className="cuco-editorial mx-auto mt-5 max-w-5xl text-6xl leading-[0.82] text-text-on-substrate-primary md:text-8xl lg:text-[9rem]">
            Begin
            <br />
            your story.
          </h2>

          <div className="mt-9">
            <PressedLink to="/courses">
              Browse Courses
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </PressedLink>
          </div>
        </div>
      </section>
    </div>
  )
}


