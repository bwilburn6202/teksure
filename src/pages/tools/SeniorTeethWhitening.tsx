import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorTeethWhitening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Teeth Whitening for Seniors — TekSure" description="Whiten teeth at home — Crest Whitestrips, LED kits, dentist options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Teeth Whitening for Seniors</h1>
          <p className="text-lg text-muted-foreground">Brighter smile. Senior options.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crest 3D White</h2><p>$30. Strips. Effective. Most popular drug store option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SmileDirectClub kits</h2><p>$80-$200. LED + gel. Stronger than strips.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dentist whitening</h2><p>$300-$1,000. Strongest. Custom trays. 5-shade brighter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Sensitivity is common. Stop if teeth hurt. Use sensitive toothpaste.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crowns/fillings</h2><p>Don&apos;t whiten. Will look mismatched after.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid coffee/tea</h2><p>30 min before/after whitening. Stains undo work.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Crest Whitestrips work fine for most. Save $700 vs dentist.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
