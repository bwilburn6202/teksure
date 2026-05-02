import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorGoogleCalendar() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Calendar for Seniors — TekSure" description="Free shared calendar for seniors and family — appointments, reminders, sharing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Calendar</h1>
          <p className="text-lg text-muted-foreground">Free. Sharable. Synced everywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Comes with any free Gmail account.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add an event</h2><p>Tap +. Type &ldquo;Doctor Tuesday 10 AM.&rdquo; Calendar fills it in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reminders</h2><p>Set 1 day + 1 hour reminders. Phone alarms ring at both.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Share calendar with kids — they help drive you to appointments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use voice</h2><p>&ldquo;Hey Google, add doctor appointment Friday at 2.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print weekly</h2><p>Calendar.google.com → settings → print. Have a paper backup.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Calendar works the same way — they sync with each other.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
