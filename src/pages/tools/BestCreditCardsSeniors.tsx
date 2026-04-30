import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const PICKS = [
  { name: 'Costco Citi Visa', cost: 'FREE (with Costco)', best: '4% gas, 3% restaurants/travel, 2% Costco. Best senior card.', good: 'Best overall.' },
  { name: 'Chase Freedom Unlimited', cost: 'FREE', best: '1.5% all + 5% travel/dining via Chase portal.', good: 'Best simple.' },
  { name: 'Discover It', cost: 'FREE', best: '5% rotating + first-year cashback match.', good: 'Best rotating.' },
  { name: 'Bank of America Premium Rewards', cost: '$95/yr', best: '2% all + 50% bonus if BOA Preferred Rewards.', good: 'Best premium.' },
  { name: 'Capital One Venture', cost: '$95/yr', best: '2X miles all. Travel + dining bonuses.', good: 'Best travel.' },
];

export default function BestCreditCardsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Credit Cards for Seniors | TekSure" description="Top cashback + travel cards. Plain-English picks for senior wallets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Credit Cards for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cashback. Fraud protection. Use wisely.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why credit beats debit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fraud protection — credit company fights bad charges.</li>
              <li>NOT your money at risk during fraud (debit IS your money).</li>
              <li>Earn 2-5% cashback.</li>
              <li>Builds credit score.</li>
              <li>Pay full balance monthly = NO interest.</li>
              <li>Use credit, never carry balance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1-2 cards is enough.</li>
              <li>One cashback (Costco/Discover).</li>
              <li>One travel card if traveling.</li>
              <li>Auto-pay full statement balance monthly.</li>
              <li>Keep oldest card open (helps credit score).</li>
              <li>NEVER carry balance — 25-29% interest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Store cards (high interest, limited use).</li>
              <li>Annual fee not justified by use.</li>
              <li>Subprime cards if good credit.</li>
              <li>Cards from places you don&apos;t shop.</li>
              <li>Don&apos;t open many at once (hurts credit).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Authorized user — let trusted family help (not joint).</li>
              <li>Credit alert system (free).</li>
              <li>Spending limits via bank app.</li>
              <li>Lock card via app if suspicious.</li>
              <li>Auto-lock for cards rarely used.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-favorite combo</h3>
            <p className="text-sm text-muted-foreground">If Costco member: <strong>Costco Citi Visa (free)</strong> + <strong>Discover It (free)</strong>. Both free. 4% gas, 3% restaurants, 2% Costco, 5% rotating categories. Most seniors covered. Annual cashback $200-1,000.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
