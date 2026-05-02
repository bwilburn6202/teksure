import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { House } from 'lucide-react';

export default function SeniorRealEstate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Real Estate Apps for Seniors — Senior Guide" description="Find homes online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <House className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Real Estate Apps</h1>
          <p className="text-lg text-muted-foreground">Find homes from your couch.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Zillow</h2><p>Free. Most listings. Estimated values (Zestimate). Free for browsing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Realtor.com</h2><p>Free. Direct from MLS. More accurate listings than some sites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Redfin</h2><p>Free. Lower commission rate if you sell with them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Active adult communities</h2><p>55places.com, Topretirements.com. Senior-specific listings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Saved searches</h2><p>Set price/area filters. App alerts when matching homes hit market.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Mortgage calculator</h2><p>Most apps include one. Estimate monthly payment before falling in love.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Beware listing scams. Real homes don't ask for wire transfers before viewing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
