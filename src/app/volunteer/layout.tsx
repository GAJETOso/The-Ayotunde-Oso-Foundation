import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join The Ayotunde Oso Foundation as a volunteer. Apply to support our programmes in education, healthcare, mentorship, environment, and emergency relief.',
}

export default function VolunteerLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
