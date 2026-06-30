import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
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
    name: 'Prof. Adaeze Okonkwo',
    title: 'Board Chair',
    bio: 'Distinguished professor of Public Policy at University of Lagos with 30+ years in governance and development finance. Former advisor to the African Development Bank.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Mr. Emeka Nwosu',
    title: 'Vice Chair & Treasurer',
    bio: 'Co-founder of TechNaija and seasoned impact investor. Brings two decades of corporate finance and social enterprise experience across East and West Africa.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Fatima Al-Rasheed',
    title: 'Board Member',
    bio: 'Global health specialist and former WHO consultant. Leads AOF\'s healthcare committee and brings expertise in rural health system strengthening.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Barrister Tunde Adekunle SAN',
    title: 'Board Member & Legal Counsel',
    bio: 'Senior Advocate of Nigeria specialising in nonprofit law and corporate governance. Serves on the boards of five leading Nigerian civil society organisations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: '#',
  },
]

const EXECUTIVE: Leader[] = [
  {
    name: 'Ayotunde Oso',
    title: 'Founder & Executive Director',
    bio: 'Visionary leader and social entrepreneur. Read the full biography on our Founder page.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Ms. Chisom Eze',
    title: 'Chief Operating Officer',
    bio: 'Former McKinsey consultant turned social sector leader. Oversees AOF\'s day-to-day operations, programme delivery, and organisational systems across all regions.',
    image: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Mr. David Mensah',
    title: 'Director of Programmes',
    bio: 'Ghanaian development professional with 15 years managing multi-country programmes. Leads AOF\'s five programme areas and ensures quality, reach, and impact.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Ms. Amaka Obi',
    title: 'Director of Partnerships & Fundraising',
    bio: 'Strategic partnership builder with experience at UNICEF and Save the Children. Has secured over $3M in grants and corporate partnerships for AOF since 2020.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Seun Adeyemi',
    title: 'Director of Healthcare',
    bio: 'Medical doctor and public health expert. Designs and oversees AOF\'s mobile health programmes, maternal health initiatives, and health education campaigns.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Ms. Yetunde Bello',
    title: 'Head of Communications',
    bio: 'Award-winning journalist and communications strategist. Leads AOF\'s storytelling, media relations, digital presence, and brand strategy.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    linkedin: '#',
    twitter: '#',
  },
]

const ADVISORS: Leader[] = [
  {
    name: 'Prof. Ngozi Ekwueme',
    title: 'Advisory Council — Education Policy',
    bio: 'Former Minister of Education and UNESCO Chair in Inclusive Education. Guides AOF\'s education strategy and policy advocacy work.',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80',
  },
  {
    name: 'Mr. Kofi Asante',
    title: 'Advisory Council — Climate & Environment',
    bio: 'Lead climate negotiator and founder of GreenAfrica Initiative. Advises AOF\'s Environmental Sustainability programme.',
    image: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=400&q=80',
  },
  {
    name: 'Ms. Blessing Okafor',
    title: 'Advisory Council — Youth Development',
    bio: 'Social entrepreneur and founder of YouthEdge Africa. Brings expertise in youth empowerment, vocational training, and entrepreneurship ecosystems.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80',
  },
]

function LeaderCard({ person }: { person: Leader }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-64">
        <Image src={person.image} alt={person.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {(person.linkedin || person.twitter || person.email) && (
          <div className="absolute bottom-3 right-3 flex gap-2">
            {person.linkedin && (
              <Link href={person.linkedin} className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-3.5" />
              </Link>
            )}
            {person.twitter && (
              <Link href={person.twitter} className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors" aria-label="Twitter">
                <Twitter className="size-3.5" />
              </Link>
            )}
            {person.email && (
              <Link href={`mailto:${person.email}`} className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors" aria-label="Email">
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
        subtitle="Experienced, diverse, and deeply committed leaders guiding AOF\'s mission across every level of the organisation."
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
          <div className="mb-12">
            <Badge variant="brand" className="mb-3">Governance</Badge>
            <h2 className="heading-2">Board of Trustees</h2>
            <p className="text-body max-w-2xl mt-3 text-neutral-600 dark:text-neutral-400">
              Our Board provides strategic oversight, fiduciary accountability, and institutional wisdom to ensure AOF fulfils its mission with integrity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD.map(p => <LeaderCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Executive */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <div className="mb-12">
            <Badge variant="gold" className="mb-3">Operations</Badge>
            <h2 className="heading-2">Executive Team</h2>
            <p className="text-body max-w-2xl mt-3 text-neutral-600 dark:text-neutral-400">
              Day-to-day leadership with deep field experience, sector expertise, and an unyielding drive for results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE.map(p => <LeaderCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section">
        <div className="container-xl">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-3">Expert Guidance</Badge>
            <h2 className="heading-2">Advisory Council</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {ADVISORS.map(p => <LeaderCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <h2 className="heading-2 text-white mb-4">Join Our Team</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">We are always looking for passionate individuals to join our staff, volunteer corps, or advisory network.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/careers" className="bg-gold-500 text-forest-900 px-8 py-3 rounded-xl font-semibold hover:bg-gold-400 transition-colors">View Open Positions</Link>
            <Link href="/volunteer" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
