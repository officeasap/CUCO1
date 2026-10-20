import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Faculty', to: '/instructors' },
  { label: 'Story', to: '/our-story' },
  { label: 'Series', to: '/vertical-series' },
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
              'flex min-w-14 flex-1 items-center justify-center rounded-control px-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-[box-shadow,transform,color] duration-200',
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