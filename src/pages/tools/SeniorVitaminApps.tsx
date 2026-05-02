import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorVitaminApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vitamin Apps for Seniors — TekSure" description="Track vitamins, supplements, drug interactions for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vitamin &amp; Supplement Apps</h1>
          <p className="text-lg text-muted-foreground">Track what you take. Avoid interactions.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drugs.com Interaction Checker</h2><p>FREE. Type all your meds + vitamins. Shows dangerous combos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medisafe</h2><p>FREE. Add vitamins as &ldquo;medication.&rdquo; Reminders + tracking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Care/of</h2><p>$20+/month. Personalized vitamin packs by mail. Quiz-based recommendations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior tip</h2><p>Bring all bottles to next doctor visit. Pharmacist reviews for free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common dangerous combos</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Warfarin + vitamin K</li><li>St John&apos;s Wort + many drugs</li><li>Calcium + thyroid meds</li><li>Grapefruit + statins</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip useless</h2><p>Most seniors don&apos;t need a multivitamin if eating well. Save money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take vitamins with food. Better absorption + less stomach upset.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
