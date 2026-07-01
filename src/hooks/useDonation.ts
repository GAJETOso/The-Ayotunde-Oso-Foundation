'use client'

import * as React from 'react'
import { toast } from '@/components/ui/toast'
import type { DonationFormData, DonationFrequency, PaymentMethod, Currency } from '@/types'

type DonationStep = 'amount' | 'details' | 'payment' | 'confirmation'

type DonationState = {
  step: DonationStep
  amount: number
  customAmount: string
  frequency: DonationFrequency
  currency: Currency
  paymentMethod: PaymentMethod
  dedicatedTo: string
  message: string
  anonymous: boolean
  email: string
  firstName: string
  lastName: string
  isLoading: boolean
  clientSecret: string | null
  donationId: string | null
  programDesignation: string
}

const INITIAL_STATE: DonationState = {
  step: 'amount',
  amount: 50,
  customAmount: '',
  frequency: 'one-time',
  currency: 'USD',
  paymentMethod: 'stripe',
  dedicatedTo: '',
  message: '',
  anonymous: false,
  email: '',
  firstName: '',
  lastName: '',
  isLoading: false,
  clientSecret: null,
  donationId: null,
  programDesignation: '',
}

export function useDonation() {
  const [state, setState] = React.useState<DonationState>(INITIAL_STATE)

  const update = React.useCallback(
    (partial: Partial<DonationState>) => setState(s => ({ ...s, ...partial })),
    []
  )

  const selectAmount = React.useCallback((amount: number) => {
    update({ amount, customAmount: '' })
  }, [update])

  const setCustomAmount = React.useCallback((value: string) => {
    const parsed = parseFloat(value)
    update({ customAmount: value, amount: isNaN(parsed) ? 0 : parsed })
  }, [update])

  const nextStep = React.useCallback(() => {
    const steps: DonationStep[] = ['amount', 'details', 'payment', 'confirmation']
    const current = steps.indexOf(state.step)
    if (current < steps.length - 1) {
      update({ step: steps[current + 1] })
    }
  }, [state.step, update])

  const prevStep = React.useCallback(() => {
    const steps: DonationStep[] = ['amount', 'details', 'payment', 'confirmation']
    const current = steps.indexOf(state.step)
    if (current > 0) {
      update({ step: steps[current - 1] })
    }
  }, [state.step, update])

  const createPaymentIntent = React.useCallback(async () => {
    update({ isLoading: true })
    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: state.amount,
          currency: state.currency,
          frequency: state.frequency,
          paymentMethod: state.paymentMethod,
          email: state.email,
          firstName: state.firstName,
          lastName: state.lastName,
          message: state.message,
          anonymous: state.anonymous,
          dedicatedTo: state.dedicatedTo,
          programDesignation: state.programDesignation,
        } satisfies Partial<DonationFormData>),
      })

      if (!res.ok) throw new Error('Failed to create payment intent')
      const data = await res.json()
      update({ clientSecret: data.clientSecret, donationId: data.donationId, isLoading: false })
      return data
    } catch (error) {
      toast.error('Payment setup failed. Please try again.')
      update({ isLoading: false })
      throw error
    }
  }, [state, update])

  const reset = React.useCallback(() => setState(INITIAL_STATE), [])

  return {
    ...state,
    update,
    selectAmount,
    setCustomAmount,
    nextStep,
    prevStep,
    createPaymentIntent,
    reset,
  }
}
