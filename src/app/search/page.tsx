'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'event' | 'program' | 'page';
  url: string;
  date?: string;
}

const TYPE_COLORS: Record<string, string> = {
  article: 'bg-blue-100 text-blue-700',
  event: 'bg-purple-100 text-purple-700',
  program: 'bg-green-100 text-green-700',
  page: 'bg-gray-100 text-gray-700',
};

const STATIC_RESULTS: SearchResult[] = [
  { id: '1', title: 'Education & Youth Development Program', excerpt: 'Comprehensive education support through scholarships, digital learning centers, teacher training, and literacy programs for children and adults in underserved communities.', type: 'program', url: '/programs/education' },
  { id: '2', title: 'Healthcare Outreach Program', excerpt: 'Mobile clinics, free medical consultations, maternal health support, and vaccination campaigns bringing healthcare directly to rural and underserved communities.', type: 'program', url: '/programs/healthcare' },
  { id: '3', title: 'Environmental Sustainability Program', excerpt: 'Tree planting, clean water access, climate education, and environmental conservation initiatives building a greener Nigeria.', type: 'program', url: '/programs/environment' },
  { id: '4', title: 'Youth Mentorship Program', excerpt: 'Matching ambitious young Nigerians with experienced professionals for 12-month mentorship journeys across business, technology, medicine, and public service.', type: 'program', url: '/programs/mentorship' },
  { id: '5', title: 'Emergency Humanitarian Relief', excerpt: 'Rapid response within 72 hours of any disaster. Food, shelter, medical aid, and rebuilding support for affected communities.', type: 'program', url: '/programs/emergency' },
  { id: '6', title: 'Donate to AOF', excerpt: 'Support our mission with a one-time or recurring donation. Choose a specific program or give to our general fund.', type: 'page', url: '/donate' },
  { id: '7', title: 'Volunteer with AOF', excerpt: 'Join our volunteer network and contribute your skills to programs across Nigeria. Remote and in-person opportunities available.', type: 'page', url: '/volunteer' },
  { id: '8', title: 'Our Impact', excerpt: 'Explore our impact data: beneficiaries reached, funds deployed, program outcomes, SDG alignment, and year-over-year growth.', type: 'page', url: '/impact' },
  { id: '9', title: 'Partner with AOF', excerpt: 'Organizations that share our values can partner with AOF through co-implementation, funding, in-kind support, or advocacy.', type: 'page', url: '/partners' },
  { id: '10', title: 'Apply for a Grant', excerpt: 'AOF offers community grants from ₦50,000 to ₦5,000,000 for organizations delivering impact in our program areas.', type: 'page', url: '/resources/grants' },
];

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const performSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
      } else {
        // Fall back to client-side static search
        const lower = q.toLowerCase();
        setResults(STATIC_RESULTS.filter(r =>
          r.title.toLowerCase().includes(lower) ||
          r.excerpt.toLowerCase().includes(lower)
        ));
      }
    } catch {
      const lower = q.toLowerCase();
      setResults(STATIC_RESULTS.filter(r =>
        r.title.toLowerCase().includes(lower) ||
        r.excerpt.toLowerCase().includes(lower)
      ));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    performSearch(debouncedQuery);
  }, [debouncedQuery, performSearch]);

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Search"
        title="Find What You Need"
        subtitle="Search across all AOF programs, news, events, resources, and pages."
        gradient="green"
        breadcrumbs={[{ label: 'Search', href: '/search' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Search Input */}
          <div className="mb-10">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, news, events, pages..."
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 pr-12 text-lg focus:outline-none focus:border-brand-green transition-colors"
                autoFocus
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Results */}
          {loading && (
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-xl p-5">
                  <Skeleton className="h-4 w-1/4 mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mt-1" />
                </div>
              ))}
            </div>
          )}

          {!loading && debouncedQuery && results.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{debouncedQuery}&rdquo;</p>
              <div className="space-y-4">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    className="block border rounded-xl p-5 hover:border-brand-green hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${TYPE_COLORS[result.type]}`}>{result.type}</span>
                      {result.date && <span className="text-xs text-gray-400">{result.date}</span>}
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors mb-2">{result.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{result.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!loading && debouncedQuery && results.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-8">We could not find anything matching &ldquo;{debouncedQuery}&rdquo;. Try a different search term.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['education', 'healthcare', 'donate', 'volunteer', 'impact', 'events'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm hover:bg-brand-green/20 transition-colors capitalize"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!debouncedQuery && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Popular Searches</h3>
              <div className="grid grid-cols-2 gap-3">
                {STATIC_RESULTS.slice(0, 6).map((result) => (
                  <button
                    key={result.id}
                    onClick={() => setQuery(result.title)}
                    className="text-left border rounded-xl p-4 hover:border-brand-green hover:shadow-sm transition-all group"
                  >
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${TYPE_COLORS[result.type]}`}>{result.type}</span>
                    <p className="font-medium text-gray-900 group-hover:text-brand-green text-sm mt-2">{result.title}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
