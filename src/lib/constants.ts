import type { ImpactStats, Program, Testimonial } from '@/types'

// ============================================================
// Foundation Information
// ============================================================

export const FOUNDATION = {
  name: 'The Ayotunde Oso Foundation',
  shortName: 'AOF',
  tagline: 'Empowering people. Transforming communities.',
  mission:
    'To empower individuals and communities by providing tools, education, mentorship, healthcare, and opportunities that improve lives and create lasting impact.',
  vision:
    'To build a world where every individual, regardless of background, has access to opportunities, quality healthcare, education, dignity, and hope.',
  founded: 2025,
  foundedMonth: 'May',
  registrationNumber: 'CAC/IT/NO 123456',
  email: 'info@ayotundeosofoundation.org',
  supportEmail: 'support@ayotundeosofoundation.org',
  pressEmail: 'press@ayotundeosofoundation.org',
  donationsEmail: 'donations@ayotundeosofoundation.org',
  phone: '+234 901 234 5678',
  address: {
    street: '14 Victoria Island Boulevard',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    postalCode: '101241',
  },
  socialMedia: {
    twitter: 'https://twitter.com/AyotundeOsoFdn',
    facebook: 'https://facebook.com/AyotundeOsoFoundation',
    instagram: 'https://instagram.com/ayotundeosofoundation',
    linkedin: 'https://linkedin.com/company/ayotunde-oso-foundation',
    youtube: 'https://youtube.com/@AyotundeOsoFoundation',
  },
  website: 'https://ayotundeosofoundation.org',
} as const

// ============================================================
// Core Values
// ============================================================

export const CORE_VALUES = [
  {
    id: 'integrity',
    title: 'Integrity',
    description:
      'We operate with unwavering honesty, transparency, and ethical conduct in everything we do.',
    icon: 'Shield',
    color: 'brand',
  },
  {
    id: 'compassion',
    title: 'Compassion',
    description:
      'We approach every individual and community with empathy, dignity, and genuine care.',
    icon: 'Heart',
    color: 'rose',
  },
  {
    id: 'transparency',
    title: 'Transparency',
    description:
      'We are fully accountable for how we use every donation and report openly on our impact.',
    icon: 'Eye',
    color: 'blue',
  },
  {
    id: 'accountability',
    title: 'Accountability',
    description:
      'We hold ourselves to the highest standards and take responsibility for our actions and outcomes.',
    icon: 'CheckCircle',
    color: 'green',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'We embrace creative solutions and new technologies to maximize our community impact.',
    icon: 'Lightbulb',
    color: 'amber',
  },
  {
    id: 'empowerment',
    title: 'Empowerment',
    description:
      'We believe in unlocking the inherent potential within every individual and community.',
    icon: 'Zap',
    color: 'purple',
  },
  {
    id: 'community',
    title: 'Community',
    description:
      'We believe transformation begins and is sustained within strong, connected communities.',
    icon: 'Users',
    color: 'teal',
  },
  {
    id: 'inclusion',
    title: 'Inclusion',
    description:
      'We serve everyone regardless of background, gender, religion, or socioeconomic status.',
    icon: 'Globe',
    color: 'indigo',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'We design programs for lasting impact, building community capacity rather than dependency.',
    icon: 'Leaf',
    color: 'emerald',
  },
  {
    id: 'service',
    title: 'Service',
    description:
      'Selfless service to humanity is at the heart of everything we do at the foundation.',
    icon: 'HandHeart',
    color: 'orange',
  },
] as const

// ============================================================
// Impact Statistics
// ============================================================

export const IMPACT_STATS: ImpactStats = {
  livesImpacted: 3200,
  communitiesReached: 7,
  volunteersEngaged: 94,
  countriesPresent: 1,
  donationsReceived: 410,
  projectsCompleted: 9,
  medicalOutreaches: 6,
  treesPlanted: 1850,
  studentsSupported: 480,
  youthMentored: 260,
  emergencyResponses: 3,
  totalFundsRaised: 24500000,
  yearsOfImpact: 1,
}

// ============================================================
// Programs
// ============================================================

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
      'Provide scholarships to 500 deserving students annually',
      'Build and renovate school infrastructure in underserved communities',
      'Deliver digital literacy training to youth aged 13-25',
      'Support adult literacy programs for out-of-school individuals',
    ],
    beneficiaries: 'Children aged 5-18, young adults 18-30, adult learners',
    impact: {
      peopleReached: 480,
      communitiesServed: 4,
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
      'Match 300 mentees with qualified mentors annually',
      'Run quarterly career development workshops',
      'Provide internship placement support',
      'Offer entrepreneurship coaching for young business owners',
    ],
    beneficiaries: 'Students and young adults aged 16-30',
    impact: {
      peopleReached: 260,
      communitiesServed: 3,
      keyAchievement: '60 mentees matched in inaugural cohort with 30 professional mentors',
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
      peopleReached: 1200,
      communitiesServed: 3,
      keyAchievement: '6 medical outreaches conducted across Lagos communities',
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
      'Plant 5,000 trees annually across target communities',
      'Organize monthly community sanitation and cleanup events',
      'Establish recycling collection points in partner communities',
      'Deliver climate change education in schools',
      'Train community environmental champions',
    ],
    beneficiaries: 'Entire communities and future generations',
    impact: {
      peopleReached: 3500,
      communitiesServed: 4,
      keyAchievement: '1,850 trees planted across Lagos & Ogun States in inaugural campaign',
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
      'Deploy relief within 48 hours of verified disaster',
      'Provide shelter, food, and medical aid to displaced persons',
      'Offer psychosocial first aid and trauma counseling',
      'Support community rebuilding post-crisis',
    ],
    beneficiaries: 'Communities affected by natural or man-made disasters',
    impact: {
      peopleReached: 1440,
      communitiesServed: 3,
      keyAchievement: '3 emergency responses; Benue flood relief served 360 families',
    },
    isActive: true,
    startedAt: new Date('2025-11-01'),
  },
]

// ============================================================
// Testimonials
// ============================================================

export const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chidinma Okafor',
    title: 'AOF Scholar, 2025',
    organization: 'University of Lagos',
    location: 'Lagos, Nigeria',
    content:
      'The AOF scholarship changed everything for me. Growing up in Ajegunle, I never imagined I would attend university. Today I am studying Computer Science and mentoring younger girls in my community. The foundation did not just give me money — they gave me a future.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
    rating: 5,
    type: 'beneficiary',
    program: 'education',
    isPublished: true,
    isFeatured: true,
    date: new Date('2026-01-10'),
  },
  {
    id: '2',
    name: 'Dr. Emeka Nwosu',
    title: 'Volunteer Physician',
    organization: 'Lagos University Teaching Hospital',
    location: 'Lagos, Nigeria',
    content:
      'I have volunteered at three AOF medical outreaches and what I witness every time moves me deeply. People who have never had a blood pressure check in their lives, children whose eye conditions went unnoticed for years — the foundation is reaching the truly unreached. This is healthcare equity in action.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    rating: 5,
    type: 'volunteer',
    program: 'healthcare',
    isPublished: true,
    isFeatured: true,
    date: new Date('2025-10-15'),
  },
  {
    id: '3',
    name: 'Fatima Al-Hassan',
    title: 'Community Leader',
    organization: 'Kano Community Association',
    location: 'Kano, Nigeria',
    content:
      'When flooding destroyed our community, we had nowhere to turn. The Ayotunde Oso Foundation arrived within two days with food, clean water, and medical supplies. More than the materials, their team stayed with us, helping us rebuild. They are true partners in our recovery.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400',
    rating: 5,
    type: 'beneficiary',
    program: 'emergency',
    isPublished: true,
    isFeatured: true,
    date: new Date('2025-11-20'),
  },
  {
    id: '4',
    name: 'Adewale Bankole',
    title: 'Monthly Donor & Board Advocate',
    organization: 'Bankole Ventures Ltd.',
    location: 'Ibadan, Nigeria',
    content:
      'I have supported many charities over the years, but the Ayotunde Oso Foundation stands out for its accountability. I receive detailed impact reports, my donations are trackable, and I can see exactly what each naira is doing. This is how nonprofit work should be done.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 5,
    type: 'donor',
    isPublished: true,
    isFeatured: true,
    date: new Date('2026-03-01'),
  },
]

// ============================================================
// Navigation Structure
// ============================================================

export const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about', description: 'The foundation\'s history and journey' },
      { label: 'Founder', href: '/about/founder', description: 'Meet Ayotunde Oso' },
      { label: 'Leadership', href: '/about/leadership', description: 'Board, executives & advisors' },
      { label: 'Mission & Vision', href: '/about/mission', description: 'What drives us forward' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs', description: 'Our complete program portfolio' },
      { label: 'Education', href: '/programs/education', description: 'Scholarships & learning' },
      { label: 'Healthcare', href: '/programs/healthcare', description: 'Free medical outreaches' },
      { label: 'Mentorship', href: '/programs/mentorship', description: 'Youth career guidance' },
      { label: 'Environment', href: '/programs/environment', description: 'Sustainability initiatives' },
      { label: 'Emergency Relief', href: '/programs/emergency', description: 'Disaster response' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    children: [
      { label: 'Impact Dashboard', href: '/impact', description: 'Real-time impact data' },
      { label: 'Projects', href: '/projects', description: 'Current & past projects' },
      { label: 'Success Stories', href: '/testimonials', description: 'Lives we have changed' },
      { label: 'Annual Reports', href: '/resources/reports', description: 'Transparency reports' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Volunteer', href: '/volunteer', description: 'Join our team of changemakers' },
      { label: 'Events', href: '/events', description: 'Upcoming programs & events' },
      { label: 'Campaigns', href: '/campaigns', description: 'Active fundraising campaigns' },
      { label: 'Partners', href: '/partners', description: 'Corporate & NGO partners' },
      { label: 'Careers', href: '/careers', description: 'Work with the foundation' },
    ],
  },
  {
    label: 'News',
    href: '/news',
    children: [
      { label: 'Latest News', href: '/news', description: 'Foundation announcements' },
      { label: 'Blog', href: '/news?type=blog', description: 'Stories & insights' },
      { label: 'Press Releases', href: '/press', description: 'Media coverage & releases' },
      { label: 'Media Gallery', href: '/media', description: 'Photos & videos' },
    ],
  },
] as const

// ============================================================
// Donation Amounts
// ============================================================

export const SUGGESTED_AMOUNTS = {
  USD: [5, 10, 25, 50, 100, 250],
  GBP: [10, 20, 50, 100, 200, 500],
  EUR: [10, 25, 50, 100, 250, 500],
  NGN: [2000, 5000, 10000, 25000, 50000, 100000],
  GHS: [50, 100, 250, 500, 1000, 2500],
  ZAR: [100, 250, 500, 1000, 2500, 5000],
  KES: [500, 1000, 2500, 5000, 10000, 25000],
  CAD: [15, 25, 50, 100, 250, 500],
  AUD: [15, 25, 50, 100, 250, 500],
} as const

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  NGN: '₦',
  GHS: 'GH₵',
  ZAR: 'R',
  KES: 'KSh',
  CAD: 'CA$',
  AUD: 'A$',
}

export const IMPACT_MESSAGES: Record<number, string> = {
  5: 'provides stationery for one child for a month',
  10: 'provides school supplies for one child for a month',
  25: 'feeds a family of four for one week',
  50: 'covers a health screening for five community members',
  100: 'plants 40 trees and trains a community environmental champion',
  250: 'funds one month of mentorship sessions for 10 youth',
  500: 'covers a full scholarship for one term of secondary education',
  1000: 'deploys emergency relief supplies for one affected family',
  5000: 'funds an entire medical outreach event for 200+ people',
}

export const IMPACT_MESSAGES_NGN: Record<number, string> = {
  2000: 'provides stationery and supplies for one student',
  5000: 'feeds a family of four for one week',
  10000: 'covers a health screening for five community members',
  25000: 'plants trees and funds a community clean-up',
  50000: 'funds one month of mentorship for 10 youth',
  100000: 'covers a scholarship for one term of secondary education',
  250000: 'deploys emergency relief for one affected family',
  500000: 'funds a full medical outreach event for 200+ people',
}

// ============================================================
// KOMAI Configuration
// ============================================================

export const KOMAI_CONFIG = {
  name: 'KOMAI',
  fullName: 'Knowledge Opportunity Mentorship Assistance Intelligence',
  greeting:
    'Hello! I am KOMAI, the digital assistant of The Ayotunde Oso Foundation. I can help you learn about our programs, guide your donation, explore volunteer opportunities, and much more. How can I assist you today?',
  suggestedPrompts: [
    'How can I donate to the foundation?',
    'Tell me about your healthcare programs',
    'How do I become a volunteer?',
    'What communities do you serve?',
    'How is my donation used?',
    'Are there upcoming events?',
    'How can my company partner with AOF?',
    'Tell me about the mentorship program',
  ],
  systemPrompt: `You are KOMAI (Knowledge Opportunity Mentorship Assistance Intelligence), the official AI assistant of The Ayotunde Oso Foundation. You are warm, professional, compassionate, and knowledgeable about the foundation's mission, programs, and impact.

Key facts:
- Foundation: The Ayotunde Oso Foundation (AOF)
- Mission: Empowering people, transforming communities through education, healthcare, environment, mentorship, and emergency relief
- Founded: May 2025 in Lagos, Nigeria
- Programs: Education & Youth Development, Youth Mentorship, Health & Wellbeing Outreaches, Environmental Sustainability, Emergency Humanitarian Relief
- Contact: info@ayotundeosofoundation.org | +234 901 234 5678
- Website: ayotundeosofoundation.org

Always be helpful, accurate, and compassionate. For donations, direct to /donate. For volunteering, direct to /volunteer. For medical emergencies, provide emergency contacts. If you don't know something, say so and offer to connect the user with a team member.`,
  maxMessageLength: 1000,
  supportedLanguages: [
    { code: 'en', name: 'English' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ha', name: 'Hausa' },
    { code: 'ig', name: 'Igbo' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ],
} as const

// ============================================================
// Social Proof Numbers (for display)
// ============================================================

export const HERO_STATS = [
  { value: '3.2K+', label: 'Lives Impacted' },
  { value: '7', label: 'Communities Served' },
  { value: '94+', label: 'Volunteers' },
  { value: '1', label: 'Country' },
] as const
