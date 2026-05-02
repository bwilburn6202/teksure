import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorConsumerCellular() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Consumer Cellular for Seniors — TekSure" description="AARP partner phone plans for seniors — Consumer Cellular reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Consumer Cellular</h1>
          <p className="text-lg text-muted-foreground">No contracts. AARP discount.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plans from $20/month</h2><p>Unlimited talk &amp; text + 1 GB data. No contracts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP discount</h2><p>5% off monthly bill. 30% off accessories. Free with $16/year membership.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Network</h2><p>Uses AT&amp;T and T-Mobile networks. Same coverage as the big carriers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bring your phone</h2><p>Works with most iPhone, Samsung, and Pixel phones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">US-based support</h2><p>Real people in Oregon. No long waits. Patient with senior questions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Other senior options</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>T-Mobile 55+ ($40/month)</li><li>Verizon 55+ in Florida</li><li>Mint Mobile ($15/month for unlimited)</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Most seniors only need 1-2 GB data. Don&apos;t pay for unlimited unless you stream a lot.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
