import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorYogaSilverSneakers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SilverSneakers — Senior Guide" description="Use SilverSneakers for free fitness classes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SilverSneakers</h1>
          <p className="text-lg text-muted-foreground">Free fitness through Medicare.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check eligibility</h2><p>Many Medicare Advantage plans cover free SilverSneakers. Check at silversneakers.com.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. 15,000+ gyms</h2><p>Anytime Fitness, YMCA, Planet Fitness — all included. No extra cost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. SilverSneakers GO app</h2><p>Free app. Senior-friendly workout videos. 10-30 minutes each.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Live online classes</h2><p>Yoga, Tai Chi, balance, strength. From a chair if needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. SilverSneakers Class</h2><p>In-person classes at gyms. Designed for older adults. Modifications offered.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Renew Active</h2><p>UnitedHealthcare's version of SilverSneakers. Same idea — check your plan.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Even 10 minutes of daily movement reduces risk of falls. SilverSneakers makes it easy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
