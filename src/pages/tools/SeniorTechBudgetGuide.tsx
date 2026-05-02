import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorTechBudgetGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tech Budget Guide | TekSure" description="Annual senior tech budget breakdown. Save without sacrificing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tech Budget</h1>
          <p className="text-lg text-muted-foreground">Annual planning.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone $300-$1,200</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone $400-$1,200.</li><li>Android $200-$1,000.</li><li>Replace 4-5 years.</li><li>$60-$240/year average.</li><li>Senior most-used device.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cell plan $180-$1,000/yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mint Mobile $180.</li><li>Visible $300.</li><li>Verizon $1,000+.</li><li>Senior huge variation.</li><li>Switch save lots.</li><li>Same coverage often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cloud $36/yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud 200GB $36.</li><li>Or Google One.</li><li>Senior backup essential.</li><li>Don&apos;t skip.</li><li>Photos preserved.</li><li>Worth every penny.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Streaming $300/yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Netflix $180.</li><li>Hulu $90.</li><li>Or YouTube TV $1000.</li><li>Senior pick wisely.</li><li>Cancel unused.</li><li>Rotate season.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Subscriptions audit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rocket Money tracks.</li><li>Cancel unused.</li><li>Senior easy waste.</li><li>$50/month leaks common.</li><li>$600/year saved.</li><li>Annual review.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Total realistic</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bare minimum $500/yr.</li><li>Average $1,500-$2,500.</li><li>Premium $5,000+.</li><li>Senior choose level.</li><li>Cut where unused.</li><li>Spend on used.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$1,000/year = senior solid tech</h3><p className="text-sm text-muted-foreground">Senior $1,000/year tech budget = solid: $200 phone amortized, $300 cell plan (Visible), $36 iCloud, $300 streaming, $164 misc. Cut Verizon to Mint = $600 saved. Audit subscriptions yearly. Don&apos;t skimp on backup ($36 iCloud). Worth every penny.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
