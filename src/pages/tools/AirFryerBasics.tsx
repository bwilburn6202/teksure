import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function AirFryerBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Fryer Basics — First Time User | TekSure" description="Just got an air fryer? Plain-English starter recipes, time/temperature charts, and what NOT to put in." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Fryer Basics</h1>
          <p className="text-lg text-muted-foreground">It&apos;s a small convection oven. That&apos;s it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it actually is</h2>
            <p className="text-sm">An air fryer is a small countertop convection oven. Hot air whips around food fast — gives a crisp outside without much oil. Doesn&apos;t actually "fry" anything. Faster than the oven, no preheating needed.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time + temperature cheat sheet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Frozen french fries</strong> — 400°F for 12-15 min, shake halfway.</li>
              <li><strong>Frozen chicken nuggets/tenders</strong> — 400°F for 8-10 min.</li>
              <li><strong>Bacon</strong> — 350°F for 8-10 min. Crispy, less mess than pan.</li>
              <li><strong>Chicken breast (raw)</strong> — 380°F for 18-22 min, flip halfway.</li>
              <li><strong>Salmon fillets</strong> — 400°F for 8-10 min.</li>
              <li><strong>Broccoli/cauliflower</strong> — 400°F for 8-10 min, toss with oil + salt.</li>
              <li><strong>Brussels sprouts</strong> — 400°F for 12-15 min.</li>
              <li><strong>Reheated pizza</strong> — 350°F for 3-4 min. Better than microwave.</li>
              <li><strong>Reheated fried chicken/leftovers</strong> — 350°F for 4-6 min.</li>
              <li><strong>Hard boiled eggs</strong> — 250°F for 15-17 min. No water!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What NOT to put in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wet batter (tempura, beer batter) — drips off, burns on heating element.</li>
              <li>Cheese on top — flies around, melts onto fan. Add cheese in last 1-2 minutes only.</li>
              <li>Leafy greens — burn instantly. Spinach, lettuce, kale chips need very low heat.</li>
              <li>Too much food — crowded basket = soggy results. Single layer.</li>
              <li>Oil pools — drain off chicken first.</li>
              <li>Toothpicks/skewers — they fly into fan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Let cool 5 minutes after use.</li>
              <li>Basket goes in dishwasher OR scrub with soapy hot water.</li>
              <li>Stuck-on food — soak basket in hot water 10 min first.</li>
              <li>Wipe inside with damp cloth weekly.</li>
              <li>NEVER use steel wool — scratches non-stick coating.</li>
              <li>Parchment paper liners ($5/100 on Amazon) save cleanup time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for low-effort meals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-seasoned salmon fillet + frozen veg = 10-min dinner.</li>
              <li>Frozen chicken tenders + carrots = quick comfort food.</li>
              <li>Reheating leftovers — way better than microwave.</li>
              <li>Single baked potato — 40 min vs hour in oven.</li>
              <li>Costco rotisserie chicken pieces — reheat without drying out.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best buys</h3>
            <p className="text-sm text-muted-foreground">For 1-2 people: <strong>Cosori 5.8qt</strong> ($85) or <strong>Ninja AF101</strong> ($90). For families: <strong>Ninja Foodi DualZone</strong> ($170, 2 baskets at once). Skip the extra fancy "smart" ones — they all do the same thing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
