import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorComposting2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Easy Composting for Seniors — TekSure" description="Senior-friendly composting — countertop, tumbler, electric units." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Easy Composting</h1>
          <p className="text-lg text-muted-foreground">Free fertilizer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Countertop bin</h2><p>$25. Holds scraps before adding to compost. Charcoal filter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tumbler</h2><p>$80. Spin once a week. Compost in 6 weeks. No turning fork.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lomi</h2><p>$500. Plug in electric. Food scraps to compost overnight. Senior-easy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worm bin</h2><p>$80. Indoor red worms. No smell. Nutrient-rich.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">City pickup</h2><p>Many cities have free compost pickup. Check with city.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip these</h2><p>Meat, dairy, oily food. Attracts pests.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tumbler is best senior compost. No effort. Steady supply.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
