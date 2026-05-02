import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorDenturesCare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Denture Care for Seniors — TekSure" description="Dentures cleaning, adhesives, repairs for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Denture Care</h1>
          <p className="text-lg text-muted-foreground">Comfortable. Confident.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily cleaning</h2><p>Rinse + soft brush after every meal. Prevents staining.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Soak nightly</h2><p>Polident or Efferdent tablets. Removes stains and bacteria.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best adhesive</h2><p>Sea-Bond strips: clean, no goop. Or Fixodent paste.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Implant-supported</h2><p>$3,000-$30,000. Permanent. No adhesive needed. Game-changer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual check</h2><p>Dentist refits dentures yearly. Mouth changes shape over time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dental schools</h2><p>50-70% off dentures. Professor-supervised work.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Replace dentures every 5-7 years. Old ones cause infections.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
