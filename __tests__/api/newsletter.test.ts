/**
 * @jest-environment node
 */
import { POST, DELETE } from '@/app/api/newsletter/route';
import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { cache } from '@/lib/redis';

jest.mock('@/lib/db', () => ({
  __esModule: true,
  default: {
    newsletterSubscriber: {
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({ id: 'test-id', email: 'test@example.com' }),
      update: jest.fn().mockResolvedValue({ id: 'test-id' }),
    },
  },
}));

jest.mock('@/lib/redis', () => ({
  cache: {
    rateLimit: jest.fn().mockResolvedValue({ allowed: true }),
  },
}));

jest.mock('@/lib/email', () => ({
  sendNewsletterConfirmation: jest.fn().mockResolvedValue(undefined),
}));

const mockDb = db.newsletterSubscriber as {
  findUnique: jest.Mock;
  create: jest.Mock;
  update: jest.Mock;
};
const mockFindUnique = mockDb.findUnique;
const mockCreate = mockDb.create;
const mockUpdate = mockDb.update;
const mockRateLimit = cache.rateLimit as jest.Mock;

function makePostRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '127.0.0.1' },
    body: JSON.stringify(body),
  });
}

function makeDeleteRequest(email: string): NextRequest {
  return new NextRequest(`http://localhost:3000/api/newsletter?email=${encodeURIComponent(email)}`, {
    method: 'DELETE',
  });
}

describe('POST /api/newsletter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockRateLimit.mockResolvedValue({ allowed: true });
    mockFindUnique.mockResolvedValue(null);
    mockCreate.mockResolvedValue({ id: 'test-id', email: 'test@example.com' });
  });

  it('subscribes a valid email', async () => {
    const req = makePostRequest({ email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toContain('subscribed');
  });

  it('returns 400 for invalid email', async () => {
    const req = makePostRequest({ email: 'invalid' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});

describe('DELETE /api/newsletter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUpdate.mockResolvedValue({ id: 'test-id' });
  });

  it('unsubscribes via query param email', async () => {
    const req = makeDeleteRequest('test@example.com');
    const res = await DELETE(req);
    expect(res.status).toBe(200);
  });

  it('returns 400 when email query param is missing', async () => {
    const req = new NextRequest('http://localhost:3000/api/newsletter', { method: 'DELETE' });
    const res = await DELETE(req);
    expect(res.status).toBe(400);
  });
});
