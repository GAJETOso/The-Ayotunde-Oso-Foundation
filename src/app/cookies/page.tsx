import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Cookie Policy | The Ayotunde Oso Foundation',
  description: 'Information about how The Ayotunde Oso Foundation uses cookies and how to manage your preferences.',
};

const LAST_UPDATED = 'June 30, 2025';

const COOKIE_TABLE = [
  {
    category: 'Strictly Necessary',
    description: 'Required for the website to function. Cannot be disabled.',
    cookies: [
      { name: 'aof-cookie-consent', purpose: 'Stores your cookie consent preferences', expires: '1 year', provider: 'AOF' },
      { name: '__session', purpose: 'Authentication session token (Clerk)', expires: 'Session', provider: 'Clerk' },
      { name: 'csrf_token', purpose: 'Cross-site request forgery protection', expires: 'Session', provider: 'AOF' },
    ],
  },
  {
    category: 'Functional',
    description: 'Enhance your experience by remembering preferences.',
    cookies: [
      { name: 'aof-theme', purpose: 'Stores your light/dark mode preference', expires: '1 year', provider: 'AOF' },
      { name: 'aof-lang', purpose: 'Stores your language preference for KOMAI AI', expires: '90 days', provider: 'AOF' },
    ],
  },
  {
    category: 'Analytics',
    description: 'Help us understand how visitors use our website.',
    cookies: [
      { name: '_ga', purpose: 'Google Analytics — distinguishes users', expires: '2 years', provider: 'Google' },
      { name: '_ga_*', purpose: 'Google Analytics — session persistence', expires: '2 years', provider: 'Google' },
      { name: 'va_*', purpose: 'Vercel Analytics — page view tracking', expires: 'Session', provider: 'Vercel' },
    ],
  },
  {
    category: 'Marketing',
    description: 'Used to deliver relevant advertising and track campaigns.',
    cookies: [
      { name: 'fbp', purpose: 'Facebook Pixel — ad delivery and conversion tracking', expires: '90 days', provider: 'Meta' },
      { name: '_gcl_au', purpose: 'Google Ads — conversion tracking', expires: '90 days', provider: 'Google' },
    ],
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        gradient="green"
        breadcrumbs={[{ label: 'Cookie Policy', href: '/cookies' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">Cookies are small text files stored in your browser when you visit a website. They help websites function, remember your preferences, and collect usage information. This policy explains the cookies used by The Ayotunde Oso Foundation and how you can control them.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Your Choices</h2>
            <p className="text-gray-600 leading-relaxed">When you first visit our website, you will see a cookie consent banner where you can choose which categories of cookies to accept. You can change your preferences at any time using the banner that appears at the bottom of the page, or by clearing your browser cookies and revisiting the site.</p>

            <div className="my-6 p-4 bg-brand-green/5 border border-brand-green/20 rounded-xl">
              <p className="text-sm text-gray-700 m-0">To update your cookie preferences, clear the <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">aof-cookie-consent</code> item from your browser&apos;s local storage and reload the page. The consent banner will reappear.</p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-6">Cookies We Use</h2>

            {COOKIE_TABLE.map((cat) => (
              <div key={cat.category} className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cat.category} Cookies</h3>
                <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                <div className="overflow-x-auto rounded-xl border">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Cookie Name</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Purpose</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Expires</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Provider</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {cat.cookies.map((cookie) => (
                        <tr key={cookie.name}>
                          <td className="px-4 py-3 font-mono text-xs text-gray-800">{cookie.name}</td>
                          <td className="px-4 py-3 text-gray-600">{cookie.purpose}</td>
                          <td className="px-4 py-3 text-gray-600">{cookie.expires}</td>
                          <td className="px-4 py-3 text-gray-600">{cookie.provider}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Browser Controls</h2>
            <p className="text-gray-600 leading-relaxed">Most browsers allow you to control cookies through their settings. You can typically find these under Settings &gt; Privacy or Settings &gt; Security. Note that disabling cookies may affect the functionality of our website.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">We may update this Cookie Policy from time to time. The &quot;Last Updated&quot; date at the top reflects the most recent revision.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Contact</h2>
            <p className="text-gray-600 leading-relaxed">Questions about our cookie practices? Email <a href="mailto:privacy@ayotundeosofouncation.org" className="text-brand-green hover:underline">privacy@ayotundeosofouncation.org</a>.</p>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-500">See also: <Link href="/privacy" className="text-brand-green hover:underline">Privacy Policy</Link> · <Link href="/terms" className="text-brand-green hover:underline">Terms of Service</Link></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
