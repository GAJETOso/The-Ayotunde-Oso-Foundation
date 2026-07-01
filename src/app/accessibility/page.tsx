import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Accessibility Statement | The Ayotunde Oso Foundation',
  description: 'AOF\'s commitment to digital accessibility and WCAG 2.2 AA compliance.',
};

const LAST_UPDATED = 'June 30, 2025';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Legal"
        title="Accessibility Statement"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        gradient="green"
        breadcrumbs={[{ label: 'Accessibility', href: '/accessibility' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">

            <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6 mb-10">
              <p className="text-gray-700 m-0"><strong>Our Commitment:</strong> The Ayotunde Oso Foundation is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply relevant accessibility standards.</p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conformance Status</h2>
            <p className="text-gray-600 leading-relaxed">We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. WCAG defines how to make web content more accessible to people with disabilities. Conformance with these guidelines helps make the web more accessible to users who are blind or visually impaired, deaf or hard of hearing, have motor disabilities, or have cognitive disabilities.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Accessibility Features</h2>
            <p className="text-gray-600 leading-relaxed">Our website includes the following accessibility features:</p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Semantic HTML:</strong> Proper heading hierarchy, landmark regions, and semantic elements</li>
              <li><strong>Skip to content:</strong> A skip navigation link allows keyboard users to bypass the main navigation</li>
              <li><strong>Keyboard navigation:</strong> All interactive elements are accessible via keyboard without a mouse</li>
              <li><strong>Focus indicators:</strong> Visible focus rings on all interactive elements using focus-visible</li>
              <li><strong>ARIA labels:</strong> Screen reader descriptions for icon buttons, form fields, and dynamic content</li>
              <li><strong>Color contrast:</strong> Text and interactive elements meet or exceed WCAG AA contrast ratios</li>
              <li><strong>Responsive design:</strong> Content adapts to all screen sizes and zoom levels up to 400%</li>
              <li><strong>Alternative text:</strong> All meaningful images have descriptive alt attributes</li>
              <li><strong>Form labels:</strong> All form inputs have associated labels and error messages</li>
              <li><strong>No motion by default:</strong> Respects prefers-reduced-motion system preference</li>
              <li><strong>Plain language:</strong> Content written at an accessible reading level with clear structure</li>
              <li><strong>Error identification:</strong> Form errors are clearly described with guidance on how to correct them</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Known Limitations</h2>
            <p className="text-gray-600 leading-relaxed">While we strive for full WCAG 2.2 AA conformance, some areas may not yet be fully accessible:</p>
            <ul className="text-gray-600 space-y-2">
              <li>Some older PDF documents in our Resources section may not be fully accessible. We are working to remediate these.</li>
              <li>Some third-party embedded content (maps, payment widgets) may have accessibility limitations outside our direct control.</li>
              <li>The KOMAI AI chat interface is continuously being improved for screen reader compatibility.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Technical Specification</h2>
            <p className="text-gray-600 leading-relaxed">This website is built with:</p>
            <ul className="text-gray-600 space-y-1">
              <li>HTML5 with ARIA landmark roles</li>
              <li>Next.js App Router with server-side rendering for fast, accessible page loads</li>
              <li>Radix UI primitives, which follow WAI-ARIA design patterns</li>
              <li>CSS custom properties and system font stacks for readability</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">We test accessibility using:</p>
            <ul className="text-gray-600 space-y-1">
              <li>Automated: axe-core, Lighthouse accessibility audits</li>
              <li>Manual: VoiceOver (macOS/iOS), NVDA (Windows), keyboard-only navigation testing</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Feedback</h2>
            <p className="text-gray-600 leading-relaxed">We welcome feedback on the accessibility of our website. If you experience accessibility barriers or have suggestions for improvement, please contact us:</p>
            <ul className="text-gray-600 space-y-2">
              <li>Email: <a href="mailto:accessibility@ayotundeosofouncation.org" className="text-brand-green hover:underline">accessibility@ayotundeosofouncation.org</a></li>
              <li>Response time: We aim to respond within 5 business days</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Formal Complaints</h2>
            <p className="text-gray-600 leading-relaxed">If you are not satisfied with our response to an accessibility complaint, you may contact the relevant regulatory authority in your jurisdiction.</p>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-500">See also: <Link href="/privacy" className="text-brand-green hover:underline">Privacy Policy</Link> · <Link href="/terms" className="text-brand-green hover:underline">Terms of Service</Link> · <Link href="/cookies" className="text-brand-green hover:underline">Cookie Policy</Link></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
