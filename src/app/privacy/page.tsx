import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Ayotunde Oso Foundation',
  description: 'How The Ayotunde Oso Foundation collects, uses, and protects your personal information.',
};

const LAST_UPDATED = 'June 30, 2025';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        gradient="green"
        breadcrumbs={[{ label: 'Privacy Policy', href: '/privacy' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">

            <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6 mb-10">
              <p className="text-gray-700 m-0"><strong>Summary:</strong> The Ayotunde Oso Foundation collects only the information necessary to deliver our programs and services, process donations, and communicate with supporters. We do not sell your data to third parties. We use industry-standard security practices to protect your information.</p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">The Ayotunde Oso Foundation (&quot;AOF&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a nonprofit organization registered in Nigeria. Our website address is https://ayotundeosofouncation.org. We are the data controller for personal information collected through this website.</p>
            <p className="text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy or our data practices, contact us at: <a href="mailto:privacy@ayotundeosofouncation.org" className="text-brand-green hover:underline">privacy@ayotundeosofouncation.org</a></p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Donation information:</strong> Name, email, billing address, donation amount, payment method details (processed securely by our payment providers — we do not store card numbers)</li>
              <li><strong>Volunteer applications:</strong> Name, contact details, skills, availability, motivation statement</li>
              <li><strong>Contact form submissions:</strong> Name, email, message content, department selected</li>
              <li><strong>Newsletter subscriptions:</strong> Email address, communication preferences</li>
              <li><strong>Grant applications:</strong> Organization details, program descriptions, financial information, team information</li>
              <li><strong>Event registrations:</strong> Name, email, any dietary or accessibility requirements provided</li>
              <li><strong>Account registration:</strong> Name, email, password (via Clerk; we do not store passwords ourselves)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Usage data:</strong> Pages visited, time on site, referral sources, clicks (via Vercel Analytics and Google Analytics)</li>
              <li><strong>Device information:</strong> Browser type, operating system, screen resolution</li>
              <li><strong>IP address:</strong> Used for rate limiting, fraud prevention, and approximate geographic analytics</li>
              <li><strong>Cookies:</strong> See our Cookie Policy for full details</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
            <ul className="text-gray-600 space-y-2">
              <li>Processing and acknowledging donations, including issuing tax receipts</li>
              <li>Managing volunteer applications and coordinating volunteer activities</li>
              <li>Responding to contact form and grant application enquiries</li>
              <li>Sending newsletters and program updates (with your consent)</li>
              <li>Maintaining donor and supporter accounts</li>
              <li>Analyzing website usage to improve our digital services</li>
              <li>Complying with legal obligations, including financial record-keeping</li>
              <li>Preventing fraud and ensuring website security</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-600 leading-relaxed">We process your personal data based on:</p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Contract performance:</strong> To process donations, volunteer arrangements, and grants</li>
              <li><strong>Legitimate interests:</strong> To improve our website and services, prevent fraud, and maintain security</li>
              <li><strong>Consent:</strong> For newsletter subscriptions and non-essential cookies</li>
              <li><strong>Legal obligation:</strong> For financial record-keeping and tax compliance</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">We do not sell your personal information. We share data only with:</p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Payment processors:</strong> Stripe, Paystack, Flutterwave, PayPal — to process donation transactions securely</li>
              <li><strong>Authentication provider:</strong> Clerk — to manage user accounts and authentication</li>
              <li><strong>Email service:</strong> Resend — to deliver transactional emails and newsletters</li>
              <li><strong>Analytics providers:</strong> Vercel Analytics and Google Analytics — to understand website usage (data is anonymized or pseudonymized)</li>
              <li><strong>Database and hosting:</strong> Vercel and associated cloud infrastructure — to host and operate our website</li>
              <li><strong>Legal authorities:</strong> When required by law or court order</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">All third-party providers are contractually bound to process your data only as instructed by us and to maintain appropriate security measures.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Data Retention</h2>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Donation records:</strong> 7 years (legal/tax compliance requirement)</li>
              <li><strong>Volunteer records:</strong> Duration of volunteering + 2 years</li>
              <li><strong>Newsletter subscribers:</strong> Until unsubscription + 30 days</li>
              <li><strong>Contact form submissions:</strong> 2 years</li>
              <li><strong>Analytics data:</strong> 14 months (Google Analytics default)</li>
              <li><strong>Account data:</strong> Until account deletion + 90 days</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">You have the right to:</p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Ask us to correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> Unsubscribe from newsletters or withdraw cookie consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">To exercise any of these rights, email <a href="mailto:privacy@ayotundeosofouncation.org" className="text-brand-green hover:underline">privacy@ayotundeosofouncation.org</a>. We will respond within 30 days.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Security</h2>
            <p className="text-gray-600 leading-relaxed">We implement appropriate technical and organizational security measures including TLS encryption for all data in transit, encryption at rest for sensitive data, access controls and authentication requirements, regular security assessments, and rate limiting and fraud detection systems.</p>
            <p className="text-gray-600 leading-relaxed">No system is 100% secure. If you become aware of a security vulnerability, please report it responsibly to <a href="mailto:security@ayotundeosofouncation.org" className="text-brand-green hover:underline">security@ayotundeosofouncation.org</a>.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">We use cookies and similar technologies. See our <Link href="/cookies" className="text-brand-green hover:underline">Cookie Policy</Link> for details on what cookies we use and how to manage your preferences.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">We may update this policy from time to time. We will notify you of material changes by posting the new policy on this page and, where appropriate, by email to subscribers. The &quot;Last Updated&quot; date at the top of this page reflects the most recent revision.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed">For any privacy-related questions or requests, contact our Data Protection team at <a href="mailto:privacy@ayotundeosofouncation.org" className="text-brand-green hover:underline">privacy@ayotundeosofouncation.org</a> or write to us at: The Ayotunde Oso Foundation, Lagos, Nigeria.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
