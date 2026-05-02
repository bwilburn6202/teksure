import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorHolidayTravelTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Holiday Travel Tech for Seniors — TekSure" description="Travel apps for the holidays — flights, gifts, packing lists." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Holiday Travel Tech</h1>
          <p className="text-lg text-muted-foreground">Visit family. Stress-free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Flight tracker</h2><p>Flighty (paid) or Flightradar24 (free). Track flights and delays.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Maps offline</h2><p>Download maps before flying. Free offline navigation in unfamiliar cities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mobile boarding</h2><p>Save boarding pass in Apple Wallet or Google Wallet. Print one as backup.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Send gifts ahead</h2><p>Order from Amazon, ship directly to family&apos;s house. No suitcase juggling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PackPoint</h2><p>FREE app. Tells you what to pack based on destination weather.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Power banks</h2><p>10,000 mAh battery $20. 2-3 phone charges. Lifesaver in airports.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print itinerary on paper. Phones die. Paper backup saves the day.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
