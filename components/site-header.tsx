'use client'

import { useEffect, useState } from 'react'
import { Logo } from './logo'

const NAV = [
  { label: 'Technology', href: '#technology' },
  { label: 'Research', href: '#research' },
  { label: 'Approach', href: '#approach' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ThermaScope home">
          <Logo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight">
            Therma<span className="text-accent-cyan">Scope</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#research"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
        >
          Our Research
        </a>
      </div>
    </header>
  )
}
