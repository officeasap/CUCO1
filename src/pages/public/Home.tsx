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
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 py-2.5 text-sm font-semibold transition-[box-shadow,transform,color] duration-200 ease-cathedral active:translate-y-0.5'

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
      ? '/brand/archieve-culture-collective.png'
      : null

  return (
    <div
      aria-label={`${label} image`}
      className={[
        'relative overflow-hidden rounded-card bg-smoked-card shadow-float',
        aspect === 'wide' ? 'min-h-48 md:min-h-64' : 'min-h-56 md:min-h-72',
      ].join(' ')}
      role="img"
    >
      {imageSrc ? (
        <img
          alt={label}
          loading="lazy"
          decoding="async"
          className={[
            'h-full w-full rounded-card',
            isArchiveCulture ? 'object-contain' : 'object-cover',
          ].join(' ')}
          src={imageSrc}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <div className="rounded-control bg-smoked-card p-3 shadow-physical">
            <Play aria-hidden="true" className="h-5 w-5 text-text-on-card-primary" />
          </div>
          <p className="cuco-kicker mt-3 text-text-on-substrate-muted">{label}</p>
        </div>
      )}
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
    <article className="group rounded-card bg-smoked-card p-4 shadow-physical transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-float md:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="cuco-kicker text-text-on-card-secondary">{number}</span>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 text-text-on-card-secondary transition-transform duration-200 ease-cathedral group-hover:translate-x-1"
        />
      </div>
      <h3 className="cuco-editorial mt-3 text-lg text-text-on-card-primary md:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
        {description}
      </p>
    </article>
  )
}

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="cuco-shell relative py-hero">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-control bg-smoked-card px-3 py-1.5 shadow-physical">
              <span className="h-2 w-2 rounded-full bg-smoked-ember" />
              <span className="cuco-kicker text-text-on-card-secondary">
                CULTURE COLLECTIVE STUDIO
              </span>
            </div>

            <h1 className="cuco-editorial mt-5 max-w-4xl text-4xl leading-[0.95] text-text-on-substrate-primary sm:text-5xl lg:text-6xl">
              Theatre
              <br />
              <span className="text-smoked-ember">reborn.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-text-on-substrate-primary md:text-lg md:leading-8">
              Bold, multicultural theatre — reborn as a global online studio.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Professional-level training in acting, directing, writing, voice
              and speech, and singing — built from the artistic practice of
              Culture Collective Studio in Bangkok.
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <PressedLink to="/courses">
                Browse Courses <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PressedLink>
              <PressedLink to="/our-story" variant="secondary">
                Our Story
              </PressedLink>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <ArrowDown aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
              <span className="cuco-kicker text-text-on-substrate-muted">
                ENTER THE STUDIO
              </span>
            </div>
          </div>

          <PhysicalImagePlaceholder aspect="portrait" label="CUCO / STUDIO PORTRAIT" />
        </div>
      </section>

      {/* FOUNDING STATEMENT */}
      <section className="border-y border-smoked-shadow/20 bg-smoked-card/40">
        <div className="cuco-shell py-section">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
            <div>
              <p className="cuco-kicker text-text-on-substrate-muted">THE STUDIO</p>
              <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
                From Bangkok
                <br />
                to anywhere.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-text-on-substrate-primary md:text-lg md:leading-8">
                Founded by American director, playwright, and educator{' '}
                <strong>Loni Berry</strong>, Culture Collective Studio spent
                six years creating provocative, multilingual, award-winning
                theatre in Bangkok.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
                The work brought classic plays and original writing together
                with artists from different cultures, challenging audiences
                while creating space for connection, identity, and
                experimentation.
              </p>

              <div className="mt-5">
                <Link
                  className="inline-flex items-center gap-2 rounded-control bg-smoked-card px-4 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  to="/our-story"
                >
                  Discover the story <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVID → ONLINE */}
      <section className="cuco-shell py-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <PhysicalImagePlaceholder aspect="wide" label="ARCHIVE / CULTURE COLLECTIVE" />

          <div className="flex flex-col justify-between rounded-card bg-smoked-card p-5 shadow-float md:p-7">
            <div>
              <p className="cuco-kicker text-text-on-card-secondary">THE NEXT ACT</p>
              <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                When theatre
                <br />
                stopped,
                <br />
                the work didn't.
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                COVID brought live theatre to a halt. CUCO carries the studio's
                artistic practice forward — online, global, and focused on
                serious training.
              </p>
            </div>

            <div className="mt-4 border-t border-smoked-shadow/30 pt-4">
              <div className="flex items-center gap-2">
                <Globe2 aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                <span className="text-xs font-semibold text-text-on-card-primary md:text-sm">
                  Students anywhere. Artists everywhere.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CLASSROOM IS LIVE — Zoom class facility */}
      <section className="cuco-shell py-section">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-card bg-smoked-powder shadow-pressed">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-smoked-ember"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <p className="cuco-kicker mt-5 text-text-on-card-secondary">
              THE CLASSROOM IS LIVE
            </p>
            <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-card-primary md:text-3xl">
              Live. Online.
              <br />
              In the same room.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
              Every class meets on Zoom at a fixed hour, with cameras on. You
              work with your cohort in real time — no recordings, no replays,
              no isolation. The room is small enough to know every name in it.
            </p>
            <p className="mt-3 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Actors train for the lens. Directors compose the frame. Writers
              watch the words become a performance. All three meet in the same
              Saturday cohort.
            </p>
          </div>

          <div
            aria-label="Live online class screenshot"
            className="relative overflow-hidden rounded-card bg-smoked-card shadow-float min-h-48 md:min-h-64"
            role="img"
          >
            <div className="flex h-full w-full items-center justify-center px-4 text-center">
              <div>
                <div className="rounded-control bg-smoked-card p-3 shadow-physical inline-flex">
                  <Play aria-hidden="true" className="h-5 w-5 text-text-on-card-primary" />
                </div>
                <p className="cuco-kicker mt-3 text-text-on-substrate-muted">
                  LIVE ONLINE CLASS
                </p>
                <p className="mt-2 text-xs text-text-on-substrate-muted md:text-sm">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-smoked-card/35 py-section">
        <div className="cuco-shell">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="cuco-kicker text-text-on-substrate-muted">
                THE TRAINING FLOOR
              </p>
              <h2 className="cuco-editorial mt-3 max-w-2xl text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
                Learn the craft.
                <br />
                Make the work.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-text-on-substrate-muted md:text-base">
              Professional-level courses designed for artists at different
              stages of their journey, delivered live online.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <DisciplineCard
              number="01"
              title="Acting"
              description="Character, text, presence, and the Gister technique."
            />
            <DisciplineCard
              number="02"
              title="Directing"
              description="Composition, rehearsal, interpretation, and directing."
            />
            <DisciplineCard
              number="03"
              title="Writing"
              description="Build scenes and one-act work from the page outward."
            />
            <DisciplineCard
              number="04"
              title="Voice & Speech"
              description="Develop clarity, physicality, projection, and speech."
            />
            <DisciplineCard
              number="05"
              title="Singing"
              description="Technique and performance training for the singing artist."
            />
          </div>
        </div>
      </section>

      {/* TANDEM FLAGSHIP */}
      <section className="cuco-shell py-section">
        <div className="overflow-hidden rounded-card bg-smoked-card shadow-float">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-control bg-smoked-ember px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-text-on-card-primary shadow-physical">
                  FLAGSHIP
                </span>
                <span className="cuco-kicker text-text-on-card-secondary">
                  EIGHT-WEEK ONLINE LABORATORY
                </span>
              </div>

              <h2 className="cuco-editorial mt-4 text-4xl leading-none text-text-on-card-primary md:text-5xl">
                Tandem
              </h2>

              <p className="mt-4 max-w-xl text-lg leading-7 text-text-on-card-primary md:text-xl md:leading-8">
                Three disciplines.
                <br />
                One collaboration.
                <br />
                Eight weeks.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Writers, directors, and actors work together inside one
                integrated online laboratory. Each discipline brings its own
                craft into the room — then all three converge to make the
                final work.
              </p>

              <div className="mt-5">
                <PressedLink to="/courses">
                  Explore Tandem <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </PressedLink>
              </div>
            </div>

            <div className="border-t border-smoked-shadow/30 p-4 lg:border-l lg:border-t-0 lg:p-5">
              <div className="grid h-full gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-card bg-smoked-powder p-4 shadow-pressed">
                  <Clock3 aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                  <p className="cuco-kicker mt-3 text-text-on-substrate-muted">TIME</p>
                  <p className="mt-1 text-lg font-semibold text-text-on-substrate-primary">60 hours</p>
                  <p className="mt-1 text-xs leading-5 text-text-on-substrate-muted">
                    18 live sessions across eight weeks.
                  </p>
                </div>
                <div className="rounded-card bg-smoked-powder p-4 shadow-pressed">
                  <Users aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                  <p className="cuco-kicker mt-3 text-text-on-substrate-muted">COLLABORATION</p>
                  <p className="mt-1 text-lg font-semibold text-text-on-substrate-primary">3 disciplines</p>
                  <p className="mt-1 text-xs leading-5 text-text-on-substrate-muted">
                    Writers, directors, and actors working together.
                  </p>
                </div>
                <div className="rounded-card bg-smoked-powder p-4 shadow-pressed">
                  <Play aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                  <p className="cuco-kicker mt-3 text-text-on-substrate-muted">DELIVERABLE</p>
                  <p className="mt-1 text-lg font-semibold text-text-on-substrate-primary">Recorded reading</p>
                  <p className="mt-1 text-xs leading-5 text-text-on-substrate-muted">
                    A live Zoom script-in-hand reading captured on video.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL STUDIO STATEMENT */}
      <section className="cuco-shell pb-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-8">
            <div>
              <div className="inline-flex rounded-control bg-smoked-powder p-3 shadow-pressed">
                <Globe2 aria-hidden="true" className="h-6 w-6 text-smoked-ember" />
              </div>
              <p className="cuco-kicker mt-4 text-text-on-card-secondary">
                THE GLOBAL STUDIO
              </p>
            </div>
            <div>
              <h2 className="cuco-editorial text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                Your stage
                <br />
                doesn't need
                <br />
                four walls.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Whether you're a seasoned performer or picking up a script for
                the first time, CUCO is where your story begins.
              </p>
              <div className="mt-5">
                <PressedLink to="/courses">
                  Find your course <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </PressedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="border-t border-smoked-shadow/20">
        <div className="cuco-shell py-section text-center">
          <p className="cuco-kicker text-text-on-substrate-muted">
            CULTURE COLLECTIVE STUDIO · CUCO
          </p>

          <h2 className="cuco-editorial mx-auto mt-4 max-w-3xl text-4xl leading-tight text-text-on-substrate-primary md:text-5xl">
            Begin
            <br />
            your story.
          </h2>

          <div className="mt-6 flex justify-center">
            <PressedLink to="/courses">
              Browse Courses <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
          </div>
        </div>
      </section>
    </div>
  )
}