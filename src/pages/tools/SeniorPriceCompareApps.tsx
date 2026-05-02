import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorPriceCompareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Price Comparison Apps for Seniors — TekSure" description="Find lowest prices online — Google Shopping, ShopSavvy, Camelcamelcamel." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Price Comparison Apps</h1>
          <p className="text-lg text-muted-foreground">Never overpay again.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Shopping</h2><p>FREE. Type any product. See prices at every retailer. Filter by free shipping.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Camelcamelcamel</h2><p>FREE. Tracks Amazon prices over time. Don&apos;t buy when prices are spiked.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ShopSavvy</h2><p>FREE. Scan barcode in store. See online prices instantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PriceGrabber</h2><p>FREE. Compare across multiple US retailers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slickdeals</h2><p>FREE. Community-found deals. $20-$200 off common products.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CamelCamelCamel chrome</h2><p>FREE browser extension. Shows Amazon price history on every product page.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 5 minutes of comparison saves $20+ on most $100 purchases.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
