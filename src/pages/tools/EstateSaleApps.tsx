import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function EstateSaleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Sale Tools + Companies | TekSure" description="Sell home contents fast. Plain-English picks for estate sale companies, listing apps, online auctions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Sale Tools</h1>
          <p className="text-lg text-muted-foreground">Sell faster. Less stress.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Estate sale companies (full-service)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cost: 25-50% of total sales.</li>
              <li>They organize, price, advertise, run sale.</li>
              <li>Great for big estates with high-value items.</li>
              <li>Find local: <strong>EstateSales.net</strong> directory.</li>
              <li>Get 3 quotes. Compare commission rates.</li>
              <li>Verify references + insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Facebook Marketplace</strong> — local pickup. Free.</li>
              <li><strong>Craigslist</strong> — old-school but works.</li>
              <li><strong>OfferUp / Mercari</strong> — easier app than Craigslist.</li>
              <li><strong>eBay</strong> — for valuable + collectibles. Worldwide buyers.</li>
              <li><strong>EstateSales.net listing</strong> — DIY post for $25-50, attracts buyers.</li>
              <li><strong>Local FB &quot;Buy Nothing&quot; group</strong> — give away free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online auctions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MaxSold</strong> — online auction estate sales. National.</li>
              <li><strong>Everything But The House (EBTH)</strong> — premium auction service.</li>
              <li><strong>Kaminski Auctions</strong> — antiques + collectibles.</li>
              <li><strong>Sotheby&apos;s / Christie&apos;s</strong> — for high-end.</li>
              <li>Online auctions reach more buyers — often higher prices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic prices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most furniture sells 10-30% of original price.</li>
              <li>China sets — usually $20-100 (not the $500 you paid).</li>
              <li>Vinyl records, vintage Pyrex — sometimes valuable.</li>
              <li>Beanie Babies / 1990s "collectibles" — typically WORTHLESS now.</li>
              <li>Real antiques — get appraisal first.</li>
              <li>See /tools/old-collectibles-reality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Donate the rest</h3>
            <p className="text-sm text-muted-foreground">Anything that doesn&apos;t sell within 30 days = donate. Habitat ReStore, Salvation Army, Goodwill take most things. Tax-deductible receipt. Don&apos;t spend more time stressing over $20 items than they&apos;re worth. Move on.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
