import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Disc3 } from 'lucide-react';

export default function RecordCollectingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vinyl Record Collecting for Seniors | TekSure" description="Vinyl revival worth thousands. Plain-English guide for senior collectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Disc3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vinyl Record Collecting</h1>
          <p className="text-lg text-muted-foreground">Old albums valuable again. Beautiful sound.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vinyl is back</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vinyl outsold CDs since 2020.</li>
              <li>Original 1960s-70s records worth $$$.</li>
              <li>Beatles + Rolling Stones + Bowie LPs valuable.</li>
              <li>Some rare records $1K-100K+.</li>
              <li>Modern vinyl $25-40 new.</li>
              <li>Many seniors revisit youth collections.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check old collection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Inspect album covers — wear?</li>
              <li>Mono vs stereo (mono often more valuable).</li>
              <li>First pressings (matrix codes) = most valuable.</li>
              <li>Picture sleeves vs plain.</li>
              <li>Promo copies (radio station) often valuable.</li>
              <li>Use Discogs.com to identify variants.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find values</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Discogs.com</strong> — best tool. Real sale history.</li>
              <li><strong>eBay sold listings</strong>.</li>
              <li><strong>Popsike.com</strong> — auction archives.</li>
              <li><strong>Goldmine Magazine price guides</strong>.</li>
              <li>Same album, different press = wildly different value.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Caring for records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vertical storage (never stack flat).</li>
              <li>Cool, dry, dark.</li>
              <li>Anti-static inner sleeves ($30/100).</li>
              <li>Outer plastic sleeves to protect covers.</li>
              <li>Clean before each play (record brush).</li>
              <li>Quality stylus = sounds better + protects records.</li>
              <li>Replace stylus every 1,000 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best turntables 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Audio-Technica AT-LP60X</strong> — $150. Best beginner.</li>
              <li><strong>Pro-Ject Debut Carbon EVO</strong> — $600. Senior-favorite.</li>
              <li><strong>Rega Planar 1</strong> — $475. Audiophile starter.</li>
              <li><strong>Crosley</strong> — AVOID. Damages records.</li>
              <li>Belt-drive better than direct.</li>
              <li>Built-in preamp = simpler senior setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Selling old records</h3>
            <p className="text-sm text-muted-foreground"><strong>Discogs</strong> — best for individual sales. <strong>Local record stores</strong> — quick but 30-50% of value. <strong>Heritage Auctions</strong> for rare records. <strong>eBay</strong> for variety. Don&apos;t toss without checking — childhood Beatles albums could be worth $500-5,000+.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
