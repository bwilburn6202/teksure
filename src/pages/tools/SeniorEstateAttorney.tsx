import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function SeniorEstateAttorney() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Estate Attorney Guide | TekSure" description="When + how to hire an estate attorney as a senior." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Attorney</h1>
          <p className="text-lg text-muted-foreground">Senior legal planning.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$500k+ estate.</li><li>Multiple properties.</li><li>Blended families.</li><li>Special needs heirs.</li><li>Senior complex.</li><li>Worth $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DIY ok when</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Simple estate.</li><li>One spouse + kids.</li><li>Standard wishes.</li><li>Senior LegalZoom $200-$500.</li><li>Or Trust + Will $400-$800.</li><li>Save $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Will — $300-$1,000.</li><li>Trust — $1,500-$5,000.</li><li>Senior worth complex.</li><li>State varies.</li><li>Free initial consult.</li><li>Compare 3.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find attorney</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NAELA.org elder law.</li><li>State bar referral.</li><li>Senior friend referrals.</li><li>Avoid TV-ad lawyers.</li><li>Senior specialist preferred.</li><li>Worth research.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What include</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Will.</li><li>POA financial + medical.</li><li>Living will.</li><li>HIPAA release.</li><li>Senior comprehensive.</li><li>Trust if appropriate.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Update every 5 years</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Or major life changes.</li><li>Senior keep current.</li><li>Marriages, deaths, moves.</li><li>Tax law changes.</li><li>Cheap update.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$300 LegalZoom or $1,500 attorney = senior estate</h3><p className="text-sm text-muted-foreground">Senior simple estate: LegalZoom $200-$500 sufficient. Complex (blended family, special needs, $500k+): hire attorney $1,500-$5,000. Find via NAELA elder law specialists. Update every 5 years. POA + living will + HIPAA critical. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
