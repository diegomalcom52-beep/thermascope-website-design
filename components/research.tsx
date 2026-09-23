const PRINCIPLES = [
  {
    title: 'Materials at the nanoscale',
    body: 'We study how structure at the nanometer scale governs the thermal, electrical, and mechanical behavior of engineered materials.',
  },
  {
    title: 'From simulation to prototype',
    body: 'Computational modeling and data analysis guide early experiments, helping us reason about systems before they are built.',
  },
  {
    title: 'Systems that sense and move',
    body: 'Long-horizon research into microscale sensing and actuation — how tiny systems perceive and navigate their environment.',
  },
]

export function Research() {
  return (
    <section id="research" className="relative scroll-mt-20 border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Our Research
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering focused. Future oriented.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            ThermaScope is an early-stage research and development company. Our work spans
            fundamental materials science and applied engineering, connecting nanoscale phenomena to
            the systems and tools that could one day put them to use.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Thermal engineering and intelligent computational tools are individual technology areas
            within a broader nanotechnology program — not the whole of it.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-background/40">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="flex gap-5 p-6">
              <span className="font-mono text-sm text-accent-cyan/80">{`0${i + 1}`}</span>
              <div>
                <h3 className="text-base font-medium">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
