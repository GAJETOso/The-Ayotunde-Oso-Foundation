import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EVENTS: Record<string, {
  title: string;
  type: string;
  date: string;
  endDate: string;
  location: string;
  isVirtual: boolean;
  capacity: number;
  ticketPrice: number;
  description: string;
  agenda: { time: string; session: string }[];
  speakers: { name: string; role: string }[];
}> = {
  'aof-annual-gala-2025': {
    title: 'AOF Annual Gala 2025: A Night of Impact',
    type: 'GALA',
    date: '2025-11-15T18:00:00',
    endDate: '2025-11-15T23:00:00',
    location: 'Eko Hotel & Suites, Lagos',
    isVirtual: false,
    capacity: 500,
    ticketPrice: 50000,
    description: 'Join us for our flagship annual fundraising gala. An elegant evening of inspiration, music, and community as we celebrate our 2025 impact and raise funds for the year ahead. Featuring dinner, live entertainment, keynote addresses, and our annual impact showcase.',
    agenda: [
      { time: '18:00', session: 'Arrival & Cocktail Reception' },
      { time: '19:00', session: 'Welcome Address & 2025 Impact Showcase' },
      { time: '19:30', session: 'Keynote: The Future of Community Development in Nigeria' },
      { time: '20:00', session: 'Dinner & Live Entertainment' },
      { time: '21:30', session: 'Fundraising Appeal & Community Stories' },
      { time: '22:00', session: 'Awards & Recognition' },
      { time: '22:30', session: 'Closing & Networking' },
    ],
    speakers: [
      { name: 'Ayotunde Oso', role: 'Founder & Executive Director, AOF' },
      { name: 'Dr. Emeka Okonkwo', role: 'Director of Programs, AOF' },
      { name: 'TBA', role: 'Keynote Speaker' },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS[slug];
  if (!event) return { title: 'Event Not Found | AOF' };
  return {
    title: `${event.title} | AOF Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = EVENTS[slug];

  if (!event) notFound();

  const eventDate = new Date(event.date);
  const eventEndDate = new Date(event.endDate);
  const isPast = eventDate < new Date();

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Event"
        title={event.title}
        subtitle={event.description}
        gradient="green"
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: event.title, href: `/events/${slug}` },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Agenda */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">Event Agenda</h2>
                <div className="space-y-3">
                  {event.agenda.map((item) => (
                    <div key={item.time} className="flex gap-4">
                      <div className="text-sm font-mono text-brand-green font-semibold w-14 flex-shrink-0">{item.time}</div>
                      <div className="text-sm text-gray-700 border-l pl-4">{item.session}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              {event.speakers.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-5">Speakers & Guests</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {event.speakers.map((speaker) => (
                      <div key={speaker.name} className="flex items-center gap-3 bg-cream-50 rounded-xl p-4">
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm flex-shrink-0">
                          {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{speaker.name}</div>
                          <div className="text-xs text-gray-500">{speaker.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Registration Card */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <Badge variant="default" className="mb-4">{event.type}</Badge>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex gap-3">
                      <span className="text-lg">📅</span>
                      <div>
                        <div className="font-medium text-gray-900">
                          {eventDate.toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        <div className="text-gray-500">
                          {eventDate.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })} – {eventEndDate.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-lg">📍</span>
                      <div className="text-gray-700">{event.location}</div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-lg">🎫</span>
                      <div className="text-gray-700">
                        {event.ticketPrice === 0 ? 'Free' : `₦${event.ticketPrice.toLocaleString()} per person`}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-lg">👥</span>
                      <div className="text-gray-700">Capacity: {event.capacity} guests</div>
                    </div>
                  </div>

                  {!isPast ? (
                    <Button variant="default" className="w-full mb-3" asChild>
                      <Link href={`/contact?subject=event-registration-${slug}`}>Register Now</Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full mb-3" disabled>Event Has Passed</Button>
                  )}
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/events">&larr; All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
