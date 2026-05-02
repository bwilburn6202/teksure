import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorTravelClubs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Clubs for Seniors — TekSure" description="AAA, Costco Travel, AARP travel — senior travel clubs and discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Clubs</h1>
          <p className="text-lg text-muted-foreground">Save more. Worry less.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AAA</h2><p>$60-$120/year. Roadside + travel discounts. TripTik maps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Costco Travel</h2><p>FREE for members. Vacation packages. Often best value.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Travel</h2><p>$16/year membership. Travel discounts often pay back $200+/year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sam&apos;s Club Travel</h2><p>FREE for members. Cruise and resort discounts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">USAA Travel</h2><p>FREE for veterans/military. Strong discounts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare always</h2><p>Get quote from one club. Compare to direct booking. Pick cheapest.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AAA pays for itself with one rental car or one tow.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
