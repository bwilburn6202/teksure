import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorSatellitePhones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Satellite Communication for Seniors — TekSure" description="iPhone Satellite SOS, Garmin inReach for seniors in remote areas." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Satellite SOS</h1>
          <p className="text-lg text-muted-foreground">When no cell signal.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone 14+ Satellite</h2><p>FREE 2 years. SOS via satellite. No cell signal needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Garmin inReach Mini 2</h2><p>$400 + $15-$65/month. Two-way satellite messaging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SPOT Gen4</h2><p>$150 + $15/month. SOS button. Emergency rescue.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When you need</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hiking</li><li>Boating</li><li>Rural cabins</li><li>Long drives in remote areas</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SOS only</h2><p>iPhone 14+ free SOS only. No regular messaging via satellite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Practice once</h2><p>Knowing how to use satellite SOS in a real emergency = critical.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: iPhone 14+ free 2-year satellite SOS. Worth upgrading for travel.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
