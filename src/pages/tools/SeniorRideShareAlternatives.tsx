import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bus } from 'lucide-react';

export default function SeniorRideShareAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rideshare Alternatives for Seniors | TekSure" description="Beyond Uber. Plain-English picks for senior shuttle programs, free rides, paratransit, volunteer drivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rideshare Alternatives</h1>
          <p className="text-lg text-muted-foreground">Beyond Uber + family.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + low-cost senior rides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medicare Advantage NEMT</strong> — many plans cover 12-30 free medical rides/year.</li>
              <li><strong>Medicaid NEMT</strong> — non-emergency medical transportation, free for eligible.</li>
              <li><strong>Local senior center shuttle</strong> — many run free to grocery, doctor, mall.</li>
              <li><strong>Local Area Agency on Aging</strong> — knows free programs locally.</li>
              <li><strong>Paratransit (ADA)</strong> — same price as bus for those with disabilities. Federal law required.</li>
              <li><strong>Faith in Action volunteer drivers</strong> — free for non-tech seniors.</li>
              <li><strong>VA medical transport</strong> — free for veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific rideshare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GoGoGrandparent</strong> — call 1-800 number, they book Uber. No smartphone needed.</li>
              <li><strong>SilverRide</strong> — driver helps with walker, groceries.</li>
              <li><strong>Envoy America</strong> — premium senior driver service.</li>
              <li><strong>Lyft Concierge</strong> — family books rides for you.</li>
              <li><strong>Local "ITN" (Independent Transportation Network)</strong> — non-profit member rides for low fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Public transit perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most US transit gives 50% off for seniors.</li>
              <li>Some cities — completely free for 65+ (NYC, Boston).</li>
              <li>Transit apps make it manageable: Apple Maps, Google Maps, Transit app, Moovit.</li>
              <li>Real-time bus arrival = no waiting in cold.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schedule-ahead rides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Uber + Lyft both let you schedule 30 days ahead.</li>
              <li>Reduces last-minute stress.</li>
              <li>Doctor appointments — schedule both directions a week ahead.</li>
              <li>Costco runs — pick a time, save day-of stress.</li>
              <li>Set up favorite places in app for quick re-booking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mix + match</h3>
            <p className="text-sm text-muted-foreground">Best senior-mobility plan: Medicare ride for medical + paratransit for big errands + Uber/Lyft for spontaneous + family for emergencies + senior center shuttle for routine. No single solution covers everything. Build a 3-4 option toolkit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
