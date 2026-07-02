import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Clock, ArrowRight, User } from 'lucide-react'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'News & Stories | The Ayotunde Oso Foundation',
  description: 'Impact stories, press releases, programme updates, and blog posts from The Ayotunde Oso Foundation.',
}

const ARTICLES = [
  {
    slug: 'aof-year-one-impact-report-2025',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'AOF Closes Inaugural Year With 3,200 Lives Impacted and ₦24.5M Raised',
    excerpt: 'The Ayotunde Oso Foundation reflects on its first eight months of operation — 3,200 lives changed across 7 communities, ₦24.5M raised, and five active programme areas launched since founding in May 2025.',
    author: 'Ayotunde Oso', authorRole: 'Founder & Executive Director',
    readingTime: 7, publishedAt: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    isFeatured: true,
    tags: ['Impact', 'Annual Review', '2025'],
  },
  {
    slug: 'scholars-class-2025-launch',
    category: 'NEWS', categoryLabel: 'News',
    title: '12 AOF Scholars Begin University Studies — Class of 2025 Enrolment Complete',
    excerpt: 'Twelve outstanding young Nigerians from underserved backgrounds have received AOF scholarships for the 2025/2026 academic year, covering tuition, accommodation, mentorship, and a digital learning device.',
    author: 'Chisom Eze', authorRole: 'Chief Operating Officer',
    readingTime: 5, publishedAt: 'October 2, 2025',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    isFeatured: false,
    tags: ['Education', 'Scholars', 'Scholarship'],
  },
  {
    slug: 'mobile-clinic-ekiti-reach',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'Inside the Mobile Clinic Reaching 6 Communities in Ekiti State',
    excerpt: 'For many in rural Ekiti, AOF\'s mobile clinic is the only healthcare they access all year. Dr. Seun Adeyemi takes us behind the scenes of a week-long outreach that screened and treated 340 patients across six communities.',
    author: 'Dr. Seun Adeyemi', authorRole: 'Director of Healthcare',
    readingTime: 8, publishedAt: 'August 18, 2025',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    isFeatured: false,
    tags: ['Healthcare', 'Rural', 'Mobile Clinic'],
  },
  {
    slug: 'green-corps-tree-planting-drive',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'AOF Plants 1,850 Trees Across Lagos and Ogun — Meet the Volunteers Who Did It',
    excerpt: 'AOF\'s inaugural tree-planting drive concluded with 1,850 trees planted across seven communities, with 340 volunteers from corporate partners, university clubs, and local residents joining the effort.',
    author: 'Yetunde Bello', authorRole: 'Head of Communications',
    readingTime: 6, publishedAt: 'December 10, 2025',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    isFeatured: false,
    tags: ['Environment', 'Youth', 'Trees'],
  },
  {
    slug: 'aof-founder-businessday-recognition',
    category: 'PRESS_RELEASE', categoryLabel: 'Press Release',
    title: 'Ayotunde Oso Named Among Nigeria\'s Emerging Social Entrepreneurs by BusinessDay',
    excerpt: 'BusinessDay has spotlighted AOF Founder Ayotunde Oso as one of Nigeria\'s most promising emerging nonprofit leaders, less than a year after launching the foundation in May 2025.',
    author: 'AOF Communications', authorRole: 'Press Office',
    readingTime: 3, publishedAt: 'February 5, 2026',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    isFeatured: false,
    tags: ['Award', 'Recognition', 'Media'],
  },
  {
    slug: 'emergency-relief-benue-floods',
    category: 'NEWS', categoryLabel: 'News',
    title: 'Emergency Response: AOF Deploys Relief to 360 Displaced Families After Benue Floods',
    excerpt: 'Following severe flooding in Benue State in October 2025, AOF deployed its emergency response team within 72 hours, distributing food parcels, medications, and temporary shelter materials to 360 displaced persons across three communities.',
    author: 'David Mensah', authorRole: 'Director of Programmes',
    readingTime: 4, publishedAt: 'November 12, 2025',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    isFeatured: false,
    tags: ['Emergency', 'Flood', 'Relief'],
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  IMPACT_STORY: 'bg-brand-100 text-brand-700',
  NEWS: 'bg-blue-100 text-blue-700',
  PRESS_RELEASE: 'bg-purple-100 text-purple-700',
  BLOG: 'bg-orange-100 text-orange-700',
  REPORT: 'bg-gold-100 text-gold-700',
}

export default function NewsPage() {
  const featured = ARTICLES.find(a => a.isFeatured)!
  const rest = ARTICLES.filter(a => !a.isFeatured)

  return (
    <main id="main-content">
      <PageHero
        title="News & Stories"
        subtitle="Impact stories, programme updates, press releases, and voices from the communities we serve."
        eyebrow="Media"
        breadcrumbs={[{ label: 'News', href: '/news' }]}
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          {/* Featured */}
          <FadeUp className="mb-12">
            <Badge variant="brand" className="mb-4">Latest Story</Badge>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-card">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${CATEGORY_COLORS[featured.category]}`}>
                      {featured.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="heading-2 mb-4 line-clamp-3">{featured.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                    <span className="flex items-center gap-1.5"><User className="size-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{featured.readingTime} min read</span>
                    <span>{featured.publishedAt}</span>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={`/news/${featured.slug}`}>Read Story <ArrowRight className="size-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </FadeUp>

          {/* Grid */}
          <SlideIn from="bottom" delay={0.1} className="mb-6">
            <h2 className="heading-2">More Stories</h2>
          </SlideIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(article => (
              <StaggerItem key={article.slug} direction="scale">
                <Card hover className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative h-52">
                    <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${CATEGORY_COLORS[article.category]}`}>
                        {article.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-base mb-3 line-clamp-2 flex-1">{article.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{article.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3" />{article.readingTime} min</span>
                    </div>
                    <Link href={`/news/${article.slug}`} className="mt-4 text-sm font-semibold text-brand-700 hover:text-brand-600 dark:text-brand-400 flex items-center gap-1">
                      Read More <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
