import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donation Receipts | My Dashboard | AOF',
}

const MOCK_RECEIPTS = [
  { id: 'REC-2025-0614', date: '2025-06-15', amount: 25000, program: 'Education', ref: 'DON-001', currency: '₦' },
  { id: 'REC-2025-0515', date: '2025-05-15', amount: 25000, program: 'Education', ref: 'DON-002', currency: '₦' },
  { id: 'REC-2025-0415', date: '2025-04-15', amount: 25000, program: 'Healthcare', ref: 'DON-003', currency: '₦' },
  { id: 'REC-2025-0315', date: '2025-03-15', amount: 25000, program: 'General Fund', ref: 'DON-004', currency: '₦' },
]

export default async function ReceiptsPage() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  const user = await currentUser()
  const totalDonated = MOCK_RECEIPTS.reduce((s, r) => s + r.amount, 0)

  return (
    <main className="min-h-screen bg-cream-50">
      <div className="bg-brand-green text-white py-10">
        <div className="container mx-auto px-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="size-4" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Donation Receipts</h1>
          <p className="text-white/70 text-sm mt-1">
            {user?.emailAddresses?.[0]?.emailAddress} · ₦{totalDonated.toLocaleString()} total donated
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Receipts ({MOCK_RECEIPTS.length})</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <a href="#" download>
                  <Download className="size-4 mr-2" />
                  Download All (ZIP)
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {MOCK_RECEIPTS.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0">
                      <FileText className="size-5 text-brand-700 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">{r.id}</p>
                      <p className="text-xs text-neutral-500">
                        {new Date(r.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })} · {r.program}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                      {r.currency}{r.amount.toLocaleString()}
                    </span>
                    <Badge variant="success" className="text-xs">Received</Badge>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`/api/receipts/${r.ref}`} download>
                        <Download className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-neutral-500 text-center">
              Receipts are valid for tax purposes. Please retain for your records.{' '}
              <Link href="/contact" className="text-brand-600 hover:underline">Contact us</Link> if you need a corrected receipt.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
