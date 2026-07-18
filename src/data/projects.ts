export type ProjectStatus = 'active' | 'planning' | 'completed'

export type Project = {
  id: string
  slug: string
  title: string
  description: string
  program: string
  status: ProjectStatus
  location: string
  startDate: string
  endDate: string
  budgetNgn: number
  raisedNgn: number
  beneficiaries: number
  image: string
  color: string
  updates: { date: string; text: string }[]
  outcomes: string[]
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'digital-literacy-lagos-2025',
    title: 'Digital Literacy for 100 Youth in Lagos',
    description:
      'A 3-month intensive digital skills programme equipping underserved youth in Lagos Island with web development, digital marketing, and data literacy skills — giving them the tools to participate in the 21st-century economy.',
    program: 'Education',
    status: 'active',
    location: 'Lagos Island, Lagos',
    startDate: '2025-09-01',
    endDate: '2025-11-30',
    budgetNgn: 18_000_000,
    raisedNgn: 13_500_000,
    beneficiaries: 500,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
    color: 'bg-blue-50 text-blue-700',
    updates: [
      { date: '2026-01-15', text: 'Cohort 1 completed with 87 graduates receiving certificates.' },
      { date: '2025-11-01', text: 'Mid-programme review: 92% attendance rate, 73% on track for job placement.' },
      { date: '2025-09-01', text: 'Programme launched. 100 students enrolled across 4 training centres.' },
    ],
    outcomes: [
      '87 graduates certified in web development or digital marketing',
      '73% of graduates placed in tech internships or entry-level roles',
      '4 training centres established in Lagos Island',
      'Partnership with 12 tech companies for job placement',
    ],
  },
  {
    id: '2',
    slug: 'healthcare-outreach-abuja-q1-2026',
    title: 'Healthcare Outreach — Abuja (Q1 2026)',
    description:
      'Free blood pressure, diabetes, eye, and mental health screenings for 800+ residents of Garki and Wuse districts in Abuja, FCT. Mobile units staffed by volunteer doctors and nurses bring care directly to the community.',
    program: 'Healthcare',
    status: 'active',
    location: 'Abuja, FCT',
    startDate: '2026-01-15',
    endDate: '2026-03-31',
    budgetNgn: 7_200_000,
    raisedNgn: 5_400_000,
    beneficiaries: 800,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    color: 'bg-red-50 text-red-700',
    updates: [
      { date: '2026-02-10', text: 'Week 4 complete: 320 patients screened, 14 referred for specialist care.' },
      { date: '2026-01-15', text: 'Outreach launched in Garki district. First day: 80 patients seen.' },
    ],
    outcomes: [
      '800+ patients to be screened across 3 districts',
      'Free medications provided to all patients',
      '12 Community Health Advocates trained on site',
      'Referral pathway established with National Hospital Abuja',
    ],
  },
  {
    id: '3',
    slug: 'green-ibadan-2026',
    title: 'Green Ibadan Initiative — 3,000 Trees',
    description:
      'Partnering with Oyo State schools to plant 3,000 trees and train student environmental champions across 12 secondary schools in Ibadan. Each school adopts and stewards its grove for three years.',
    program: 'Environment',
    status: 'planning',
    location: 'Ibadan, Oyo State',
    startDate: '2026-09-01',
    endDate: '2027-03-31',
    budgetNgn: 5_500_000,
    raisedNgn: 1_870_000,
    beneficiaries: 5000,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
    color: 'bg-emerald-50 text-emerald-700',
    updates: [
      { date: '2026-07-01', text: 'School partnerships confirmed with 12 secondary schools in Ibadan North and South LGAs.' },
      { date: '2026-05-15', text: 'Fundraising launched. Community pre-registration open for environmental champions programme.' },
    ],
    outcomes: [
      '3,000 trees to be planted across 12 schools',
      '500 student Green Corps champions trained',
      '80%+ tree survival rate target over 3 years',
      'Curriculum integration with Oyo State Ministry of Education',
    ],
  },
]

export const PROJECTS_BY_SLUG: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p])
)
