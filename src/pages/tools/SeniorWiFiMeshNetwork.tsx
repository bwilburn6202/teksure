import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorWiFiMeshNetwork() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mesh Wi-Fi for Seniors — Senior Guide" description="Better Wi-Fi all over the house." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mesh Wi-Fi</h1>
          <p className="text-lg text-muted-foreground">Strong Wi-Fi everywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>Multiple small routers spread Wi-Fi throughout the house. No more dead zones.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Eero</h2><p>$200-400 for 3-pack. Owned by Amazon. Easiest setup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Google Nest Wifi</h2><p>$200-300. Works with Google Assistant.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. TP-Link Deco</h2><p>$150-250. Best value. App is simple.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Setup</h2><p>App walks you through. 15 minutes. No tech background needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Replace ISP router</h2><p>Replaces Comcast/Verizon router. Save $10/month rental fee.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>House over 2,000 sq ft? Mesh is worth it. Single router won't cover.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
