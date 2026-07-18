import type { Program } from '@/types'

export const PROGRAMS: Omit<Program, 'projects'>[] = [
  {
    id: 'education',
    slug: 'education',
    name: 'Education & Youth Development',
    category: 'education',
    description:
      'We believe every child deserves access to quality education. Through scholarships, school infrastructure support, literacy programs, and digital skills training, we are building the next generation of African leaders.',
    shortDescription:
      'Scholarships, literacy programs, and digital skills training for underserved youth.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    icon: 'GraduationCap',
    color: '#3B82F6',
    objectives: [
      'Provide scholarships to 250 deserving students annually',
      'Build and renovate school infrastructure in underserved communities',
      'Deliver digital literacy training to youth aged 13-25',
      'Support adult literacy programs for out-of-school individuals',
    ],
    beneficiaries: 'Children aged 5-18, young adults 18-30, adult learners',
    impact: {
      peopleReached: 240,
      communitiesServed: 2,
      keyAchievement: '100% of inaugural scholarship cohort progressed to higher education',
    },
    isActive: true,
    startedAt: new Date('2025-09-01'),
  },
  {
    id: 'mentorship',
    slug: 'mentorship',
    name: 'Youth Mentorship Programme',
    category: 'mentorship',
    description:
      'Our flagship mentorship program connects experienced professionals with ambitious students and young adults. Through one-on-one coaching, career guidance, and skills development workshops, we are shaping the next generation of confident, purpose-driven leaders.',
    shortDescription:
      'Connecting professionals with students and young adults for career growth.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    icon: 'Users',
    color: '#8B5CF6',
    objectives: [
      'Match 150 mentees with qualified mentors annually',
      'Run quarterly career development workshops',
      'Provide internship placement support',
      'Offer entrepreneurship coaching for young business owners',
    ],
    beneficiaries: 'Students and young adults aged 16-30',
    impact: {
      peopleReached: 130,
      communitiesServed: 2,
      keyAchievement: '30 mentees matched in inaugural cohort with 15 professional mentors',
    },
    isActive: true,
    startedAt: new Date('2025-11-15'),
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Health & Wellbeing Outreaches',
    category: 'healthcare',
    description:
      'Free healthcare should not be a luxury. Our medical outreach teams bring screenings, preventive care, mental health support, and health education directly to underserved communities, often reaching people who have never seen a doctor.',
    shortDescription:
      'Free health screenings, medical care, and wellness education for underserved communities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    icon: 'HeartPulse',
    color: '#EF4444',
    objectives: [
      'Conduct bi-monthly free health screening events',
      'Provide blood pressure, diabetes, and eye care testing',
      'Deliver mental health awareness and counseling sessions',
      'Distribute essential medications and health supplies',
      'Train community health volunteers',
    ],
    beneficiaries: 'All community members, with focus on elderly, women, and children',
    impact: {
      peopleReached: 600,
      communitiesServed: 2,
      keyAchievement: '3 medical outreaches conducted across Lagos communities',
    },
    isActive: true,
    startedAt: new Date('2025-07-01'),
  },
  {
    id: 'environment',
    slug: 'environment',
    name: 'Environmental Sustainability',
    category: 'environment',
    description:
      'The health of our communities is inseparable from the health of our environment. Through tree planting, community sanitation drives, recycling education, park cleanups, and climate awareness campaigns, we are building a greener, cleaner Nigeria.',
    shortDescription:
      'Tree planting, sanitation drives, and climate awareness for a sustainable future.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    icon: 'Leaf',
    color: '#10B981',
    objectives: [
      'Plant 2,500 trees annually across target communities',
      'Organize monthly community sanitation and cleanup events',
      'Establish recycling collection points in partner communities',
      'Deliver climate change education in schools',
      'Train community environmental champions',
    ],
    beneficiaries: 'Entire communities and future generations',
    impact: {
      peopleReached: 1750,
      communitiesServed: 2,
      keyAchievement: '925 trees planted across Lagos & Ogun States in inaugural campaign',
    },
    isActive: true,
    startedAt: new Date('2025-10-01'),
  },
  {
    id: 'emergency',
    slug: 'emergency',
    name: 'Emergency Humanitarian Relief',
    category: 'emergency',
    description:
      'When disaster strikes, we respond. Our emergency relief team deploys food, water, medicine, shelter, and psychosocial support to communities affected by floods, fires, disease outbreaks, food insecurity, and other crises.',
    shortDescription:
      'Rapid response relief for communities affected by disasters and crises.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    icon: 'AlertTriangle',
    color: '#F59E0B',
    objectives: [
      'Maintain a pre-positioned emergency response fund',
      'Deploy relief within 24 hours of verified disaster',
      'Provide shelter, food, and medical aid to displaced persons',
      'Offer psychosocial first aid and trauma counseling',
      'Support community rebuilding post-crisis',
    ],
    beneficiaries: 'Communities affected by natural or man-made disasters',
    impact: {
      peopleReached: 720,
      communitiesServed: 2,
      keyAchievement: '2 emergency responses; Benue flood relief served 180 families',
    },
    isActive: true,
    startedAt: new Date('2025-11-01'),
  },
]

export const PROGRAMS_BY_SLUG: Record<string, Omit<Program, 'projects'>> = Object.fromEntries(
  PROGRAMS.map((p) => [p.slug, p])
)
