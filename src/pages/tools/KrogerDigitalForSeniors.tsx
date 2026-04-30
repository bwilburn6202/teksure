import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function KrogerDigitalForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kroger Digital for Seniors | TekSure" description="Kroger digital coupons + delivery. Senior grocery savings guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kroger Digital</h1>
          <p className="text-lg text-muted-foreground">Coupons + grocery savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Kroger account</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Kroger.com signup.</li><li>Or app.</li><li>Earn fuel points.</li><li>Digital coupons.</li><li>Free.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Digital coupons</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Browse hundreds in app.</li><li>Tap to clip.</li><li>Auto-apply at checkout.</li><li>$50+/month savings.</li><li>Senior simple.</li><li>No paper coupons.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Boost subscription</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$59-$99/year.</li><li>Free delivery.</li><li>2x fuel points.</li><li>Senior compare options.</li><li>Worth if frequent shopper.</li><li>Try free week.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Fuel rewards</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Earn at Kroger groceries.</li><li>Redeem at Shell + Kroger gas.</li><li>$0.10-$1.00/gal off.</li><li>Senior big savings.</li><li>Use within 30 days.</li><li>Stack with credit cards.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pickup + delivery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Order online.</li><li>Pickup or deliver.</li><li>Same prices as in-store.</li><li>Senior arthritis relief.</li><li>No shopping cart.</li><li>Major win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Other names</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ralphs, Fred Meyer.</li><li>Smith&apos;s, Fry&apos;s.</li><li>King Soopers, QFC.</li><li>All Kroger family.</li><li>Same app.</li><li>Senior regional.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Kroger app = senior grocery savings</h3><p className="text-sm text-muted-foreground">Free Kroger app = digital coupons stacked + fuel points + curbside pickup. $50-$100/month savings on groceries. Plus fuel discount. Many seniors save thousands/year. If you have Kroger family store nearby, sign up today. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
