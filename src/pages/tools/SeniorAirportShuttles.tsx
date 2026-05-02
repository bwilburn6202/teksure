import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorAirportShuttles() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airport Shuttles for Seniors — TekSure" description="Senior airport transport — Uber, SuperShuttle, taxi alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airport Shuttles</h1>
          <p className="text-lg text-muted-foreground">Get to airport stress-free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Uber/Lyft</h2><p>$30-$100 typical. Cheaper than taxi. Easy pickup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SuperShuttle</h2><p>$25-$60 shared van. Cheaper. Multiple stops.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Park-and-Fly</h2><p>$10-$15/day off-airport lots. Free shuttle.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drive yourself</h2><p>$15-$30/day airport parking. Convenient. Pricey for long trips.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family ride</h2><p>Free + valuable goodbye. Ask kids if happy to drive.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GoGoGrandparent</h2><p>Calls Uber for you. No app. Phone-based for seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Family ride to airport = goodbye + cheap + traffic-free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
