import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bus } from 'lucide-react';

export default function BusTravelForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bus Travel for Seniors | TekSure" description="Greyhound, Megabus, FlixBus for seniors. Plain-English bus travel guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bus Travel for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cheap. No driving. Senior discounts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Greyhound</strong> — 5% off 62+.</li>
              <li><strong>Megabus</strong> — variable, sometimes free.</li>
              <li><strong>FlixBus</strong> — 50+ discounts available.</li>
              <li><strong>Trailways</strong> — 10% off senior.</li>
              <li><strong>Amtrak</strong> — 10% (also bus connections).</li>
              <li>Sometimes $1 fares (Megabus).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bus tour companies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tauck</strong> — premium senior tours.</li>
              <li><strong>Trafalgar</strong> — mid-range.</li>
              <li><strong>Globus</strong> — affordable.</li>
              <li><strong>Cosmos</strong> — budget tours.</li>
              <li><strong>Caravan Tours</strong> — $1,000-2,000 weekly.</li>
              <li><strong>Road Scholar</strong> — educational tours.</li>
              <li>Senior-paced.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local senior transit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>City buses — senior fares 50% off.</li>
              <li>SilverRide / Senior shuttles — Area Agency on Aging.</li>
              <li>ADA Paratransit — for those qualifying.</li>
              <li>Hospital shuttles — many free.</li>
              <li>Senior center vans — to grocery / medical.</li>
              <li>Volunteer driver programs.</li>
              <li>Free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aisle seat for bathroom access.</li>
              <li>Front of bus = smoother ride.</li>
              <li>Bring snacks + water.</li>
              <li>Charge phone full before trip.</li>
              <li>Bring small pillow for comfort.</li>
              <li>Pack light — handle own bags.</li>
              <li>Travel daytime when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When bus best</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Short distances (4-8 hours).</li>
              <li>Visiting family in another city.</li>
              <li>Don&apos;t want to drive.</li>
              <li>Tight budget.</li>
              <li>No flying anxiety.</li>
              <li>City-to-city without rental car.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free senior transportation</h3>
            <p className="text-sm text-muted-foreground"><strong>Eldercare Locator</strong> — 1-800-677-1116. Connects to local senior transport. <strong>Area Agency on Aging</strong> — knows all options. <strong>Faith In Action</strong> — volunteer drivers many areas. <strong>ITN America</strong> — paid senior ride sharing. Don&apos;t pay if don&apos;t have to.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
