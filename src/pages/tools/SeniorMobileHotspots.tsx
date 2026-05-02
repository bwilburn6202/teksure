import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorMobileHotspots() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Hotspots for Seniors — TekSure" description="Use phone or device as Wi-Fi for travel — senior hotspot guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Hotspots</h1>
          <p className="text-lg text-muted-foreground">Wi-Fi anywhere with cell signal.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone hotspot</h2><p>FREE on most plans. Settings → Cellular → Personal Hotspot.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verizon Jetpack</h2><p>$50-$200. Dedicated mobile hotspot. Better battery than phone hotspot.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AT&amp;T Nighthawk</h2><p>$300. Faster speeds. Heavier travelers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calyx Institute</h2><p>$500/year. Unlimited data hotspot. Best for nomads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to use</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hotel Wi-Fi too slow</li><li>Coffee shop without Wi-Fi</li><li>Road trip backup</li><li>Internet outage at home</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch data</h2><p>Streaming uses lots. 1 hour HD = 3 GB. Easy to hit limits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Library hotspots free. Borrow before buying.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
