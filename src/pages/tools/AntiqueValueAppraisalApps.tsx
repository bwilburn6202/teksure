import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const APPS = [
  { name: 'WorthPoint', cost: '$30/mo', best: 'Largest antique price database. Sold prices.', good: 'Best research.' },
  { name: 'Heritage Auctions', cost: 'FREE', best: 'Major auctions archived. See past sale prices.', good: 'Best historical.' },
  { name: 'eBay sold listings', cost: 'FREE', best: 'Filter by &quot;sold&quot; to see real prices.', good: 'Best free reality check.' },
  { name: 'Kovels', cost: 'FREE / $30/yr', best: 'Reference books online. Trusted name.', good: 'Best reference.' },
  { name: 'Mearto / Value My Stuff', cost: '$25-50 per item', best: 'Online appraisal by experts.', good: 'Best for one item.' },
];

export default function AntiqueValueAppraisalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Antique Appraisal Apps for Seniors | TekSure" description="Find what your stuff is worth. Plain-English antique value guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Antique Appraisal</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t accidentally sell a treasure for $5.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to appraise</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Inherited family items.</li>
              <li>Downsizing — before you donate / sell.</li>
              <li>Insurance for high-value pieces.</li>
              <li>Estate planning for heirs.</li>
              <li>Suspect something might be valuable.</li>
              <li>Found at thrift store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY first research</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>eBay sold listings — type item + filter &quot;sold.&quot;</li>
              <li>Etsy similar items.</li>
              <li>Google Lens — photo identifies.</li>
              <li>Look for maker&apos;s marks, signatures, dates.</li>
              <li>Photograph from multiple angles.</li>
              <li>Check Heritage Auctions archives free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to hire pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Estimated $1,000+ value.</li>
              <li>Insurance documentation needed.</li>
              <li>Estate / divorce / IRS purposes.</li>
              <li>Items: jewelry, antique furniture, paintings.</li>
              <li>$50-300 for written appraisal.</li>
              <li>Find ASA Accredited (American Society of Appraisers).</li>
              <li>Or AAA (Appraisers Association of America).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Antiques Roadshow</strong> — free if your city is hosting.</li>
              <li><strong>Local antique stores</strong> — sometimes appraise free.</li>
              <li><strong>Auction houses</strong> — Sotheby&apos;s, Christie&apos;s for high-end.</li>
              <li><strong>Heritage Auctions</strong> — free email evaluations.</li>
              <li>Don&apos;t take to pawnshop — they lowball.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SCAM warning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Roadshow ads = often scam.</li>
              <li>&quot;Buying gold/silver&quot; ads — usually pay 30% of value.</li>
              <li>Door-to-door &quot;antique buyers&quot; = avoid.</li>
              <li>Get 2-3 quotes before selling valuable items.</li>
              <li>Never sell to person who hard-presses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Online auctions</h3>
            <p className="text-sm text-muted-foreground">For valuable items: <strong>Heritage Auctions</strong>, <strong>Sotheby&apos;s</strong>, <strong>Christie&apos;s</strong>, <strong>Bonhams</strong>. Free consignment. Items 6-12 months to sell. They take 25%+ commission. Reach broader buyers = higher prices. Free initial evaluations to estimate before consigning.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
