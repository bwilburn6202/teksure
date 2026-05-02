import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function IBondsForSeniorSavers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="I Bonds for Senior Savers | TekSure" description="US Treasury I Bonds inflation protection for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">I Bonds</h1>
          <p className="text-lg text-muted-foreground">Senior inflation protection.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What are I Bonds</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>US Treasury bonds.</li><li>Inflation-adjusted.</li><li>Senior safe + inflation hedge.</li><li>$10k/year per person limit.</li><li>1-yr lock.</li><li>30-yr maturity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Buy at TreasuryDirect</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>treasurydirect.gov.</li><li>Free.</li><li>Senior buy electronically.</li><li>Tax refund $5k extra paper bonds.</li><li>Trusted government.</li><li>Direct.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pros</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Federal tax-deferred.</li><li>State tax-free.</li><li>Senior stable income.</li><li>Inflation-beating.</li><li>FDIC-equivalent safe.</li><li>Worth portion.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior cons</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10k limit per year.</li><li>1-year lock no withdrawals.</li><li>5-year early withdrawal penalty 3 months interest.</li><li>Senior longer-term.</li><li>Plan ahead.</li><li>Not emergency fund.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Couples</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10k each = $20k/yr.</li><li>Plus $5k tax refund each.</li><li>Senior $30k/year possible.</li><li>Worth maxing.</li><li>Beneficiary set.</li><li>Estate planning.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Compare HYSA</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Marcus 4-5% APY.</li><li>I Bonds variable.</li><li>Senior diversify.</li><li>Mix both.</li><li>HYSA accessible.</li><li>I Bonds locked.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10k/yr I Bonds = senior inflation hedge</h3><p className="text-sm text-muted-foreground">Senior buy $10k/year I Bonds at treasurydirect.gov for inflation-protected savings. Couples = $20k. Plus $5k each tax refund paper. Federal tax-deferred + state tax-free. 1-yr lock — not emergency fund. Mix with HYSA for both. Worth maxing.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
