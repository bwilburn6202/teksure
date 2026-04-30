import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coins } from 'lucide-react';

const APPS = [
  { name: 'Rakuten', cost: 'FREE', best: 'Browser extension. Works at 3,500+ stores. 1-10% cashback.', good: 'Best overall.' },
  { name: 'Honey', cost: 'FREE', best: 'Auto-applies coupons + cashback. Owned by PayPal.', good: 'Best for coupons.' },
  { name: 'Ibotta', cost: 'FREE', best: 'Grocery rebates. Walmart, Target, Kroger.', good: 'Best for groceries.' },
  { name: 'Fetch Rewards', cost: 'FREE', best: 'Scan ANY receipt. Earn points for gift cards.', good: 'Best receipt app.' },
  { name: 'Capital One Shopping', cost: 'FREE', best: 'Don&apos;t need Cap One card. Browser tool finds deals.', good: 'Best comparison.' },
];

export default function CashbackAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cashback Apps for Seniors | TekSure" description="Earn money on shopping you already do. Plain-English picks for senior cashback apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coins className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cashback Apps</h1>
          <p className="text-lg text-muted-foreground">Free $200-1,000/year on shopping you do anyway.</p>
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
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up free (no credit card required).</li>
              <li>Use app/extension when shopping.</li>
              <li>Earn percentage back as cash.</li>
              <li>Quarterly check or PayPal.</li>
              <li>Cashback stacks with credit card rewards.</li>
              <li>Stack: Rakuten + credit card cashback + sale = 15-25% off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy senior setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Install Rakuten browser extension.</li>
              <li>Pop-up reminds you when stores have cashback.</li>
              <li>Click &quot;Activate&quot; — done.</li>
              <li>Shop normally.</li>
              <li>Cashback shows up automatically.</li>
              <li>Quarterly check mailed or via PayPal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps by category</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Online shopping</strong> — Rakuten + Honey.</li>
              <li><strong>Groceries</strong> — Ibotta + Fetch Rewards.</li>
              <li><strong>Drugstore</strong> — Ibotta CVS/Walgreens.</li>
              <li><strong>Travel</strong> — Rakuten on Booking.com, Hotels.com.</li>
              <li><strong>Gas</strong> — Upside (free, $0.05-0.25/gal).</li>
              <li><strong>Restaurant</strong> — Dosh, Drop apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy + scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>These apps see what you buy — opt out of data sharing.</li>
              <li>Don&apos;t link bank account if not needed.</li>
              <li>Skip if asks for SSN or bank PIN — RED FLAG.</li>
              <li>NEVER auto-pay through them — only earn cashback.</li>
              <li>Real cashback can take 30-90 days to credit.</li>
              <li>Report fake offers via app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best credit cards for seniors</h3>
            <p className="text-sm text-muted-foreground">Stack with credit cards: <strong>Costco Citi Visa</strong> — 4% gas, 3% restaurants/travel. <strong>Discover It</strong> — 5% rotating + 1% all. <strong>Bank of America Customized Cash</strong> — 3% choose category. Free + senior-friendly. Pay statement balance monthly to avoid interest.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
