import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from 'lucide-react';

export default function SeniorCruiseTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Cruise Tips — TekSure" description="Senior cruise advice — accessible cabins, single supplements, ports." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ship className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Cruise Tips</h1>
          <p className="text-lg text-muted-foreground">Cruise smarter.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Accessible cabins</h2><p>Wider doors, roll-in shower. Book early. Limited number.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Singles cruises</h2><p>Many lines have no single supplement weeks. Saves 50-100% extra.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior cruise lines</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Holland America (older crowd)</li><li>Princess (relaxed)</li><li>Viking (no kids)</li><li>Oceania (mature)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel insurance</h2><p>ALWAYS for cruise. Medical evac at sea $50,000+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mid-ship cabin</h2><p>Less seasickness. Quieter. Better for seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Port days</h2><p>Skip excursions sometimes. Quiet ship day = relaxing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cruise Critic forums for honest reviews of senior-friendly ships.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
