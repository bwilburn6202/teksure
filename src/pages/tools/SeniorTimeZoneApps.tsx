import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function SeniorTimeZoneApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Time Zone Apps for Seniors — Senior Guide" description="Track time zones for family abroad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Time Zone Apps</h1>
          <p className="text-lg text-muted-foreground">Know what time it is for family.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Clock</h2><p>Tap World Clock. Add cities. See times at a glance.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google Clock</h2><p>Built into Android. Tap World Clock tab. Add family cities.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. World Time Buddy</h2><p>Free. Side-by-side comparison. Best for finding good call times.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Time and Date</h2><p>timeanddate.com. Free meeting planner. Picks times that work for everyone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Add to home screen</h2><p>Pin a clock widget showing daughter in London time. Always visible.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Avoid 5 AM calls</h2><p>Always check before calling abroad. Family appreciates the consideration.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Daylight savings differs by country. Apps adjust automatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
