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
  AnimatedProgress,
} from '@/components/ui/animations'
import { BookOpen, GraduationCap, Laptop, Users, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Education & Youth Development | The Ayotunde Oso Foundation',
  description:
    'AOF\'s Education programme provides digital skills training, university scholarships, literacy support, and teacher development to 480+ young people in underserved communities.',
}

const SUB_PROGRAMS = [
  {
    icon: BookOpen,
    title: 'AOF Literacy Initiative',
    description:
      'Structured literacy intervention for children ages 5–12 who have fallen behind grade-level reading. Trains community facilitators and provides take-home materials.',
    reach: '3 partner schools enrolled',
    metric: 87,
    metricLabel: 'Literacy rate improvement',
  },
  {
    icon: GraduationCap,
    title: 'AOF Scholars Programme',
    description:
      'Full university scholarships for exceptional students from low-income households, paired with mentorship, internship placement, and career coaching.',
    reach: '12 scholars (inaugural cohort)',
    metric: 100,
    metricLabel: 'Scholars progressing on track',
  },
  {
    icon: Laptop,
    title: 'Digital Skills & STEM',
    description:
      'Coding bootcamps, digital marketing, and data literacy training for underserved youth in Lagos, equipping them for the 21st-century economy.',
    reach: '500 enrolled (cohort 1, Lagos)',
    metric: 73,
    metricLabel: 'Placed in tech internships',
  },
  {
    icon: Users,
    title: 'Teacher Capacity Building',
    description:
      'Training and continuous professional development for public school teachers in underserved communities, improving quality at scale.',
    reach: '28 teachers trained',
    metric: 94,
    metricLabel: 'Improved student outcomes',
  },
]

export default function EducationPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Education & Youth Development"
        subtitle="When a child learns to read, a universe opens. Our education programme is building that future for young people across underserved communities."
        eyebrow="Programme"
        breadcrumbs={[
          { label: 'Programs', href: '/programs' },
          { label: 'Education', href: '/programs/education' },
        ]}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        size="default"
      >
        <Button variant="gold" size="lg" asChild>
          <Link href="/donate?program=education">Support Education</Link>
        </Button>
        <Button variant="outline-white" size="lg" asChild>
          <Link href="/volunteer">Teach With Us</Link>
        </Button>
      </PageHero>

      {/* Key Stats */}
      <section className="section">
        <div className="container-xl">
          <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { value: '500+',  label: 'Students Enrolled',   desc: 'in digital skills and literacy programmes' },
              { value: '12',    label: 'Active Scholars',     desc: 'receiving full university scholarships (inaugural cohort)' },
              { value: '87%',   label: 'Literacy Improvement', desc: 'among children in our literacy initiative' },
            ].map((s) => (
              <StaggerItem key={s.label} direction="up">
                <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <p className="font-display text-5xl font-bold text-brand-700 dark:text-brand-400">{s.value}</p>
                  <p className="font-semibold mt-2">{s.label}</p>
                  <p className="text-sm text-neutral-500 mt-1">{s.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Why Education */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <SlideIn from="left">
              <Badge variant="brand" className="mb-4">Why Education</Badge>
              <h2 className="heading-2 mb-6">The most powerful tool for change</h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  In Nigeria alone, over 10 million children are out of school. Many who attend face overcrowded
                  classrooms, untrained teachers, and no materials. The result is a generation reaching adulthood
                  without the foundational skills to participate in the modern economy.
                </p>
                <p>
                  Our Education & Youth Development programme targets these gaps at multiple levels simultaneously:
                  early literacy, secondary STEM, university scholarships, and teacher training. Because change
                  requires intervention at every stage.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  '28 teachers trained across 3 partner schools',
                  '100% of inaugural AOF Scholars progressing on track',
                  '3 community schools in our literacy partnership',
                  '1 digital skills hub launched in Lagos Island',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-brand-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80"
                  alt="Children learning in an AOF classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SlideIn>
          </div>

          {/* Sub-programmes */}
          <FadeUp className="mb-8">
            <h2 className="heading-2">Sub-Programmes</h2>
          </FadeUp>
          <StaggerContainer className="grid lg:grid-cols-2 gap-6">
            {SUB_PROGRAMS.map((sp, i) => {
              const Icon = sp.icon
              return (
                <StaggerItem key={sp.title} direction="scale">
                  <Card className="p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="size-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0">
                        <Icon className="size-5 text-brand-700 dark:text-brand-400" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold">{sp.title}</h3>
                        <p className="text-xs text-brand-600 dark:text-brand-400 mt-0.5">{sp.reach}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {sp.description}
                    </p>
                    <AnimatedProgress
                      value={sp.metric}
                      label={sp.metricLabel}
                      showValue
                      color="brand"
                      size="sm"
                      delay={i * 0.1}
                    />
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-700">
        <div className="container-xl">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-white mb-4">Give a child a future</h2>
                <p className="text-brand-200 leading-relaxed">
                  ₦25,000 funds a child&apos;s school supplies for a full year. ₦100,000 covers a semester of tutoring.
                  ₦250,000 provides a vocational training scholarship. Every amount matters.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/donate?program=education">Donate to Education</Link>
                </Button>
                <Button variant="outline-white" size="lg" asChild>
                  <Link href="/programs">
                    All Programmes <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
