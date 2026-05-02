import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SeniorShowerChairs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Shower Chairs for Seniors — TekSure" description="Shower chairs, transfer benches, grab bars — bathroom safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Shower Chairs</h1>
          <p className="text-lg text-muted-foreground">Sit down. Stay safe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drive Medical bench</h2><p>$30-$80. Adjustable height. Backless or with back.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Transfer bench</h2><p>$60-$120. Half in, half out of tub. Slide across. Best for low mobility.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>Often covered. Doctor prescription needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Handheld shower head</h2><p>$30. Required with shower chair. Easier rinsing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Bathroom is most dangerous senior fall location. Chair = huge fall reduction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walk-in shower</h2><p>$3,000-$10,000 remodel. Best long-term. Many seniors retrofit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $50 shower chair prevents $30,000 hip surgery. Worth every penny.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
