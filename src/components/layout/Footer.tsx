import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { AOFLogo } from '@/components/shared/AOFLogo'
import { FOUNDATION } from '@/lib/constants'

const FOOTER_LINKS = {
  organization: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Founder', href: '/about/founder' },
    { label: 'Leadership Team', href: '/about/leadership' },
    { label: 'Mission & Vision', href: '/about/mission' },
    { label: 'Annual Reports', href: '/resources/reports' },
    { label: 'Financial Statements', href: '/resources/financials' },
    { label: 'Careers', href: '/careers' },
  ],
  programs: [
    { label: 'Education & Youth', href: '/programs/education' },
    { label: 'Youth Mentorship', href: '/programs/mentorship' },
    { label: 'Healthcare Outreaches', href: '/programs/healthcare' },
    { label: 'Environmental Sustainability', href: '/programs/environment' },
    { label: 'Emergency Relief', href: '/programs/emergency' },
    { label: 'All Programs', href: '/programs' },
  ],
  getInvolved: [
    { label: 'Donate Once', href: '/donate' },
    { label: 'Monthly Giving', href: '/donate?frequency=monthly' },
    { label: 'Corporate Giving', href: '/donate?type=corporate' },
    { label: 'Become a Volunteer', href: '/volunteer' },
    { label: 'Partner With Us', href: '/partners' },
    { label: 'Fundraise for Us', href: '/campaigns' },
    { label: 'Apply for Grants', href: '/resources/grants' },
  ],
  resources: [
    { label: 'News & Blog', href: '/news' },
    { label: 'Media Gallery', href: '/media' },
    { label: 'Press Releases', href: '/press' },
    { label: 'Impact Dashboard', href: '/impact' },
    { label: 'Success Stories', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

const SOCIAL_LINKS = [
  {
    name: 'Twitter / X',
    href: FOUNDATION.socialMedia.twitter,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: FOUNDATION.socialMedia.facebook,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: FOUNDATION.socialMedia.instagram,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: FOUNDATION.socialMedia.linkedin,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: FOUNDATION.socialMedia.youtube,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="Home">
              <AOFLogo variant="white" className="mb-6 h-12 w-auto" />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/65">
              Empowering people and transforming communities through education,
              healthcare, environmental sustainability, mentorship, and emergency
              humanitarian response.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${FOUNDATION.email}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                {FOUNDATION.email}
              </a>
              <a
                href={`tel:${FOUNDATION.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                {FOUNDATION.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>
                  {FOUNDATION.address.street},<br />
                  {FOUNDATION.address.city}, {FOUNDATION.address.state},<br />
                  {FOUNDATION.address.country}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-all hover:bg-gold hover:text-forest-dark"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
                  Organization
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.organization.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
                  Programs
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.programs.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
                  Get Involved
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.getInvolved.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Strip */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="mb-1.5 font-serif text-xl font-bold">
                Stay in the loop
              </h3>
              <p className="text-sm text-white/60">
                Get our impact updates, program news, and upcoming events
                delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition-all hover:bg-gold-light"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40 md:justify-start">
              <span>
                &copy; {new Date().getFullYear()} {FOUNDATION.name}. All rights reserved.
              </span>
              <span className="hidden md:inline">|</span>
              <span>RC: {FOUNDATION.registrationNumber}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Accessibility', href: '/accessibility' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/40 transition-colors hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/25">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-gold text-gold" />
            <span>for communities that deserve world-class support.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
