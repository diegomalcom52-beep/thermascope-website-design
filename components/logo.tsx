import Image from 'next/image'

export function Logo({
  className,
  size = 32,
}: {
  className?: string
  size?: number
}) {
  return (
    <Image
      src="/images/thermascope-logo.png"
      alt="ThermaScope logo"
      width={size}
      height={size}
      priority
      className={className}
    />
  )
}
