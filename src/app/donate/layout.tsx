import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Make a donation to The Ayotunde Oso Foundation. Support education, healthcare, mentorship, environmental action, and emergency relief in Nigeria.',
}

export default function DonateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
