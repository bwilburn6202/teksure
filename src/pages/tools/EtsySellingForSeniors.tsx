import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Store } from 'lucide-react';

export default function EtsySellingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Selling on Etsy for Senior Crafters | TekSure" description="Sell handmade crafts on Etsy. Senior-friendly guide to opening Etsy shop." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Store className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sell on Etsy</h1>
          <p className="text-lg text-muted-foreground">Turn your craft into income.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sells well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Handmade quilts + blankets.</li>
              <li>Knitted + crocheted items.</li>
              <li>Vintage items from your collection.</li>
              <li>Woodworking pieces.</li>
              <li>Painted artwork.</li>
              <li>Personalized + customized items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0.20 per listing fee.</li>
              <li>6.5% transaction fee.</li>
              <li>3% + $0.25 payment fee.</li>
              <li>No monthly subscription.</li>
              <li>Total fees about 10% of sale.</li>
              <li>Worth it for crafters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Process basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create Etsy seller account.</li>
              <li>Photograph items in good light.</li>
              <li>Write descriptions + measurements.</li>
              <li>Set price (cover materials + time + fees).</li>
              <li>Calculate shipping or offer free.</li>
              <li>List + wait for buyers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Work from home.</li>
              <li>Set your own pace.</li>
              <li>Use existing skills.</li>
              <li>Share your craft with the world.</li>
              <li>Modest income from passion.</li>
              <li>Stay mentally engaged.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photography tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Natural light by window best.</li>
              <li>Plain background — white sheet works.</li>
              <li>Multiple angles — 5+ photos per listing.</li>
              <li>Show scale with object near.</li>
              <li>Snapseed app for free editing.</li>
              <li>Phone camera is enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Materials cost + 3x markup minimum.</li>
              <li>Don&apos;t undervalue handmade.</li>
              <li>Research similar listings.</li>
              <li>Account for shipping carefully.</li>
              <li>Free shipping increases sales.</li>
              <li>Add 10% buffer for fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with 5 listings</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t overthink it — start with 5 of your best handmade items. Photograph well, write clear descriptions, set fair prices. Etsy handles the rest. First sale takes a few weeks typically. Once you see your work selling and people loving it, motivation grows. Many seniors earn $200–$2,000+ monthly from Etsy doing crafts they already enjoy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
