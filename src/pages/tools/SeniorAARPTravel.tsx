import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorAARPTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Travel Center — Senior Guide" description="Book travel with AARP discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Travel Center</h1>
          <p className="text-lg text-muted-foreground">Senior travel deals.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP Travel</h2><p>aarp.org/travel. Hotel, car, flight discounts for members.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Hotels</h2><p>10% off Wyndham, Best Western, Choice Hotels. Just enter AARP at booking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Car rentals</h2><p>30% off Avis, Budget. 25% off Payless. Always show AARP card at counter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Cruises</h2><p>Discounts on Norwegian, Holland America. Onboard credit too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Trip planners</h2><p>aarp.org/travel/trips has senior road trip ideas. Plain English itineraries.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Travel insurance</h2><p>Allianz partners with AARP. Often cheaper than buying direct.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>$16/year membership. One trip with discounts pays for itself.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
