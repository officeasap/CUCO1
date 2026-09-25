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
      'Written by KWAME KWAME, this spoof beauty pageant examined stereotypes of Asian women and the emerging ASEAN Economic Community.',
  },
  {
    year: '2015',
    title: 'The Lisbon Traviata',
    detail:
      'Terrence McNally’s play featured Pangina Heals in an acting debut and became a major Bangkok Theatre Festival success.',
    award: 'Best Production — 2015 Bangkok Theatre Festival',
  },
  {
    year: '2016',
    title: '12 Angry Men',
    detail:
      'A multilingual production featuring a cast from ten countries, and the longest-running Culture Collective Studio production.',
    credit: 'Directed by KWAME KWAME',
  },
  {
    year: '2016',
    title: 'The Vagina Monologues',
    detail:
      'Presented in both English and Thai, with the English production directed by KWAME KWAME with Tonya Pinkins and the Thai production directed by Narakin Khamvilas.',
  },
  {
    year: '2017',
    title: 'Miss Julie',
    detail:
      'Adapted by KWAME KWAME and performed with an all-Indian cast, the production explored caste, identity, and Rohingya themes.',
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
  'KWAME KWAME',
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
      'Best Director — NOMINATED — KWAME KWAME',
    ],
  },
  {
    year: '2019',
    festival: 'Bangkok Theatre Festival',
    items: ['Best Actor — WON — Pope Bustos, Spotlight 7x7: The Reckoning'],
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
      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-control bg-smoked-card px-6 py-3 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
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
    <div className="max-w-3xl">
      <p className="cuco-kicker text-text-on-substrate-muted">{eyebrow}</p>
      <h2 className="cuco-editorial mt-3 text-4xl leading-[0.98] text-text-on-substrate-primary md:text-5xl">
        {title}
      </h2>
    </div>
  )
}

export function OurStory() {
  return (
    <div className="overflow-hidden">
      <section className="cuco-shell relative py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl">
          <p className="cuco-kicker text-text-on-substrate-muted">
            OUR STORY · CULTURE COLLECTIVE STUDIO
          </p>

          <h1 className="cuco-editorial mt-5 max-w-5xl text-6xl leading-[0.88] text-text-on-substrate-primary sm:text-7xl md:text-8xl lg:text-9xl">
            A theatre
            <br />
            with a memory.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-on-substrate-muted md:text-xl md:leading-9">
            More than twenty years before CUCO became an online studio, the
            seeds of a different kind of theatre were already being planted.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-card bg-smoked-card p-6 shadow-raised">
            <CalendarDays
              aria-hidden="true"
              className="h-7 w-7 text-smoked-ember"
            />
            <p className="cuco-kicker mt-6 text-text-on-card-primary">
              SINCE 2006
            </p>
            <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
              KWAME KWAME moved to Bangkok and began building toward the
              theatre he had long imagined.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-6 shadow-raised">
            <Theater
              aria-hidden="true"
              className="h-7 w-7 text-smoked-ember"
            />
            <p className="cuco-kicker mt-6 text-text-on-card-primary">
              2014
            </p>
            <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
              Culture Collective Studio officially took shape in Bangkok.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-6 shadow-raised">
            <Film aria-hidden="true" className="h-7 w-7 text-smoked-ember" />
            <p className="cuco-kicker mt-6 text-text-on-card-primary">
              THE NEXT ACT
            </p>
            <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
              The stage became a global classroom when COVID stopped live
              theatre.
            </p>
          </div>
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel
              eyebrow="THE BEGINNING"
              title="The dream came to Bangkok."
            />
          </div>

          <div className="space-y-6 text-base leading-8 text-text-on-substrate-muted md:text-lg md:leading-9">
            <p>
              The story began more than twenty years before the official launch
              of Culture Collective Studio. In 2006, American theatre
              professional KWAME KWAME moved to Bangkok with a long-standing
              dream: to create his own theatre.
            </p>

            <p>
              Ahead of the company’s official launch on October 6, 2014, that
              dream began to become tangible. A team formed around a shared
              belief that theatre in Bangkok could be ambitious, multicultural,
              provocative, and deeply connected to the people making and
              watching it.
            </p>

            <div className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9">
              <Quote
                aria-hidden="true"
                className="h-8 w-8 text-smoked-ember"
              />
              <p className="cuco-editorial mt-5 text-3xl leading-tight text-text-on-card-primary md:text-4xl">
                Classic works. Original voices. Different cultures meeting in
                the same room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="rounded-card bg-smoked-card p-7 shadow-float md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">
                THE COMPANY
              </p>

              <h2 className="cuco-editorial mt-4 text-4xl leading-none text-text-on-card-primary md:text-5xl">
                Culture Collective Studio
              </h2>

              <div className="mt-7 flex items-start gap-4 text-text-on-card-secondary">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-smoked-ember"
                />
                <p className="text-sm leading-6">
                  Third floor, Chatrium Residence Riverside / Chatrium Hotel,
                  Soi Charoen Krung 70, Bangkok, Thailand.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-text-on-card-secondary">
              <p>
                Culture Collective Studio found a home on the third floor of
                the Chatrium Residence Riverside / Chatrium Hotel. The venue
                contained two black-box spaces: a larger room seating roughly
                80–100 people and a smaller room seating approximately 40–60.
              </p>

              <p>
                The spaces became laboratories for work that crossed languages,
                nationalities, traditions, identities, and theatrical forms.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-control bg-smoked-card p-5 shadow-pressed">
                  <Users
                    aria-hidden="true"
                    className="h-6 w-6 text-smoked-ember"
                  />
                  <p className="cuco-kicker mt-4 text-text-on-card-primary">
                    FOUNDING TEAM
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6">
                    {founders.map((founder) => (
                      <li key={founder}>{founder}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-control bg-smoked-card p-5 shadow-pressed">
                  <Theater
                    aria-hidden="true"
                    className="h-6 w-6 text-smoked-ember"
                  />
                  <p className="cuco-kicker mt-4 text-text-on-card-primary">
                    TWO BLACK BOXES
                  </p>
                  <p className="mt-4 text-sm leading-6">
                    One larger room for 80–100 seats and one smaller room for
                    40–60.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <SectionLabel
          eyebrow="THE WORK"
          title="Productions that refused to stay inside one box."
        />

        <div className="mt-12 grid gap-4">
          {productions.map((production, index) => (
            <article
              className="grid gap-6 rounded-card bg-smoked-card p-6 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover md:grid-cols-[7rem_1fr] md:p-8"
              key={production.title}
            >
              <div>
                <p className="cuco-kicker text-text-on-card-primary">
                  {production.year}
                </p>
                <p className="cuco-numeric mt-3 text-xs text-text-on-card-secondary">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <div>
                <h3 className="cuco-editorial text-3xl leading-none text-text-on-card-primary md:text-4xl">
                  {production.title}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-text-on-card-secondary md:text-base">
                  {production.detail}
                </p>

                {production.award ? (
                  <p className="mt-5 inline-flex rounded-control bg-smoked-card px-4 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed">
                    {production.award}
                  </p>
                ) : null}

                {production.credit ? (
                  <p className="mt-5 inline-flex rounded-control bg-smoked-card px-4 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed">
                    {production.credit}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {awards.map((award) => (
            <article
              className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9"
              key={award.year}
            >
              <Award
                aria-hidden="true"
                className="h-8 w-8 text-smoked-ember"
              />

              <p className="cuco-kicker mt-6 text-text-on-card-primary">
                {award.year}
              </p>

              <h2 className="cuco-editorial mt-3 text-3xl leading-tight text-text-on-card-primary">
                {award.festival}
              </h2>

              <ul className="mt-6 space-y-4">
                {award.items.map((item) => (
                  <li
                    className="rounded-control bg-smoked-card px-4 py-4 text-sm leading-6 text-text-on-card-secondary shadow-pressed"
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

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-20">
          <div>
            <SectionLabel
              eyebrow="ARTISTIC IDENTITY"
              title="The point was never simply to put on a play."
            />

            <div className="mt-8 space-y-6 text-base leading-8 text-text-on-substrate-muted md:text-lg md:leading-9">
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
                The company’s productions repeatedly placed familiar texts and
                difficult questions into unfamiliar cultural contexts, asking
                audiences to encounter both the story and the assumptions they
                brought with them.
              </p>
            </div>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-float md:p-9">
            <p className="cuco-kicker text-text-on-card-primary">
              THE CULTURAL THREAD
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Multicultural casting',
                'Challenging subject matter',
                'Identity and stereotype',
                'Human connection',
                'Cross-cultural collaboration',
              ].map((item, index) => (
                <div
                  className="flex items-center gap-4 rounded-control bg-smoked-card px-5 py-4 shadow-pressed"
                  key={item}
                >
                  <span className="cuco-numeric text-xs text-text-on-card-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-text-on-card-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="rounded-card bg-smoked-card p-8 shadow-float md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <p className="cuco-kicker text-text-on-card-primary">
              WHEN THE STAGE WENT DARK
            </p>

            <h2 className="cuco-editorial mt-5 text-5xl leading-[0.92] text-text-on-card-primary md:text-7xl">
              COVID stopped
              <br />
              the theatre.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-text-on-card-secondary md:text-lg md:leading-9">
              <p>
                A Streetcar Named Desire was the company’s final production
                before COVID. Then the physical theatre environment that had
                supported the work disappeared.
              </p>

              <p>
                But the need to learn, create, rehearse, tell stories, and
                connect did not disappear.
              </p>

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

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              FROM STAGE TO STUDIO
            </p>

            <h2 className="cuco-editorial mt-4 text-5xl leading-[0.92] text-text-on-substrate-primary md:text-7xl">
              The room changed.
              <br />
              The work continued.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-text-on-substrate-muted md:text-lg md:leading-9">
              CUCO carries the original spirit of Culture Collective Studio
              forward: serious training, multicultural collaboration,
              professional standards, and stories that are willing to ask
              difficult questions.
            </p>

            <div className="mt-8">
              <PressedLink to="/courses">
                Explore the courses
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PressedLink>
            </div>
          </div>

          <div className="rounded-card bg-smoked-card p-8 shadow-float md:p-10">
            <p className="cuco-kicker text-text-on-card-primary">
              CUCO TODAY
            </p>

            <p className="cuco-editorial mt-6 text-4xl leading-tight text-text-on-card-primary">
              A global online studio built from a theatre company’s history.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                'Acting',
                'Directing',
                'Writing',
                'Voice & Speech',
                'Singing',
              ].map((discipline) => (
                <div
                  className="rounded-control bg-smoked-card px-5 py-4 text-sm font-semibold text-text-on-card-primary shadow-pressed"
                  key={discipline}
                >
                  {discipline}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-24 pt-8 md:pb-32">
        <div className="rounded-card bg-smoked-card p-8 text-center shadow-float md:p-14">
          <p className="cuco-kicker text-text-on-card-primary">
            THE STORY CONTINUES
          </p>

          <h2 className="cuco-editorial mx-auto mt-5 max-w-4xl text-5xl leading-[0.92] text-text-on-card-primary md:text-7xl">
            Your story starts where the next chapter begins.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-on-card-secondary md:text-lg">
            Explore the CUCO studio, meet the disciplines, and find the course
            that brings you into the work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PressedLink to="/courses">
              Browse courses
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-control bg-smoked-card px-6 py-3 text-sm font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
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