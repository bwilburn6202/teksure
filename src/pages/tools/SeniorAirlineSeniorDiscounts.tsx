import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorAirlineSeniorDiscounts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airline Senior Discounts — TekSure" description="Senior airfare discounts — Southwest, Delta, United, AARP perks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airline Senior Discounts</h1>
          <p className="text-lg text-muted-foreground">Hidden senior fares.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Southwest 65+</h2><p>Senior fares always available. Often higher than Wanna Get Away — but fully refundable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">British Airways AARP</h2><p>$200 off international for AARP members. Significant savings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Delta SkyMiles</h2><p>Free to join. Build miles. Get free flights eventually.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">United MileagePlus</h2><p>Free. Same idea.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tuesday/Wednesday flights</h2><p>20-30% cheaper than weekend. Book mid-week travel.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Flights</h2><p>FREE. Compare ALL airlines. Find best dates.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Always check senior fare directly with airline. Sometimes beats discount sites.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
