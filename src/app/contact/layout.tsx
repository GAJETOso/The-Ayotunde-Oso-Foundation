import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Ayotunde Oso Foundation. Contact us for donations, volunteering, partnerships, media enquiries, and more.',
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
