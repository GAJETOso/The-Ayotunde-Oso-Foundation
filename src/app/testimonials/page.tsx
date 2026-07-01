import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials | The Ayotunde Oso Foundation',
  description: 'Hear directly from the individuals, families, and communities whose lives have been transformed by the work of The Ayotunde Oso Foundation.',
};

const FEATURED_TESTIMONIALS = [
  {
    name: 'Blessing Okafor',
    role: 'Scholar & University Student',
    program: 'Education',
    location: 'Enugu State',
    quote: 'I grew up in a home where my parents could barely afford two meals a day. The idea of university felt like a dream for other people. When AOF gave me a scholarship, they did not just pay my fees — they sent me to school with a mentor, a laptop, and the belief that I belonged there. Today I am studying Computer Science at University of Nigeria Nsukka, and I am on the Dean’s list. AOF did not just change my trajectory — they changed how I see myself.',
    impact: 'First in family to attend university',
    year: '2024',
    featured: true,
  },
  {
    name: 'Fatima Aliyu',
    role: 'Mother & Small Business Owner',
    program: 'Healthcare',
    location: 'Kebbi State',
    quote: 'My daughter had malaria and we had no money for the clinic. The AOF mobile health team came to our village and treated her for free — the same day. She was back in school within a week. In my village, children have died from things that were treatable. AOF treats our lives as if they matter as much as anyone else’s. They do not make us feel like charity. They make us feel like people.',
    impact: 'Daughter’s malaria treated, now in school',
    year: '2024',
    featured: true,
  },
  {
    name: 'Emmanuel Chukwu',
    role: 'Tech Entrepreneur',
    program: 'Mentorship',
    location: 'Lagos State',
    quote: 'I had the idea but I had no direction, no network, no capital. My AOF mentor was a tech founder who had built two companies. He met with me every two weeks for a year. He reviewed my business plan, connected me to my first investor, and told me hard truths that my friends would not. My startup now has 11 employees and serves 4,000 customers. I owe that to the mentorship programme.',
    impact: 'Startup launched with 11 employees',
    year: '2024',
    featured: true,
  },
];

const ALL_TESTIMONIALS = [
  {
    name: 'Adaeze Nwosu',
    role: 'Primary School Teacher',
    program: 'Education',
    location: 'Imo State',
    quote: 'The AOF digital learning center in our community changed how I teach. For the first time my students can see the world beyond our village. Their curiosity has exploded. I have never seen them more engaged.',
    year: '2024',
  },
  {
    name: 'Ibrahim Musa',
    role: 'Community Leader',
    program: 'Environment',
    location: 'Kano State',
    quote: 'When AOF came to plant trees with our youth, some elders were skeptical. Now we have 40,000 trees growing and the young people who planted them feel ownership of our environment. That pride is the most valuable thing.',
    year: '2023',
  },
  {
    name: 'Ngozi Eze',
    role: 'Flood Survivor',
    program: 'Emergency Relief',
    location: 'Anambra State',
    quote: 'We lost everything to the floods — our home, our belongings, our sense of security. AOF arrived within two days with food, blankets, and medical help. But more than that, they stayed. They helped us rebuild. That is not something I will ever forget.',
    year: '2024',
  },
  {
    name: 'Chisom Ikenna',
    role: 'Nursing Student',
    program: 'Education',
    location: 'Anambra State',
    quote: 'My father is a farmer. Medical school was impossible on farming income. The AOF health scholarship made it possible. I want to give back by becoming a doctor in my own community one day — inspired by what I have received.',
    year: '2023',
  },
  {
    name: 'Yusuf Abdullahi',
    role: 'Youth Corps Member',
    program: 'Mentorship',
    location: 'Kaduna State',
    quote: 'I was directionless after my NYSC. The mentorship program connected me with a civil servant who helped me understand public service and guided me into a career in local government. I now work in community development, directly helping people.',
    year: '2024',
  },
  {
    name: 'Amaka Obi',
    role: 'Market Trader & Mother of 4',
    program: 'Healthcare',
    location: 'Enugu State',
    quote: 'I had not seen a doctor in seven years. When the AOF health outreach came I did not believe the service was free. They screened me for hypertension, diabetes, and breast cancer. They found my hypertension early. That early detection may have saved my life.',
    year: '2024',
  },
];

const PROGRAM_COLORS: Record<string, string> = {
  Education: 'bg-blue-100 text-blue-700',
  Healthcare: 'bg-red-100 text-red-700',
  Mentorship: 'bg-purple-100 text-purple-700',
  Environment: 'bg-green-100 text-green-700',
  'Emergency Relief': 'bg-orange-100 text-orange-700',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Stories of Impact"
        title="Voices from Our Communities"
        subtitle="Numbers tell part of the story. The rest is told by the people whose lives have changed. These are their words — unscripted, unfiltered, and deeply human."
        gradient="green"
        breadcrumbs={[{ label: 'Testimonials', href: '/testimonials' }]}
      />

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-gray-600 max-w-xl mx-auto">These are among the most powerful testimonials we have received from individuals whose lives have been most profoundly changed.</p>
          </div>
          <div className="space-y-12">
            {FEATURED_TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`grid md:grid-cols-5 gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:col-span-1 flex flex-col items-center text-center ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-2xl mb-3">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 mb-2">{t.role}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                  <span className={`mt-3 text-xs px-2 py-0.5 rounded-full ${PROGRAM_COLORS[t.program] || 'bg-gray-100 text-gray-600'}`}>{t.program}</span>
                </div>
                <div className={`md:col-span-4 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-cream-50 rounded-2xl p-8 relative">
                    <div className="text-6xl text-brand-green/20 font-serif leading-none mb-4">&ldquo;</div>
                    <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">{t.quote}</blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-gray-200" />
                      <span className="text-sm font-medium text-brand-green">{t.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">More Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl text-brand-green/30 font-serif leading-none mb-3">&ldquo;</div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic mb-5">{t.quote}</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm flex-shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role} · {t.location}</div>
                  </div>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${PROGRAM_COLORS[t.program] || 'bg-gray-100 text-gray-600'}`}>{t.program}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Story CTA */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">If AOF has impacted your life or community, we would love to hear from you. Your story could inspire others to give, volunteer, or seek help.</p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact?subject=testimonial">Share Your Story</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
