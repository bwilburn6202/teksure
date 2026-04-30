import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function HoneyCouponAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Honey Coupon App for Seniors | TekSure" description="Auto-apply coupon codes when shopping online. Free Honey browser extension." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Honey App</h1>
          <p className="text-lg text-muted-foreground">Auto-coupons when shopping.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Browser extension.</li><li>At checkout, auto-tries codes.</li><li>Applies the best one.</li><li>You save $5-$50.</li><li>Free.</li><li>Owned by PayPal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>JoinHoney.com.</li><li>Add to Chrome/Safari/Edge.</li><li>Free signup.</li><li>Honey button appears.</li><li>Works at 30,000+ stores.</li><li>One-time setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Honey Gold</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in cashback rewards.</li><li>Earn points shopping.</li><li>Redeem gift cards.</li><li>$10 minimum.</li><li>Free.</li><li>Stacks with other cashback.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t hunt for codes.</li><li>Auto saves at checkout.</li><li>Average $130/year savings.</li><li>Free money.</li><li>Easy click button.</li><li>Senior-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When it works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon, eBay, Macy&apos;s.</li><li>Walmart, Kohl&apos;s, Target.</li><li>Travel — Booking, Expedia.</li><li>Software — Adobe.</li><li>Most online stores.</li><li>Honey always tries.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reads pages you shop on.</li><li>Doesn&apos;t see banking.</li><li>PayPal owned.</li><li>Reasonable for free.</li><li>Don&apos;t worry.</li><li>Use confidence.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Honey + Rakuten = double save</h3><p className="text-sm text-muted-foreground">Use Honey for coupon codes + Rakuten for cashback = stacked savings on every online order. Both free browser extensions. Setup takes 5 minutes. Many seniors save $300+/year automatically. Don&apos;t leave money on the table — just install once.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
