import Image from 'next/image'
import { ParticleField } from './particle-field'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* layered scientific backdrop — authentic SEM micrograph */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/nist-nanowires.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18] radial-fade"
        />
        <div className="absolute inset-0 grid-lines radial-fade" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-40 sm:px-8 sm:pt-48">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Early-stage deep-tech nanotechnology
          </div>

          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Improving the Future,
            <br />
            <span className="bg-gradient-to-r from-accent-cyan via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              a Nanometer at a Time.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            ThermaScope explores and develops technologies at the intersection of nanomaterials,
            micro/nanorobotics, sensing, semiconductor engineering, and computational science.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#technology"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Our Technology
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-cyan/60"
            >
              Our Research
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">
          Background: silicon nanowire array, scanning electron micrograph. Credit: NIST — external
          scientific reference, not ThermaScope imagery.
        </p>
      </div>

      {/* thin heat-sweep divider */}
      <div
        className="relative h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, oklch(0.82 0.13 205 / 0.6), oklch(0.62 0.15 250 / 0.4), transparent)',
          backgroundSize: '200% 100%',
          animation: 'heat-sweep 6s linear infinite',
        }}
      />
    </section>
  )
}
