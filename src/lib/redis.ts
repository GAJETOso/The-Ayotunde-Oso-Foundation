import { Redis } from '@upstash/redis'

let redis: Redis | null = null

function getRedis(): Redis {
  if (!redis) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error('Missing Upstash Redis environment variables')
    }
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  }
  return redis
}

export const cache = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await getRedis().get<T>(key)
      return data
    } catch {
      return null
    }
  },

  async set<T>(key: string, value: T, expirySeconds?: number): Promise<void> {
    try {
      if (expirySeconds) {
        await getRedis().setex(key, expirySeconds, JSON.stringify(value))
      } else {
        await getRedis().set(key, JSON.stringify(value))
      }
    } catch { /* fail silently */ }
  },

  async del(key: string): Promise<void> {
    try {
      await getRedis().del(key)
    } catch { /* fail silently */ }
  },

  async exists(key: string): Promise<boolean> {
    try {
      const count = await getRedis().exists(key)
      return count > 0
    } catch {
      return false
    }
  },

  async incr(key: string): Promise<number> {
    try {
      return await getRedis().incr(key)
    } catch {
      return 0
    }
  },

  async rateLimit(
    identifier: string,
    limit: number,
    windowSeconds: number
  ): Promise<{ allowed: boolean; remaining: number }> {
    const key = `rate_limit:${identifier}`
    const count = await this.incr(key)
    if (count === 1) {
      await getRedis().expire(key, windowSeconds)
    }
    return { allowed: count <= limit, remaining: Math.max(0, limit - count) }
  },
}

export default cache
