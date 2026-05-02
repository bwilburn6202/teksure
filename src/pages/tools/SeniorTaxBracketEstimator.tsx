import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorTaxBracketEstimator() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax Bracket Estimator — Senior Guide" description="Estimate your tax bracket online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax Bracket Estimator</h1>
          <p className="text-lg text-muted-foreground">Plan your retirement tax picture.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. IRS withholding tool</h2><p>Free at irs.gov. Estimate withholding to avoid surprises.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. SmartAsset</h2><p>smartasset.com. Free tax bracket estimator.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. NerdWallet</h2><p>Free. Tax bracket plus deduction guides.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Roth conversion</h2><p>Tax software shows if Roth conversion saves long term.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. RMDs</h2><p>Required Minimum Distributions kick in at 73. Plan tax bracket impact.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. State tax</h2><p>Don't forget state. Tools at your state's revenue site help.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>For complex retirement tax — talk to a CPA or fee-only financial advisor.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
