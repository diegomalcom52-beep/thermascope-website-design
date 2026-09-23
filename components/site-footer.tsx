import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 rounded-sm" size={40} />
              <span className="text-base font-semibold tracking-tight">
                Therma<span className="text-accent-cyan">Scope</span>
              </span>
            </div>
            <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
              Improving the Future, a Nanometer at a Time.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Founded by Diego Alvarez. An early-stage deep-tech nanotechnology research and
              engineering company.
            </p>
          </div>

          <nav className="text-sm" aria-label="Footer">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </span>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Technology', href: '#technology' },
                { label: 'Research', href: '#research' },
                { label: 'Approach', href: '#approach' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:diegomalcom52@gmail.com"
                  className="text-muted-foreground hover:text-accent-cyan"
                >
                  diegomalcom52@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19513989839"
                  className="text-muted-foreground hover:text-accent-cyan"
                >
                  (951) 398-9839
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thermascope-nano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-cyan"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ThermaScope. All rights reserved.</p>
          <p className="font-mono">Concepts shown are research &amp; exploratory prototypes.</p>
        </div>
      </div>
    </footer>
  )
}
