const STAGES = [
  { label: 'Exploratory Research', detail: 'Investigating fundamental nanoscale phenomena.' },
  { label: 'Modeling & Simulation', detail: 'Reasoning about systems computationally.' },
  { label: 'Prototype Development', detail: 'Building early experimental systems.' },
]

export function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          Our Positioning
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          An early-stage company, honest about its stage.
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          Everything here is framed as research, development, prototypes, or exploratory work. We
          are building the foundations — carefully, precisely, and from first principles.
        </p>
      </div>

      <div className="relative mt-16">
        <div
          className="absolute left-0 right-0 top-6 hidden h-px sm:block"
          style={{
            background:
              'linear-gradient(90deg, transparent, oklch(0.82 0.13 205 / 0.5), transparent)',
          }}
          aria-hidden="true"
        />
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STAGES.map((s, i) => (
            <li key={s.label} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-cyan/40 bg-background font-mono text-sm text-accent-cyan">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-4 text-base font-medium">{s.label}</h3>
              <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="relative px-6 py-14 text-center sm:px-12">
          <div className="absolute inset-0 grid-lines opacity-60 radial-fade" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Building the next nanometer.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              Follow ThermaScope&apos;s work across nanomaterials, microrobotics, sensing,
              semiconductors, and computational engineering.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#technology"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore Our Technology
              </a>
              <a
                href="mailto:research@thermascope.tech"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent-cyan/60"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
