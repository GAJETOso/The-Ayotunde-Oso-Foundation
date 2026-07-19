import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  FadeUp,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/ui/animations'
import { CORE_VALUES, IMPACT_STATS } from '@/lib/constants'
import { ChevronRight, Users, Globe, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | The Ayotunde Oso Foundation',
  description:
    'Learn about The Ayotunde Oso Foundation — our story, mission, vision, values, and the people driving meaningful change across Nigeria and Africa.',
  openGraph: {
    title: 'About Us | The Ayotunde Oso Foundation',
    description: 'Our story, mission, and the people behind meaningful change.',
  },
}

const TIMELINE = [
  {
    year: 'May 2025',
    title: 'Foundation Established',
    description:
      'The Ayotunde Oso Foundation is formally registered with the CAC in Lagos, launching with a five-programme mandate: Education, Healthcare, Mentorship, Environment, and Emergency Relief.',
  },
  {
    year: 'Jul 2025',
    title: 'First Community Outreach',
    description:
      'AOF conducts its inaugural free medical outreach in Ile-Ife, screening over 100 community members and distributing essential health supplies.',
  },
  {
    year: 'Sep 2025',
    title: 'Education Programme Launches',
    description:
      'The AOF Education initiative awards its first set of scholarships to 6 students from underserved communities in Lagos and Ogun states.',
  },
  {
    year: 'Nov 2025',
    title: 'Youth Mentorship Cohort',
    description:
      'Thirty young people enrol in the first AOF mentorship cohort, matched with professionals across tech, healthcare, education, and entrepreneurship.',
  },
  {
    year: 'Feb 2026',
    title: 'Environmental Drive',
    description:
      'AOF volunteers plant 500+ trees across two communities and run a waste management awareness campaign reaching 400+ residents.',
  },
  {
    year: '2026',
    title: 'Growing Our Reach',
    description:
      'With 1,600+ lives impacted and 47 active volunteers, AOF is building toward expanding into two additional Nigerian states and deepening community partnerships.',
  },
]

const REACH_STATS = [
  { icon: Users,  to: IMPACT_STATS.livesImpacted,      suffix: '+', label: 'Lives Impacted',    color: 'text-brand-400'   },
  { icon: Globe,  to: IMPACT_STATS.communitiesReached,  suffix: '',  label: 'Communities Served', color: 'text-gold-400'   },
  { icon: Award,  to: IMPACT_STATS.projectsCompleted,   suffix: '',  label: 'Projects Completed', color: 'text-emerald-400' },
  { icon: Heart,  to: IMPACT_STATS.volunteersEngaged,   suffix: '+', label: 'Volunteers',          color: 'text-red-400'   },
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
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text — slide from left */}
            <SlideIn from="left">
              <Badge variant="brand" className="mb-4">Our Purpose</Badge>
              <h2 className="heading-2 mb-6">Guided by a clear mission and bold vision</h2>
              <div className="space-y-6">
                <div className="rounded-r-xl border-l-4 border-brand-600 bg-brand-50/50 py-4 pl-6 pr-4 dark:bg-brand-900/20">
                  <h3 className="mb-2 text-lg font-semibold text-brand-700">Mission</h3>
                  <p className="text-body leading-relaxed text-neutral-600 dark:text-neutral-400">
                    To empower individuals and communities through education, healthcare, environmental
                    sustainability, mentorship, and emergency humanitarian response — creating pathways
                    to dignity, opportunity, and lasting change.
                  </p>
                </div>
                <div className="rounded-r-xl border-l-4 border-gold-500 bg-gold-50/50 py-4 pl-6 pr-4 dark:bg-gold-900/10">
                  <h3 className="mb-2 text-lg font-semibold text-gold-700">Vision</h3>
                  <p className="text-body leading-relaxed text-neutral-600 dark:text-neutral-400">
                    A world where every individual — regardless of background, geography, or circumstance
                    — has access to the opportunities, healthcare, education, and support needed to
                    live with dignity and purpose.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/about/mission">Our Values &amp; Strategy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about/leadership">Meet Our Team</Link>
                </Button>
              </div>
            </SlideIn>

            {/* Image — slide from right */}
            <SlideIn from="right" delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                    alt="AOF team members working with community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Year badge */}
                <ScaleIn delay={0.4}>
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-700 p-6 text-white shadow-xl">
                    <p className="font-display text-4xl font-bold">2025</p>
                    <p className="mt-1 text-sm text-brand-200">Year founded</p>
                  </div>
                </ScaleIn>
                {/* Impact badge */}
                <ScaleIn delay={0.5}>
                  <div className="absolute -right-4 -top-4 rounded-2xl bg-gold p-4 text-forest-dark shadow-xl">
                    <p className="font-display text-2xl font-bold">3.2K+</p>
                    <p className="mt-0.5 text-xs font-medium">Lives impacted</p>
                  </div>
                </ScaleIn>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-brand-900 dark:bg-brand-950">
        <div className="container-xl">
          <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {REACH_STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <StaggerItem key={stat.label} direction="up">
                  <div className="text-center">
                    <Icon className={`mx-auto mb-3 h-8 w-8 ${stat.color}`} />
                    <p className="font-display text-4xl font-bold text-white">
                      <CountUp to={stat.to} suffix={stat.suffix} separator />
                    </p>
                    <p className="mt-1 text-sm text-brand-300">{stat.label}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-16 text-center">
            <Badge variant="brand" className="mb-4">Our Journey</Badge>
            <h2 className="heading-2">One year of growing impact</h2>
          </FadeUp>

          <div className="relative">
            {/* Centre line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-100 dark:from-brand-800 dark:via-brand-700 dark:to-brand-900 lg:left-1/2"
              aria-hidden
            />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <SlideIn key={item.year} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
                  <div
                    className={`relative flex gap-6 lg:gap-16 ${
                      i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="hidden lg:block lg:flex-1" />

                    {/* Year bubble */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-brand-700 font-bold text-sm text-white shadow-lg dark:border-neutral-950">
                        {item.year.slice(2)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <Card className="p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                        <Badge variant="brand" size="sm" className="mb-2">{item.year}</Badge>
                        <h3 className="font-display mb-2 text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-cream-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-12 text-center">
            <Badge variant="gold" className="mb-4">What We Stand For</Badge>
            <h2 className="heading-2">Our Core Values</h2>
            <p className="text-body mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Ten principles that guide every decision, programme, and partnership at the Ayotunde Oso Foundation.
            </p>
          </FadeUp>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {CORE_VALUES.map((value) => (
              <StaggerItem key={value.title} direction="scale">
                <Card
                  hover
                  className="flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-1 hover:ring-brand-200"
                >
                  <div className="mb-3 text-3xl">{value.icon}</div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">{value.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2} className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/about/mission">
                Read Our Full Mission Statement
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 mb-4 text-white">Be Part of Our Story</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-200">
              Whether you donate, volunteer, partner, or simply spread the word — your involvement creates
              the ripple that becomes a wave of change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/donate">Donate Today</Link>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/volunteer">Volunteer</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-brand-600" asChild>
                <Link href="/partners">Partner With Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
