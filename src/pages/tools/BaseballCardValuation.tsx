import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function BaseballCardValuation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Baseball Card Valuation for Seniors | TekSure" description="Old card collections appraised. Plain-English baseball card guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trophy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Baseball Card Values</h1>
          <p className="text-lg text-muted-foreground">Childhood collection might fund retirement.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most valuable years</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pre-WWII (1909-1948)</strong> — extreme rarity.</li>
              <li><strong>1950s</strong> — Mantle, Mays, Williams = thousands.</li>
              <li><strong>1960s</strong> — Topps cards from era can be valuable.</li>
              <li><strong>1970s</strong> — selective stars only.</li>
              <li><strong>1980s-90s</strong> — overproduced, mostly worthless (sad truth).</li>
              <li><strong>Modern (2000s+)</strong> — autographs, rookies sometimes valuable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Valuation tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cardladder.com</strong> — best free price tool. Real sales.</li>
              <li><strong>PSA + Beckett price guides</strong>.</li>
              <li><strong>eBay sold listings</strong>.</li>
              <li><strong>StockX</strong> for modern cards.</li>
              <li><strong>Heritage Auctions</strong> archives — major sales.</li>
              <li>Photo cards on table, look up each.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get cards graded</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PSA</strong> — most popular. $20-100/card.</li>
              <li><strong>BGS</strong> (Beckett) — second most popular.</li>
              <li><strong>SGC</strong> — fastest growing.</li>
              <li>Grade 1-10 (10 = mint).</li>
              <li>Grade 9 vs 10 = often 5-10x price difference.</li>
              <li>Worth grading: $200+ raw value cards.</li>
              <li>Process: 30-90 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to sell</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Heritage Auctions</strong> — $500+ cards.</li>
              <li><strong>PWCC</strong> — premier card auctions.</li>
              <li><strong>eBay</strong> — middle market.</li>
              <li><strong>Card shows</strong> — local conventions.</li>
              <li><strong>Local card shops</strong> — convenient but lowball.</li>
              <li><strong>StockX</strong> for modern cards.</li>
              <li>Compare 2-3 venues before selling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t clean cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER wipe, polish, trim cards.</li>
              <li>Destroys value.</li>
              <li>Gentle dust with soft brush only.</li>
              <li>Store in penny sleeves + top loaders.</li>
              <li>Cool, dry place.</li>
              <li>Out of sun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other sports cards</h3>
            <p className="text-sm text-muted-foreground">Same rules apply: <strong>basketball</strong> (Jordan rookie = $$$), <strong>football</strong>, <strong>hockey</strong>. <strong>Pokemon</strong> + <strong>Magic the Gathering</strong> exploded in value (1999 Pokemon Charizard = $400K). Check ALL old card collections before donating.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
