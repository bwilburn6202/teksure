import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function SeniorKitchenScales() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Kitchen Scales for Seniors — TekSure" description="Smart scales for diet, baking, weight loss — Etekcity, Greater Goods." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Kitchen Scales</h1>
          <p className="text-lg text-muted-foreground">Better baking. Healthier portions.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Etekcity Smart</h2><p>$30. Bluetooth to phone. Auto-tracks calories.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Greater Goods</h2><p>$15. Simple. Reliable. No app needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diabetic portions</h2><p>Weighing food = better blood sugar control. 1 cup of cooked rice = 200 grams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heart-healthy</h2><p>Track sodium, fat, sugar by exact amount, not guesses.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recipe accuracy</h2><p>Baking succeeds with weight measurements. Cups vary; grams don&apos;t.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Digital readout</h2><p>Look for scales with backlit, large displays. Easier to read.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pair with MyFitnessPal app. Auto-imports nutrition for tracked food.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
