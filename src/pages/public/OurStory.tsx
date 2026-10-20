import {
  ArrowRight,
  Award,
  CalendarDays,
  Film,
  MapPin,
  Quote,
  Theater,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const productions = [
  {
    year: '2015',
    title: 'The Death of Miss America',
    detail:
      'Written by Loni Berry, this spoof beauty pageant examined stereotypes of Asian women and the emerging ASEAN Economic Community.',
  },
  {
    year: '2015',
    title: 'The Lisbon Traviata',
    detail:
      'Terrence McNally\u2019s play featured Pangina Heals in an acting debut and became a major Bangkok Theatre Festival success.',
    award: 'Best Production — 2015 Bangkok Theatre Festival',
  },
  {
    year: '2016',
    title: '12 Angry Men',
    detail:
      'A multilingual production featuring a cast from ten countries, and the longest-running Culture Collective Studio production.',
    credit: 'Directed by Loni Berry',
  },
  {
    year: '2016',
    title: 'The Vagina Monologues',
    detail:
      'Presented in both English and Thai, with the English production directed by Loni Berry with Tonya Pinkins and the Thai production directed by Narakin Khamvilas.',
  },
  {
    year: '2017',
    title: 'Miss Julie',
    detail:
      'Adapted by Loni Berry and performed with an all-Indian cast, the production explored caste, identity, and Rohingya themes.',
  },
  {
    year: '2018',
    title: 'Spotlight 7x7',
    detail:
      'Seven one-act plays brought company members together in a concentrated showcase of contemporary theatrical voices.',
    award: 'Pope Bustos — Best Male Actor for The Reckoning',
  },
  {
    year: '2019',
    title: 'A Streetcar Named Desire',
    detail:
      'The final production before COVID, presented with an interactive audience vote that determined the ending.',
  },
]

const founders = [
  'Loni Berry',
  'Saratsa Sasitvirarom',
  'Caitlin Haas',
  'Kelly B. Jones',
  'Robert Clyne',
]

const awards = [
  {
    year: '2015',
    festival: 'Bangkok Theatre Festival / IATC',
    items: [
      'Best Play — WON — The Lisbon Traviata',
      'Best Male Performer — WON — Steven Fry',
      'Best Director — NOMINATED — Loni Berry',
    ],
  },
  {
    year: '2019',
    festival: 'Bangkok Theatre Festival',
    items: ['Best Actor — WON — Pope Bustos, Spotlight 7x7: The Reckoning'],
  },
]

const culturalThread = [
  'Multicultural casting',
  'Challenging subject matter',
  'Identity and stereotype',
  'Human connection',
  'Cross-cultural collaboration',
]

const manifestoBeliefs = [
  {
    n: '01',
    title: 'Storytelling is foundation.',
    body: 'Older than any technology that carries it. We commit to protecting, preserving, and transferring the essential elements of storytelling so they are not obscured by exciting and ever-expanding technology.',
  },
  {
    n: '02',
    title: 'The writer is the primary storyteller.',
    body: 'The one who provides the blueprint, the map, for the journey to be shared by all.',
  },
  {
    n: '03',
    title: 'The actor commits to the story.',
    body: 'The artist committed to telling the writer\u2019s story — who appears as a believable character other than themselves.',
  },
  {
    n: '04',
    title: 'The director interprets.',
    body: 'The artist who interprets the script and creates the conditions for actors to do their best work in service of that interpretation.',
  },
  {
    n: '05',
    title: 'Collaboration demands everything.',
    body: 'A process that demands trust, rigor, and generosity.',
  },
  {
    n: '06',
    title: 'We foster the conditions.',
    body: 'People, environments, and circumstances that advance effective communication, collaboration, and storytelling.',
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

function SectionLabel({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="cuco-kicker text-text-on-substrate-muted">{eyebrow}</p>
      <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
        {title}
      </h2>
    </div>
  )
}

export function OurStory() {
  return (
    <div className="overflow-hidden">
      {/* MANIFESTO — Cathedral opening */}
      <section className="cuco-shell pt-hero pb-section">
        <div className="max-w-2xl">
          <p className="cuco-kicker text-text-on-substrate-muted">
            MANIFESTO · CULTURE COLLECTIVE THEATRE INTENSIVE
          </p>
          <h2 className="cuco-editorial mt-3 max-w-2xl text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
            Six things we believe
            <br />
            before we teach anything.
          </h2>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {manifestoBeliefs.map((belief) => (
            <article
              key={belief.n}
              className="rounded-card bg-smoked-card p-5 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-float md:p-6"
            >
              <p className="cuco-numeric text-[10px] text-text-on-card-secondary">
                {belief.n}
              </p>
              <h3 className="cuco-editorial mt-3 text-xl leading-tight text-text-on-card-primary md:text-2xl">
                {belief.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
                {belief.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="cuco-shell py-hero">
        <div className="max-w-3xl">
          <p className="cuco-kicker text-text-on-substrate-muted">
            OUR STORY · CULTURE COLLECTIVE STUDIO
          </p>

          <h1 className="cuco-editorial mt-4 max-w-3xl text-4xl leading-[0.95] text-text-on-substrate-primary sm:text-5xl lg:text-6xl">
            A theatre
            <br />
            with a memory.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
            More than twenty years before CUCO became an online studio, the
            seeds of a different kind of theatre were already being planted.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <CalendarDays aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">SINCE 2006</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Loni Berry moved to Bangkok and began building toward the theatre
              he had long imagined.
            </p>
          </div>
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <Theater aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">2014</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Culture Collective Studio officially took shape in Bangkok.
            </p>
          </div>
          <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
            <Film aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            <p className="cuco-kicker mt-3 text-text-on-card-primary">THE NEXT ACT</p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              The stage became a global classroom when COVID stopped live
              theatre.
            </p>
          </div>
        </div>
      </section>

      {/* BEGINNING */}
      <section className="cuco-shell py-section">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <SectionLabel
              eyebrow="THE BEGINNING"
              title="The dream came to Bangkok."
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              The story began more than twenty years before the official launch
              of Culture Collective Studio. In 2006, American theatre
              professional Loni Berry moved to Bangkok with a long-standing
              dream: to create his own theatre.
            </p>
            <p className="text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Ahead of the company's official launch on October 6, 2014, that
              dream began to become tangible. A team formed around a shared
              belief that theatre in Bangkok could be ambitious, multicultural,
              provocative, and deeply connected to the people making and
              watching it.
            </p>

            <div className="mt-2 rounded-card bg-smoked-card p-5 shadow-raised md:p-6">
              <Quote aria-hidden="true" className="h-6 w-6 text-smoked-ember" />
              <p className="cuco-editorial mt-3 text-xl leading-tight text-text-on-card-primary md:text-2xl">
                Classic works. Original voices. Different cultures meeting in
                the same room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section className="cuco-shell py-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">THE COMPANY</p>
              <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                Culture Collective Studio
              </h2>
              <div className="mt-4 flex items-start gap-3 text-text-on-card-secondary">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-smoked-ember" />
                <p className="text-xs leading-5 md:text-sm md:leading-6">
                  Third floor, Chatrium Residence Riverside / Chatrium Hotel,
                  Soi Charoen Krung 70, Bangkok, Thailand.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Culture Collective Studio found a home on the third floor of
                the Chatrium Residence Riverside / Chatrium Hotel. The venue
                contained two black-box spaces: a larger room seating roughly
                80–100 people and a smaller room seating approximately 40–60.
              </p>
              <p className="text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                The spaces became laboratories for work that crossed languages,
                nationalities, traditions, identities, and theatrical forms.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-control bg-smoked-powder p-4 shadow-pressed">
                  <Users aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                  <p className="cuco-kicker mt-3 text-text-on-card-primary">FOUNDING TEAM</p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-5 md:text-sm md:leading-6">
                    {founders.map((founder) => (
                      <li key={founder}>{founder}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-control bg-smoked-powder p-4 shadow-pressed">
                  <Theater aria-hidden="true" className="h-4 w-4 text-smoked-ember" />
                  <p className="cuco-kicker mt-3 text-text-on-card-primary">TWO BLACK BOXES</p>
                  <p className="mt-3 text-xs leading-5 md:text-sm md:leading-6">
                    One larger room for 80–100 seats and one smaller room for
                    40–60.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTIONS — numbered ledger */}
      <section className="cuco-shell py-section">
        <SectionLabel
          eyebrow="THE WORK"
          title="Productions that refused to stay inside one box."
        />

        <div className="mt-5 overflow-hidden rounded-card bg-smoked-card shadow-raised">
          {productions.map((production, index) => (
            <article
              className={`grid gap-2 p-4 md:grid-cols-[6rem_1fr] md:gap-4 md:p-5 ${
                index !== 0 ? 'border-t border-smoked-shadow/20' : ''
              }`}
              key={production.title}
            >
              <div>
                <p className="cuco-kicker text-text-on-card-primary">{production.year}</p>
                <p className="cuco-numeric mt-1 text-[10px] text-text-on-card-secondary">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <div>
                <h3 className="cuco-editorial text-lg leading-tight text-text-on-card-primary md:text-xl">
                  {production.title}
                </h3>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
                  {production.detail}
                </p>
                {(production.award || production.credit) && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {production.award && (
                      <span className="rounded-control bg-smoked-powder px-2.5 py-1 text-[10px] font-semibold text-text-on-card-primary shadow-pressed">
                        {production.award}
                      </span>
                    )}
                    {production.credit && (
                      <span className="rounded-control bg-smoked-powder px-2.5 py-1 text-[10px] font-semibold text-text-on-card-primary shadow-pressed">
                        {production.credit}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="cuco-shell py-section">
        <div className="grid gap-3 lg:grid-cols-2">
          {awards.map((award) => (
            <article
              className="rounded-card bg-smoked-card p-5 shadow-raised md:p-6"
              key={award.year}
            >
              <Award aria-hidden="true" className="h-6 w-6 text-smoked-ember" />
              <p className="cuco-kicker mt-4 text-text-on-card-primary">{award.year}</p>
              <h2 className="cuco-editorial mt-2 text-xl leading-tight text-text-on-card-primary md:text-2xl">
                {award.festival}
              </h2>
              <ul className="mt-4 space-y-2">
                {award.items.map((item) => (
                  <li
                    className="rounded-control bg-smoked-powder px-3 py-2 text-xs leading-5 text-text-on-card-secondary shadow-pressed md:text-sm"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ARTISTIC IDENTITY */}
      <section className="cuco-shell py-section">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-10">
          <div>
            <SectionLabel
              eyebrow="ARTISTIC IDENTITY"
              title="The point was never simply to put on a play."
            />
            <div className="mt-5 space-y-3 text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              <p>
                Culture Collective Studio developed an artistic identity around
                multicultural casting, challenging subject matter, and stories
                concerned with identity, stereotypes, and human connection.
              </p>
              <p>
                Performers and collaborators came from different countries,
                languages, and theatrical traditions. That diversity was not
                decoration around the work. It was part of the work itself.
              </p>
              <p>
                The company's productions repeatedly placed familiar texts and
                difficult questions into unfamiliar cultural contexts, asking
                audiences to encounter both the story and the assumptions they
                brought with them.
              </p>
            </div>
          </div>

          <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-6">
            <p className="cuco-kicker text-text-on-card-primary">THE CULTURAL THREAD</p>
            <div className="mt-4 space-y-2">
              {culturalThread.map((item, index) => (
                <div
                  className="flex items-center gap-3 rounded-control bg-smoked-powder px-3 py-2.5 shadow-pressed"
                  key={item}
                >
                  <span className="cuco-numeric text-[10px] text-text-on-card-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold text-text-on-card-primary md:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVID */}
      <section className="cuco-shell py-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="max-w-3xl">
            <p className="cuco-kicker text-text-on-card-primary">WHEN THE STAGE WENT DARK</p>
            <h2 className="cuco-editorial mt-3 text-2xl leading-tight text-text-on-card-primary md:text-3xl">
              COVID stopped
              <br />
              the theatre.
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
              <p>
                A Streetcar Named Desire was the company's final production
                before COVID. Then the physical theatre environment that had
                supported the work disappeared.
              </p>
              <p>But the need to learn, create, rehearse, tell stories, and connect did not disappear.</p>
              <p>
                The answer became an online studio with a global reach:
                professional-level training in acting, directing, writing,
                voice and speech, and singing, delivered live by experienced
                instructors to students wherever they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM STAGE TO STUDIO */}
      <section className="cuco-shell py-section">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">FROM STAGE TO STUDIO</p>
            <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
              The room changed.
              <br />
              The work continued.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              CUCO carries the original spirit of Culture Collective Studio
              forward: serious training, multicultural collaboration,
              professional standards, and stories that are willing to ask
              difficult questions.
            </p>
            <div className="mt-5">
              <PressedLink to="/courses">
                Explore the courses <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PressedLink>
            </div>
          </div>

          <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-6">
            <p className="cuco-kicker text-text-on-card-primary">CUCO TODAY</p>
            <p className="cuco-editorial mt-3 text-xl leading-tight text-text-on-card-primary md:text-2xl">
              A global online studio built from a theatre company's history.
            </p>
            <div className="mt-4 grid gap-2">
              {['Acting', 'Directing', 'Writing', 'Voice & Speech', 'Singing'].map((discipline) => (
                <div
                  className="rounded-control bg-smoked-powder px-3 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed md:text-sm"
                  key={discipline}
                >
                  {discipline}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cuco-shell pb-section">
        <div className="rounded-card bg-smoked-card p-5 text-center shadow-float md:p-8">
          <p className="cuco-kicker text-text-on-card-primary">THE STORY CONTINUES</p>
          <h2 className="cuco-editorial mx-auto mt-3 max-w-2xl text-2xl leading-tight text-text-on-card-primary md:text-3xl">
            Your story starts where the next chapter begins.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
            Explore the CUCO studio, meet the disciplines, and find the course
            that brings you into the work.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <PressedLink to="/courses">
              Browse courses <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-smoked-powder px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
              to="/instructors"
            >
              Meet the instructors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}