import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SeniorSmartLightsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Lights for Seniors — TekSure" description="Voice-controlled lights for seniors — Philips Hue, GE Cync, and budget picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Lights for Seniors</h1>
          <p className="text-lg text-muted-foreground">&ldquo;Alexa, turn on the kitchen light.&rdquo;</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love them</h2><p>No more fumbling for light switches. Schedule lights to turn on at sunset for safety.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Philips Hue</h2><p>Best quality. $40-$60 per bulb. Needs a hub.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GE Cync</h2><p>$15-$25 per bulb. No hub needed. Works with Alexa and Google.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wyze Bulbs</h2><p>Cheapest at $10. Easy app. Reliable for basic on/off.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Screw bulb into lamp. Open app. Tap &ldquo;Add device.&rdquo; Connect to Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>Link to Alexa or Google. Say &ldquo;Turn on bedroom lamp.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set a sunrise schedule — lights brighten gradually as you wake up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
