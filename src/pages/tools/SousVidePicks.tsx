import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

const PICKS = [
  { name: 'Anova Precision Cooker', cost: '$130-250', best: 'Most popular. Reliable. App-controlled. Strong recipe library.', good: 'Best overall.' },
  { name: 'Inkbird ISV-200W', cost: '$60-90', best: 'Budget pick. Same temperature accuracy. Simpler interface.', good: 'Best budget.' },
  { name: 'Breville Joule', cost: '$200', best: 'Smallest. Magnetic base sticks to pot. iPhone-only app.', good: 'Best small.' },
  { name: 'Instant Pot Sous Vide', cost: '$80', best: 'Cheaper, quieter. Strong for beginners.', good: 'Best for beginners.' },
];

export default function SousVidePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sous Vide Picks for Home Cooks | TekSure" description="Anova, Inkbird, Joule. Plain-English picks for sous vide immersion circulators. Restaurant-quality steak at home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sous Vide Picks</h1>
          <p className="text-lg text-muted-foreground">Restaurant-quality. Foolproof.</p>
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
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <p className="text-sm">Vacuum-seal food in plastic bag. Drop into water bath at exact temperature (e.g. 130°F for medium-rare). Cook 1-4 hours. Sear in pan for 60 seconds for crust. Result: perfect doneness end-to-end. Can&apos;t overcook.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set + forget. No babysitting the stove.</li>
              <li>Tough cuts (chuck, brisket) become tender.</li>
              <li>Perfect doneness every time.</li>
              <li>Big batches — cook 6 chicken breasts at once.</li>
              <li>Frozen-to-cooked in one step.</li>
              <li>Almost no cleanup — bag goes in trash.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Steak — 130°F for 1-2 hours, sear hot pan 1 min/side.</li>
              <li>Chicken breast — 145°F for 1-2 hours.</li>
              <li>Salmon — 125°F for 30-45 min.</li>
              <li>Pork tenderloin — 140°F for 2 hours.</li>
              <li>Egg bites (Starbucks-style) — 172°F for 1 hour.</li>
              <li>Carrots/asparagus — 183°F for 30 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free recipe sources</h3>
            <p className="text-sm text-muted-foreground"><strong>Anova app</strong> — free with Anova or without. Best curated. <strong>Serious Eats sous vide guide</strong> — free, scientific. <strong>YouTube — Sous Vide Everything</strong> — entertaining, lots of tests. Skip "Joule app" — Apple-only.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
