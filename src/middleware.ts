import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)', '/admin']);
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/dashboard']);

function applySecurityHeaders(res: NextResponse): NextResponse {
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-XSS-Protection', '1; mode=block');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(self)');
  return res;
}

const withClerk = clerkMiddleware(async (auth, request: NextRequest) => {
  const { userId, sessionClaims } = await auth();

  if (isProtectedRoute(request) && !userId) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (isAdminRoute(request)) {
    if (!userId) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('redirect_url', request.url);
      return NextResponse.redirect(signInUrl);
    }
    const role = (sessionClaims?.publicMetadata as { role?: string })?.role;
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return applySecurityHeaders(NextResponse.next());
});

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  try {
    return await withClerk(request, event);
  } catch (err) {
    // Clerk throws when publishable key is missing/invalid (CI placeholder keys).
    // Fall through with security headers so the server starts and serves requests.
    if (err instanceof Error && err.message.includes('key not valid')) {
      return applySecurityHeaders(NextResponse.next());
    }
    throw err;
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
