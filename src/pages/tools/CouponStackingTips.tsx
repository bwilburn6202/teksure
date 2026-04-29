import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function CouponStackingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coupon Stacking Tips for Seniors | TekSure" description="Combine store coupon + manufacturer + cashback + senior discount. Plain-English guide to legitimate coupon stacking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coupon Stacking</h1>
          <p className="text-lg text-muted-foreground">Get to 50%+ off legitimately.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The stack (in order)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Store sale</strong> — wait for "buy one get one" or 50% off.</li>
              <li><strong>Store coupon</strong> — clip in app (CVS, Walgreens, Kroger).</li>
              <li><strong>Manufacturer coupon</strong> — paper or digital. Stacks WITH store coupon at most stores.</li>
              <li><strong>Senior discount</strong> — usually Tuesday 5%+ at many stores.</li>
              <li><strong>Cashback app</strong> — Ibotta, Fetch, after purchase.</li>
              <li><strong>Credit card cash back</strong> — 1-5% on top.</li>
              <li>Stacked = 50-70% off original price.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stores allowing coupon stacking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CVS</strong> — store + manufacturer + ExtraBucks rewards. King of stacking.</li>
              <li><strong>Walgreens</strong> — store + manufacturer + Balance Rewards.</li>
              <li><strong>Target</strong> — store + manufacturer + 5% RedCard discount.</li>
              <li><strong>Kroger</strong> — digital coupons + paper + fuel points.</li>
              <li><strong>Walmart</strong> — manufacturer only, no stacking. Skip for stacking.</li>
              <li><strong>Costco</strong> — own coupons. No outside coupons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps that stack</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ibotta</strong> — cash back on grocery items.</li>
              <li><strong>Fetch Rewards</strong> — points for any receipt.</li>
              <li><strong>Coupons.com</strong> — printable coupons.</li>
              <li><strong>Honey</strong> — auto-apply codes online.</li>
              <li><strong>Rakuten</strong> — store cash back.</li>
              <li><strong>Drop</strong> — automatic credit-card rewards.</li>
              <li>Most can stack — combine 3-4.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discount days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tuesday</strong> — Kohl&apos;s, Salvation Army (most stores 5-15% off).</li>
              <li><strong>Wednesday</strong> — Bealls, Stein Mart (15% off).</li>
              <li><strong>Thursday</strong> — Goodwill, Marshalls senior discount.</li>
              <li><strong>Always</strong> — IHOP (10% with AARP), Dunkin&apos; (10%).</li>
              <li>Always ASK — many stores offer senior discount but don&apos;t advertise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t buy what you don&apos;t need</h3>
            <p className="text-sm text-muted-foreground">Best coupon strategy: don&apos;t shop for things you don&apos;t need. A "free" item is still cluttering your home + maybe wasted. Buy bargains ONLY on items already on your list. Coupon-clipping isn&apos;t a job.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
