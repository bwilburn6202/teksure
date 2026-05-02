import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorPowerOutage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power Outage Tech for Seniors — TekSure" description="Generators, battery backups, smart UPS for seniors during blackouts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power Outage Tech</h1>
          <p className="text-lg text-muted-foreground">Stay connected during blackouts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Goal Zero Yeti</h2><p>$200-$2,000. Solar generator. Charges phone, runs CPAP machine.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jackery battery</h2><p>$300-$1,500. Same idea. Different brand. Both work.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">UPS for Wi-Fi</h2><p>$80. APC backup. Keeps internet running 30-60 minutes during outage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Whole-house generator</h2><p>$5,000-$15,000. Auto-starts when power fails. Generac most common.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medical priority</h2><p>If on oxygen, medical devices: tell utility company. Priority for power restoration.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap option</h2><p>Power banks + flashlights ($50 total). Plenty for 4-hour outages.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ice in freezer 24-48 hours. Move to fridge during outage.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
