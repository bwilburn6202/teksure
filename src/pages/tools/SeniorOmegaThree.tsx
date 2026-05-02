import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorOmegaThree() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Omega-3 for Seniors — TekSure" description="Fish oil for seniors — heart, joint, brain benefits explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Omega-3 for Seniors</h1>
          <p className="text-lg text-muted-foreground">Heart. Joints. Brain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily dose</h2><p>1-2 grams EPA+DHA. Most fish oil capsules. Read label.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best brands</h2><p>Nordic Naturals, Carlson, Costco Kirkland. USP-verified.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Food sources</h2><p>Salmon, mackerel, sardines, anchovies. 2x weekly = supplement equivalent.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vegan option</h2><p>Algae oil. Same benefits without fish.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Lower triglycerides</li><li>Less joint pain</li><li>Better mood</li><li>Reduced macular degeneration</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip flaxseed</h2><p>Plant omega-3s convert poorly. Need fish or algae for benefits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $0.10/day fish oil supplement. Many doctor-recommended.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
