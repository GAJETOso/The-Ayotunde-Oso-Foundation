import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CORE_VALUES } from '@/lib/constants'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animations'
import { Target, Eye, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mission, Vision & Values | The Ayotunde Oso Foundation',
  description:
    'Explore the mission, vision, core values, strategic goals, and theory of change that guide every action of The Ayotunde Oso Foundation.',
}

const STRATEGIC_GOALS = [
  {
    number: '01',
    title: 'Expand Access to Quality Education',
    description:
      'Ensure 50,000 children per year receive quality foundational education, vocational training, or scholarship support by 2028.',
    metric: '50,000 learners/year',
  },
  {
    number: '02',
    title: 'Strengthen Community Healthcare',
    description:
      'Deliver free preventive and primary healthcare to 100,000 individuals annually through mobile clinics and community health workers.',
    metric: '100,000 patients/year',
  },
  {
    number: '03',
    title: 'Scale Mentorship Networks',
    description:
      'Connect 10,000 young people per year with trained mentors across 15 African countries through in-person and digital platforms.',
    metric: '10,000 mentees/year',
  },
  {
    number: '04',
    title: 'Lead Environmental Action',
    description:
      'Plant 1 million trees, restore 5 degraded ecosystems, and provide clean water access to 50 communities by 2027.',
    metric: '1M trees by 2027',
  },
  {
    number: '05',
    title: 'Build Emergency Resilience',
    description:
      'Maintain 72-hour emergency response capacity to reach disaster-affected communities within AOF\'s operational geography.',
    metric: '72-hr response time',
  },
]

export default function MissionPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Mission, Vision & Values"
        subtitle="The principles and purpose that make every programme, partnership, and action intentional."
        eyebrow="What Drives Us"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Mission', href: '/about/mission' },
        ]}
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <SlideIn from="left">
              <Card className="p-8 border-l-4 border-brand-600 h-full transition-all duration-300 hover:shadow-card">
                <Target className="size-10 text-brand-600 mb-4" />
                <Badge variant="brand" className="mb-4">Mission</Badge>
                <h2 className="font-display font-bold text-2xl mb-4">What We Do Every Day</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                  To empower individuals and communities through education, healthcare, environmental
                  sustainability, mentorship, and emergency humanitarian response — creating pathways
                  to dignity, opportunity, and lasting change.
                </p>
              </Card>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <Card className="p-8 border-l-4 border-gold-500 h-full transition-all duration-300 hover:shadow-card">
                <Eye className="size-10 text-gold-600 mb-4" />
                <Badge variant="gold" className="mb-4">Vision</Badge>
                <h2 className="font-display font-bold text-2xl mb-4">The World We Are Building</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                  A world where every individual — regardless of background, geography, or circumstance
                  — has access to the opportunities, quality healthcare, education, and support needed
                  to live with dignity and purpose.
                </p>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-cream-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Our Compass</Badge>
            <h2 className="heading-2">Core Values</h2>
            <p className="text-body max-w-2xl mx-auto mt-4 text-neutral-600 dark:text-neutral-400">
              Ten values that are not aspirational posters on a wall — they are tested, lived, and
              held accountable at every level of the Foundation.
            </p>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((value, i) => (
              <StaggerItem key={value.title} direction="scale">
                <Card className="p-6 h-full group hover:border-brand-300 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="mt-4 text-xs font-mono text-brand-400">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <Badge variant="brand" className="mb-4">How Change Happens</Badge>
            <h2 className="heading-2">Our Theory of Change</h2>
          </FadeUp>
          <SlideIn from="bottom" delay={0.1}>
            <div className="flex flex-col lg:flex-row items-stretch gap-0">
              {[
                { label: 'Inputs',     items: ['Funding & resources', 'Volunteers & staff', 'Partnerships', 'Community knowledge'],     color: 'bg-brand-700' },
                { label: 'Activities', items: ['Education programmes', 'Health outreaches', 'Mentorship matching', 'Relief operations'], color: 'bg-brand-600' },
                { label: 'Outputs',    items: ['Students enrolled', 'Patients treated', 'Mentors matched', 'Families assisted'],        color: 'bg-brand-500' },
                { label: 'Outcomes',   items: ['Improved literacy', 'Better health', 'Career advancement', 'Resilient communities'],    color: 'bg-gold-600'  },
                { label: 'Impact',     items: ['Reduced poverty', 'Systemic change', 'Policy influence', 'Generational uplift'],       color: 'bg-gold-500'  },
              ].map((stage, i, arr) => (
                <div key={stage.label} className="flex-1 flex items-stretch">
                  <div
                    className={`${stage.color} text-white p-6 flex-1 ${i === 0 ? 'rounded-l-2xl' : ''} ${i === arr.length - 1 ? 'rounded-r-2xl' : ''}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-3">
                      {stage.label}
                    </p>
                    <ul className="space-y-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <span className="size-1.5 bg-white/60 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center text-white bg-forest-900 dark:bg-neutral-950 px-1">
                      <ArrowRight className="size-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <Badge variant="brand" className="mb-4">2025–2028</Badge>
            <h2 className="heading-2">Strategic Goals</h2>
            <p className="text-body max-w-2xl mx-auto mt-4 text-neutral-600 dark:text-neutral-400">
              Five bold commitments that define our next chapter of impact.
            </p>
          </FadeUp>
          <div className="space-y-6">
            {STRATEGIC_GOALS.map((goal, i) => (
              <SlideIn key={goal.number} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
                <Card className="p-6 flex items-start gap-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <span className="font-mono text-4xl font-bold text-brand-200 dark:text-brand-800 flex-shrink-0">
                    {goal.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-2">{goal.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs text-neutral-500 mb-1">Target</p>
                    <p className="font-bold text-brand-700 dark:text-brand-400 text-sm">{goal.metric}</p>
                  </div>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
