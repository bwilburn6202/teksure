import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function SeniorTaxStrategiesApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax Strategies for Senior Retirees — TekSure" description="Roth conversions, qualified charitable distributions, tax-bracket management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax Strategies for Retirees</h1>
          <p className="text-lg text-muted-foreground">Pay less in retirement.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bracket management</h2><p>Withdraw just enough each year to stay in low tax bracket. Avoid jumping to next bracket.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roth conversions</h2><p>Convert IRA to Roth in low-income years. Pay tax now, no tax later.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">QCDs</h2><p>Qualified Charitable Distribution. Donate up to $105,000 from IRA. No taxable income.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>AARP Tax-Aide</li><li>VITA volunteers</li><li>State SHIP advisors</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tax software</h2><p>FreeTaxUSA ($0 federal). TurboTax Free for simple returns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Move state</h2><p>9 states have no income tax. Florida, Texas, Tennessee, Nevada, etc.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Talk to a CPA in November. Tax-loss harvesting deadlines are December 31.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
