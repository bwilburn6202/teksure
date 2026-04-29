import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const PICKS = [
  { name: 'GreenPan Padova ceramic', cost: '$120 set', best: 'Lighter than cast iron. Non-stick. Senior-favorite.', good: 'Best lightweight.' },
  { name: 'OXO Good Grips Pro', cost: '$200 set', best: 'Ergonomic handles. Stainless. Quality.', good: 'Best ergonomic.' },
  { name: 'T-fal Ultimate Hard Anodized', cost: '$120 set', best: 'Light + non-stick + cheap.', good: 'Best budget.' },
  { name: 'Cuisinart MultiClad Pro', cost: '$300 set', best: 'Stainless. Last 30+ years.', good: 'Best premium.' },
];

export default function SeniorFriendlyCookware() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior-Friendly Cookware | TekSure" description="Light, easy-grip cookware. Plain-English picks for seniors with arthritis or weaker hands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior-Friendly Cookware</h1>
          <p className="text-lg text-muted-foreground">Light. Easy grip. Won&apos;t hurt wrists.</p>
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
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cast iron</strong> — too heavy for seniors with weak grip.</li>
              <li><strong>Single thin handle</strong> — wobbly when full.</li>
              <li><strong>Cheap non-stick</strong> — peels in 6 months.</li>
              <li><strong>Heavy stainless without aluminum core</strong> — slow to heat.</li>
              <li>Test weight in store — empty pot &lt;2 lbs ideal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2 handles on big pots — easier carry.</li>
              <li>Stay-cool handles.</li>
              <li>Light weight under 2 lbs empty.</li>
              <li>Flat bottom for stability.</li>
              <li>Dishwasher safe.</li>
              <li>Tight-fitting glass lid.</li>
              <li>Non-stick easier to clean.</li>
              <li>Induction-compatible (future-proof).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 essential pieces</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10&quot; non-stick frying pan.</li>
              <li>3-quart saucepan with lid.</li>
              <li>5-6 quart pot with lid (soups).</li>
              <li>Small saucepan (heating soup, eggs).</li>
              <li>Cast aluminum skillet (8&quot;) — light + sears well.</li>
              <li>Skip excess sets — wastes money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Replacement timeline</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Non-stick: 3-5 years (replace when scratched).</li>
              <li>Stainless: 20+ years.</li>
              <li>Cast iron: lifetime (but heavy).</li>
              <li>Don&apos;t use scratched non-stick — chemical concerns.</li>
              <li>Wood/silicone utensils preserve coating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Adaptive grip aids</h3>
            <p className="text-sm text-muted-foreground">Silicone handle covers ($10) — make any pot easier grip. Anti-slip cooking mats keep pots stable. Saucepan cradle for arthritis. OXO Good Grips ergonomic kitchen tools — gold standard for senior-friendly. Buy online or at Bed Bath &amp; Beyond.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
