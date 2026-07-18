import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { TEAM_MEMBERS, DEPT_COLORS } from '@/data/team'

export const metadata: Metadata = {
  title: 'Our Team | The Ayotunde Oso Foundation',
  description: "Meet the dedicated staff and team members driving AOF's mission across Nigeria.",
}

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Our Team"
        title="The People Behind the Mission"
        subtitle="AOF is powered by a passionate, diverse team of professionals who left lucrative private sector careers to dedicate their expertise to community transformation."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Our Team', href: '/about/team' },
        ]}
      />

      <section className="section">
        <div className="container-xl">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.name} direction="scale">
                <Card className="p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {member.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-neutral-900 dark:text-neutral-100">{member.name}</h3>
                      <p className="text-sm text-brand-700 dark:text-brand-400 font-medium">{member.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${DEPT_COLORS[member.department] || 'bg-neutral-100 text-neutral-600'}`}>
                          {member.department}
                        </span>
                        <span className="text-xs text-neutral-400">📍 {member.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="heading-2 text-white mb-4">Join Our Team</h2>
            <p className="text-brand-200 mb-8 max-w-lg mx-auto">
              We are always looking for talented, mission-driven people to join us. See our open positions or send a spontaneous application.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
