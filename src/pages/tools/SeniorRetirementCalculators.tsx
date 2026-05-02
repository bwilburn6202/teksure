import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorRetirementCalculators() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Calculators for Seniors — TekSure" description="Free retirement calculators — Vanguard, Fidelity, AARP, Social Security." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Calculators</h1>
          <p className="text-lg text-muted-foreground">Will my money last?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SSA.gov calculator</h2><p>FREE. Most accurate Social Security estimate. Uses your real earnings record.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP retirement calculator</h2><p>FREE. aarp.org/retirement. Senior-friendly inputs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vanguard retirement income</h2><p>FREE. vanguard.com. Models running out of money risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FIRECalc</h2><p>FREE. firecalc.com. Tests against 100+ years of historical market data.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">4% rule basics</h2><p>Withdraw 4% of nest egg first year. Adjust for inflation. Most plans last 30+ years.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get a fiduciary</h2><p>Look for fee-only fiduciary advisors. They legally must work in your interest.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Run calculators yearly. Adjust spending if numbers shift.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
