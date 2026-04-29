import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Candy } from 'lucide-react';

export default function SugarReductionGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sugar Reduction Guide for Seniors | TekSure" description="Cut added sugar. Plain-English guide for seniors managing blood sugar, weight, energy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Candy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sugar Reduction</h1>
          <p className="text-lg text-muted-foreground">Less sugar = more energy + clearer head.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much added sugar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart Assn limit: 25g/day (women), 36g/day (men).</li>
              <li>Average American: 75g/day.</li>
              <li>1 can of regular soda = 39g (already over).</li>
              <li>Natural sugar in fruit ≠ added sugar — fruit OK.</li>
              <li>Read &quot;added sugars&quot; line on Nutrition Facts label.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden sugar sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Flavored yogurt</strong> — 20-30g per cup. Choose plain.</li>
              <li><strong>Granola bars</strong> — 12-20g.</li>
              <li><strong>Pasta sauce</strong> — 10g per ½ cup.</li>
              <li><strong>BBQ sauce, ketchup</strong> — 4-6g per Tbsp.</li>
              <li><strong>Salad dressing</strong> — 3-5g per Tbsp.</li>
              <li><strong>Bread, crackers</strong> — sneaky.</li>
              <li><strong>Coffee drinks</strong> — Frappuccinos 60g+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">55+ sugar names on labels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cane sugar, brown sugar, raw sugar.</li>
              <li>High fructose corn syrup, corn syrup.</li>
              <li>Dextrose, fructose, glucose, sucrose, maltose.</li>
              <li>Agave, honey, maple syrup, molasses.</li>
              <li>Fruit juice concentrate, evaporated cane juice.</li>
              <li>Anything ending in &quot;-ose&quot; = sugar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy swaps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plain Greek yogurt + berries instead of fruit-on-the-bottom.</li>
              <li>Sparkling water instead of soda.</li>
              <li>Whole fruit instead of fruit juice.</li>
              <li>Dark chocolate (70%+) instead of milk chocolate.</li>
              <li>Cinnamon in coffee instead of sugar.</li>
              <li>Steel-cut oats instead of flavored instant.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Diabetes risk</h3>
            <p className="text-sm text-muted-foreground">25%+ of seniors 65+ have diabetes. Another 50% have prediabetes. Cutting added sugar is the #1 preventive step. Free A1C blood test through Medicare annual wellness visit. Catch it early.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
