import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { SDGTicker } from '@/components/shared/SDGTicker'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
  AnimatedProgress,
} from '@/components/ui/animations'
import {
  IMPACT_NUMBERS,
  PROGRAM_BREAKDOWN,
  ANNUAL_DATA,
  FINANCIAL_SUMMARY,
} from '@/data/impact'

export const metadata: Metadata = {
  title: 'Impact Dashboard | The Ayotunde Oso Foundation',
  description:
    'Real-time impact data: lives changed, programmes delivered, funds deployed. Full transparency on how AOF is creating measurable change.',
  openGraph: { title: 'Impact Dashboard | The Ayotunde Oso Foundation' },
}

export default function ImpactPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Impact Dashboard"
        subtitle="Full transparency on our reach, results, and resource deployment. Updated quarterly."
        eyebrow="Accountability"
        breadcrumbs={[{ label: 'Impact', href: '/impact' }]}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        size="sm"
      />

      {/* Key Numbers */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="brand" className="mb-2">As of Q2 2026</Badge>
              <h2 className="heading-2">Impact at a Glance</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/resources/reports">Download Annual Report</Link>
            </Button>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {IMPACT_NUMBERS.map((stat) => (
              <StaggerItem key={stat.label} direction="scale">
                <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <CardContent className="p-6">
                    <p className={`font-display text-4xl font-bold ${stat.color}`}>
                      <CountUp
                        to={stat.to}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                        separator={!stat.decimals}
                      />
                    </p>
                    <p className="mt-1 font-semibold text-neutral-800 dark:text-neutral-200">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {stat.delta}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Year-over-Year Growth */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-xl">
          <FadeUp className="mb-8">
            <Badge variant="brand" className="mb-2">Growth</Badge>
            <h2 className="heading-2">Year-over-Year Progress</h2>
          </FadeUp>

          <SlideIn from="bottom" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800/50">
                    <th className="px-5 py-4 text-left font-semibold text-neutral-700 dark:text-neutral-300">Year</th>
                    <th className="px-5 py-4 text-right font-semibold text-neutral-700 dark:text-neutral-300">Lives Impacted</th>
                    <th className="px-5 py-4 text-right font-semibold text-neutral-700 dark:text-neutral-300">Funds Raised (₦)</th>
                    <th className="hidden px-5 py-4 text-right font-semibold text-neutral-700 dark:text-neutral-300 md:table-cell">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {ANNUAL_DATA.map((row, i) => {
                    const prev = ANNUAL_DATA[i - 1]
                    const growth = prev
                      ? Math.round(((row.lives - prev.lives) / prev.lives) * 100)
                      : null
                    return (
                      <tr
                        key={row.year}
                        className="border-b border-neutral-100 transition-colors last:border-0 hover:bg-brand-50/60 dark:border-neutral-800 dark:hover:bg-brand-900/20"
                      >
                        <td className="px-5 py-4 font-bold text-neutral-900 dark:text-neutral-100">
                          {row.year}
                        </td>
                        <td className="px-5 py-4 text-right text-neutral-700 dark:text-neutral-300">
                          {row.lives.toLocaleString()}
                        </td>
                        <td className="px-5 py-4 text-right text-neutral-700 dark:text-neutral-300">
                          ₦{(row.funds / 1_000_000).toFixed(1)}M
                        </td>
                        <td className="hidden px-5 py-4 text-right md:table-cell">
                          {growth !== null && (
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              +{growth}%
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Programme Breakdown */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-8">
            <Badge variant="gold" className="mb-2">Allocation</Badge>
            <h2 className="heading-2">Programme Breakdown</h2>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Progress bars */}
            <SlideIn from="left" delay={0.1}>
              <div className="space-y-7">
                {PROGRAM_BREAKDOWN.map((p, i) => (
                  <div key={p.name}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {p.name}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                          {p.beneficiaries.toLocaleString()}
                        </span>
                        <span className="ml-1 text-xs text-neutral-500">beneficiaries</span>
                      </div>
                    </div>
                    <AnimatedProgress
                      value={p.budget}
                      color={p.color}
                      showValue
                      delay={i * 0.12}
                    />
                  </div>
                ))}
              </div>
            </SlideIn>

            {/* Financial summary */}
            <SlideIn from="right" delay={0.1}>
              <div>
                <h3 className="mb-6 font-display text-xl font-semibold">Financial Summary</h3>
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                  {FINANCIAL_SUMMARY.map((row, i, arr) => (
                    <div
                      key={row.label}
                      className={`flex justify-between px-5 py-4 ${
                        i < arr.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''
                      }`}
                    >
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {row.label}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-neutral-500">
                  Figures are unaudited estimates. Audited accounts available in the Annual Report.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* SDG Alignment — all 17 goals scrolling ticker */}
      <section className="section bg-brand-900 dark:bg-brand-950">
        <div className="container-xl">
          <FadeUp className="mb-10 text-center">
            <Badge variant="gold" className="mb-2">Global Goals</Badge>
            <h2 className="heading-2 text-white">
              UN Sustainable Development Goal Alignment
            </h2>
            <p className="mt-3 text-brand-300 max-w-xl mx-auto text-sm">
              AOF&apos;s programmes directly contribute to all 17 UN Sustainable Development Goals.
            </p>
          </FadeUp>
          <SDGTicker />
        </div>
      </section>

      {/* Transparency CTA */}
      <section className="section">
        <div className="container-xl">
          <FadeUp className="mb-8 text-center">
            <h2 className="heading-2">Full Transparency</h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
              Every dollar we receive is documented, audited, and publicly reported.
            </p>
          </FadeUp>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Annual Report',
                body: 'Full financial statements, programme results, and auditor\'s report.',
                cta: 'Download PDF',
                href: '/resources/reports',
                featured: false,
              },
              {
                title: 'Donate Transparently',
                body: 'See exactly how your donation is allocated before you give.',
                cta: 'Give Now',
                href: '/donate',
                featured: true,
              },
              {
                title: 'Verify Our Work',
                body: 'CAC registration, EFCC clearance, and partner verifications.',
                cta: 'Our Credentials',
                href: '/about',
                featured: false,
              },
            ].map((card) => (
              <StaggerItem key={card.title} direction="up">
                <Card
                  className={`flex h-full flex-col p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                    card.featured ? 'bg-brand-700 border-brand-700' : ''
                  }`}
                >
                  <h3 className={`font-semibold ${card.featured ? 'text-white' : ''} mb-2`}>
                    {card.title}
                  </h3>
                  <p
                    className={`flex-1 text-sm ${
                      card.featured ? 'text-brand-200' : 'text-neutral-500 dark:text-neutral-400'
                    } mb-5`}
                  >
                    {card.body}
                  </p>
                  <Button
                    variant={card.featured ? 'gold' : 'outline'}
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
