import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | The Ayotunde Oso Foundation',
  description: 'Find answers to common questions about donating, volunteering, programs, and more at The Ayotunde Oso Foundation.',
};

const FAQ_SECTIONS = [
  {
    category: 'About AOF',
    items: [
      {
        q: 'What is The Ayotunde Oso Foundation?',
        a: 'The Ayotunde Oso Foundation (AOF) is a Nigerian nonprofit organization dedicated to empowering individuals and communities through education, healthcare, environmental sustainability, mentorship, and emergency humanitarian response. Founded on the belief that every person deserves access to opportunity and dignity, AOF operates programs across multiple states in Nigeria.',
      },
      {
        q: 'When was AOF founded and who founded it?',
        a: 'AOF was founded by Ayotunde Oso, a social entrepreneur and humanitarian leader committed to creating systemic change in underserved Nigerian communities. The foundation has grown from a grassroots initiative into a nationally recognized nonprofit with programs spanning 5 core areas and benefiting over 250,000 people.',
      },
      {
        q: 'Is AOF a registered nonprofit organization?',
        a: 'Yes. The Ayotunde Oso Foundation is a registered nonprofit organization in Nigeria, operating under all applicable regulations for civil society organizations. We are fully accountable to our donors, beneficiaries, and the communities we serve, with audited financials published annually.',
      },
      {
        q: 'Where does AOF operate?',
        a: 'AOF currently operates programs across Lagos, Ogun, Oyo, Delta, Bayelsa, Enugu, Anambra, Imo, Kaduna, Kano, Kebbi, and Sokoto states. Our emergency response teams can be deployed anywhere in Nigeria within 72 hours of a disaster.',
      },
    ],
  },
  {
    category: 'Donations',
    items: [
      {
        q: 'How do I donate to AOF?',
        a: 'You can donate online through our secure donation page at /donate. We accept payments via Stripe (international cards), Paystack (Nigerian cards and bank transfer), Flutterwave, and PayPal. You can make one-time or recurring monthly/quarterly/annual donations and designate your gift to a specific program.',
      },
      {
        q: 'Is my donation tax-deductible?',
        a: 'For Nigerian donors, your donations to AOF may qualify for tax relief under applicable Nigerian tax laws. We recommend consulting your tax advisor. For international donors, tax deductibility depends on the laws of your country. We can provide donation receipts and letters of acknowledgement to support your tax filings.',
      },
      {
        q: 'How is my donation used?',
        a: 'At least 85% of every donation goes directly to program delivery. No more than 15% is allocated to administration and fundraising. We publish detailed financial reports annually showing exactly how funds are allocated across each program area. You can view our current financial summary on the Impact page.',
      },
      {
        q: 'Can I donate in memory or honor of someone?',
        a: 'Yes. During the donation process, you can check the "This is a tribute donation" option and provide the name of the person you are honoring or memorializing. We will send an acknowledgement notification to a recipient of your choice.',
      },
      {
        q: 'Can I set up a recurring donation?',
        a: 'Absolutely. You can set up monthly, quarterly, or annual recurring donations through our donation page. Recurring gifts are incredibly valuable as they allow us to plan program delivery with confidence. You can cancel or modify your recurring gift at any time by logging into your donor portal or contacting us.',
      },
      {
        q: 'Can I get a refund on my donation?',
        a: 'Donations to AOF are generally non-refundable, as funds are immediately deployed to program delivery. However, if you believe an error occurred with your donation (wrong amount, duplicate charge), please contact us within 30 days at giving@ayotundeosofouncation.org and we will review your case.',
      },
    ],
  },
  {
    category: 'Volunteering',
    items: [
      {
        q: 'How can I volunteer with AOF?',
        a: 'Visit our Volunteer page at /volunteer to complete a 3-step application. You can specify your skills, areas of interest, availability, and preferred programs. Our volunteer coordinator will review your application and contact you within 7 business days.',
      },
      {
        q: 'What kinds of volunteer opportunities are available?',
        a: 'We have opportunities for professionals and non-professionals alike. Skills-based volunteering includes roles in medicine, teaching, legal aid, engineering, communications, technology, and finance. General volunteering includes community outreach, event support, fundraising, and administrative assistance.',
      },
      {
        q: 'Do I need to be based in Nigeria to volunteer?',
        a: 'Not necessarily. We have remote volunteer opportunities in areas like content creation, grant writing, research, graphic design, social media management, and data analysis. In-person opportunities require presence in Nigeria or the specific state where a program is operating.',
      },
      {
        q: 'Is there a minimum time commitment for volunteering?',
        a: 'This varies by role. Some opportunities require a minimum 3-month commitment, while others can be one-time events or project-based engagements. We work with volunteers to find arrangements that fit their schedules.',
      },
    ],
  },
  {
    category: 'Programs & Beneficiaries',
    items: [
      {
        q: 'How can I apply for an AOF scholarship?',
        a: 'Our scholarship applications open annually, typically in January for the following academic year. Visit our Education program page for current application details, eligibility criteria, and deadlines. Applications are completed online and include academic records, essays, and recommendations.',
      },
      {
        q: 'How can my community request a healthcare outreach?',
        a: 'Community leaders, local government officials, or health workers can submit a healthcare outreach request through our Contact page or by emailing programs@ayotundeosofouncation.org. We evaluate requests based on community need, accessibility, and program scheduling.',
      },
      {
        q: 'How does the mentorship program match mentors and mentees?',
        a: 'Our matching algorithm considers career goals, industry, geographic location, availability, communication preference, and specific areas where the mentee seeks guidance. After an initial match, both parties complete a compatibility call before committing to the 12-month relationship.',
      },
      {
        q: 'How does AOF respond to emergencies?',
        a: 'AOF maintains a standing emergency response fund and a trained rapid response team that can mobilize within 72 hours of a disaster. We coordinate with state emergency management agencies, NEMA, and other humanitarian organizations to ensure a non-duplicative, coordinated response.',
      },
    ],
  },
  {
    category: 'Partnerships & Grants',
    items: [
      {
        q: 'How can my organization partner with AOF?',
        a: 'We welcome partnerships with organizations that share our values and commitment to community impact. Visit our Partners page or contact us at partnerships@ayotundeosofouncation.org to discuss co-implementation, sponsorship, in-kind support, or capacity-building partnerships.',
      },
      {
        q: 'Does AOF offer grants to other organizations?',
        a: 'AOF currently offers limited sub-grants to community-based organizations (CBOs) implementing complementary programs in our focus areas. Grant applications open periodically. Visit our Resources page for current grant opportunities and eligibility criteria.',
      },
      {
        q: 'How can I apply for an AOF grant?',
        a: 'When our grant windows are open, applications are submitted through our Grant Application portal on the Resources page. Applications require an organizational profile, program description, budget, and evidence of legal registration.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered"
        subtitle="Everything you need to know about donating, volunteering, our programs, and how we work. If your question is not here, we are always happy to help."
        gradient="green"
        breadcrumbs={[{ label: 'FAQ', href: '/faq' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.category}>
                <h2 className="text-xl font-bold text-brand-green mb-6 pb-3 border-b border-brand-green/20">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} value={`${section.category}-${i}`} className="border border-gray-200 rounded-lg px-4">
                      <AccordionTrigger className="text-left font-medium text-gray-900 py-4">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-4">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have a Question?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Our team responds to all inquiries within 24–48 business hours. You can also chat with KOMAI, our AI assistant, for immediate answers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact?subject=komai-inquiry">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
