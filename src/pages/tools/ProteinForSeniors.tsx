import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Beef } from 'lucide-react';

export default function ProteinForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Protein for Seniors | TekSure" description="Seniors need MORE protein. Plain-English guide to hitting daily protein for muscle + strength." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Beef className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Protein for Seniors</h1>
          <p className="text-lg text-muted-foreground">After 65, you need MORE — not less.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much protein</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Old recommendation: 0.36g per pound (too low for seniors).</li>
              <li>Senior target: 0.5-0.7g per pound body weight.</li>
              <li>150 lb senior = 75-105g protein/day.</li>
              <li>Spread across meals — body absorbs ~30g per meal best.</li>
              <li>30g breakfast + 30g lunch + 30g dinner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best protein sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eggs</strong> — 6g each. 2 eggs = 12g.</li>
              <li><strong>Greek yogurt</strong> — 15-20g per cup.</li>
              <li><strong>Chicken breast</strong> — 25g per 3oz.</li>
              <li><strong>Fish (salmon, tuna)</strong> — 22g per 3oz.</li>
              <li><strong>Cottage cheese</strong> — 25g per cup.</li>
              <li><strong>Beans/lentils</strong> — 15g per cup.</li>
              <li><strong>Protein shake</strong> — 20-30g (Premier Protein, Fairlife).</li>
              <li><strong>Tofu</strong> — 20g per cup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors need more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Muscle loss (sarcopenia) starts at 30, accelerates after 65.</li>
              <li>Weak muscles = falls + frailty.</li>
              <li>Bodies less efficient at using protein after 65.</li>
              <li>Combined with strength training = preserves independence.</li>
              <li>Helps wound healing + recovery from illness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy ways to add 30g</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Breakfast: 2 eggs + Greek yogurt = 30g.</li>
              <li>Snack: protein shake = 30g.</li>
              <li>Lunch: tuna/chicken sandwich = 25g.</li>
              <li>Dinner: 4oz chicken/fish + beans = 35g.</li>
              <li>Add Greek yogurt or cottage cheese to anything.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to doctor first</h3>
            <p className="text-sm text-muted-foreground">If kidney disease or specific condition — protein needs vary. Get blood test for kidney function. For most healthy seniors, MORE protein = better outcomes. Free MyPlate.gov has senior nutrition guides.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
