import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const SVCS = [
  { name: 'AAA Classic', cost: '$70-90/yr', best: '4 free tows/yr. 100-mile each. Senior favorite.', good: 'Best overall.' },
  { name: 'AAA Plus', cost: '$110/yr', best: '4 free tows. 200-mile each. Bigger trips.', good: 'Best for travel.' },
  { name: 'Better World Club', cost: '$60/yr', best: 'AAA alternative. Eco-focused.', good: 'Best alternative.' },
  { name: 'Allstate Roadside', cost: '$40-60/yr', best: 'No insurance required. Per-call option too.', good: 'Best non-insurance.' },
  { name: 'Insurance roadside', cost: '$10-30/yr add-on', best: 'Add to existing auto insurance.', good: 'Best budget.' },
  { name: 'Credit card free', cost: 'FREE with card', best: 'Many premium cards include. Limited.', good: 'Best free option.' },
];

export default function RoadsideAssistanceCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roadside Assistance Compare | TekSure" description="AAA vs alternatives. Plain-English picks for senior roadside assistance." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roadside Assistance Picks</h1>
          <p className="text-lg text-muted-foreground">Help is on the way. Pick the right plan.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What roadside covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Towing to repair shop.</li>
              <li>Flat tire — change to spare.</li>
              <li>Battery jump or replacement.</li>
              <li>Lockout — locked keys in car.</li>
              <li>Out of gas — small delivery.</li>
              <li>Stuck in mud/snow — winching.</li>
              <li>Some include trip interruption.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AAA bonus benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotel/restaurant discounts.</li>
              <li>Travel agency + cruises.</li>
              <li>Free maps + trip planning.</li>
              <li>Free passport photos.</li>
              <li>Insurance bundling discounts.</li>
              <li>DMV services in some states.</li>
              <li>Discounts on car rentals + tires.</li>
              <li>Identity theft monitoring.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Already covered? Check first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Car warranty</strong> — new cars often include 3-5 yrs.</li>
              <li><strong>Auto insurance</strong> — many include $10-30 add-on.</li>
              <li><strong>Credit cards</strong> — Capital One Venture, Chase Sapphire.</li>
              <li><strong>USAA + Costco</strong> — members often get free or low-cost.</li>
              <li>Don&apos;t double-pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior decision tree</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drive often + long distances → AAA Plus.</li>
              <li>Local driving only → AAA Classic.</li>
              <li>Snowbird → AAA Plus + RV plan if RV.</li>
              <li>Budget tight → Insurance add-on.</li>
              <li>Don&apos;t drive much → per-call (Honk app $50-100/call).</li>
              <li>Premium card holder → check card first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family plan saves $$</h3>
            <p className="text-sm text-muted-foreground">AAA primary member + family adds for $30-40 each (vs $70-90 each individually). Spouse + adult kids covered. Even if kids don&apos;t drive — covered when they ride. Worth checking. AAA secondary households get the same benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
