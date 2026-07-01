import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Clock, ArrowRight, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Stories | The Ayotunde Oso Foundation',
  description: 'Impact stories, press releases, programme updates, and blog posts from The Ayotunde Oso Foundation.',
}

const ARTICLES = [
  {
    slug: 'aof-reaches-127000-lives-2024',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'AOF Crosses 127,000 Lives Impacted — A Year of Record-Breaking Growth',
    excerpt: 'As 2024 draws to a close, The Ayotunde Oso Foundation reflects on its most impactful year yet — 127,000 lives changed across 8 countries, $4.2M deployed, and a growing team ready for 2025.',
    author: 'Ayotunde Oso', authorRole: 'Founder & Executive Director',
    readingTime: 7, publishedAt: 'December 18, 2024',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    isFeatured: true,
    tags: ['Impact', 'Annual Review', '2024'],
  },
  {
    slug: 'scholars-class-2024-graduation',
    category: 'NEWS', categoryLabel: 'News',
    title: '47 AOF Scholars Graduate in Class of 2024 — 100% Employment Rate Within 6 Months',
    excerpt: 'Every single member of the AOF Scholars Class of 2024 secured meaningful employment or postgraduate placement within six months of graduation. Here are their stories.',
    author: 'Chisom Eze', authorRole: 'Chief Operating Officer',
    readingTime: 5, publishedAt: 'November 30, 2024',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    isFeatured: false,
    tags: ['Education', 'Scholars', 'Graduation'],
  },
  {
    slug: 'mobile-clinic-ekiti-reach',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'Inside the Mobile Clinic Reaching 8 Remote Communities in Ekiti State',
    excerpt: 'For many in rural Ekiti, our mobile clinic is the only healthcare they access all year. Dr. Seun Adeyemi takes us behind the scenes of a week-long outreach that treated 1,200 patients.',
    author: 'Dr. Seun Adeyemi', authorRole: 'Director of Healthcare',
    readingTime: 8, publishedAt: 'October 14, 2024',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    isFeatured: false,
    tags: ['Healthcare', 'Rural', 'Mobile Clinic'],
  },
  {
    slug: 'green-corps-250k-trees',
    category: 'IMPACT_STORY', categoryLabel: 'Impact Story',
    title: 'The Youth Green Corps Just Planted Its 250,000th Tree. Meet the Champions Who Did It.',
    excerpt: 'In three years, AOF\'s Youth Green Corps has grown from 20 volunteers to 5,000 climate champions. The milestone 250,000th tree was planted by 17-year-old Adeola in Osun State.',
    author: 'Yetunde Bello', authorRole: 'Head of Communications',
    readingTime: 6, publishedAt: 'September 8, 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    isFeatured: false,
    tags: ['Environment', 'Youth', 'Trees'],
  },
  {
    slug: 'aof-ashoka-fellowship',
    category: 'PRESS_RELEASE', categoryLabel: 'Press Release',
    title: 'AOF Founder Ayotunde Oso Named Ashoka Fellow 2024',
    excerpt: 'The Ashoka Foundation has named Ayotunde Oso as an Ashoka Fellow — recognising his innovative approach to systemic change through integrated community development.',
    author: 'AOF Communications', authorRole: 'Press Office',
    readingTime: 3, publishedAt: 'August 22, 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    isFeatured: false,
    tags: ['Award', 'Ashoka', 'Recognition'],
  },
  {
    slug: 'emergency-relief-flood-kogi',
    category: 'NEWS', categoryLabel: 'News',
    title: 'Emergency Response: AOF Deploys Relief to 4,200 Flood-Affected Families in Kogi',
    excerpt: 'Following devastating floods in Kogi State, AOF activated its emergency protocol within 48 hours — distributing food, clean water, medications, and temporary shelter materials.',
    author: 'David Mensah', authorRole: 'Director of Programmes',
    readingTime: 4, publishedAt: 'July 31, 2024',
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
          <div className="mb-12">
            <Badge variant="brand" className="mb-4">Latest Story</Badge>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" />
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
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(article => (
              <Card key={article.slug} hover className="overflow-hidden flex flex-col">
                <div className="relative h-52">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
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
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
