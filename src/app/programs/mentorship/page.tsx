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
import { Users, Compass, Briefcase, Star, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Youth Mentorship | The Ayotunde Oso Foundation',
  description:
    'AOF\'s mentorship programme connects 260 young people with trained mentors for career development, personal growth, and life skills through one-on-one and group sessions.',
}

export default function MentorshipPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Youth Mentorship Programme"
        subtitle="Every young person deserves someone who believes in them. Our mentorship programme creates those connections at scale."
        eyebrow="Programme"
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: 'Mentorship', href: '/programs/mentorship' },
        ]}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        gradient="gold"
      >
        <Button variant="gold" size="lg" asChild>
          <Link href="/volunteer?role=mentor">Become a Mentor</Link>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/donate?program=mentorship">Support Mentorship</Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-xl">
          {/* Stats */}
          <StaggerContainer className="grid lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '260',    label: 'Youth Mentored' },
              { value: '48',     label: 'Active Mentors' },
              { value: '1,040',  label: 'Mentorship Hours' },
              { value: '78%',    label: 'Career Placement Rate' },
            ].map((s) => (
              <StaggerItem key={s.label} direction="up">
                <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <p className="font-display text-4xl font-bold text-gold-600">{s.value}</p>
                  <p className="font-semibold text-sm mt-2">{s.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* How it works */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <SlideIn from="left">
              <Badge variant="gold" className="mb-4">How It Works</Badge>
              <h2 className="heading-2 mb-6">One relationship. Unlimited possibilities.</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Research consistently shows that youth with a consistent mentor are 55% more likely to attend
                college, 81% more likely to volunteer, and 130% more likely to hold leadership positions.
                The AOF Mentorship Programme creates those connections deliberately.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                We match young people (ages 16–25) with vetted professionals across industries, providing
                structured programmes of one-on-one sessions, workshops, and career experiences over 12 months.
              </p>
              <div className="space-y-3">
                {[
                  'AI-powered mentor-mentee matching algorithm',
                  '12-month structured programme with milestones',
                  'Monthly group workshops and peer learning circles',
                  'Career shadowing and internship placement support',
                  'Online platform for remote mentorship pairs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-gold-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
                  alt="Mentor and mentee session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SlideIn>
          </div>

          {/* Components */}
          <FadeUp className="mb-8">
            <h2 className="heading-2">Programme Components</h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users,    title: 'One-on-One Matching',       desc: 'Personalised pairings based on goals, industry, and personality' },
              { icon: Compass,  title: 'Career Navigation',          desc: 'CV building, interview prep, and industry exposure sessions' },
              { icon: Briefcase, title: 'Professional Development',  desc: 'Monthly workshops on leadership, communication, and entrepreneurship' },
              { icon: Star,     title: 'Peer Learning Circles',      desc: 'Group cohorts for peer accountability and community building' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <StaggerItem key={s.title} direction="scale">
                  <Card className="p-5 text-center h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <Icon className="size-8 text-gold-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-xs text-neutral-500">{s.desc}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-gold-500">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-forest-900 mb-4">Be the mentor you needed</h2>
            <p className="text-forest-800 mb-8 max-w-xl mx-auto">
              Professionals across every industry commit just 2–4 hours a month — and the impact lasts a lifetime.
            </p>
            <Button variant="dark" size="lg" asChild>
              <Link href="/volunteer?role=mentor">Apply to Mentor</Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
