import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorEtsyShop() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Etsy for Seniors — TekSure" description="Sell handmade or vintage items on Etsy — senior-friendly setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Etsy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sell crafts, vintage, art.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What sells well</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Knitted/crochet items</li><li>Quilts</li><li>Woodworking</li><li>Vintage jewelry</li><li>Handmade cards</li><li>Custom art</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Costs</h2><p>$0.20 per listing. 6.5% transaction fee. PayPal/credit card fees too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Visit etsy.com/sell. Follow the steps. Took most sellers 1-2 hours total.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photography</h2><p>Phone in good window light is enough. Take 5+ angles per item.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shipping</h2><p>Etsy buys postage at discount rates. Print labels at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real story</h2><p>Many retired seniors earn $500-$3,000/month on Etsy. Hobby that pays.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Search Etsy for items like yours. Price 10% lower to start. Raise after first sales.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
