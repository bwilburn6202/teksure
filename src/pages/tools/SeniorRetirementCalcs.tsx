import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function SeniorRetirementCalcs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Calculators — Senior Guide" description="Free retirement calculators for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Calculators</h1>
          <p className="text-lg text-muted-foreground">Plan your retirement income.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP retirement calculator</h2><p>Free at aarp.org/retirement-calculator. Simple.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Vanguard nest egg</h2><p>Free at vanguard.com. Models how long savings will last.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Schwab retirement calculator</h2><p>Free. Powerful. Includes Social Security and pension.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. SSA Quick Calculator</h2><p>Free at ssa.gov/quickcalc. Estimates Social Security at any starting age.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. NewRetirement</h2><p>Most detailed. Free version useful. PlannerPlus $120/year for full features.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Try several</h2><p>Each gives slightly different numbers. Average results give you a clearer picture.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Update calculations once a year. Markets change. Spending changes. Plans should follow.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
