export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="var(--color-accent-cyan)" strokeWidth="1" opacity="0.5">
        <line x1="16" y1="16" x2="16" y2="5.5" />
        <line x1="16" y1="16" x2="16" y2="26.5" />
        <line x1="16" y1="16" x2="6.5" y2="10.75" />
        <line x1="16" y1="16" x2="25.5" y2="10.75" />
        <line x1="16" y1="16" x2="6.5" y2="21.25" />
        <line x1="16" y1="16" x2="25.5" y2="21.25" />
      </g>
      <circle cx="16" cy="16" r="3.6" fill="var(--color-accent-cyan)" />
      <circle cx="16" cy="5.5" r="2" fill="var(--color-accent-blue)" />
      <circle cx="16" cy="26.5" r="2" fill="var(--color-accent-blue)" />
      <circle cx="6.5" cy="10.75" r="2" fill="var(--color-accent-blue)" />
      <circle cx="25.5" cy="10.75" r="2" fill="var(--color-accent-blue)" />
      <circle cx="6.5" cy="21.25" r="2" fill="var(--color-accent-blue)" />
      <circle cx="25.5" cy="21.25" r="2" fill="var(--color-accent-blue)" />
    </svg>
  )
}
