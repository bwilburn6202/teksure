import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorTSAPreCheckRenewal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA PreCheck Renewal for Seniors — TekSure" description="Renew TSA PreCheck online — saves 5-year hassle for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA PreCheck Renewal</h1>
          <p className="text-lg text-muted-foreground">Renew online. Skip the visit.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$78 for 5 years</h2><p>Same price every renewal. Worth it for seniors who fly 1+ times a year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Renew online</h2><p>tsa.gov/precheck/renewal. Most renewals approved without office visit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to renew</h2><p>Up to 6 months before expiration. Don&apos;t wait until last minute.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Global Entry alternative</h2><p>$120 for 5 years. Includes TSA PreCheck. Worth it if you fly internationally.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Some credit cards reimburse</h2><p>Chase Sapphire Reserve, Amex Platinum, others. $100 statement credit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Check status</h2><p>Visit ttp.dhs.gov to see expiration date.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save Known Traveler Number in airline profiles. Auto-applies to bookings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
