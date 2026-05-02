import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorOnlineGroceryDeep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Online Grocery Deep Dive | TekSure" description="Compare Instacart, Walmart+, Amazon Fresh, Kroger." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Grocery Compare</h1>
          <p className="text-lg text-muted-foreground">Senior best service.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Walmart+ best value</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$98/year unlimited delivery.</li><li>Senior cheapest grocery.</li><li>$35 minimum.</li><li>Pharmacy too.</li><li>Worth comparing.</li><li>Best total value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Instacart Express</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$99/year delivery.</li><li>Many stores.</li><li>Senior favorite local.</li><li>Higher prices vs in-store.</li><li>Tip required.</li><li>Worth flexibility.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Amazon Fresh</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free with Prime $139/yr.</li><li>$100 min for free.</li><li>Senior limited markets.</li><li>Whole Foods delivery.</li><li>Worth Prime member.</li><li>Selection variable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Kroger Boost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$59-$99/year.</li><li>Free delivery + 2x fuel.</li><li>Senior best if Kroger family.</li><li>Cheaper than Walmart+.</li><li>Worth checking.</li><li>Stack senior discounts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Compare prices same item.</li><li>Senior store preference.</li><li>Pickup free vs delivery.</li><li>Substitutions allowed?</li><li>Test 1-month trials.</li><li>Worth shopping around.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pickup cheapest</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walmart, Target, Kroger pickup free.</li><li>Senior drive but not shop.</li><li>No tip needed.</li><li>Same prices.</li><li>Best deal.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Walmart+ + Kroger Boost = senior grocery savings</h3><p className="text-sm text-muted-foreground">Senior grocery delivery: Walmart+ $98/yr cheapest. Kroger Boost $59-$99 if Kroger family. Free pickup all major stores avoids tips. Test 1-month trials. Compare prices senior preferred items. Worth $100/yr saves driving + back strain.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
