import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Contact Inbox | AOF Admin' }

const CONTACTS = [
  { id: 'MSG-001', name: 'Blessing Nwosu', email: 'blessing@example.com', subject: 'Partnership enquiry — corporate CSR', category: 'Partnership', status: 'UNREAD', received: '2026-07-18T09:14:00' },
  { id: 'MSG-002', name: 'James Okoro', email: 'james@example.com', subject: 'Volunteer sign-up question', category: 'Volunteering', status: 'READ', received: '2026-07-17T16:30:00' },
  { id: 'MSG-003', name: 'Nneka Chukwu', email: 'nneka@example.com', subject: 'Grant application help', category: 'Grants', status: 'REPLIED', received: '2026-07-16T11:05:00' },
  { id: 'MSG-004', name: 'Abdullahi Yusuf', email: 'abdullahi@example.com', subject: 'Media interview request', category: 'Press', status: 'UNREAD', received: '2026-07-15T08:42:00' },
  { id: 'MSG-005', name: 'Chiamaka Obi', email: 'chiamaka@example.com', subject: 'Donation receipt not received', category: 'Support', status: 'REPLIED', received: '2026-07-14T14:20:00' },
  { id: 'MSG-006', name: 'Kunle Adeniyi', email: 'kunle@example.com', subject: 'Speaking at our school event', category: 'Events', status: 'READ', received: '2026-07-13T10:55:00' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'brand' | 'destructive'> = {
  UNREAD:  'brand',
  READ:    'warning',
  REPLIED: 'success',
}

const CATEGORY_COLOR: Record<string, string> = {
  Partnership: 'bg-purple-900/50 text-purple-300',
  Volunteering: 'bg-green-900/50 text-green-300',
  Grants: 'bg-yellow-900/50 text-yellow-300',
  Press: 'bg-blue-900/50 text-blue-300',
  Support: 'bg-red-900/50 text-red-300',
  Events: 'bg-teal-900/50 text-teal-300',
}

export default function AdminContactsPage() {
  const unread = CONTACTS.filter(c => c.status === 'UNREAD').length

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Inbox</h1>
          <p className="text-gray-400 text-sm mt-1">{CONTACTS.length} messages · {unread} unread</p>
        </div>
        <Button variant="gold" size="sm">
          <a href="/api/admin/contacts/export.csv" download>Export CSV</a>
        </Button>
      </div>

      <div className="space-y-2">
        {CONTACTS.map((c) => (
          <div
            key={c.id}
            className={`flex items-center gap-4 rounded-xl p-4 border transition-colors cursor-pointer ${
              c.status === 'UNREAD'
                ? 'bg-gray-900 border-gray-700 hover:border-gray-600'
                : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                {c.status === 'UNREAD' && (
                  <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                )}
                <span className={`font-medium text-sm ${c.status === 'UNREAD' ? 'text-white' : 'text-gray-300'}`}>
                  {c.name}
                </span>
                <span className="text-gray-500 text-xs">{c.email}</span>
              </div>
              <p className={`text-sm truncate ${c.status === 'UNREAD' ? 'text-gray-200' : 'text-gray-400'}`}>
                {c.subject}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLOR[c.category] ?? 'bg-gray-800 text-gray-300'}`}>
                {c.category}
              </span>
              <Badge variant={STATUS_COLOR[c.status]}>{c.status}</Badge>
              <span className="text-xs text-gray-500">
                {new Date(c.received).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })}
              </span>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">View</Button>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Reply</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
