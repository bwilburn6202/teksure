import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorAntiInflammatoryDiet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Anti-Inflammatory Diet for Seniors — TekSure" description="Reduce inflammation — what to eat and skip for senior health." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Anti-Inflammatory Diet</h1>
          <p className="text-lg text-muted-foreground">Less pain. Better health.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eat more</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Fatty fish (salmon, sardines)</li><li>Berries (blueberries especially)</li><li>Nuts (walnuts)</li><li>Olive oil</li><li>Turmeric</li><li>Green tea</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eat less</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Sugar</li><li>Processed meats</li><li>Refined carbs</li><li>Vegetable oils (corn, soy)</li><li>Trans fats</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reduces</h2><p>Joint pain, heart disease risk, dementia risk. Many senior diseases linked to inflammation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apps</h2><p>Mediterranean diet apps. AntiInflammatory.com recipes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefit</h2><p>Less arthritis pain, less heart disease, lower diabetes risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slow change</h2><p>Don&apos;t overhaul diet. One swap weekly. Sustainable change.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add berries to morning yogurt. One easy change. Real benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
