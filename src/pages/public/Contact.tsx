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

const FacebookMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.253h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
)

const contactChannels = [
  {
    label: 'EMAIL',
    value: 'info@culture-collective.com',
    secondaryValue: 'enroll@culture-collective.com',
    detail: 'General enquiries and admissions.',
    icon: 'mail',
    href: 'mailto:info@culture-collective.com',
  },
  {
    label: 'PHONE',
    value: '+66 1234 5678 09',
    secondaryValue: null,
    detail: 'Studio line. Bangkok, Thailand.',
    icon: 'phone',
    href: 'tel:+661234567809',
  },
  {
    label: 'FACEBOOK',
    value: 'fb.com/cucostudio',
    secondaryValue: null,
    detail: 'Follow Culture Collective Studio on Facebook.',
    icon: 'facebook',
    href: 'https://facebook.com/cucostudio',
  },
  {
    label: 'WEBSITE',
    value: 'culture-collective.com',
    secondaryValue: null,
    detail: 'The studio behind CUCO.',
    icon: 'website',
    href: 'https://culture-collective.com',
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
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-smoked-card px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
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
      {/* HERO */}
      <section className="cuco-shell py-hero">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">
              CONTACT · CULTURE COLLECTIVE STUDIO
            </p>
            <h1 className="cuco-editorial mt-4 max-w-3xl text-4xl leading-[0.95] text-text-on-substrate-primary sm:text-5xl lg:text-6xl">
              Start
              <br />
              the
              <br />
              conversation.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Questions about the Intensive, admissions, or the studio? Reach
              the people who answer the phone.
            </p>
          </div>

          <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-card bg-smoked-powder shadow-pressed">
              <MapPin aria-hidden="true" className="h-5 w-5 text-smoked-ember" />
            </div>
            <p className="cuco-kicker mt-5 text-text-on-card-primary">
              THE STUDIO
            </p>
            <h2 className="cuco-editorial mt-2 text-xl leading-tight text-text-on-card-primary">
              Culture Collective Studio
            </h2>
            <address className="mt-3 not-italic text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Third floor, Chatrium Residence Riverside / Chatrium Hotel,
              <br />
              Soi Charoen Krung 70,
              <br />
              Bangkok, Thailand.
            </address>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="cuco-shell pb-section">
        <div className="grid gap-3 md:grid-cols-2">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              className="group rounded-card bg-smoked-card p-4 shadow-raised transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-float md:p-5"
              href={channel.href}
              rel="noreferrer noopener"
              target={channel.href.startsWith('http') ? '_blank' : undefined}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-control bg-smoked-powder text-smoked-ember shadow-pressed">
                  {channel.icon === 'facebook' && <FacebookMark />}
                  {channel.icon === 'mail' && <Mail aria-hidden="true" className="h-4 w-4" />}
                  {channel.icon === 'phone' && <Phone aria-hidden="true" className="h-4 w-4" />}
                  {channel.icon === 'website' && <Globe2 aria-hidden="true" className="h-4 w-4" />}
                </div>
                <p className="cuco-kicker text-text-on-card-secondary">{channel.label}</p>
              </div>
              <h2 className="cuco-editorial mt-4 break-words text-lg leading-tight text-text-on-card-primary md:text-xl">
                {channel.value}
              </h2>
              {channel.secondaryValue && (
                <p className="mt-1 break-words text-sm text-text-on-card-secondary">
                  {channel.secondaryValue}
                </p>
              )}
              <p className="mt-2 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
                {channel.detail}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="cuco-shell py-section">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <p className="cuco-kicker text-text-on-substrate-muted">SEND A MESSAGE</p>
            <h2 className="cuco-editorial mt-2 text-2xl leading-tight text-text-on-substrate-primary md:text-3xl">
              Tell us
              <br />
              what you are
              <br />
              building.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-on-substrate-muted md:text-base md:leading-7">
              Whether you are applying to the Intensive, exploring a
              collaboration, or simply want to know more about the studio,
              write to us directly.
            </p>
          </div>

          <form
            className="rounded-card bg-smoked-card p-5 shadow-float md:p-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-3">
              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">YOUR NAME</span>
                <input
                  className="mt-2 h-11 w-full rounded-control bg-smoked-powder px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">EMAIL</span>
                <input
                  className="mt-2 h-11 w-full rounded-control bg-smoked-powder px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">SUBJECT</span>
                <input
                  className="mt-2 h-11 w-full rounded-control bg-smoked-powder px-4 text-sm text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="cuco-kicker text-text-on-card-primary">MESSAGE</span>
                <textarea
                  className="mt-2 min-h-36 w-full resize-y rounded-control bg-smoked-powder px-4 py-3 text-sm leading-6 text-text-on-card-primary shadow-pressed outline-none placeholder:text-text-on-card-secondary focus-visible:outline-none"
                  name="message"
                  placeholder="Write your message..."
                />
              </label>

              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-smoked-ember px-5 py-2.5 text-sm font-semibold text-text-on-card-primary shadow-raised transition-[box-shadow,transform,color] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised-hover active:translate-y-0.5 active:shadow-pressed"
                type="submit"
              >
                Send message <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>

              <p className="text-[10px] leading-4 text-text-on-card-secondary md:text-xs md:leading-5">
                This form is currently a presentation layer. Message delivery
                will be connected when the CUCO backend and Supabase data layer
                are wired.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CTA → COURSES — MAGNETIC REWRITE */}
      <section className="cuco-shell py-section">
        <div className="rounded-card bg-smoked-card p-5 shadow-float md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="cuco-kicker text-text-on-card-primary">
                THE WORK IS THE ENTRY
              </p>
              <h2 className="cuco-editorial mt-3 max-w-2xl text-2xl leading-tight text-text-on-card-primary md:text-3xl">
                You don't wait to be chosen.
                <br />
                You bring something chosen.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-text-on-card-secondary md:text-base md:leading-7">
                Eight weeks. Four original plays. One filmed reading. Bring a
                script, a monologue, or a director's eye — and leave with a
                produced credit and a cohort of peers who will be in your
                corner for years.
              </p>
            </div>
            <PressedLink to="/courses">
              See the Intensive <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PressedLink>
          </div>
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="cuco-shell pb-section">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-card bg-smoked-card p-5 shadow-raised md:p-6">
            <p className="cuco-kicker text-text-on-card-primary">OUR STORY</p>
            <h2 className="cuco-editorial mt-2 text-xl leading-tight text-text-on-card-primary md:text-2xl">
              Where CUCO came from.
            </h2>
            <p className="mt-3 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Six years of award-winning theatre in Bangkok, carried forward
              into a global online conservatory.
            </p>
            <Link
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-control bg-smoked-powder px-4 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed md:text-sm"
              to="/our-story"
            >
              Read our story <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-card bg-smoked-card p-5 shadow-raised md:p-6">
            <p className="cuco-kicker text-text-on-card-primary">FACULTY</p>
            <h2 className="cuco-editorial mt-2 text-xl leading-tight text-text-on-card-primary md:text-2xl">
              Meet the people behind the work.
            </h2>
            <p className="mt-3 text-xs leading-5 text-text-on-card-secondary md:text-sm md:leading-6">
              Working professionals from Los Angeles, New York, Yale, and
              Bangkok — each teaching the craft they still practice.
            </p>
            <Link
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-control bg-smoked-powder px-4 py-2 text-xs font-semibold text-text-on-card-primary shadow-pressed transition-[box-shadow,transform] duration-200 ease-cathedral hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0.5 active:shadow-pressed md:text-sm"
              to="/instructors"
            >
              Meet the instructors <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}