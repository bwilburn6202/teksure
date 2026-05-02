import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterDispensers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Dispensers for Seniors — TekSure" description="Hot/cold water dispensers — Avalon, Primo, ice makers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Dispensers</h1>
          <p className="text-lg text-muted-foreground">Cold water + tea hot. Ready always.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avalon Bottom Loading</h2><p>$200. 5-gallon below. Easier than top-loading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Primo Bottom Loading</h2><p>$200. Heating + cooling. Hot tea in seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>5-gallon jug too heavy to lift. Bottom-loading style critical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bottle delivery</h2><p>Primo, Culligan deliver new bottles, take empties. Free option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hydration</h2><p>Senior thirst signal weakens. Visible water = drink more.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Filter alternative</h2><p>$30 PUR/Brita pitcher. Cheaper. Just no temperature.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Counter water dispenser increases senior daily water intake 50%.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
