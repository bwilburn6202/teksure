import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function SeniorOneHandedKeyboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="One-Handed Keyboards for Seniors — TekSure" description="One-handed phone typing for seniors — iPhone and Android settings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">One-Handed Typing</h1>
          <p className="text-lg text-muted-foreground">Easier for shaky hands or limited mobility.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone</h2><p>Long-press emoji icon on keyboard → tap left or right keyboard layout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Gboard</h2><p>Long-press space → choose one-handed mode.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">After stroke</h2><p>One-handed mode helps seniors recovering from stroke. Slower but steady.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice typing</h2><p>Even faster. Tap microphone instead of typing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stylus</h2><p>$10 cheap stylus helps shaky fingers. Apple Pencil works on iPad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Switch Control</h2><p>iPhone: Settings → Accessibility → Switch Control. Type with single button or head movement.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Combine voice + one-handed for fastest results when injured.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
