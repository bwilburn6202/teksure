import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

const APPS = [
  { name: 'AllTrails', cost: 'FREE / $36/yr Pro', best: 'Biggest hike database (400,000 trails). User photos + reviews. Pro adds offline maps, wrong-turn alerts.', good: 'Best overall.' },
  { name: 'Gaia GPS', cost: '$40/yr', best: 'Detailed topographic maps. Best for backcountry. Works offline.', good: 'Best topo.' },
  { name: 'onX Backcountry', cost: '$30/yr', best: 'Public/private land overlays. Trip planning. Strong in West.', good: 'Best for hunters/anglers.' },
  { name: 'Avenza Maps', cost: 'FREE / $30/yr', best: 'Download official PDF maps from National Park Service, USGS, Forest Service.', good: 'Best for official maps.' },
  { name: 'Strava', cost: 'FREE / $80/yr', best: 'Tracks hike + bike + run. Routes from local users. Heat maps show popular trails.', good: 'Best community.' },
];

export default function HikingGpsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hiking GPS Apps — AllTrails, Gaia, onX | TekSure" description="Find trails, navigate, stay safe in the woods. Plain-English picks for the best hiking GPS apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hiking GPS Apps</h1>
          <p className="text-lg text-muted-foreground">Find trails. Don&apos;t get lost.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior-friendly trail filtering</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AllTrails filters</strong> — easy difficulty, paved/wheelchair, dog-friendly, kid-friendly.</li>
              <li>Filter by length: under 2 miles for easy days.</li>
              <li>Filter by elevation gain: under 200ft is mostly flat.</li>
              <li>Sort by rating — 4+ stars from real users.</li>
              <li>"Out and back" trails — turn around when you&apos;re tired.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety must-dos</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Tell someone where you&apos;re hiking + when back.</li>
              <li>Download trail map BEFORE leaving (cell signal often gone).</li>
              <li>Phone fully charged + portable battery.</li>
              <li>Apple Watch / Apple iPhone 14+ — Emergency SOS via Satellite (free, works without cell signal).</li>
              <li>Bring extra water + snacks.</li>
              <li>Wear sturdy shoes + sun protection.</li>
              <li>Turn around BEFORE you&apos;re tired (saving energy for the hike back).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency SOS for hikers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone 14+ &amp; Apple Watch Ultra</strong> — Emergency SOS via satellite. FREE. Hold side button.</li>
              <li><strong>Garmin inReach Mini 2</strong> — $400 + $15-50/mo. Two-way satellite text. The standard for serious hikers.</li>
              <li><strong>Spot Gen4</strong> — $130 + $13/mo. One-way SOS button.</li>
              <li><strong>Whistle</strong> — $5. 3 sharp blasts = universal distress signal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior National Park pass</h3>
            <p className="text-sm text-muted-foreground"><strong>America the Beautiful Senior Pass</strong> — $80 lifetime (or $20/year). Free entry to ALL US National Parks for 62+. Get at any park entrance or USGS.gov/store. Best $80 a senior can spend if you like the outdoors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
