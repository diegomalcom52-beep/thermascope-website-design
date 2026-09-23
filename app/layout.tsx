import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThermaScope — Improving the Future, a Nanometer at a Time',
  description:
    'ThermaScope is an early-stage deep-tech nanotechnology company researching nanomaterials, micro/nanorobotics, nanoscale sensors, semiconductor and thermal technologies, and computational nanotechnology.',
  generator: 'v0.app',
  keywords: [
    'nanotechnology',
    'nanomaterials',
    'nanorobotics',
    'nanosensors',
    'semiconductor',
    'thermal materials',
    'computational nanotechnology',
    'materials science',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0c10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
