import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function HairLossAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hair Loss Apps for Seniors | TekSure" description="Hair thinning apps + senior treatment guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <User className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hair Loss Apps</h1>
          <p className="text-lg text-muted-foreground">Senior thinning.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hims/Roman</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Telehealth Rx finasteride.</li><li>$30/month.</li><li>Senior men hair loss.</li><li>Online consult.</li><li>Delivered.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hers women</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior women thinning.</li><li>Spironolactone Rx.</li><li>$30/month.</li><li>Online derm consult.</li><li>Senior friendly.</li><li>Confidential.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OTC Rogaine</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Minoxidil $30/3-month.</li><li>Generic cheaper.</li><li>Apply 2x daily.</li><li>Senior 6 months for results.</li><li>Maintain forever.</li><li>Costco generic best deal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Talk doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sudden hair loss = thyroid?</li><li>Iron deficiency.</li><li>Medication side effect.</li><li>Senior medical first.</li><li>Don&apos;t self-treat.</li><li>Get blood work.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Laser caps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300-$1,500.</li><li>Low-level light therapy.</li><li>FDA-approved some.</li><li>Senior expensive.</li><li>Mixed results.</li><li>Try minoxidil first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Acceptance also</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some seniors embrace.</li><li>Wig options good.</li><li>Senior dignified.</li><li>Many handsome bald.</li><li>Health > vanity.</li><li>Personal choice.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior hair loss = doctor first</h3><p className="text-sm text-muted-foreground">Senior sudden hair loss — see doctor first. Thyroid, iron, meds may cause. If genetic, OTC Rogaine $30/3-month or telehealth Hims/Hers Rx. Costco generic minoxidil cheapest. Or accept gracefully — many seniors handsome with thinning.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
