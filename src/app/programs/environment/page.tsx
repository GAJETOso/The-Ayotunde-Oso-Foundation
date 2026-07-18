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
import { Leaf, Droplets, Wind, Recycle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Environmental Sustainability | The Ayotunde Oso Foundation',
  description:
    'AOF\'s environmental programme has planted 1,850 trees across Lagos & Ogun States, engaged 600 community members in sustainability initiatives, and launched a school reforestation partnership.',
}

export default function EnvironmentPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Environmental Sustainability"
        subtitle="The earth is not ours to destroy. Our environmental programme builds climate resilience, restores ecosystems, and empowers communities to protect their natural heritage."
        eyebrow="Programme"
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: 'Environment', href: '/programs/environment' },
        ]}
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
        gradient="brand"
      >
        <Button variant="gold" size="lg" asChild>
          <Link href="/donate?program=environment">Plant a Tree Today</Link>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/volunteer">Join Green Corps</Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-xl">
          {/* Stats */}
          <StaggerContainer className="grid lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '1,850',    label: 'Trees Planted',             color: 'text-emerald-600' },
              { value: '4',        label: 'Communities Engaged',        color: 'text-blue-600'    },
              { value: '600',      label: 'Community Members Reached',  color: 'text-emerald-600' },
              { value: '2',        label: 'States Active',              color: 'text-emerald-600' },
            ].map((s) => (
              <StaggerItem key={s.label} direction="up">
                <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <p className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="font-semibold text-sm mt-2">{s.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Why it matters */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <SlideIn from="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                  alt="AOF tree planting initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <Badge variant="success" className="mb-4">Climate Action</Badge>
              <h2 className="heading-2 mb-4">Protecting tomorrow&apos;s communities today</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Climate change disproportionately impacts the communities we serve. Flooding displaces families.
                Drought destroys livelihoods. Deforestation erodes the natural systems entire communities depend on.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Our Environmental Sustainability programme intervenes with community-led reforestation, clean
                water provision, waste management systems, and youth climate education — building resilience
                from the ground up.
              </p>
              <div className="space-y-3">
                {[
                  '1,850 trees planted across Lagos & Ogun States',
                  'Green Corps launched in 12 partner schools',
                  '600 community members engaged in sustainability initiatives',
                  '1 community recycling programme launched in Lagos',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>

          {/* Initiatives */}
          <FadeUp className="mb-8">
            <h2 className="heading-2">Our Initiatives</h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf,    title: 'Reforestation',   desc: 'Mass tree-planting drives with community stewardship programmes ensuring long-term survival rates above 80%.' },
              { icon: Droplets, title: 'Clean Water Access', desc: 'Solar-powered boreholes and water purification systems in rural communities without piped water.' },
              { icon: Wind,    title: 'Climate Education', desc: 'Youth Green Corps trains young advocates to lead climate action in their own communities.' },
              { icon: Recycle, title: 'Waste Management', desc: 'Community recycling programmes, plastic collection drives, and partnerships with circular economy enterprises.' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <StaggerItem key={s.title} direction="scale">
                  <Card className="p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <Icon className="size-8 text-emerald-600 mb-3" />
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-emerald-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Plant a tree. Restore a future.</h2>
            <p className="text-emerald-200 mb-8 max-w-xl mx-auto">
              ₦5,000 plants and nurtures a tree for one year. ₦50,000 sponsors a school Green Corps session.
              ₦200,000 funds a community reforestation drive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" asChild>
                <Link href="/donate?program=environment">Plant Trees Now</Link>
              </Button>
              <Button variant="outline-white" size="lg" asChild>
                <Link href="/volunteer">Join Green Corps</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
