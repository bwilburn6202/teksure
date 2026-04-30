import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stamp } from 'lucide-react';

export default function StampCollectingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stamp Collecting for Seniors | TekSure" description="Philately revival. Plain-English starter guide for senior stamp collectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stamp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stamp Collecting</h1>
          <p className="text-lg text-muted-foreground">Quiet hobby. Educational. Valuable inheritance.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quiet, indoor activity.</li>
              <li>Cheap to start.</li>
              <li>Connects to history.</li>
              <li>Possible appreciation in value.</li>
              <li>Great rainy day hobby.</li>
              <li>Friendly community.</li>
              <li>No physical demands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter kit ($40)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stamp album with hingless mounts ($25).</li>
              <li>Stamp tongs (don&apos;t use fingers — oils damage).</li>
              <li>Magnifying glass.</li>
              <li>Perforation gauge.</li>
              <li>Mixed-stamp packet ($10) — 100s for fun.</li>
              <li>Scott Catalogue (library copy free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to get stamps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save from incoming mail.</li>
              <li>USPS Stamp Fulfillment Services — current designs.</li>
              <li><strong>Mystic Stamp</strong> — mystic.com. Senior-favorite supplier.</li>
              <li><strong>HipStamp</strong> — eBay-like for stamps.</li>
              <li>Estate sales often have collections.</li>
              <li>Local stamp clubs sell + trade.</li>
              <li>Family members may have old collections.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Topical collecting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick a theme — narrows infinite hobby.</li>
              <li>Birds, presidents, sports, flowers, holidays.</li>
              <li>One country (US, Britain, Canada).</li>
              <li>Specific era (Victorian, WWII).</li>
              <li>Personal interest = stays interesting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stamp clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>American Philatelic Society</strong> — stamps.org. National.</li>
              <li>Local clubs in most cities.</li>
              <li>Monthly meetings — trade + learn.</li>
              <li>StampShows — bigger gatherings.</li>
              <li>Mostly senior crowd.</li>
              <li>Library-hosted often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Inherited a collection?</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t toss. Don&apos;t damage. <strong>American Philatelic Society</strong> appraisal services — small fee. <strong>Heritage Auctions</strong>, <strong>Robert Siegel</strong> — major auctioneers if valuable. Most collections worth less than people think (millions of stamps printed) but historically/sentimentally valuable. Some really worth fortunes — get appraised.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
