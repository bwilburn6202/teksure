import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorComposting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Composting Apps for Seniors — TekSure" description="Easy composting for seniors — Lomi, FoodCycler, basic compost guides." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Composting for Seniors</h1>
          <p className="text-lg text-muted-foreground">Reduce food waste. Free fertilizer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lomi</h2><p>$500. Plug-in. Turns food scraps to compost overnight. No smell.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FoodCycler</h2><p>$400. Same idea. Vitamix-made.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Outdoor tumbler</h2><p>$80. Simple barrel. Spin once a week. 6-week compost cycle.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Curbside pickup</h2><p>Many cities pick up compost weekly. Some free. Often $5-$10/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to compost</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Vegetable scraps</li><li>Coffee grounds</li><li>Eggshells</li><li>Paper coffee filters</li><li>Leaves and yard waste</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip these</h2><p>Meat, dairy, oily foods. Attracts pests.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A 10-gallon bin with worms makes great soil with no smell.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
