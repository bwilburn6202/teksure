import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt } from 'lucide-react';

export default function SeniorPoshmark() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Poshmark for Seniors — Senior Guide" description="Sell clothing and accessories on Poshmark." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shirt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Poshmark</h1>
          <p className="text-lg text-muted-foreground">Sell clothing closet items.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free signup</h2><p>App focuses on clothing and accessories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Photograph items</h2><p>4 photos. Good light. Hang or lay flat. Note any flaws.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Honest sizing</h2><p>Note actual measurements. Returns rare on Poshmark, so accuracy matters.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Posh Parties</h2><p>Daily themed sharing events. Boost visibility of items.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Prepaid shipping</h2><p>Buyer pays $7.45. Print label and drop at any USPS.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. 20% fee</h2><p>Poshmark takes 20% of sales over $15. Smaller fee under that.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Mercari is similar. Sell anything (not just clothes). Try both.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
