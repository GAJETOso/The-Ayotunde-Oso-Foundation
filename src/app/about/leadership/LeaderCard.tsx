'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export type Leader = {
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export function LeaderCard({ person }: { person: Leader }) {
  const [errored, setErrored] = useState(false)

  return (
    <Card hover className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-64 bg-brand-50 dark:bg-brand-900/20">
        {errored ? (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-50 dark:bg-brand-900/20">
            <span className="text-4xl font-bold text-brand-700 dark:text-brand-400 select-none">
              {getInitials(person.name)}
            </span>
          </div>
        ) : (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setErrored(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {(person.linkedin || person.twitter || person.email) && (
          <div className="absolute bottom-3 right-3 flex gap-2">
            {person.linkedin && (
              <Link
                href={person.linkedin}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-3.5" />
              </Link>
            )}
            {person.twitter && (
              <Link
                href={person.twitter}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-3.5" />
              </Link>
            )}
            {person.email && (
              <Link
                href={`mailto:${person.email}`}
                className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-neutral-900 dark:text-neutral-100">{person.name}</h3>
        <p className="text-xs font-medium text-brand-600 dark:text-brand-400 mt-0.5 mb-3">{person.title}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{person.bio}</p>
      </div>
    </Card>
  )
}
