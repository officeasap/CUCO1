import type { ReactNode } from 'react'
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Headphones,
  HelpCircle,
  PlayCircle,
  Radio,
  Send,
  ShieldCheck,
  Trophy,
  Users,
} from 'lucide-react'

interface DashboardModuleProps {
  eyebrow: string
  title: string
  description: string
  icon: typeof Radio
  children: ReactNode
}

function DashboardModule({
  eyebrow,
  title,
  description,
  icon: Icon,
  children,
}: DashboardModuleProps) {
  return (
    <section className="space-y-8">
      <header className="max-w-4xl">
        <div className="flex items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-card bg-smoked-card text-text-on-card-primary shadow-raised">
            <Icon aria-hidden="true" className="size-6" />
          </div>

          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              {eyebrow}
            </p>

            <h1 className="cuco-editorial mt-3 text-5xl leading-none text-text-on-substrate-primary md:text-6xl">
              {title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-text-on-substrate-muted md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </header>

      {children}
    </section>
  )
}

function Panel({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-card bg-smoked-card p-6 shadow-raised">
      <p className="cuco-kicker text-text-on-card-secondary">
        {title}
      </p>

      <div className="mt-5">{children}</div>
    </section>
  )
}

function EmptyState({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="rounded-card bg-smoked-card p-8 shadow-raised">
      <p className="cuco-kicker text-text-on-card-secondary">
        {label}
      </p>

      <h2 className="cuco-editorial mt-3 text-3xl text-text-on-card-primary">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-text-on-card-secondary">
        {description}
      </p>
    </div>
  )
}

function ActionButton({
  children,
  icon: Icon = PlayCircle,
}: {
  children: ReactNode
  icon?: typeof PlayCircle
}) {
  return (
    <button
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-smoked-ember px-5 py-3 text-sm font-bold text-text-on-card-primary shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
      type="button"
    >
      <Icon aria-hidden="true" className="size-4" />
      {children}
    </button>
  )
}

export function LiveRoom() {
  return (
    <DashboardModule
      eyebrow="LIVE LEARNING"
      title="Live Room"
      description="Your live CUCO teaching room for scheduled sessions, workshops, rehearsals, and real-time learning."
      icon={Radio}
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(18rem,1fr)]">
        <Panel title="NEXT LIVE SESSION">
          <div className="rounded-control bg-smoked-card p-5 shadow-pressed">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-text-on-card-primary">
                  No live session scheduled
                </p>

                <p className="mt-2 text-sm leading-6 text-text-on-card-secondary">
                  When your next CUCO session is published, it will appear
                  here with the session time and entry control.
                </p>
              </div>

              <span className="rounded-control bg-smoked-card px-3 py-2 text-xs font-semibold text-text-on-card-secondary shadow-pressed">
                WAITING
              </span>
            </div>

            <div className="mt-5">
              <ActionButton icon={Radio}>
                Enter Live Room
              </ActionButton>
            </div>
          </div>
        </Panel>

        <Panel title="SESSION STATUS">
          <div className="space-y-3">
            <StatusRow
              icon={Clock3}
              label="Next session"
              value="Not scheduled"
            />

            <StatusRow
              icon={Users}
              label="Room"
              value="CUCO Learning Studio"
            />

            <StatusRow
              icon={ShieldCheck}
              label="Access"
              value="Authenticated learner"
            />
          </div>
        </Panel>
      </div>
    </DashboardModule>
  )
}

export function Scripts() {
  return (
    <DashboardModule
      eyebrow="LEARNING MATERIALS"
      title="Scripts"
      description="Your programme scripts, lesson materials, reading material, and structured learning resources."
      icon={FileText}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <ResourceCard
          icon={BookOpen}
          title="Programme Materials"
          description="Your published programme learning materials will appear here."
        />

        <ResourceCard
          icon={FileText}
          title="Assigned Scripts"
          description="Scripts assigned to your current programme will appear here."
        />
      </div>

      <EmptyState
        label="MATERIAL LIBRARY"
        title="Your script library is ready for content."
        description="Once programme materials are published and attached to your enrolment, CUCO will surface them here."
      />
    </DashboardModule>
  )
}

export function Assignments() {
  return (
    <DashboardModule
      eyebrow="ACADEMIC WORK"
      title="Assignments"
      description="Track assigned work, submission status, deadlines, and feedback from your CUCO learning programme."
      icon={CheckCircle2}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="ASSIGNED" value="0" detail="Current assignments" />
        <MetricCard label="SUBMITTED" value="0" detail="Completed submissions" />
        <MetricCard label="PENDING" value="0" detail="Awaiting your work" />
      </div>

      <EmptyState
        label="ASSIGNMENT QUEUE"
        title="No assignments yet."
        description="Assignments connected to your active programme will appear here with their status and submission workflow."
      />
    </DashboardModule>
  )
}

export function Journal() {
  return (
    <DashboardModule
      eyebrow="LEARNER REFLECTION"
      title="Journal"
      description="Keep your private learning reflections, notes, observations, and programme journey in one place."
      icon={BookOpen}
    >
      <Panel title="NEW JOURNAL ENTRY">
        <textarea
          className="min-h-44 w-full resize-y rounded-control bg-smoked-card p-4 text-sm leading-6 text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
          placeholder="Write a reflection about your learning..."
        />

        <div className="mt-4 flex justify-end">
          <ActionButton icon={Send}>
            Save Reflection
          </ActionButton>
        </div>
      </Panel>

      <EmptyState
        label="JOURNAL HISTORY"
        title="Your reflections will live here."
        description="Saved journal entries will become part of your private CUCO learning record."
      />
    </DashboardModule>
  )
}

export function Rehearsal() {
  return (
    <DashboardModule
      eyebrow="PRACTICE"
      title="Rehearsal"
      description="Prepare, practise, and review the work required for your programme sessions."
      icon={CalendarDays}
    >
      <div className="grid gap-5 xl:grid-cols-2">
        <Panel title="NEXT REHEARSAL">
          <p className="text-xl font-semibold text-text-on-card-primary">
            No rehearsal scheduled
          </p>

          <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
            Your next rehearsal will appear here when your programme
            publishes a rehearsal schedule.
          </p>

          <div className="mt-5">
            <ActionButton icon={CalendarDays}>
              View Rehearsal Calendar
            </ActionButton>
          </div>
        </Panel>

        <Panel title="PRACTICE CHECKLIST">
          <div className="space-y-3">
            <ChecklistItem label="Review assigned material" />
            <ChecklistItem label="Complete required preparation" />
            <ChecklistItem label="Attend scheduled rehearsal" />
          </div>
        </Panel>
      </div>
    </DashboardModule>
  )
}

export function Scores() {
  return (
    <DashboardModule
      eyebrow="ASSESSMENT"
      title="Scores"
      description="Review your programme assessments, completed work, performance results, and academic progress."
      icon={Trophy}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="ASSESSMENTS" value="0" detail="Recorded assessments" />
        <MetricCard label="COMPLETED" value="0" detail="Completed assessments" />
        <MetricCard label="AVERAGE" value="—" detail="Available when scored" />
      </div>

      <EmptyState
        label="ASSESSMENT RECORD"
        title="No scores have been recorded."
        description="When your instructors record assessment results, they will appear here as part of your learner record."
      />
    </DashboardModule>
  )
}

export function Attendance() {
  return (
    <DashboardModule
      eyebrow="PARTICIPATION"
      title="Attendance"
      description="Track your participation across live sessions, rehearsals, workshops, and programme activities."
      icon={CheckCircle2}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="SESSIONS" value="0" detail="Sessions recorded" />
        <MetricCard label="PRESENT" value="0" detail="Attendance confirmed" />
        <MetricCard label="RATE" value="—" detail="Calculated after sessions" />
      </div>

      <EmptyState
        label="ATTENDANCE HISTORY"
        title="No attendance records yet."
        description="Your attendance history will populate automatically as CUCO records participation in programme activities."
      />
    </DashboardModule>
  )
}

export function Questions() {
  return (
    <DashboardModule
      eyebrow="ACADEMIC SUPPORT"
      title="Questions"
      description="Ask questions about your learning and keep track of responses from the CUCO teaching environment."
      icon={HelpCircle}
    >
      <Panel title="ASK A QUESTION">
        <textarea
          className="min-h-36 w-full resize-y rounded-control bg-smoked-card p-4 text-sm leading-6 text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:shadow-contact"
          placeholder="What would you like help understanding?"
        />

        <div className="mt-4 flex justify-end">
          <ActionButton icon={Send}>
            Submit Question
          </ActionButton>
        </div>
      </Panel>

      <EmptyState
        label="QUESTION HISTORY"
        title="No questions yet."
        description="Questions you submit will appear here together with their response status."
      />
    </DashboardModule>
  )
}

export function Cohort() {
  return (
    <DashboardModule
      eyebrow="LEARNING COMMUNITY"
      title="Cohort"
      description="See the learners, programme information, and cohort-level information associated with your academic relationship."
      icon={Users}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="COHORT" value="—" detail="Not assigned yet" />
        <MetricCard label="LEARNERS" value="0" detail="Visible cohort members" />
        <MetricCard label="STATUS" value="ACTIVE" detail="Authenticated learner" />
      </div>

      <EmptyState
        label="COHORT SPACE"
        title="Your cohort will appear here."
        description="Once your programme assigns you to a cohort, its relevant information will become available here."
      />
    </DashboardModule>
  )
}

export function Recordings() {
  return (
    <DashboardModule
      eyebrow="SESSION LIBRARY"
      title="Recordings"
      description="Revisit recorded teaching sessions, workshops, rehearsals, and other programme learning material."
      icon={Headphones}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <ResourceCard
          icon={PlayCircle}
          title="Live Session Recordings"
          description="Published session recordings will appear here."
        />

        <ResourceCard
          icon={Headphones}
          title="Learning Audio"
          description="Available audio learning resources will appear here."
        />
      </div>

      <EmptyState
        label="RECORDING LIBRARY"
        title="No recordings available yet."
        description="Recordings become available here after a session has been recorded and published to your programme."
      />
    </DashboardModule>
  )
}

export function Certificate() {
  return (
    <DashboardModule
      eyebrow="ACHIEVEMENT"
      title="Certificate"
      description="Your CUCO certificate area. Completed programmes will unlock certificate issuance and verification."
      icon={Award}
    >
      <Panel title="CERTIFICATION STATUS">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-text-on-card-primary">
              No certificate available
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-on-card-secondary">
              Complete the required programme work before your certificate
              can be issued.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-control bg-smoked-card px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-text-on-card-secondary shadow-pressed">
            <ShieldCheck aria-hidden="true" className="size-4" />
            NOT YET ELIGIBLE
          </span>
        </div>
      </Panel>

      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="LESSONS" value="0" detail="Required lessons completed" />
        <MetricCard label="ASSESSMENTS" value="0" detail="Required assessments completed" />
        <MetricCard label="CERTIFICATE" value="—" detail="Issued after completion" />
      </div>
    </DashboardModule>
  )
}

function StatusRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-control bg-smoked-card p-4 shadow-pressed">
      <div className="flex items-center gap-3">
        <Icon
          aria-hidden="true"
          className="size-4 shrink-0 text-text-on-card-secondary"
        />

        <span className="text-sm text-text-on-card-secondary">
          {label}
        </span>
      </div>

      <span className="text-right text-sm font-semibold text-text-on-card-primary">
        {value}
      </span>
    </div>
  )
}

function ResourceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof BookOpen
  title: string
  description: string
}) {
  return (
    <article className="rounded-card bg-smoked-card p-6 shadow-raised transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised-hover">
      <div className="flex size-12 items-center justify-center rounded-control bg-smoked-card shadow-pressed">
        <Icon aria-hidden="true" className="size-5 text-text-on-card-primary" />
      </div>

      <h2 className="cuco-editorial mt-5 text-2xl text-text-on-card-primary">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-text-on-card-secondary">
        {description}
      </p>
    </article>
  )
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail: string
}) {
  return (
    <article className="rounded-card bg-smoked-card p-6 shadow-raised">
      <p className="cuco-kicker text-text-on-card-secondary">
        {label}
      </p>

      <p className="cuco-numeric mt-3 text-4xl font-semibold text-text-on-card-primary">
        {value}
      </p>

      <p className="mt-2 text-sm text-text-on-card-secondary">
        {detail}
      </p>
    </article>
  )
}

function ChecklistItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-control bg-smoked-card p-4 shadow-pressed">
      <CheckCircle2
        aria-hidden="true"
        className="size-4 shrink-0 text-smoked-success"
      />

      <span className="text-sm text-text-on-card-primary">
        {label}
      </span>
    </div>
  )
}