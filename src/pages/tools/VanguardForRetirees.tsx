import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart } from 'lucide-react';

export default function VanguardForRetirees() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vanguard for Retirees | TekSure" description="Vanguard low-cost investing for senior retirees. Index fund pioneer reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PieChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vanguard</h1>
          <p className="text-lg text-muted-foreground">Index fund pioneer. Lowest fees.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Vanguard?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pioneered index funds — Jack Bogle&apos;s creation.</li>
              <li>Lowest expense ratios in industry.</li>
              <li>Owned by its fund shareholders.</li>
              <li>$0 stock commissions.</li>
              <li>Excellent target-date retirement funds.</li>
              <li>Best for buy-and-hold investors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Vanguard funds for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vanguard Total Stock Market ETF (VTI).</li>
              <li>Vanguard Total International Stock (VXUS).</li>
              <li>Vanguard Total Bond Market (BND).</li>
              <li>Wellesley Income (VWINX) — conservative income.</li>
              <li>Wellington (VWELX) — balanced 60/40.</li>
              <li>Target Retirement Income — for current retirees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vanguard Personal Advisor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Human advisor for $50K+ in assets.</li>
              <li>0.30% annual fee (very low for human advisor).</li>
              <li>Personalized retirement planning.</li>
              <li>Help with RMDs, taxes, withdrawals.</li>
              <li>Hybrid model — robo + human.</li>
              <li>Worth the fee for $250K+ accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Account aggregation — see total net worth.</li>
              <li>Performance tracking + analytics.</li>
              <li>Required Minimum Distributions tools.</li>
              <li>Beneficiary management.</li>
              <li>Tax document downloads.</li>
              <li>Cash management features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vanguard vs Fidelity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vanguard — slightly lower fees on funds.</li>
              <li>Fidelity — better app + customer service.</li>
              <li>Both have $0 stock commissions.</li>
              <li>Both have excellent index funds.</li>
              <li>Stick with whichever you currently use.</li>
              <li>Both fine choices for retirees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set up RMD distributions before age 73.</li>
              <li>Rebalance to more bonds as you age.</li>
              <li>Update beneficiaries after life changes.</li>
              <li>Review allocation annually.</li>
              <li>Consider partial Roth conversions.</li>
              <li>Talk to advisor about tax-efficient withdrawal order.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stick with simple at retirement</h3>
            <p className="text-sm text-muted-foreground">In retirement, complexity hurts. Many financial advisors recommend simplifying to 2–3 Vanguard index funds: total stock market (VTI), total bond market (BND), and possibly international stock (VXUS). Set the allocation, rebalance once a year, take RMDs as needed. Decades of research show this beats most active investors. Vanguard makes it easiest.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
