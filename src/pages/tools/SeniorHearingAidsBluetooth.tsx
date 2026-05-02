import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorHearingAidsBluetooth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Hearing Aids — Senior Guide" description="Use Bluetooth hearing aids with your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Hearing Aids</h1>
          <p className="text-lg text-muted-foreground">Stream calls right to your ears.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Made for iPhone</h2><p>Look for the MFi label. Pairs in Settings, Accessibility, Hearing Devices.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Audio streaming</h2><p>Phone calls and music play through your hearing aids. Like high-end headphones.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Live Listen</h2><p>iPhone becomes a microphone. Set on table at restaurants — voices come through clearly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Adjust volume</h2><p>Triple-click side button. Adjust hearing aid volume from the iPhone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. OTC options</h2><p>Jabra Enhance, Eargo, Sony. $200-1500 — much cheaper than traditional hearing aids.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Test before buying</h2><p>Most have a 30-day return. Try them in noisy places, not just quiet stores.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple AirPods Pro can act as basic hearing aids since iOS 18 — free if you already own them.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
