import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animations'
import { LeaderCard, type Leader } from './LeaderCard'

export const metadata: Metadata = {
  title: 'Leadership | The Ayotunde Oso Foundation',
  description:
    "Meet the Board of Trustees, Executive Team, and Advisory Council driving the Ayotunde Oso Foundation's mission forward.",
}

const BOARD: Leader[] = [
  {
    name: 'Oso Oluwafemi',
    title: 'Board Chair',
    bio: 'Distinguished engineer from LAUTECH with 15+ years in various aspects of engineering and governance.',
    image: '/leadership-oso-oluwafemi.png',
    linkedin: '#',
  },
  {
    name: 'Oso Jesutofunmi',
    title: 'Vice Chair',
    bio: '',
    image: '/leadership-oso-jesutofunmi.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: '',
    title: 'Treasurer',
    bio: '',
    image: '',
    linkedin: '#',
  },
  {
    name: '',
    title: 'Board Member',
    bio: '',
    image: '',
    linkedin: '#',
  },
  {
    name: '',
    title: 'Board Member & Legal Counsel',
    bio: '',
    image: '',
    email: 'legal@ayotundeosofoundation.org',
  },
]

const EXECUTIVE: Leader[] = [
  {
    name: 'Ayotunde Oso',
    title: 'Founder & Executive Director',
    bio: 'Visionary leader and social entrepreneur. Read the full biography on our Founder page.',
    image: '/Founder.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: '',
    title: 'Chief Operating Officer',
    bio: '',
    image: '',
    linkedin: '#',
  },
  {
    name: '',
    title: 'Director of Programmes',
    bio: '',
    image: '',
    linkedin: '#',
  },
  {
    name: '',
    title: 'Director of Partnerships & Fundraising',
    bio: '',
    image: '',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: '',
    title: 'Director of Healthcare',
    bio: '',
    image: '',
    linkedin: '#',
  },
  {
    name: 'Ms. Yetunde Bello',
    title: 'Head of Communications',
    bio: '',
    image: '/leadership-yetunde-bello.png',
    linkedin: '#',
    twitter: '#',
  },
]

const ADVISORS: Leader[] = [
  {
    name: '',
    title: 'Advisory Council — Education Policy',
    bio: '',
    image: '',
  },
  {
    name: '',
    title: 'Advisory Council — Climate & Environment',
    bio: '',
    image: '',
  },
  {
    name: '',
    title: 'Advisory Council — Youth Development',
    bio: '',
    image: '',
  },
]

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Our Leadership"
        subtitle="Experienced, diverse, and deeply committed leaders guiding AOF's mission across every level of the organisation."
        eyebrow="The Team"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Leadership', href: '/about/leadership' },
        ]}
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
      />

      {/* Board */}
      <section className="section">
        <div className="container-xl">
          <SlideIn from="left" className="mb-12">
            <Badge variant="brand" className="mb-3">Governance</Badge>
            <h2 className="heading-2">Board of Trustees</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Our Board of Trustees provides strategic oversight, governance, and accountability
              for all AOF activities. Each trustee serves in a voluntary capacity.
            </p>
          </SlideIn>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {BOARD.map((person) => (
              <StaggerItem key={person.title} direction="up">
                <LeaderCard person={person} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Executive */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <SlideIn from="right" className="mb-12">
            <Badge variant="gold" className="mb-3">Management</Badge>
            <h2 className="heading-2">Executive Team</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Our executive team manages day-to-day operations and leads programme delivery
              across all regions where AOF works.
            </p>
          </SlideIn>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVE.map((person) => (
              <StaggerItem key={person.title} direction="up">
                <LeaderCard person={person} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advisors */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-12">
            <Badge variant="brand" className="mb-3">Advisory</Badge>
            <h2 className="heading-2">Advisory Council</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Distinguished experts who provide specialised guidance to AOF&apos;s programme and
              strategy teams.
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((person) => (
              <StaggerItem key={person.title} direction="up">
                <LeaderCard person={person} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Join Our Team</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              We are always looking for talented, mission-driven individuals to join our staff,
              volunteer team, or advisory council.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
