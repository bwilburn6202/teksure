import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

export default function SeniorElectricKettles() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Electric Kettles for Seniors — TekSure" description="Best electric kettles for seniors — auto-shutoff, tip-resistant, light to lift." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Electric Kettles for Seniors</h1>
          <p className="text-lg text-muted-foreground">Faster than stovetop. Safer too.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why senior-friendly</h2><p>Auto-shutoff. No flame. Boils in 3 minutes vs 8 on stovetop.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OXO Brew Kettle</h2><p>$70. Comfortable handle. Heat-safe spout. Auto-shutoff.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hamilton Beach</h2><p>$35. Cheaper. Same auto-shutoff feature.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cosori temperature kettle</h2><p>$50. Pick exact temp for green tea, French press, etc.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tip-resistant base</h2><p>Lift kettle off — base stays put. Safer for shaky hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fewer dishes</h2><p>No pot to scrub. Just rinse the kettle.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Boil only what you need. 1-cup boils in 30 seconds — fastest tea or coffee.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
