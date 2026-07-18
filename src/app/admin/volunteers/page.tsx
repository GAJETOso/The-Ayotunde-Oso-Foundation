import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Volunteers | AOF Admin' }

const VOLUNTEERS = [
  { id: 'VOL-001', name: 'Emmanuel C.', email: 'emmanuel@example.com', skills: ['Teaching', 'Mentoring'], program: 'Education', status: 'PENDING', applied: '2026-07-18' },
  { id: 'VOL-002', name: 'Fatima A.', email: 'fatima@example.com', skills: ['Medical', 'Community Health'], program: 'Healthcare', status: 'PENDING', applied: '2026-07-18' },
  { id: 'VOL-003', name: 'Ibrahim M.', email: 'ibrahim@example.com', skills: ['Engineering', 'Project Mgmt'], program: 'Environment', status: 'ACTIVE', applied: '2026-07-10' },
  { id: 'VOL-004', name: 'Ngozi E.', email: 'ngozi@example.com', skills: ['Legal', 'Administration'], program: 'General', status: 'ACTIVE', applied: '2026-07-05' },
  { id: 'VOL-005', name: 'Kelechi O.', email: 'kelechi@example.com', skills: ['Photography', 'Content'], program: 'Communications', status: 'ACTIVE', applied: '2026-06-28' },
  { id: 'VOL-006', name: 'Aisha B.', email: 'aisha@example.com', skills: ['Finance', 'Accounting'], program: 'Finance', status: 'INACTIVE', applied: '2026-06-01' },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'destructive' | 'brand'> = {
  ACTIVE:   'success',
  PENDING:  'warning',
  INACTIVE: 'destructive',
}

export default function AdminVolunteersPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Volunteers</h1>
          <p className="text-gray-400 text-sm mt-1">{VOLUNTEERS.length} total · {VOLUNTEERS.filter(v => v.status === 'PENDING').length} awaiting review</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <a href="/api/admin/volunteers/export.csv" download>Export CSV</a>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Active', value: VOLUNTEERS.filter(v => v.status === 'ACTIVE').length },
          { label: 'Pending Review', value: VOLUNTEERS.filter(v => v.status === 'PENDING').length },
          { label: 'Inactive', value: VOLUNTEERS.filter(v => v.status === 'INACTIVE').length },
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
              {['Volunteer', 'Skills', 'Programme', 'Status', 'Applied', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VOLUNTEERS.map((v) => (
              <tr key={v.id} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/40 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-white">{v.name}</div>
                  <div className="text-xs text-gray-500">{v.email}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {v.skills.map((s) => (
                      <span key={s} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-300 text-sm">{v.program}</td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_COLOR[v.status]}>{v.status}</Badge>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(v.applied).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {v.status === 'PENDING' && (
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
