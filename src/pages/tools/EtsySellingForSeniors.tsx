import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function EtsySellingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Etsy Selling for Seniors | TekSure" description="Sell crafts + vintage online. Plain-English Etsy guide for senior sellers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Etsy Selling for Seniors</h1>
          <p className="text-lg text-muted-foreground">Crafts, vintage, art = real income.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sells well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Handmade jewelry.</li>
              <li>Knitted/crocheted items (baby blankets HUGE).</li>
              <li>Quilts.</li>
              <li>Wood crafts.</li>
              <li>Vintage from your attic (50+ years old).</li>
              <li>Art prints + paintings.</li>
              <li>Custom embroidery.</li>
              <li>Soaps + candles.</li>
              <li>Family recipes (digital downloads).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up at etsy.com (free).</li>
              <li>Pick shop name (changeable later).</li>
              <li>Add bank account for deposits.</li>
              <li>List first 5 items free with referral link.</li>
              <li>$0.20 per listing after.</li>
              <li>6.5% transaction fee + 3% payment processing.</li>
              <li>Free shipping increases sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photos matter most</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>5-10 photos per listing (max).</li>
              <li>White or simple background.</li>
              <li>Natural daylight.</li>
              <li>Lifestyle shot (item in use).</li>
              <li>Close-ups showing detail.</li>
              <li>Phone camera fine.</li>
              <li>Free apps: Snapseed, Lightroom for editing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Materials cost x 3-4 = retail.</li>
              <li>Plus your time at $15-30/hr.</li>
              <li>Compare similar listings.</li>
              <li>Don&apos;t undercharge — quality work valued.</li>
              <li>Etsy customers expect handmade prices.</li>
              <li>Free shipping baked into price = better sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with 10 items — see what sells.</li>
              <li>Re-list duplicates (auto-renews $0.20).</li>
              <li>Respond to messages within 24 hrs.</li>
              <li>Ship within 1-3 days promised.</li>
              <li>Use USPS Pickup app — they come to you.</li>
              <li>Build email list of customers.</li>
              <li>Print labels at home — Etsy provides discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Taxes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Etsy issues 1099-K if $5K+ sales (2026).</li>
              <li>Track expenses: materials, shipping, fees, photography.</li>
              <li>Home office deduction.</li>
              <li>Mileage to post office.</li>
              <li>Free Schedule C templates online.</li>
              <li>Talk to CPA if $$ significant.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Income realistic</h3>
            <p className="text-sm text-muted-foreground">Most Etsy sellers make $0-500/mo. Top 10% make $1K-5K. Few make full-time. Realistic = $200-1,000/month after time + materials. Best for: hobby income, sense of purpose, social with buyers. Worst for: replace job income. Set realistic expectations.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
