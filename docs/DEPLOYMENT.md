# Deployment Guide

## Prerequisites

- Vercel account with project created
- PostgreSQL database (Neon, Supabase, or Railway recommended)
- All third-party accounts configured (Clerk, Stripe, Resend, Upstash, Anthropic)

## Environment Variables

All environment variables from `.env.example` must be set in Vercel's environment variable dashboard before deploying.

**Critical variables:**
- `DATABASE_URL` — PostgreSQL connection string with connection pooling (use `?pgbouncer=true&connection_limit=1` for serverless)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY`
- `ANTHROPIC_API_KEY`
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `RESEND_API_KEY`
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_SITE_URL` — Set to `https://ayotundeosofouncation.org`

## Database Setup (Production)

```bash
# Apply migrations to production database
npx prisma migrate deploy

# Seed initial data (one-time)
npx ts-node prisma/seed.ts
```

## Deployment Process

### Automatic (Recommended)

Pushes to `main` branch trigger automatic deployment via the GitHub Actions workflow (`.github/workflows/deploy.yml`).

The workflow:
1. Runs database migrations
2. Deploys to Vercel production

### Manual

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Stripe Webhook Setup

1. In Stripe Dashboard → Developers → Webhooks → Add endpoint
2. URL: `https://ayotundeosofouncation.org/api/webhooks/stripe`
3. Events to listen for:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.refunded`
4. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

## Paystack Webhook Setup

1. In Paystack Dashboard → Settings → API Keys & Webhooks
2. Webhook URL: `https://ayotundeosofouncation.org/api/webhooks/paystack`
3. Verify your secret key matches `PAYSTACK_SECRET_KEY`

## Clerk Configuration

1. In Clerk Dashboard → Configure → Paths:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/dashboard`
   - After sign-up: `/dashboard`
2. To grant admin access to a user:
   - In Clerk Dashboard → Users → select user
   - Edit public metadata: `{ "role": "admin" }`

## Domain Configuration

1. In Vercel → Project → Settings → Domains
2. Add `ayotundeosofouncation.org` and `www.ayotundeosofouncation.org`
3. Update DNS records at your registrar per Vercel's instructions
4. SSL is provisioned automatically by Vercel

## Performance Checklist

- [ ] Images optimized via Next.js `<Image>` component
- [ ] API routes have rate limiting enabled
- [ ] Redis cache configured for search and heavy queries
- [ ] `ANALYZE=true npm run build` run to check bundle size
- [ ] Core Web Vitals checked with Lighthouse
- [ ] Vercel Analytics enabled in project settings

## Monitoring

- **Errors:** Vercel Functions logs in dashboard
- **Performance:** Vercel Analytics
- **Uptime:** Configure uptime monitoring (e.g., BetterUptime, Checkly)
- **Database:** Monitor via your database provider's dashboard
