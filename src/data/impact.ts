export type SDG = {
  number: number
  title: string
  color: string  // official UN SDG hex
  programs: string[]
}

export const SDG_GOALS: SDG[] = [
  { number: 1,  title: 'No Poverty',                           color: '#E5243B', programs: ['Emergency Relief', 'Education'] },
  { number: 2,  title: 'Zero Hunger',                          color: '#DDA63A', programs: ['Emergency Relief'] },
  { number: 3,  title: 'Good Health & Well-being',             color: '#4C9F38', programs: ['Healthcare'] },
  { number: 4,  title: 'Quality Education',                    color: '#C5192D', programs: ['Education', 'Mentorship'] },
  { number: 5,  title: 'Gender Equality',                      color: '#FF3A21', programs: ['Education', 'Mentorship'] },
  { number: 6,  title: 'Clean Water & Sanitation',             color: '#26BDE2', programs: ['Environment'] },
  { number: 7,  title: 'Affordable & Clean Energy',            color: '#FCC30B', programs: ['Environment'] },
  { number: 8,  title: 'Decent Work & Economic Growth',        color: '#A21942', programs: ['Mentorship', 'Education'] },
  { number: 9,  title: 'Industry & Innovation',                color: '#FD6925', programs: ['Mentorship'] },
  { number: 10, title: 'Reduced Inequalities',                 color: '#DD1367', programs: ['All Programmes'] },
  { number: 11, title: 'Sustainable Cities',                   color: '#FD9D24', programs: ['Environment', 'Emergency Relief'] },
  { number: 12, title: 'Responsible Consumption',              color: '#BF8B2E', programs: ['Environment'] },
  { number: 13, title: 'Climate Action',                       color: '#3F7E44', programs: ['Environment'] },
  { number: 14, title: 'Life Below Water',                     color: '#0A97D9', programs: ['Environment'] },
  { number: 15, title: 'Life on Land',                         color: '#56C02B', programs: ['Environment'] },
  { number: 16, title: 'Peace & Justice',                      color: '#00689D', programs: ['All Programmes'] },
  { number: 17, title: 'Partnerships for the Goals',           color: '#19486A', programs: ['All Programmes'] },
]

export const IMPACT_NUMBERS = [
  { to: 1600,   suffix: '+', prefix: '',   label: 'Total Lives Impacted',  delta: 'Year 1 milestone', color: 'text-brand-700',  decimals: 0 },
  { to: 12.25,  suffix: 'M', prefix: '₦', label: 'Total Funds Raised',    delta: 'since May 2025',   color: 'text-gold-700',   decimals: 2 },
  { to: 1,      suffix: '',  prefix: '',   label: 'Country of Operation',  delta: 'Nigeria',          color: 'text-emerald-700', decimals: 0 },
  { to: 47,     suffix: '+', prefix: '',   label: 'Active Volunteers',     delta: 'and growing',      color: 'text-blue-700',   decimals: 0 },
  { to: 4,      suffix: '',  prefix: '',   label: 'Partner Organisations', delta: '100% retained',    color: 'text-purple-700', decimals: 0 },
  { to: 6,      suffix: '',  prefix: '',   label: 'Active Scholars',       delta: 'inaugural cohort', color: 'text-brand-700',  decimals: 0 },
]

export const PROGRAM_BREAKDOWN = [
  { name: 'Education & Youth', beneficiaries: 240, budget: 38, color: 'brand'   as const },
  { name: 'Healthcare',        beneficiaries: 750, budget: 29, color: 'success' as const },
  { name: 'Mentorship',        beneficiaries: 130, budget: 12, color: 'gold'    as const },
  { name: 'Environment',       beneficiaries: 300, budget: 11, color: 'success' as const },
  { name: 'Emergency Relief',  beneficiaries: 180, budget: 10, color: 'warning' as const },
]

export const ANNUAL_DATA = [
  { year: '2025', lives: 925,  funds: 7250000  },
  { year: '2026', lives: 1600, funds: 12250000 },
]

export const FINANCIAL_SUMMARY = [
  { label: 'Total Revenue (FY 2025)', value: '₦12.25M'        },
  { label: 'Programme Services',      value: '₦9.35M (85%)'   },
  { label: 'Administration',          value: '₦1.1M (10%)'    },
  { label: 'Fundraising Costs',       value: '₦0.55M (5%)'    },
  { label: 'Year-end Surplus',        value: '₦1.25M'         },
]
