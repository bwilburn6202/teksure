import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function ChristmasShoppingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Christmas Shopping for Seniors | TekSure" description="Online holiday shopping safely. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Christmas Shopping</h1>
          <p className="text-lg text-muted-foreground">Online deals. Avoid scams. Ship on time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trusted shopping sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon</strong> — biggest, fast shipping.</li>
              <li><strong>Target.com</strong> — store pickup option.</li>
              <li><strong>Walmart.com</strong> — free shipping $35+.</li>
              <li><strong>Costco.com</strong> — bulk + member deals.</li>
              <li><strong>Kohls, Macys</strong> — clothing.</li>
              <li><strong>Etsy</strong> — handmade gifts.</li>
              <li>Stick to brand names you know.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Holiday scam warnings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Order delayed&quot; texts — fake.</li>
              <li>Fake delivery emails (USPS, UPS, FedEx).</li>
              <li>Too-good-to-be-true social media ads.</li>
              <li>Lookalike Amazon sites.</li>
              <li>Charity scams — verify on charitynavigator.org.</li>
              <li>Gift card requests = always scam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shipping deadlines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order by Dec 15 standard shipping.</li>
              <li>Dec 18 expedited.</li>
              <li>Dec 22 overnight.</li>
              <li>Amazon Prime — Dec 23-24 same-day.</li>
              <li>Pickup orders — Dec 24 most stores.</li>
              <li>Plan early — sells out fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Black Friday + Cyber Monday — best sales.</li>
              <li>Amazon Lightning Deals.</li>
              <li>Honey / Rakuten browser extensions.</li>
              <li>Senior discounts — AARP partners.</li>
              <li>Set Amazon price drop alerts.</li>
              <li>RetailMeNot — coupons.</li>
              <li>Costco gift cards — at member discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy gift ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon gift cards — never wrong.</li>
              <li>Costco + Sam&apos;s Club memberships.</li>
              <li>Streaming subscriptions — Netflix, Disney+.</li>
              <li>Audible / Kindle subscriptions.</li>
              <li>National park pass.</li>
              <li>Magazine subscriptions.</li>
              <li>Costco grocery delivery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe checkout</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use credit card (better fraud protection).</li>
              <li>Never debit card online.</li>
              <li>Apple Pay / Google Pay safer.</li>
              <li>Save receipts (email).</li>
              <li>Track shipments.</li>
              <li>Photograph package at door.</li>
              <li>Report stolen packages immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Wishlists save stress</h3>
            <p className="text-sm text-muted-foreground">Send family your wishlist via Amazon — they buy from your list. Set up wishlist for grandkids — buy from theirs. Skip stress + crowds. Wrap to be delivered. Save money on gas + parking. December = peak phishing season — verify everything twice.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
