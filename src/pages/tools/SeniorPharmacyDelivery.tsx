import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function SeniorPharmacyDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pharmacy Delivery for Seniors — TekSure" description="Free pharmacy delivery — Amazon Pharmacy, CVS, Walgreens, Capsule." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pharmacy Delivery</h1>
          <p className="text-lg text-muted-foreground">Skip the trip.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Pharmacy</h2><p>FREE 2-day delivery for Prime members. Often cheapest.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PillPack by Amazon</h2><p>FREE. Pre-sorted by dose time. Game changer for 5+ meds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Capsule</h2><p>FREE same-day delivery in 30+ cities. Senior-friendly app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CVS Same-Day</h2><p>$10/order. Most areas. Use CVS Carepass for free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walgreens</h2><p>FREE for active 90-day prescriptions. Standard delivery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mail order</h2><p>Medicare Part D. Often $0 copay 90-day supply.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Free home delivery. Why drive to pharmacy?</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
