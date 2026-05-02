import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorWifiExtenders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wi-Fi Extenders for Seniors — TekSure" description="Boost weak Wi-Fi spots — TP-Link, Netgear, eero extenders for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wi-Fi Extenders</h1>
          <p className="text-lg text-muted-foreground">Fix weak signal spots.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TP-Link RE315</h2><p>$30. Cheap. Easy setup. Plug into outlet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Netgear Nighthawk</h2><p>$70. Stronger signal. Larger homes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">eero mesh node</h2><p>$80. Best for whole house. Single network.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where to place</h2><p>Halfway between router and weak spot. Same Wi-Fi name.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Press WPS button. Press WPS on router. Connected.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better solution</h2><p>Mesh router system ($150-$300) replaces extender for big homes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test signal in dead zone before buying. Make sure extender helps.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
