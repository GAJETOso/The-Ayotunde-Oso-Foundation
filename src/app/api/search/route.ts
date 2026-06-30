import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { cache } from '@/lib/redis'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.trim() ?? ''
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 20)

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [], total: 0 })
  }

  const cacheKey = `search:${q.toLowerCase().slice(0, 50)}:${limit}`
  const cached = await cache.get<{ results: unknown[]; total: number }>(cacheKey)
  if (cached) return NextResponse.json(cached)

  try {
    const [articles, events, programs] = await Promise.all([
      prisma.article.findMany({
        where: {
          isPublished: true,
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { excerpt: { contains: q, mode: 'insensitive' } },
            { tags: { has: q.toLowerCase() } },
          ],
        },
        select: { slug: true, title: true, excerpt: true, category: true },
        take: 5,
      }),
      prisma.event.findMany({
        where: {
          status: { not: 'CANCELLED' },
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        },
        select: { slug: true, title: true, description: true, type: true },
        take: 3,
      }),
      prisma.program.findMany({
        where: {
          isActive: true,
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        },
        select: { slug: true, name: true, description: true },
        take: 3,
      }),
    ])

    const results = [
      ...articles.map(a => ({
        id: a.slug,
        title: a.title,
        excerpt: a.excerpt.slice(0, 100) + '...',
        href: `/news/${a.slug}`,
        category: a.category.replace('_', ' '),
        icon: 'FileText',
      })),
      ...events.map(e => ({
        id: e.slug,
        title: e.title,
        excerpt: e.description.slice(0, 100) + '...',
        href: `/events/${e.slug}`,
        category: 'Event',
        icon: 'Calendar',
      })),
      ...programs.map(p => ({
        id: p.slug,
        title: p.name,
        excerpt: p.description.slice(0, 100) + '...',
        href: `/programs/${p.slug}`,
        category: 'Program',
        icon: 'BookOpen',
      })),
    ]

    const response = { results, total: results.length }
    await cache.set(cacheKey, response, 300)

    return NextResponse.json(response)
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
