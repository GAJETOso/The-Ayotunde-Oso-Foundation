'use client'

import * as React from 'react'
import { gtag, trackEvent } from '@/lib/utils'
import type { AnalyticsEvent, AnalyticsEventName } from '@/types'

export function useAnalytics() {
  const track = React.useCallback((event: AnalyticsEvent) => {
    trackEvent(event)
  }, [])

  const trackPageView = React.useCallback((url: string, title?: string) => {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
      page_title: title,
    })
  }, [])

  const trackDonation = React.useCallback((amount: number, currency: string, method: string) => {
    track({
      name: 'donation_completed' as AnalyticsEventName,
      properties: { amount, currency, payment_method: method },
    })
    // Enhanced ecommerce
    gtag('event', 'purchase', {
      currency,
      value: amount,
      transaction_id: `don_${Date.now()}`,
      items: [{ item_name: 'Donation', price: amount, quantity: 1 }],
    })
  }, [track])

  const trackVolunteerSignup = React.useCallback((program?: string) => {
    track({
      name: 'volunteer_signup' as AnalyticsEventName,
      properties: { program },
    })
  }, [track])

  const trackNewsletterSignup = React.useCallback((source?: string) => {
    track({
      name: 'newsletter_signup' as AnalyticsEventName,
      properties: { source },
    })
  }, [track])

  const trackKomaiInteraction = React.useCallback((intent: string) => {
    track({
      name: 'komai_interaction' as AnalyticsEventName,
      properties: { intent },
    })
  }, [track])

  return {
    track,
    trackPageView,
    trackDonation,
    trackVolunteerSignup,
    trackNewsletterSignup,
    trackKomaiInteraction,
  }
}
