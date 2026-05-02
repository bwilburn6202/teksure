import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function SeniorVrboBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vrbo for Seniors — Senior Guide" description="Book whole vacation homes with Vrbo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vrbo</h1>
          <p className="text-lg text-muted-foreground">Whole-home rentals only.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Whole homes</h2><p>Vrbo only lists entire houses or condos. No shared spaces. Good for family trips.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type destination and dates. Filter for hot tub, pool, or pets allowed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Read full description</h2><p>Some homes have stairs or no air conditioning. Check the details carefully.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Book Premier Hosts</h2><p>The badge means highly rated. Safer pick.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pay only on Vrbo</h2><p>Never wire money outside. Use the app for protection.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Read cancel policy</h2><p>Some are strict (no refund close to date). Others are flexible. Check before booking.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Vrbo is owned by Expedia. Same company also owns Hotels.com and Travelocity.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
