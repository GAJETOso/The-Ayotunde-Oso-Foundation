export type EventStatus = 'UPCOMING' | 'PAST'

export type EventType =
  | 'GALA'
  | 'CONFERENCE'
  | 'OUTREACH'
  | 'VIRTUAL'
  | 'COMMUNITY'
  | 'WORKSHOP'

export type Event = {
  id: string
  slug: string
  title: string
  description: string
  type: EventType
  status: EventStatus
  date: string          // ISO date (YYYY-MM-DD) — for sorting and Date arithmetic
  displayDate: string   // e.g. 'Saturday, 19 September 2026'
  time: string          // e.g. '6:00 PM – 10:00 PM WAT'
  location: string
  isVirtual: boolean
  isFeatured: boolean
  image: string
  capacity: number | null
  registrations: number
  tags: string[]
  color: string         // Tailwind classes for type badge on home component
}

export const EVENTS: Event[] = [
  {
    id: '1',
    slug: 'aof-annual-gala-2026',
    type: 'GALA',
    status: 'UPCOMING',
    isFeatured: true,
    isVirtual: false,
    title: 'AOF Annual Fundraising Gala 2026',
    description:
      'Our second annual gala bringing together donors, partners, community leaders, and volunteers to celebrate year-one impact and raise funds for our 2026 expansion. Black-tie optional.',
    date: '2026-09-19',
    displayDate: 'Saturday, 19 September 2026',
    time: '6:00 PM – 10:00 PM WAT',
    location: 'Eko Hotel & Suites, Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    capacity: 150,
    registrations: 59,
    tags: ['Fundraiser', 'Networking', 'Awards'],
    color: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    id: '2',
    slug: 'education-summit-abuja-2026',
    type: 'CONFERENCE',
    status: 'UPCOMING',
    isFeatured: false,
    isVirtual: false,
    title: 'Education for All Forum — Abuja 2026',
    description:
      'One-day policy forum bringing together educators, government officials, civil society leaders, and community voices around access to quality education in underserved Nigerian communities.',
    date: '2026-10-22',
    displayDate: 'Thursday, 22 October 2026',
    time: '9:00 AM – 5:00 PM WAT',
    location: 'International Conference Centre, Abuja',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    capacity: 100,
    registrations: 37,
    tags: ['Education', 'Policy', 'Conference'],
    color: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    id: '3',
    slug: 'free-medical-outreach-lagos-2026',
    type: 'OUTREACH',
    status: 'UPCOMING',
    isFeatured: false,
    isVirtual: false,
    title: 'Free Medical Outreach — Lagos State (Q3 2026)',
    description:
      'One-day free medical outreach providing consultations, medications, eye care, and health education to residents of Ikorodu and surrounding communities.',
    date: '2026-08-08',
    displayDate: 'Saturday, 8 August 2026',
    time: '8:00 AM – 4:00 PM WAT',
    location: 'Ikorodu Town Hall, Lagos State',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    capacity: null,
    registrations: 0,
    tags: ['Healthcare', 'Outreach', 'Free'],
    color: 'bg-red-50 text-red-700 border-red-100',
  },
  {
    id: '4',
    slug: 'webinar-digital-skills-2026',
    type: 'VIRTUAL',
    status: 'UPCOMING',
    isFeatured: false,
    isVirtual: true,
    title: 'Webinar: Digital Skills for Underserved Youth',
    description:
      'Online panel featuring AOF programme officers and scholarship beneficiaries sharing how digital literacy is transforming career prospects in rural and peri-urban Nigerian communities.',
    date: '2026-07-30',
    displayDate: 'Wednesday, 30 July 2026',
    time: '3:00 PM – 4:30 PM WAT',
    location: 'Zoom (link sent on registration)',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
    capacity: 150,
    registrations: 31,
    tags: ['Education', 'Virtual', 'Free'],
    color: 'bg-purple-50 text-purple-700 border-purple-100',
  },
  {
    id: '5',
    slug: 'aof-annual-gala-2025',
    type: 'GALA',
    status: 'PAST',
    isFeatured: false,
    isVirtual: false,
    title: 'AOF Inaugural Fundraising Gala 2025',
    description:
      "AOF's first-ever fundraising gala celebrated the foundation's launch and secured key partnerships. Over 90 guests attended at Eko Hotel, raising ₦3.1M for programme expansion.",
    date: '2025-11-15',
    displayDate: 'Saturday, 15 November 2025',
    time: '6:00 PM – 10:00 PM WAT',
    location: 'Eko Hotel & Suites, Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    capacity: 100,
    registrations: 92,
    tags: ['Fundraiser', 'Networking', 'Inaugural'],
    color: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    id: '6',
    slug: 'tree-planting-drive-ogun-2025',
    type: 'COMMUNITY',
    status: 'PAST',
    isFeatured: false,
    isVirtual: false,
    title: 'Community Tree Planting Drive — Lagos & Ogun 2025',
    description:
      "170 volunteers joined AOF's inaugural tree-planting campaign across four communities in Lagos and Ogun states, planting 925 trees in a single weekend.",
    date: '2025-12-06',
    displayDate: 'Saturday, 6 December 2025',
    time: '7:00 AM – 1:00 PM WAT',
    location: 'Multiple sites, Lagos & Ogun States',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    capacity: 200,
    registrations: 170,
    tags: ['Environment', 'Volunteer', 'Community'],
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
]

export const EVENTS_BY_SLUG: Record<string, Event> = Object.fromEntries(
  EVENTS.map((e) => [e.slug, e])
)
