import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { PROGRAMS, IMPACT_STATS } from '@/lib/constants'
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

      {/* Overview */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-16">
            <Badge variant="brand" className="mb-4">Integrated Approach</Badge>
            <h2 className="heading-2">Addressing root causes, not symptoms</h2>
            <p className="text-body max-w-3xl mx-auto mt-4 text-neutral-600 dark:text-neutral-400">
              Our five programmes are not siloed. A child in our Education programme may also benefit from
              our Healthcare outreach. A mentor in our Youth programme may lead our Environmental campaigns.
              Integration is how we multiply impact.
            </p>
          </div>

          {/* Program Cards */}
          <div className="space-y-8">
            {[
              { slug: 'education', title: 'Education & Youth Development', color: 'brand', stat: '45,200+', statLabel: 'Students Supported' },
              { slug: 'healthcare', title: 'Healthcare Outreaches', color: 'red', stat: '38,000+', statLabel: 'Patients Treated' },
              { slug: 'mentorship', title: 'Youth Mentorship', color: 'gold', stat: '12,800', statLabel: 'Mentorship Hours' },
              { slug: 'environment', title: 'Environmental Sustainability', color: 'emerald', stat: '250,000+', statLabel: 'Trees Planted' },
              { slug: 'emergency', title: 'Emergency Humanitarian Relief', color: 'orange', stat: '31,400+', statLabel: 'People Assisted' },
            ].map((program, i) => {
              const Icon = PROGRAM_ICONS[program.slug as keyof typeof PROGRAM_ICONS]
              const isEven = i % 2 === 0
              return (
                <Card key={program.slug} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:[&>*:first-child]:order-last'}`}>
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 111111111}?w=800&q=80`}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="gold">{String(i + 1).padStart(2, '0')}</Badge>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
                          <Icon className="size-5 text-brand-700 dark:text-brand-400" />
                        </div>
                        <Badge variant="default">{program.stat} {program.statLabel}</Badge>
                      </div>
                      <h2 className="heading-3 mb-3">{program.title}</h2>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        Our {program.title.toLowerCase()} programme reaches underserved communities
                        with targeted, evidence-based interventions that create measurable, lasting change.
                      </p>
                      <Button asChild className="w-fit">
                        <Link href={`/programs/${program.slug}`}>
                          Explore Programme <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section bg-brand-900 dark:bg-brand-950">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '127,400+', label: 'Total Lives Impacted' },
              { value: '5', label: 'Active Programmes' },
              { value: '8', label: 'Countries of Operation' },
              { value: '47', label: 'Partners Worldwide' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white font-display">{s.value}</p>
                <p className="text-brand-300 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <h3 className="font-display font-bold text-xl mb-3">Volunteer</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">Bring your skills and time to our programme delivery teams on the ground.</p>
              <Button variant="outline" asChild className="w-full"><Link href="/volunteer">Join as Volunteer</Link></Button>
            </Card>
            <Card className="p-8 text-center bg-brand-700 border-brand-700">
              <h3 className="font-display font-bold text-xl mb-3 text-white">Donate</h3>
              <p className="text-brand-200 text-sm mb-6">Every dollar fuels programme delivery. See exactly how your gift is used.</p>
              <Button variant="gold" asChild className="w-full"><Link href="/donate">Give Now</Link></Button>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-display font-bold text-xl mb-3">Partner</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">Corporate, institutional, and community partners amplify everything we do.</p>
              <Button variant="outline" asChild className="w-full"><Link href="/partners">Explore Partnerships</Link></Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
