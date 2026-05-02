import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cable } from 'lucide-react';

export default function SeniorEthernetCables() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ethernet Cables for Seniors — TekSure" description="Wired internet faster than Wi-Fi — Ethernet basics for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cable className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ethernet Cables for Seniors</h1>
          <p className="text-lg text-muted-foreground">Faster than Wi-Fi.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why use Ethernet</h2><p>2-3x faster than Wi-Fi. Better for streaming and video calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cat 6 cable</h2><p>$10-$30. Plenty fast for any home internet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plug in</h2><p>Router has 3-4 Ethernet ports. Plug in TV, computer, Echo Show.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Powerline adapters</h2><p>$50. Use electrical wires for internet. No new cables to run.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USB-C to Ethernet</h2><p>$15. Plug into iPad/laptop. Faster than Wi-Fi. Worth it for video calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hide cables</h2><p>$20 cord covers. Match wall paint. Looks clean.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Smart TVs always run smoother on Ethernet vs Wi-Fi.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
