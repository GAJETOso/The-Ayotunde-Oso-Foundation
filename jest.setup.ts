import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
  redirect: jest.fn(),
}));

// Mock next/font
jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter', variable: '--font-inter' }),
  Playfair_Display: () => ({ className: 'playfair', variable: '--font-playfair' }),
}));

// Mock Clerk
jest.mock('@clerk/nextjs', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  SignIn: () => null,
  SignUp: () => null,
  useUser: () => ({ isSignedIn: false, user: null }),
  useAuth: () => ({ userId: null, isSignedIn: false }),
  auth: jest.fn().mockResolvedValue({ userId: null }),
  currentUser: jest.fn().mockResolvedValue(null),
}));

jest.mock('@clerk/nextjs/server', () => ({
  auth: jest.fn().mockResolvedValue({ userId: null, sessionClaims: null }),
  currentUser: jest.fn().mockResolvedValue(null),
  clerkMiddleware: jest.fn(),
  createRouteMatcher: jest.fn(() => jest.fn()),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
      require('react').createElement('div', props, children),
    section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) =>
      require('react').createElement('section', props, children),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
      require('react').createElement('h1', props, children),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) =>
      require('react').createElement('p', props, children),
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) =>
      require('react').createElement('span', props, children),
    button: ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) =>
      require('react').createElement('button', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => 0,
  useInView: () => true,
}));

// Suppress specific console warnings in tests
const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render') ||
      args[0].includes('Warning: An update to') ||
      args[0].includes('not wrapped in act'))
  ) {
    return;
  }
  originalConsoleError(...args);
};
