import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Mic2,
  PenLine,
  Theater,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const standaloneCourses = [
  {
    icon: Theater,
    category: 'ACTING',
    level: 'INTERMEDIATE / ADVANCED',
    title: 'Acting',
    description:
      'An intensive acting course focused on character development, script analysis, and the Gister technique.',
    format: '8 sessions · 3 hours each',
    classSize: '8 students maximum',
    price: '$1,000',
    instructor: 'KWAME KWAME',
    deliverables: [
      'A recorded scene',
      'A character journal',
      'A foundation in the Gister technique',
    ],
    available: true,
  },
  {
    icon: Theater,
    category: 'DIRECTING',
    level: 'STANDALONE',
    title: 'Directing',
    description:
      'Professional directing instruction from KWAME KWAME. Full course details will be announced soon.',
    format: 'Details coming soon',
    classSize: 'Details coming soon',
    price: 'Coming soon',
    instructor: 'KWAME KWAME',
    deliverables: [],
    available: false,
  },
  {
    icon: PenLine,
    category: 'WRITING',
    level: 'STANDALONE',
    title: 'Writing',
    description:
      'Playwriting instruction with American playwright Ron Sandberg, whose work has been produced internationally.',
    format: 'Details coming soon',
    classSize: 'Details coming soon',
    price: 'Coming soon',
    instructor: 'RON SANDBERG',
    deliverables: [],
    available: false,
  },
  {
    icon: Mic2,
    category: 'VOICE & SPEECH',
    level: 'STANDALONE',
    title: 'Voice & Speech',
    description:
      'Voice and speech training led by internationally acclaimed tenor Kenneth Tarver.',
    format: 'Details coming soon',
    classSize: 'Details coming soon',
    price: 'Coming soon',
    instructor: 'KENNETH TARVER',
    deliverables: [],
    available: false,
  },
  {
    icon: Mic2,
    category: 'SINGING',
    level: 'STANDALONE',
    title: 'Singing',
    description:
      'Vocal training with internationally experienced operatic tenor Kenneth Tarver.',
    format: 'Details coming soon',
    classSize: 'Details coming soon',
    price: 'Coming soon',
    instructor: 'KENNETH TARVER',
    deliverables: [],
    available: false,
  },
]

const tandemTracks = [
  {
    number: '01',
    title: 'Writers',
    description:
      'Apply with a one-act or section of a script. Revise and refine the work with guidance from the writing instructor.',
  },
  {
    number: '02',
    title: 'Actors',
    description:
      'Audition with a two-minute monologue. Develop character, analyze text, and train in the Gister technique.',
  },
  {
    number: '03',
    title: 'Directors',
    description:
      'Apply and interview after scripts and actors are selected. Each director is assigned one script and its cast.',
  },
]

const tandemSchedule = [
  {
    period: 'WEEKS 1–6',
    detail:
      'Each track meets separately once per week for 3 hours. All three tracks meet together every Saturday for 4 hours of collaboration.',
  },
  {
    period: 'WEEKS 7–8',
    detail:
      'All three tracks converge for rehearsal, refinement, and the final recorded reading. Three sessions per week.',
  },
]

const attendanceRules = [
  'Parallel sessions: one absence is excused. Two absences trigger a warning. Three absences mean withdrawal.',
  'Collaboration Saturdays: any absence counts as two.',
  'Convergence weeks 7–8: any absence counts as three. You cannot miss the recording.',
  'One documented medical or family emergency may be considered at the instructor’s discretion. This exception does not apply to weeks 7–8.',
]

function PressedLink({
  children,
  to,
  secondary = false,
}: {
  children: React.ReactNode
  to: string
  secondary?: boolean
}) {
  return (
    <Link
      className={[
        'inline-flex min-h-12 items-center justify-center gap-3 rounded-control px-6 py-3',
        'text-sm font-semibold transition-[box-shadow,transform,color] duration-200 ease-cathedral',
        secondary
          ? 'bg-smoked-powder text-text-on-substrate-primary shadow-pressed hover:-translate-y-0.5 hover:shadow-raised'
          : 'bg-smoked-card text-text-on-card-primary shadow-raised hover:-translate-y-0.5 hover:shadow-raised-hover',
        'active:translate-y-0.5 active:shadow-pressed',
      ].join(' ')}
      to={to}
    >
      {children}
    </Link>
  )
}

export function Courses() {
  return (
    <main className="overflow-hidden">
      {/* PAGE HERO */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="max-w-5xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              CULTURE COLLECTIVE STUDIO / COURSES
            </span>

            <h1 className="cuco-editorial mt-7 text-6xl font-semibold leading-[0.86] tracking-[-0.035em] sm:text-7xl lg:text-[7rem]">
              Train
              <br />
              with
              <br />
              <span className="text-smoked-ember">artists.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-text-on-substrate-muted md:text-xl md:leading-9">
              Professional-level training in acting, directing, writing, voice
              and speech, and singing — taught live online by artists with
              world-class credentials.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-control bg-smoked-card px-5 py-3 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">
                  LIVE ONLINE
                </span>
              </div>

              <div className="rounded-control bg-smoked-card px-5 py-3 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">
                  GLOBAL STUDENTS
                </span>
              </div>

              <div className="rounded-control bg-smoked-card px-5 py-3 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">
                  NORTH AMERICAN TIME ZONES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TANDEM HERO */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="rounded-card bg-smoked-card p-6 shadow-float md:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-control bg-smoked-powder px-4 py-2 shadow-pressed">
                    <span className="cuco-kicker text-text-on-substrate-muted">
                      FLAGSHIP PROGRAM
                    </span>
                  </span>

                  <span className="cuco-mono text-xs text-text-on-card-secondary">
                    8 WEEKS
                  </span>
                </div>

                <h2 className="cuco-editorial mt-7 text-5xl font-semibold leading-[0.88] text-text-on-card-primary md:text-7xl">
                  The Tandem
                  <br />
                  Program.
                </h2>

                <p className="cuco-editorial mt-7 max-w-3xl text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                  Three disciplines. One collaboration. One finished reading.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-text-on-card-secondary md:text-lg">
                  Culture Collective Studio’s Tandem Program brings together
                  writers, directors, and actors in a single integrated online
                  laboratory. Each group trains separately with its instructor.
                  All three work toward the same end: a recorded
                  script-in-hand reading of a new or revised script.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                    <Clock3 className="size-5 text-smoked-ember" />

                    <p className="cuco-mono mt-4 text-xs text-text-on-substrate-muted">
                      18 SESSIONS
                    </p>
                  </div>

                  <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                    <Clock3 className="size-5 text-smoked-ember" />

                    <p className="cuco-mono mt-4 text-xs text-text-on-substrate-muted">
                      60 HOURS
                    </p>
                  </div>

                  <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                    <Users className="size-5 text-smoked-ember" />

                    <p className="cuco-mono mt-4 text-xs text-text-on-substrate-muted">
                      3 TRACKS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-card bg-smoked-powder p-7 shadow-pressed">
                  <span className="cuco-kicker text-text-on-substrate-muted">
                    TUITION
                  </span>

                  <p className="cuco-editorial mt-4 text-6xl font-semibold leading-none md:text-7xl">
                    $2,000
                  </p>

                  <p className="mt-3 text-sm text-text-on-substrate-muted">
                    per student
                  </p>

                  <div className="mt-7 h-px bg-smoked-shadow/20" />

                  <div className="mt-6 flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-smoked-success" />

                    <p className="text-sm leading-6 text-text-on-substrate-muted">
                      Full payment upfront before Week 1.
                    </p>
                  </div>

                  <div className="mt-3 flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-smoked-success" />

                    <p className="text-sm leading-6 text-text-on-substrate-muted">
                      No payment plans.
                    </p>
                  </div>

                  <p className="mt-6 rounded-control bg-smoked-card p-4 text-xs font-semibold leading-5 text-text-on-card-secondary shadow-pressed">
                    $2,000 must be paid before Week 1. No exceptions.
                  </p>
                </div>

                <div className="mt-4">
                  <PressedLink to="/contact">
                    Ask About Admissions
                    <ArrowRight className="size-4 text-smoked-ember" />
                  </PressedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TANDEM WORKS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                HOW IT WORKS
              </span>

              <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-[0.9] md:text-6xl">
                Three
                <br />
                tracks.
                <br />
                One spine.
              </h2>
            </div>

            <div className="space-y-5">
              {tandemTracks.map((track) => (
                <article
                  className="grid gap-5 rounded-card bg-smoked-card p-6 shadow-raised md:grid-cols-[80px_0.7fr_1.3fr] md:p-8"
                  key={track.number}
                >
                  <span className="cuco-mono text-sm text-text-on-card-secondary">
                    {track.number}
                  </span>

                  <h3 className="cuco-editorial text-3xl font-semibold leading-none md:text-4xl">
                    {track.title}
                  </h3>

                  <p className="text-sm leading-7 text-text-on-card-secondary">
                    {track.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL DELIVERABLE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-card bg-smoked-card p-8 shadow-raised md:p-12">
              <FileText className="size-8 text-smoked-ember" />

              <span className="cuco-kicker mt-8 block text-text-on-card-secondary">
                THE DELIVERABLE
              </span>

              <h2 className="cuco-editorial mt-5 text-4xl font-semibold leading-none text-text-on-card-primary md:text-5xl">
                A recorded
                <br />
                script-in-hand
                <br />
                reading.
              </h2>

              <p className="mt-7 text-sm leading-7 text-text-on-card-secondary">
                Performed live on Zoom. Captured on video. Delivered to every
                participant.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="cuco-kicker text-text-on-substrate-muted">
                WHAT IT IS NOT
              </p>

              <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-[0.9] md:text-6xl">
                Not a staged
                <br />
                production.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-text-on-substrate-muted">
                There are no sets, no costumes, and no lights. It is a reading.
                The script is the spine. The actors hold their pages. The
                director composes the screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              PROGRAM SCHEDULE
            </span>

            <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Eight weeks.
              <br />
              One progression.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {tandemSchedule.map((item) => (
              <article
                className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9"
                key={item.period}
              >
                <span className="cuco-kicker text-text-on-card-secondary">
                  {item.period}
                </span>

                <p className="mt-6 text-base leading-8 text-text-on-card-secondary">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-card bg-smoked-card p-7 shadow-pressed md:p-9">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  TOTAL
                </span>

                <p className="cuco-editorial mt-2 text-4xl font-semibold">
                  18 sessions
                </p>
              </div>

              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  HOURS
                </span>

                <p className="cuco-editorial mt-2 text-4xl font-semibold">
                  60 hours
                </p>
              </div>

              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  DURATION
                </span>

                <p className="cuco-editorial mt-2 text-4xl font-semibold">
                  8 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASTING */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                CASTING BREAKDOWN
              </span>

              <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-[0.9] md:text-6xl">
                Six actors.
                <br />
                Three men.
                <br />
                Three women.
              </h2>

              <p className="mt-6 text-sm leading-7 text-text-on-substrate-muted">
                Ages 20–40. Roles across three one-act scripts.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-card bg-smoked-card p-7 shadow-raised">
                <Users className="size-6 text-smoked-ember" />

                <p className="cuco-editorial mt-7 text-5xl font-semibold">
                  6
                </p>

                <p className="mt-2 cuco-kicker text-text-on-card-secondary">
                  ACTORS
                </p>
              </div>

              <div className="rounded-card bg-smoked-card p-7 shadow-raised">
                <Users className="size-6 text-smoked-ember" />

                <p className="cuco-editorial mt-7 text-5xl font-semibold">
                  3 / 3
                </p>

                <p className="mt-2 cuco-kicker text-text-on-card-secondary">
                  MEN / WOMEN
                </p>
              </div>

              <div className="rounded-card bg-smoked-card p-7 shadow-raised">
                <Users className="size-6 text-smoked-ember" />

                <p className="cuco-editorial mt-7 text-5xl font-semibold">
                  20–40
                </p>

                <p className="mt-2 cuco-kicker text-text-on-card-secondary">
                  AGE RANGE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              ADMISSIONS
            </span>

            <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Three phases.
              <br />
              In order.
            </h2>

            <p className="mt-6 text-base leading-8 text-text-on-substrate-muted md:text-lg">
              The Tandem Program admits participants in sequence so that the
              scripts, actors, and directors are assembled around the same
              collaborative laboratory.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <article className="rounded-card bg-smoked-card p-7 shadow-raised">
              <span className="cuco-mono text-sm text-text-on-card-secondary">
                PHASE 01
              </span>

              <h3 className="cuco-editorial mt-8 text-4xl font-semibold">
                Writers
              </h3>

              <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
                Writers apply first. Submit a one-act or section of a script
                that can be cast from the published pool of six actors.
              </p>

              <p className="mt-5 text-sm font-semibold text-text-on-card-primary">
                Three writers selected.
              </p>
            </article>

            <article className="rounded-card bg-smoked-card p-7 shadow-raised">
              <span className="cuco-mono text-sm text-text-on-card-secondary">
                PHASE 02
              </span>

              <h3 className="cuco-editorial mt-8 text-4xl font-semibold">
                Actors
              </h3>

              <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
                Actors audition with a two-minute monologue. Six actors are
                selected and cast across the three scripts.
              </p>

              <p className="mt-5 text-sm font-semibold text-text-on-card-primary">
                Six actors selected.
              </p>
            </article>

            <article className="rounded-card bg-smoked-card p-7 shadow-raised">
              <span className="cuco-mono text-sm text-text-on-card-secondary">
                PHASE 03
              </span>

              <h3 className="cuco-editorial mt-8 text-4xl font-semibold">
                Directors
              </h3>

              <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
                Directors apply and interview after scripts and actors are in
                place. Each selected director receives one script and its cast.
              </p>

              <p className="mt-5 text-sm font-semibold text-text-on-card-primary">
                Three directors selected.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ATTENDANCE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                ATTENDANCE POLICY
              </span>

              <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-[0.9] md:text-6xl">
                When you
                <br />
                miss,
                <br />
                everyone misses.
              </h2>

              <p className="mt-6 text-sm leading-7 text-text-on-substrate-muted">
                Tandem is a collaboration. Attendance is therefore part of the
                work, not an optional extra.
              </p>
            </div>

            <div className="space-y-4">
              {attendanceRules.map((rule, index) => (
                <div
                  className="flex gap-4 rounded-card bg-smoked-card p-5 shadow-raised md:p-6"
                  key={rule}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-smoked-powder shadow-pressed">
                    <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>

                  <p className="text-sm leading-7 text-text-on-card-secondary">
                    {rule}
                  </p>
                </div>
              ))}

              <div className="rounded-card bg-smoked-card p-6 shadow-pressed">
                <p className="cuco-kicker text-text-on-card-secondary">
                  WITHDRAWAL MEANS
                </p>

                <ul className="mt-5 space-y-3">
                  {[
                    'Your place in the program',
                    'Your role in the recorded reading',
                    'Your credit in the program',
                  ].map((item) => (
                    <li
                      className="flex items-center gap-3 text-sm text-text-on-card-secondary"
                      key={item}
                    >
                      <ChevronRight className="size-4 text-smoked-ember" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              TANDEM INSTRUCTORS
            </span>

            <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Artists at
              <br />
              the table.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                role: 'WRITING',
                name: 'Ron Sandberg',
              },
              {
                role: 'DIRECTING',
                name: 'KWAME KWAME',
              },
              {
                role: 'ACTING',
                name: 'KWAME KWAME',
              },
            ].map((instructor) => (
              <article
                className="rounded-card bg-smoked-card p-7 shadow-raised"
                key={instructor.role}
              >
                <div className="flex size-12 items-center justify-center rounded-control bg-smoked-powder shadow-pressed">
                  <Users className="size-5 text-smoked-ember" />
                </div>

                <span className="cuco-kicker mt-8 block text-text-on-card-secondary">
                  {instructor.role}
                </span>

                <h3 className="cuco-editorial mt-3 text-3xl font-semibold">
                  {instructor.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDALONE COURSES */}
      <section>
        <div className="cuco-shell py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              STANDALONE TRAINING
            </span>

            <h2 className="cuco-editorial mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Go deeper.
              <br />
              One discipline at a time.
            </h2>

            <p className="mt-6 text-base leading-8 text-text-on-substrate-muted md:text-lg">
              Not every learner needs the Tandem laboratory. CUCO also offers
              focused standalone training for specific disciplines.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {standaloneCourses.map((course) => {
              const Icon = course.icon

              return (
                <article
                  className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9"
                  key={course.title}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-12 items-center justify-center rounded-control bg-smoked-powder shadow-pressed">
                      <Icon className="size-5 text-smoked-ember" />
                    </div>

                    <span className="cuco-kicker text-right text-text-on-card-secondary">
                      {course.category}
                    </span>
                  </div>

                  <p className="mt-8 cuco-kicker text-text-on-card-secondary">
                    {course.level}
                  </p>

                  <h3 className="cuco-editorial mt-4 text-4xl font-semibold leading-none">
                    {course.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
                    {course.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-control bg-smoked-powder p-4 shadow-pressed">
                      <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                        FORMAT
                      </span>

                      <p className="mt-2 text-xs font-semibold">
                        {course.format}
                      </p>
                    </div>

                    <div className="rounded-control bg-smoked-powder p-4 shadow-pressed">
                      <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                        CLASS SIZE
                      </span>

                      <p className="mt-2 text-xs font-semibold">
                        {course.classSize}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-5 border-t border-smoked-shadow/20 pt-6">
                    <div>
                      <span className="cuco-kicker text-text-on-card-secondary">
                        TUITION
                      </span>

                      <p className="cuco-editorial mt-2 text-3xl font-semibold">
                        {course.price}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="cuco-kicker text-text-on-card-secondary">
                        INSTRUCTOR
                      </span>

                      <p className="mt-2 text-xs font-semibold">
                        {course.instructor}
                      </p>
                    </div>
                  </div>

                  {course.deliverables.length > 0 && (
                    <div className="mt-6 rounded-card bg-smoked-powder p-5 shadow-pressed">
                      <span className="cuco-kicker text-text-on-substrate-muted">
                        YOU WILL LEAVE WITH
                      </span>

                      <ul className="mt-4 space-y-3">
                        {course.deliverables.map((item) => (
                          <li
                            className="flex items-start gap-3 text-sm text-text-on-substrate-primary"
                            key={item}
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-smoked-success" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-7">
                    {course.available ? (
                      <PressedLink to="/contact">
                        Ask About Enrollment
                        <ArrowRight className="size-4 text-smoked-ember" />
                      </PressedLink>
                    ) : (
                      <div className="inline-flex min-h-11 items-center gap-2 rounded-control bg-smoked-powder px-5 py-3 text-xs font-semibold text-text-on-substrate-muted shadow-pressed">
                        Course details coming soon
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}