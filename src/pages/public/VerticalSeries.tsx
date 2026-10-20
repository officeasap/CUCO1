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
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-smoked-card px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
      to={to}
    >
      {children}
    </Link>
  )
}

function SeriesPlaceholder({ number }: { number: number }) {
  return (
    <article className="group rounded-card bg-smoked-card p-3 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-smoked-powder shadow-pressed">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-smoked-card shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral group-hover:-translate-y-0.5 group-hover:shadow-raised">
            <Play aria-hidden="true" className="ml-0.5 h-5 w-5 text-text-on-card-primary" />
          </div>
        </div>
        <div className="absolute left-3 top-3 rounded-control bg-smoked-card px-2 py-1 shadow-raised">
          <span className="cuco-numeric text-[10px] text-text-on-card-primary">
            {String(number).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="cuco-kicker text-text-on-card-secondary">COMING SOON</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-1 pb-0.5 pt-3">
        <div>
          <p className="cuco-kicker text-text-on-card-secondary">VERTICAL SERIES</p>
          <h2 className="cuco-editorial mt-1 text-base leading-tight text-text-on-card-primary">
            Series {String(number).padStart(2, '0')}
          </h2>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-control bg-smoked-powder shadow-pressed">
          <Clapperboard aria-hidden="true" className="h-3.5 w-3.5 text-text-on-card-primary" />
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
      {/* HERO */}
      <section className="cuco-shell py-hero">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              CUCO VERTICAL SERIES · STREAMING
            </p>
            <h1 className="cuco-editorial mt-4 max-w-3xl text-4xl leading-[0.95] text-text-on-substrate-primary sm:text-5xl lg:text-6xl">
              Stories
              <br />
              built for
              <br />
              the screen.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Thirty vertical series are coming soon to CUCO — a new screen
              space for theatrical voices, short-form storytelling, and work
              made to be watched anywhere.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-card bg-smoked-powder shadow-pressed">
                <Sparkles aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
              </div>
              <p className="cuco-numeric text-4xl leading-none text-text-on-card-primary md:text-5xl">
                30
              </p>
            </div>
            <p className="cuco-kicker mt-5 text-text-on-card-primary">
              SERIES COMING SOON
            </p>
            <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              The catalogue is being assembled. The architecture is ready for
              the stories.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH CONSOLE — Cathedral moment */}
      <section className="cuco-shell pb-section">
        <div className="rounded-card bg-smoked-card p-4 shadow-raised md:p-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search vertical series</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-on-card-secondary"
              />
              <input
                aria-label="Search vertical series"
                className="h-11 w-full rounded-control bg-smoked-powder pl-11 pr-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search series..."
                type="search"
                value={search}
              />
            </label>

            <label className="relative block lg:w-56">
              <span className="sr-only">Filter vertical series</span>
              <select
                aria-label="Filter vertical series"
                className="h-11 w-full appearance-none rounded-control bg-smoked-powder px-4 pr-10 text-xs font-semibold text-text-on-card-primary shadow-pressed outline-none focus-visible:outline-none"
                onChange={(event) => setView(event.target.value)}
                value={view}
              >
                <option>All Series</option>
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-on-card-secondary"
              />
            </label>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <Filter aria-hidden="true" className="h-3.5 w-3.5 text-smoked-ember" />
              <p className="cuco-kicker text-text-on-card-secondary">
                {filteredSeries.length} SERIES
              </p>
            </div>
            {search && (
              <button
                className="rounded-control bg-smoked-powder px-3 py-1.5 text-[10px] font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
                onClick={() => setSearch('')}
                type="button"
              >
                Clear search
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="cuco-shell pb-section">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">THE CATALOGUE</p>
            <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
              Thirty spaces waiting
              <br />
              for their stories.
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-5 text-text-on-substrate-muted md:text-sm md:leading-6">
            Search and filtering are already built into the experience. The
            final catalogue content will populate these spaces when the series
            are ready.
          </p>
        </div>

        {filteredSeries.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSeries.map((series) => (
              <SeriesPlaceholder key={series.number} number={series.number} />
            ))}
          </div>
        ) : (
          <div className="rounded-card bg-smoked-card p-6 text-center shadow-raised md:p-10">
            <Search aria-hidden="true" className="mx-auto h-6 w-6 text-smoked-ember" />
            <h2 className="cuco-editorial mt-4 text-2xl text-text-on-card-primary">
              No matching series.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-text-on-card-secondary">
              Try another search term or clear the current search.
            </p>
            <button
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
              onClick={() => setSearch('')}
              type="button"
            >
              Show all series
            </button>
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section className="cuco-shell py-section">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { n: '01', title: 'Discover', body: 'Browse the growing catalogue of short-form vertical storytelling.' },
            { n: '02', title: 'Watch', body: 'The catalogue is being designed for an accessible, screen-first viewing experience.' },
            { n: '03', title: 'Return', body: 'New vertical stories will give the catalogue a reason to keep growing.' },
          ].map((step) => (
            <div
              className="group rounded-card bg-smoked-card p-5 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-float md:p-6"
              key={step.n}
            >
              <p className="cuco-numeric text-[10px] text-text-on-card-secondary">{step.n}</p>
              <h3 className="cuco-editorial mt-3 text-xl leading-tight text-text-on-card-primary md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cuco-shell pb-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">WHILE YOU WAIT</p>
              <h2 className="cuco-editorial mt-3 max-w-2xl text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                There is still a
                <br />
                stage to enter.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Explore CUCO's live courses in acting, directing, writing,
                voice and speech, and singing.
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