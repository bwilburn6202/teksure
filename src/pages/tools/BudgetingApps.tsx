import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

const APPS = [
  { name: 'Empower (Personal Capital)', cost: 'FREE', best: 'Best free tool. Connects all accounts. Net worth + retirement projection.', good: 'Best overall.' },
  { name: 'Monarch Money', cost: '$100/yr', best: 'Mint replacement. Full budgeting + investing. Senior-friendly.', good: 'Best paid.' },
  { name: 'YNAB (You Need a Budget)', cost: '$15/mo', best: 'Best budget mindset. Steeper learning curve but transformative.', good: 'Best for budgeters.' },
  { name: 'Copilot', cost: '$95/yr', best: 'Beautiful iPhone-first app. Great UI.', good: 'Best UI.' },
  { name: 'Pen + paper', cost: 'FREE', best: 'Old-school works. Pencil register, monthly summary.', good: 'Best non-tech.' },
  { name: 'Spreadsheet (Excel/Numbers)', cost: 'FREE', best: 'Custom + private. Many seniors prefer this.', good: 'Best private.' },
];

export default function BudgetingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Budgeting Apps for Seniors | TekSure" description="Empower, Monarch, YNAB. Plain-English picks for senior-friendly budgeting + retirement-tracking apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Budgeting Apps</h1>
          <p className="text-lg text-muted-foreground">See where money goes. Stay on track.</p>
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
            <h2 className="font-bold text-xl mb-3">Mint shut down 2024</h2>
            <p className="text-sm">Intuit closed Mint. Many users moved to Monarch (paid) or Empower (free). If you used Mint — try Empower first. Free, similar features, no migration anxiety.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior priorities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Track spending</strong> — discover the $300/mo "leaks" (subscriptions, dining out).</li>
              <li><strong>Net worth</strong> — across all accounts.</li>
              <li><strong>Retirement runway</strong> — am I on track?</li>
              <li><strong>Tax-loss harvesting reminders</strong>.</li>
              <li><strong>RMD reminders</strong> — required minimum distributions.</li>
              <li><strong>Bill payment alerts</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Connection security</h3>
            <p className="text-sm text-muted-foreground">All these apps use Plaid (or similar) to read-only connect to banks. They CAN&apos;T move money. Legitimate. But pick well-reviewed apps. Avoid sketchy ones — banking credentials are sensitive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
