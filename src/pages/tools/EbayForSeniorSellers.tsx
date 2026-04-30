import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function EbayForSeniorSellers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="eBay for Senior Sellers | TekSure" description="Sell collectibles, vintage, household items on eBay. Senior-friendly selling tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">eBay Selling</h1>
          <p className="text-lg text-muted-foreground">Turn clutter into cash.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sells well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vintage clothing + accessories.</li>
              <li>Collectibles + antiques.</li>
              <li>Old toys + games.</li>
              <li>Tools + tech gear.</li>
              <li>Books + records.</li>
              <li>Local pickup furniture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free seller account at eBay.com.</li>
              <li>250 free listings/month.</li>
              <li>13.25% final value fee on sale.</li>
              <li>PayPal account for payments.</li>
              <li>Print shipping labels at home.</li>
              <li>Rate vs profit important.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior selling tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph from multiple angles.</li>
              <li>Plain background.</li>
              <li>Include scale (item next to coin).</li>
              <li>Describe condition honestly.</li>
              <li>Search similar items for pricing.</li>
              <li>Auction or fixed price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shipping options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print labels at home — eBay app.</li>
              <li>USPS pickup — schedule online.</li>
              <li>UPS + FedEx pickup options.</li>
              <li>Free flat-rate boxes from USPS.</li>
              <li>Local pickup option — no shipping.</li>
              <li>Offer combined shipping for multiple sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Only accept eBay&apos;s payment system.</li>
              <li>Refuse direct payment offers.</li>
              <li>Buyer wants to overpay = scam.</li>
              <li>Always ship with tracking.</li>
              <li>Take photos of packaging.</li>
              <li>Fraud unusual but possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax implications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1099-K if sales over $20,000 (lower limits coming).</li>
              <li>Selling personal items at loss = no tax.</li>
              <li>Selling for profit = taxable income.</li>
              <li>Track expenses (shipping, fees).</li>
              <li>Consult tax advisor if substantial sales.</li>
              <li>Schedule C if hobby becomes business.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with one item</h3>
            <p className="text-sm text-muted-foreground">Pick one item from your home that&apos;s collecting dust. Photograph well. List on eBay. Watch it sell. Many seniors discover their grandparent&apos;s old camera or vintage clothing items are worth $50–$500. Used to fund hobbies, travel, or grandkid gifts. Many lifelong eBay sellers started this way.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
