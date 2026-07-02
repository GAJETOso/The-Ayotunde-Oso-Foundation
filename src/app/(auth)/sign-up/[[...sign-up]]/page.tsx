import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';
import Link from 'next/link';
import { AOFLogo } from '@/components/shared/AOFLogo';

export const metadata: Metadata = {
  title: 'Create Account | The Ayotunde Oso Foundation',
  description: 'Create your AOF account to track donations, manage volunteer activities, and access exclusive resources.',
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="mb-4">
          <AOFLogo className="h-12 w-auto" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Join AOF</h1>
        <p className="text-gray-600 text-sm mt-1">Create your account to track your impact and manage your support</p>
      </div>

      <SignUp
        appearance={{
          elements: {
            rootBox: 'w-full max-w-md',
            card: 'shadow-lg border border-gray-100 rounded-2xl',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton: 'border border-gray-200 hover:bg-gray-50 transition-colors',
            formButtonPrimary: 'bg-brand-green hover:bg-brand-green/90 text-white font-medium',
            footerActionLink: 'text-brand-green hover:underline',
          },
        }}
        redirectUrl="/dashboard"
        signInUrl="/sign-in"
      />

      <p className="mt-8 text-sm text-gray-500">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-brand-green font-medium hover:underline">
          Sign in
        </Link>
      </p>

      <p className="mt-4 text-xs text-gray-400 text-center max-w-sm">
        By creating an account, you agree to our{' '}
        <Link href="/terms" className="text-brand-green hover:underline">Terms of Service</Link>{' '}
        and{' '}
        <Link href="/privacy" className="text-brand-green hover:underline">Privacy Policy</Link>.
      </p>
    </main>
  );
}
