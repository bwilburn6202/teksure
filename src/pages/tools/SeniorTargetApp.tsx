import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorTargetApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Target App for Seniors — TekSure" description="Target app tips for seniors — Circle savings, drive-up, RedCard discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Target App for Seniors</h1>
          <p className="text-lg text-muted-foreground">Save more at Target.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Target Circle (FREE)</h2><p>Free rewards. 1% back. Birthday discount. Personalized offers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drive Up</h2><p>FREE. Order online. Park at Target. They bring it to your trunk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RedCard</h2><p>5% off everything. Free shipping. Apply for credit or debit version.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Same-day delivery</h2><p>Shipt delivery for $9.99/order. Fresh groceries to door.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cartwheel coupons</h2><p>Built into app. Auto-applies at checkout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wallet pay</h2><p>Pay with phone via Wallet feature. RedCard built in.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Stack Circle offer + RedCard 5% + manufacturer coupon. Triple savings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
