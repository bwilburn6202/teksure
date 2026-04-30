import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlaneTakeoff } from 'lucide-react';

export default function AirHelpForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirHelp Flight Compensation for Seniors | TekSure" description="Get compensation for delayed flights. Senior AirHelp guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlaneTakeoff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirHelp</h1>
          <p className="text-lg text-muted-foreground">Flight delay compensation.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Files claims for you.</li><li>Delays + cancellations.</li><li>EU + some US flights.</li><li>$220-$680 typical.</li><li>30% commission.</li><li>No win = no fee.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">EU rights</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>EU 261 regulation.</li><li>3+ hour delay = compensation.</li><li>Senior knew rights.</li><li>Claim 3 years back.</li><li>Free or via AirHelp.</li><li>EU airline + delay key.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DIY claim</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Email airline directly.</li><li>Cite EU 261.</li><li>Save 30% commission.</li><li>Senior more work.</li><li>Same compensation.</li><li>Free if patient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DOT US rules</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2024 new rules.</li><li>Cash refund mandatory.</li><li>If cancelled or significant delay.</li><li>Senior knows rights.</li><li>DOT.gov.</li><li>File complaint.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$300 per trip.</li><li>Covers cancel + delays.</li><li>Senior worth older travel.</li><li>Pre-existing waiver.</li><li>Trip cost dependent.</li><li>Read carefully.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save boarding pass.</li><li>Document delay.</li><li>Photo gate display.</li><li>Senior evidence.</li><li>File claim 3 yrs back.</li><li>Worth pursuing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$220+ EU delay claim = senior worth it</h3><p className="text-sm text-muted-foreground">Senior 3+ hour EU flight delays = $220-$680 compensation. AirHelp files (30% fee) or DIY free email airline cite EU 261. New US 2024 DOT rules force cash refunds. Save boarding pass for proof. Don&apos;t let airline keep your money.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
