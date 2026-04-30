import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function RetirementCalculatorsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Calculators for Seniors | TekSure" description="Will I run out of money? Free retirement calculators for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Calculators</h1>
          <p className="text-lg text-muted-foreground">Will money last?</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Empower (free)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Retirement Planner.</li><li>Monte Carlo simulations.</li><li>Confidence score.</li><li>Best free tool.</li><li>Senior peace.</li><li>Connect accounts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fidelity Retirement Score</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Fidelity tool.</li><li>Quick estimate.</li><li>Color-coded.</li><li>Don&apos;t need Fidelity account.</li><li>Senior simple.</li><li>Good first check.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FIRECalc</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free historical simulator.</li><li>Tests your plan.</li><li>1871-present data.</li><li>Senior conservative.</li><li>Worst-case scenarios.</li><li>Trusted by retirees.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">cFIREsim</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Similar to FIRECalc.</li><li>More options.</li><li>Free.</li><li>Senior detailed.</li><li>Variable spending.</li><li>Power user.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">4% rule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Withdraw 4%/yr.</li><li>$1M = $40k.</li><li>Adjusts for inflation.</li><li>Studies show 30-yr safe.</li><li>Senior rule of thumb.</li><li>Conservative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to see advisor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Calculators say uncertain.</li><li>Complex tax situation.</li><li>Estate planning.</li><li>Fee-only fiduciary.</li><li>NAPFA.org find one.</li><li>Senior worth $200/hr.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Empower = senior peace</h3><p className="text-sm text-muted-foreground">Free Empower Retirement Planner + free FIRECalc = best senior money projection. Connect accounts, see scenarios, confidence score. Most senior anxiety is unknown. These free tools answer &quot;will I run out?&quot; with data. Run yearly.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
