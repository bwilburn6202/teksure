import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

const PICKS = [
  { name: 'Traeger Pro 575', price: '$700-900', best: 'Best-known pellet brand. Reliable, app-controlled, smokes/grills/bakes.', good: 'Most popular.' },
  { name: 'Weber SmokeFire EX4', price: '$900-1,100', best: 'Premium pellet from Weber. Strong reputation.', good: 'Premium pick.' },
  { name: 'Pit Boss 850 Pro', price: '$500-700', best: 'Best value pellet grill. Bigger surface than Traeger Pro.', good: 'Best value.' },
  { name: 'Weber Genesis II (gas)', price: '$700-1,200', best: 'Best gas grill. Quick, reliable, lasts decades.', good: 'For traditional gas.' },
  { name: 'Big Green Egg', price: '$700-2,000', best: 'Iconic ceramic kamado. Grill, smoke, bake. Lasts forever.', good: 'For purists.' },
  { name: 'Ninja Woodfire', price: '$300-400', best: 'Electric. Indoor / outdoor. Lower-tier "smoking" but huge convenience.', good: 'For apartments / condos.' },
];

export default function PelletGrillCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pellet Grill & Outdoor Cooking Coach | TekSure" description="Traeger, Pit Boss, Weber, Big Green Egg. Plain-English picks for pellet grills, gas, and ceramic kamados — and which suits which cook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pellet Grill Coach</h1>
          <p className="text-lg text-muted-foreground">Smoke briskets, grill steaks, bake bread — all outside.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why pellet grills are popular</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Set temperature like an oven. Pellets feed automatically.</li>
              <li>App-controlled — monitor temp from couch.</li>
              <li>Smoker AND grill in one.</li>
              <li>Adds wood-fired flavor without the chop-and-pile work.</li>
              <li>Easier than charcoal, more interesting than gas.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Companion gear</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>MEATER thermometer</strong> ($100) — wireless, alerts on phone.</li>
              <li><strong>Pellets storage bin</strong> — moisture ruins pellets.</li>
              <li><strong>Grill cover</strong> — extends life 5-10 years.</li>
              <li><strong>Stainless cleaning brush + paper towels</strong> — quick clean.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First cooks for pellet beginners</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Smoked chicken thighs — 250°F for 90 min. Forgiving.</li>
              <li>Pulled pork (bone-in shoulder) — 8-12 hours, low and slow.</li>
              <li>Steak reverse-sear — smoke at 225°F until 110°F internal, then crank for sear.</li>
              <li>Smoked salmon — easy 1-2 hour cook.</li>
              <li>Pizza on a pizza stone in pellet — surprisingly great.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best YouTube</h3>
            <p className="text-sm text-muted-foreground">"Mad Scientist BBQ" and "Meat Church BBQ" — top channels. Free. World-class techniques. Watch one episode and you\'ll be a smoker overnight.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
