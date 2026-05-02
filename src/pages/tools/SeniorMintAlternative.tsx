import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function SeniorMintAlternative() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mint Alternatives — Senior Guide" description="Replace the closed Mint app for budgeting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mint Alternatives</h1>
          <p className="text-lg text-muted-foreground">Mint shut down — try these.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Credit Karma</h2><p>Mint's owner now offers similar features in Credit Karma. Free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Empower (formerly Personal Capital)</h2><p>Free. Strong investment tracking. Best if you have retirement accounts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Monarch Money</h2><p>$15/month. Made by ex-Mint engineers. Cleanest replacement.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Rocket Money</h2><p>Free. Cancels unused subscriptions. Spots fees for you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. YNAB</h2><p>$15/month. Best for those who want strict budgets.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Spreadsheets</h2><p>Excel, Google Sheets. Free, private, simple. Many seniors prefer this.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Try free options before paying. Most people only need to track spending — not budget every dollar.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
