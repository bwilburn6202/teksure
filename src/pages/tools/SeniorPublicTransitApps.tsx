import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bus } from 'lucide-react';

export default function SeniorPublicTransitApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Public Transit Apps for Seniors — TekSure" description="Bus, train, and subway apps — pay fare with your phone, get senior discount." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Public Transit Apps</h1>
          <p className="text-lg text-muted-foreground">Buses, trains, and subways — easy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Transit (app)</h2><p>Free. Real-time schedules for nearly every US transit system.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Maps transit</h2><p>Pick the bus icon — Maps gives turn-by-turn for transit too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pay by phone</h2><p>Most major cities accept Apple Pay or Google Pay at the turnstile. No card needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior discount</h2><p>Most US transit systems offer 50% off for seniors. Apply with photo ID.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Citymapper</h2><p>Free. Best for NYC, Chicago, DC, San Francisco, LA, Boston.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Paratransit</h2><p>Door-to-door rides for seniors with mobility issues. Apply through your local transit agency.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many cities give seniors free off-peak rides. Worth asking.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
