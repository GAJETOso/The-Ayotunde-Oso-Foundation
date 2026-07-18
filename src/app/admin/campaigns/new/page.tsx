import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'New Campaign | AOF Admin' }

export default function NewCampaignPage() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/campaigns" className="text-gray-500 hover:text-white text-sm transition-colors">← Campaigns</Link>
        <h1 className="text-2xl font-bold text-white">New Campaign</h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Campaign Name</label>
          <input type="text" placeholder="e.g. Back-to-School Fund 2027" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Goal Amount (₦)</label>
            <input type="number" placeholder="5000000" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">End Date</label>
            <input type="date" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Linked Programme</label>
          <select className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green">
            <option value="">Select programme…</option>
            {['Education', 'Healthcare', 'Environment', 'Mentorship', 'Emergency Relief', 'General'].map((p) => (
              <option key={p} value={p.toLowerCase().replace(' ', '-')}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Cover Image URL</label>
          <input type="url" placeholder="https://…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Description</label>
          <textarea rows={5} placeholder="Describe the campaign goal and impact…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Suggested Donation Amounts (₦, comma-separated)</label>
          <input type="text" placeholder="5000, 20000, 50000, 100000" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" variant="gold">Launch Campaign</Button>
          <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:text-white">Save Draft</Button>
          <Button type="button" variant="ghost" className="text-gray-400" asChild>
            <Link href="/admin/campaigns">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
