import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'New Event | AOF Admin' }

export default function NewEventPage() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/events" className="text-gray-500 hover:text-white text-sm transition-colors">← Events</Link>
        <h1 className="text-2xl font-bold text-white">New Event</h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Event Title</label>
          <input type="text" placeholder="e.g. AOF Community Health Fair 2026" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Date</label>
            <input type="date" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Time</label>
            <input type="time" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Location</label>
          <input type="text" placeholder="Venue name, city — or 'Virtual (Zoom)'" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Capacity</label>
            <input type="number" placeholder="500" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Ticket Price (₦)</label>
            <input type="number" placeholder="0 for free" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Description</label>
          <textarea rows={5} placeholder="Describe the event…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Programme</label>
          <select className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green">
            <option value="">Select programme…</option>
            {['Education', 'Healthcare', 'Environment', 'Mentorship', 'Emergency', 'General'].map((p) => (
              <option key={p} value={p.toLowerCase()}>{p}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" variant="gold">Create Event</Button>
          <Button type="button" variant="ghost" className="text-gray-400" asChild>
            <Link href="/admin/events">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
