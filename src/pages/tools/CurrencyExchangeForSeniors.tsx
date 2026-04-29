import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function CurrencyExchangeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Currency Exchange for Senior Travelers | TekSure" description="Best way to get foreign currency for seniors. Avoid bad exchange rates and high fees." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Currency Exchange</h1>
          <p className="text-lg text-muted-foreground">Get foreign money without losing too much.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best option: local ATM abroad</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use ATM at your destination — best rates.</li>
              <li>Local banks give real exchange rate.</li>
              <li>Withdraw enough for a few days.</li>
              <li>Airport ATMs fine — avoid airport exchange booths.</li>
              <li>Notify your bank before traveling.</li>
              <li>Bring two ATM cards in case one blocked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cards that waive foreign fees</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Charles Schwab debit card — no foreign ATM fees.</li>
              <li>Capital One — no foreign transaction fees.</li>
              <li>Chase Sapphire — no foreign transaction fees.</li>
              <li>Regular debit cards: 3% foreign transaction fee.</li>
              <li>Worth getting a travel-friendly card before trip.</li>
              <li>Ask your bank: &quot;What are your foreign ATM fees?&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Airport currency exchange booths — very bad rates.</li>
              <li>Hotel exchange desks — also poor rates.</li>
              <li>Buying US currency before leaving — lose 10–15%.</li>
              <li>Dynamic currency conversion — say NO at the register.</li>
              <li>&quot;Pay in USD&quot; option abroad — always say NO.</li>
              <li>Small currency exchange shops in tourist areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wise app (sending money abroad)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wise — great exchange rates for transfers.</li>
              <li>Send money internationally with low fees.</li>
              <li>Wise debit card — use like ATM card abroad.</li>
              <li>Free to download and set up.</li>
              <li>Good if you help family abroad.</li>
              <li>Not needed for casual tourist travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">XE Currency app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — check exchange rates instantly.</li>
              <li>Type dollar amount, see local currency equivalent.</li>
              <li>Know if a price is reasonable.</li>
              <li>Works offline with last saved rates.</li>
              <li>Available on iPhone and Android.</li>
              <li>No account needed — just open and use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much cash to bring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many countries still cash-heavy (Greece, Italy, Japan).</li>
              <li>$100–$200 US dollars as emergency backup.</li>
              <li>Use ATM at destination for local cash.</li>
              <li>Keep small bills for tips, taxis, markets.</li>
              <li>Split cash — don&apos;t keep it all in one place.</li>
              <li>Credit card for big purchases — better fraud protection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Simple plan for most trips</h3>
            <p className="text-sm text-muted-foreground">Tell your bank you&apos;re traveling. Land at your destination, use the airport ATM to get a few hundred in local currency. Use your credit card (no foreign fee type) for big purchases. Check rates on XE Currency app when you&apos;re unsure about prices. Never exchange money at the airport booth — that&apos;s how travelers lose 15% of their money instantly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
