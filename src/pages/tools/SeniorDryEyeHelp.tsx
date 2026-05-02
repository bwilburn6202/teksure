import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorDryEyeHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dry Eye Treatment for Seniors — TekSure" description="Dry eye relief for seniors — Restasis, OTC drops, warm compresses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dry Eye Help</h1>
          <p className="text-lg text-muted-foreground">Common in 50+. Treatable.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OTC drops</h2><p>Systane, Refresh, TheraTears. $10-$15. Use 4-6 times daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Preservative-free</h2><p>Single-use vials. Better for frequent use. Less irritation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Restasis or Xiidra</h2><p>Prescription. $300-$500/month. Often Medicare Part D covers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Warm compresses</h2><p>Free. 10 minutes daily. Unblocks oil glands. Real relief.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Humidifier</h2><p>$30. Bedroom humidifier reduces overnight dry eye.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Computer breaks</h2><p>20-20-20 rule. Every 20 min, look 20 feet away for 20 seconds.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Warm compresses + drops together. 1 month relief for most.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
