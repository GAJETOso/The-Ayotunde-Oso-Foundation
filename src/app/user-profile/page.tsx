import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserProfile } from '@clerk/nextjs'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Edit Profile | The Ayotunde Oso Foundation',
}

export default async function UserProfilePage() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <main className="min-h-screen bg-cream-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Dashboard
        </Link>
        <UserProfile
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'shadow-none border border-neutral-200 dark:border-neutral-800',
            },
          }}
        />
      </div>
    </main>
  )
}
