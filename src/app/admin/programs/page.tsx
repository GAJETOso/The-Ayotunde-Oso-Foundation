import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Programs | AOF Admin' }

const PROGRAMS = [
  { id: 'PRG-001', name: 'Education', description: 'Scholarships, digital literacy, teacher training', status: 'ACTIVE', beneficiaries: 500, volunteers: 28, budget: 12000000 },
  { id: 'PRG-002', name: 'Healthcare', description: 'Mobile outreaches, health advocacy, wellness camps', status: 'ACTIVE', beneficiaries: 1500, volunteers: 18, budget: 9500000 },
  { id: 'PRG-003', name: 'Environment', description: 'Tree planting, Green Corps, recycling initiatives', status: 'ACTIVE', beneficiaries: 600, volunteers: 24, budget: 5000000 },
  { id: 'PRG-004', name: 'Mentorship', description: 'Career guidance, business coaching, life skills', status: 'ACTIVE', beneficiaries: 260, volunteers: 14, budget: 3500000 },
  { id: 'PRG-005', name: 'Emergency Relief', description: 'Rapid response, humanitarian supplies, trauma support', status: 'ACTIVE', beneficiaries: 1440, volunteers: 10, budget: 8000000 },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'destructive'> = {
  ACTIVE:   'success',
  PAUSED:   'warning',
  INACTIVE: 'destructive',
}

export default function AdminProgramsPage() {
  const totalBeneficiaries = PROGRAMS.reduce((s, p) => s + p.beneficiaries, 0)
  const totalBudget = PROGRAMS.reduce((s, p) => s + p.budget, 0)

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Programs</h1>
          <p className="text-gray-400 text-sm mt-1">{PROGRAMS.length} active programmes · {totalBeneficiaries.toLocaleString()} beneficiaries</p>
        </div>
        <Button variant="gold" size="sm">+ New Program</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Beneficiaries', value: totalBeneficiaries.toLocaleString() },
          { label: 'Active Programmes', value: PROGRAMS.filter(p => p.status === 'ACTIVE').length },
          { label: 'Total Budget (₦)', value: `₦${(totalBudget / 1000000).toFixed(1)}M` },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {PROGRAMS.map((p) => (
          <div key={p.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-white font-semibold text-lg">{p.name}</h2>
                  <Badge variant={STATUS_COLOR[p.status]}>{p.status}</Badge>
                </div>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="flex gap-6 text-xs text-gray-500">
                  <span>👥 {p.beneficiaries.toLocaleString()} beneficiaries</span>
                  <span>🤝 {p.volunteers} volunteers</span>
                  <span>💰 ₦{(p.budget / 1000000).toFixed(1)}M budget</span>
                </div>
              </div>
              <div className="flex gap-2 ml-6">
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Edit</Button>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Reports</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
