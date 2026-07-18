import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Donations | AOF Admin' }

const DONATIONS = [
  { id: 'DON-001', name: 'Adaeze N.', email: 'adaeze@example.com', amount: 50000, currency: '₦', program: 'Education', method: 'Card', status: 'COMPLETED', date: '2026-07-18T10:02:00' },
  { id: 'DON-002', name: 'Yusuf A.', email: 'yusuf@example.com', amount: 25000, currency: '₦', program: 'Healthcare', method: 'Transfer', status: 'COMPLETED', date: '2026-07-18T09:48:00' },
  { id: 'DON-003', name: 'Anonymous', email: '—', amount: 100000, currency: '₦', program: 'General Fund', method: 'Card', status: 'COMPLETED', date: '2026-07-18T08:17:00' },
  { id: 'DON-004', name: 'Blessing O.', email: 'blessing@example.com', amount: 15000, currency: '₦', program: 'Environment', method: 'Card', status: 'COMPLETED', date: '2026-07-17T22:01:00' },
  { id: 'DON-005', name: 'Chisom I.', email: 'chisom@example.com', amount: 200000, currency: '₦', program: 'Emergency', method: 'Transfer', status: 'PENDING', date: '2026-07-17T19:45:00' },
  { id: 'DON-006', name: 'Tunde B.', email: 'tunde@example.com', amount: 75000, currency: '₦', program: 'Mentorship', method: 'Card', status: 'COMPLETED', date: '2026-07-17T15:30:00' },
]

const STATUS_COLOR: Record<string, string> = {
  COMPLETED: 'success',
  PENDING:   'warning',
  FAILED:    'destructive',
}

export default function AdminDonationsPage() {
  const total = DONATIONS.filter(d => d.status === 'COMPLETED').reduce((s, d) => s + d.amount, 0)

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Donations</h1>
          <p className="text-gray-400 text-sm mt-1">₦{total.toLocaleString()} confirmed today</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <a href="/api/admin/donations/export.csv" download>Export CSV</a>
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Today', value: `₦${total.toLocaleString()}` },
          { label: 'Transactions', value: DONATIONS.length.toString() },
          { label: 'Pending', value: DONATIONS.filter(d => d.status === 'PENDING').length.toString() },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900/50">
              {['ID', 'Donor', 'Amount', 'Programme', 'Method', 'Status', 'Date', ''].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DONATIONS.map((d) => (
              <tr key={d.id} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/40 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-gray-400">{d.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-white text-sm">{d.name}</div>
                  <div className="text-xs text-gray-500">{d.email}</div>
                </td>
                <td className="px-4 py-3 font-bold text-white">{d.currency}{d.amount.toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-300">{d.program}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{d.method}</td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_COLOR[d.status] as 'success' | 'warning' | 'destructive'}>{d.status}</Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(d.date).toLocaleString('en-NG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
                    Receipt
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
