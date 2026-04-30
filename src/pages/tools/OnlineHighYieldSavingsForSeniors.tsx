import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function OnlineHighYieldSavingsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="High-Yield Savings for Seniors | TekSure" description="Earn 4%+ on savings. Online banks for senior cash management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">High-Yield Savings</h1>
          <p className="text-lg text-muted-foreground">Stop earning 0.01%.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why move</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Big banks pay 0.01%.</li><li>Online banks pay 4-5%.</li><li>$10k earns $400-$500/yr.</li><li>vs $1 at big bank.</li><li>FDIC-insured same.</li><li>Free money.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best banks (2026)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Marcus by Goldman Sachs.</li><li>Ally Bank.</li><li>Discover Bank.</li><li>Capital One 360.</li><li>Synchrony Bank.</li><li>Free, FDIC, online only.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apply online — 15 min.</li><li>Verify identity.</li><li>Link existing checking.</li><li>Transfer money — 1-3 days.</li><li>Earn from day one.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Keep checking elsewhere</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Use big bank for daily.</li><li>Online for emergency fund.</li><li>Move when needed.</li><li>1-3 days transfer.</li><li>Best of both.</li><li>Senior workflow.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Treasury Direct (5%+)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TreasuryDirect.gov.</li><li>I-Bonds + T-Bills.</li><li>Often higher yield.</li><li>Direct from US gov.</li><li>Senior safe.</li><li>Slightly more complex.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CDs vs HYS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HYS — variable rate.</li><li>CD — locked rate.</li><li>If rates drop, CD wins.</li><li>If rates rise, HYS wins.</li><li>Mix both.</li><li>Senior diversify.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Stop bleeding money</h3><p className="text-sm text-muted-foreground">If senior emergency fund earning 0.01% at big bank, moving to Marcus or Ally = $400+/year free money. Same FDIC protection. 15-minute online application. Senior simple. Don&apos;t leave $400/year on table. Move some today.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
