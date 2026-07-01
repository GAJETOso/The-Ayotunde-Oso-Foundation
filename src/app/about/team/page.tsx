import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'Our Team | The Ayotunde Oso Foundation',
  description: "Meet the dedicated staff and team members driving AOF's mission across Nigeria.",
}

const TEAM_MEMBERS = [
  {
    name: 'Ayotunde Oso',
    title: 'Founder & Executive Director',
    department: 'Leadership',
    bio: 'Ayotunde founded AOF to address persistent inequities she witnessed in her community. With a background in public health and social entrepreneurship, she has spent over a decade building systems that create lasting change.',
    skills: ['Strategic Leadership', 'Public Health', 'Fundraising', 'Policy Advocacy'],
    location: 'Lagos',
    initials: 'AO',
  },
  {
    name: 'Dr. Emeka Okonkwo',
    title: 'Director of Programs',
    department: 'Programs',
    bio: 'With 15 years in nonprofit program management, Emeka oversees all five AOF program areas, ensuring quality, accountability, and community-centered delivery.',
    skills: ['Program Design', 'M&E', 'Community Development', 'Partnerships'],
    location: 'Abuja',
    initials: 'EO',
  },
  {
    name: 'Ngozi Adeleke',
    title: 'Director of Finance & Administration',
    department: 'Finance',
    bio: "A chartered accountant with deep nonprofit finance expertise, Ngozi ensures fiscal integrity, donor accountability, and operational efficiency across the organization.",
    skills: ['Financial Management', 'Audit', 'Grant Compliance', 'Budgeting'],
    location: 'Lagos',
    initials: 'NA',
  },
  {
    name: 'Ibrahim Sule',
    title: 'Head of Communications',
    department: 'Communications',
    bio: "Ibrahim leads AOF's communications strategy, brand management, and media relations, transforming program data into compelling stories that inspire action.",
    skills: ['Brand Strategy', 'Content Creation', 'Media Relations', 'Digital Marketing'],
    location: 'Lagos',
    initials: 'IS',
  },
  {
    name: 'Dr. Chiamaka Eze',
    title: 'Healthcare Program Lead',
    department: 'Programs',
    bio: "A physician with community health specialization, Chiamaka designs and leads AOF's healthcare outreach programs, mobile clinic operations, and health worker training.",
    skills: ['Community Health', 'Mobile Clinics', 'Maternal Health', 'Epidemiology'],
    location: 'Delta State',
    initials: 'CE',
  },
  {
    name: 'Aisha Bello',
    title: 'Education Program Lead',
    department: 'Programs',
    bio: "An educator with 10+ years in curriculum development and EdTech implementation, Aisha leads AOF's scholarship program, digital learning centers, and teacher training.",
    skills: ['Curriculum Design', 'EdTech', 'Teacher Training', 'Scholarship Management'],
    location: 'Lagos',
    initials: 'AB',
  },
  {
    name: 'Tunde Fashola',
    title: 'Environmental Program Lead',
    department: 'Programs',
    bio: "An environmental engineer and climate advocate, Tunde leads AOF's tree planting, clean water, and Green Schools initiatives across Nigeria.",
    skills: ['Environmental Engineering', 'Project Management', 'Climate Policy', 'WASH'],
    location: 'Kano',
    initials: 'TF',
  },
  {
    name: 'Grace Obi',
    title: 'Volunteer & Community Engagement Manager',
    department: 'Operations',
    bio: "Grace manages AOF's 1,240+ volunteer network, designing meaningful engagement experiences and building the community of changemakers that powers our programs.",
    skills: ['Volunteer Management', 'Community Building', 'Events', 'Training'],
    location: 'Lagos',
    initials: 'GO',
  },
  {
    name: 'Yemi Adeyemi',
    title: 'MEAL Coordinator',
    department: 'Programs',
    bio: 'A data-driven evaluator, Yemi designs measurement systems, conducts field assessments, and produces learning reports that strengthen program quality across all AOF initiatives.',
    skills: ['M&E Systems', 'Data Analysis', 'Research', 'Report Writing'],
    location: 'Abuja',
    initials: 'YA',
  },
]

const DEPT_COLORS: Record<string, string> = {
  Leadership: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400',
  Programs: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  Finance: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  Communications: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400',
  Operations: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
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
