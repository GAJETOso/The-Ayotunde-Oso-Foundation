import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ImpactCounter } from '@/components/home/ImpactCounter'
import { MissionSection } from '@/components/home/MissionSection'
import { ProgramsOverview } from '@/components/home/ProgramsOverview'
import { SuccessStories } from '@/components/home/SuccessStories'
import { LatestProjects } from '@/components/home/LatestProjects'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { Testimonials } from '@/components/home/Testimonials'
import { PartnerLogos } from '@/components/home/PartnerLogos'
import { DonationCTA } from '@/components/home/DonationCTA'
import { Newsletter } from '@/components/home/Newsletter'
import { LatestNews } from '@/components/home/LatestNews'
import { VolunteerCTA } from '@/components/home/VolunteerCTA'

export const metadata: Metadata = {
  title: 'The Ayotunde Oso Foundation | Empowering People. Transforming Communities.',
  description:
    'The Ayotunde Oso Foundation empowers individuals and transforms communities through education, healthcare, environmental sustainability, youth mentorship, and emergency humanitarian response across Nigeria and West Africa.',
  openGraph: {
    title: 'The Ayotunde Oso Foundation | Joy Returns. Lives Transform. Communities Rise.',
    description:
      'Empowering people and transforming communities through education, healthcare, environmental sustainability, mentorship, and emergency response.',
    images: ['/og-home.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <MissionSection />
      <ProgramsOverview />
      <SuccessStories />
      <LatestProjects />
      <DonationCTA />
      <UpcomingEvents />
      <Testimonials />
      <LatestNews />
      <VolunteerCTA />
      <PartnerLogos />
      <Newsletter />
    </>
  )
}
