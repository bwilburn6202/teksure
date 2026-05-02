import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorTabletAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tablet Accessibility for Seniors — TekSure" description="Make iPad and Android tablets easier — bigger text, voice, screen readers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tablet Accessibility</h1>
          <p className="text-lg text-muted-foreground">Settings that change everything.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big text</h2><p>iPad: Settings → Accessibility → Display &amp; Text → Larger Text → max.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bold text</h2><p>Bolder text easier to read. Same menu.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Increase contrast</h2><p>iPad: Accessibility → Increase Contrast. Better visibility.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak Selection</h2><p>Highlight any text. Tap Speak. iPad reads it aloud.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Display Zoom</h2><p>Settings → Display → Zoomed. Everything bigger.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VoiceOver</h2><p>Full screen reader. Steeper learning curve. Worth it for low vision.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Triple-click side button → Magnifier. Instant magnifying glass.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
