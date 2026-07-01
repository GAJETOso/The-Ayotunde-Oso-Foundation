import { POST, DELETE } from '@/app/api/newsletter/route';
import { NextRequest } from 'next/server';

jest.mock('@/lib/db', () => ({
  prisma: {
    newsletterSubscriber: {
      upsert: jest.fn().mockResolvedValue({ id: 'test-id', email: 'test@example.com' }),
      findUnique: jest.fn().mockResolvedValue({ id: 'test-id', email: 'test@example.com' }),
      update: jest.fn().mockResolvedValue({ id: 'test-id' }),
    },
  },
}));

jest.mock('@/lib/email', () => ({
  sendNewsletterConfirmation: jest.fn().mockResolvedValue(undefined),
}));

function makeRequest(method: string, body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/newsletter', {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/newsletter', () => {
  beforeEach(() => jest.clearAllMocks());

  it('subscribes a valid email', async () => {
    const req = makeRequest('POST', { email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toContain('subscribed');
  });

  it('returns 422 for invalid email', async () => {
    const req = makeRequest('POST', { email: 'invalid' });
    const res = await POST(req);
    expect(res.status).toBe(422);
  });
});

describe('DELETE /api/newsletter', () => {
  it('unsubscribes an existing subscriber', async () => {
    const req = makeRequest('DELETE', { email: 'test@example.com' });
    const res = await DELETE(req);
    expect(res.status).toBe(200);
  });

  it('returns 404 for non-existent subscriber', async () => {
    const { prisma } = require('@/lib/db');
    prisma.newsletterSubscriber.findUnique.mockResolvedValueOnce(null);
    const req = makeRequest('DELETE', { email: 'nobody@example.com' });
    const res = await DELETE(req);
    expect(res.status).toBe(404);
  });
});
