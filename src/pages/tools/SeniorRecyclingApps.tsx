import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle } from 'lucide-react';

export default function SeniorRecyclingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recycling Apps — Senior Guide" description="Recycle correctly with apps that help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Recycle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recycling Apps</h1>
          <p className="text-lg text-muted-foreground">Recycle the right way.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iRecycle</h2><p>Free. Type item. Find local recycling option for batteries, paint, electronics.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Earth911</h2><p>Free at earth911.com. Search recycling near you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Local hauler</h2><p>Search [your city] recycling. Most offer free apps with pickup schedules.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pharmacy take-back</h2><p>CVS, Walgreens take old medications. Apps show nearest drop locations.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Old electronics</h2><p>Best Buy recycles for free. App shows what they accept.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Donate first</h2><p>Goodwill or Habitat ReStore for working items. Apps show local drop-offs.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Wishcycling — putting non-recyclables in the bin — actually hurts. Apps tell you what your city accepts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
