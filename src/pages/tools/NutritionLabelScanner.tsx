import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanLine } from 'lucide-react';

const APPS = [
  { name: 'Yuka', cost: 'FREE / $20/yr Premium', best: 'Scan barcode, get health score 0-100. Plus cosmetics. Independent ratings.', good: 'Best overall.' },
  { name: 'Fooducate', cost: 'FREE / $5/mo Premium', best: 'Letter grade A-D for foods. Diabetic + heart filters.', good: 'Best for diabetics.' },
  { name: 'MyFitnessPal', cost: 'FREE / $20/mo Premium', best: 'Scan + log calories. Largest food database.', good: 'Best for tracking.' },
  { name: 'Lose It!', cost: 'FREE / $40/yr Premium', best: 'Photo a meal, AI estimates calories. Senior-friendly.', good: 'Best photo logging.' },
  { name: 'Open Food Facts', cost: 'FREE', best: 'Open-source, no ads. Scan any product worldwide.', good: 'Best non-profit.' },
];

export default function NutritionLabelScanner() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nutrition Scanner Apps | TekSure" description="Yuka, Fooducate, MyFitnessPal. Plain-English picks for scanning food barcodes to check sugar, sodium, additives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanLine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nutrition Label Scanners</h1>
          <p className="text-lg text-muted-foreground">Scan barcode. Decide in 5 seconds.</p>
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
            <h2 className="font-bold text-xl mb-3">Quick label checks for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sodium</strong> — under 140mg per serving = "low sodium". 600+mg = high.</li>
              <li><strong>Added sugar</strong> — under 5g/serving good. 15g+ is dessert territory.</li>
              <li><strong>Fiber</strong> — 5g+ per serving good for digestion.</li>
              <li><strong>Saturated fat</strong> — under 5g per serving good for heart.</li>
              <li><strong>"Whole grain" first ingredient</strong> = real whole grain.</li>
              <li><strong>Protein</strong> — 10g+ per serving keeps you full.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch out for tricks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Made with whole grains" — could be 2% whole grain.</li>
              <li>"Reduced fat" — usually has more sugar to compensate.</li>
              <li>"All natural" — meaningless legally.</li>
              <li>"Heart healthy" — sometimes paid certification, weak meaning.</li>
              <li>"No added sugar" — but uses fruit juice concentrate (still sugar).</li>
              <li>Serving size — 1 small bag often = 2-3 servings. Multiply!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for diabetes</h3>
            <p className="text-sm text-muted-foreground">Diabetic? Yuka + Fooducate both have specific diabetic filters. Show added sugar grams clearly. Some show glycemic index. Helps you avoid surprise carbs in &quot;healthy&quot; products.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
