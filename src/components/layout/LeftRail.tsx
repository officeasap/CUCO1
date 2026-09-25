import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Overview', to: '/dashboard' },
  { label: 'Live Room', to: '/dashboard/live' },
  { label: 'Scripts', to: '/dashboard/scripts' },
  { label: 'Assignments', to: '/dashboard/assignments' },
  { label: 'Journal', to: '/dashboard/journal' },
  { label: 'Rehearsal', to: '/dashboard/rehearsal' },
  { label: 'Scores', to: '/dashboard/scores' },
  { label: 'Attendance', to: '/dashboard/attendance' },
  { label: 'Questions', to: '/dashboard/questions' },
  { label: 'Cohort', to: '/dashboard/cohort' },
  { label: 'Recordings', to: '/dashboard/recordings' },
  { label: 'Certificate', to: '/dashboard/certificate' },
]

export function LeftRail() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-smoked-shadow/30 lg:block">
      <div className="sticky top-0 flex min-h-screen flex-col px-4 py-6">
        <div className="mb-8">
          <p className="cuco-kicker text-text-on-substrate-muted">LEARNER</p>
          <p className="cuco-editorial mt-2 text-2xl text-text-on-substrate-primary">
            CUCO
          </p>
        </div>

        <nav aria-label="Dashboard navigation" className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              end={item.to === '/dashboard'}
              to={item.to}
              className={({ isActive }) =>
                [
                  'block rounded-control px-3 py-2.5 text-sm font-semibold',
                  'transition-[box-shadow,transform,color] duration-200',
                  isActive
                    ? 'bg-smoked-card text-text-on-card-primary shadow-pressed'
                    : 'text-text-on-substrate-muted hover:-translate-y-px hover:text-text-on-substrate-primary',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}