import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'Testimonials | The Ayotunde Oso Foundation',
  description:
    'Hear directly from the individuals, families, and communities whose lives have been transformed by the work of The Ayotunde Oso Foundation.',
  openGraph: { title: 'Testimonials | The Ayotunde Oso Foundation' },
}

const FEATURED_TESTIMONIALS = [
  {
    name: 'Blessing Okafor',
    role: 'Scholar & University Student',
    program: 'Education',
    location: 'Enugu State',
    quote:
      'I grew up in a home where my parents could barely afford two meals a day. The idea of university felt like a dream for other people. When AOF gave me a scholarship, they did not just pay my fees — they sent me to school with a mentor, a laptop, and the belief that I belonged there. Today I am studying Computer Science at University of Nigeria Nsukka, and I am on the Dean\'s list. AOF did not just change my trajectory — they changed how I see myself.',
    impact: 'First in family to attend university',
    year: '2025',
  },
  {
    name: 'Fatima Aliyu',
    role: 'Mother & Small Business Owner',
    program: 'Healthcare',
    location: 'Kebbi State',
    quote:
      'My daughter had malaria and we had no money for the clinic. The AOF mobile health team came to our village and treated her for free — the same day. She was back in school within a week. In my village, children have died from things that were treatable. AOF treats our lives as if they matter as much as anyone else\'s. They do not make us feel like charity. They make us feel like people.',
    impact: 'Daughter\'s malaria treated, now in school',
    year: '2025',
  },
  {
    name: 'Emmanuel Chukwu',
    role: 'Tech Entrepreneur',
    program: 'Mentorship',
    location: 'Lagos State',
    quote:
      'I had the idea but I had no direction, no network, no capital. My AOF mentor was a tech founder who had built two companies. He met with me every two weeks for a year. He reviewed my business plan, connected me to my first investor, and told me hard truths that my friends would not. My startup now has 11 employees and serves 4,000 customers. I owe that to the mentorship programme.',
    impact: 'Startup launched with 11 employees',
    year: '2025',
  },
]

const ALL_TESTIMONIALS = [
  {
    name: 'Adaeze Nwosu',
    role: 'Primary School Teacher',
    program: 'Education',
    location: 'Imo State',
    quote:
      'The AOF digital learning center in our community changed how I teach. For the first time my students can see the world beyond our village. Their curiosity has exploded. I have never seen them more engaged.',
    year: '2025',
  },
  {
    name: 'Ibrahim Musa',
    role: 'Community Leader',
    program: 'Environment',
    location: 'Kano State',
    quote:
      'When AOF came to plant trees with our youth, some elders were skeptical. Now we have hundreds of trees growing and the young people who planted them feel ownership of our environment. That pride is the most valuable thing.',
    year: '2025',
  },
  {
    name: 'Ngozi Eze',
    role: 'Flood Survivor',
    program: 'Emergency Relief',
    location: 'Anambra State',
    quote:
      'We lost everything to the floods — our home, our belongings, our sense of security. AOF arrived within two days with food, blankets, and medical help. But more than that, they stayed. They helped us rebuild. That is not something I will ever forget.',
    year: '2025',
  },
  {
    name: 'Chisom Ikenna',
    role: 'Nursing Student',
    program: 'Education',
    location: 'Anambra State',
    quote:
      'My father is a farmer. Medical school was impossible on farming income. The AOF health scholarship made it possible. I want to give back by becoming a doctor in my own community one day — inspired by what I have received.',
    year: '2025',
  },
  {
    name: 'Yusuf Abdullahi',
    role: 'Youth Corps Member',
    program: 'Mentorship',
    location: 'Kaduna State',
    quote:
      'I was directionless after my NYSC. The mentorship program connected me with a civil servant who helped me understand public service and guided me into a career in local government. I now work in community development, directly helping people.',
    year: '2026',
  },
  {
    name: 'Amaka Obi',
    role: 'Market Trader & Mother of 4',
    program: 'Healthcare',
    location: 'Enugu State',
    quote:
      'I had not seen a doctor in seven years. When the AOF health outreach came I did not believe the service was free. They screened me for hypertension, diabetes, and breast cancer. They found my hypertension early. That early detection may have saved my life.',
    year: '2025',
  },
]

const PROGRAM_ACCENT: Record<string, string> = {
  Education:        'border-brand-300 bg-brand-50/60 dark:bg-brand-900/20',
  Healthcare:       'border-red-300 bg-red-50/60 dark:bg-red-900/20',
  Mentorship:       'border-purple-300 bg-purple-50/60 dark:bg-purple-900/20',
  Environment:      'border-emerald-300 bg-emerald-50/60 dark:bg-emerald-900/20',
  'Emergency Relief': 'border-amber-300 bg-amber-50/60 dark:bg-amber-900/20',
}

const PROGRAM_QUOTE_COLOR: Record<string, string> = {
  Education:        'text-brand-200 dark:text-brand-800',
  Healthcare:       'text-red-200 dark:text-red-800',
  Mentorship:       'text-purple-200 dark:text-purple-800',
  Environment:      'text-emerald-200 dark:text-emerald-800',
  'Emergency Relief': 'text-amber-200 dark:text-amber-800',
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export default function TestimonialsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Stories of Impact"
        title="Voices from Our Communities"
        subtitle="Numbers tell part of the story. The rest is told by the people whose lives have changed. These are their words — unscripted, unfiltered, and deeply human."
        breadcrumbs={[{ label: 'Testimonials', href: '/testimonials' }]}
        image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=80"
        size="default"
      />

      {/* Featured Testimonials */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-14 text-center">
            <Badge variant="brand" className="mb-4">Featured Stories</Badge>
            <h2 className="heading-2">Transformative Voices</h2>
            <p className="text-body mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
              These are among the most powerful testimonials we have received from individuals
              whose lives have been most profoundly changed.
            </p>
          </FadeUp>

          <div className="space-y-14">
            {FEATURED_TESTIMONIALS.map((t, i) => (
              <SlideIn key={t.name} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
                <div
                  className={`grid md:grid-cols-[auto_1fr] gap-8 items-start ${
                    i % 2 === 1 ? 'md:grid-cols-[1fr_auto] md:[&>*:first-child]:order-last' : ''
                  }`}
                >
                  {/* Avatar column */}
                  <div className="flex flex-col items-center text-center w-32 mx-auto md:mx-0">
                    <div className="w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-xl mb-3 ring-4 ring-white dark:ring-neutral-900 shadow-md">
                      {initials(t.name)}
                    </div>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">{t.role}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{t.location}</p>
                    <Badge variant="brand" size="sm" className="mt-3">{t.program}</Badge>
                  </div>

                  {/* Quote column */}
                  <div
                    className={`rounded-2xl border p-8 relative ${
                      PROGRAM_ACCENT[t.program] ??
                      'border-neutral-200 bg-neutral-50/60 dark:bg-neutral-900/20'
                    }`}
                  >
                    <div
                      className={`font-serif text-7xl leading-none select-none mb-4 ${
                        PROGRAM_QUOTE_COLOR[t.program] ?? 'text-neutral-200 dark:text-neutral-800'
                      }`}
                    >
                      &ldquo;
                    </div>
                    <blockquote className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                      {t.quote}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
                      <span className="text-sm font-semibold text-brand-700 dark:text-brand-400">
                        {t.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section bg-cream-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-10">
            <Badge variant="gold" className="mb-4">More Stories</Badge>
            <h2 className="heading-2">Community Voices</h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name} direction="up">
                <Card
                  hover
                  className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="font-serif text-4xl leading-none text-brand-200 dark:text-brand-800 mb-3 select-none">
                    &ldquo;
                  </div>
                  <blockquote className="flex-1 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed italic mb-5">
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-sm flex-shrink-0">
                      {initials(t.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        {t.role} · {t.location}
                      </p>
                    </div>
                    <Badge variant="brand" size="sm" className="flex-shrink-0">
                      {t.program}
                    </Badge>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Share Story CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 mb-4 text-white">Share Your Story</h2>
            <p className="text-brand-200 mb-8 max-w-lg mx-auto text-lg">
              If AOF has impacted your life or community, we would love to hear from you. Your story
              could inspire others to give, volunteer, or seek help.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact?subject=testimonial">Share Your Story</Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
