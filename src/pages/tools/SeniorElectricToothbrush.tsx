import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorElectricToothbrush() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Electric Toothbrushes for Seniors — TekSure" description="Best electric toothbrushes for seniors — Oral-B, Sonicare, Quip." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Electric Toothbrushes</h1>
          <p className="text-lg text-muted-foreground">Better cleaning. Easier on hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sonicare 4100</h2><p>$50. Best basic. 2-minute timer. Tells you when to switch areas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Oral-B Pro 1000</h2><p>$50. Round head. Pressure sensor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Quip</h2><p>$45 + $5/3 months for new heads. Subscription convenience.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For arthritis</h2><p>Big handle. Sonicare has comfortable grip. Less wrist strain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><p>Studies show 21% less plaque vs manual. Important for seniors with gum issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Replace heads</h2><p>Every 3 months. Old bristles don&apos;t clean as well.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 2 minutes is recommended. Most people brush 45 seconds. Timer fixes that.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
