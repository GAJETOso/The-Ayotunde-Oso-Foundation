import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { requireRole } from '@/lib/auth';

const ADMIN_NAV = [
  { href: '/admin', label: 'Overview', icon: '📊' },
  { href: '/admin/donations', label: 'Donations', icon: '💰' },
  { href: '/admin/volunteers', label: 'Volunteers', icon: '🤝' },
  { href: '/admin/events', label: 'Events', icon: '📅' },
  { href: '/admin/articles', label: 'Articles', icon: '📝' },
  { href: '/admin/programs', label: 'Programs', icon: '🎯' },
  { href: '/admin/campaigns', label: 'Campaigns', icon: '📾' },
  { href: '/admin/grants', label: 'Grant Apps', icon: '📄' },
  { href: '/admin/contacts', label: 'Contact Inbox', icon: '📧' },
  { href: '/admin/newsletter', label: 'Newsletter', icon: '📨' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  try {
    await requireRole('admin');
  } catch {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed inset-y-0">
        <div className="p-5 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <div className="text-white font-semibold text-sm">AOF Admin</div>
              <div className="text-gray-500 text-xs">Management Portal</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {ADMIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm group"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
            <span>←</span>
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
