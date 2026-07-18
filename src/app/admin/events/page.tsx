import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Events | AOF Admin' }

const EVENTS = [
  { id: 'EVT-001', title: 'AOF Annual Gala 2025', date: '2025-11-15', location: 'Eko Hotel, Lagos', capacity: 500, registered: 312, status: 'UPCOMING' },
  { id: 'EVT-002', title: 'Healthcare Volunteer Orientation', date: '2026-08-05', location: 'Virtual (Zoom)', capacity: 100, registered: 67, status: 'UPCOMING' },
  { id: 'EVT-003', title: 'Digital Skills Demo Day', date: '2026-07-30', location: 'Lagos Island Hub', capacity: 200, registered: 189, status: 'UPCOMING' },
  { id: 'EVT-004', title: 'Tree Planting Day — Ibadan', date: '2026-09-20', location: 'Ibadan, Oyo State', capacity: 300, registered: 45, status: 'PLANNING' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'brand' | 'destructive'> = {
  UPCOMING: 'brand',
  PLANNING: 'warning',
  COMPLETED: 'success',
}

export default function AdminEventsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Events</h1>
          <p className="text-gray-400 text-sm mt-1">{EVENTS.length} events · {EVENTS.filter(e => e.status === 'UPCOMING').length} upcoming</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/admin/events/new">+ New Event</Link>
        </Button>
      </div>

      <div className="space-y-3">
        {EVENTS.map((e) => {
          const fillPercent = Math.round((e.registered / e.capacity) * 100)
          return (
            <div key={e.id} className="flex items-center justify-between bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-white">{e.title}</span>
                  <Badge variant={STATUS_COLOR[e.status]}>{e.status}</Badge>
                </div>
                <div className="text-xs text-gray-400 flex gap-4">
                  <span>📅 {new Date(e.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span>📍 {e.location}</span>
                  <span>👥 {e.registered}/{e.capacity} registered ({fillPercent}%)</span>
                </div>
              </div>
              <div className="flex gap-2 ml-6">
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Edit</Button>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Attendees</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
