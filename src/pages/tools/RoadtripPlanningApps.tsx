import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

const APPS = [
  { name: 'Roadtrippers', cost: 'FREE / $30/yr', best: 'Plan multi-stop trips. Find quirky stops along route.', good: 'Best overall planner.' },
  { name: 'GasBuddy', cost: 'FREE', best: 'Cheapest gas on your route.', good: 'Best gas finder.' },
  { name: 'Roadside America', cost: 'FREE', best: '12K+ quirky roadside attractions.', good: 'Best for fun stops.' },
  { name: 'AllStays', cost: '$10', best: 'Find Walmart overnights, RV parks, hotels.', good: 'Best for RVers.' },
  { name: 'iExit', cost: 'FREE', best: 'What&apos;s at next interstate exit.', good: 'Best exit info.' },
  { name: 'AAA TripTik', cost: 'FREE (members)', best: 'Classic trip planner.', good: 'Best for AAA members.' },
];

export default function RoadtripPlanningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roadtrip Planning Apps for Seniors | TekSure" description="Plan epic road trips. Plain-English app picks for senior road trippers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roadtrip Planning</h1>
          <p className="text-lg text-muted-foreground">Open road. Best retirement adventure.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior road trip basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>250-350 miles/day max — don&apos;t exhaust.</li>
              <li>Stop every 2 hours — stretch, walk.</li>
              <li>Plan rest days (1 in 4 driving days).</li>
              <li>Avoid driving in dark / weather.</li>
              <li>Pre-book hotels — no late scrambling.</li>
              <li>AAA Plus = 200-mile tow free.</li>
              <li>Charge phone + power bank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly trips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pacific Coast Highway</strong> — beautiful + slow.</li>
              <li><strong>Blue Ridge Parkway</strong> — fall foliage.</li>
              <li><strong>Route 66</strong> — nostalgia.</li>
              <li><strong>National Parks loops</strong> — Yellowstone, Grand Canyon.</li>
              <li><strong>New England fall foliage</strong>.</li>
              <li><strong>Florida Keys</strong> — short distances.</li>
              <li>Pick destinations you can do at senior pace.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-trip preparation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Car inspection (oil, tires, brakes, fluids).</li>
              <li>AAA membership current.</li>
              <li>Insurance card + roadside insurance verified.</li>
              <li>Emergency kit (water, blanket, jumper cables).</li>
              <li>Phone charger that fits car.</li>
              <li>Print itinerary + addresses (backup).</li>
              <li>Tell someone your route + check-ins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior travel groups</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t want to plan alone? <strong>Road Scholar</strong> + <strong>Caravan Tours</strong> offer guided road trips. Bus tours senior-paced. <strong>Adventure Caravans</strong> for RVers. Build your own with apps OR join a group — both work for seniors. See /tools/senior-travel-groups.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
