import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorTaxAct() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax Software for Seniors — Senior Guide" description="Compare tax software options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax Software</h1>
          <p className="text-lg text-muted-foreground">File taxes online with confidence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. IRS Direct File</h2><p>Free if you live in 25 states with simple returns. Best new option for 2025+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. TurboTax Free</h2><p>Free for simple W-2s. Anything more — it costs $40-100.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. TaxAct</h2><p>Cheaper than TurboTax. Most filing types $25-50.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. FreeTaxUSA</h2><p>Federal always free. State $15. Same forms as the big guys.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AARP Tax-Aide</h2><p>Free in-person help for seniors. Volunteers prepare your taxes. Find sites at aarp.org/taxaide.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. VITA program</h2><p>Free IRS volunteer income tax help if income under $64,000.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If retired with pension, Social Security, and one IRA, simple software is enough. Skip CPA fees.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
