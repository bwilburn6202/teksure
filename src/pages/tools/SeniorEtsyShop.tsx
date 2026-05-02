import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorEtsyShop() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Etsy for Seniors — Senior Guide" description="Shop handmade goods on Etsy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Etsy</h1>
          <p className="text-lg text-muted-foreground">Handmade and vintage gifts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free account</h2><p>Sign up at etsy.com or get the app. Browse without an account too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type personalized keychain or grandkid name plaque. Filter by under $25.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Star Seller</h2><p>Sellers with a star badge ship fast and answer messages quickly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Shipping time</h2><p>Read shop's shipping policy. Custom items can take 2-4 weeks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Message seller</h2><p>Tap Contact Shop. Ask questions before buying. Most reply within a day.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Returns</h2><p>Etsy isn't Amazon — many handmade items are non-returnable. Read the policy first.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Etsy gift cards make grandkid gifts easy. They pick something they actually want.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
