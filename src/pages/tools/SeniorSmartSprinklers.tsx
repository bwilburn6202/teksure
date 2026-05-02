import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorSmartSprinklers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Sprinkler Systems for Seniors — TekSure" description="Save water and money — Rachio, Rain Bird, Orbit smart sprinklers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Sprinklers</h1>
          <p className="text-lg text-muted-foreground">Skip watering when it rains.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rachio 3</h2><p>$200. Best-rated. Auto-adjusts to weather forecast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rain Bird ST8</h2><p>$160. Replaces existing controller. Easy DIY.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Orbit B-hyve</h2><p>$80. Cheapest smart option. Solid app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save 30-50% water</h2><p>Studies show smart sprinklers save $100-$300/year on water bills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Water utility rebate</h2><p>Many cities give $50-$200 rebate. Check before buying.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Alexa, water front yard 10 minutes.&rdquo; Easy adjustments.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Schedule watering pre-dawn (5 AM). Less evaporation.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
