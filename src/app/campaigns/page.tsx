'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedProgress } from '@/components/ui/animations'

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
    description: "Match 500 ambitious young Nigerians aged 18–30 with experienced mentors across technology, medicine, business, and public service for 12-month mentorship journeys.",
    impact: "₦24,000 fully funds one young person's 12-month mentorship.",
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
    urgent: false,
  },
]

const CATEGORIES = ['All', 'Education', 'Healthcare', 'Environment', 'Emergency', 'Mentorship']

function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}K`
  return `₦${amount.toLocaleString()}`
}

export default function CampaignsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === activeCategory)

  const totalRaised = CAMPAIGNS.reduce((sum, c) => sum + c.raised, 0)
  const totalDonors = CAMPAIGNS.reduce((sum, c) => sum + c.donors, 0)

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Fundraising Campaigns"
        title="Every Campaign, A Life Changed"
        subtitle="Our campaigns are time-bound, goal-driven fundraising efforts that mobilize communities around specific needs. Join thousands of donors making a measurable difference."
        gradient="gold"
        breadcrumbs={[{ label: 'Campaigns', href: '/campaigns' }]}
      />

      {/* Stats */}
      <section className="section border-b border-neutral-100 dark:border-neutral-800">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-700 dark:text-brand-400">
                {CAMPAIGNS.filter(c => c.status === 'ACTIVE').length}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Active Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700 dark:text-brand-400">{formatCurrency(totalRaised)}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Total Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700 dark:text-brand-400">{totalDonors.toLocaleString()}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Total Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-700 dark:text-brand-400">100%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Fund Utilization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-cream-50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-800">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-700 text-white'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="section">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((campaign) => {
              const pct = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100)
              return (
                <Card key={campaign.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col">
                  <div className="h-1.5 bg-gradient-to-r from-brand-600 to-gold-500" />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant={campaign.status === 'COMPLETED' ? 'secondary' : 'default'} className="text-xs">
                        {campaign.status === 'COMPLETED' ? 'Completed' : `${campaign.daysLeft} days left`}
                      </Badge>
                      {campaign.urgent && campaign.status === 'ACTIVE' && (
                        <span className="text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>

                    <Badge variant="outline" className="text-xs w-fit mb-3">{campaign.category}</Badge>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2">{campaign.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-1 leading-relaxed">{campaign.description}</p>

                    <div className="bg-brand-50 dark:bg-brand-900/20 rounded-lg p-3 mb-4">
                      <p className="text-xs text-brand-700 dark:text-brand-400 font-medium">{campaign.impact}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {formatCurrency(campaign.raised)} raised
                        </span>
                        <span className="text-neutral-500">{pct}%</span>
                      </div>
                      <AnimatedProgress
                        value={pct}
                        color={pct >= 100 ? 'success' : 'brand'}
                        size="sm"
                      />
                      <div className="flex justify-between text-xs text-neutral-500 mt-2">
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
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-brand-700">
        <div className="container-xl text-center">
          <h2 className="heading-2 text-white mb-4">Fundraise for AOF</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Create your own fundraising page for a birthday, in memory of a loved one, or just because you care. Every naira raised goes directly to programs.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact?subject=fundraising">Start Fundraising</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
