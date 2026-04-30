import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart } from 'lucide-react';

export default function EmpowerPersonalCapitalForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Empower (Personal Capital) for Seniors | TekSure" description="Free retirement planning + investment tracking app for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PieChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Empower</h1>
          <p className="text-lg text-muted-foreground">Free senior retirement tools.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free wealth tracking app.</li><li>Was Personal Capital.</li><li>Connect all accounts.</li><li>Net worth, retirement plan.</li><li>Investment fee analysis.</li><li>100% free senior tools.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Empower.com.</li><li>Free signup.</li><li>Connect bank, brokerage, 401k.</li><li>Plaid secured.</li><li>30 min total.</li><li>Auto-pulls daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Retirement Planner</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Project Monte Carlo simulations.</li><li>Withdraw rate scenarios.</li><li>Social Security input.</li><li>Spending plan.</li><li>Confidence score.</li><li>Senior reassurance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fee Analyzer</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reveals 401k hidden fees.</li><li>Many seniors paying 1%+.</li><li>$10,000+ lost over decades.</li><li>Switch to low-cost funds.</li><li>Senior eye-opener.</li><li>Free analysis.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100k+ accounts get sales calls.</li><li>Wealth management pitch.</li><li>You can decline.</li><li>Free tools forever.</li><li>Don&apos;t feel pressured.</li><li>Senior boundary.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Run retirement planner monthly.</li><li>Check fees yearly.</li><li>Track net worth.</li><li>Decline calls firmly.</li><li>Use as research tool.</li><li>Fiduciary advisors better.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free retirement modeling = best senior tool</h3><p className="text-sm text-muted-foreground">Empower&apos;s free Retirement Planner is best free senior tool to answer &quot;will I run out of money?&quot; Monte Carlo simulations across 1000s of scenarios. Confidence score. Plus fee analyzer reveals expensive 401k fees. Decline sales calls — keep free tools.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
