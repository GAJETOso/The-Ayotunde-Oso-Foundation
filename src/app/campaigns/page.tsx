'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const CAMPAIGNS = [
  {
    id: 'campaign-back-to-school-2025',
    title: 'Back to School 2025',
    category: 'Education',
    status: 'ACTIVE',
    goal: 15000000,
    raised: 9240000,
    donors: 847,
    daysLeft: 42,
    description: 'Send 3,000 children from low-income families back to school with complete supplies — uniforms, textbooks, bags, and stationery — for the 2025 academic year.',
    impact: '1 donation of ₦5,000 supplies one child for a full year.',
    image: '/campaigns/back-to-school.jpg',
    urgent: true,
  },
  {
    id: 'campaign-clean-water-2025',
    title: 'Clean Water for 10,000 Families',
    category: 'Environment',
    status: 'ACTIVE',
    goal: 25000000,
    raised: 18650000,
    donors: 1243,
    daysLeft: 67,
    description: 'Fund the construction of 8 boreholes and 4 solar-powered water treatment systems across 12 rural communities in northern Nigeria, ending reliance on unsafe water sources.',
    impact: 'Every ₦2,500 provides clean water for one family for a year.',
    image: '/campaigns/clean-water.jpg',
    urgent: false,
  },
  {
    id: 'campaign-medical-outreach-q3',
    title: 'Q3 Medical Outreach Drive',
    category: 'Healthcare',
    status: 'ACTIVE',
    goal: 8000000,
    raised: 5920000,
    donors: 512,
    daysLeft: 18,
    description: 'Fund three days of free medical consultations, medications, prenatal care, and health screenings for 5,000 people in underserved communities in Edo and Delta states.',
    impact: '₦1,600 covers the full cost of treating one patient.',
    image: '/campaigns/medical-outreach.jpg',
    urgent: true,
  },
  {
    id: 'campaign-mentor-match',
    title: 'Mentor 500 Young Nigerians',
    category: 'Mentorship',
    status: 'ACTIVE',
    goal: 12000000,
    raised: 4100000,
    donors: 289,
    daysLeft: 90,
    description: 'Match 500 ambitious young Nigerians aged 18–30 with experienced mentors across technology, medicine, business, and public service for 12-month mentorship journeys.',
    impact: '₦24,000 fully funds one young person\'s 12-month mentorship.',
    image: '/campaigns/mentor-match.jpg',
    urgent: false,
  },
  {
    id: 'campaign-emergency-fund',
    title: 'Emergency Relief Rapid Fund',
    category: 'Emergency',
    status: 'ACTIVE',
    goal: 20000000,
    raised: 20000000,
    donors: 1876,
    daysLeft: 0,
    description: 'Our standing emergency fund, continuously replenished to enable immediate response within 72 hours of any disaster. Your contribution keeps us ready at all times.',
    impact: 'Every naira contributed goes directly to disaster response.',
    image: '/campaigns/emergency.jpg',
    urgent: false,
  },
  {
    id: 'campaign-completed-trees',
    title: 'Plant 1 Million Trees',
    category: 'Environment',
    status: 'COMPLETED',
    goal: 30000000,
    raised: 31450000,
    donors: 3421,
    daysLeft: 0,
    description: 'We set out to plant one million trees across Nigeria. With the extraordinary generosity of over 3,400 donors, we exceeded our goal and planted 1,200,000 trees.',
    impact: 'Goal exceeded by 120%. 1.2 million trees planted.',
    image: '/campaigns/trees.jpg',
    urgent: false,
  },
];

const CATEGORIES = ['All', 'Education', 'Healthcare', 'Environment', 'Emergency', 'Mentorship'];

function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}K`;
  return `₦${amount.toLocaleString()}`;
}

export default function CampaignsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === activeCategory);

  const totalRaised = CAMPAIGNS.reduce((sum, c) => sum + c.raised, 0);
  const totalDonors = CAMPAIGNS.reduce((sum, c) => sum + c.donors, 0);

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Fundraising Campaigns"
        title="Every Campaign, A Life Changed"
        subtitle="Our campaigns are time-bound, goal-driven fundraising efforts that mobilize communities around specific needs. Join thousands of donors making a measurable difference."
        gradient="gold"
        breadcrumbs={[{ label: 'Campaigns', href: '/campaigns' }]}
      />

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-green">{CAMPAIGNS.filter(c => c.status === 'ACTIVE').length}</div>
              <div className="text-sm text-gray-600 mt-1">Active Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">{formatCurrency(totalRaised)}</div>
              <div className="text-sm text-gray-600 mt-1">Total Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">{totalDonors.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-1">Total Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">100%</div>
              <div className="text-sm text-gray-600 mt-1">Fund Utilization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-cream-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-green text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((campaign) => {
              const pct = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);
              return (
                <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-brand-green to-brand-gold" />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant={campaign.status === 'COMPLETED' ? 'secondary' : 'default'} className="text-xs">
                        {campaign.status === 'COMPLETED' ? 'Completed' : `${campaign.daysLeft} days left`}
                      </Badge>
                      {campaign.urgent && campaign.status === 'ACTIVE' && (
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Urgent</span>
                      )}
                    </div>

                    <Badge variant="outline" className="text-xs w-fit mb-3">{campaign.category}</Badge>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{campaign.description}</p>

                    <div className="bg-brand-green/5 rounded-lg p-3 mb-4">
                      <p className="text-xs text-brand-green font-medium">{campaign.impact}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-gray-900">{formatCurrency(campaign.raised)} raised</span>
                        <span className="text-gray-500">{pct}%</span>
                      </div>
                      <Progress value={pct} color={pct >= 100 ? 'success' : 'brand'} className="mb-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Goal: {formatCurrency(campaign.goal)}</span>
                        <span>{campaign.donors.toLocaleString()} donors</span>
                      </div>
                    </div>

                    {campaign.status === 'ACTIVE' ? (
                      <Button variant="default" className="w-full" asChild>
                        <Link href={`/donate?campaign=${campaign.id}`}>Donate to This Campaign</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Campaign Completed
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start Own Campaign CTA */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Fundraise for AOF</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Create your own fundraising page for a birthday, in memory of a loved one, or just because you care. Every naira raised goes directly to programs.</p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact?subject=fundraising">Start Fundraising</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
