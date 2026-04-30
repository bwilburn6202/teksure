import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function MonarchMoneyForSeniorBudget() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Monarch Money for Senior Budgeting | TekSure" description="Mint replacement for senior budgeting. Monarch Money guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Monarch Money</h1>
          <p className="text-lg text-muted-foreground">Mint replacement for seniors.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why Monarch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mint shut down 2024.</li><li>Monarch is best replacement.</li><li>$15/month or $100/year.</li><li>Connects all accounts.</li><li>Net worth tracking.</li><li>Senior friendly UI.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>MonarchMoney.com.</li><li>14-day free trial.</li><li>Connect bank, credit, retirement.</li><li>Plaid handles security.</li><li>Auto-categorizes spending.</li><li>30 min setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Net worth dashboard.</li><li>See all accounts in one.</li><li>Spending by category.</li><li>Bills + due dates.</li><li>Goals tracking.</li><li>Couple sharing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Empower (Personal Capital) — free.</li><li>YNAB — $99/yr (envelope budgeting).</li><li>Rocket Money.</li><li>Bank&apos;s built-in tools.</li><li>Senior choice.</li><li>Try free trials.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plaid encrypts data.</li><li>Read-only access.</li><li>Can&apos;t move money.</li><li>Senior reasonable.</li><li>Cancel cancels access.</li><li>Trust-based.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start with main accounts.</li><li>Add gradually.</li><li>Customize categories.</li><li>Budget retirement spend.</li><li>Track withdrawals.</li><li>Spend confidently.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Net worth view = senior peace</h3><p className="text-sm text-muted-foreground">Seeing all accounts in one place reassures retirees. Monarch $100/yr or free Empower do this. Track spending vs budget. Net worth trending up = peaceful. Many seniors check daily for quick reassurance. Worth the subscription.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
