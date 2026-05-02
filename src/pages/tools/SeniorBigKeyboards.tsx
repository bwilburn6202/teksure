import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorBigKeyboards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big-Key Keyboards for Seniors — TekSure" description="Easier-to-see keyboards for seniors — Logitech, AbleNet, big-print options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Big-Key Keyboards</h1>
          <p className="text-lg text-muted-foreground">See and find every key.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VisionBoard 2 by AbleNet</h2><p>$70. Largest keys. Yellow keys with black text. Best for low vision.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Logitech K750</h2><p>$60. Solar-powered. Big-print stickers available.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big-print stickers</h2><p>$10. Apply over your existing keyboard. Bigger letters instantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone keyboard tips</h2><p>Settings → Display → Text Size. Larger keyboard letters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tablet keyboards</h2><p>$30 for stand-alone Bluetooth keyboard. Type faster than tablet glass.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trackball mouse</h2><p>$30. Easier than regular mouse for arthritis or tremors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try a USB-C external keyboard with iPad. Senior typing 3x faster.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
