import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function PrimeDayBlackFriday() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prime Day + Black Friday for Seniors | TekSure" description="Buy smart on big sale days. Plain-English guide for seniors avoiding hype + getting real deals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prime Day + Black Friday</h1>
          <p className="text-lg text-muted-foreground">Real deals + fake hype. Know the difference.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sale calendar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Prime Day</strong> — early/mid July. 2 days.</li>
              <li><strong>Big Deal Days</strong> — Amazon&apos;s October Prime Day.</li>
              <li><strong>Black Friday</strong> — day after Thanksgiving (now starts in early Nov).</li>
              <li><strong>Cyber Monday</strong> — Monday after Thanksgiving.</li>
              <li><strong>Christmas in July</strong> — many retailers mid-July.</li>
              <li><strong>Year-end clearance</strong> — Dec 26-31.</li>
              <li><strong>Memorial / Labor Day</strong> — appliance sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real deals on these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon devices</strong> — Echo, Fire TV, Kindle. Best prices yearly.</li>
              <li><strong>TVs</strong> — November-December.</li>
              <li><strong>Laptops</strong> — Black Friday, back-to-school.</li>
              <li><strong>Vacuums + air purifiers</strong> — Prime Day classics.</li>
              <li><strong>Smart home devices</strong> — Ring, Nest, Google Home.</li>
              <li><strong>Apple products</strong> — limited but real $50-200 off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fake deal warning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many &quot;deals&quot; are SAME PRICE rest of year.</li>
              <li>Use Camelcamelcamel.com for Amazon price history.</li>
              <li>Honey extension shows &quot;is this lowest price?&quot;</li>
              <li>Kohl&apos;s, Macy&apos;s &quot;original&quot; prices are inflated.</li>
              <li>Compare to Walmart + Target + Costco.</li>
              <li>If you wouldn&apos;t buy at full price — don&apos;t buy on sale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make wishlist BEFORE sales.</li>
              <li>Add items to Amazon wishlist — alerts on price drops.</li>
              <li>Set price tracking on Camelcamelcamel.</li>
              <li>Check 3+ retailers for big purchases.</li>
              <li>Wait 24-48 hours — most deals last whole event.</li>
              <li>Don&apos;t fall for &quot;limited time&quot; pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stack discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sale price + Rakuten cashback + credit card reward = 20-30% off.</li>
              <li>AARP discounts at participating retailers.</li>
              <li>Senior days (1st Tuesday at Goodwill, last Wed at Kohl&apos;s).</li>
              <li>Email signup discounts (10% first purchase).</li>
              <li>Costco price match within 30 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Slickdeals.net</strong> — community-vetted deals. <strong>The Wirecutter</strong> — only legit deals on their picks. <strong>Reddit r/buildapcsales</strong> — tech. Skip pre-Black Friday hype articles. Buy what you need, when you need, at lowest historical price.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
