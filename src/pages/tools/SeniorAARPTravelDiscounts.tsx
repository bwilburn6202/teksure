import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorAARPTravelDiscounts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Travel Discounts — TekSure" description="Hidden AARP travel discounts — hotels, rental cars, flights, cruises." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Travel Discounts</h1>
          <p className="text-lg text-muted-foreground">Save with $16/year membership.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hotels</h2><p>10% off Best Western, Hilton, Hyatt, Wyndham. Often beats other discounts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rental cars</h2><p>Up to 30% off Avis, Budget, Payless. Big savings on long rentals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">British Airways</h2><p>$200 off international flights for AARP members.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cruises</h2><p>Up to $150 onboard credit. Royal Caribbean, Princess, Holland America.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trains</h2><p>Amtrak: 10% off when booked 3+ days early.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worth it</h2><p>One $20 hotel discount = $4 net cost of membership for the year.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Visit aarp.org/travel before any travel booking. Compare to other discounts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
