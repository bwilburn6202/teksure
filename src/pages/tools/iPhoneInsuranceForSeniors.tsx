import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function iPhoneInsuranceForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Insurance for Seniors | TekSure" description="Worth it? AppleCare vs carrier insurance senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Insurance</h1>
          <p className="text-lg text-muted-foreground">Senior worth it?</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AppleCare+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200/2 years.</li><li>Or $10/mo.</li><li>Screen $29.</li><li>Other damage $99.</li><li>Best senior choice.</li><li>Buy at purchase.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15/mo per line.</li><li>$150-$250 deductible.</li><li>Adds up.</li><li>Senior compare math.</li><li>Often worse.</li><li>AppleCare better.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Self-insure</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skip insurance.</li><li>Pay if breaks.</li><li>OtterBox + glass $30.</li><li>Senior tough cases.</li><li>Save $200+/2yr.</li><li>Risk vs insurance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Credit card insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some cards include.</li><li>Pay phone bill on card.</li><li>Senior bonus.</li><li>Read terms.</li><li>Can stack with AppleCare.</li><li>Often free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior calc</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Drop history.</li><li>Active travel.</li><li>Phone $1,000+.</li><li>Senior valuable.</li><li>Worth $200 protection.</li><li>Self-insure with case if cheap.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Theft + loss</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AppleCare+ Theft + Loss adds.</li><li>$10/mo.</li><li>Senior anxiety.</li><li>Find My + AirTag backup.</li><li>Worth it travelers.</li><li>Skip if home senior.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 AppleCare = senior safest</h3><p className="text-sm text-muted-foreground">$200 AppleCare+ at iPhone purchase = senior safest. Screen repair $29 vs $329. Other $99 vs $400+. Beats carrier insurance math usually. Add Theft+Loss if travel. Or self-insure with $30 OtterBox + glass if rarely drop. Senior pick risk tolerance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
