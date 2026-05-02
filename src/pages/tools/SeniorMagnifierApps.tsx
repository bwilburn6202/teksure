import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorMagnifierApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magnifier Apps for Seniors — TekSure" description="Free magnifier apps for seniors — read fine print, expiration dates, menus." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magnifier Apps</h1>
          <p className="text-lg text-muted-foreground">Read tiny print. Anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone Magnifier</h2><p>FREE built in. Triple-click side button. Light + 5x zoom.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Magnifier</h2><p>Settings → Accessibility → Magnification → On.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magnifying Glass+ (iOS)</h2><p>FREE. Even more zoom. Built-in light.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Pill bottle directions</li><li>Restaurant menus</li><li>Expiration dates</li><li>Sewing</li><li>Splinter removal</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak Selection</h2><p>Highlight zoomed text → Speak. Phone reads it aloud.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap dedicated magnifier</h2><p>$15-$30 USB-rechargeable LED magnifiers also work great.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add Magnifier shortcut to Control Center. Open it from any screen.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
