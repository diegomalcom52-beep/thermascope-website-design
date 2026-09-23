import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TechnologyAreas } from '@/components/technology-areas'
import { Research } from '@/components/research'
import { Approach } from '@/components/approach'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TechnologyAreas />
        <Research />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
