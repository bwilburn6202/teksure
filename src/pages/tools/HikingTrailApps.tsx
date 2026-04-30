import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

const APPS = [
  { name: 'AllTrails', cost: 'Free; $36/year Pro', best: 'Most popular. 400,000+ trails with reviews and photos. Pro adds offline maps.', good: 'Free version is fine for most day-hikers.' },
  { name: 'Gaia GPS', cost: '$40/year', best: 'Topographic maps, offline routing. Best for backcountry and trail mappers.', good: 'For more serious hikers.' },
  { name: 'NPS App (National Park Service)', cost: 'FREE', best: 'Official US National Park guide. Maps, ranger talks, alerts. Works offline once you download a park.', good: 'Essential before any park trip.' },
  { name: 'AllTrails+ Apple Watch', cost: 'Free with AllTrails Pro', best: 'Wrist GPS without your phone. Off-trail alerts, return-to-start.', good: 'Best safety feature.' },
  { name: 'TrailLink', cost: 'Free; $30/year Pro', best: 'Best for paved rail-trails. Nationwide. Wheelchair / stroller friendly trails.', good: 'Often missed but excellent for accessible walks.' },
];

export default function HikingTrailApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hiking & Trail Apps — AllTrails, Gaia, NPS | TekSure" description="Find a trail near you, navigate confidently, stay safe. Plain-English picks for hiking apps — paved walks to backcountry hikes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hiking & Trail Apps</h1>
          <p className="text-lg text-muted-foreground">From a 1-mile paved walk to multi-day trails.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start safely (any trail)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Look for "easy" or "moderate" rated trails.</li>
              <li>Check distance, elevation gain, and recent reviews.</li>
              <li>Tell someone where you\'re going and when you\'ll be back.</li>
              <li>Bring water, snacks, sunscreen, and a fully charged phone.</li>
              <li>Download the trail map for offline use BEFORE you leave (cell signal often dies in mountains).</li>
              <li>Carry a small first aid kit. Hiking poles help knees on descents.</li>
              <li>Wear sturdy shoes. Sneakers are fine for paved or short trails.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you have an Apple Watch or Garmin</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pair AllTrails — the watch shows turn-by-turn even when phone is in pocket.</li>
              <li>Apple Watch Series 8+ with iPhone 14+ has Emergency SOS via satellite — works in the wilderness with no cell service.</li>
              <li>Garmin inReach is the gold standard for backcountry — sends "I\'m OK" or "SOS" via satellite anywhere on Earth.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly: rail-trails</h3>
            <p className="text-sm text-muted-foreground">If big elevation changes are tough, look for "rail trails" — old railway tracks converted to flat, paved walking paths. TrailLink (free) maps thousands. Many are wheelchair accessible. Beautiful, gentle, often along rivers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
