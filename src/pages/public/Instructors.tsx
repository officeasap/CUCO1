import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Mic2,
  PenTool,
  Theater,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const instructors = [
  {
    name: 'Loni Berry',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Loni_Berry',
    image: '/brand/loni-berry.png',
    role: 'Founder · Artistic Director · Acting & Directing',
    disciplines: ['Acting', 'Directing'],
    icon: Theater,
    summary:
      'American theatre educator, playwright, director, and founder of Culture Collective Studio in Bangkok.',
    bio: [
      'Loni Berry is an American theatre educator, playwright, and director whose career has moved between professional theatre, higher education, curriculum development, and international artistic collaboration.',
      'His teaching has included Williams College, California State University San Marcos, and the University of California San Diego. He was also the founding director of Oakland School for the Arts, where he led a curriculum combining college preparation with pre-professional arts training.',
      'As a playwright and director, his work has been presented at venues and institutions including the American Place Theatre, California Center for the Arts, Great Lakes Theater Festival, Hartford Stage, Kennedy Center, La Jolla Playhouse, Mirror Repertory Theatre, National Black Theatre Festival, New Federal Theatre, Public Theatre, Rites & Reason Theatre, and Seattle Rep.',
      'Based in Bangkok, Loni Berry founded Culture Collective Studio and became a professor at Bangkok University. He was educated at Brown University and Yale University.',
    ],
    credentials: [
      'Brown University',
      'Yale University',
      'Bangkok University',
      'Founding Director — Oakland School for the Arts',
    ],
  },
  {
    name: 'Dominic Taylor',
    wikipediaUrl: 'https://www.tft.ucla.edu/directory/people/dominic-taylor/',
    image: '/brand/dominic-taylor.png',
    role: 'Writing Instructor',
    disciplines: ['Writing'],
    icon: PenTool,
    summary:
      'Writer-director and scholar of African American theater whose work has been seen across the country.',
    bio: [
      'He is presently working on a commission from Ford\u2019s Theatre in their Lincoln Legacy Project.',
      'In addition, the Goodman Theatre, Steppenwolf Theatre, Ensemble Studio Theatre and New York Theatre Workshop have all commissioned Taylor as a writer.',
      'His published work includes Wedding Dance and Personal History; both produced at the Kennedy Center by the African Continuum Theatre; Upcity Service(s), included in the anthology Seven More Different Plays, edited by Mac Wellman (Broadway Play Publishing); and Hype Hero, which was developed at the Eugene O\u2019Neill Theatre Center in Waterford, Conn., produced at Brown University in Fall 2014 and published in 2021.',
      'His play I Wish You Love premiered at Penumbra Theatre Co. in St. Paul, Minn., and was produced at The Kennedy Center and Hartford Stage in 2012.',
    ],
    credentials: [
      'Alumnus member of New Dramatists',
      'Brown University',
      'Stage Directors and Choreographers Society',
      'Vice Chair, Graduate Studies',
    ],
  },
  {
    name: 'Kenneth Tarver',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Kenneth_Tarver',
    image: '/brand/kenneth-traver.png',
    role: 'Voice · Speech & Singing Instructor',
    disciplines: ['Voice & Speech', 'Singing'],
    icon: Mic2,
    summary:
      'American operatic tenor whose international career spans Mozart, Rossini, Baroque through contemporary repertoire, major orchestras, opera houses, and recordings.',
    bio: [
      'Kenneth Tarver is an American operatic tenor whose repertoire and career extend from Baroque music through contemporary works, with particular recognition for Mozart and Rossini.',
      'His musical education includes study in Detroit and at Interlochen, followed by a Bachelor of Music from Oberlin and a Master of Music from Yale.',
      'He was also part of the Metropolitan Opera Young Artist Development Program, an important stage in his professional development.',
      'His international career has included performances with major orchestras and opera houses, as well as roles, engagements, and discography spanning a broad range of repertoire.',
    ],
    credentials: [
      'Bachelor of Music — Oberlin',
      'Master of Music — Yale',
      'Metropolitan Opera Young Artist Development Program',
      'International opera and concert career',
    ],
  },
  {
    name: 'Film Actor',
    wikipediaUrl: '#',
    image: '/brand/film-actor.png',
    role: 'Film Craft Instructor',
    disciplines: ['Film Acting'],
    icon: Theater,
    summary:
      'Working film actor based in the United States. Trains actors in the specific craft of performing for the lens — eyelines, marks, close-ups, and continuity.',
    bio: [
      'The Film Actor teaches the specific techniques of acting for the camera — a discipline distinct from stage acting, and increasingly essential for contemporary actors.',
      'Focus areas: eyelines and continuity, working with marks, playing to the close-up, and the difference between stage-scale and screen-scale performance.',
      'The Film Actor holds a half-time position at CUCO and works professionally in the United States.',
    ],
    credentials: [
      'US-based working film actor',
      'Film craft — half-time faculty',
      'Professional credits to be confirmed',
    ],
  },
  {
    name: 'Film Director',
    wikipediaUrl: '#',
    image: '/brand/film-director.png',
    role: 'Film Craft Instructor',
    disciplines: ['Film Directing'],
    icon: PenTool,
    summary:
      'Working film director based in the United States. Trains directors in shot composition, coverage, and the specific craft of filming a stage play for the lens.',
    bio: [
      'The Film Director teaches the specific techniques of directing for the camera — how to compose shots, plan coverage, and translate stage blocking into filmed work.',
      'Focus areas: shot composition, scene coverage, working with actors on set, and the technical workflow of filming a stage play (ISO recording, green screen, post-production).',
      'The Film Director holds a half-time position at CUCO and works professionally in the United States.',
    ],
    credentials: [
      'US-based working film director',
      'Film craft — half-time faculty',
      'Professional credits to be confirmed',
    ],
  },
]

function PressedLink({
  children,
  to,
}: {
  children: React.ReactNode
  to: string
}) {
  return (
    <Link
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-smoked-card px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
      to={to}
    >
      {children}
    </Link>
  )
}

function GavelfallName({
  name,
  className,
}: {
  name: string
  className: string
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [landed, setLanded] = useState(false)

  useEffect(() => {
    const node = headingRef.current
    if (!node) return

    // Reduced motion: skip animation entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLanded(true)
      return
    }

    // Fail-safe: if IntersectionObserver is unavailable, land immediately
    if (!('IntersectionObserver' in window)) {
      setLanded(true)
      return
    }

    // Fail-safe for mobile + slow paint:
    // If nothing triggers within 300ms, fire anyway so animation never skips.
    const failSafe = window.setTimeout(() => setLanded(true), 300)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLanded(true)
          window.clearTimeout(failSafe)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(node)

    return () => {
      window.clearTimeout(failSafe)
      observer.disconnect()
    }
  }, [])

  return (
    <h2
      aria-label={name}
      className={`${className} cuco-gavelfall-name${landed ? ' is-landed' : ''}`}
      ref={headingRef}
    >
      <span aria-hidden="true" className="cuco-gavelfall-name__letters">
        {Array.from(name).map((letter, index) => (
          <span
            className="cuco-gavelfall-name__letter"
            key={`${letter}-${index}`}
            style={{ '--letter-index': index } as React.CSSProperties}
          >
            {letter === ' ' ? '\u00a0' : letter}
          </span>
        ))}
      </span>
    </h2>
  )
}

function FacultyCard({
  instructor,
  index,
}: {
  instructor: (typeof instructors)[number]
  index: number
}) {
  const Icon = instructor.icon

  return (
    <article className="overflow-hidden rounded-card bg-smoked-card shadow-float">
      <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="relative flex flex-col justify-start bg-smoked-card p-5 shadow-pressed md:p-6">
          <div className="flex items-start justify-between gap-3">
            {instructor.image ? (
              <img
                src={instructor.image}
                alt={instructor.name}
                width={128}
                height={128}
                loading="lazy"
                decoding="async"
                className="h-24 w-24 shrink-0 rounded-card object-cover shadow-raised md:h-28 md:w-28"
              />
            ) : (
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-card bg-smoked-card shadow-pressed md:h-28 md:w-28">
                <Icon
                  aria-hidden="true"
                  className="h-10 w-10 text-smoked-ember md:h-12 md:w-12"
                />
              </div>
            )}
            <p className="cuco-numeric text-[10px] text-text-on-card-secondary">
              FACULTY · {String(index + 1).padStart(2, '0')}
            </p>
          </div>

          <div className="mt-4">
            <p className="cuco-kicker text-text-on-card-primary">
              {instructor.disciplines.join(' · ')}
            </p>

            <GavelfallName
              name={instructor.name}
              className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-card-primary md:text-3xl"
            />

            <p className="mt-3 text-xs font-semibold leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              {instructor.role}
            </p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary">
              <a
                className="inline-flex min-h-9 items-center gap-1.5 underline decoration-text-on-card-secondary/50 underline-offset-4 transition-colors hover:text-text-on-card-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-smoked-ember focus-visible:ring-offset-2 focus-visible:ring-offset-smoked-card"
                href={instructor.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Reference for ${instructor.name}`}
              >
                Wikipedia reference <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <p className="text-sm leading-6 text-text-on-card-primary md:text-base md:leading-7">
            {instructor.summary}
          </p>

          <div className="mt-4 space-y-3">
            {instructor.bio.map((paragraph) => (
              <p
                className="text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-5">
            <p className="cuco-kicker text-text-on-card-primary">
              EDUCATION & CAREER
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {instructor.credentials.map((credential) => (
                <div
                  className="flex items-start gap-2 rounded-control bg-smoked-card px-3 py-2.5 text-xs leading-5 text-text-on-card-primary shadow-pressed"
                  key={credential}
                >
                  <GraduationCap
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-smoked-ember"
                  />
                  <span>{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Instructors() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="cuco-shell py-hero">
        <div className="max-w-3xl">
          <p className="cuco-kicker text-text-on-substrate-muted">
            CUCO FACULTY · THE PEOPLE BEHIND THE WORK
          </p>

          <h1 className="cuco-editorial mt-4 max-w-3xl text-4xl leading-[0.95] text-text-on-substrate-primary sm:text-5xl lg:text-6xl">
            Learn from
            <br />
            people who
            <br />
            do the work.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
            CUCO brings professional theatre practice, university teaching,
            international performance, and serious craft into one global
            online studio.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <Theater aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">THEATRE</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Professional theatrical practice remains at the centre of the
              studio.
            </p>
          </div>
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <BookOpen aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">EDUCATION</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              University-level teaching experience informs the learning
              environment.
            </p>
          </div>
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <MapPin aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">GLOBAL</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Bangkok, the United States, and international stages meet inside
              CUCO.
            </p>
          </div>
        </div>
      </section>

      {/* FACULTY GRID */}
      <section className="cuco-shell pb-section">
        <div className="mb-4 max-w-2xl">
          <p className="cuco-kicker text-text-on-substrate-muted">THE FACULTY</p>
          <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
            Five disciplines of practice.
            <br />
            One serious studio.
          </h2>
        </div>

        <div className="space-y-3">
          {instructors.map((instructor, index) => (
            <FacultyCard
              index={index}
              instructor={instructor}
              key={instructor.name}
            />
          ))}
        </div>
      </section>

      {/* DISCIPLINE PILLARS */}
      <section className="cuco-shell py-section">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              label: 'ACTING',
              text: 'Character, text, performance, and the Gister technique.',
            },
            {
              label: 'DIRECTING',
              text: 'Analysis, composition, collaboration, and shaping the work.',
            },
            {
              label: 'WRITING',
              text: 'Dramatic structure, voice, revision, and stories with something to say.',
            },
          ].map((discipline, index) => (
            <div
              className="rounded-card bg-smoked-card p-5 shadow-raised"
              key={discipline.label}
            >
              <p className="cuco-numeric text-[10px] text-text-on-card-secondary">
                0{index + 1}
              </p>
              <h3 className="cuco-editorial mt-4 text-lg leading-tight text-text-on-card-primary md:text-xl">
                {discipline.label}
              </h3>
              <p className="mt-3 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
                {discipline.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cuco-shell pb-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">
                STEP INTO THE STUDIO
              </p>
              <h2 className="cuco-editorial mt-3 max-w-xl text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                The faculty is here.
                <br />
                The work is next.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Explore the courses and find the discipline that brings you
                into the room.
              </p>
            </div>
            <PressedLink to="/courses">
              Explore courses <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
          </div>
        </div>
      </section>
    </div>
  )
}