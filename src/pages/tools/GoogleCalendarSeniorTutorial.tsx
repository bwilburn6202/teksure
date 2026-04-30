import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function GoogleCalendarSeniorTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Calendar Tutorial for Seniors | TekSure" description="Free calendar app — add appointments, share with family, set reminders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Calendar</h1>
          <p className="text-lg text-muted-foreground">Free + works everywhere.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free calendar app.</li>
              <li>Track all appointments.</li>
              <li>Reminders + alerts.</li>
              <li>Share with family.</li>
              <li>Sync across devices.</li>
              <li>Color-coded categories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add appointments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap + to add event.</li>
              <li>Title, date, time, location.</li>
              <li>Set reminder time.</li>
              <li>Recurring events (every Tuesday).</li>
              <li>Doctor appointments tracked.</li>
              <li>Birthday reminders annual.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share calendar with spouse + adult children.</li>
              <li>They can see + add events.</li>
              <li>Coordinate caregiving.</li>
              <li>Family events visible to all.</li>
              <li>Privacy settings — see all or just busy/free.</li>
              <li>Critical for caregiving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Calendar alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built into iPhone.</li>
              <li>Same features as Google Calendar.</li>
              <li>Syncs across Apple devices.</li>
              <li>Use whichever your phone has.</li>
              <li>Both free.</li>
              <li>Both reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reminder strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>15 min before — quick events.</li>
              <li>1 day before — important meetings.</li>
              <li>1 week before — annual reviews.</li>
              <li>Multiple reminders for very important.</li>
              <li>Phone vibrates + chimes.</li>
              <li>Email reminder backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor appointments — log every one.</li>
              <li>Medication refill reminders.</li>
              <li>Birthdays + anniversaries.</li>
              <li>Bill due dates.</li>
              <li>Family events.</li>
              <li>Travel itinerary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Replace paper calendar</h3>
            <p className="text-sm text-muted-foreground">Many seniors still use wall calendars. While charming, digital is better for two reasons: 1) automatic reminders prevent missed appointments, 2) family can share + coordinate. Spend 30 minutes adding upcoming appointments. Set 24-hour reminders. Never miss another doctor visit. Free, on every device.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
