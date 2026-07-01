import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// In production, fetch from database
const ARTICLES: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: number;
  excerpt: string;
  content: string;
  tags: string[];
}> = {
  'edu-connect-launch-2025': {
    title: 'AOF Launches Digital Learning Centers Across Three States',
    category: 'NEWS',
    date: '2025-06-15',
    author: 'AOF Communications Team',
    readingTime: 4,
    excerpt: 'The Edu-Connect initiative opens 15 new digital learning centers bringing quality education technology to 4,200 students in underserved communities.',
    content: `
      <p>The Ayotunde Oso Foundation (AOF) today officially launched the Edu-Connect Digital Learning Initiative, opening the doors of 15 state-of-the-art digital learning centers across Lagos, Ogun, and Oyo states.</p>
      
      <p>The centers, equipped with computers, high-speed internet, educational software, and trained facilitators, will serve an estimated 4,200 students from underserved communities in their first year of operation.</p>
      
      <h2>What the Centers Offer</h2>
      
      <p>Each Edu-Connect center provides:</p>
      <ul>
        <li>30 computer workstations with internet connectivity</li>
        <li>Curated digital curriculum aligned with the Nigerian educational standard</li>
        <li>After-school and weekend learning programs for students aged 8–22</li>
        <li>Adult digital literacy classes on weekday evenings</li>
        <li>A trained center facilitator resident in each community</li>
      </ul>
      
      <h2>Community Impact</h2>
      
      <p>&ldquo;We have children who are brilliant, curious, and full of potential &mdash; but who have never seen a computer before today,&rdquo; said Aisha Bello, AOF&apos;s Education Program Lead, speaking at the launch ceremony in Ajegunle, Lagos. &ldquo;That changes now.&rdquo;</p>
      
      <p>The initiative is funded through a combination of donor contributions, a partnership with EduForward Foundation, and a grant from Lagos State Government&apos;s Digital Lagos program.</p>
      
      <p>Early enrollment data shows that 72% of registered students in the first cohort are girls, reflecting AOF&apos;s deliberate focus on closing the gender digital divide.</p>
      
      <h2>What&apos;s Next</h2>
      
      <p>AOF plans to expand Edu-Connect to 10 additional communities in 2026, with a target of reaching 10,000 students by the end of that year. The organization is actively seeking partners and funders to support this expansion.</p>
    `,
    tags: ['education', 'digital', 'youth', 'lagos', 'innovation'],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: 'Article Not Found | AOF' };
  return {
    title: `${article.title} | AOF News`,
    description: article.excerpt,
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  NEWS: 'bg-blue-100 text-blue-700',
  STORY: 'bg-purple-100 text-purple-700',
  REPORT: 'bg-green-100 text-green-700',
  ANNOUNCEMENT: 'bg-amber-100 text-amber-700',
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) notFound();

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
        gradient="green"
        breadcrumbs={[
          { label: 'News', href: '/news' },
          { label: article.title, href: `/news/${slug}` },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {/* Article */}
            <article className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8 text-sm text-gray-500">
                <Badge variant="outline" className={CATEGORY_COLORS[article.category]}>{article.category}</Badge>
                <span>{new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>·</span>
                <span>{article.readingTime} min read</span>
                <span>·</span>
                <span>By {article.author}</span>
              </div>
              <div
                className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-brand-green"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="mt-10 pt-6 border-t flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">#{tag}</Badge>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-cream-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4">Support Our Work</h3>
                <p className="text-sm text-gray-600 mb-4">Stories like this are made possible by generous donors. Join them today.</p>
                <Button variant="default" className="w-full" asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
              <div className="bg-cream-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4">Get Involved</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/volunteer">Volunteer</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <Button variant="outline" asChild>
            <Link href="/news">&larr; Back to News</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
