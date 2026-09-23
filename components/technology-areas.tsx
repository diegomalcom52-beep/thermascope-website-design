import Image from 'next/image'

type Area = {
  id: string
  index: string
  title: string
  image: string
  description: string
  tag: string
  /** Small provenance label shown over the image, e.g. a source credit. */
  credit?: string
  /** Distinguishes conceptual renders from authentic scientific imagery. */
  badge?: 'Concept Visualization' | 'External reference'
}

const AREAS: Area[] = [
  {
    id: 'nanomaterials',
    index: '01',
    title: 'Nanomaterials',
    image: '/images/nist-nanotubes.jpg',
    tag: 'Research & Development',
    credit: 'Single-wall carbon nanotube bundles, t-SEM · Credit: NIST',
    badge: 'External reference',
    description:
      'Research and development of engineered materials whose nanoscale structure — nanowires, nanotubes, and nanoparticles — can enable improved thermal, electrical, mechanical, and functional properties.',
  },
  {
    id: 'nanorobotics',
    index: '02',
    title: 'Micro & Nanorobotics',
    image: '/images/nanorobotics.png',
    tag: 'Exploratory Research',
    badge: 'Concept Visualization',
    description:
      'Exploratory development of extremely small robotic and magnetically actuated systems, with long-term research focused on controlled movement, sensing, manipulation, and autonomous microscale systems.',
  },
  {
    id: 'nanosensors',
    index: '03',
    title: 'Nanosensors',
    image: '/images/nist-nanoparticles.jpg',
    tag: 'Research',
    credit: 'Stereo SEM of a nanoparticle aggregate · Credit: NIST',
    badge: 'External reference',
    description:
      'Research into nanoscale and microscale sensing technologies capable of detecting physical, chemical, and environmental changes at extremely small scales.',
  },
  {
    id: 'semiconductor',
    index: '04',
    title: 'Semiconductor & Thermal Technologies',
    image: '/images/nist-wafer-photonics.png',
    tag: 'Development',
    credit: 'Silicon wafer with integrated photonic chips · Credit: N. Nader/NIST',
    badge: 'External reference',
    description:
      'Development and investigation of advanced materials and engineering approaches for thermal management and next-generation electronics and photonics.',
  },
  {
    id: 'computational',
    index: '05',
    title: 'Computational Nanotechnology',
    image: '/images/nist-sem-patterns.png',
    tag: 'Engineering Tools',
    credit: 'Nanoscale pattern metrology & modeling · Credit: NIST',
    badge: 'External reference',
    description:
      'Use of simulation, modeling, metrology, and data analysis to support materials research and nanoscale system development before anything is built.',
  },
]

export function TechnologyAreas() {
  return (
    <section id="technology" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          Core Technology Areas
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Nanotechnology first. Materials science driven.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Five interconnected research and engineering domains — from the atomic structure of
          materials to the computational tools that model them.
        </p>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground/80">
          Microscopy images below are authentic scientific references from the National Institute of
          Standards and Technology (NIST), shown with credit. They illustrate the science of each
          field and do not depict ThermaScope products, experiments, or facilities. Concept
          visualizations are labeled as such.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((area, i) => (
          <article
            key={area.id}
            className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent-cyan/40 ${
              i === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div className={`relative overflow-hidden ${i === 0 ? 'h-56' : 'h-44'}`}>
              <Image
                src={area.image || '/placeholder.svg'}
                alt={`${area.title} — scientific visualization`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-4 top-4 font-mono text-xs text-accent-cyan/90">
                {area.index}
              </span>
              {area.badge ? (
                <span
                  className={`absolute right-3 top-3 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur ${
                    area.badge === 'Concept Visualization'
                      ? 'border-accent-blue/40 bg-background/60 text-accent-blue'
                      : 'border-border bg-background/60 text-muted-foreground'
                  }`}
                >
                  {area.badge}
                </span>
              ) : null}
              {area.credit ? (
                <span className="absolute inset-x-3 bottom-2 truncate font-mono text-[10px] text-muted-foreground/70">
                  {area.credit}
                </span>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {area.tag}
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{area.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
