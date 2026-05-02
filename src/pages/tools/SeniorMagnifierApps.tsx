import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function SeniorMagnifierApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Magnifier Apps — Senior Guide" description="Use your phone as a magnifying glass." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magnifier Apps</h1>
          <p className="text-lg text-muted-foreground">Read fine print anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iPhone Magnifier</h2><p>Settings, Accessibility, Magnifier. Or open Magnifier app — built in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Android Magnifier</h2><p>Pixel and Samsung have built-in magnifier apps. Search Magnifier in Settings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Use the camera</h2><p>Even without the app, open the camera and pinch to zoom. Works at any restaurant.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Brighten</h2><p>Turn on the flashlight. Helps in dim restaurants and pharmacies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Color filters</h2><p>Some magnifiers add high-contrast colors. Helps with low vision.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Add to control center</h2><p>iPhone — Settings, Control Center. Add Magnifier so you can swipe down anywhere.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Snap a photo of fine print, then pinch zoom. Easier than holding the phone steady.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
