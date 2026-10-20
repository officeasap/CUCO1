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

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_YOUR_PAYMENT_LINK_HERE'

function handleStripeCheckout(courseId: string, courseName: string) {
  console.log(`[Stripe] Redirecting to checkout for: ${courseId} — ${courseName}`)
  window.location.href = STRIPE_CHECKOUT_URL
}

const standaloneCourses = [
  {
    id: 'acting',
    icon: Theater,
    category: 'ACTING',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Actors rehearsing on stage',
    level: 'INTERMEDIATE / ADVANCED',
    title: 'Acting',
    description:
      'An intensive acting course focused on character development, script analysis, and the Gister technique.',
    format: '8 sessions · 3 hours each',
    classSize: '8 students maximum',
    price: '$1,000',
    instructor: 'Loni Berry',
    deliverables: [
      'A recorded scene',
      'A character journal',
      'A foundation in the Gister technique',
    ],
    available: true,
  },
  {
    id: 'directing',
    icon: Theater,
    category: 'DIRECTING',
    image:
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Directing and performance practice',
    level: 'STANDALONE',
    title: 'Directing',
    description:
      'Professional directing instruction from Loni Berry. Full course details will be announced soon.',
    format: 'Details coming soon',
    classSize: 'Details coming soon',
    price: 'Coming soon',
    instructor: 'Loni Berry',
    deliverables: [],
    available: false,
  },
  {
    id: 'writing',
    icon: PenLine,
    category: 'WRITING',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Writing and script development',
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
    id: 'voice-speech',
    icon: Mic2,
    category: 'VOICE & SPEECH',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Voice and microphone practice',
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
    id: 'singing',
    icon: Mic2,
    category: 'SINGING',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Live singing and music performance',
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
    id: 'tandem-writers',
    number: '01',
    title: 'Writers',
    description:
      'Apply with a one-act or section of a script. Revise and refine the work with guidance from the writing instructor.',
  },
  {
    id: 'tandem-actors',
    number: '02',
    title: 'Actors',
    description:
      'Audition with a two-minute monologue. Develop character, analyze text, and train in the Gister technique.',
  },
  {
    id: 'tandem-directors',
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
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 py-2.5',
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
        <div className="cuco-shell py-hero">
          <div className="max-w-3xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              CULTURE COLLECTIVE THEATRE INTENSIVE
            </span>
            <h1 className="cuco-editorial mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              Train
              <br />
              with
              <br />
              <span className="text-smoked-ember">artists.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-on-substrate-muted md:text-base">
              Professional-level training in acting, directing, writing, voice
              and speech, and singing — taught live online by artists with
              world-class credentials.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-control bg-smoked-card px-3 py-1.5 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">LIVE ONLINE</span>
              </span>
              <span className="rounded-control bg-smoked-card px-3 py-1.5 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">GLOBAL STUDENTS</span>
              </span>
              <span className="rounded-control bg-smoked-card px-3 py-1.5 shadow-pressed">
                <span className="cuco-kicker text-text-on-card-secondary">NA TIME ZONES</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS PROGRAM */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="max-w-3xl">
            <p className="cuco-kicker text-text-on-substrate-muted">
              WHY THIS PROGRAM
            </p>
            <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
              There is no direct competitor.
            </h2>
            <p className="mt-4 text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Free programs teach one discipline. Residential intensives cost
              thousands more and do not combine writers, directors, and actors
              into a single production.
            </p>
            <p className="mt-3 text-base font-semibold text-text-on-substrate-primary md:text-lg">
              This is conservatory training. Online. No travel. No housing. No
              compromise.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Five teachers.',
                body: 'Writing, acting, directing, voice, and film craft — every discipline taught by a working professional.',
              },
              {
                title: 'Small, auditioned cohort.',
                body: 'Writers, directors, and actors are selected in sequence so the room is always ready to work.',
              },
              {
                title: 'One tape.',
                body: 'Four original plays, filmed and edited. A produced credit and a reel piece in eight weeks.',
              },
              {
                title: 'A cohort for life.',
                body: 'Letters of recommendation from working professionals, and peers who will be in your corner for years.',
              },
            ].map((benefit) => (
              <article
                className="rounded-card bg-smoked-card p-5 shadow-raised"
                key={benefit.title}
              >
                <h3 className="cuco-editorial text-lg leading-tight text-text-on-card-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-on-card-secondary">
                  {benefit.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="max-w-2xl">
            <p className="cuco-kicker text-text-on-substrate-muted">
              THE WEEKLY SCHEDULE
            </p>
            <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
              Six days a week.
              <br />
              All Eastern Time.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              This is a conservatory commitment. Every day has a purpose. No
              filler, no lectures you could skip.
            </p>
          </div>

          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {[
              { day: 'Monday', time: '6–9 PM EST', block: 'Acting', who: 'Actors attend' },
              { day: 'Tuesday', time: '6–9 PM EST', block: 'Voice & Diction', who: 'Actors attend' },
              { day: 'Wednesday', time: '6–9 PM EST', block: 'Writing', who: 'Writers attend' },
              { day: 'Wednesday', time: '6–9 PM EST', block: 'Directing', who: 'Directors attend' },
              { day: 'Saturday', time: '10 AM–1 PM EST', block: 'Cohort', who: 'Everyone attends' },
            ].map((slot) => (
              <article
                className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5"
                key={`${slot.day}-${slot.block}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="cuco-editorial text-lg text-text-on-card-primary md:text-xl">
                    {slot.day}
                  </p>
                  <p className="cuco-mono text-xs text-text-on-card-secondary">
                    {slot.time}
                  </p>
                </div>
                <p className="mt-2 text-xs font-semibold text-text-on-card-primary md:text-sm">
                  {slot.block}
                </p>
                <p className="mt-1 text-xs text-text-on-card-secondary">{slot.who}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTOR TECHNICAL REQUIREMENTS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <p className="cuco-kicker text-text-on-substrate-muted">
                ACTOR TECHNICAL REQUIREMENTS
              </p>
              <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
                Come prepared.
                <br />
                Every actor needs this.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
                Not because we ask for the best gear. Because the work demands
                that every actor is seen, heard, and lit with care.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { title: 'Laptop or desktop', body: 'Windows or Mac, capable of running Zoom.' },
                { title: 'Webcam', body: 'Built-in or external. 720p minimum, 1080p preferred.' },
                { title: 'USB or lavalier mic', body: 'Strongly recommended for clean audio.' },
                { title: 'Headphones or earbuds', body: 'For monitoring without feedback.' },
                { title: 'Front light + green screen', body: 'Front light at eye level, green screen or chroma backdrop.' },
                { title: 'Wired Ethernet', body: 'Preferred for stability during filming.' },
                { title: 'Quiet room', body: 'Soft surfaces for clean audio.' },
                { title: 'Framing', body: 'Belly button up, head clearly visible.' },
              ].map((req) => (
                <div
                  className="rounded-control bg-smoked-card px-3 py-2.5 shadow-pressed"
                  key={req.title}
                >
                  <p className="text-xs font-semibold text-text-on-card-primary">
                    {req.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-text-on-card-secondary">
                    {req.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TANDEM HERO */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="rounded-card bg-smoked-card p-6 shadow-float md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-control bg-smoked-powder px-3 py-1 shadow-pressed">
                    <span className="cuco-kicker text-text-on-substrate-muted">
                      FLAGSHIP PROGRAM
                    </span>
                  </span>
                  <span className="cuco-mono text-xs text-text-on-card-secondary">
                    8 WEEKS
                  </span>
                </div>

                <h2 className="cuco-editorial mt-4 text-3xl font-semibold leading-none text-text-on-card-primary md:text-4xl">
                  The Tandem
                  <br />
                  Program.
                </h2>

                <p className="cuco-editorial mt-4 max-w-xl text-lg leading-snug text-text-on-card-primary md:text-xl">
                  Three disciplines. One collaboration. One finished reading.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-text-on-card-secondary">
                  Culture Collective Studio's Tandem Program brings together
                  writers, directors, and actors in a single integrated online
                  laboratory. Each group trains separately with its instructor.
                  All three work toward the same end: a recorded script-in-hand
                  reading of a new or revised script.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-card bg-smoked-powder p-3 shadow-pressed">
                    <Clock3 className="size-4 text-smoked-ember" />
                    <p className="cuco-mono mt-2 text-xs text-text-on-substrate-muted">
                      18 SESSIONS
                    </p>
                  </div>
                  <div className="rounded-card bg-smoked-powder p-3 shadow-pressed">
                    <Clock3 className="size-4 text-smoked-ember" />
                    <p className="cuco-mono mt-2 text-xs text-text-on-substrate-muted">
                      60 HOURS
                    </p>
                  </div>
                  <div className="rounded-card bg-smoked-powder p-3 shadow-pressed">
                    <Users className="size-4 text-smoked-ember" />
                    <p className="cuco-mono mt-2 text-xs text-text-on-substrate-muted">
                      3 TRACKS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-card bg-smoked-powder p-5 shadow-pressed">
                  <span className="cuco-kicker text-text-on-substrate-muted">
                    TUITION
                  </span>
                  <p className="cuco-editorial mt-3 text-4xl font-semibold leading-none md:text-5xl">
                    $2,000
                  </p>
                  <p className="mt-2 text-xs text-text-on-substrate-muted">
                    per student
                  </p>

                  <div className="mt-4 h-px bg-smoked-shadow/20" />

                  <div className="mt-4 flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-smoked-success" />
                    <p className="text-xs leading-5 text-text-on-substrate-muted">
                      Full payment upfront before Week 1.
                    </p>
                  </div>
                  <div className="mt-2 flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-smoked-success" />
                    <p className="text-xs leading-5 text-text-on-substrate-muted">
                      No payment plans.
                    </p>
                  </div>

                  <p className="mt-4 rounded-control bg-smoked-card p-3 text-[11px] font-semibold leading-4 text-text-on-card-secondary shadow-pressed">
                    $2,000 must be paid before Week 1. No exceptions.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      handleStripeCheckout(
                        'tandem-program',
                        'The Tandem Program',
                      )
                    }
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  >
                    Enroll & Pay
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TANDEM WORKS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-10">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                HOW IT WORKS
              </span>
              <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
                Three
                <br />
                tracks.
                <br />
                One spine.
              </h2>
            </div>

            <div className="space-y-3">
              {tandemTracks.map((track) => (
                <article
                  className="grid gap-3 rounded-card bg-smoked-card p-4 shadow-raised md:grid-cols-[40px_0.6fr_1.4fr_auto] md:items-center md:p-5"
                  key={track.id}
                >
                  <span className="cuco-mono text-sm text-text-on-card-secondary">
                    {track.number}
                  </span>

                  <h3 className="cuco-editorial text-xl font-semibold leading-none md:text-2xl">
                    {track.title}
                  </h3>

                  <p className="text-sm leading-6 text-text-on-card-secondary">
                    {track.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleStripeCheckout(track.id, track.title)}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-control bg-smoked-ember px-4 py-2 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                  >
                    Apply Now
                    <ArrowRight className="size-3.5" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL DELIVERABLE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-card bg-smoked-card p-5 shadow-raised md:p-8">
              <FileText className="size-6 text-smoked-ember" />
              <span className="cuco-kicker mt-4 block text-text-on-card-secondary">
                THE DELIVERABLE
              </span>
              <h2 className="cuco-editorial mt-3 text-2xl font-semibold leading-none text-text-on-card-primary md:text-3xl">
                A recorded
                <br />
                script-in-hand
                <br />
                reading.
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-on-card-secondary">
                Performed live on Zoom. Captured on video. Delivered to every
                participant.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="cuco-kicker text-text-on-substrate-muted">
                WHAT IT IS NOT
              </p>
              <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
                Not a staged
                <br />
                production.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-text-on-substrate-muted">
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
        <div className="cuco-shell py-section">
          <div className="max-w-2xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              PROGRAM SCHEDULE
            </span>
            <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
              Eight weeks.
              <br />
              One progression.
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {tandemSchedule.map((item) => (
              <article
                className="rounded-card bg-smoked-card p-5 shadow-raised md:p-6"
                key={item.period}
              >
                <span className="cuco-kicker text-text-on-card-secondary">
                  {item.period}
                </span>
                <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-3 rounded-card bg-smoked-card p-5 shadow-pressed md:p-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  TOTAL
                </span>
                <p className="cuco-editorial mt-1 text-2xl font-semibold">
                  18 sessions
                </p>
              </div>
              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  HOURS
                </span>
                <p className="cuco-editorial mt-1 text-2xl font-semibold">
                  60 hours
                </p>
              </div>
              <div>
                <span className="cuco-kicker text-text-on-card-secondary">
                  DURATION
                </span>
                <p className="cuco-editorial mt-1 text-2xl font-semibold">
                  8 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASTING */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                CASTING BREAKDOWN
              </span>
              <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
                Six actors.
                <br />
                Three men.
                <br />
                Three women.
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-on-substrate-muted">
                Ages 20–40. Roles across three one-act scripts.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-card bg-smoked-card p-5 shadow-raised">
                <Users className="size-5 text-smoked-ember" />
                <p className="cuco-editorial mt-4 text-3xl font-semibold">6</p>
                <p className="mt-1 cuco-kicker text-text-on-card-secondary">
                  ACTORS
                </p>
              </div>
              <div className="rounded-card bg-smoked-card p-5 shadow-raised">
                <Users className="size-5 text-smoked-ember" />
                <p className="cuco-editorial mt-4 text-3xl font-semibold">
                  3 / 3
                </p>
                <p className="mt-1 cuco-kicker text-text-on-card-secondary">
                  MEN / WOMEN
                </p>
              </div>
              <div className="rounded-card bg-smoked-card p-5 shadow-raised">
                <Users className="size-5 text-smoked-ember" />
                <p className="cuco-editorial mt-4 text-3xl font-semibold">
                  20–40
                </p>
                <p className="mt-1 cuco-kicker text-text-on-card-secondary">
                  AGE RANGE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="max-w-2xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              ADMISSIONS
            </span>
            <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
              Three phases.
              <br />
              In order.
            </h2>
            <p className="mt-4 text-sm leading-6 text-text-on-substrate-muted md:text-base">
              The Tandem Program admits participants in sequence so that the
              scripts, actors, and directors are assembled around the same
              collaborative laboratory.
            </p>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {[
              {
                id: 'tandem-writers',
                phase: 'PHASE 01',
                title: 'Writers',
                body: 'Writers apply first. Submit a one-act or section of a script that can be cast from the published pool of six actors.',
                outcome: 'Three writers selected.',
              },
              {
                id: 'tandem-actors',
                phase: 'PHASE 02',
                title: 'Actors',
                body: 'Actors audition with a two-minute monologue. Six actors are selected and cast across the three scripts.',
                outcome: 'Six actors selected.',
              },
              {
                id: 'tandem-directors',
                phase: 'PHASE 03',
                title: 'Directors',
                body: 'Directors apply and interview after scripts and actors are in place. Each selected director receives one script and its cast.',
                outcome: 'Three directors selected.',
              },
            ].map((phase) => (
              <article
                className="flex flex-col rounded-card bg-smoked-card p-5 shadow-raised md:p-6"
                key={phase.phase}
              >
                <span className="cuco-mono text-sm text-text-on-card-secondary">
                  {phase.phase}
                </span>
                <h3 className="cuco-editorial mt-4 text-2xl font-semibold">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
                  {phase.body}
                </p>
                <p className="mt-3 text-sm font-semibold text-text-on-card-primary">
                  {phase.outcome}
                </p>

                <button
                  type="button"
                  onClick={() => handleStripeCheckout(phase.id, phase.title)}
                  className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-control bg-smoked-ember px-4 py-2 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                >
                  Apply Now
                  <ArrowRight className="size-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ATTENDANCE */}
      <section className="border-b border-smoked-shadow/20">
        <div className="cuco-shell py-section">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <div>
              <span className="cuco-kicker text-text-on-substrate-muted">
                ATTENDANCE POLICY
              </span>
              <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
                When you
                <br />
                miss,
                <br />
                everyone misses.
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-on-substrate-muted">
                Tandem is a collaboration. Attendance is therefore part of the
                work, not an optional extra.
              </p>
            </div>

            <div className="space-y-2">
              {attendanceRules.map((rule, index) => (
                <div
                  className="flex gap-3 rounded-card bg-smoked-card p-4 shadow-raised"
                  key={rule}
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-smoked-powder shadow-pressed">
                    <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <p className="text-sm leading-6 text-text-on-card-secondary">
                    {rule}
                  </p>
                </div>
              ))}

              <div className="rounded-card bg-smoked-card p-4 shadow-pressed">
                <p className="cuco-kicker text-text-on-card-secondary">
                  WITHDRAWAL MEANS
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'Your place in the program',
                    'Your role in the recorded reading',
                    'Your credit in the program',
                  ].map((item) => (
                    <li
                      className="flex items-center gap-2 text-sm text-text-on-card-secondary"
                      key={item}
                    >
                      <ChevronRight className="size-3.5 text-smoked-ember" />
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
        <div className="cuco-shell py-section">
          <div className="max-w-2xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              TANDEM INSTRUCTORS
            </span>
            <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
              Artists at
              <br />
              the table.
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              { role: 'WRITING', name: 'Ron Sandberg' },
              { role: 'DIRECTING', name: 'Loni Berry' },
              { role: 'ACTING', name: 'Loni Berry' },
            ].map((instructor) => (
              <article
                className="rounded-card bg-smoked-card p-5 shadow-raised"
                key={instructor.role}
              >
                <div className="flex size-10 items-center justify-center rounded-control bg-smoked-powder shadow-pressed">
                  <Users className="size-4 text-smoked-ember" />
                </div>
                <span className="cuco-kicker mt-4 block text-text-on-card-secondary">
                  {instructor.role}
                </span>
                <h3 className="cuco-editorial mt-2 text-xl font-semibold">
                  {instructor.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDALONE COURSES */}
      <section>
        <div className="cuco-shell py-section">
          <div className="max-w-2xl">
            <span className="cuco-kicker text-text-on-substrate-muted">
              STANDALONE TRAINING
            </span>
            <h2 className="cuco-editorial mt-3 text-3xl font-semibold leading-none md:text-4xl">
              Go deeper.
              <br />
              One discipline at a time.
            </h2>
            <p className="mt-4 text-sm leading-6 text-text-on-substrate-muted md:text-base">
              Not every learner needs the Tandem laboratory. CUCO also offers
              focused standalone training for specific disciplines.
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {standaloneCourses.map((course) => {
              const Icon = course.icon

              return (
                <article
                  className="flex flex-col overflow-hidden rounded-card bg-smoked-card p-5 shadow-raised md:p-6"
                  key={course.id}
                >
                  <div className="relative -mx-5 -mt-5 mb-4 h-32 overflow-hidden rounded-t-card bg-smoked-powder md:-mx-6 md:-mt-6 md:h-40">
                    <img
                      src={course.image}
                      alt={course.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                    />
                    <span className="absolute bottom-3 left-3 rounded-control bg-black/60 px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-white">
                      {course.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-9 items-center justify-center rounded-control bg-smoked-powder shadow-pressed">
                      <Icon className="size-4 text-smoked-ember" />
                    </div>
                    <span className="cuco-kicker text-right text-text-on-card-secondary">
                      {course.category}
                    </span>
                  </div>

                  <p className="mt-4 cuco-kicker text-text-on-card-secondary">
                    {course.level}
                  </p>
                  <h3 className="cuco-editorial mt-2 text-2xl font-semibold leading-none">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
                    {course.description}
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-control bg-smoked-powder p-3 shadow-pressed">
                      <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                        FORMAT
                      </span>
                      <p className="mt-1 text-xs font-semibold">
                        {course.format}
                      </p>
                    </div>
                    <div className="rounded-control bg-smoked-powder p-3 shadow-pressed">
                      <span className="cuco-mono text-[10px] text-text-on-substrate-muted">
                        CLASS SIZE
                      </span>
                      <p className="mt-1 text-xs font-semibold">
                        {course.classSize}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-4 border-t border-smoked-shadow/20 pt-4">
                    <div>
                      <span className="cuco-kicker text-text-on-card-secondary">
                        TUITION
                      </span>
                      <p className="cuco-editorial mt-1 text-2xl font-semibold">
                        {course.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="cuco-kicker text-text-on-card-secondary">
                        INSTRUCTOR
                      </span>
                      <p className="mt-1 text-xs font-semibold">
                        {course.instructor}
                      </p>
                    </div>
                  </div>

                  {course.deliverables.length > 0 && (
                    <div className="mt-3 rounded-card bg-smoked-powder p-4 shadow-pressed">
                      <span className="cuco-kicker text-text-on-substrate-muted">
                        YOU WILL LEAVE WITH
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {course.deliverables.map((item) => (
                          <li
                            className="flex items-start gap-2 text-sm text-text-on-substrate-primary"
                            key={item}
                          >
                            <Check className="mt-0.5 size-3.5 shrink-0 text-smoked-success" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-4">
                    {course.available ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleStripeCheckout(course.id, course.title)
                        }
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                      >
                        Enroll & Pay
                        <ArrowRight className="size-4" />
                      </button>
                    ) : (
                      <div className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-control bg-smoked-powder px-5 py-2.5 text-xs font-semibold text-text-on-substrate-muted shadow-pressed">
                        Course details coming soon
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-6 rounded-card bg-smoked-card p-5 shadow-raised md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="cuco-kicker text-text-on-substrate-muted">
                  QUESTIONS?
                </p>
                <p className="cuco-editorial mt-1 text-xl font-semibold text-text-on-card-primary md:text-2xl">
                  Talk to the studio.
                </p>
              </div>
              <PressedLink to="/contact">
                Contact Admissions
                <ArrowRight className="size-4 text-smoked-ember" />
              </PressedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}