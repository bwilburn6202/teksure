import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorPlantSensors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plant Sensors for Seniors — TekSure" description="Soil moisture sensors, plant care apps for senior gardeners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant Sensors</h1>
          <p className="text-lg text-muted-foreground">Tech for green thumbs.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Xiaomi Mi Plant</h2><p>$30. Stick in soil. App tells when to water.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sustee</h2><p>$15 each. No batteries. Color shows if water needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap Sticks</h2><p>$10 each. 4-in-1: moisture, light, pH, temp.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Easy answer to &ldquo;is it time to water?&rdquo; Saves plants from over/underwatering.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Self-watering pots</h2><p>$30. Reservoir lasts 2-4 weeks. Travel-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Greenhouse</h2><p>$200 small greenhouse. Year-round growing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sustee sticks $15. No batteries. Foolproof for seniors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
