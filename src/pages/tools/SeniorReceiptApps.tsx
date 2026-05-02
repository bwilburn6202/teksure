import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function SeniorReceiptApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Receipt Tracking Apps for Seniors — TekSure" description="Save receipts on phone — Receipt Hog, Fetch, Smart Receipts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Receipt Tracking</h1>
          <p className="text-lg text-muted-foreground">Save receipts. Earn cash back.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fetch Rewards</h2><p>FREE. Snap any receipt. Earn points for gift cards.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Receipt Hog</h2><p>FREE. Coins for receipts. Cash out for PayPal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ibotta</h2><p>FREE. Cash back at grocery, drug store, big box. Earnings $200+/year typical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart Receipts</h2><p>FREE. For tax/business records. PDF export.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Notes</h2><p>FREE. Scan receipts → Notes folder &ldquo;Tax 2026.&rdquo; Searchable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Expensify</h2><p>FREE personal. Best for self-employed seniors with deductions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Snap receipt before leaving the store. Easy to forget at home.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
