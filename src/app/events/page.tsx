import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Clock, Users, ArrowRight, Video } from 'lucide-react'
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'

export const metadata: Metadata = {
  title: 'Events | The Ayotunde Oso Foundation',
  description: 'Upcoming and past events from The Ayotunde Oso Foundation — conferences, outreaches, fundraisers, workshops, and community programmes.',
}

const EVENTS = [
  {
    id: '1', slug: 'aof-annual-gala-2026', type: 'GALA', status: 'UPCOMING',
    title: 'AOF Annual Fundraising Gala 2026',
    description: 'Our second annual gala bringing together donors, partners, community leaders, and volunteers to celebrate year-one impact and raise funds for our 2026 expansion. Black-tie optional.',
    date: 'Saturday, 19 September 2026', time: '6:00 PM – 10:00 PM WAT',
    location: 'Eko Hotel & Suites, Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    registrations: 118, capacity: 300, isFeatured: true, isVirtual: false,
    tags: ['Fundraiser', 'Networking', 'Awards'],
  },
  {
    id: '2', slug: 'education-summit-abuja-2026', type: 'CONFERENCE', status: 'UPCOMING',
    title: 'Education for All Forum — Abuja 2026',
    description: 'One-day policy forum bringing together educators, government officials, civil society leaders, and community voices around access to quality education in underserved Nigerian communities.',
    date: 'Thursday, 22 October 2026', time: '9:00 AM – 5:00 PM WAT',
    location: 'International Conference Centre, Abuja',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    registrations: 74, capacity: 200, isFeatured: false, isVirtual: false,
    tags: ['Education', 'Policy', 'Conference'],
  },
  {
    id: '3', slug: 'free-medical-outreach-lagos-2026', type: 'OUTREACH', status: 'UPCOMING',
    title: 'Free Medical Outreach — Lagos State (Q3 2026)',
    description: 'One-day free medical outreach providing consultations, medications, eye care, and health education to residents of Ikorodu and surrounding communities.',
    date: 'Saturday, 8 August 2026', time: '8:00 AM – 4:00 PM WAT',
    location: 'Ikorodu Town Hall, Lagos State',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    registrations: 0, capacity: null, isFeatured: false, isVirtual: false,
    tags: ['Healthcare', 'Outreach', 'Free'],
  },
  {
    id: '4', slug: 'webinar-digital-skills-2026', type: 'VIRTUAL', status: 'UPCOMING',
    title: 'Webinar: Digital Skills for Underserved Youth',
    description: 'Online panel featuring AOF programme officers and scholarship beneficiaries sharing how digital literacy is transforming career prospects in rural and peri-urban Nigerian communities.',
    date: 'Wednesday, 30 July 2026', time: '3:00 PM – 4:30 PM WAT',
    location: 'Zoom (link sent on registration)',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
    registrations: 62, capacity: 300, isFeatured: false, isVirtual: true,
    tags: ['Education', 'Virtual', 'Free'],
  },
  {
    id: '5', slug: 'aof-annual-gala-2025', type: 'GALA', status: 'PAST',
    title: 'AOF Inaugural Fundraising Gala 2025',
    description: 'AOF\'s first-ever fundraising gala celebrated the foundation\'s launch and secured key partnerships. Over 180 guests attended at Eko Hotel, raising ₦6.2M for programme expansion.',
    date: 'Saturday, 15 November 2025', time: '6:00 PM – 10:00 PM WAT',
    location: 'Eko Hotel & Suites, Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    registrations: 184, capacity: 200, isFeatured: false, isVirtual: false,
    tags: ['Fundraiser', 'Networking', 'Inaugural'],
  },
  {
    id: '6', slug: 'tree-planting-drive-ogun-2025', type: 'COMMUNITY', status: 'PAST',
    title: 'Community Tree Planting Drive — Lagos & Ogun 2025',
    description: '340 volunteers joined AOF\'s inaugural tree-planting campaign across seven communities in Lagos and Ogun states, planting 1,850 trees in a single weekend.',
    date: 'Saturday, 6 December 2025', time: '7:00 AM – 1:00 PM WAT',
    location: 'Multiple sites, Lagos & Ogun States',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    registrations: 340, capacity: 400, isFeatured: false, isVirtual: false,
    tags: ['Environment', 'Volunteer', 'Community'],
  },
]

const TYPE_COLORS: Record<string, string> = {
  GALA: 'bg-gold-100 text-gold-800',
  CONFERENCE: 'bg-blue-100 text-blue-700',
  OUTREACH: 'bg-red-100 text-red-700',
  VIRTUAL: 'bg-purple-100 text-purple-700',
  COMMUNITY: 'bg-emerald-100 text-emerald-700',
  WORKSHOP: 'bg-orange-100 text-orange-700',
}

export default function EventsPage() {
  const featured = EVENTS.find(e => e.isFeatured)
  const upcoming = EVENTS.filter(e => !e.isFeatured && e.status === 'UPCOMING')
  const past = EVENTS.filter(e => e.status === 'PAST')

  return (
    <main id="main-content">
      <PageHero
        title="Events & Programmes"
        subtitle="Conferences, outreaches, galas, workshops, and virtual sessions — in Nigeria and across the globe."
        eyebrow="Get Involved"
        breadcrumbs={[{ label: 'Events', href: '/events' }]}
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
        size="sm"
      />

      <section className="section">
        <div className="container-xl">
          {/* Featured Event */}
          {featured && (
            <FadeUp className="mb-12">
              <Badge variant="gold" className="mb-4">Featured Event</Badge>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-card">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${TYPE_COLORS[featured.type] || 'bg-neutral-100 text-neutral-700'}`}>
                        {featured.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="heading-2 mb-4">{featured.title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">{featured.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="size-4 text-brand-600" />
                        <span>{featured.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="size-4 text-brand-600" />
                        <span>{featured.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="size-4 text-brand-600" />
                        <span>{featured.location}</span>
                      </div>
                      {featured.capacity && (
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="size-4 text-brand-600" />
                          <span>{featured.registrations} / {featured.capacity} registered</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="gold" asChild>
                        <Link href={`/events/${featured.slug}`}>Register Now</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/events/${featured.slug}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          )}

          {/* Upcoming Events */}
          <SlideIn from="left" className="mb-6">
            <h2 className="heading-2">Upcoming Events</h2>
          </SlideIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcoming.map(event => (
              <StaggerItem key={event.id} direction="scale">
                <Card hover className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative h-48">
                    <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${TYPE_COLORS[event.type] || 'bg-neutral-100 text-neutral-700'}`}>
                        {event.type}
                      </span>
                      {event.isVirtual && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 flex items-center gap-1">
                          <Video className="size-3" /> Virtual
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg mb-3 line-clamp-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Calendar className="size-3.5" /><span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <MapPin className="size-3.5" /><span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 flex-1">{event.description}</p>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/events/${event.slug}`}>Register <ArrowRight className="size-3.5" /></Link>
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Past Events */}
          {past.length > 0 && (
            <>
              <SlideIn from="left" className="mb-6">
                <h2 className="heading-2">Past Events</h2>
              </SlideIn>
              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                {past.map(event => (
                  <StaggerItem key={event.id} direction="up">
                    <Card className="overflow-hidden flex flex-col h-full opacity-85 transition-all duration-300 hover:opacity-100 hover:shadow-card">
                      <div className="relative h-44">
                        <Image src={event.image} alt={event.title} fill className="object-cover grayscale-[30%]" sizes="(max-width: 640px) 100vw, 50vw" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-neutral-200 text-neutral-600">
                            Past Event
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display font-semibold text-base mb-2 line-clamp-2">{event.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                          <Calendar className="size-3.5" /><span>{event.date}</span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{event.description}</p>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
