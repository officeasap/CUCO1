import {
  ArrowRight,
  ChevronDown,
  Clapperboard,
  Filter,
  Play,
  Search,
  Sparkles,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const seriesPlaceholders = Array.from({ length: 30 }, (_, index) => ({
  number: index + 1,
  label: `SERIES ${String(index + 1).padStart(2, '0')}`,
}))

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

function SeriesPlaceholder({ number }: { number: number }) {
  return (
    <article className="group rounded-card bg-smoked-card p-4 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-smoked-card shadow-pressed">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-card bg-smoked-card shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral group-hover:-translate-y-0.5 group-hover:shadow-raised">
            <Play
              aria-hidden="true"
              className="ml-1 h-6 w-6 text-text-on-card-primary"
            />
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-control bg-smoked-card px-3 py-2 shadow-raised">
          <span className="cuco-numeric text-xs text-text-on-card-primary">
            {String(number).padStart(2, '0')}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="cuco-kicker text-text-on-card-secondary">
            COMING SOON
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
        <div>
          <p className="cuco-kicker text-text-on-card-secondary">
            VERTICAL SERIES
          </p>

          <h2 className="cuco-editorial mt-2 text-2xl leading-none text-text-on-card-primary">
            Series {String(number).padStart(2, '0')}
          </h2>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-smoked-card shadow-pressed">
          <Clapperboard
            aria-hidden="true"
            className="h-4 w-4 text-text-on-card-primary"
          />
        </div>
      </div>
    </article>
  )
}

export function VerticalSeries() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('All Series')

  const filteredSeries = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return seriesPlaceholders.filter((series) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        series.label.toLowerCase().includes(normalizedSearch)

      const matchesView = view === 'All Series'

      return matchesSearch && matchesView
    })
  }, [search, view])

  return (
    <div className="overflow-hidden">
      <section className="cuco-shell py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              CUCO VERTICAL SERIES · STREAMING
            </p>

            <h1 className="cuco-editorial mt-5 max-w-5xl text-6xl leading-[0.84] text-text-on-substrate-primary sm:text-7xl md:text-8xl lg:text-9xl">
              Stories
              <br />
              built for
              <br />
              the screen.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-on-substrate-muted md:text-xl md:leading-9">
              Thirty vertical series are coming soon to CUCO — a new screen
              space for theatrical voices, short-form storytelling, and work
              made to be watched anywhere.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-float md:p-9">
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-card bg-smoked-card shadow-pressed">
                <Sparkles
                  aria-hidden="true"
                  className="h-6 w-6 text-smoked-ember"
                />
              </div>

              <p className="cuco-numeric text-5xl leading-none text-text-on-card-primary md:text-6xl">
                30
              </p>
            </div>

            <p className="cuco-kicker mt-8 text-text-on-card-primary">
              SERIES COMING SOON
            </p>

            <p className="mt-4 text-sm leading-7 text-text-on-card-secondary">
              The catalogue is being assembled. The architecture is ready for
              the stories.
            </p>
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-16 md:pb-24">
        <div className="rounded-card bg-smoked-card p-5 shadow-raised md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search vertical series</span>

              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-on-card-secondary"
              />

              <input
                aria-label="Search vertical series"
                className="h-14 w-full rounded-control bg-smoked-card pl-14 pr-5 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search series..."
                type="search"
                value={search}
              />
            </label>

            <label className="relative block lg:w-64">
              <span className="sr-only">Filter vertical series</span>

              <select
                aria-label="Filter vertical series"
                className="h-14 w-full appearance-none rounded-control bg-smoked-card px-5 pr-12 text-sm font-semibold text-text-on-card-primary shadow-pressed outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                onChange={(event) => setView(event.target.value)}
                value={view}
              >
                <option>All Series</option>
              </select>

              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-on-card-secondary"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-3">
              <Filter
                aria-hidden="true"
                className="h-4 w-4 text-smoked-ember"
              />

              <p className="cuco-kicker text-text-on-card-secondary">
                {filteredSeries.length} SERIES
              </p>
            </div>

            {search ? (
              <button
                className="rounded-control bg-smoked-card px-4 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
                onClick={() => setSearch('')}
                type="button"
              >
                Clear search
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-16 md:pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              THE CATALOGUE
            </p>

            <h2 className="cuco-editorial mt-3 text-4xl leading-[0.95] text-text-on-substrate-primary md:text-5xl">
              Thirty spaces waiting
              <br />
              for their stories.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-text-on-substrate-muted">
            Search and filtering are already built into the experience. The
            final catalogue content will populate these spaces when the series
            are ready.
          </p>
        </div>

        {filteredSeries.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSeries.map((series) => (
              <SeriesPlaceholder
                key={series.number}
                number={series.number}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-card bg-smoked-card p-10 text-center shadow-raised md:p-16">
            <Search
              aria-hidden="true"
              className="mx-auto h-8 w-8 text-smoked-ember"
            />

            <h2 className="cuco-editorial mt-6 text-4xl text-text-on-card-primary">
              No matching series.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-text-on-card-secondary">
              Try another search term or clear the current search.
            </p>

            <button
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-control bg-smoked-card px-6 py-3 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
              onClick={() => setSearch('')}
              type="button"
            >
              Show all series
            </button>
          </div>
        )}
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-card bg-smoked-card p-7 shadow-raised">
            <p className="cuco-numeric text-xs text-text-on-card-secondary">
              01
            </p>

            <h3 className="cuco-editorial mt-6 text-3xl leading-none text-text-on-card-primary">
              Discover
            </h3>

            <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
              Browse the growing catalogue of short-form vertical storytelling.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-raised">
            <p className="cuco-numeric text-xs text-text-on-card-secondary">
              02
            </p>

            <h3 className="cuco-editorial mt-6 text-3xl leading-none text-text-on-card-primary">
              Watch
            </h3>

            <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
              The catalogue is being designed for an accessible, screen-first
              viewing experience.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-raised">
            <p className="cuco-numeric text-xs text-text-on-card-secondary">
              03
            </p>

            <h3 className="cuco-editorial mt-6 text-3xl leading-none text-text-on-card-primary">
              Return
            </h3>

            <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
              New vertical stories will give the catalogue a reason to keep
              growing.
            </p>
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-24 pt-8 md:pb-32">
        <div className="rounded-card bg-smoked-card p-8 shadow-float md:p-14 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">
                WHILE YOU WAIT
              </p>

              <h2 className="cuco-editorial mt-5 max-w-4xl text-5xl leading-[0.9] text-text-on-card-primary md:text-7xl">
                There is still a
                <br />
                stage to enter.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-text-on-card-secondary md:text-lg">
                Explore CUCO’s live courses in acting, directing, writing,
                voice and speech, and singing.
              </p>
            </div>

            <PressedLink to="/courses">
              Explore courses
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
          </div>
        </div>
      </section>
    </div>
  )
}