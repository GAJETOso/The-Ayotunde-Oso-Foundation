import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Articles | AOF Admin' }

const ARTICLES = [
  { id: 'ART-001', title: 'AOF Completes Q1 2026 Healthcare Outreach in Abuja', status: 'PUBLISHED', author: 'AOF Communications', date: '2026-03-31', views: 1240 },
  { id: 'ART-002', title: 'Digital Literacy Programme Graduates First Cohort of 387', status: 'PUBLISHED', author: 'AOF Communications', date: '2026-01-15', views: 890 },
  { id: 'ART-003', title: 'Green Ibadan Initiative: What to Expect This September', status: 'DRAFT', author: 'AOF Communications', date: '2026-07-10', views: 0 },
  { id: 'ART-004', title: 'Meet the Inaugural AOF Scholars: 12 Futures in Motion', status: 'PUBLISHED', author: 'AOF Communications', date: '2025-10-01', views: 2100 },
  { id: 'ART-005', title: 'Emergency Response: How AOF Deployed in 72 Hours', status: 'PUBLISHED', author: 'AOF Communications', date: '2025-08-20', views: 1670 },
]

const STATUS_COLOR: Record<string, 'success' | 'warning' | 'destructive'> = {
  PUBLISHED: 'success',
  DRAFT:     'warning',
  ARCHIVED:  'destructive',
}

export default function AdminArticlesPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Articles</h1>
          <p className="text-gray-400 text-sm mt-1">{ARTICLES.length} articles · {ARTICLES.filter(a => a.status === 'DRAFT').length} drafts</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/admin/articles/new">+ New Article</Link>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900/50">
              {['Title', 'Status', 'Author', 'Published', 'Views', ''].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ARTICLES.map((a) => (
              <tr key={a.id} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-900/40 transition-colors">
                <td className="px-4 py-3">
                  <span className="font-medium text-white text-sm">{a.title}</span>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={STATUS_COLOR[a.status]}>{a.status}</Badge>
                </td>
                <td className="px-4 py-3 text-gray-400 text-xs">{a.author}</td>
                <td className="px-4 py-3 text-xs text-gray-500">
                  {new Date(a.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-4 py-3 text-gray-400">{a.views.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-white">
                      {a.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                    </Button>
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
