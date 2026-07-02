/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { cache } from '@/lib/redis';

jest.mock('@/lib/db', () => ({
  __esModule: true,
  default: {
    contactSubmission: {
      create: jest.fn().mockResolvedValue({ id: 'test-id' }),
    },
  },
}));

jest.mock('@/lib/redis', () => ({
  cache: {
    rateLimit: jest.fn().mockResolvedValue({ allowed: true }),
  },
}));

jest.mock('@/lib/email', () => ({
  sendContactConfirmation: jest.fn().mockResolvedValue(undefined),
}));

const mockCreate = db.contactSubmission.create as jest.Mock;
const mockRateLimit = cache.rateLimit as jest.Mock;

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '127.0.0.1' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockRateLimit.mockResolvedValue({ allowed: true });
    mockCreate.mockResolvedValue({ id: 'test-id' });
  });

  it('returns 200 for valid submission', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message that is long enough to pass validation.',
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  it('returns 400 for missing required fields', async () => {
    const req = makeRequest({ name: 'Test' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 for invalid email', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'not-an-email',
      subject: 'Test',
      message: 'Long enough message for validation purposes here.',
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 for message too short', async () => {
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test',
      message: 'Too short',
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 429 when rate limit is exceeded', async () => {
    mockRateLimit.mockResolvedValueOnce({ allowed: false });
    const req = makeRequest({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message that is long enough.',
    });
    const res = await POST(req);
    expect(res.status).toBe(429);
  });
});
