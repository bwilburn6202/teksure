import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

const APPS = [
  { name: 'Instant Pot official app', cost: 'FREE', best: 'Free recipe library. Built-in timer + shopping list.', good: 'Best free.' },
  { name: 'Mealthy Multipot Recipes', cost: 'FREE', best: 'Largest community of pressure cooker recipes.', good: 'Best community.' },
  { name: 'Paprika 3 Recipe Manager', cost: '$5', best: 'Save any web recipe + adjust for Instant Pot timing.', good: 'Best recipe saver.' },
  { name: 'Pressure Cooking Today', cost: 'FREE blog', best: 'Barbara Schieving. Most-trusted Instant Pot blog.', good: 'Best trusted blog.' },
  { name: 'YouTube — Pressure Luck', cost: 'FREE', best: 'Jeffrey Eisner. Funny, foolproof recipes.', good: 'Best video.' },
];

export default function InstantPotApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instant Pot Recipes + Apps | TekSure" description="Best Instant Pot recipe sources, time charts, and senior-friendly apps. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instant Pot Recipes</h1>
          <p className="text-lg text-muted-foreground">7 functions. Endless meals.</p>
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
            <h2 className="font-bold text-xl mb-3">Time chart (cheat sheet)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Brown rice</strong> — 22 min, NPR 10 min.</li>
              <li><strong>White rice</strong> — 4 min, NPR 10 min.</li>
              <li><strong>Hard-boiled eggs</strong> — 5 min, NPR 5 min, ice bath.</li>
              <li><strong>Chicken breast (frozen)</strong> — 12 min, NPR 5 min.</li>
              <li><strong>Pulled pork</strong> — 60 min/lb, NPR 15 min.</li>
              <li><strong>Beef stew</strong> — 35 min, NPR.</li>
              <li><strong>Chili</strong> — 30 min, NPR.</li>
              <li><strong>Mashed potatoes</strong> — 8 min, QR.</li>
              <li><strong>Whole chicken</strong> — 25 min, NPR 10 min.</li>
              <li>NPR = natural release. QR = quick release.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Instant Pot starter recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beef stew</strong> — every senior cook&apos;s starter.</li>
              <li><strong>Pulled pork</strong> — feed crowds easily.</li>
              <li><strong>Chicken + rice 1-pot</strong> — easy weeknight.</li>
              <li><strong>Steel-cut oatmeal</strong> — set night before, breakfast ready.</li>
              <li><strong>Hard-boiled eggs</strong> — peel like a dream after.</li>
              <li><strong>Mac &amp; cheese</strong> — kids love.</li>
              <li><strong>Cheesecake</strong> — yes, really. Better than oven.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tip</h3>
            <p className="text-sm text-muted-foreground">Use long handle silicone tongs to lift inner pot — too hot to touch. Buy a glass lid ($15) for slow-cook + sauté modes. Don&apos;t fill above MAX line. Steam release is HOT — angle away from face.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
