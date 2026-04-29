import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

const PICKS = [
  { name: 'Keurig K-Classic', cost: '$110', best: 'Pod-based. One button. No measuring. Senior favorite.', good: 'Best one-cup.' },
  { name: 'Mr. Coffee 12-Cup', cost: '$30', best: 'Simple drip. Cheap. Reliable.', good: 'Best basic.' },
  { name: 'Cuisinart DCC-3200', cost: '$130', best: 'Drip with hot water + brew strength.', good: 'Best drip.' },
  { name: 'Ninja CFP301', cost: '$190', best: 'Hot/iced + pod or grounds. Versatile.', good: 'Best versatile.' },
  { name: 'Breville Barista Express', cost: '$700', best: 'Espresso machine for serious coffee.', good: 'Best espresso.' },
];

export default function CoffeeMakerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coffee Maker for Seniors | TekSure" description="Easy coffee makers. Plain-English picks for senior coffee drinkers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coffee Maker Picks</h1>
          <p className="text-lg text-muted-foreground">One button. Hot coffee. Done.</p>
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
              <li>One button operation.</li>
              <li>Auto-off after 2 hours.</li>
              <li>Removable water reservoir (easier fill).</li>
              <li>Drip-stop carafe (no spills).</li>
              <li>Stay-cool exterior.</li>
              <li>Programmable wake-up brew (drip models).</li>
              <li>Reusable filter basket — no paper filter forgetting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pod machines pros + cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pros</strong> — easiest, no measuring, single cup, no cleanup.</li>
              <li><strong>Cons</strong> — pods $0.50-1 each (vs $0.10/drip), waste, fewer flavor options.</li>
              <li>Reusable pod ($10) lets you use ground coffee — saves money.</li>
              <li>Costco sells K-Cups bulk cheap.</li>
              <li>Compatible pods cheaper than name-brand.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Descale every 3 months — vinegar + water cycles.</li>
              <li>Clean carafe + filter basket weekly.</li>
              <li>Replace water filter (if has one) every 3 months.</li>
              <li>Empty grounds promptly (mold).</li>
              <li>Use filtered water — better taste + longer life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coffee tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco Kirkland Signature coffee — high quality, great price.</li>
              <li>Trader Joe&apos;s coffee — quality + cheap.</li>
              <li>Buy beans, grind fresh = better — but more work.</li>
              <li>Pre-ground fine for most.</li>
              <li>Switch to half-caf if too jittery.</li>
              <li>Decaf is fine — 95% caffeine removed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Coffee + health</h3>
            <p className="text-sm text-muted-foreground">2-3 cups/day = healthy for most seniors. Reduces dementia + Type 2 diabetes risk. Skip if BP issues, sleep problems, or your doctor says. Avoid sugary creamers — adds 100+ calories/cup. Black coffee or splash of milk best.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
