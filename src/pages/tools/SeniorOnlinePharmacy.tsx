import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorOnlinePharmacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Pharmacy for Seniors — TekSure" description="Best online pharmacies for seniors — Amazon Pharmacy, Mark Cuban Cost Plus, GoodRx." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Pharmacy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cheaper meds. Delivered to the door.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mark Cuban Cost Plus</h2><p>Often 50-90% cheaper than retail. costplusdrugs.com.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Pharmacy</h2><p>Free 2-day delivery for Prime. Compare to your insurance to see which costs less.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GoodRx</h2><p>Coupon app. Show at any pharmacy. Often beats insurance prices.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CVS / Walgreens app</h2><p>Refill prescriptions, schedule vaccines, transfer prescriptions to mail order.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Part D mail order</h2><p>Often 90-day fills with no copay. Call your plan to set up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch for fakes</h2><p>Use the FDA BeSafeRx site to verify any online pharmacy before buying.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Compare GoodRx, Cost Plus, and Amazon for every prescription. Prices vary wildly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
