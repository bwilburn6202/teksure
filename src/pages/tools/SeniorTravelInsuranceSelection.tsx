import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTravelInsuranceSelection() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Insurance Selection for Seniors — TekSure" description="Pick right travel insurance — Squaremouth, InsureMyTrip comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Insurance Selection</h1>
          <p className="text-lg text-muted-foreground">Critical for senior travel.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Medicare doesn&apos;t cover abroad. Medical evac alone $50,000+. Insurance essential.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Squaremouth</h2><p>FREE comparison. 30+ companies. &ldquo;Senior&rdquo; filter helpful.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">InsureMyTrip</h2><p>FREE. Side-by-side compare. Live phone help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pre-existing waiver</h2><p>Buy within 14 days of trip deposit. Critical for chronic conditions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cancel for any reason</h2><p>+$200-$500. Refund 50-75% if cancelled. Worth it for some.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>5-10% of trip cost typical. $5,000 trip = $250-$500 insurance.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Buy insurance day of first trip deposit. Locks in pre-existing protection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
