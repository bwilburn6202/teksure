import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function SeniorHotColdTherapy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hot/Cold Therapy for Seniors — TekSure" description="Smart heating pads, ice packs, hot/cold therapy gear for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hot/Cold Therapy</h1>
          <p className="text-lg text-muted-foreground">Old-school medicine. New-school gear.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to use HEAT</h2><p>Stiff joints. Chronic muscle pain. Apply 15-20 min.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to use COLD</h2><p>Acute injury (first 48 hrs). Swelling. Inflammation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sunbeam heating pad</h2><p>$30. King-size. Auto-shutoff for safety.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cordless heat wraps</h2><p>$60. ThermiPaq. Microwave first. No cord, no fire risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reusable ice packs</h2><p>$25. Magic Bag. Hot or cold reusable. Microwave or freezer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Safety</h2><p>Don&apos;t fall asleep on heating pad. Never apply to numb skin.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 15-on / 15-off cycle prevents burns and skin damage.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
