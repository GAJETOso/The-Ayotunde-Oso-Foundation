import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Press & Media | The Ayotunde Oso Foundation',
  description: 'Press releases, media coverage, and press kit resources for journalists and media professionals covering The Ayotunde Oso Foundation.',
};

const PRESS_RELEASES = [
  {
    title: 'AOF Launches ₦85 Million Edu-Connect Digital Learning Initiative Across Three States',
    date: '2025-06-15',
    excerpt: 'The Ayotunde Oso Foundation announces the expansion of its digital education program to 15 new community learning centers in Lagos, Ogun, and Oyo states, targeting 4,200 students from underserved communities.',
    category: 'Programs',
  },
  {
    title: 'AOF and Global Health Initiative Partner to Expand Mobile Healthcare in Delta Region',
    date: '2025-05-28',
    excerpt: 'A new partnership between AOF and the Global Health Initiative will deploy three additional mobile medical clinics, extending healthcare access to an estimated 25,000 people in underserved riverine communities.',
    category: 'Partnerships',
  },
  {
    title: 'AOF 2024 Annual Report: 127,000 New Beneficiaries, ₦2.1B Program Spend',
    date: '2025-04-10',
    excerpt: 'AOF’s 2024 Annual Report reveals another year of significant growth, with the foundation reaching 127,000 new beneficiaries and deploying over ₦2.1 billion in programs across five areas.',
    category: 'Reports',
  },
  {
    title: 'AOF Completes Anambra Flood Relief Response: 6,800 People Reached',
    date: '2025-01-20',
    excerpt: 'Following the devastating October 2024 floods, AOF has completed its emergency response, distributing relief materials to 6,800 displaced persons and launching a community rebuilding fund.',
    category: 'Emergency',
  },
  {
    title: 'Founder Ayotunde Oso Named Among Nigeria’s 40 Under 40 Social Entrepreneurs',
    date: '2025-03-05',
    excerpt: 'AOF Founder and Executive Director Ayotunde Oso has been recognized in the prestigious Nigeria 40 Under 40 list in the Social Impact category, highlighting her decade-long commitment to community transformation.',
    category: 'Awards',
  },
  {
    title: 'AOF Plant 1 Million Trees Campaign Surpasses Goal: 1.2 Million Trees Planted',
    date: '2024-12-18',
    excerpt: 'AOF’s landmark environmental campaign has concluded with 1.2 million trees planted across 18 states, exceeding the original target by 20% thanks to contributions from 3,400 donors.',
    category: 'Programs',
  },
];

const MEDIA_MENTIONS = [
  { outlet: 'Punch Nigeria', title: 'How AOF is Reimagining Community Development in Nigeria', date: '2025-05-12', type: 'Feature' },
  { outlet: 'TechCabal', title: 'AOF’s Digital Learning Centers: Closing the Digital Divide One Community at a Time', date: '2025-04-22', type: 'Feature' },
  { outlet: 'Vanguard', title: 'AOF Emergency Team Among First Responders to Anambra Floods', date: '2024-10-30', type: 'News' },
  { outlet: 'BusinessDay', title: 'Nonprofit Sector Report: AOF Among Top 10 Impact Organizations 2024', date: '2025-03-18', type: 'Report' },
  { outlet: 'Guardian Nigeria', title: 'Interview: Ayotunde Oso on Building a Sustainable Humanitarian Organization', date: '2025-02-14', type: 'Interview' },
  { outlet: 'The Cable', title: 'AOF’s Green Schools Programme Reaches 28,000 Students Nationwide', date: '2025-01-08', type: 'News' },
];

const MEDIA_CONTACTS = [
  {
    name: 'Communications Team',
    email: 'press@ayotundeosofouncation.org',
    role: 'General Media Inquiries',
    responseTime: '24 hours on business days',
  },
  {
    name: 'Partnerships Team',
    email: 'partnerships@ayotundeosofouncation.org',
    role: 'Corporate & Partner Inquiries',
    responseTime: '48 hours',
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Press & Media"
        title="News from the Field"
        subtitle="Press releases, media coverage, and resources for journalists. We are committed to transparency and welcome accurate, fair coverage of our work."
        gradient="green"
        breadcrumbs={[{ label: 'Press', href: '/press' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Press Releases */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Press Releases</h2>
              <div className="space-y-6">
                {PRESS_RELEASES.map((pr) => (
                  <div key={pr.title} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{pr.category}</Badge>
                      <span className="text-xs text-gray-400">{new Date(pr.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-brand-green transition-colors cursor-pointer">{pr.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pr.excerpt}</p>
                    <button className="text-sm text-brand-green font-medium mt-3 hover:underline">Read Full Release →</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Media Contact */}
              <div className="bg-cream-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Media Contacts</h3>
                {MEDIA_CONTACTS.map((contact) => (
                  <div key={contact.email} className="mb-4 last:mb-0">
                    <div className="font-medium text-gray-900 text-sm">{contact.role}</div>
                    <a href={`mailto:${contact.email}`} className="text-brand-green text-sm hover:underline">{contact.email}</a>
                    <div className="text-xs text-gray-500 mt-1">Response: {contact.responseTime}</div>
                  </div>
                ))}
              </div>

              {/* Press Kit */}
              <div className="bg-brand-green/5 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Press Kit</h3>
                <p className="text-sm text-gray-600 mb-4">Download logos, photos, founder bio, and organizational fact sheet.</p>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <a href="/resources/aof-press-kit.zip" download>Download Press Kit</a>
                </Button>
              </div>

              {/* In The News */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">In The News</h3>
                <div className="space-y-3">
                  {MEDIA_MENTIONS.map((m) => (
                    <div key={m.title} className="border-l-2 border-brand-green/30 pl-3">
                      <div className="text-xs font-semibold text-brand-green">{m.outlet}</div>
                      <div className="text-sm text-gray-700 font-medium leading-tight mt-0.5">{m.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{m.type} · {new Date(m.date).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
