import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Frame } from 'lucide-react';

export default function SeniorDigitalFrames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Photo Frames for Seniors — TekSure" description="Best digital frames for seniors — Aura, Skylight, Nixplay compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Frame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Photo Frames</h1>
          <p className="text-lg text-muted-foreground">Family photos appear automatically.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aura Carver</h2><p>$179. Top rated. Family texts photos straight to the frame.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skylight Frame</h2><p>$159. Email photos to your frame. Easy for non-tech relatives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nixplay Touch</h2><p>$199. Touchscreen. Stream from Google Photos and Facebook.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Connect Wi-Fi. Family scans QR code with phone — they can send photos forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best gift</h2><p>Pre-load 100 family photos before gifting. Tears of joy on Christmas guaranteed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Aura and Skylight require approval before showing photos. Nothing surprise.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Place near coffee maker or favorite chair — wherever you sit daily.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
