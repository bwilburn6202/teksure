import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function SeniorBikeStationary() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stationary Bikes for Seniors — TekSure" description="Senior-friendly stationary bikes — recumbent vs upright, Schwinn, Peloton." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stationary Bikes</h1>
          <p className="text-lg text-muted-foreground">Low-impact cardio.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recumbent best for seniors</h2><p>Easier on back. More comfortable. Schwinn 230 $400.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Schwinn 130 upright</h2><p>$400. Light. Affordable. Folds for storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Peloton Bike</h2><p>$1,445 + $44/month. Many seniors love. Class community.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy on joints</h2><p>Low impact. Good for arthritis. Heart benefits without pain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch TV setup</h2><p>Most seniors bike while watching shows. 30-60 minutes daily realistic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free programs</h2><p>SilverSneakers includes cycling at gyms. Free with Medicare Advantage.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Recumbent bike + iPad stand for shows. Hour flies by.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
