import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'My Dashboard | The Ayotunde Oso Foundation',
  description: 'Manage your donations, volunteer activities, and impact with AOF.',
};

// Mock data — in production this would be fetched from the database using auth().userId
const MOCK_DONATIONS = [
  { id: '1', date: '2025-06-15', amount: 25000, program: 'Education', status: 'COMPLETED', currency: '₦' },
  { id: '2', date: '2025-05-15', amount: 25000, program: 'Education', status: 'COMPLETED', currency: '₦' },
  { id: '3', date: '2025-04-15', amount: 25000, program: 'Healthcare', status: 'COMPLETED', currency: '₦' },
  { id: '4', date: '2025-03-15', amount: 25000, program: 'General Fund', status: 'COMPLETED', currency: '₦' },
];

const MOCK_VOLUNTEER = {
  status: 'ACTIVE',
  role: 'Education Mentor',
  hoursLogged: 48,
  nextSession: '2025-07-05',
  program: 'Youth Mentorship',
};

const MOCK_IMPACT = [
  { label: 'Children Supported', value: 3, unit: 'via education donations' },
  { label: 'Mentorship Hours', value: 48, unit: 'contributed this year' },
  { label: 'Trees Planted', value: 2, unit: 'through giving campaigns' },
];

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const user = await currentUser();
  const firstName = user?.firstName || 'Friend';
  const totalDonated = MOCK_DONATIONS.reduce((sum, d) => sum + d.amount, 0);
  const yearlyGoal = 500000;
  const progress = Math.round((totalDonated / yearlyGoal) * 100);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-brand-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white/60 text-sm mb-1">Welcome back</p>
              <h1 className="text-2xl font-bold">Hello, {firstName} 👋</h1>
              <p className="text-white/70 text-sm mt-1">Your support is making a real difference.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="gold" asChild>
                <Link href="/donate">Donate Again</Link>
              </Button>
              <Button variant="outline-white" asChild>
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Donation Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Your 2025 Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Total donated this year</span>
                  <span className="font-bold text-brand-green">₦{totalDonated.toLocaleString()}</span>
                </div>
                <Progress value={progress} color="brand" className="mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{progress}% of ₦{yearlyGoal.toLocaleString()} goal</span>
                  <span>₦{(yearlyGoal - totalDonated).toLocaleString()} remaining</span>
                </div>
                <p className="text-xs text-gray-500 mt-4">Your recurring donation of ₦25,000/month is active. <button className="text-brand-green hover:underline">Manage</button></p>
              </CardContent>
            </Card>

            {/* Donation History */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Donation History</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="/dashboard/receipts" className="text-brand-green text-xs">Download All Receipts</a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {MOCK_DONATIONS.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{donation.program}</div>
                        <div className="text-xs text-gray-500">{new Date(donation.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-900">{donation.currency}{donation.amount.toLocaleString()}</span>
                        <Badge variant="success" className="text-xs">Received</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Volunteer Card */}
            {MOCK_VOLUNTEER && (
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Status</span>
                      <Badge variant="success" className="mt-1">{MOCK_VOLUNTEER.status}</Badge>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Role</span>
                      <span className="text-sm font-medium text-gray-900">{MOCK_VOLUNTEER.role}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Hours Logged (2025)</span>
                      <span className="text-2xl font-bold text-brand-green">{MOCK_VOLUNTEER.hoursLogged}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Next Session</span>
                      <span className="text-sm font-medium text-gray-900">{new Date(MOCK_VOLUNTEER.nextSession).toLocaleDateString('en-NG', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">Log Hours</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Your Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {MOCK_IMPACT.map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-brand-green">{item.value}</div>
                    <div className="text-sm font-medium text-gray-800">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.unit}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="default" className="w-full justify-start" size="sm" asChild>
                  <Link href="/donate">+ Make a Donation</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm" asChild>
                  <Link href="/events">Register for Event</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm" asChild>
                  <Link href="/campaigns">Support a Campaign</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Account */}
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">{user?.emailAddresses?.[0]?.emailAddress}</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600" asChild>
                  <Link href="/user-profile">Edit Profile</Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
