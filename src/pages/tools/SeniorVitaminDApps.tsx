import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SeniorVitaminDApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vitamin D for Seniors — TekSure" description="Most seniors deficient — Vitamin D, sunlight, supplements." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vitamin D for Seniors</h1>
          <p className="text-lg text-muted-foreground">Critical for bone, immune, mood.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Most seniors low</h2><p>Aging skin makes 50% less Vitamin D from sun. Most need supplement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily dose</h2><p>800-1,000 IU. More if blood test shows deficiency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test annually</h2><p>Medicare covers. Aim for 30-50 ng/mL.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sun helps</h2><p>15 minutes daily, hands and arms exposed. Supplement if can&apos;t.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Food sources</h2><p>Salmon, sardines, fortified milk. Hard to get enough from food alone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><p>Stronger bones. Better immune. Improved mood. Reduces falls.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $10/year supplement covers most senior Vitamin D needs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
