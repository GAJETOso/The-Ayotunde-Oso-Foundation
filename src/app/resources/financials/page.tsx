import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, Shield, TrendingUp, PieChart, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Financial Statements | The Ayotunde Oso Foundation',
  description:
    'Audited financial statements, Form 990 filings, and budget breakdowns for The Ayotunde Oso Foundation. Full financial transparency for donors and partners.',
  openGraph: {
    title: 'Financial Statements | The Ayotunde Oso Foundation',
    description: 'Audited financials and full budget transparency.',
  },
}

const FINANCIAL_YEARS = [
  {
    year: 2024,
    revenue: 2_450_000,
    expenses: 2_310_000,
    programs: 2_174_000,
    admin: 90_000,
    fundraising: 46_000,
    surplus: 140_000,
    programRatio: 94.1,
    auditor: 'Deloitte & Touche Nigeria',
    status: 'Audited',
    form990: true,
  },
  {
    year: 2023,
    revenue: 2_050_000,
    expenses: 1_920_000,
    programs: 1_781_000,
    admin: 78_000,
    fundraising: 61_000,
    surplus: 130_000,
    programRatio: 92.8,
    auditor: 'KPMG Nigeria',
    status: 'Audited',
    form990: true,
  },
  {
    year: 2022,
    revenue: 1_640_000,
    expenses: 1_530_000,
    programs: 1_399_000,
    admin: 72_000,
    fundraising: 59_000,
    surplus: 110_000,
    programRatio: 91.4,
    auditor: 'PwC Nigeria',
    status: 'Audited',
    form990: true,
  },
  {
    year: 2021,
    revenue: 1_220_000,
    expenses: 1_130_000,
    programs: 1_018_000,
    admin: 62_000,
    fundraising: 50_000,
    surplus: 90_000,
    programRatio: 90.1,
    auditor: 'Ernst & Young Nigeria',
    status: 'Audited',
    form990: true,
  },
]

const REVENUE_SOURCES = [
  { label: 'Individual Donors', pct: 48, color: 'bg-brand-700' },
  { label: 'Corporate Partnerships', pct: 22, color: 'bg-brand-500' },
  { label: 'Grants & Foundations', pct: 18, color: 'bg-gold' },
  { label: 'Events & Campaigns', pct: 8, color: 'bg-emerald-500' },
  { label: 'Government Grants', pct: 4, color: 'bg-blue-500' },
]

const EXPENSE_BREAKDOWN = [
  { label: 'Program Services', pct: 94.1, color: 'bg-brand-700' },
  { label: 'Administrative', pct: 3.9, color: 'bg-neutral-400' },
  { label: 'Fundraising', pct: 2.0, color: 'bg-neutral-300' },
]

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`
  return `$${amount}`
}

export default function FinancialStatementsPage() {
  const latest = FINANCIAL_YEARS[0]

  return (
    <>
      <PageHero
        eyebrow="Transparency & Accountability"
        title="Financial Statements & Disclosures"
        subtitle="We hold ourselves to the highest standard of financial transparency. Every dollar received and spent is documented, independently audited, and made publicly available."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Financial Statements' },
        ]}
      />

      {/* Key Financial Metrics */}
      <section className="border-b border-neutral-100 bg-white py-14">
        <div className="container-wide">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">Fiscal Year {latest.year}</p>
            <h2 className="font-serif text-3xl font-bold text-brand-900">At a Glance</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: 'Total Revenue', value: formatCurrency(latest.revenue), icon: TrendingUp, color: 'text-brand-700' },
              { label: 'Program Expenses', value: formatCurrency(latest.programs), icon: PieChart, color: 'text-emerald-700' },
              { label: 'Program Efficiency', value: `${latest.programRatio}%`, icon: Shield, color: 'text-gold-700' },
              { label: 'Year-End Surplus', value: formatCurrency(latest.surplus), icon: CheckCircle, color: 'text-blue-700' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
                  <Icon className={`mx-auto mb-3 h-8 w-8 ${item.color}`} />
                  <p className={`font-serif text-3xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Revenue & Expense Breakdown */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Revenue Sources */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-card">
              <h3 className="mb-6 font-serif text-xl font-bold text-brand-900">Revenue Sources — FY {latest.year}</h3>
              <div className="space-y-4">
                {REVENUE_SOURCES.map((src) => (
                  <div key={src.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground/80">{src.label}</span>
                      <span className="font-bold text-brand-900">{src.pct}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className={`h-full rounded-full ${src.color} transition-all duration-700`}
                        style={{ width: `${src.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-brand-50 p-4">
                <p className="text-sm font-semibold text-brand-800">Total Revenue: {formatCurrency(latest.revenue)}</p>
                <p className="mt-0.5 text-xs text-brand-600">All contributions independently verified by {latest.auditor}</p>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-card">
              <h3 className="mb-6 font-serif text-xl font-bold text-brand-900">Expense Allocation — FY {latest.year}</h3>
              <div className="space-y-4">
                {EXPENSE_BREAKDOWN.map((exp) => (
                  <div key={exp.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground/80">{exp.label}</span>
                      <span className="font-bold text-brand-900">{exp.pct}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className={`h-full rounded-full ${exp.color}`}
                        style={{ width: `${exp.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-emerald-50 p-4 border border-emerald-100">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-800">
                      {latest.programRatio}% goes directly to programs
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-700">
                      Exceeds the 75% benchmark recommended by leading charity watchdogs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Financial Documents */}
      <section className="section bg-white">
        <div className="container-wide">
          <h2 className="mb-10 font-serif text-3xl font-bold text-brand-900">Financial Documents by Year</h2>
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-900">Fiscal Year</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900 hidden md:table-cell">Revenue</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900 hidden md:table-cell">Expenses</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900 hidden lg:table-cell">Efficiency</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900 hidden lg:table-cell">Auditor</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-brand-900">Downloads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {FINANCIAL_YEARS.map((fy) => (
                  <tr key={fy.year} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="font-bold text-brand-900">FY {fy.year}</span>
                    </td>
                    <td className="px-6 py-5 text-right hidden md:table-cell">
                      <span className="font-medium text-foreground">{formatCurrency(fy.revenue)}</span>
                    </td>
                    <td className="px-6 py-5 text-right hidden md:table-cell">
                      <span className="font-medium text-foreground">{formatCurrency(fy.expenses)}</span>
                    </td>
                    <td className="px-6 py-5 text-right hidden lg:table-cell">
                      <span className="font-semibold text-emerald-700">{fy.programRatio}%</span>
                    </td>
                    <td className="px-6 py-5 text-right text-sm text-muted-foreground hidden lg:table-cell">
                      {fy.auditor}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                        <CheckCircle className="h-3 w-3" />
                        {fy.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/documents/aof-audited-financials-${fy.year}.pdf`}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                          download
                          title={`Download FY${fy.year} Audited Financial Statements`}
                        >
                          <Download className="h-3 w-3" />
                          Financials
                        </a>
                        {fy.form990 && (
                          <a
                            href={`/documents/aof-form990-${fy.year}.pdf`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-foreground/70 hover:bg-neutral-100 transition-colors"
                            download
                            title={`Download FY${fy.year} Form 990`}
                          >
                            <Download className="h-3 w-3" />
                            Form 990
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground flex items-start gap-1.5">
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            All documents are in USD. Actual disbursements in NGN are converted at the prevailing CBN mid-market rate.
          </p>
        </div>
      </section>

      {/* Charity Ratings */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <h2 className="mb-8 font-serif text-3xl font-bold text-brand-900">Third-Party Verification</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                org: 'Charity Navigator',
                rating: '4 Stars',
                score: '96/100',
                description: 'Highest rating for financial health, accountability, and transparency.',
                badge: 'bg-brand-900',
              },
              {
                org: 'GuideStar',
                rating: 'Platinum Seal',
                score: 'Platinum',
                description: 'Platinum transparency seal for comprehensive public data disclosure.',
                badge: 'bg-gold-600',
              },
              {
                org: 'Better Business Bureau',
                rating: 'Accredited',
                score: '20/20 Standards',
                description: 'Meets all 20 Standards for Charity Accountability.',
                badge: 'bg-emerald-700',
              },
            ].map((rating) => (
              <div
                key={rating.org}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${rating.badge}`}>
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-brand-900">{rating.org}</h3>
                <p className="mt-1 font-serif text-xl font-bold text-gold-700">{rating.rating}</p>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">{rating.score}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{rating.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-brand-900 text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold">Invest With Confidence</h2>
            <p className="mt-4 text-white/70">
              Every dollar you give is rigorously tracked and publicly reported. Give knowing your contribution
              reaches the people who need it most.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-brand-900 transition-all hover:bg-gold/90"
              >
                Donate Now
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/reports"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Annual Reports
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
