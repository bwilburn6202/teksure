import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorOnlineTaxes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Tax Filing for Seniors — TekSure" description="Free and low-cost tax filing options for seniors — IRS Free File, AARP, TurboTax." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Taxes for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free help — file from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">IRS Free File</h2><p>Free if income under $79,000. Visit irs.gov/freefile. 8+ partner programs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Tax-Aide</h2><p>FREE for any age, focused on seniors. In-person or virtual. Visit aarpfoundation.org/taxaide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VITA program</h2><p>IRS-trained free volunteers. Income under $64,000. Find a site at irs.gov/vita.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TurboTax / H&amp;R Block</h2><p>Free for simple returns. Costs more for itemized or self-employed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FreeTaxUSA</h2><p>Federal free, state $14.99. No upsells. Highly rated.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Documents to gather</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>SSA-1099 (Social Security)</li><li>1099-R (pensions)</li><li>1099-DIV/INT (investments)</li><li>Property tax records</li><li>Medical expenses</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AARP Tax-Aide is the best deal — free expert help, no income limit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
