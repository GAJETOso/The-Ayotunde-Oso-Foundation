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
    'AOF\'s environmental programme has planted 250,000+ trees, provided clean water to 30 communities, and trained 5,000+ climate champions across West Africa.',
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
              { value: '250,000+', label: 'Trees Planted',                color: 'text-emerald-600' },
              { value: '30',       label: 'Communities with Clean Water', color: 'text-blue-600'    },
              { value: '5,000+',   label: 'Climate Champions Trained',    color: 'text-emerald-600' },
              { value: '12',       label: 'Ecosystems Restored',          color: 'text-emerald-600' },
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
                  '250,000+ trees planted across 4 Nigerian states',
                  'Solar-powered clean water points in 30 communities',
                  'Youth Green Corps: 5,000 trained climate advocates',
                  'Plastic waste collection partnerships in 8 cities',
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
              $10 plants and nurtures a tree for three years. $100 provides a family with clean water
              access. $500 trains a community climate champion.
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
