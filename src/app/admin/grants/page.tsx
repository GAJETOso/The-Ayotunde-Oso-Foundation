import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Grant Applications | AOF Admin' }

const GRANTS = [
  { id: 'GRT-001', applicant: 'Chidi Okonkwo', organisation: 'Lagos Youth Tech Hub', programme: 'Education', amount: 500000, status: 'PENDING', submitted: '2026-07-15' },
  { id: 'GRT-002', applicant: 'Amara Eze', organisation: 'Women Rise Initiative', programme: 'Mentorship', amount: 250000, status: 'UNDER_REVIEW', submitted: '2026-07-10' },
  { id: 'GRT-003', applicant: 'Dr. Segun Adewale', organisation: 'Oyo State Clinic Outreach', programme: 'Healthcare', amount: 1200000, status: 'APPROVED', submitted: '2026-06-25' },
  { id: 'GRT-004', applicant: 'Fatima Lawal', organisation: 'Green Future NGO', programme: 'Environment', amount: 750000, status: 'DECLINED', submitted: '2026-06-10' },
  { id: 'GRT-005', applicant: 'Tunde Bashorun', organisation: 'Rural Relief Network', programme: 'Emergency Relief', amount: 2000000, status: 'APPROVED', submitted: '2026-05-30' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'destructive' | 'brand'> = {
  PENDING:      'warning',
  UNDER_REVIEW: 'brand',
  APPROVED:     'success',
  DECLINED:     'destructive',
}

const STATUS_LABEL: Record<string, string> = {
  PENDING:      'Pending',
  UNDER_REVIEW: 'Under Review',
  APPROVED:     'Approved',
  DECLINED:     'Declined',
}

export default function AdminGrantsPage() {
  const totalRequested = GRANTS.reduce((s, g) => s + g.amount, 0)
  const totalApproved = GRANTS.filter(g => g.status === 'APPROVED').reduce((s, g) => s + g.amount, 0)

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Grant Applications</h1>
          <p className="text-gray-400 text-sm mt-1">{GRANTS.length} applications · {GRANTS.filter(g => g.status === 'PENDING').length} awaiting review</p>
        </div>
        <Button variant="gold" size="sm">
          <a href="/api/admin/grants/export.csv" download>Export CSV</a>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Requested', value: `₦${totalRequested.toLocaleString()}` },
          { label: 'Total Approved', value: `₦${totalApproved.toLocaleString()}` },
          { label: 'Pending Review', value: GRANTS.filter(g => g.status === 'PENDING' || g.status === 'UNDER_REVIEW').length },
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
              {['Applicant', 'Organisation', 'Programme', 'Amount', 'Status', 'Submitted', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GRANTS.map((g) => (
              <tr key={g.id} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/40 transition-colors">
                <td className="px-4 py-3 font-medium text-white">{g.applicant}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{g.organisation}</td>
                <td className="px-4 py-3 text-gray-300 text-sm">{g.programme}</td>
                <td className="px-4 py-3 text-white font-mono text-xs">₦{g.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_COLOR[g.status]}>{STATUS_LABEL[g.status]}</Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(g.submitted).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {(g.status === 'PENDING' || g.status === 'UNDER_REVIEW') && (
                      <>
                        <Button variant="ghost" size="sm" className="text-xs text-emerald-400 hover:text-emerald-300">Approve</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-red-400 hover:text-red-300">Decline</Button>
                      </>
                    )}
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">View</Button>
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
