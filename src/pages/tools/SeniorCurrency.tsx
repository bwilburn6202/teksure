import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function SeniorCurrency() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Currency Apps for Seniors — TekSure" description="XE Currency, no foreign transaction fee cards for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Currency for Travelers</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t lose money on exchange.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">XE Currency</h2><p>FREE. Instant conversion. 200+ currencies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No foreign fee cards</h2><p>Capital One Venture. Chase Sapphire Preferred. No 3% surcharge.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pay in local</h2><p>Always pick local currency, not USD. Better rate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ATM withdraw</h2><p>Best exchange rates. Avoid airport currency exchanges.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell bank</h2><p>Travel notice. Prevents fraud lock on card abroad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wise card</h2><p>Like a debit card. Best rates. No hidden fees.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One $100 transaction can save $3-$15 with right card. Pays trip.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
