import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorWalkerCanes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Walkers and Canes for Seniors — TekSure" description="Modern walkers, canes — rollators, smart canes, Medicare-covered options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Walkers &amp; Canes</h1>
          <p className="text-lg text-muted-foreground">Stay mobile. Stay safe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rollator vs walker</h2><p>Rollator: 4 wheels, brakes, seat. Walker: 2 wheels or feet, no seat.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best rollator</h2><p>Drive Medical Nitro: $200. Light, foldable, comfortable seat.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart canes</h2><p>$80+. LED light. Some have GPS or fall detection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Quad cane</h2><p>$30. 4 feet. More stability than single cane.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>Covered with doctor prescription. Part B covers 80%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Right size</h2><p>Handle at wrist height when arm hanging. Shorter = bad posture.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try one before buying. Senior centers often loan equipment.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
