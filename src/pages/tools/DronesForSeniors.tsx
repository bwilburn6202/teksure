import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

const PICKS = [
  { name: 'DJI Mini 4 Pro', cost: '$760', best: 'Best beginner drone. Lightweight (under 250g — no FAA registration).', good: 'Best beginner.' },
  { name: 'DJI Mini 3', cost: '$470', best: 'Cheaper version. Same easy flying.', good: 'Best budget.' },
  { name: 'DJI Air 3', cost: '$1,100', best: 'More camera, longer flights.', good: 'Best mid-range.' },
  { name: 'Holy Stone HS720E', cost: '$300', best: 'Cheapest GPS drone. Less reliable.', good: 'Best ultra-budget.' },
];

export default function DronesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drones for Senior Hobbyists | TekSure" description="Drone hobby for retirees. Plain-English picks + rules + photography for senior pilots." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drones for Seniors</h1>
          <p className="text-lg text-muted-foreground">Photography. Travel. Engineering hobby.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modern drones FLY THEMSELVES.</li>
              <li>GPS hover means hands-off easy.</li>
              <li>Auto-return to home if low battery.</li>
              <li>Aerial photography from your yard.</li>
              <li>Travel + see places you can&apos;t walk to.</li>
              <li>Great hobby + grandkid bonding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FAA rules (important)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drones over 250g — register with FAA ($5).</li>
              <li>Take TRUST test online (free) — required for all.</li>
              <li>Don&apos;t fly above 400 feet.</li>
              <li>Stay away from airports + restricted areas.</li>
              <li>Use B4UFLY app — shows where allowed.</li>
              <li>Always keep visual line of sight.</li>
              <li>Don&apos;t fly over crowds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First flight</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take TRUST test first.</li>
              <li>Open field, no people.</li>
              <li>No wind first time.</li>
              <li>Stay under 50 feet first.</li>
              <li>Practice landing.</li>
              <li>Build up over weeks.</li>
              <li>Watch DJI tutorial videos before.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Real estate photography (paid hobby).</li>
              <li>Family event aerial shots.</li>
              <li>Wedding photography.</li>
              <li>Inspect roof / chimney without climbing.</li>
              <li>Travel videos.</li>
              <li>Wildlife photography.</li>
              <li>YouTube channel — fun retirement project.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Drone clubs</h3>
            <p className="text-sm text-muted-foreground">Many local drone clubs welcome seniors. Group flights, photo competitions, training. Find via AMA (Academy of Model Aeronautics). Mature crowd, lots of retired engineers. Great social hobby. Drone hobby + photography = perfect retirement combination for tech-curious seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
