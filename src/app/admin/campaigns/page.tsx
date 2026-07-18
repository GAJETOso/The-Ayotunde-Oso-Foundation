import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Campaigns | AOF Admin' }

const CAMPAIGNS = [
  { id: 'CMP-001', name: 'Ramadan Health Drive 2026', goal: 5000000, raised: 3720000, donors: 148, status: 'ACTIVE', ends: '2026-04-10' },
  { id: 'CMP-002', name: 'Back-to-School Fund 2026', goal: 10000000, raised: 10000000, donors: 312, status: 'COMPLETED', ends: '2026-08-31' },
  { id: 'CMP-003', name: 'Green Ibadan Crowdfund', goal: 3000000, raised: 820000, donors: 47, status: 'ACTIVE', ends: '2026-09-20' },
  { id: 'CMP-004', name: 'AOF Founding Donors Circle', goal: 20000000, raised: 14500000, donors: 29, status: 'ACTIVE', ends: '2026-12-31' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'brand'> = {
  ACTIVE:    'brand',
  COMPLETED: 'success',
  DRAFT:     'warning',
}

export default function AdminCampaignsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Campaigns</h1>
          <p className="text-gray-400 text-sm mt-1">{CAMPAIGNS.length} campaigns · {CAMPAIGNS.filter(c => c.status === 'ACTIVE').length} active</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/admin/campaigns/new">+ New Campaign</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {CAMPAIGNS.map((c) => {
          const pct = Math.min(100, Math.round((c.raised / c.goal) * 100))
          return (
            <div key={c.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-white">{c.name}</span>
                    <Badge variant={STATUS_COLOR[c.status]}>{c.status}</Badge>
                  </div>
                  <div className="text-xs text-gray-500">
                    Ends {new Date(c.ends).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })} · {c.donors} donors
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Edit</Button>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Share</Button>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                  <span>₦{c.raised.toLocaleString()} raised</span>
                  <span>{pct}% of ₦{c.goal.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-green transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
