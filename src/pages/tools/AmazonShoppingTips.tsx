import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function AmazonShoppingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Shopping Tips for Seniors | TekSure" description="Spot fake reviews, avoid 3rd-party sellers, find honest prices. Plain-English tips for safer Amazon shopping." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Shopping Tips</h1>
          <p className="text-lg text-muted-foreground">Avoid fake reviews and 3rd-party scams.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Sold by Amazon" vs 3rd party</h2>
            <p className="text-sm">Many products on Amazon are sold by 3rd-party sellers — Amazon just lists them. Quality and returns vary. Look right under the price for who SELLS it:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>"Sold by Amazon"</strong> — best. Amazon&apos;s return policy.</li>
              <li><strong>"Ships from Amazon, sold by [name]"</strong> — OK. Returnable, faster.</li>
              <li><strong>"Sold by [brand]"</strong> + "Fulfilled by Amazon" — usually OK if brand is real.</li>
              <li><strong>"Ships from China, sold by [random name]"</strong> — high risk. Often fake/poor quality. Skip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot fake reviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use <strong>Fakespot</strong> or <strong>Review Meta</strong> — paste Amazon link, get an honesty grade.</li>
              <li>Sort reviews by "Most recent" — old reviews may be from a different product (review hijacking).</li>
              <li>Read 3-star reviews — most honest. 1- and 5-stars often fake.</li>
              <li>Same review wording on multiple products = fake.</li>
              <li>"Verified Purchase" tag matters — others can be paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find the real price</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CamelCamelCamel.com</strong> or <strong>Keepa</strong> — paste Amazon link, see price history. Reveals fake "sale" prices.</li>
              <li>Many "$50, save 40%" items have been $30 for months.</li>
              <li>Honey extension — applies coupon codes at checkout automatically.</li>
              <li>Capital One Shopping — compares Amazon to Walmart/Target/Best Buy in real time.</li>
              <li>Wait for Prime Day (July) and Black Friday (Nov) — biggest real discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t let kids/grandkids see your Amazon</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Sign-In &amp; Security → Voice Purchase PIN ON.</li>
              <li>Disable "1-Click Ordering" — go to Account → 1-Click Settings.</li>
              <li>Browser auto-fill OFF on shared computers.</li>
              <li>Don&apos;t save card on Echo / Fire TV.</li>
              <li>Verify orders email (some send to phone, easier to miss).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Returns are easier than you think</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Amazon app or website → Your Orders.</li>
              <li>Find item → "Return or replace items".</li>
              <li>Pick reason. Pick refund or replacement.</li>
              <li>Amazon emails QR code — show at Whole Foods, Kohl&apos;s, UPS Store, or Amazon Locker.</li>
              <li>No box needed at most drop-offs. They handle packing.</li>
              <li>Refund hits credit card 3-7 business days.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Subscribe &amp; Save</h3>
            <p className="text-sm text-muted-foreground">For things you buy regularly — vitamins, paper towels, coffee, shampoo — Subscribe &amp; Save gives 5-15% off. Skip or cancel any month free. Ships every 1-6 months. Sign up at amazon.com/sas. Don&apos;t lock in items you only buy occasionally.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
