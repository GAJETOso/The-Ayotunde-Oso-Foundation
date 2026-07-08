import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { FOUNDATION } from '@/lib/constants'
import { Providers } from '@/components/providers/Providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { KomaiWidget } from '@/components/ai/KomaiWidget'
import { CookieConsent } from '@/components/shared/CookieConsent'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://ayotundeosofoundation.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${FOUNDATION.name} | ${FOUNDATION.tagline}`,
    template: `%s | ${FOUNDATION.name}`,
  },
  description:
    'The Ayotunde Oso Foundation empowers people and transforms communities through education, healthcare, environmental sustainability, youth mentorship, and emergency humanitarian response.',
  keywords: [
    'nonprofit Nigeria',
    'humanitarian foundation',
    'community development',
    'youth mentorship',
    'healthcare outreach',
    'education scholarship',
    'environmental sustainability',
    'emergency relief',
    'Lagos foundation',
    'African nonprofit',
    'Ayotunde Oso',
    'donate Nigeria',
    'volunteer Africa',
  ],
  authors: [{ name: FOUNDATION.name, url: siteUrl }],
  creator: FOUNDATION.name,
  publisher: FOUNDATION.name,
  category: 'nonprofit',
  classification: 'Humanitarian Organization',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: FOUNDATION.name,
    title: `${FOUNDATION.name} | ${FOUNDATION.tagline}`,
    description:
      'Empowering people and transforming communities through education, healthcare, environmental sustainability, mentorship, and emergency response.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${FOUNDATION.name} — ${FOUNDATION.tagline}`,
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@AyotundeOsoFdn',
    creator: '@AyotundeOsoFdn',
    title: `${FOUNDATION.name} | ${FOUNDATION.tagline}`,
    description:
      'Empowering people and transforming communities through education, healthcare, environmental sustainability, mentorship, and emergency response.',
    images: ['/og-image.jpg'],
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },

  // Manifest
  manifest: '/manifest.json',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: 'your-google-verification-code',
  },

  // Alternate languages
  alternates: {
    canonical: siteUrl,
  },

  // Other
  other: {
    'og:email': FOUNDATION.email,
    'og:phone_number': FOUNDATION.phone,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B4D35' },
    { media: '(prefers-color-scheme: dark)', color: '#052E1F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
}

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''
const isClerkEnabled = clerkKey.startsWith('pk_') && clerkKey.length > 24 && !clerkKey.includes('placeholder')

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const inner = (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: FOUNDATION.name,
              alternateName: 'AOF',
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              description: FOUNDATION.mission,
              foundingDate: String(FOUNDATION.founded),
              address: {
                '@type': 'PostalAddress',
                streetAddress: FOUNDATION.address.street,
                addressLocality: FOUNDATION.address.city,
                addressRegion: FOUNDATION.address.state,
                addressCountry: 'NG',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: FOUNDATION.phone,
                contactType: 'customer service',
                email: FOUNDATION.email,
                availableLanguage: ['English', 'Yoruba', 'Hausa', 'Igbo'],
              },
              sameAs: Object.values(FOUNDATION.socialMedia),
              knowsAbout: [
                'Education',
                'Healthcare',
                'Environmental Sustainability',
                'Youth Mentorship',
                'Emergency Relief',
              ],
              areaServed: ['Nigeria', 'West Africa', 'Africa'],
            }),
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <KomaiWidget />
          <CookieConsent />
        </Providers>
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://komvia-ai-os.vercel.app/js/embed.js"
          data-project="ayotunde-oso-foundation"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )

  return isClerkEnabled ? <ClerkProvider>{inner}</ClerkProvider> : inner
}
