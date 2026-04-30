import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function SeniorTrainTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Train Travel — Amtrak + Beyond | TekSure" description="Senior Amtrak discount, scenic routes, sleeper cars. Plain-English guide for seniors who want train adventures." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Train Travel</h1>
          <p className="text-lg text-muted-foreground">Slower. Scenic. Memorable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amtrak senior discount</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>10% off</strong> most fares for 65+.</li>
              <li>Show up at booking — automatic discount.</li>
              <li>Apply to most Amtrak routes (some restrictions).</li>
              <li>Veterans get 10% off too.</li>
              <li>Book at amtrak.com or Amtrak app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best US scenic routes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coast Starlight (LA-Seattle)</strong> — 35 hours along Pacific. Senior favorite.</li>
              <li><strong>California Zephyr (Chicago-SF)</strong> — Rocky Mountains, 51 hours.</li>
              <li><strong>Empire Builder (Chicago-Seattle)</strong> — Glacier National Park views.</li>
              <li><strong>Adirondack (NYC-Montreal)</strong> — Hudson + Lake Champlain.</li>
              <li><strong>Crescent (NYC-New Orleans)</strong> — South route.</li>
              <li><strong>Auto Train (Lorton VA-Sanford FL)</strong> — drive on with car. Seniors love it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleeper vs coach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Coach</strong> — recliner seat, $80-300 per leg. Fine for under 8 hrs.</li>
              <li><strong>Roomette (sleeper)</strong> — bed, sink. $250-500 added.</li>
              <li><strong>Bedroom (sleeper)</strong> — bed + private toilet/shower. $400-1,000 added.</li>
              <li>Sleeper INCLUDES all meals — significant value.</li>
              <li>For 60+ on overnights — sleeper is worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tour packages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amtrak Vacations</strong> — packages combine train + hotels + tours.</li>
              <li><strong>Rocky Mountaineer (Canadian Rockies)</strong> — luxury daytime train.</li>
              <li><strong>Vermont Country Store + Polar Express</strong> — themed.</li>
              <li><strong>Grand Canyon Railway</strong> — Williams AZ to South Rim.</li>
              <li><strong>Road Scholar / Elderhostel</strong> — senior-only train tours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love trains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No security lines.</li>
              <li>Lots of legroom + can walk around.</li>
              <li>Bathrooms always nearby.</li>
              <li>Scenic windows.</li>
              <li>Dining car is a real meal + meet other passengers.</li>
              <li>Way less stressful than airports.</li>
              <li>No baggage limits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">European trains for travelers</h3>
            <p className="text-sm text-muted-foreground"><strong>Eurail Senior Pass</strong> — 60+ get 10% discount. Trains are excellent across Europe. Far easier than driving on left/narrow roads. Most major European train lines accessible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
