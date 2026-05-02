import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorOnlineCouponApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coupon Apps for Seniors — TekSure" description="Free coupon apps for seniors — Honey, RetailMeNot, Ibotta, store apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coupon Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free apps. Real savings.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honey</h2><p>Free. Auto-applies coupons at checkout online. Owned by PayPal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RetailMeNot</h2><p>Free. Search any store before buying. Verified codes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ibotta</h2><p>Free. Cash back on grocery receipts. Snap photos after shopping.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fetch Rewards</h2><p>Free. Snap any grocery or gas receipt. Earn points for gift cards.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Store apps</h2><p>Target Circle, Walgreens, CVS Extra Care — all have free coupons in their apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior discount days</h2><p>Many stores offer 10-20% off seniors on Tuesdays. Ask the cashier.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Stack store coupon + manufacturer coupon + cash back app for max savings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
