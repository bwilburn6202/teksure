import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function CalendarRemindersApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calendar Reminder Apps for Seniors | TekSure" description="Apple Calendar, Google Calendar. Plain-English picks for senior-friendly calendar + reminder setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calendar + Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss appointments.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best calendars</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Calendar</strong> — built-in iPhone. Syncs with Siri.</li>
              <li><strong>Google Calendar</strong> — works iPhone + Android. Family sharing easy.</li>
              <li><strong>Outlook Calendar</strong> — tied to Microsoft 365.</li>
              <li><strong>Cozi</strong> — family-focused. Color-coded per person.</li>
              <li><strong>Skylight</strong> — wall-mounted touchscreen calendar. $200.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior must-add events</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor appointments + 2-day reminder.</li>
              <li>Medication times (or use medication app).</li>
              <li>Family birthdays + anniversaries (with year as title).</li>
              <li>Bills + auto-pay days (in case they fail).</li>
              <li>Annual mammograms, colonoscopies.</li>
              <li>Holidays + family events.</li>
              <li>Trash day, recycling day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reminder tricks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set 2 reminders for important: 1 day before + 2 hours before.</li>
              <li>Voice: "Hey Siri, schedule dentist at 10 AM Tuesday."</li>
              <li>Echo: "Alexa, remind me Friday to pick up Mom from airport."</li>
              <li>Recurring events: weekly Sunday call with daughter.</li>
              <li>Family share: see grandkid soccer games + school events.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Print monthly calendar</h3>
            <p className="text-sm text-muted-foreground">Print month view from Apple/Google Calendar. Tape on fridge. Many seniors prefer paper visibility. Use phone for reminders + paper for at-a-glance.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
