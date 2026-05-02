import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterLeakSensors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Leak Sensors for Seniors — TekSure" description="Catch leaks before they flood — best smart water sensors for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Leak Sensors</h1>
          <p className="text-lg text-muted-foreground">Catch leaks before they flood.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors need them</h2><p>Burst pipes can cause $10,000+ damage. Sensors text you immediately.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YoLink Sensors</h2><p>$30 each. Long range. App alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Govee Wi-Fi sensors</h2><p>3-pack for $40. Loud audible alarm.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where to place</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Under the kitchen sink</li><li>Under bathroom sinks</li><li>Behind the toilet</li><li>By the water heater</li><li>Behind washing machine</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart shutoff</h2><p>Moen Flo or Phyn install on the main pipe. Auto-shut-off when leak detected. ~$500.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance discount</h2><p>Many home insurers give 5-10% discount with smart leak detection.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A $40 sensor saved one senior $25,000 in flood damage. Cheapest insurance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
