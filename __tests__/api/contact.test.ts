import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

// Mock dependencies
jest.mock('@/lib/db', () => ({
  prisma: {
    contactSubmission: {
      create: jest.fn().mockResolvedValue({ id: 'test-id' }),
    },
  },
}));

jest.mock('@/lib/redis', () => ({
  cache: {
    rateLimit: jest.fn().mockResolvedValue(false),
  },
}));

jest.mock('@/lib/email', () => ({
  sendContactConfirmation: jest.fn().mockResolvedValue(undefined),
}));

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '127.0.0.1' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => jest.clearAllMocks());

  it('returns 200 for valid submission', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message that is long enough to pass validation.',
      department: 'GENERAL',
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  it('returns 422 for missing required fields', async () => {
    const req = makeRequest({ name: 'Test' });
    const res = await POST(req);
    expect(res.status).toBe(422);
  });

  it('returns 422 for invalid email', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'not-an-email',
      subject: 'Test',
      message: 'Long enough message for validation purposes here.',
      department: 'GENERAL',
    });
    const res = await POST(req);
    expect(res.status).toBe(422);
  });

  it('returns 422 for message too short', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test',
      message: 'Too short',
      department: 'GENERAL',
    });
    const res = await POST(req);
    expect(res.status).toBe(422);
  });

  it('returns 429 when rate limit is exceeded', async () => {
    const { cache } = require('@/lib/redis');
    cache.rateLimit.mockResolvedValueOnce(true);
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message that is long enough.',
      department: 'GENERAL',
    });
    const res = await POST(req);
    expect(res.status).toBe(429);
  });
});
