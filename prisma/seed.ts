import { PrismaClient, UserRole, DonationStatus, DonationFrequency, VolunteerStatus, EventType, EventStatus, ArticleCategory, ProjectStatus, PartnerType, CampaignStatus, GrantStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Programs
  const programs = await Promise.all([
    prisma.program.upsert({
      where: { slug: 'education' },
      update: {},
      create: {
        name: 'Education & Youth Development',
        slug: 'education',
        description: 'Comprehensive education support through scholarships, digital learning centers, teacher training, and literacy programs for children and adults in underserved communities.',
        icon: '🏣',
        color: '#3B82F6',
        isActive: true,
        order: 1,
        beneficiaries: 48000,
        stats: [
          { label: 'Scholarships Awarded', value: '2,400+' },
          { label: 'Learning Centers', value: '15' },
          { label: 'Teachers Trained', value: '420' },
        ],
      },
    }),
    prisma.program.upsert({
      where: { slug: 'healthcare' },
      update: {},
      create: {
        name: 'Healthcare Outreaches',
        slug: 'healthcare',
        description: 'Mobile clinics, free medical consultations, maternal health support, and vaccination campaigns bringing healthcare to rural and underserved communities.',
        icon: '❤️',
        color: '#EF4444',
        isActive: true,
        order: 2,
        beneficiaries: 92000,
        stats: [
          { label: 'Consultations', value: '92,000+' },
          { label: 'Mobile Clinics', value: '6' },
          { label: 'Communities Reached', value: '180+' },
        ],
      },
    }),
    prisma.program.upsert({
      where: { slug: 'mentorship' },
      update: {},
      create: {
        name: 'Youth Mentorship',
        slug: 'mentorship',
        description: 'Matching ambitious young Nigerians with experienced professionals for 12-month mentorship journeys across business, technology, medicine, and public service.',
        icon: '🌟',
        color: '#8B5CF6',
        isActive: true,
        order: 3,
        beneficiaries: 3200,
        stats: [
          { label: 'Active Mentorships', value: '840' },
          { label: 'Mentor Network', value: '620' },
          { label: 'Job Placement Rate', value: '78%' },
        ],
      },
    }),
    prisma.program.upsert({
      where: { slug: 'environment' },
      update: {},
      create: {
        name: 'Environmental Sustainability',
        slug: 'environment',
        description: 'Tree planting, clean water access, climate education, and environmental conservation initiatives building a greener Nigeria.',
        icon: '🌿',
        color: '#10B981',
        isActive: true,
        order: 4,
        beneficiaries: 54000,
        stats: [
          { label: 'Trees Planted', value: '1.2M' },
          { label: 'Boreholes Drilled', value: '34' },
          { label: 'Green Schools', value: '50' },
        ],
      },
    }),
    prisma.program.upsert({
      where: { slug: 'emergency' },
      update: {},
      create: {
        name: 'Emergency Humanitarian Relief',
        slug: 'emergency',
        description: 'Rapid response within 72 hours of any disaster. Food, shelter, medical aid, and rebuilding support for affected communities.',
        icon: '🚑',
        color: '#F59E0B',
        isActive: true,
        order: 5,
        beneficiaries: 28000,
        stats: [
          { label: 'Response Time', value: '<72hrs' },
          { label: 'Crises Responded', value: '14' },
          { label: 'People Aided', value: '28,000+' },
        ],
      },
    }),
  ]);
  console.log(`Created ${programs.length} programs`);

  // Impact Stats
  const impactStats = await Promise.all([
    prisma.impactStat.upsert({
      where: { key: 'beneficiaries-total' },
      update: { value: 250000 },
      create: { key: 'beneficiaries-total', label: 'Lives Impacted', value: 250000, unit: '+', category: 'overall', year: 2024 },
    }),
    prisma.impactStat.upsert({
      where: { key: 'communities-reached' },
      update: { value: 340 },
      create: { key: 'communities-reached', label: 'Communities Reached', value: 340, unit: '+', category: 'overall', year: 2024 },
    }),
    prisma.impactStat.upsert({
      where: { key: 'scholarships-awarded' },
      update: { value: 2400 },
      create: { key: 'scholarships-awarded', label: 'Scholarships Awarded', value: 2400, unit: '+', category: 'education', year: 2024 },
    }),
    prisma.impactStat.upsert({
      where: { key: 'medical-consultations' },
      update: { value: 92000 },
      create: { key: 'medical-consultations', label: 'Medical Consultations', value: 92000, unit: '+', category: 'healthcare', year: 2024 },
    }),
    prisma.impactStat.upsert({
      where: { key: 'trees-planted' },
      update: { value: 1200000 },
      create: { key: 'trees-planted', label: 'Trees Planted', value: 1200000, category: 'environment', year: 2024 },
    }),
    prisma.impactStat.upsert({
      where: { key: 'active-volunteers' },
      update: { value: 1240 },
      create: { key: 'active-volunteers', label: 'Active Volunteers', value: 1240, unit: '+', category: 'overall', year: 2024 },
    }),
  ]);
  console.log(`Created ${impactStats.length} impact stats`);

  // Sample Events
  const events = await Promise.all([
    prisma.event.upsert({
      where: { slug: 'aof-annual-gala-2025' },
      update: {},
      create: {
        title: 'AOF Annual Gala 2025: A Night of Impact',
        slug: 'aof-annual-gala-2025',
        description: 'Join us for our flagship annual fundraising gala. An elegant evening of inspiration, music, and community as we celebrate our impact and raise funds for the year ahead.',
        type: EventType.GALA,
        status: EventStatus.PUBLISHED,
        startDate: new Date('2025-11-15T18:00:00'),
        endDate: new Date('2025-11-15T23:00:00'),
        location: 'Eko Hotel & Suites, Lagos',
        isVirtual: false,
        capacity: 500,
        registrations: 0,
        ticketPrice: 50000,
        currency: 'NGN',
      },
    }),
    prisma.event.upsert({
      where: { slug: 'community-health-fair-july-2025' },
      update: {},
      create: {
        title: 'Community Health Fair — Free Medical Screenings',
        slug: 'community-health-fair-july-2025',
        description: 'Free one-day health fair featuring blood pressure checks, diabetes screening, eye tests, dental consultations, and maternal health advice. Open to all community members.',
        type: EventType.OUTREACH,
        status: EventStatus.PUBLISHED,
        startDate: new Date('2025-07-19T08:00:00'),
        endDate: new Date('2025-07-19T17:00:00'),
        location: 'Surulere Community Hall, Lagos',
        isVirtual: false,
        capacity: 1000,
        registrations: 0,
        ticketPrice: 0,
        currency: 'NGN',
      },
    }),
  ]);
  console.log(`Created ${events.length} events`);

  // Sample Articles
  const articles = await Promise.all([
    prisma.article.upsert({
      where: { slug: 'edu-connect-launch-2025' },
      update: {},
      create: {
        title: 'AOF Launches Digital Learning Centers Across Three States',
        slug: 'edu-connect-launch-2025',
        excerpt: 'The Edu-Connect initiative opens 15 new digital learning centers bringing quality education technology to 4,200 students in underserved communities.',
        content: 'Full article content here...',
        category: ArticleCategory.NEWS,
        tags: ['education', 'digital', 'youth', 'lagos'],
        isPublished: true,
        publishedAt: new Date('2025-06-15'),
        readingTime: 4,
        author: 'AOF Communications Team',
      },
    }),
  ]);
  console.log(`Created ${articles.length} articles`);

  // Sample Partners
  const partners = await Promise.all([
    prisma.partner.upsert({
      where: { slug: 'global-health-initiative' },
      update: {},
      create: {
        name: 'Global Health Initiative',
        slug: 'global-health-initiative',
        type: PartnerType.NGO,
        tier: 'PLATINUM',
        description: 'Primary healthcare equipment donor and medical staff trainer.',
        isActive: true,
        since: new Date('2019-01-01'),
      },
    }),
  ]);
  console.log(`Created ${partners.length} partners`);

  // Sample Testimonials
  await prisma.testimonial.upsert({
    where: { id: 'seed-testimonial-1' },
    update: {},
    create: {
      id: 'seed-testimonial-1',
      name: 'Blessing Okafor',
      role: 'Scholar & University Student',
      location: 'Enugu State',
      quote: 'AOF did not just change my trajectory — they changed how I see myself. Today I am on the Dean\'s list at University of Nigeria Nsukka studying Computer Science.',
      program: 'Education',
      isApproved: true,
      isFeatured: true,
    },
  });

  console.log('Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
