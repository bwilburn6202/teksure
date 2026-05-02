import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorIPadCalendar() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calendar on iPad — Senior Guide" description="Track appointments using the Calendar app on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calendar on iPad</h1>
          <p className="text-lg text-muted-foreground">Never miss an appointment.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Calendar</h2><p>Tap the Calendar app. The screen shows the current month with today highlighted.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add an event</h2><p>Tap the plus sign. Type a title like Doctor Visit. Pick a date and time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Set a reminder</h2><p>Tap Alert. Pick 1 hour before, or a day before. Your iPad will buzz to remind you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add location</h2><p>Tap Location and type the address. Calendar will warn you when to leave.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Day, week, or month view</h2><p>Tap the buttons at the top to switch. Day view shows times. Month view shows the big picture.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Edit or delete</h2><p>Tap an event to open it. Tap Edit to change details, or Delete Event to remove it.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Calendar can sync with iPhone, Mac, and Apple Watch using your Apple ID — events appear everywhere.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
