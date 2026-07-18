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
import { Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meet Our Founder | The Ayotunde Oso Foundation',
  description:
    'The story of Ayotunde Oso — visionary, servant leader, and founder of the Ayotunde Oso Foundation. A journey from personal experience to transformational impact.',
}

const QUOTES = [
  {
    text: 'Every child who lacks access to education is not a statistic — they are a universe of potential waiting to be unlocked. That is why I cannot stop.',
    context: 'On Education',
  },
  {
    text: 'True development is not what you build for communities. It is what you build with them, through them, and for generations they will never meet.',
    context: 'On Community Development',
  },
  {
    text: 'I have met people with extraordinary gifts trapped by ordinary circumstances. The Foundation exists to remove those circumstances.',
    context: 'On the Foundation\'s Purpose',
  },
]

const ACHIEVEMENTS = [
  { year: 'May 2025', milestone: 'Founded The Ayotunde Oso Foundation' },
  { year: 'Jul 2025', milestone: 'First medical outreach — 200+ screened in Mushin, Lagos' },
  { year: 'Sep 2025', milestone: 'Inaugural scholarship cohort — 12 students supported' },
  { year: 'Nov 2025', milestone: 'Launched youth mentorship programme with 60 mentees' },
  { year: 'Feb 2026', milestone: 'Environmental drive — 1,000+ trees planted' },
  { year: '2026', milestone: '3,200+ lives impacted across 7 communities' },
]

export default function FounderPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Ayotunde Oso"
        subtitle="Founder & Executive Director, The Ayotunde Oso Foundation"
        eyebrow="Meet the Founder"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Our Founder', href: '/about/founder' },
        ]}
        image="Public/Founder.png"
        size="default"
        gradient="dark"
      />

      {/* Bio */}
      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
            {/* Photo + quick facts */}
            <SlideIn from="left">
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Ayotunde Oso, Founder of The Ayotunde Oso Foundation"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
                <Card className="p-6">
                  <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-4">
                    Quick Facts
                  </h3>
                  <dl className="space-y-3">
                    {[
                      ['Title',          'Founder & Executive Director'],
                      ['Based In',       'Lagos, Nigeria'],
                      ['Education',      'M.Sc. Finance'],
                      ['Languages',      'English, Yoruba'],
                      ['Specialisation', 'Community Development, Social Enterprise'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col">
                        <dt className="text-xs text-neutral-500 font-medium">{label}</dt>
                        <dd className="text-sm text-neutral-900 dark:text-neutral-100 font-medium mt-0.5">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Card>
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/contact">Send a Message</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/press">Press Kit</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>

            {/* Biography */}
            <SlideIn from="right" delay={0.1}>
              <article className="prose-content">
                <Badge variant="brand" className="mb-6">Biography</Badge>

                <h2 className="heading-3 mb-6">A life shaped by purpose</h2>

                <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p className="text-lg">
                    Ayotunde Oso grew up in Ile-Ife, known as the Origin of the Yorubas.
                  </p>

                  <p>
                    That experience did not break him. It became his compass. During his undergraduate years
                    at the University of Lagos studying Public Administration, Ayotunde began organising
                    informal tutoring sessions for neighbourhood children. What started as Saturday afternoons
                    with eight students quickly grew to a registered community group serving hundreds.
                  </p>

                  <p>
                    &ldquo;I realised,&rdquo; he recalls, &ldquo;that the problem was never a lack of brilliance.
                    The children I worked with were extraordinary. The problem was that the systems around
                    them were designed to keep them exactly where they were.&rdquo;
                  </p>

                  {/* Pull quote */}
                  <FadeUp>
                    <div className="border-l-4 border-gold-500 pl-6 my-8 bg-gold-50 dark:bg-gold-900/10 py-6 pr-6 rounded-r-2xl">
                      <Quote className="size-8 text-gold-400 mb-3" />
                      <p className="text-xl font-display font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed italic">
                        The moment I understood that systems — not people — were the obstacle, I knew
                        what my life&apos;s work had to be: change the systems.
                      </p>
                      <p className="text-sm text-neutral-500 mt-4">Ayotunde Oso</p>
                    </div>
                  </FadeUp>

                  <p>
                    After completing a Master&apos;s degree in International Development in London, Ayotunde
                    returned to Nigeria with a clear mandate. In May 2025, he formally established The Ayotunde
                    Oso Foundation, combining academic rigour with deep grassroots passion and an
                    unshakeable belief in human potential.
                  </p>

                  <p>
                    In just over a year, the Foundation has launched five integrated programmes, impacted
                    over 3,200 lives across seven communities in Nigeria, and built partnerships with
                    local organisations and individuals committed to lasting change. Ayotunde remains most
                    at home in the field — visiting schools, sitting with community elders, and listening
                    to the people the Foundation exists to serve.
                  </p>

                  <p>
                    &ldquo;Impact is not a number on a dashboard,&rdquo; he says. &ldquo;It is the child who reads
                    her first book. The mother who receives medical care for the first time. The young man
                    who finds a mentor and discovers what he is capable of. These are the moments that
                    keep me going.&rdquo;
                  </p>
                </div>

                {/* Quotes */}
                <FadeUp className="mt-12">
                  <h3 className="heading-3 mb-6">In His Own Words</h3>
                  <StaggerContainer className="space-y-4">
                    {QUOTES.map((quote, i) => (
                      <StaggerItem key={i} direction="up">
                        <Card className="p-6">
                          <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-3">
                            {quote.context}
                          </p>
                          <blockquote className="text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed italic text-lg">
                            &ldquo;{quote.text}&rdquo;
                          </blockquote>
                        </Card>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeUp>

                {/* Milestones */}
                <FadeUp className="mt-12">
                  <h3 className="heading-3 mb-6">Milestones &amp; Recognition</h3>
                  <div className="space-y-3">
                    {ACHIEVEMENTS.map((a) => (
                      <div key={a.year} className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 dark:bg-brand-900/30 px-2.5 py-1.5 rounded-lg flex-shrink-0">
                          {a.year}
                        </span>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 pt-1.5">
                          {a.milestone}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </article>
            </SlideIn>
          </div>
        </div>
      </section>
    </main>
  )
}
