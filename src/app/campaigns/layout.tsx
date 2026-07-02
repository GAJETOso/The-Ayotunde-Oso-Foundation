import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Campaigns',
  description: 'Explore active fundraising campaigns by The Ayotunde Oso Foundation. Support education, healthcare, environment, and emergency relief in Nigeria.',
}

export default function CampaignsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
