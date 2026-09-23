import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-tight">
                Therma<span className="text-accent-cyan">Scope</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Improving the future, a nanometer at a time. An early-stage deep-tech nanotechnology
              research and engineering company.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm" aria-label="Footer">
            <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </span>
            <a href="#technology" className="text-muted-foreground hover:text-foreground">
              Technology
            </a>
            <a href="#research" className="text-muted-foreground hover:text-foreground">
              Research
            </a>
            <a href="#approach" className="text-muted-foreground hover:text-foreground">
              Approach
            </a>
            <a
              href="mailto:research@thermascope.tech"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ThermaScope. All rights reserved.</p>
          <p className="font-mono">Concepts shown are research &amp; exploratory prototypes.</p>
        </div>
      </div>
    </footer>
  )
}
