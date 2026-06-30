import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Admin Dashboard | The Ayotunde Oso Foundation',
};

// In production these would be fetched from the database
const OVERVIEW_STATS = [
  { label: 'Total Donations (Jun)', value: '₦3,240,000', change: '+18%', up: true },
  { label: 'Active Donors', value: '1,847', change: '+124', up: true },
  { label: 'Pending Volunteers', value: '23', change: '5 new today', up: true },
  { label: 'Open Grant Apps', value: '12', change: '3 need review', up: false },
  { label: 'Newsletter Subscribers', value: '18,420', change: '+340 this week', up: true },
  { label: 'Event Registrations', value: '486', change: '2 upcoming events', up: true },
];

const RECENT_DONATIONS = [
  { name: 'Adaeze N.', email: 'adaeze@...', amount: 50000, program: 'Education', time: '2 min ago', status: 'COMPLETED' },
  { name: 'Yusuf A.', email: 'yusuf@...', amount: 25000, program: 'Healthcare', time: '14 min ago', status: 'COMPLETED' },
  { name: 'Anonymous', email: '—', amount: 100000, program: 'General Fund', time: '1 hour ago', status: 'COMPLETED' },
  { name: 'Blessing O.', email: 'blessing@...', amount: 15000, program: 'Environment', time: '2 hours ago', status: 'COMPLETED' },
  { name: 'Chisom I.', email: 'chisom@...', amount: 200000, program: 'Emergency', time: '3 hours ago', status: 'PENDING' },
];

const RECENT_VOLUNTEERS = [
  { name: 'Emmanuel C.', skills: ['Teaching', 'Mentoring'], program: 'Education', status: 'PENDING', date: 'Today' },
  { name: 'Fatima A.', skills: ['Medical', 'Community Health'], program: 'Healthcare', status: 'PENDING', date: 'Today' },
  { name: 'Ibrahim M.', skills: ['Engineering', 'Project Mgmt'], program: 'Environment', status: 'ACTIVE', date: 'Yesterday' },
];

const RECENT_CONTACTS = [
  { name: 'Ngozi E.', subject: 'Partnership Inquiry', dept: 'Partnerships', time: '30 min ago', read: false },
  { name: 'David O.', subject: 'Grant Application Question', dept: 'Grants', time: '2 hours ago', read: false },
  { name: 'Sarah K.', subject: 'Media Request', dept: 'Press', time: '4 hours ago', read: true },
  { name: 'Amaka J.', subject: 'Donation Receipt Issue', dept: 'Donations', time: '1 day ago', read: true },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-400 text-sm mt-1">
          {new Date().toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {OVERVIEW_STATS.map((stat) => (
          <div key={stat.label} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className={`text-xs font-medium ${stat.up ? 'text-emerald-400' : 'text-amber-400'}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent Donations */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 border border-gray-800 rounded-xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-800">
              <h2 className="text-white font-semibold">Recent Donations</h2>
              <Link href="/admin/donations" className="text-xs text-brand-green hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-gray-800">
              {RECENT_DONATIONS.map((d, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <div className="text-white text-sm font-medium">{d.name}</div>
                    <div className="text-gray-500 text-xs">{d.program} · {d.time}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold text-sm">₦{d.amount.toLocaleString()}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      d.status === 'COMPLETED' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-amber-900/50 text-amber-400'
                    }`}>{d.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Pending Volunteers */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-white font-semibold text-sm">Volunteer Applications</h2>
              <Link href="/admin/volunteers" className="text-xs text-brand-green hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-gray-800">
              {RECENT_VOLUNTEERS.map((v, i) => (
                <div key={i} className="px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm">{v.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      v.status === 'PENDING' ? 'bg-amber-900/50 text-amber-400' : 'bg-emerald-900/50 text-emerald-400'
                    }`}>{v.status}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{v.program} · {v.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Inbox */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-white font-semibold text-sm">Contact Inbox</h2>
              <Link href="/admin/contacts" className="text-xs text-brand-green hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-gray-800">
              {RECENT_CONTACTS.map((c, i) => (
                <div key={i} className="px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    {!c.read && <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />}
                    <span className={`text-sm ${c.read ? 'text-gray-400' : 'text-white font-medium'}`}>{c.name}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{c.subject} · {c.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <h2 className="text-white font-semibold text-sm mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <Button size="sm" className="w-full justify-start bg-brand-green hover:bg-brand-green/90 text-white" asChild>
                <Link href="/admin/articles/new">➕ New Article</Link>
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
                <Link href="/admin/events/new">➕ New Event</Link>
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
                <Link href="/admin/campaigns/new">➕ New Campaign</Link>
              </Button>
              <Button size="sm" variant="outline" className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
                <Link href="/admin/newsletter/compose">📬 Send Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
