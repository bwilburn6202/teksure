import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function AmazonPrimeMastery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Prime Mastery — Hidden Features & Savings | TekSure" description="Already pay for Prime? Most members use 20% of what they're paying for. The hidden benefits, easy returns, and how to save more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Prime Mastery</h1>
          <p className="text-lg text-muted-foreground">$139 well spent — if you actually use what you\'re paying for.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What Prime really includes</h2>
            <p className="text-sm mb-2">Most people only know about free shipping. Prime is also:</p>
            <ul className="text-sm list-disc pl-5">
              <li>Prime Video (movies and original shows)</li>
              <li>Amazon Music (free with ads, or limited tier)</li>
              <li>Prime Reading (free e-books and magazines)</li>
              <li>Free Whole Foods delivery (where available)</li>
              <li>Free same-day delivery on lots of items</li>
              <li>Free photo storage (unlimited!) at Amazon Photos</li>
              <li>Prime Gaming (free games and rewards)</li>
              <li>Discounts at Whole Foods in-store</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Returning is the magic</h2>
            <p className="text-sm mb-2">Amazon's return process is among the easiest in retail:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open Amazon → "Your Orders" → find the item → "Return or replace items".</li>
              <li>Pick a reason (didn't fit, defective, changed my mind).</li>
              <li>Choose drop-off — usually <strong>Whole Foods</strong>, <strong>Kohl's</strong>, <strong>UPS Store</strong>, or <strong>Amazon Locker</strong>. Most need NO box, NO label — just bring the item and your QR code.</li>
              <li>Take the QR code from the email when you go.</li>
              <li>Refund hits your card in 1-3 days, often before the item gets back to Amazon.</li>
            </ol>
            <p className="text-sm mt-3">No printer, no tape, no scissors. Boxless drop-off changed everything.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money on Prime itself</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior pricing — Prime Access:</strong> If you're on EBT or qualifying government programs, Prime is $7/month instead of $15. Sign up at amazon.com/access.</li>
              <li><strong>Annual:</strong> $139/year is cheaper per month than monthly.</li>
              <li><strong>Share with one household member</strong> — through Amazon Household, share the benefits with a spouse or grandchild for free.</li>
              <li><strong>Free trial</strong> — 30 days free if you've never had Prime. Try Prime Day in July without committing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden gems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon Photos</strong> — UNLIMITED free photo storage. Most don't realize this. Backs up your phone automatically — install the Amazon Photos app.</li>
              <li><strong>"Subscribe & Save"</strong> — 5-15% off groceries and everyday items if you let Amazon ship monthly. Pause anytime; not a contract.</li>
              <li><strong>Amazon Smile (charity)</strong> — Smile shut down in 2023 but you can sometimes find similar with the AmazonAccess program.</li>
              <li><strong>Try Before You Buy / Prime Try Before You Buy</strong> — clothing items where you only pay for what you keep. Send the rest back free.</li>
              <li><strong>Amazon Warehouse</strong> — open-box and slightly damaged items at 30-50% off.</li>
              <li><strong>Amazon Outlet</strong> — clearance section with bigger discounts than the main site.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid pitfalls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Auto-renew traps:</strong> Settings → "Manage Prime Membership" — turn OFF "Auto-renew" if you only want it for a season.</li>
              <li><strong>Fake reviews:</strong> Be skeptical of products with hundreds of identical 5-star reviews. Use Fakespot.com or check verified-purchaser ones.</li>
              <li><strong>Add-on items</strong> — small items only ship free if you add to a $25+ order.</li>
              <li><strong>Counterfeit risk</strong> — for batteries, supplements, and electronics, check that "ships from and sold by Amazon" or the brand directly. Third-party sellers can be sketchy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you only buy a few things a year</h3>
            <p className="text-sm text-muted-foreground">Don't pay for Prime. Most items still ship free if your order is over $25-35. Walmart+, Target Circle 360, and Costco are alternatives if you don't watch streaming or buy small items often.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
