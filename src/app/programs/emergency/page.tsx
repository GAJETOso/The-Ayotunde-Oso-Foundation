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
} from '@/components/ui/animations'
import { AlertTriangle, Home, Package, Shield, Clock, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Humanitarian Relief | The Ayotunde Oso Foundation',
  description:
    'AOF\'s emergency relief programme responds within 72 hours to disasters, conflicts, and crises — providing food, shelter, medical care, and psychosocial support to affected communities.',
}

export default function EmergencyPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Emergency Humanitarian Relief"
        subtitle="When disaster strikes, communities need help fast. Our emergency response team mobilises within 72 hours to deliver life-saving assistance."
        eyebrow="Programme"
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: 'Emergency Relief', href: '/programs/emergency' },
        ]}
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80"
        gradient="dark"
      >
        <Button variant="gold" size="lg" asChild>
          <Link href="/donate?program=emergency">Donate to Relief Fund</Link>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/volunteer">Emergency Volunteer</Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-xl">
          {/* Stats */}
          <StaggerContainer className="grid lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '31,400+', label: 'People Assisted' },
              { value: '72hrs',   label: 'Response Time' },
              { value: '14',      label: 'Emergency Operations' },
              { value: '100%',    label: 'Aid Reach Target' },
            ].map((s) => (
              <StaggerItem key={s.label} direction="up">
                <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <p className="font-display text-4xl font-bold text-orange-600">{s.value}</p>
                  <p className="font-semibold text-sm mt-2">{s.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Why it matters */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <SlideIn from="left">
              <Badge variant="warning" className="mb-4">Rapid Response</Badge>
              <h2 className="heading-2 mb-4">When every hour counts</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Floods. Conflicts. Disease outbreaks. Food crises. The communities we serve face a disproportionate
                share of humanitarian shocks — and they face them with fewer resources to recover.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                AOF&apos;s Emergency Relief Programme maintains pre-positioned supplies, trained response teams,
                and established community networks that enable 72-hour mobilisation from crisis declaration to
                aid distribution. Because speed is the difference between life and death.
              </p>
              <div className="space-y-3">
                {[
                  'Pre-positioned emergency supplies in 6 states',
                  '72-hour first-response SLA for all declarations',
                  'Dedicated emergency response reserve fund',
                  'Post-crisis rehabilitation and psychosocial support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                  alt="AOF emergency relief distribution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SlideIn>
          </div>

          {/* Response components */}
          <FadeUp className="mb-8">
            <h2 className="heading-2">Response Components</h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package,  title: 'Food & WASH',       desc: 'Emergency food parcels, clean water, and sanitation supplies for displaced families.' },
              { icon: Home,     title: 'Temporary Shelter', desc: 'Rapid shelter installation and household items for disaster-displaced individuals.' },
              { icon: Shield,   title: 'Protection',        desc: 'Psychosocial first aid, GBV prevention, and child protection in emergency settings.' },
              { icon: Clock,    title: 'Early Recovery',    desc: 'Livelihoods restoration, rebuilding support, and community resilience programming.' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <StaggerItem key={s.title} direction="scale">
                  <Card className="p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <Icon className="size-8 text-orange-500 mb-3" />
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-orange-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Support our Emergency Relief Fund</h2>
            <p className="text-orange-200 mb-8 max-w-xl mx-auto">
              Unrestricted donations to our Emergency Relief Fund allow us to respond the moment a crisis
              emerges — without waiting for programme-specific approvals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" asChild>
                <Link href="/donate?program=emergency">Give to Relief Fund</Link>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/campaigns">See Active Campaigns</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
