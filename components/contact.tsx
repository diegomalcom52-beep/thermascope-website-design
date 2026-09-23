'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContact, type ContactState } from '@/app/actions/contact'

const CONTACTS = [
  {
    label: 'Email',
    value: 'diegomalcom52@gmail.com',
    href: 'mailto:diegomalcom52@gmail.com',
  },
  {
    label: 'Phone',
    value: '(951) 398-9839',
    href: 'tel:+19513989839',
  },
  {
    label: 'LinkedIn',
    value: 'thermascope-nano',
    href: 'https://www.linkedin.com/company/thermascope-nano',
    external: true,
  },
]

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center justify-center rounded-md bg-accent-cyan px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? 'Sending…' : 'Send Message'}
    </button>
  )
}

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-cyan">
              Contact
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Start a conversation
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              For research collaboration, technical inquiries, or to learn more about ThermaScope,
              reach out directly or send a message.
            </p>

            <dl className="mt-10 space-y-5">
              {CONTACTS.map((c) => (
                <div key={c.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {c.label}
                  </dt>
                  <dd>
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-[15px] text-foreground transition-colors hover:text-accent-cyan"
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form action={formAction} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" autoComplete="name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <Field label="Organization" name="organization" autoComplete="organization" />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="resize-y rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent-cyan/70"
                placeholder="Tell us about your inquiry…"
              />
            </div>

            <SubmitButton />

            {state.status !== 'idle' && (
              <p
                role="status"
                className={`text-sm ${
                  state.status === 'success' ? 'text-accent-cyan' : 'text-red-400'
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
        {!required && <span className="ml-1 lowercase tracking-normal">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent-cyan/70"
      />
    </div>
  )
}
