import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function SeniorBudgetingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Budgeting Apps for Seniors — TekSure" description="Best budgeting apps for retired seniors on a fixed income." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Budgeting Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Track spending. Stretch retirement income.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Monarch Money</h2><p>$15/month. Replaced Mint. Tracks all accounts in one place.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YNAB</h2><p>$15/month. Best for active budgeters. Free for college students.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EveryDollar</h2><p>Free version. By Dave Ramsey. Simple envelope-style budgeting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PocketGuard</h2><p>Free. Shows &ldquo;In My Pocket&rdquo; — what you have left to spend safely.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spreadsheet</h2><p>Free. Google Sheets or Excel. Lots of free senior templates online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read-only access</h2><p>Apps connect to banks read-only — they cannot move money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Track 30 days. You&apos;ll spot at least one $20-$50/month expense to cut.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
