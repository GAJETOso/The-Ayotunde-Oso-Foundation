export type ArticleCategory =
  | 'IMPACT_STORY'
  | 'NEWS'
  | 'PRESS_RELEASE'
  | 'BLOG'
  | 'REPORT'

export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  categoryLabel: string
  author: string
  authorRole: string
  coverImage: string
  publishedAt: string   // ISO date string (YYYY-MM-DD)
  readingTime: number
  isFeatured: boolean
  tags: string[]
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'aof-year-one-impact-report-2025',
    category: 'IMPACT_STORY',
    categoryLabel: 'Impact Story',
    isFeatured: true,
    title: 'AOF Closes Inaugural Year With 3,200 Lives Impacted and ₦24.5M Raised',
    excerpt:
      'The Ayotunde Oso Foundation reflects on its first eight months of operation — 3,200 lives changed across 7 communities, ₦24.5M raised, and five active programme areas launched since founding in May 2025.',
    author: 'Ayotunde Oso',
    authorRole: 'Founder & Executive Director',
    readingTime: 7,
    publishedAt: '2026-01-15',
    coverImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    tags: ['Impact', 'Annual Review', '2025'],
  },
  {
    id: '2',
    slug: 'aof-founder-businessday-recognition',
    category: 'PRESS_RELEASE',
    categoryLabel: 'Press Release',
    isFeatured: false,
    title: "Ayotunde Oso Named Among Nigeria's Emerging Social Entrepreneurs by BusinessDay",
    excerpt:
      'BusinessDay has spotlighted AOF Founder Ayotunde Oso as one of Nigeria\'s most promising emerging nonprofit leaders, less than a year after launching the foundation in May 2025.',
    author: 'AOF Communications',
    authorRole: 'Press Office',
    readingTime: 3,
    publishedAt: '2026-02-05',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    tags: ['Award', 'Recognition', 'Media'],
  },
  {
    id: '3',
    slug: 'green-corps-tree-planting-drive',
    category: 'IMPACT_STORY',
    categoryLabel: 'Impact Story',
    isFeatured: false,
    title: 'AOF Plants 1,850 Trees Across Lagos and Ogun — Meet the Volunteers Who Did It',
    excerpt:
      "AOF's inaugural tree-planting drive concluded with 1,850 trees planted across seven communities, with 340 volunteers from corporate partners, university clubs, and local residents joining the effort.",
    author: 'Yetunde Bello',
    authorRole: 'Head of Communications',
    readingTime: 6,
    publishedAt: '2025-12-10',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tags: ['Environment', 'Youth', 'Trees'],
  },
  {
    id: '4',
    slug: 'emergency-relief-benue-floods',
    category: 'NEWS',
    categoryLabel: 'News',
    isFeatured: false,
    title: 'Emergency Response: AOF Deploys Relief to 360 Displaced Families After Benue Floods',
    excerpt:
      'Following severe flooding in Benue State in October 2025, AOF deployed its emergency response team within 72 hours, distributing food parcels, medications, and temporary shelter materials to 360 displaced persons across three communities.',
    author: 'David Mensah',
    authorRole: 'Director of Programmes',
    readingTime: 4,
    publishedAt: '2025-11-12',
    coverImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    tags: ['Emergency', 'Flood', 'Relief'],
  },
  {
    id: '5',
    slug: 'scholars-class-2025-launch',
    category: 'NEWS',
    categoryLabel: 'News',
    isFeatured: false,
    title: '12 AOF Scholars Begin University Studies — Class of 2025 Enrolment Complete',
    excerpt:
      'Twelve outstanding young Nigerians from underserved backgrounds have received AOF scholarships for the 2025/2026 academic year, covering tuition, accommodation, mentorship, and a digital learning device.',
    author: 'Chisom Eze',
    authorRole: 'Chief Operating Officer',
    readingTime: 5,
    publishedAt: '2025-10-02',
    coverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    tags: ['Education', 'Scholars', 'Scholarship'],
  },
  {
    id: '6',
    slug: 'mobile-clinic-ekiti-reach',
    category: 'IMPACT_STORY',
    categoryLabel: 'Impact Story',
    isFeatured: false,
    title: 'Inside the Mobile Clinic Reaching 6 Communities in Ekiti State',
    excerpt:
      "For many in rural Ekiti, AOF's mobile clinic is the only healthcare they access all year. Dr. Seun Adeyemi takes us behind the scenes of a week-long outreach that screened and treated 340 patients across six communities.",
    author: 'Dr. Seun Adeyemi',
    authorRole: 'Director of Healthcare',
    readingTime: 8,
    publishedAt: '2025-08-18',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    tags: ['Healthcare', 'Rural', 'Mobile Clinic'],
  },
]

export const ARTICLES_BY_SLUG: Record<string, Article> = Object.fromEntries(
  ARTICLES.map((a) => [a.slug, a])
)

export const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  IMPACT_STORY: 'bg-brand-100 text-brand-700',
  NEWS: 'bg-blue-100 text-blue-700',
  PRESS_RELEASE: 'bg-purple-100 text-purple-700',
  BLOG: 'bg-orange-100 text-orange-700',
  REPORT: 'bg-amber-100 text-amber-700',
}
