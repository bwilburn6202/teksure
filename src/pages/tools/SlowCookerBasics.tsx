import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function SlowCookerBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Slow Cooker Basics for Seniors | TekSure" description="Crockpot 101. Plain-English starter recipes, time conversions, when to use slow vs Instant Pot." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Slow Cooker Basics</h1>
          <p className="text-lg text-muted-foreground">Set + forget. Senior-perfect.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best slow cookers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Crock-Pot 6qt</strong> ($35) — basic + reliable. Manual dial.</li>
              <li><strong>Hamilton Beach Programmable</strong> ($60) — auto-keep warm. Senior-friendly.</li>
              <li><strong>Instant Pot Duo</strong> ($90) — slow cooker + pressure cooker + more.</li>
              <li><strong>Crock-Pot Express XL</strong> ($100) — same idea.</li>
              <li>For 1-2 people: 4qt. For families: 6-8qt.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 senior-favorite recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pot roast</strong> — beef chuck + carrots + onions + potatoes. 8 hrs LOW.</li>
              <li><strong>Pulled pork</strong> — pork shoulder + BBQ sauce. 8 hrs LOW.</li>
              <li><strong>Chicken + dumplings</strong> — chicken thighs + cream of chicken soup. 6 hrs LOW.</li>
              <li><strong>Chili</strong> — beef + beans + tomatoes + spices. 6 hrs LOW.</li>
              <li><strong>Beef stew</strong> — chuck + veggies + beef broth. 8 hrs LOW.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time conversions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 hour stovetop = 4-6 hrs LOW or 2-3 hrs HIGH.</li>
              <li>Dump + go works for almost any stew/braise recipe.</li>
              <li>LOW (200°F) better for tough cuts.</li>
              <li>HIGH (300°F) for chicken or veggies.</li>
              <li>Don&apos;t lift lid — adds 30 min each time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Programmable models auto-switch to "warm" — won&apos;t burn dinner if you nap.</li>
              <li>Slow cooker liners ($5/box) — zero cleanup.</li>
              <li>Frozen meat OK if cooking 4+ hours.</li>
              <li>Salt LATER — slow-cooked salt concentrates more.</li>
              <li>Add dairy + cream LAST 30 min — prevents curdling.</li>
              <li>Crisper finish: brown meat in pan first (optional).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free recipe sources</h3>
            <p className="text-sm text-muted-foreground"><strong>The Magical Slow Cooker</strong> blog — large library. <strong>Pinterest</strong> — search "slow cooker recipes". <strong>Crock-Pot.com</strong> recipes from manufacturer. <strong>Skinnytaste</strong> — healthy slow cooker. All free + senior-friendly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
