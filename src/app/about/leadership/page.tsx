import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animations'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leadership | The Ayotunde Oso Foundation',
  description:
    'Meet the Board of Trustees, Executive Team, and Advisory Council driving the Ayotunde Oso Foundation\'s mission forward.',
}

type Leader = {
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

const BOARD: Leader[] = [
  {
    name: 'Oso Oluwafemi',
    title: 'Board Chair',
    bio: 'Distinguished engineer from LAUTECH with 15+ years in various aspects of engineering and governance.',
    image: '',
    linkedin: '#',
  },
  {
    name: 'Oso Jesutofunmi',
    title: 'Vice Chair',
    bio: '',
    image: '',
    linkedin: '#',
    twitter: '#',
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
    email: '#',
  },
]

const EXECUTIVE: Leader[] = [
  {
    name: 'Ayotunde Oso',
    title: 'Founder & Executive Director',
    bio: 'Visionary leader and social entrepreneur. Read the full biography on our Founder page.',
    image: '',
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
    title: 'Treasurer',
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
    image: '',
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
    image: '0',
  },
]

function LeaderCard({ person }: { person: Leader }) {
  return (
    <Card hover className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-64">
        <Image src={person.image} alt={person.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {(person.linkedin || person.twitter || person.email) && (
          <div className="absolute bottom-3 right-3 flex gap-2">
            {person.linkedin && (
              <Link
                href={person.linkedin}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-3.5" />
              </Link>
            )}
            {person.twitter && (
              <Link
                href={person.twitter}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-3.5" />
              </Link>
            )}
            {person.email && (
              <Link
                href={`mailto:${person.email}`}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-neutral-900 dark:text-neutral-100">{person.name}</h3>
        <p className="text-xs font-medium text-brand-600 dark:text-brand-400 mt-0.5 mb-3">{person.title}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{person.bio}</p>
      </div>
    </Card>
  )
}

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
            <p className="text-body max-w-2xl mt-3 text-neutral-600 dark:text-neutral-400">
              Our Board provides strategic oversight, fiduciary accountability, and institutional wisdom
              to ensure AOF fulfils its mission with integrity.
            </p>
          </SlideIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD.map((p) => (
              <StaggerItem key={p.name} direction="scale">
                <LeaderCard person={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Executive */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <SlideIn from="left" className="mb-12">
            <Badge variant="gold" className="mb-3">Operations</Badge>
            <h2 className="heading-2">Executive Team</h2>
            <p className="text-body max-w-2xl mt-3 text-neutral-600 dark:text-neutral-400">
              Day-to-day leadership with deep field experience, sector expertise, and an unyielding
              drive for results.
            </p>
          </SlideIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE.map((p) => (
              <StaggerItem key={p.name} direction="scale">
                <LeaderCard person={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advisors */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-12">
            <Badge variant="secondary" className="mb-3">Expert Guidance</Badge>
            <h2 className="heading-2">Advisory Council</h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {ADVISORS.map((p) => (
              <StaggerItem key={p.name} direction="scale">
                <LeaderCard person={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Join Our Team</h2>
            <p className="text-brand-200 mb-8 max-w-xl mx-auto">
              We are always looking for passionate individuals to join our staff, volunteer corps,
              or advisory network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
