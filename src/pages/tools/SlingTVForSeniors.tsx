import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SlingTVForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sling TV for Seniors | TekSure" description="Cheaper cable alternative. Sling TV guide for senior cord-cutters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sling TV</h1>
          <p className="text-lg text-muted-foreground">$40 alternative cable.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$40/month base.</li><li>Cable alternative.</li><li>Pick Orange or Blue.</li><li>30-50 channels.</li><li>Cheaper than YouTube TV.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Orange vs Blue</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Orange — ESPN, Disney.</li><li>Blue — Fox, NFL Network.</li><li>Both — $55/month.</li><li>Mix &amp; match.</li><li>Senior tailored.</li><li>News on both.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DVR</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>50 hours free.</li><li>$5 for unlimited.</li><li>Record favorites.</li><li>Watch later.</li><li>Senior convenience.</li><li>Skip commercials.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Limited locals.</li><li>Use antenna for ABC, NBC, CBS.</li><li>$30 Mohu antenna.</li><li>Combine with Sling.</li><li>Senior workaround.</li><li>Good local news.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free 3-day trial.</li><li>Try before subscribing.</li><li>Cancel anytime.</li><li>Pause subscription option.</li><li>Senior flexibility.</li><li>$40 vs cable $200.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior senior 55+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sling has Senior plan?</li><li>$10/month — limited channels.</li><li>News + entertainment.</li><li>Senior-targeted.</li><li>Available 55+.</li><li>Best deal.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Sling Senior $10 = best deal</h3><p className="text-sm text-muted-foreground">Sling has senior 55+ plan at $10/month — major savings. Plus free antenna for local channels. Total $10 + $30 one-time = senior streaming. Or $40 base Sling for full channels. Either way much cheaper than cable. Try free trial.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
