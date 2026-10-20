import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="min-h-screen">
      <div className="cuco-shell flex min-h-screen flex-col justify-center py-8">
        <p className="cuco-kicker">404</p>

        <h1 className="cuco-editorial mt-4 text-5xl">
          This path does not exist.
        </h1>

        <Link
          className="mt-8 inline-flex w-fit rounded-control bg-smoked-card px-6 py-3 font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0 active:shadow-pressed"
          to="/"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
