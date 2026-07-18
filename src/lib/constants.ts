import type { ImpactStats } from '@/types'
export { PROGRAMS } from '@/data/programs'
export { TESTIMONIALS, FEATURED_TESTIMONIALS } from '@/data/testimonials'

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
  livesImpacted: 1600,
  communitiesReached: 4,
  volunteersEngaged: 47,
  countriesPresent: 1,
  donationsReceived: 205,
  projectsCompleted: 5,
  medicalOutreaches: 3,
  treesPlanted: 925,
  studentsSupported: 240,
  youthMentored: 130,
  emergencyResponses: 2,
  totalFundsRaised: 12250000,
  yearsOfImpact: 1,
}

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
  { value: '1.6K+', label: 'Lives Impacted' },
  { value: '4', label: 'Communities Served' },
  { value: '47+', label: 'Volunteers' },
  { value: '1', label: 'Country' },
] as const
