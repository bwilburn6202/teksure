import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorInsulinPumps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Insulin Pumps for Seniors — TekSure" description="Insulin pump options for seniors — Omnipod, Tandem, Medtronic." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Insulin Pumps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier than 4-6 daily shots.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Omnipod 5</h2><p>Tubeless. Patch on skin. Best for seniors. Talks to Dexcom CGM.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tandem t:slim X2</h2><p>Smartphone-style. Auto-adjusts insulin. Touch screen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medtronic 780G</h2><p>Hybrid closed-loop. Auto-corrects. Most automated.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>Pumps + supplies covered with prescription. Most diabetics qualify.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lower A1C</h2><p>Studies show pumps lower A1C 0.5-1.0% vs shots. Big improvement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Training included</h2><p>Mfr training. Doctor support. Many seniors love after 1 month.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Omnipod is most senior-friendly. No tubing to manage.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
