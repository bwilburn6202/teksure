import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorMassageChairs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Massage Chairs for Seniors — TekSure" description="Best massage chairs for seniors — Costco, Sharper Image, real benefits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Massage Chairs</h1>
          <p className="text-lg text-muted-foreground">Spa at home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$1,500-$10,000. Costco has good deals on Kahuna brand.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Lower back pain relief</li><li>Better sleep</li><li>Reduced stress</li><li>Improved circulation</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FSA/HSA</h2><p>If doctor prescribes for medical condition. Pre-tax savings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Try first</h2><p>Many malls have demo chairs. Try 30 minutes before buying.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheaper alternative</h2><p>Massage cushion $80. 80% benefit. Sits on regular chair.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily use</h2><p>15-30 min daily. Real chronic pain relief. Worth investment.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $80 cushion vs $5,000 chair. Try cheap version first.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
