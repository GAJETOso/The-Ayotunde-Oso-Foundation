# KOMAI AI Assistant Guide

## What is KOMAI?

KOMAI is AOF's intelligent virtual assistant. The name stands for:
- **K** — Knowledge
- **O** — Opportunity
- **M** — Mentorship
- **A** — Assistance
- **I** — Intelligence

KOMAI is powered by Anthropic's Claude API and provides real-time, streaming responses about AOF's programs, impact, donation options, volunteer opportunities, and general support.

## Technical Architecture

```
User Input
    ↓
KomaiChat.tsx (client component)
    ↓ POST /api/ai
    ↓
Edge Runtime Route Handler
    ↓ Rate limit check (Redis)
    ↓ Anthropic API (claude-haiku-4-5-20251001)
    ↓ Streaming SSE response
    ↓
KomaiChat.tsx (streams delta text)
    ↓
User sees real-time response
```

## Components

### `KomaiWidget` (`src/components/ai/KomaiWidget.tsx`)

The floating action button that appears bottom-right on all pages. Features:
- Pulse animation badge after 10 seconds on page
- Notification dot for new messages
- Opens/closes `KomaiChat` via `AnimatePresence`
- Listens for `komai:open` custom events from other components

### `KomaiChat` (`src/components/ai/KomaiChat.tsx`)

The full chat interface. Features:
- Streaming message rendering (delta text via SSE)
- Message history with copy and feedback buttons
- Suggested prompt chips
- Language selector (configured in `KOMAI_CONFIG.languages`)
- Clear conversation (RefreshCw)
- Typing indicator (bouncing dots)
- Minimize support

## Configuration

All KOMAI configuration is in `src/lib/constants.ts` under `KOMAI_CONFIG`:

```typescript
export const KOMAI_CONFIG = {
  name: 'KOMAI',
  model: 'claude-haiku-4-5-20251001',
  systemPrompt: `You are KOMAI, the AI assistant for The Ayotunde Oso Foundation...`,
  maxTokens: 1024,
  languages: ['English', 'Yoruba', 'Igbo', 'Hausa', 'Pidgin'],
  suggestedPrompts: [
    'How can I donate to AOF?',
    'Tell me about the education program',
    'How do I volunteer?',
    'What impact has AOF made?',
  ],
};
```

## API Route

`src/app/api/ai/route.ts`

- **Runtime:** `edge` (faster cold starts, lower latency)
- **Rate limit:** 30 requests/minute per IP (using Upstash Redis)
- **Method:** POST
- **Request:** `{ messages: Message[], language?: string }`
- **Response:** `text/event-stream` with `data: {"delta": "text"}\n\n` format, ending with `data: [DONE]\n\n`

## System Prompt Guidelines

The system prompt should:
1. Establish KOMAI as AOF's assistant, not a general AI
2. Cover all five program areas
3. Include key statistics and impact numbers
4. Know how to handle donation queries (direct to /donate)
5. Know volunteer process (direct to /volunteer)
6. Handle emergency contact scenarios appropriately
7. Be warm, clear, and mission-aligned in tone
8. Admit knowledge limits and direct to human contact when needed

## Updating the Model

To change the AI model, update `KOMAI_CONFIG.model` in `src/lib/constants.ts`.

Available Anthropic models (as of June 2025):
- `claude-haiku-4-5-20251001` — Fastest, lowest cost (recommended for chat)
- `claude-sonnet-4-6` — Balanced performance
- `claude-opus-4-8` — Most capable, higher cost

## Opening KOMAI from Other Components

Any component can open the KOMAI chat panel by dispatching a custom event:

```typescript
window.dispatchEvent(new CustomEvent('komai:open'));
```

The `KomaiWidget` listens for this event and opens the chat panel automatically. This is used on the Contact page’s “Ask KOMAI AI” button.

## Privacy

- Chat messages are not stored server-side
- No conversation history is persisted between sessions
- Users should not share sensitive personal information in chat
- KOMAI explicitly cannot process payments or access user account data
