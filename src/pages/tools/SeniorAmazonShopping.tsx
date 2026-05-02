import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function SeniorAmazonShopping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Shopping — Senior Guide" description="Shop Amazon safely with Prime tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Shopping</h1>
          <p className="text-lg text-muted-foreground">Smart Amazon shopping for seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Prime membership</h2><p>$139/year or $14.99/month. Free 2-day shipping plus Prime Video.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sold by Amazon</h2><p>Stick to items shipped and sold by Amazon. Skip third-party sellers when possible.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Reviews</h2><p>Look for items with 4+ stars and 100+ reviews. Read 1-star reviews to spot dealbreakers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Subscribe & Save</h2><p>5-15% off paper towels, vitamins, dog food. Skip or cancel anytime.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Easy returns</h2><p>Most items return free at any Whole Foods, Kohl's, or UPS. No box, no label.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Watch for fakes</h2><p>If you get a text saying Amazon needs payment info, ignore it. Real Amazon never texts that.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Amazon Day delivery groups orders into one weekly delivery — fewer boxes at the door.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
