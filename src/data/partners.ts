export type PartnerCategory =
  | 'corporate'
  | 'government'
  | 'academic'
  | 'ngo'
  | 'media'

export type Partner = {
  id: string
  name: string
  category: PartnerCategory
  website?: string
  tier?: 'platinum' | 'gold' | 'silver' | 'community'
}

export const PARTNERS: Partner[] = [
  { id: '1', name: 'MTN Foundation', category: 'corporate', tier: 'gold' },
  { id: '2', name: 'Access Bank', category: 'corporate', tier: 'gold' },
  { id: '3', name: 'Lagos State Ministry of Health', category: 'government', tier: 'silver' },
  { id: '4', name: 'Ekiti State Government', category: 'government', tier: 'silver' },
  { id: '5', name: 'Channels TV', category: 'media', tier: 'community' },
  { id: '6', name: 'University of Lagos', category: 'academic', tier: 'silver' },
  { id: '7', name: 'First Bank of Nigeria', category: 'corporate', tier: 'gold' },
  { id: '8', name: 'WaterAid Nigeria', category: 'ngo', tier: 'community' },
  { id: '9', name: 'BusinessDay Nigeria', category: 'media', tier: 'community' },
  { id: '10', name: 'Sterling Bank', category: 'corporate', tier: 'silver' },
]

export const FEATURED_PARTNERS = PARTNERS.filter((p) =>
  p.tier === 'platinum' || p.tier === 'gold'
)
