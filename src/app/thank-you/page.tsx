import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Thank You | The Ayotunde Oso Foundation',
  description: 'Thank you for your generosity and support of The Ayotunde Oso Foundation.',
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-3">Your generosity means everything to us — and even more to the communities we serve.</p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Your donation has been received and a receipt has been sent to your email address. Funds are allocated to programs within 48 hours of receipt. You will receive an impact update showing exactly how your contribution was used.
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-10 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-5">What Happens Next</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Receipt Confirmed', desc: 'Check your email for your official donation receipt and acknowledgement letter.' },
                { step: '2', title: 'Funds Deployed', desc: 'Your donation is allocated to the program you designated within 48 hours.' },
                { step: '3', title: 'Impact Reported', desc: 'We will send you a quarterly impact update showing the difference your gift made.' },
                { step: '4', title: 'Community Transformed', desc: 'Your contribution becomes scholarships, healthcare, clean water, trees, and hope.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mb-10">
            <p className="text-sm text-gray-600 mb-4">Help us reach more donors by sharing your support</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://twitter.com/intent/tweet?text=I+just+donated+to+%40AOFNigeria+to+support+education%2C+healthcare%2C+and+community+development+in+Nigeria.+Join+me%21+%23AOF+%23Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Share on Twitter
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://ayotundeosofouncation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Share on Facebook
              </a>
              <a
                href="https://api.whatsapp.com/send?text=I+just+donated+to+The+Ayotunde+Oso+Foundation+to+support+education%2C+healthcare%2C+and+community+development+in+Nigeria.+You+can+too%3A+https://ayotundeosofouncation.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/impact">See Your Impact</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
