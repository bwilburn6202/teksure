import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function SeniorBudgetingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Budgeting Apps — Senior Guide" description="Track money and budget with apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Budgeting Apps</h1>
          <p className="text-lg text-muted-foreground">Track every dollar, simply.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Rocket Money</h2><p>Free version cancels unused subscriptions. Spots fees you didn't know about.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. YNAB</h2><p>You Need a Budget. $14.99/month. Best for retirement budgeting on fixed income.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Monarch Money</h2><p>$14.99/month. Replaces the closed Mint app. Tracks all your accounts in one place.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Empower</h2><p>Free. Track investments and net worth. Good if you have retirement accounts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. EveryDollar</h2><p>By Dave Ramsey. Free version. Simple zero-based budgeting.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Spreadsheets</h2><p>Excel or Google Sheets work too. Free, private, no account links needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Whatever you pick, review it weekly. Budgets only work if you actually look at them.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
