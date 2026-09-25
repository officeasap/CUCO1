import {
  CheckCircle2,
  HelpCircle,
  Radio,
  Users,
} from 'lucide-react'
import type { ReactNode } from 'react'

interface RightRailCardProps {
  title: string
  icon: typeof Radio
  children: ReactNode
}

function RightRailCard({
  title,
  icon: Icon,
  children,
}: RightRailCardProps) {
  return (
    <section className="rounded-card bg-smoked-card p-4 text-text-on-card-primary shadow-raised">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-control bg-smoked-card shadow-pressed">
          <Icon aria-hidden="true" className="size-4" />
        </div>

        <p className="cuco-kicker text-text-on-card-secondary">
          {title}
        </p>
      </div>

      <div className="mt-4">
        {children}
      </div>
    </section>
  )
}

function RailValue({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-control bg-smoked-card p-3 shadow-pressed">
      <span className="text-xs text-text-on-card-secondary">
        {title}
      </span>

      <span className="text-right text-xs font-semibold text-text-on-card-primary">
        {value}
      </span>
    </div>
  )
}

export function RightRail() {
  return (
    <aside className="hidden w-80 shrink-0 border-l border-smoked-shadow/30 xl:block">
      <div className="sticky top-0 space-y-4 p-4 md:p-6">
        <RightRailCard title="LIVE ROOM" icon={Radio}>
          <div className="space-y-3">
            <RailValue title="Next session" value="Not scheduled" />

            <button
              className="inline-flex min-h-10 w-full items-center justify-center rounded-control bg-smoked-card px-4 py-2 text-xs font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-raised-hover active:translate-y-px active:shadow-pressed"
              type="button"
            >
              Enter Live Room
            </button>
          </div>
        </RightRailCard>

        <RightRailCard title="ATTENDANCE" icon={CheckCircle2}>
          <RailValue title="Recorded sessions" value="0" />
          <div className="mt-3">
            <RailValue title="Attendance rate" value="—" />
          </div>
        </RightRailCard>

        <RightRailCard title="COHORT" icon={Users}>
          <RailValue title="Cohort" value="Not assigned" />
          <div className="mt-3">
            <RailValue title="Members visible" value="0" />
          </div>
        </RightRailCard>

        <RightRailCard title="QUESTIONS" icon={HelpCircle}>
          <RailValue title="Open questions" value="0" />
          <div className="mt-3">
            <RailValue title="Answered" value="0" />
          </div>
        </RightRailCard>
      </div>
    </aside>
  )
}