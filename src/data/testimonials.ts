import type { Testimonial } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chidinma Okafor',
    title: 'AOF Scholar, 2025',
    organization: 'University of Lagos',
    location: 'Lagos, Nigeria',
    content:
      'The AOF scholarship changed everything for me. Growing up in Ajegunle, I never imagined I would attend university. Today I am studying Computer Science and mentoring younger girls in my community. The foundation did not just give me money — they gave me a future.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
    rating: 5,
    type: 'beneficiary',
    program: 'education',
    isPublished: true,
    isFeatured: true,
    date: new Date('2026-01-10'),
  },
  {
    id: '2',
    name: 'Dr. Emeka Nwosu',
    title: 'Volunteer Physician',
    organization: 'Lagos University Teaching Hospital',
    location: 'Lagos, Nigeria',
    content:
      'I have volunteered at three AOF medical outreaches and what I witness every time moves me deeply. People who have never had a blood pressure check in their lives, children whose eye conditions went unnoticed for years — the foundation is reaching the truly unreached. This is healthcare equity in action.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    rating: 5,
    type: 'volunteer',
    program: 'healthcare',
    isPublished: true,
    isFeatured: true,
    date: new Date('2025-10-15'),
  },
  {
    id: '3',
    name: 'Fatima Al-Hassan',
    title: 'Community Leader',
    organization: 'Kano Community Association',
    location: 'Kano, Nigeria',
    content:
      'When flooding destroyed our community, we had nowhere to turn. The Ayotunde Oso Foundation arrived within two days with food, clean water, and medical supplies. More than the materials, their team stayed with us, helping us rebuild. They are true partners in our recovery.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400',
    rating: 5,
    type: 'beneficiary',
    program: 'emergency',
    isPublished: true,
    isFeatured: true,
    date: new Date('2025-11-20'),
  },
  {
    id: '4',
    name: 'Adewale Bankole',
    title: 'Monthly Donor & Board Advocate',
    organization: 'Bankole Ventures Ltd.',
    location: 'Ibadan, Nigeria',
    content:
      'I have supported many charities over the years, but the Ayotunde Oso Foundation stands out for its accountability. I receive detailed impact reports, my donations are trackable, and I can see exactly what each naira is doing. This is how nonprofit work should be done.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 5,
    type: 'donor',
    isPublished: true,
    isFeatured: true,
    date: new Date('2026-03-01'),
  },
]

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.isFeatured)
