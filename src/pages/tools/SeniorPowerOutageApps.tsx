import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorPowerOutageApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power Outage Apps — Senior Guide" description="Track power outages with utility apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power Outage Apps</h1>
          <p className="text-lg text-muted-foreground">Know when power returns.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Utility company apps</h2><p>PG&E, Duke Energy, etc — every major utility has free outage maps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Report outage</h2><p>Tap report on the app. Faster than calling, especially during big storms.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Estimated restoration</h2><p>Maps show when power should come back. Plan accordingly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Outage texts</h2><p>Sign up for outage texts. Phone alerts you even without app open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. PowerOutage.us</h2><p>Free national map. See if outage is local or huge.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery backup</h2><p>$50-100 phone battery pack. Keeps phone running 24-48 hours during outage.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If on oxygen or medical equipment, register with utility for priority restoration.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
