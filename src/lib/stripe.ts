import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-02-24.acacia',
      typescript: true,
    })
  }
  return stripeInstance
}

export async function createPaymentIntent({
  amount,
  currency = 'usd',
  metadata = {},
}: {
  amount: number
  currency?: string
  metadata?: Record<string, string>
}) {
  const stripe = getStripe()
  return stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // cents
    currency: currency.toLowerCase(),
    automatic_payment_methods: { enabled: true },
    metadata: {
      ...metadata,
      source: 'aof-website',
    },
  })
}

export async function createStripeCustomer({
  email,
  name,
  metadata = {},
}: {
  email: string
  name: string
  metadata?: Record<string, string>
}) {
  const stripe = getStripe()
  return stripe.customers.create({ email, name, metadata })
}

export function verifyWebhookSignature(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  return getStripe().webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
}
