import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Clock, ArrowRight, User } from 'lucide-react'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { ARTICLES, CATEGORY_COLORS } from '@/data/articles'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'News & Stories | The Ayotunde Oso Foundation',
  description: 'Impact stories, press releases, programme updates, and blog posts from The Ayotunde Oso Foundation.',
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
                  <Image src={featured.coverImage} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
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
                    <span>{formatDate(featured.publishedAt, 'medium')}</span>
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
                    <Image src={article.coverImage} alt={article.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
                      <span>{formatDate(article.publishedAt, 'short')}</span>
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
