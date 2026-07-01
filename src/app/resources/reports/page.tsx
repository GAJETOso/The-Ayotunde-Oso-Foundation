import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, Calendar, ExternalLink, ChevronRight, BarChart3, Users, Globe } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Annual Reports | The Ayotunde Oso Foundation',
  description:
    'Access our annual reports, impact assessments, and program evaluations. Full transparency into how donor funds create lasting change in communities.',
  openGraph: {
    title: 'Annual Reports | The Ayotunde Oso Foundation',
    description: 'Full transparency into how donor funds create lasting change.',
  },
}

const ANNUAL_REPORTS = [
  {
    year: 2024,
    title: 'Annual Impact Report 2024',
    subtitle: 'Expanding Reach, Deepening Impact',
    pages: 64,
    highlights: [
      '47,200+ lives directly impacted',
      '12 new program sites launched',
      '$2.3M total expenditure',
      '94.2% program efficiency ratio',
    ],
    coverColor: 'from-brand-900 to-brand-700',
    stats: { beneficiaries: '47,200+', communities: '38', volunteers: '340+', programs: '5' },
    fileSize: '4.2 MB',
    published: 'March 2025',
  },
  {
    year: 2023,
    title: 'Annual Impact Report 2023',
    subtitle: 'Building Sustainable Futures',
    pages: 58,
    highlights: [
      '39,500+ beneficiaries served',
      '8 emergency relief interventions',
      '$1.9M total expenditure',
      '92.8% program efficiency ratio',
    ],
    coverColor: 'from-brand-800 to-emerald-700',
    stats: { beneficiaries: '39,500+', communities: '31', volunteers: '280+', programs: '5' },
    fileSize: '3.8 MB',
    published: 'April 2024',
  },
  {
    year: 2022,
    title: 'Annual Impact Report 2022',
    subtitle: 'Recovery, Resilience & Growth',
    pages: 52,
    highlights: [
      '28,900+ individuals reached',
      'Post-pandemic program scale-up',
      '$1.5M total expenditure',
      '91.4% program efficiency ratio',
    ],
    coverColor: 'from-emerald-800 to-teal-700',
    stats: { beneficiaries: '28,900+', communities: '24', volunteers: '195+', programs: '5' },
    fileSize: '3.1 MB',
    published: 'May 2023',
  },
  {
    year: 2021,
    title: 'Annual Impact Report 2021',
    subtitle: 'Serving Through Adversity',
    pages: 48,
    highlights: [
      '21,300+ lives touched',
      'COVID-19 emergency response',
      '$1.1M total expenditure',
      '90.1% program efficiency ratio',
    ],
    coverColor: 'from-teal-800 to-cyan-700',
    stats: { beneficiaries: '21,300+', communities: '19', volunteers: '140+', programs: '4' },
    fileSize: '2.7 MB',
    published: 'June 2022',
  },
  {
    year: 2020,
    title: 'Annual Impact Report 2020',
    subtitle: 'Foundations of Hope',
    pages: 44,
    highlights: [
      '14,800+ community members served',
      'Education & healthcare pilot programs',
      '$780K total expenditure',
      '89.3% program efficiency ratio',
    ],
    coverColor: 'from-cyan-800 to-blue-700',
    stats: { beneficiaries: '14,800+', communities: '14', volunteers: '95+', programs: '3' },
    fileSize: '2.3 MB',
    published: 'July 2021',
  },
]

const SUPPLEMENTARY = [
  {
    title: 'Mid-Year Impact Update 2024',
    description: 'H1 2024 progress snapshot across all five program areas.',
    icon: BarChart3,
    date: 'August 2024',
    fileSize: '1.2 MB',
    type: 'Progress Report',
  },
  {
    title: '2024 Education Program Evaluation',
    description: 'Independent third-party assessment of literacy and STEM outcomes.',
    icon: FileText,
    date: 'October 2024',
    fileSize: '2.1 MB',
    type: 'Program Evaluation',
  },
  {
    title: 'Healthcare Outreach Impact Study',
    description: 'Longitudinal study on mobile clinic health outcomes over 3 years.',
    icon: Users,
    date: 'September 2024',
    fileSize: '3.4 MB',
    type: 'Research Study',
  },
  {
    title: 'Environmental Sustainability Baseline',
    description: 'Measurement framework and baseline indicators for our green programs.',
    icon: Globe,
    date: 'July 2024',
    fileSize: '1.8 MB',
    type: 'Baseline Report',
  },
]

export default function AnnualReportsPage() {
  return (
    <>
      <PageHero
        label="Transparency"
        title="Annual Reports"
        highlight="& Impact Assessments"
        description="We believe accountability is the foundation of trust. Every year, we publish comprehensive reports detailing exactly how your support translates into measurable change."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Annual Reports' },
        ]}
      />

      {/* Transparency Stats */}
      <section className="border-b border-neutral-100 bg-brand-900 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: 'Reports Published', value: '5+' },
              { label: 'Years of Data', value: '2020–2024' },
              { label: 'Program Efficiency', value: '94%+' },
              { label: 'Third-Party Audited', value: 'Annual' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports Grid */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-900 md:text-4xl">Annual Impact Reports</h2>
            <p className="mt-3 text-muted-foreground">
              Comprehensive documentation of our programs, finances, and impact metrics for each fiscal year.
            </p>
          </div>

          {/* Featured — Latest Report */}
          <div className="mb-8 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className={`bg-gradient-to-br ${ANNUAL_REPORTS[0].coverColor} p-10 text-white`}>
                <div className="mb-6">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-brand-900">
                    LATEST REPORT
                  </span>
                </div>
                <p className="mb-1 text-sm font-medium text-white/60">ANNUAL IMPACT REPORT</p>
                <h3 className="font-serif text-4xl font-bold">{ANNUAL_REPORTS[0].year}</h3>
                <p className="mt-2 text-xl font-medium text-white/80">{ANNUAL_REPORTS[0].subtitle}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {Object.entries(ANNUAL_REPORTS[0].stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="font-serif text-2xl font-bold">{val}</p>
                      <p className="text-xs text-white/50 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between p-10">
                <div>
                  <h4 className="mb-4 font-serif text-xl font-bold text-brand-900">Key Highlights</h4>
                  <ul className="space-y-3">
                    {ANNUAL_REPORTS[0].highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          ✓
                        </span>
                        <span className="text-foreground/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-4 w-4" />
                      {ANNUAL_REPORTS[0].pages} pages
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Download className="h-4 w-4" />
                      {ANNUAL_REPORTS[0].fileSize} PDF
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {ANNUAL_REPORTS[0].published}
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/documents/aof-annual-report-2024.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-800"
                    download
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <a
                    href="/documents/aof-annual-report-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-800 transition-all hover:border-brand-600 hover:bg-brand-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Read Online
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Reports */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ANNUAL_REPORTS.slice(1).map((report) => (
              <div
                key={report.year}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-card"
              >
                <div className={`bg-gradient-to-r ${report.coverColor} px-6 py-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-white/60">ANNUAL IMPACT REPORT</p>
                      <h3 className="font-serif text-2xl font-bold">{report.year}</h3>
                      <p className="text-sm text-white/70">{report.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-3xl font-bold">{report.stats.beneficiaries}</p>
                      <p className="text-xs text-white/50">beneficiaries</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="mb-5 space-y-2">
                    {report.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{report.pages}pp</span>
                      <span>·</span>
                      <span>{report.fileSize}</span>
                      <span>·</span>
                      <span>{report.published}</span>
                    </div>
                    <a
                      href={`/documents/aof-annual-report-${report.year}.pdf`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
                      download
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplementary Reports */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-900">Supplementary Reports</h2>
            <p className="mt-3 text-muted-foreground">
              Mid-year updates, program evaluations, and third-party research studies.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SUPPLEMENTARY.map((doc) => {
              const Icon = doc.icon
              return (
                <div
                  key={doc.title}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-brand-200 hover:bg-brand-50/30 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-6 w-6 text-brand-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-brand-900 leading-snug">{doc.title}</h3>
                      <span className="shrink-0 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                        {doc.type}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {doc.date}
                        </span>
                        <span>{doc.fileSize} PDF</span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-900"
                        download
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Request / Enquiry CTA */}
      <section className="section-sm bg-brand-900 text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold">Need More Information?</h2>
            <p className="mt-4 text-white/70">
              Our team is available to walk you through our reports, explain our methodology, or provide
              custom data for research, journalism, or partnership due diligence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?subject=annual-reports"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:bg-gold/90"
              >
                Contact Our Team
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/financials"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Financial Statements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
