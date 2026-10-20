import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react'
import type { SubmitEvent } from 'react'
import { Link } from 'react-router-dom'

const contactChannels = [
  {
    label: 'EMAIL',
    value: '[TO BE ADDED]',
    detail: 'The official CUCO contact email will appear here.',
    icon: Mail,
  },
  {
    label: 'PHONE',
    value: '[TO BE ADDED]',
    detail: 'The official CUCO contact number will appear here.',
    icon: Phone,
  },
  {
    label: 'FACEBOOK',
    value: 'fb.com/cucostudio',
    detail: 'Follow Culture Collective Studio on Facebook.',
    icon: 'facebook',
  },
  {
    label: 'WEBSITE',
    value: 'culture-collective.com',
    detail: 'Visit the Culture Collective Studio website.',
    icon: Globe2,
  },
] as const

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

export function Contact() {
  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
  }

  return (
    <div className="overflow-hidden">
      <section className="cuco-shell py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              CONTACT · CULTURE COLLECTIVE STUDIO
            </p>

            <h1 className="cuco-editorial mt-5 max-w-5xl text-6xl leading-[0.84] text-text-on-substrate-primary sm:text-7xl md:text-8xl lg:text-9xl">
              Start
              <br />
              the
              <br />
              conversation.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-on-substrate-muted md:text-xl md:leading-9">
              Questions about CUCO, courses, the studio, or future work? Send
              us a message and begin the conversation.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-float md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-card bg-smoked-card shadow-pressed">
              <MessageSquare
                aria-hidden="true"
                className="h-6 w-6 text-smoked-ember"
              />
            </div>

            <p className="cuco-kicker mt-8 text-text-on-card-primary">
              CULTURE COLLECTIVE STUDIO
            </p>

            <h2 className="cuco-editorial mt-3 text-4xl leading-none text-text-on-card-primary">
              Bangkok, Thailand
            </h2>

            <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-text-on-card-secondary">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-smoked-ember"
              />
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-16 md:pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {contactChannels.map((channel) => {
            const Icon = channel.icon

            return (
              <article
                className="rounded-card bg-smoked-card p-7 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover md:p-8"
                key={channel.label}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-control bg-smoked-card shadow-pressed">
                    {Icon === 'facebook' ? (
                      <span
                        aria-hidden="true"
                        className="font-interface text-lg font-bold leading-none text-smoked-ember"
                      >
                        f
                      </span>
                    ) : (
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-smoked-ember"
                      />
                    )}
                  </div>

                  <p className="cuco-kicker text-text-on-card-secondary">
                    {channel.label}
                  </p>
                </div>

                <h2 className="cuco-editorial mt-8 break-words text-3xl leading-none text-text-on-card-primary md:text-4xl">
                  {channel.value}
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-text-on-card-secondary">
                  {channel.detail}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              SEND A MESSAGE
            </p>

            <h2 className="cuco-editorial mt-4 text-5xl leading-[0.9] text-text-on-substrate-primary md:text-7xl">
              Tell us
              <br />
              what you are
              <br />
              building.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-text-on-substrate-muted">
              Whether you are looking at a course, exploring collaboration, or
              simply want to connect with the studio, use the form to begin.
            </p>
          </div>

          <form
            className="rounded-card bg-smoked-card p-7 shadow-float md:p-10"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6">
              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">
                  YOUR NAME
                </span>

                <input
                  className="mt-3 h-14 w-full rounded-control bg-smoked-card px-5 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">
                  EMAIL
                </span>

                <input
                  className="mt-3 h-14 w-full rounded-control bg-smoked-card px-5 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">
                  SUBJECT
                </span>

                <input
                  className="mt-3 h-14 w-full rounded-control bg-smoked-card px-5 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">
                  MESSAGE
                </span>

                <textarea
                  className="mt-3 min-h-44 w-full resize-y rounded-control bg-smoked-card px-5 py-4 text-sm leading-7 text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-smoked-ember"
                  name="message"
                  placeholder="Write your message..."
                />
              </label>

              <button
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-control bg-smoked-card px-6 py-3 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                type="submit"
              >
                Send message
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>

              <p className="text-xs leading-5 text-text-on-card-secondary">
                This form is currently a presentation layer. Message delivery
                will be connected when the CUCO backend and Supabase data layer
                are wired.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="cuco-shell py-16 md:py-24">
        <div className="rounded-card bg-smoked-card p-8 shadow-float md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">
                FIND YOUR PLACE IN THE WORK
              </p>

              <h2 className="cuco-editorial mt-5 max-w-4xl text-5xl leading-[0.9] text-text-on-card-primary md:text-7xl">
                The conversation can become a course.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-text-on-card-secondary md:text-lg">
                Explore the CUCO disciplines and discover where your next
                chapter might begin.
              </p>
            </div>

            <PressedLink to="/courses">
              Browse courses
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
          </div>
        </div>
      </section>

      <section className="cuco-shell pb-24 pt-8 md:pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9">
            <p className="cuco-kicker text-text-on-card-primary">
              OUR STORY
            </p>

            <h2 className="cuco-editorial mt-4 text-4xl leading-none text-text-on-card-primary">
              Where CUCO came from.
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
              Discover the history of Culture Collective Studio and the
              theatrical work that came before CUCO.
            </p>

            <Link
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-control bg-smoked-card px-5 py-3 text-sm font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
              to="/our-story"
            >
              Read our story
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-card bg-smoked-card p-7 shadow-raised md:p-9">
            <p className="cuco-kicker text-text-on-card-primary">
              FACULTY
            </p>

            <h2 className="cuco-editorial mt-4 text-4xl leading-none text-text-on-card-primary">
              Meet the people behind the work.
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-on-card-secondary">
              Explore the professional theatre, education, and performance
              experience behind CUCO.
            </p>

            <Link
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-control bg-smoked-card px-5 py-3 text-sm font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed"
              to="/instructors"
            >
              Meet the instructors
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}