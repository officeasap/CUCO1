import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Contact', to: '/contact' },
]

export function BottomNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-around rounded-card bg-smoked-powder p-2 shadow-float md:hidden"
    >
      {navigation.map((item) => (
        <NavLink
          key={item.to}
          className={({ isActive }) =>
            [
              'flex min-w-16 flex-1 items-center justify-center rounded-control px-2 py-3 text-xs font-semibold transition-[box-shadow,transform,color] duration-200',
              isActive
                ? 'bg-smoked-powder text-text-on-substrate-primary shadow-pressed'
                : 'text-text-on-substrate-muted active:translate-y-px active:shadow-pressed',
            ].join(' ')
          }
          end={item.to === '/'}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
