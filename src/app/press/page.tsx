import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'Press & Media | The Ayotunde Oso Foundation',
  description: 'Press releases, media coverage, and press kit resources for journalists and media professionals covering The Ayotunde Oso Foundation.',
}

const PRESS_RELEASES = [
  {
    title: 'AOF Launches ₦85 Million Edu-Connect Digital Learning Initiative Across Three States',
    date: '2025-06-15',
    excerpt: 'The Ayotunde Oso Foundation announces the expansion of its digital education program to 15 new community learning centers in Lagos, Ogun, and Oyo states, targeting 4,200 students from underserved communities.',
    category: 'Programs',
  },
  {
    title: 'AOF and Global Health Initiative Partner to Expand Mobile Healthcare in Delta Region',
    date: '2025-05-28',
    excerpt: "A new partnership between AOF and the Global Health Initiative will deploy three additional mobile medical clinics, extending healthcare access to an estimated 25,000 people in underserved riverine communities.",
    category: 'Partnerships',
  },
  {
    title: 'AOF 2024 Annual Report: 127,000 New Beneficiaries, ₦2.1B Program Spend',
    date: '2025-04-10',
    excerpt: "AOF's 2024 Annual Report reveals another year of significant growth, with the foundation reaching 127,000 new beneficiaries and deploying over ₦2.1 billion in programs across five areas.",
    category: 'Reports',
  },
  {
    title: 'AOF Completes Anambra Flood Relief Response: 6,800 People Reached',
    date: '2025-01-20',
    excerpt: 'Following the devastating October 2024 floods, AOF has completed its emergency response, distributing relief materials to 6,800 displaced persons and launching a community rebuilding fund.',
    category: 'Emergency',
  },
  {
    title: "Founder Ayotunde Oso Named Among Nigeria's 40 Under 40 Social Entrepreneurs",
    date: '2025-03-05',
    excerpt: 'AOF Founder and Executive Director Ayotunde Oso has been recognized in the prestigious Nigeria 40 Under 40 list in the Social Impact category, highlighting her decade-long commitment to community transformation.',
    category: 'Awards',
  },
  {
    title: 'AOF Plant 1 Million Trees Campaign Surpasses Goal: 1.2 Million Trees Planted',
    date: '2024-12-18',
    excerpt: "AOF's landmark environmental campaign has concluded with 1.2 million trees planted across 18 states, exceeding the original target by 20% thanks to contributions from 3,400 donors.",
    category: 'Programs',
  },
]

const MEDIA_MENTIONS = [
  { outlet: 'Punch Nigeria', title: 'How AOF is Reimagining Community Development in Nigeria', date: '2025-05-12', type: 'Feature' },
  { outlet: 'TechCabal', title: "AOF's Digital Learning Centers: Closing the Digital Divide One Community at a Time", date: '2025-04-22', type: 'Feature' },
  { outlet: 'Vanguard', title: 'AOF Emergency Team Among First Responders to Anambra Floods', date: '2024-10-30', type: 'News' },
  { outlet: 'BusinessDay', title: 'Nonprofit Sector Report: AOF Among Top 10 Impact Organizations 2024', date: '2025-03-18', type: 'Report' },
  { outlet: 'Guardian Nigeria', title: 'Interview: Ayotunde Oso on Building a Sustainable Humanitarian Organization', date: '2025-02-14', type: 'Interview' },
  { outlet: 'The Cable', title: "AOF's Green Schools Programme Reaches 28,000 Students Nationwide", date: '2025-01-08', type: 'News' },
]

const MEDIA_CONTACTS = [
  {
    name: 'Communications Team',
    email: 'press@ayotundeosofouncation.org',
    role: 'General Media Inquiries',
    responseTime: '24 hours on business days',
  },
  {
    name: 'Partnerships Team',
    email: 'partnerships@ayotundeosofouncation.org',
    role: 'Corporate & Partner Inquiries',
    responseTime: '48 hours',
  },
]

export default function PressPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Press & Media"
        title="News from the Field"
        subtitle="Press releases, media coverage, and resources for journalists. We are committed to transparency and welcome accurate, fair coverage of our work."
        breadcrumbs={[{ label: 'Press', href: '/press' }]}
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Press Releases */}
            <div className="lg:col-span-2">
              <SlideIn from="left" className="mb-8">
                <h2 className="heading-2">Press Releases</h2>
              </SlideIn>
              <StaggerContainer className="space-y-6">
                {PRESS_RELEASES.map((pr, i) => (
                  <StaggerItem key={pr.title} direction="up">
                    <div className="border-b border-neutral-200 dark:border-neutral-700 pb-6 last:border-0 group">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{pr.category}</Badge>
                        <span className="text-xs text-neutral-400">
                          {new Date(pr.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors cursor-pointer">
                        {pr.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{pr.excerpt}</p>
                      <button className="text-sm text-brand-700 dark:text-brand-400 font-medium mt-3 hover:underline">
                        Read Full Release →
                      </button>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <SlideIn from="right" delay={0.1}>
                <Card className="p-6 bg-cream-50 dark:bg-neutral-900/50">
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-4">Media Contacts</h3>
                  {MEDIA_CONTACTS.map((contact) => (
                    <div key={contact.email} className="mb-4 last:mb-0">
                      <div className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">{contact.role}</div>
                      <a href={`mailto:${contact.email}`} className="text-brand-700 dark:text-brand-400 text-sm hover:underline">
                        {contact.email}
                      </a>
                      <div className="text-xs text-neutral-500 mt-1">Response: {contact.responseTime}</div>
                    </div>
                  ))}
                </Card>
              </SlideIn>

              <SlideIn from="right" delay={0.2}>
                <Card className="p-6 bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800">
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-3">Press Kit</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Download logos, photos, founder bio, and organizational fact sheet.
                  </p>
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <a href="/resources/aof-press-kit.zip" download>Download Press Kit</a>
                  </Button>
                </Card>
              </SlideIn>

              <SlideIn from="right" delay={0.3}>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-4">In The News</h3>
                  <div className="space-y-3">
                    {MEDIA_MENTIONS.map((m) => (
                      <div key={m.title} className="border-l-2 border-brand-300 dark:border-brand-700 pl-3">
                        <div className="text-xs font-semibold text-brand-700 dark:text-brand-400">{m.outlet}</div>
                        <div className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-tight mt-0.5">{m.title}</div>
                        <div className="text-xs text-neutral-400 mt-1">
                          {m.type} · {new Date(m.date).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
