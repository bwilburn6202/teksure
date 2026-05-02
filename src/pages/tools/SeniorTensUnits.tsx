import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorTensUnits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TENS Units for Seniors — TekSure" description="TENS units for senior pain relief — chronic pain without pills." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TENS Units for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pain relief without pills.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>Small electric pulses through skin. Blocks pain signals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Chronic back pain</li><li>Arthritis pain</li><li>Sciatica</li><li>Muscle soreness</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Omron PM3030</h2><p>$60. Most popular. Real medical-grade.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iReliev TENS Wand</h2><p>$50. Wireless. No tangled wires.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to AVOID</h2><p>Pacemakers. Pregnancy. Open wounds. Seizure history. Always ask doctor first.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance</h2><p>FSA/HSA covers TENS units. Some Medicare Advantage covers prescription versions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Start at lowest level. Increase only if needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
