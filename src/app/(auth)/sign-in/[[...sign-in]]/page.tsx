import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';
import Link from 'next/link';
import { AOFLogo } from '@/components/shared/AOFLogo';

export const metadata: Metadata = {
  title: 'Sign In | The Ayotunde Oso Foundation',
  description: 'Sign in to your AOF donor or volunteer account.',
};

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="mb-4">
          <AOFLogo className="h-12 w-auto" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 text-sm mt-1">Sign in to your donor or volunteer account</p>
      </div>

      <SignIn
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
        signUpUrl="/sign-up"
      />

      <p className="mt-8 text-sm text-gray-500">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="text-brand-green font-medium hover:underline">
          Create one
        </Link>
      </p>
    </main>
  );
}
