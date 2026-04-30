import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export default function FamilyCalendarSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Calendar Sharing — Apple, Google, Mixed | TekSure" description="See each other's appointments. Share doctor visits, school events, and family birthdays. Step-by-step Apple, Google, and mixed-family setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarDays className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Calendar Sharing</h1>
          <p className="text-lg text-muted-foreground">Spouse, kids, grandkids — see what's on everyone's plate.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🍎 Apple Calendar — share with another iPhone user</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the <strong>Calendar</strong> app.</li>
              <li>Tap <strong>Calendars</strong> at the bottom.</li>
              <li>Tap the small <strong>"i"</strong> next to "Family" (or any calendar).</li>
              <li>Tap <strong>"Add Person"</strong>. Type your spouse's or child's email or name.</li>
              <li>Choose if they can VIEW or EDIT the calendar.</li>
              <li>Tap Done. They get a notification — they accept and your calendar appears in their app.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Or use Family Sharing</strong> (Settings → tap your name → Family Sharing) — sets up a shared "Family" calendar everyone in your group automatically sees.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📅 Google Calendar — share with anyone</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">calendar.google.com</a> on a computer (easier to set up than the app).</li>
              <li>Find your calendar in the left sidebar. Hover over it → click the three dots.</li>
              <li>Click "Settings and sharing".</li>
              <li>Scroll to "Share with specific people". Click "+ Add people".</li>
              <li>Type their email. Pick "See all event details" or "Make changes".</li>
              <li>Click Send. They get an email with a link.</li>
              <li>On the calendar app on their phone, the new shared calendar appears under "Other calendars".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤝 Mixed family — iPhone people + Android people</h2>
            <p className="text-sm mb-3">Apple Calendar and Google Calendar can talk to each other:</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>The Apple person: Settings → Calendar → Accounts → Add Account → Google.</li>
              <li>Sign in with their Google account.</li>
              <li>Now their Google calendar appears inside iPhone's Calendar app.</li>
              <li>Use a shared Google calendar as the "family" calendar — everyone iPhone and Android sees it.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Even simpler:</strong> Use <strong>Cozi</strong> — a free app made just for family calendars. Works on every phone. Shopping lists, meal planner, color-coded family members.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Useful shared calendars to create</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Family Birthdays</strong> — once a year, takes 30 minutes; everyone's reminded forever.</li>
              <li><strong>Medical Appointments</strong> — your spouse sees your doctor visits.</li>
              <li><strong>Travel</strong> — shared calendar of upcoming trips so kids and grandkids know when you're around.</li>
              <li><strong>Meal Schedule</strong> — for caregivers rotating meals.</li>
              <li><strong>Work Schedule</strong> — adult children share with you so you know when they're free for video calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — print a paper copy for the fridge</h3>
            <p className="text-sm text-muted-foreground">Both Apple and Google calendars can print a monthly view. Some seniors like seeing the month at a glance on paper, even with the digital version. On Google: print icon → choose "Month view" → print.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
