import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorKitchenAids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kitchen Aids for Seniors — TekSure" description="Senior-friendly kitchen tools — jar openers, easy-grip utensils." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kitchen Aids for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cook safely and easily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Electric jar opener</h2><p>$30. Hamilton Beach Open Ease. Press button. Lid off.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy-grip utensils</h2><p>$30 set. OXO Good Grips. Bigger handles for arthritis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rocker knife</h2><p>$15. Roll instead of cut. One-handed cooking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reacher tool</h2><p>$15. Get items from high shelves without ladder. 33 inches.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lazy Susan</h2><p>$20. In cabinet, refrigerator. Spin to find items.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pull-out drawers</h2><p>$50/each. Install in lower cabinets. No more bending and reaching.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $100 of senior kitchen aids = real independence in cooking.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
