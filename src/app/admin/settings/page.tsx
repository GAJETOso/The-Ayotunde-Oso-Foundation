import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Settings | AOF Admin' }

export default function AdminSettingsPage() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage foundation configuration and admin preferences</p>
      </div>

      <div className="space-y-6">
        {/* Organisation Details */}
        <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-white font-semibold mb-4">Organisation Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Organisation Name</label>
              <input type="text" defaultValue="The Ayotunde Oso Foundation" className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Contact Email</label>
              <input type="email" defaultValue="info@aof.org.ng" className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Website</label>
              <input type="url" defaultValue="https://aof.org.ng" className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">RC / CAC Number</label>
              <input type="text" placeholder="e.g. RC-1234567" className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" />
            </div>
            <Button variant="gold" size="sm">Save Changes</Button>
          </div>
        </section>

        {/* Payment Configuration */}
        <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-white font-semibold mb-4">Payment Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Paystack Public Key</label>
              <input type="text" placeholder="pk_live_…" className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green font-mono text-xs" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Default Currency</label>
              <select className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green">
                <option value="NGN">NGN — Nigerian Naira (₦)</option>
                <option value="USD">USD — US Dollar ($)</option>
              </select>
            </div>
            <Button variant="gold" size="sm">Save Payment Settings</Button>
          </div>
        </section>

        {/* Admin Access */}
        <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h2 className="text-white font-semibold mb-4">Admin Access</h2>
          <p className="text-gray-400 text-sm mb-4">Admin roles are managed via Clerk. Contact your system administrator to add or remove admin users.</p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white" asChild>
              <a href="https://dashboard.clerk.com" target="_blank" rel="noopener noreferrer">Open Clerk Dashboard ↗</a>
            </Button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-gray-900 rounded-xl border border-red-900/40 p-6">
          <h2 className="text-red-400 font-semibold mb-2">Danger Zone</h2>
          <p className="text-gray-400 text-sm mb-4">Irreversible actions. Proceed with caution.</p>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 border border-red-900/40 hover:border-red-700">
              Export All Data
            </Button>
            <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 border border-red-900/40 hover:border-red-700">
              Clear Test Data
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
