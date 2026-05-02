import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

export default function SeniorTradeIn() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Trade-In Old Phones — Senior Guide" description="Get cash for old phones safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Recycle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Trade In Old Phones</h1>
          <p className="text-lg text-muted-foreground">Get cash for old devices.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Trade In</h2><p>Free quote at apple.com. Mail or in-store. Credit toward new device.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Carrier trade-ins</h2><p>Verizon, AT&T, T-Mobile offer big discounts on new phones with trade-in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Gazelle</h2><p>gazelle.com. Cash, not credit. Mail in your phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Decluttr</h2><p>Cash for phones, tablets, books, DVDs. Mail in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Best Buy</h2><p>Trade in for store credit. Sometimes promotions for extra value.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Wipe before sending</h2><p>Settings, General, Reset, Erase All Content. Removes your data.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Sign out of iCloud first. If you don't, the new owner can't activate it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
