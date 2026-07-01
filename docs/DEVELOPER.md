# AOF Developer Guide

## Overview

This document covers everything you need to know to develop, test, and deploy the AOF website.

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 15+
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gajetoso/the-ayotunde-oso-foundation.git
cd the-ayotunde-oso-foundation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in all required values in `.env.local`. See `.env.example` for descriptions.

### 4. Set up the database

```bash
# Create your PostgreSQL database
createdb aof_dev

# Run migrations
npx prisma migrate dev

# Seed with sample data
npx ts-node prisma/seed.ts
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Clerk auth route group
│   ├── admin/              # Admin portal (auth-gated)
│   ├── api/                # API routes
│   ├── about/              # About pages
│   ├── programs/           # Program pages
│   └── ...                 # Other public pages
├── components/
│   ├── ai/                 # KOMAI chat components
│   ├── layout/             # Header, Footer
│   ├── shared/             # Reusable shared components
│   └── ui/                 # shadcn/ui component library
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries
│   ├── auth.ts             # Clerk auth helpers
│   ├── constants.ts        # App-wide constants
│   ├── db.ts               # Prisma client singleton
│   ├── design-tokens.ts    # Design system tokens
│   ├── email.ts            # Resend email helpers
│   ├── redis.ts            # Upstash Redis helpers
│   ├── stripe.ts           # Stripe helpers
│   └── utils.ts            # General utilities
├── styles/
│   └── globals.css         # Global CSS, Tailwind directives
└── types/
    └── index.ts            # TypeScript type definitions

prisma/
├── schema.prisma           # Database schema
└── seed.ts                 # Database seed script

__tests__/                  # Jest unit tests
playwright/e2e/             # Playwright E2E tests
docs/                       # Project documentation
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest unit tests |
| `npm test -- --watch` | Run Jest in watch mode |
| `npm test -- --coverage` | Run Jest with coverage |
| `npx playwright test` | Run Playwright E2E tests |
| `npx prisma studio` | Open Prisma Studio (DB GUI) |
| `npx prisma migrate dev` | Run DB migrations in development |
| `npx prisma migrate deploy` | Apply migrations in production |
| `npx prisma generate` | Regenerate Prisma client |

## Design System

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-green` | `#0B4D35` | Primary CTA, headings, links |
| `brand-gold` | `#D4A843` | Secondary CTA, accents |
| `brand-cream` | `#FAF8F4` | Backgrounds, sections |

### Typography

- **Sans-serif:** Inter (body, UI)
- **Serif/Display:** Playfair Display (headings, pull quotes)

### Motion Variants

All animation variants are in `src/lib/design-tokens.ts` as `MOTION_VARIANTS`.

Usage:
```tsx
import { MOTION_VARIANTS } from '@/lib/design-tokens';

<motion.div variants={MOTION_VARIANTS.fadeUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

## Authentication

Authentication is handled by Clerk. The middleware in `middleware.ts` protects:
- `/dashboard` — requires any authenticated user
- `/admin/*` — requires `admin` role (set in Clerk user metadata)

Server-side auth:
```typescript
import { auth, currentUser } from '@clerk/nextjs/server';

const { userId } = await auth();
const user = await currentUser();
```

Role checking:
```typescript
import { requireRole } from '@/lib/auth';

await requireRole('admin'); // throws if user doesn't have this role
```

## API Routes

All API routes are in `src/app/api/`. Each follows this pattern:

1. **Rate limiting** via `cache.rateLimit()` (Redis)
2. **Input validation** via Zod schemas
3. **Database operations** via Prisma
4. **Email notifications** via Resend
5. **JSON response** with appropriate status codes

## Database

Prisma schema is in `prisma/schema.prisma`. Key models:

- `User` — synced from Clerk webhooks
- `Donation` — all donation records
- `Volunteer` — volunteer applications
- `Event` + `EventRegistration` — event management
- `Article` — blog/news articles
- `Program` — program data
- `Project` — project tracking
- `Partner` — partner organization records
- `Campaign` — fundraising campaigns
- `GrantApplication` — grant submissions
- `Testimonial` — community stories
- `NewsletterSubscriber` — email list
- `ContactSubmission` — contact form submissions
- `ImpactStat` — impact metric snapshots

## KOMAI AI

KOMAI is the AOF AI assistant powered by Anthropic Claude. The API route is at `src/app/api/ai/route.ts`.

- Uses **Edge Runtime** for fast response times
- **Streaming** via Server-Sent Events (SSE)
- **Rate limited** to 30 requests/minute per IP
- **System prompt** defined in `KOMAI_CONFIG.systemPrompt` in `src/lib/constants.ts`

To change the model or system prompt, update `src/lib/constants.ts`.

## Testing

### Unit Tests (Jest)

```bash
npm test
```

Tests are in `__tests__/`. Co-locate component tests with component files where preferred.

### E2E Tests (Playwright)

```bash
# Install browsers first (one-time)
npx playwright install chromium

# Run tests
npx playwright test

# Run with UI mode
npx playwright test --ui
```

E2E tests are in `playwright/e2e/`.

## Environment Variables

See `.env.example` for the full list. Required variables:

- `DATABASE_URL` — PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` — Clerk auth
- `ANTHROPIC_API_KEY` — For KOMAI AI
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` — Payments
- `RESEND_API_KEY` — Email delivery
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — Rate limiting & cache
