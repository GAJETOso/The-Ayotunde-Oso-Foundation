import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CORE_VALUES, IMPACT_STATS, FOUNDATION_DATA } from '@/lib/constants'
import { ChevronRight, Users, Globe, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | The Ayotunde Oso Foundation',
  description:
    'Learn about The Ayotunde Oso Foundation — our story, mission, vision, values, and the people driving meaningful change across Nigeria and Africa.',
  openGraph: {
    title: 'About Us | The Ayotunde Oso Foundation',
    description: 'Our story, mission, and the people behind meaningful change.',
    url: 'https://ayotundeosofoundation.org/about',
  },
}

const TIMELINE = [
  {
    year: '2018',
    title: 'A Vision Takes Root',
    description:
      'Ayotunde Oso begins informal mentorship sessions in Lagos, recognising that access to opportunity — not lack of talent — was the barrier facing most young people.',
  },
  {
    year: '2019',
    title: 'Foundation Established',
    description:
      'The Ayotunde Oso Foundation is formally registered, with a five-programme mandate: Education, Healthcare, Mentorship, Environment, and Emergency Relief.',
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    description:
      'During COVID-19, AOF pivoted to emergency relief — distributing food, PPE, and educational materials to over 8,000 families across three states.',
  },
  {
    year: '2021',
    title: 'First Scholarship Cohort',
    description:
      'Launched the AOF Scholars Programme, awarding full scholarships to 47 students from underserved communities. 100% progressed to higher education.',
  },
  {
    year: '2022',
    title: 'Healthcare Expansion',
    description:
      'Mobile health clinics reached rural communities in Ogun, Ekiti, and Kogi states, providing free medical care to 12,000+ individuals.',
  },
  {
    year: '2023',
    title: 'Regional Partnerships',
    description:
      'Signed MoUs with 6 organisations across Ghana, Kenya, and Senegal, beginning AOF\'s continental expansion strategy.',
  },
  {
    year: '2024',
    title: '100,000 Lives Milestone',
    description:
      'AOF crosses the 100,000-lives-impacted milestone and launches the KOMAI digital platform, bringing mentorship and resources online.',
  },
  {
    year: '2025',
    title: 'Looking Ahead',
    description:
      'Ambitious five-year plan: 500,000 lives, 15 African countries, $10M endowment fund, and a permanent Learning and Innovation Centre.',
  },
]

const REACH_STATS = [
  { icon: Users, value: '127,400+', label: 'Lives Impacted', color: 'text-brand-600' },
  { icon: Globe, value: '8', label: 'Countries Active', color: 'text-gold-600' },
  { icon: Award, value: '47', label: 'Active Partners', color: 'text-emerald-600' },
  { icon: Heart, value: '2,300+', label: 'Volunteers', color: 'text-red-500' },
]

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        title="About The Ayotunde Oso Foundation"
        subtitle="Born from the belief that every individual deserves access to opportunity, quality healthcare, education, dignity, and hope."
        eyebrow="Our Story"
        breadcrumbs={[{ label: 'About', href: '/about' }]}
        image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=1600&q=80"
        size="lg"
      />

      {/* Mission + Vision */}
      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="brand" className="mb-4">Our Purpose</Badge>
              <h2 className="heading-2 mb-6">Guided by a clear mission and bold vision</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-600 pl-6">
                  <h3 className="font-semibold text-lg mb-2 text-brand-700">Mission</h3>
                  <p className="text-body text-neutral-600 dark:text-neutral-400">
                    To empower individuals and communities through education, healthcare, environmental
                    sustainability, mentorship, and emergency humanitarian response — creating pathways
                    to dignity, opportunity, and lasting change.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-6">
                  <h3 className="font-semibold text-lg mb-2 text-gold-700">Vision</h3>
                  <p className="text-body text-neutral-600 dark:text-neutral-400">
                    A world where every individual — regardless of background, geography, or circumstance
                    — has access to the opportunities, healthcare, education, and support needed to
                    live with dignity and purpose.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <Link href="/about/mission">Our Values &amp; Strategy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about/leadership">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="AOF team members working with community"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-700 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold font-display">2018</p>
                <p className="text-brand-200 text-sm mt-1">Year founded</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-forest-900 rounded-2xl p-4 shadow-xl">
                <p className="text-2xl font-bold">127K+</p>
                <p className="text-xs font-medium mt-0.5">Lives impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-900 dark:bg-brand-950 section">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {REACH_STATS.map(stat => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <Icon className={`size-8 mx-auto mb-3 ${stat.color.replace('text-', 'text-')}`} />
                  <p className="text-4xl font-bold text-white font-display">{stat.value}</p>
                  <p className="text-brand-300 text-sm mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-16">
            <Badge variant="brand" className="mb-4">Our Journey</Badge>
            <h2 className="heading-2">Seven years of growing impact</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-brand-200 dark:bg-brand-800" aria-hidden />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-8 lg:gap-16 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:block flex-1" />
                  {/* Year bubble */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="size-12 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center shadow-lg border-4 border-white dark:border-neutral-950">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <Card className="p-6">
                      <Badge variant="brand" size="sm" className="mb-2">{item.year}</Badge>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values preview */}
      <section className="section bg-cream-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">What We Stand For</Badge>
            <h2 className="heading-2">Our Core Values</h2>
            <p className="text-body max-w-2xl mx-auto mt-4 text-neutral-600 dark:text-neutral-400">
              Ten principles that guide every decision, programme, and partnership at the Ayotunde Oso Foundation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map(value => (
              <Card key={value.name} hover className="text-center p-6">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">{value.name}</h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/about/mission">Read Our Full Mission Statement <ChevronRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <h2 className="heading-2 text-white mb-4">Be Part of Our Story</h2>
          <p className="text-brand-200 text-lg mb-8 max-w-2xl mx-auto">
            Whether you donate, volunteer, partner, or simply spread the word — your involvement creates
            the ripple that becomes a wave of change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild><Link href="/donate">Donate Today</Link></Button>
            <Button variant="outline-white" size="lg" asChild><Link href="/volunteer">Volunteer</Link></Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-brand-600" asChild>
              <Link href="/partners">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
