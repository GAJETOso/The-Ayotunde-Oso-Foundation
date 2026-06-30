# AOF API Reference

All API routes are under `/api/`. They return JSON unless noted otherwise.

## Authentication

Public routes: no authentication required.
Protected routes: send Clerk session token in `Authorization: Bearer <token>` header.

## Common Response Format

```json
// Success
{ "message": "...", "data": {} }

// Error
{ "error": "...", "details": [] }
```

## Common Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 429 | Rate Limited |
| 500 | Internal Server Error |

---

## POST /api/ai

Streaming KOMAI AI chat endpoint.

**Runtime:** Edge  
**Rate limit:** 30 requests/minute per IP

**Request body:**
```json
{
  "messages": [
    { "role": "user", "content": "Tell me about AOF programs" }
  ],
  "language": "en"
}
```

**Response:** `text/event-stream` (SSE)
```
data: {"delta": "AOF offers "}
data: {"delta": "five core programs..."}
data: [DONE]
```

---

## POST /api/donations

Create a new donation and initialize payment.

**Rate limit:** 10 requests/minute per IP

**Request body:**
```json
{
  "amount": 25000,
  "currency": "NGN",
  "frequency": "MONTHLY",
  "programDesignation": "education",
  "donorName": "Jane Doe",
  "donorEmail": "jane@example.com",
  "isAnonymous": false,
  "paymentMethod": "stripe",
  "tributeInfo": null
}
```

**Response (Stripe):**
```json
{
  "donationId": "cuid",
  "clientSecret": "pi_xxx_secret_xxx",
  "paymentMethod": "stripe"
}
```

**Response (Paystack):**
```json
{
  "donationId": "cuid",
  "authorizationUrl": "https://checkout.paystack.com/xxx",
  "paymentMethod": "paystack"
}
```

---

## POST /api/contact

Submit a contact form message.

**Rate limit:** 5 requests/hour per IP

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+2348012345678",
  "subject": "Partnership Inquiry",
  "message": "We would like to explore a partnership...",
  "department": "PARTNERSHIPS"
}
```

**Department values:** `GENERAL`, `DONATIONS`, `VOLUNTEERING`, `PARTNERSHIPS`, `MEDIA`, `GRANTS`, `PROGRAMS`, `OTHER`

---

## POST /api/newsletter

Subscribe to the AOF newsletter.

**Request body:**
```json
{ "email": "subscriber@example.com" }
```

## DELETE /api/newsletter

Unsubscribe from the newsletter.

**Request body:**
```json
{ "email": "subscriber@example.com" }
```

---

## POST /api/volunteers

Submit a volunteer application.

**Rate limit:** 3 requests/hour per IP

**Request body:**
```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "phone": "+2348012345678",
  "location": "Lagos",
  "occupation": "Doctor",
  "skills": ["Medical", "Teaching"],
  "programs": ["healthcare"],
  "availability": ["WEEKENDS"],
  "hoursPerMonth": 8,
  "motivation": "I want to give back...",
  "experience": "5 years in community health"
}
```

---

## GET /api/search

Search across articles, events, and programs.

**Query params:** `q` (search term, required)

**Response:**
```json
{
  "results": [
    {
      "id": "cuid",
      "title": "Result Title",
      "excerpt": "...",
      "type": "article",
      "url": "/news/result-slug",
      "date": "2025-06-15"
    }
  ],
  "total": 1,
  "cached": false
}
```

---

## POST /api/webhooks/stripe

Stripe webhook handler. Called by Stripe for payment events.

**Authentication:** Stripe webhook signature verification (`STRIPE_WEBHOOK_SECRET`)

**Events handled:**
- `payment_intent.succeeded` — marks donation complete, sends receipt email
- `payment_intent.payment_failed` — marks donation failed
- `charge.refunded` — marks donation refunded
