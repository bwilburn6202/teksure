import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorMouthGuard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mouth Guards for Seniors — TekSure" description="Night guards for teeth grinding — JS Dental, drug store, custom." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mouth Guards for Seniors</h1>
          <p className="text-lg text-muted-foreground">Stop teeth grinding.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors need</h2><p>Stress + medications cause grinding. Wears down teeth. $2,000+ damage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drug store</h2><p>$30. Boil-and-bite. Plenty for mild grinding.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">JS Dental Lab</h2><p>$160 mail-order. Better fit. Take impressions at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dentist custom</h2><p>$300-$700. Best fit. Lasts 5+ years.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance</h2><p>Some dental insurance covers night guards. Always ask.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Care</h2><p>Rinse daily. Brush weekly. Replace every 3-5 years.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try drug store first. Upgrade if needs more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
