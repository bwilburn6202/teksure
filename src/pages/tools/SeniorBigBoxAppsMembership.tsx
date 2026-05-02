import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Store } from 'lucide-react';

export default function SeniorBigBoxAppsMembership() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Big Box Memberships | TekSure" description="Costco, Sam's, BJs senior membership comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Store className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Big Box Memberships</h1>
          <p className="text-lg text-muted-foreground">Senior bulk savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$65 Gold + $130 Executive.</li><li>Best senior pharmacy.</li><li>Hearing aids cheapest.</li><li>Travel deals.</li><li>Senior favorite.</li><li>Worth Executive 2% back.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sam&apos;s Club</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50 + $110 Plus.</li><li>Walmart-owned.</li><li>Senior similar Costco.</li><li>Slightly cheaper member.</li><li>Worth comparing locally.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">BJs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$55-$110.</li><li>Northeast US.</li><li>Senior smaller chain.</li><li>Coupons accepted (unique).</li><li>Worth if local.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior smart shop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Compare unit prices.</li><li>Senior bulk = waste if doesn&apos;t fit.</li><li>Couples 2-month supply ok.</li><li>Single seniors smaller.</li><li>Worth thinking.</li><li>Test 1 year.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Specific deals</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Costco gas 5-15% cheaper.</li><li>Hearing aids $1,400 vs $5,000.</li><li>Pharmacy.</li><li>Tires.</li><li>Senior big-ticket worth.</li><li>Pays membership easily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free entry hacks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pharmacy doesn&apos;t need member.</li><li>Senior Rx access free.</li><li>Optical eye exam often.</li><li>Worth knowing.</li><li>Free.</li><li>Test before joining.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 Costco Executive = senior 2% back + Rx + hearing</h3><p className="text-sm text-muted-foreground">$130 Costco Executive = senior 2% cashback + cheapest pharmacy + $1,400 hearing aids vs $5,000 + gas savings + travel deals. Pays membership easily. Free pharmacy access without membership too. Test before joining.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
