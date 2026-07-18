import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'New Article | AOF Admin' }

export default function NewArticlePage() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/articles" className="text-gray-500 hover:text-white text-sm transition-colors">← Articles</Link>
        <h1 className="text-2xl font-bold text-white">New Article</h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Title</label>
          <input type="text" placeholder="Article title…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Slug</label>
          <input type="text" placeholder="auto-generated-from-title" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green font-mono text-xs" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Category</label>
          <select className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green">
            <option value="">Select category…</option>
            {['Impact Story', 'Programme Update', 'Press Release', 'Announcement', 'Blog'].map((c) => (
              <option key={c} value={c.toLowerCase().replace(' ', '-')}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Cover Image URL</label>
          <input type="url" placeholder="https://…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Excerpt</label>
          <textarea rows={2} placeholder="Short summary shown on listing pages…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Body (Markdown)</label>
          <textarea rows={14} placeholder="Write your article content in Markdown…" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-none font-mono" />
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" variant="gold">Publish</Button>
          <Button type="button" variant="outline" className="border-gray-700 text-gray-300 hover:text-white">Save Draft</Button>
          <Button type="button" variant="ghost" className="text-gray-400" asChild>
            <Link href="/admin/articles">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
