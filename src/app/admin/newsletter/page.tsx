import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Newsletter | AOF Admin' }

const NEWSLETTERS = [
  { id: 'NWS-001', subject: 'AOF July Update: Trees, Health & Scholars', sentAt: '2026-07-01', recipients: 2840, opens: 1120, clicks: 340, status: 'SENT' },
  { id: 'NWS-002', subject: 'Introducing the AOF Digital Literacy Programme', sentAt: '2026-06-01', recipients: 2710, opens: 980, clicks: 290, status: 'SENT' },
  { id: 'NWS-003', subject: 'Thank You — One Year of Impact', sentAt: '2026-05-15', recipients: 2600, opens: 1340, clicks: 510, status: 'SENT' },
  { id: 'NWS-004', subject: 'Green Ibadan: August Campaign Preview', sentAt: null, recipients: 0, opens: 0, clicks: 0, status: 'DRAFT' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning'> = {
  SENT:  'success',
  DRAFT: 'warning',
}

export default function AdminNewsletterPage() {
  const totalSubscribers = 2840

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Newsletter</h1>
          <p className="text-gray-400 text-sm mt-1">{totalSubscribers.toLocaleString()} subscribers · {NEWSLETTERS.filter(n => n.status === 'SENT').length} campaigns sent</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/admin/newsletter/compose">+ Compose</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Subscribers', value: totalSubscribers.toLocaleString() },
          { label: 'Avg. Open Rate', value: '40.2%' },
          { label: 'Avg. Click Rate', value: '12.4%' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900/50">
              {['Subject', 'Status', 'Sent', 'Recipients', 'Opens', 'Clicks', ''].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {NEWSLETTERS.map((n) => (
              <tr key={n.id} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/40 transition-colors">
                <td className="px-4 py-3 font-medium text-white max-w-xs truncate">{n.subject}</td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_COLOR[n.status]}>{n.status}</Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {n.sentAt
                    ? new Date(n.sentAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })
                    : '—'}
                </td>
                <td className="px-4 py-3 text-gray-400">{n.recipients > 0 ? n.recipients.toLocaleString() : '—'}</td>
                <td className="px-4 py-3 text-gray-400">
                  {n.opens > 0 ? `${n.opens.toLocaleString()} (${Math.round((n.opens / n.recipients) * 100)}%)` : '—'}
                </td>
                <td className="px-4 py-3 text-gray-400">
                  {n.clicks > 0 ? `${n.clicks.toLocaleString()} (${Math.round((n.clicks / n.recipients) * 100)}%)` : '—'}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
                      {n.status === 'DRAFT' ? 'Edit' : 'View'}
                    </Button>
                    {n.status === 'DRAFT' && (
                      <Button variant="ghost" size="sm" className="text-xs text-emerald-400 hover:text-emerald-300">Send</Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
