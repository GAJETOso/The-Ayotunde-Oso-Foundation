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
  StaggerContainer,
  StaggerItem,
  CountUp,
} from '@/components/ui/animations'
import { ArrowRight, BookOpen, Heart, Users, Leaf, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Programs | The Ayotunde Oso Foundation',
  description:
    'Five integrated programmes targeting the root causes of poverty and inequality: Education, Healthcare, Mentorship, Environment, and Emergency Relief.',
}

const PROGRAM_ICONS = {
  education: BookOpen,
  healthcare: Heart,
  mentorship: Users,
  environment: Leaf,
  emergency: AlertTriangle,
}

const PROGRAMS = [
  {
    slug: 'education',
    title: 'Education & Youth Development',
    color: 'brand',
    stat: 45200,
    statLabel: 'Students Supported',
    description:
      'Scholarships, digital learning centres, and STEM training that open doors for students who would otherwise be left behind.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    accentBg: 'from-brand-900/80 to-brand-700/60',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Outreaches',
    color: 'red',
    stat: 38000,
    statLabel: 'Patients Treated',
    description:
      'Free mobile clinics, maternal health services, and community health worker training delivering care to remote communities.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    accentBg: 'from-red-900/80 to-red-700/60',
  },
  {
    slug: 'mentorship',
    title: 'Youth Mentorship',
    color: 'gold',
    stat: 12800,
    statLabel: 'Mentorship Hours',
    description:
      'One-to-one and group mentorship pairing young people with industry professionals, entrepreneurs, and public servants.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    accentBg: 'from-amber-900/80 to-amber-700/60',
  },
  {
    slug: 'environment',
    title: 'Environmental Sustainability',
    color: 'emerald',
    stat: 250000,
    statLabel: 'Trees Planted',
    description:
      'Reforestation, waste management, and climate education that equip communities to protect and restore their natural environments.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    accentBg: 'from-emerald-900/80 to-emerald-700/60',
  },
  {
    slug: 'emergency',
    title: 'Emergency Humanitarian Relief',
    color: 'orange',
    stat: 31400,
    statLabel: 'People Assisted',
    description:
      'Rapid-response disaster relief — food, shelter, medical care, and psychosocial support for communities in crisis.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    accentBg: 'from-orange-900/80 to-orange-700/60',
  },
]

const STATS = [
  { value: 127400, suffix: '+', label: 'Total Lives Impacted' },
  { value: 5,      suffix: '',  label: 'Active Programmes' },
  { value: 8,      suffix: '',  label: 'Countries of Operation' },
  { value: 47,     suffix: '',  label: 'Partners Worldwide' },
]

export default function ProgramsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Our Programmes"
        subtitle="Five integrated areas of work, each addressing a different dimension of inequality and human potential."
        eyebrow="What We Do"
        breadcrumbs={[{ label: 'Programs', href: '/programs' }]}
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80"
        size="default"
      >
        <Button variant="gold" size="lg" asChild>
          <Link href="/donate">Support Our Work</Link>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/impact">See Our Impact</Link>
        </Button>
      </PageHero>

      {/* Overview intro */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-16 text-center">
            <Badge variant="brand" className="mb-4">Integrated Approach</Badge>
            <h2 className="heading-2">Addressing root causes, not symptoms</h2>
            <p className="text-body mx-auto mt-4 max-w-3xl text-neutral-600 dark:text-neutral-400">
              Our five programmes are not siloed. A child in our Education programme may also benefit from
              our Healthcare outreach. A mentor in our Youth programme may lead our Environmental campaigns.
              Integration is how we multiply impact.
            </p>
          </FadeUp>

          {/* Programme cards — alternating slide direction */}
          <div className="space-y-10">
            {PROGRAMS.map((program, i) => {
              const Icon = PROGRAM_ICONS[program.slug as keyof typeof PROGRAM_ICONS]
              const isEven = i % 2 === 0
              return (
                <SlideIn key={program.slug} from={isEven ? 'left' : 'right'} delay={0.05}>
                  <Card className="group overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                    <div className={`grid lg:grid-cols-2 ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden lg:h-auto">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${program.accentBg}`} />
                        {/* Number badge */}
                        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
                          <span className="font-display text-xl font-bold text-white">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        {/* Stat pill */}
                        <div className="absolute bottom-5 left-5 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm ring-1 ring-white/25">
                          <p className="font-display text-lg font-bold text-white">
                            {program.stat >= 1000
                              ? `${(program.stat / 1000).toFixed(0)}K+`
                              : `${program.stat}+`}
                          </p>
                          <p className="text-xs text-white/80">{program.statLabel}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 lg:p-10">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900/40">
                            <Icon className="h-5 w-5 text-brand-700 dark:text-brand-400" />
                          </div>
                          <Badge variant="brand" size="sm">Programme {i + 1} of 5</Badge>
                        </div>
                        <h2 className="heading-3 mb-3">{program.title}</h2>
                        <p className="mb-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {program.description}
                        </p>
                        <Button asChild className="w-fit">
                          <Link href={`/programs/${program.slug}`}>
                            Explore Programme
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </SlideIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section bg-brand-900 dark:bg-brand-950">
        <div className="container-xl">
          <StaggerContainer className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label} direction="up">
                <p className="font-display text-4xl font-bold text-white lg:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} separator />
                </p>
                <p className="mt-2 text-sm text-brand-300">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA cards */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-10 text-center">
            <h2 className="heading-2">Get Involved</h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
              There are many ways to support our work — choose the one that fits you.
            </p>
          </FadeUp>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Volunteer',
                description: 'Bring your skills and time to our programme delivery teams on the ground.',
                cta: 'Join as Volunteer',
                href: '/volunteer',
                variant: 'outline' as const,
                bg: '',
              },
              {
                title: 'Donate',
                description: 'Every dollar fuels programme delivery. See exactly how your gift is used.',
                cta: 'Give Now',
                href: '/donate',
                variant: 'gold' as const,
                bg: 'bg-brand-700 border-brand-700',
              },
              {
                title: 'Partner',
                description: 'Corporate, institutional, and community partners amplify everything we do.',
                cta: 'Explore Partnerships',
                href: '/partners',
                variant: 'outline' as const,
                bg: '',
              },
            ].map((card) => (
              <StaggerItem key={card.title} direction="scale">
                <Card
                  className={`flex h-full flex-col p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${card.bg}`}
                >
                  <h3
                    className={`font-display text-xl font-bold ${
                      card.bg ? 'text-white' : ''
                    } mb-3`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`mb-6 flex-1 text-sm ${
                      card.bg ? 'text-brand-200' : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {card.description}
                  </p>
                  <Button variant={card.variant} asChild className="w-full">
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
