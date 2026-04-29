import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coins } from 'lucide-react';

const APPS = [
  { name: 'PCGS CoinFacts', cost: 'FREE', best: 'Most reliable US coin info. Photos of every grade. Pop reports.', good: 'Best free reference.' },
  { name: 'NGC App', cost: 'FREE', best: 'Competing top grading service. Coin lookup.', good: 'Pair with PCGS.' },
  { name: 'CoinSnap', cost: 'Free; Premium', best: 'Photograph any coin → identify + estimated value.', good: 'For quick check.' },
  { name: 'Numista', cost: 'FREE', best: 'World coin catalog. Crowdsourced.', good: 'Best for foreign coins.' },
  { name: 'eBay sold listings', cost: 'FREE', best: 'See what coins ACTUALLY sold for, not asking price.', good: 'Best real-world price check.' },
  { name: 'GreatCollections / Heritage Auctions', cost: 'FREE archives', best: 'Past auction prices for high-end coins.', good: 'For certified coins.' },
];

export default function CoinCollectingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coin Collecting Apps — PCGS, NGC, Numista | TekSure" description="Identify, value, and track your coin collection. Plain-English picks for the best free coin apps and what your old coins are really worth." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coins className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coin Collecting Apps</h1>
          <p className="text-lg text-muted-foreground">What\'s grandpa\'s coin collection actually worth?</p>
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
            <h2 className="font-bold text-xl mb-3">Honest truth about old coin collections</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most pre-1965 silver dimes/quarters are worth 10-15x face value (silver content alone).</li>
              <li>Wheat pennies (pre-1959) — most worth 3-10 cents each.</li>
              <li>Buffalo nickels — most worth $1-5 unless rare date.</li>
              <li>Most "mint sets" and "proof sets" — worth slightly more than face. Coin shops won\'t pay much.</li>
              <li>Rare coins exist but are few. Photos to a numismatist can quickly identify if something is special.</li>
              <li><strong>Don\'t clean coins!</strong> — destroys value. Even old "tarnished" coins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to sell</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local coin show</strong> — multiple dealers compete. Often best price.</li>
              <li><strong>Reputable local coin shop</strong> — vetted via NGC.com Authorized Dealer search.</li>
              <li><strong>GreatCollections, Heritage Auctions</strong> — for valuable certified coins.</li>
              <li><strong>eBay</strong> — best for individual coins $20-1000, but learn to grade first.</li>
              <li><strong>PCGS / NGC submissions</strong> — get certified for sale at top auctions ($30+ per coin grading fee).</li>
              <li><strong>Avoid TV "buy your gold" services</strong> — usually 30-50% of real value.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For inherited collections</h3>
            <p className="text-sm text-muted-foreground">Don\'t panic-sell to first buyer. Get a free quote from 3 dealers. Strongly consider taking valuable pieces to a coin show. Keep collection records — older PCGS slabs sell for premium.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
