import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cross } from 'lucide-react';

export default function SeniorPharmacyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pharmacy Apps — Senior Guide" description="Refill prescriptions and check prices from your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cross className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pharmacy Apps</h1>
          <p className="text-lg text-muted-foreground">Refill in seconds, not hours.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. CVS Pharmacy</h2><p>Refill, check status, get coupons. Free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Walgreens</h2><p>Tap pill bottle to scan and refill. Print photos at the store too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Walmart Pharmacy</h2><p>Lower prices on common generics. Refill from the Walmart app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. GoodRx</h2><p>Compare prices at every nearby pharmacy. Coupons can save 50-80% on generics.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Amazon Pharmacy</h2><p>Free delivery. Often cheaper. Especially good for monthly maintenance medications.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Mark Auto-Refill</h2><p>Many apps auto-refill regular medications. Less to remember.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pharmacist questions are free. Tap the chat or phone icon in any pharmacy app.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
