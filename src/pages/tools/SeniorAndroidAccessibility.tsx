import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorAndroidAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Accessibility for Seniors — TekSure" description="Android accessibility features for seniors — Magnifier, TalkBack, Live Caption." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Accessibility</h1>
          <p className="text-lg text-muted-foreground">Built-in tools for seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big text</h2><p>Settings → Display → Font Size. Crank to maximum.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Display size</h2><p>Same menu. Makes ALL items bigger, not just text.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magnification</h2><p>Settings → Accessibility → Magnification. Triple-tap to zoom anywhere.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TalkBack</h2><p>Full screen reader for low or no vision. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Caption</h2><p>Pixel and Samsung. Auto-captions any video, call, or podcast — even offline.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sound Amplifier</h2><p>Free Google app. Earbuds + phone act like hearing aid in noisy rooms.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Settings → Accessibility shortcut. Add a button at the bottom of the screen for one-tap zoom.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
