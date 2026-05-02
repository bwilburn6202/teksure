import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorHomeMods() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aging-in-Place Home Mods for Seniors — TekSure" description="Make home senior-safe — ramps, stair lifts, smart home modifications." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Modifications</h1>
          <p className="text-lg text-muted-foreground">Stay home longer. Safer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stair lift</h2><p>$3,000-$15,000. Bruno, Stannah brands. Some Medicare Advantage covers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wheelchair ramps</h2><p>$1,500-$5,000. Permanent. Or $200-$500 portable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Door widening</h2><p>$500-$1,000 per door. Medicaid waivers may cover for wheelchair.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bathroom remodel</h2><p>$5,000-$25,000. Walk-in shower, grab bars, comfort-height toilet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VA Aid &amp; Attendance</h2><p>Up to $2,300/month for veterans. Helps pay for modifications.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USDA grants</h2><p>Rural seniors. $7,500 grant for safety modifications.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Free home assessment from local Area Agency on Aging.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
