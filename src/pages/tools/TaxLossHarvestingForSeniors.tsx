import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

export default function TaxLossHarvestingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax Loss Harvesting for Seniors | TekSure" description="Reduce taxes via investment losses. Senior tax loss harvesting guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax Loss Harvesting</h1>
          <p className="text-lg text-muted-foreground">Turn losses into savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sell loss positions.</li><li>Offset gains.</li><li>Save taxes.</li><li>Buy similar — different fund.</li><li>30-day wash sale rule.</li><li>Senior savings.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">$3,000 deduction</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Up to $3k loss vs ordinary income.</li><li>Saves 22-37% tax.</li><li>$660-$1,110 saved.</li><li>Carry forward losses.</li><li>Senior boost.</li><li>End of year focus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roboadvisor automatic</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wealthfront, Betterment.</li><li>Auto tax loss harvesting.</li><li>0.25%/yr fee.</li><li>Senior set + forget.</li><li>Worth fee for many.</li><li>Daily monitoring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Manual</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sell underwater fund.</li><li>Buy similar — different fund.</li><li>Don&apos;t buy back 30 days.</li><li>Wash sale = no benefit.</li><li>Senior careful.</li><li>Or use roboadvisor.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Roth conversions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Convert traditional → Roth.</li><li>Pay tax now.</li><li>Tax-free later.</li><li>Lower tax brackets early retirement.</li><li>Senior advanced strategy.</li><li>CPA help.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When useful</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Taxable brokerage account.</li><li>Not IRA/401k (no benefit).</li><li>Senior bear markets.</li><li>End of year.</li><li>$3k+ losses available.</li><li>Worth doing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Save $660-$1,110 yearly</h3><p className="text-sm text-muted-foreground">Tax loss harvesting saves $660-$1,110/year for senior in middle bracket. Wealthfront/Betterment automate at 0.25% fee. Or manual end-of-year. Only taxable accounts. Combine with Roth conversions for advanced. CPA helps for complex.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
