import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function CapitalOneShoppingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Capital One Shopping for Seniors | TekSure" description="Free price-compare + coupon tool. Capital One Shopping for senior shoppers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Capital One Shopping</h1>
          <p className="text-lg text-muted-foreground">Best price + coupons free.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free browser extension.</li><li>Compares Amazon vs other sites.</li><li>Auto-applies coupons.</li><li>Price drop alerts.</li><li>Reward credits.</li><li>No Capital One account needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best feature</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon may not be cheapest.</li><li>Walmart, Target, Costco compared.</li><li>Says &quot;buy here for $X less&quot;.</li><li>Senior eye-opener.</li><li>Saves real money.</li><li>Free service.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>CapitalOneShopping.com.</li><li>Add browser extension.</li><li>Free signup.</li><li>Works on Amazon, eBay, etc.</li><li>One-time install.</li><li>Senior-friendly setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reward credits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Earn points shopping.</li><li>Redeem for gift cards.</li><li>$10 Walmart, Amazon, etc.</li><li>Slow accumulation.</li><li>Free bonus.</li><li>Cherry on top.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Price drop alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Watch any item.</li><li>Email when price drops.</li><li>Buy at low.</li><li>Senior patient shopping wins.</li><li>Free service.</li><li>Big purchases especially.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cap One vs Honey</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cap One — price compare.</li><li>Honey — coupon codes.</li><li>Use both!</li><li>Don&apos;t conflict.</li><li>Best stacked.</li><li>All free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Three free tools = best stack</h3><p className="text-sm text-muted-foreground">Stack Capital One Shopping (price compare) + Honey (coupons) + Rakuten (cashback) = best free senior shopping setup. All browser extensions. Install once. Save 5-30% on every online order. Many seniors save $500+/year easily. Don&apos;t skip this.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
