import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions } from 'lucide-react';

export default function SeniorClosedCaptioning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Closed Captioning — Senior Guide" description="Turn on captions for TV, video, and calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Closed Captioning</h1>
          <p className="text-lg text-muted-foreground">Words on screen for clarity.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. TV captions</h2><p>Most remotes have a CC button. Or in TV settings, find Closed Captioning.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Bigger captions</h2><p>Settings, Accessibility on TV. Make text larger and brighter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Phone Live Captions</h2><p>iPhone (iOS 16+) and Android both have Live Captions. Real-time captions for any video or call.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. YouTube</h2><p>Tap the gear icon. Tap CC. English captions on every video.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Zoom captions</h2><p>Click CC in any Zoom call. Live transcript shows everyone speaking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Caption phones</h2><p>CapTel, ClearCaptions — free phones with built-in captions for hearing loss.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you have hearing loss, federal law makes Caption phones available free. Apply at clearcaptions.com.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
