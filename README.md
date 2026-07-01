# The Ayotunde Oso Foundation

> **Empowering people. Transforming communities. Creating lasting impact.**

[![CI/CD](https://github.com/gajetoso/the-ayotunde-oso-foundation/actions/workflows/ci.yml/badge.svg)](https://github.com/gajetoso/the-ayotunde-oso-foundation/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com)

---

## Overview

This is the official web platform of **The Ayotunde Oso Foundation** — a world-class humanitarian organization serving communities through education, healthcare, environmental sustainability, mentorship, and emergency response.

Built with enterprise-grade technology, the platform serves as:
- **Information & Storytelling Hub** — Mission, programs, impact, and success stories
- **Donation Platform** — Multi-currency, recurring, and campaign-based giving
- **Volunteer Portal** — Registration, management, and community engagement
- **Grant Application System** — Structured grant discovery and application
- **Impact Dashboard** — Real-time data visualization and transparency reporting
- **AI-Powered Assistant** — KOMAI: Knowledge, Opportunity, Mentorship, Assistance, Intelligence
- **Event Platform** — Registration, ticketing, and community events
- **Admin CMS** — Full content management for foundation staff

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS 3.4 + Framer Motion |
| UI Components | Radix UI + shadcn/ui |
| Database | PostgreSQL + Prisma ORM |
| Auth | Clerk |
| Payments | Stripe + Paystack + Flutterwave |
| AI | Anthropic Claude API |
| Storage | Cloudinary + AWS S3 |
| Cache | Redis (Upstash) |
| Email | Resend + Nodemailer |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Deployment | Vercel |
| CI/CD | GitHub Actions |

---

## Getting Started

### Prerequisites

- Node.js ≥ 20.0.0
- npm ≥ 10.0.0
- PostgreSQL database
- Redis instance (Upstash recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/gajetoso/the-ayotunde-oso-foundation.git
cd the-ayotunde-oso-foundation

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Set up the database
npm run db:migrate
npm run db:seed

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

See [`.env.example`](.env.example) for all required environment variables with descriptions.

---

## Project Structure

```
├── .github/                    # GitHub Actions workflows
├── docs/                       # Developer documentation
├── prisma/                     # Database schema and migrations
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Authentication pages
│   │   ├── (main)/             # Public-facing pages
│   │   ├── (policies)/         # Legal and policy pages
│   │   ├── admin/              # Admin dashboard
│   │   ├── api/                # API routes
│   │   └── dashboard/          # User dashboard
│   ├── components/
│   │   ├── admin/              # Admin-only components
│   │   ├── donate/             # Donation components
│   │   ├── home/               # Homepage sections
│   │   ├── impact/             # Impact dashboard
│   │   ├── komai/              # KOMAI AI chatbot
│   │   ├── layout/             # Header, footer, nav
│   │   ├── providers/          # React context providers
│   │   ├── shared/             # Reusable components
│   │   └── ui/                 # Base UI components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities, integrations
│   ├── styles/                 # Global CSS
│   └── types/                  # TypeScript types
├── __tests__/                  # Test files
└── playwright/                 # E2E tests
```

---

## Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
npm run test         # Run Jest tests
npm run test:e2e     # Run Playwright E2E tests
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed the database
npm run db:studio    # Open Prisma Studio
npm run analyze      # Bundle size analysis
```

---

## Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for complete deployment instructions.

Quick deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gajetoso/the-ayotunde-oso-foundation)

---

## Documentation

| Document | Description |
|---|---|
| [Developer Guide](docs/DEVELOPER.md) | Setup, architecture, conventions |
| [Deployment Guide](docs/DEPLOYMENT.md) | Production deployment steps |
| [Admin Guide](docs/ADMIN.md) | CMS and admin dashboard usage |
| [API Reference](docs/API.md) | REST API documentation |
| [Brand Handbook](docs/BRAND.md) | Visual identity and design system |
| [KOMAI AI Guide](docs/KOMAI.md) | AI assistant configuration |

---

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

## About The Foundation

The Ayotunde Oso Foundation is dedicated to empowering individuals and transforming communities through sustainable programs in education, healthcare, environmental stewardship, youth mentorship, and emergency humanitarian response.

**Website:** [ayotundeosoFoundation.org](https://ayotundeosofoundation.org)  
**Email:** info@ayotundeosofoundation.org  
**Social:** [@AyotundeOsoFdn](https://twitter.com/AyotundeOsoFdn)

---

*Built with ❤️ for communities that deserve world-class technology.*
