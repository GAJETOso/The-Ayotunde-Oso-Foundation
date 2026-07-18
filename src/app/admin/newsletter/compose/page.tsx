import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Compose Newsletter | AOF Admin' }

export default function ComposeNewsletterPage() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/newsletter" className="text-gray-500 hover:text-white text-sm transition-colors">← Newsletter</Link>
        <h1 className="text-2xl font-bold text-white">Compose Newsletter</h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Subject Line</label>
          <input type="text" placeholder="e.g. AOF August Update: New Milestones" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Preview Text</label>
          <input type="text" placeholder="Short teaser shown in email clients…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Audience</label>
          <select className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green">
            <option value="all">All Subscribers (2,840)</option>
            <option value="donors">Donors only</option>
            <option value="volunteers">Volunteers only</option>
            <option value="scholars">Scholars & Families</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Body (Markdown)</label>
          <textarea
            rows={16}
            placeholder={`Write your newsletter in Markdown…\n\n## Greetings from AOF\n\nDear [First Name],\n\nThis month we...`}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none font-mono"
          />
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Schedule</p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="schedule" value="now" defaultChecked className="accent-brand-green" />
              <span className="text-sm text-gray-300">Send immediately</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="schedule" value="scheduled" className="accent-brand-green" />
              <span className="text-sm text-gray-300">Schedule for later</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" variant="gold">Send Newsletter</Button>
          <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:text-white">Save Draft</Button>
          <Button type="button" variant="ghost" className="text-gray-400" asChild>
            <Link href="/admin/newsletter">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
