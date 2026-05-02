import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorAndroidCalendar() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Calendar on Android — Senior Guide" description="Track appointments on Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Calendar</h1>
          <p className="text-lg text-muted-foreground">Never miss an appointment.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Calendar</h2><p>Tap the icon showing today's date. Today is highlighted in color.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add an event</h2><p>Tap the plus button. Tap Event. Type a title and pick a time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Set a reminder</h2><p>Pick how early you want to be reminded — 15 minutes, 1 hour, or 1 day before.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add the location</h2><p>Type or pick the address. Calendar will warn you when to leave.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Repeating events</h2><p>Tap Does Not Repeat. Pick weekly or monthly for things like a yoga class or church.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. View choices</h2><p>Tap the menu. Pick Day, Week, Month, or Schedule. Schedule view lists upcoming events.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Events sync to Google so you can also see them on a computer at calendar.google.com.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
