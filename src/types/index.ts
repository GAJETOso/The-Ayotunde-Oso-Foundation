// ============================================================
// The Ayotunde Oso Foundation — TypeScript Type Definitions
// ============================================================

export interface Foundation {
  name: string
  tagline: string
  mission: string
  vision: string
  founded: number
  registrationNumber: string
  address: Address
  contact: ContactInfo
  socialMedia: SocialMedia
}

export interface Address {
  street: string
  city: string
  state: string
  country: string
  postalCode?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface ContactInfo {
  email: string
  phone: string
  website: string
}

export interface SocialMedia {
  twitter?: string
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
}

// ============================================================
// People
// ============================================================

export interface Person {
  id: string
  name: string
  title: string
  role: TeamRole
  bio: string
  shortBio?: string
  image: string
  email?: string
  phone?: string
  linkedin?: string
  twitter?: string
  isActive: boolean
  joinedAt: Date
  order: number
}

export type TeamRole =
  | 'founder'
  | 'trustee'
  | 'executive'
  | 'advisory'
  | 'staff'
  | 'volunteer'

export interface Volunteer {
  id: string
  userId?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  skills: string[]
  availability: VolunteerAvailability
  programs: string[]
  experience: string
  motivation: string
  status: VolunteerStatus
  hoursContributed: number
  joinedAt: Date
  lastActiveAt?: Date
}

export type VolunteerAvailability =
  | 'weekdays'
  | 'weekends'
  | 'evenings'
  | 'flexible'
  | 'remote-only'

export type VolunteerStatus =
  | 'pending'
  | 'approved'
  | 'active'
  | 'inactive'
  | 'rejected'

// ============================================================
// Programs
// ============================================================

export interface Program {
  id: string
  slug: string
  name: string
  category: ProgramCategory
  description: string
  shortDescription: string
  image: string
  icon: string
  color: string
  objectives: string[]
  beneficiaries: string
  impact: ProgramImpact
  isActive: boolean
  startedAt: Date
  projects: Project[]
}

export type ProgramCategory =
  | 'education'
  | 'mentorship'
  | 'healthcare'
  | 'environment'
  | 'emergency'
  | 'community'

export interface ProgramImpact {
  peopleReached: number
  communitiesServed: number
  keyAchievement: string
}

// ============================================================
// Projects
// ============================================================

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  program: ProgramCategory
  status: ProjectStatus
  location: string
  country: string
  startDate: Date
  endDate?: Date
  budget: number
  raised: number
  currency: Currency
  beneficiaries: number
  image: string
  images: string[]
  tags: string[]
  updates: ProjectUpdate[]
  isHighlighted: boolean
  isFeatured: boolean
}

export type ProjectStatus =
  | 'planning'
  | 'active'
  | 'completed'
  | 'paused'
  | 'cancelled'

export interface ProjectUpdate {
  id: string
  title: string
  content: string
  date: Date
  image?: string
  author: string
}

// ============================================================
// Donations
// ============================================================

export interface Donation {
  id: string
  donorId?: string
  donorName?: string
  donorEmail: string
  amount: number
  currency: Currency
  frequency: DonationFrequency
  paymentMethod: PaymentMethod
  paymentIntentId?: string
  campaignId?: string
  projectId?: string
  message?: string
  isAnonymous: boolean
  isTribute: boolean
  tributeName?: string
  tributeType?: 'honor' | 'memory'
  receiptSent: boolean
  status: DonationStatus
  createdAt: Date
  metadata?: Record<string, string>
}

export type DonationFrequency =
  | 'one-time'
  | 'monthly'
  | 'quarterly'
  | 'annually'

export type PaymentMethod =
  | 'stripe'
  | 'paystack'
  | 'flutterwave'
  | 'paypal'
  | 'bank-transfer'
  | 'check'

export type DonationStatus =
  | 'pending'
  | 'processing'
  | 'succeeded'
  | 'failed'
  | 'refunded'
  | 'cancelled'

export type Currency =
  | 'USD'
  | 'GBP'
  | 'EUR'
  | 'NGN'
  | 'GHS'
  | 'ZAR'
  | 'KES'
  | 'CAD'
  | 'AUD'

// ============================================================
// Events
// ============================================================

export interface Event {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  type: EventType
  status: EventStatus
  location: EventLocation
  startDate: Date
  endDate: Date
  image: string
  capacity?: number
  registrations: number
  isPublished: boolean
  isFeatured: boolean
  speakers?: EventSpeaker[]
  agenda?: EventAgendaItem[]
  registrationLink?: string
  tags: string[]
}

export type EventType =
  | 'outreach'
  | 'fundraiser'
  | 'gala'
  | 'workshop'
  | 'conference'
  | 'volunteer-day'
  | 'awareness'
  | 'webinar'

export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled'

export interface EventLocation {
  type: 'physical' | 'virtual' | 'hybrid'
  address?: string
  city?: string
  country?: string
  virtualLink?: string
  mapEmbed?: string
}

export interface EventSpeaker {
  name: string
  title: string
  organization: string
  image?: string
  bio?: string
}

export interface EventAgendaItem {
  time: string
  title: string
  description?: string
  speaker?: string
}

// ============================================================
// News & Blog
// ============================================================

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: ArticleCategory
  type: ArticleType
  author: ArticleAuthor
  coverImage: string
  images: string[]
  tags: string[]
  publishedAt: Date
  updatedAt: Date
  isPublished: boolean
  isFeatured: boolean
  readingTime: number
  views: number
  seo?: SEOMeta
}

export type ArticleCategory =
  | 'news'
  | 'impact'
  | 'health'
  | 'education'
  | 'environment'
  | 'mentorship'
  | 'emergency'
  | 'community'
  | 'announcement'

export type ArticleType = 'news' | 'blog' | 'press-release' | 'case-study'

export interface ArticleAuthor {
  name: string
  title?: string
  image?: string
  bio?: string
}

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  id: string
  name: string
  title: string
  organization?: string
  location: string
  content: string
  image?: string
  rating?: number
  type: TestimonialType
  program?: ProgramCategory
  isPublished: boolean
  isFeatured: boolean
  date: Date
}

export type TestimonialType =
  | 'beneficiary'
  | 'volunteer'
  | 'donor'
  | 'partner'
  | 'community-leader'

// ============================================================
// Partners
// ============================================================

export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
  type: PartnerType
  description?: string
  since?: Date
  isActive: boolean
  isFeatured: boolean
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community'
}

export type PartnerType =
  | 'corporate'
  | 'ngo'
  | 'government'
  | 'academic'
  | 'media'
  | 'technology'
  | 'healthcare'

// ============================================================
// Impact Data
// ============================================================

export interface ImpactStats {
  livesImpacted: number
  communitiesReached: number
  volunteersEngaged: number
  countriesPresent: number
  donationsReceived: number
  projectsCompleted: number
  medicalOutreaches: number
  treesPlanted: number
  studentsSupported: number
  youthMentored: number
  emergencyResponses: number
  totalFundsRaised: number
  yearsOfImpact: number
}

export interface ImpactDataPoint {
  year: number
  month?: number
  value: number
  category: string
}

// ============================================================
// Campaigns
// ============================================================

export interface Campaign {
  id: string
  slug: string
  title: string
  description: string
  image: string
  goal: number
  raised: number
  currency: Currency
  donors: number
  startDate: Date
  endDate?: Date
  status: CampaignStatus
  type: CampaignType
  program?: ProgramCategory
  isActive: boolean
  isFeatured: boolean
  tags: string[]
}

export type CampaignStatus =
  | 'draft'
  | 'active'
  | 'paused'
  | 'completed'
  | 'expired'

export type CampaignType =
  | 'general'
  | 'emergency'
  | 'project'
  | 'matching'
  | 'peer-to-peer'
  | 'recurring'

// ============================================================
// KOMAI AI Chatbot
// ============================================================

export interface KomaiMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  tokens?: number
  sentiment?: 'positive' | 'neutral' | 'negative'
  intent?: KomaiIntent
  language?: string
}

export type KomaiIntent =
  | 'general-inquiry'
  | 'donation-help'
  | 'volunteer-info'
  | 'program-info'
  | 'event-info'
  | 'grant-help'
  | 'emergency-resource'
  | 'contact-request'
  | 'escalation'
  | 'feedback'
  | 'translation'
  | 'accessibility'

export interface KomaiSession {
  id: string
  userId?: string
  messages: KomaiMessage[]
  language: string
  startedAt: Date
  lastMessageAt: Date
  isResolved: boolean
  escalatedToHuman: boolean
  feedback?: 1 | 2 | 3 | 4 | 5
}

// ============================================================
// SEO
// ============================================================

export interface SEOMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
  noIndex?: boolean
  structuredData?: object
}

// ============================================================
// Forms
// ============================================================

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  organization?: string
  subject: string
  message: string
  preferredContact: 'email' | 'phone'
  consentToPrivacyPolicy: boolean
}

export interface NewsletterData {
  email: string
  firstName?: string
  interests?: string[]
}

export interface VolunteerApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth?: string
  location: string
  occupation: string
  skills: string[]
  availability: VolunteerAvailability
  hoursPerWeek: number
  programs: string[]
  experience: string
  motivation: string
  references?: string
  hasTransport?: boolean
  emergencyContact?: {
    name: string
    phone: string
    relation: string
  }
  consentToPrivacyPolicy: boolean
  consentToBackgroundCheck?: boolean
}

export interface DonationFormData {
  amount: number
  currency: Currency
  frequency: DonationFrequency
  firstName: string
  lastName: string
  email: string
  phone?: string
  address?: string
  campaignId?: string
  projectId?: string
  message?: string
  isAnonymous: boolean
  isTribute: boolean
  tributeName?: string
  tributeType?: 'honor' | 'memory'
  receiveUpdates: boolean
  paymentMethod: PaymentMethod
}

// ============================================================
// API Responses
// ============================================================

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
  meta?: PaginationMeta
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta
}

// ============================================================
// Navigation
// ============================================================

export interface NavItem {
  label: string
  href: string
  icon?: string
  description?: string
  children?: NavItem[]
  isExternal?: boolean
  badge?: string
  isNew?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

// ============================================================
// Analytics
// ============================================================

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, string | number | boolean>
}

export type AnalyticsEventName =
  | 'page_view'
  | 'donation_started'
  | 'donation_completed'
  | 'volunteer_applied'
  | 'newsletter_subscribed'
  | 'event_registered'
  | 'komai_opened'
  | 'komai_message_sent'
  | 'grant_applied'
  | 'contact_submitted'
  | 'share_clicked'
  | 'download_clicked'

// ============================================================
// Grant Applications
// ============================================================

export interface GrantApplication {
  id: string
  applicantName: string
  organizationName: string
  email: string
  phone: string
  website?: string
  projectTitle: string
  projectDescription: string
  amountRequested: number
  currency: Currency
  projectDuration: string
  targetBeneficiaries: string
  numberOfBeneficiaries: number
  implementationPlan: string
  evaluationMethod: string
  previousGrants?: string
  references: string
  documents?: string[]
  status: GrantStatus
  submittedAt: Date
  reviewedAt?: Date
  reviewer?: string
  reviewNotes?: string
  grantedAmount?: number
}

export type GrantStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'shortlisted'
  | 'approved'
  | 'rejected'
  | 'completed'
