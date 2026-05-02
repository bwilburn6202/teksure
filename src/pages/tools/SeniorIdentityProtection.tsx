import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorIdentityProtection() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Identity Protection for Seniors — TekSure" description="Protect senior identity — credit freezes, IdentityForce, free FTC tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Identity Protection</h1>
          <p className="text-lg text-muted-foreground">Stop ID theft before it happens.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Freeze your credit (FREE)</h2><p>Call all 3 bureaus: Equifax, Experian, TransUnion. Locks new accounts in your name.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual free credit reports</h2><p>annualcreditreport.com — official, federally mandated, FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">IdentityIQ / IdentityForce</h2><p>$10-$25/month. Monitors dark web, alerts on suspicious activity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aura</h2><p>$9/month. Includes VPN, password manager, and ID monitoring.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If stolen</h2><p>Report to identitytheft.gov — official FTC site. Walks you through every step.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare ID theft</h2><p>Treat your Medicare number like a credit card. If stolen, call 1-800-MEDICARE.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A credit freeze is FREE and stops 99% of identity theft. Do this first.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
