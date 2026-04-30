import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function CurrencyExchangeForSeniorTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Currency Exchange for Senior Travelers | TekSure" description="Best ways to get foreign currency. Senior travel money guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Currency Exchange</h1>
          <p className="text-lg text-muted-foreground">Senior travel money.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid airport kiosks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Worst rates.</li><li>10%+ markup.</li><li>Senior never use.</li><li>Better options exist.</li><li>Last resort only.</li><li>$50 wasted typically.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ATM abroad</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best rates usually.</li><li>Bank fees may apply.</li><li>Senior $200-$400 at time.</li><li>Charles Schwab refunds ATM fees.</li><li>Best senior account.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">No-foreign-fee credit card</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Capital One Venture.</li><li>Chase Sapphire Preferred.</li><li>Senior travel essential.</li><li>3% fee saved.</li><li>$300 trip = $9 saved.</li><li>Get one.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wise app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Send money abroad cheap.</li><li>Real exchange rate.</li><li>Multi-currency account.</li><li>Senior international family.</li><li>Free or cheap.</li><li>Best Western Union alternative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cash backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200 USD.</li><li>Get from local bank.</li><li>Emergency only.</li><li>Senior peace.</li><li>Don&apos;t carry lots.</li><li>Money belt.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Always pay in local</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Decline DCC.</li><li>&quot;Charge in local currency.&quot;</li><li>Senior 3-5% saved.</li><li>DCC = bad rate.</li><li>Always pay in local.</li><li>Free saved.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">No-fee card + ATM = senior best rates</h3><p className="text-sm text-muted-foreground">Senior best travel money: no-foreign-fee credit card (Capital One Venture) for purchases + ATM withdrawals abroad for cash. Always pay in local currency (decline DCC). Charles Schwab refunds ATM fees. Skip airport kiosks 10% markup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
