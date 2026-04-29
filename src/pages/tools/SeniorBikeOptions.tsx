import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

const PICKS = [
  { name: 'Sixthreezero EVRYjourney', cost: '$400-500', best: 'Step-thru cruiser. Comfy seat. Upright posture. Senior favorite.', good: 'Best cruiser.' },
  { name: 'Schwinn Mikko 7', cost: '$350-450', best: 'Hybrid step-thru. 7 speeds. Easy gear changes.', good: 'Best mid-price.' },
  { name: 'Lectric XP 3.0 (e-bike)', cost: '$1,000', best: 'Folding e-bike. Pedal assist takes hills out. Best e-bike for seniors.', good: 'Best e-bike.' },
  { name: 'Trike (3-wheeler)', cost: '$300-800', best: 'Stable. Won&apos;t fall. Good for balance issues.', good: 'Best for balance issues.' },
  { name: 'Recumbent bike', cost: '$1,500-3,000', best: 'Lay-back position. Best for back pain. Higher visibility for cars.', good: 'Best for back pain.' },
];

export default function SeniorBikeOptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior-Friendly Bike Options | TekSure" description="Step-thru cruisers, e-bikes, trikes. Plain-English picks for senior bikes that prioritize comfort + safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Bike Options</h1>
          <p className="text-lg text-muted-foreground">Comfortable. Stable. Joy.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Step-thru frame</strong> — no leg-over swing, easier mounting.</li>
              <li><strong>Wide saddle</strong> — comfortable for longer rides.</li>
              <li><strong>Upright handlebars</strong> — easy on neck/back.</li>
              <li><strong>3 or 7 speed</strong> — enough gears for most.</li>
              <li><strong>Coaster brakes</strong> (back-pedal to stop) — easier for some.</li>
              <li><strong>Wide tires</strong> — stable, less wobble.</li>
              <li><strong>Mirror</strong> — see traffic without turning head.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">E-bike for hills + distance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pedal-assist motor helps you climb hills.</li>
              <li>Goes 15-28 mph. Most class 1+2 bikes don&apos;t need license.</li>
              <li>30-50 mile range per charge.</li>
              <li>Folding models (Lectric, Rad Power Mini) fit RV/cars.</li>
              <li>Trade — heavier than regular bike (50-70 lbs). Battery cost over years.</li>
              <li>Great for "I miss biking but my knees" seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Helmet</strong> — non-negotiable. $25-100.</li>
              <li><strong>Reflective vest</strong> ($15) — cars MUST see you.</li>
              <li><strong>Front + rear lights</strong> — even in daylight.</li>
              <li><strong>Bell or horn</strong> — alert pedestrians.</li>
              <li><strong>Sturdy shoes</strong> — not flip-flops.</li>
              <li><strong>Phone on bike</strong> — fall, can call for help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best beginner moves</h3>
            <p className="text-sm text-muted-foreground">Start in empty parking lots. Pick days/times with little traffic. Bike paths first, roads later. Local bike shops do free fittings — they adjust seat height + handlebars to your body. Way more comfortable than out-of-box.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
