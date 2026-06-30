import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Heart, Activity, Baby, Brain, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Outreaches | The Ayotunde Oso Foundation',
  description:
    'AOF brings free preventive and primary healthcare to 38,000+ individuals in underserved communities through mobile clinics, nutrition programmes, and mental health support.',
}

const SERVICES = [
  { icon: Activity, title: 'Mobile Health Clinics', desc: 'Fully-equipped mobile units staffed by doctors and nurses, reaching remote communities quarterly with free consultations, diagnostics, and medications.' },
  { icon: Baby, title: 'Maternal & Child Health', desc: 'Antenatal and postnatal care, skilled birth attendance training, immunisation drives, and nutrition support for mothers and children under five.' },
  { icon: Brain, title: 'Mental Health Support', desc: 'Community-based mental health first aid training, psychosocial support groups, and referral pathways for individuals in crisis.' },
  { icon: Heart, title: 'Health Education', desc: 'Community health worker training, sanitation campaigns, and disease prevention education including HIV/AIDS, malaria, and non-communicable diseases.' },
]

export default function HealthcarePage() {
  return (
    <main id="main-content">
      <PageHero
        title="Healthcare Outreaches"
        subtitle="Healthcare is a right, not a privilege. Our mobile clinics and community health programmes bring quality care where it is needed most."
        eyebrow="Programme"
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: 'Healthcare', href: '/programs/healthcare' },
        ]}
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      >
        <Button variant="gold" size="lg" asChild><Link href="/donate?program=healthcare">Support Healthcare</Link></Button>
        <Button variant="outline-white" size="lg" asChild><Link href="/volunteer">Volunteer as Medic</Link></Button>
      </PageHero>

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              { value: '38,000+', label: 'Patients Treated' },
              { value: '42', label: 'Communities Reached' },
              { value: '6', label: 'Mobile Clinic Units' },
            ].map(s => (
              <Card key={s.label} className="p-6 text-center">
                <p className="text-5xl font-bold font-display text-red-600">{s.value}</p>
                <p className="font-semibold mt-2">{s.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="AOF mobile health clinic" fill className="object-cover" />
            </div>
            <div>
              <Badge variant="destructive" className="mb-4">Why It Matters</Badge>
              <h2 className="heading-2 mb-4">When distance is the diagnosis</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Millions in rural and peri-urban Nigeria live more than 10km from the nearest health facility.
                For them, the leading cause of preventable death is not disease — it is distance. Our mobile
                clinics eliminate that barrier, bringing free care directly to communities.
              </p>
              <div className="space-y-3">
                {['Free consultations, medications, and diagnostics', '6 mobile units operating quarterly across 3 states', 'Trained 280 Community Health Workers', '94% patient satisfaction score'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(s => {
              const Icon = s.icon
              return (
                <Card key={s.title} className="p-6 flex gap-4">
                  <div className="size-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="size-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-red-700">
        <div className="container-xl text-center">
          <h2 className="heading-2 text-white mb-4">Every life is worth fighting for</h2>
          <p className="text-red-200 mb-8 max-w-xl mx-auto">$20 provides one patient with a free consultation and medications. $100 sponsors a community health worker for a month.</p>
          <Button variant="white" size="lg" asChild><Link href="/donate?program=healthcare">Donate to Healthcare</Link></Button>
        </div>
      </section>
    </main>
  )
}
