import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Media Gallery | The Ayotunde Oso Foundation',
  description: 'Photos and videos from AOF programs, community events, and field work across Nigeria.',
};

const MEDIA_CATEGORIES = ['All', 'Education', 'Healthcare', 'Environment', 'Emergency', 'Events', 'Community'];

const GALLERY_ITEMS = [
  { id: 1, category: 'Education', title: 'Digital Learning Center Launch — Ajegunle, Lagos', type: 'photo', date: '2025-03-15', featured: true },
  { id: 2, category: 'Healthcare', title: 'Mobile Clinic Day — Warri, Delta State', type: 'photo', date: '2025-04-20', featured: true },
  { id: 3, category: 'Environment', title: 'Community Tree Planting — Kano State', type: 'photo', date: '2025-02-10', featured: true },
  { id: 4, category: 'Emergency', title: 'Flood Relief Distribution — Anambra 2024', type: 'photo', date: '2024-10-28', featured: false },
  { id: 5, category: 'Education', title: 'Scholarship Award Ceremony 2025', type: 'photo', date: '2025-01-20', featured: false },
  { id: 6, category: 'Community', title: 'AOF Annual Community Forum 2024', type: 'photo', date: '2024-11-15', featured: false },
  { id: 7, category: 'Healthcare', title: 'Maternal Health Screening — Bayelsa State', type: 'photo', date: '2025-05-05', featured: false },
  { id: 8, category: 'Environment', title: 'Clean Water Borehole Commissioning — Sokoto', type: 'photo', date: '2024-12-01', featured: false },
  { id: 9, category: 'Events', title: 'AOF Gala Dinner 2024 Highlights', type: 'video', date: '2024-11-30', featured: true },
  { id: 10, category: 'Education', title: 'Student Stories: Digital Learning Beneficiaries', type: 'video', date: '2025-04-01', featured: false },
  { id: 11, category: 'Community', title: 'Women Entrepreneur Cohort 3 Graduation', type: 'photo', date: '2025-05-22', featured: false },
  { id: 12, category: 'Healthcare', title: 'Children’s Vaccination Campaign 2025', type: 'photo', date: '2025-03-28', featured: false },
];

const CATEGORY_COLORS: Record<string, string> = {
  Education: 'bg-blue-100 text-blue-700',
  Healthcare: 'bg-red-100 text-red-700',
  Environment: 'bg-green-100 text-green-700',
  Emergency: 'bg-orange-100 text-orange-700',
  Events: 'bg-purple-100 text-purple-700',
  Community: 'bg-teal-100 text-teal-700',
};

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Media Gallery"
        title="Stories in Pictures"
        subtitle="A visual record of AOF’s work across communities. Every photo represents a life touched, a community strengthened, and hope realized."
        gradient="green"
        breadcrumbs={[{ label: 'Media', href: '/media' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {MEDIA_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-gray-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Row */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Featured</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {GALLERY_ITEMS.filter(i => i.featured).map((item) => (
                <div key={item.id} className="group relative aspect-square bg-gradient-to-br from-brand-green/20 to-brand-green/5 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="text-4xl mb-2">{item.type === 'video' ? '🎥' : '📷'}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full mb-2 ${CATEGORY_COLORS[item.category] || 'bg-gray-100 text-gray-600'}`}>{item.category}</span>
                    <p className="text-xs text-gray-700 text-center font-medium leading-tight">{item.title}</p>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                      <span className="text-white text-xs">▶</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* All Media Grid */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">All Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <div className="text-3xl mb-2">{item.type === 'video' ? '🎥' : '📷'}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full mb-1 ${CATEGORY_COLORS[item.category] || 'bg-gray-100 text-gray-600'}`}>{item.category}</span>
                  <p className="text-xs text-gray-600 text-center leading-tight">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(item.date).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">Load More Media</Button>
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-12 bg-cream-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Journalist or media professional? Download our full press kit including high-resolution photos.</p>
          <Button variant="default" asChild>
            <a href="/resources/aof-press-kit.zip" download>Download Press Kit</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
