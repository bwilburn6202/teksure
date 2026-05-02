import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SeniorFlashlightApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Flashlights and Lights for Seniors — TekSure" description="Best flashlights for seniors — emergency lights, motion sensor lights." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Flashlights for Seniors</h1>
          <p className="text-lg text-muted-foreground">Light when you need it.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone flashlight</h2><p>FREE. Most powerful flashlight you own. iPhone Control Center, swipe down.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Streamlight</h2><p>$30. Most popular real flashlight. Bright, durable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hand-crank flashlight</h2><p>$25. No batteries. Power outage-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Motion lights</h2><p>$30 for 4-pack. Stick on. Dark hallway lights up automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bedside lamp with USB</h2><p>$30. Charges phone overnight. Night light with timer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart bulbs auto-on</h2><p>Set to turn on at sunset. Walk into lit house.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Flashlight in every room. By bed. Kitchen. Bathroom. Emergency-ready.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
