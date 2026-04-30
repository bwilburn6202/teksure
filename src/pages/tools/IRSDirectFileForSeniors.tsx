import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function IRSDirectFileForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Direct File for Seniors | TekSure" description="File taxes free with IRS. Senior IRS Direct File guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRS Direct File</h1>
          <p className="text-lg text-muted-foreground">Free federal tax filing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>IRS official free filing.</li><li>Direct from gov.</li><li>No middleman.</li><li>Simple returns.</li><li>Free always.</li><li>Senior worth using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eligibility 2026</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>25 states + DC.</li><li>Wages, Social Security.</li><li>Standard deduction.</li><li>Simple itemized.</li><li>Not for complex (rentals).</li><li>Senior most qualify.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$0 — vs $50-$200 paid.</li><li>IRS direct security.</li><li>No upsells.</li><li>Plain language.</li><li>State link too.</li><li>Senior frugal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs free TurboTax/H&amp;R</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free options up-charge.</li><li>IRS Direct = no upsell.</li><li>Same forms.</li><li>Senior recommended.</li><li>Even simpler.</li><li>Government trust.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AARP TaxAide</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free in-person help.</li><li>Trained volunteers.</li><li>Senior preferred.</li><li>Library + senior centers.</li><li>Schedule online.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">VITA</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Volunteer Income Tax Assistance.</li><li>Free for low-income.</li><li>$60k or less.</li><li>Senior friendly.</li><li>Trained volunteers.</li><li>IRS-backed.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free senior tax filing — 3 options</h3><p className="text-sm text-muted-foreground">3 free senior tax options: IRS Direct File (online direct), AARP TaxAide (in-person volunteer), VITA (low-income help). $0 saved vs $50-$200 TurboTax. Don&apos;t pay if can avoid. Senior-friendly all three. Pick what fits.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
