import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTravelInsuranceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Insurance Apps for Seniors — TekSure" description="Best travel insurance apps for seniors — compare quotes and file claims by phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Insurance Apps</h1>
          <p className="text-lg text-muted-foreground">Protect your trip — compare quotes by phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors need it</h2><p>Medicare doesn&apos;t cover you outside the U.S. A medical evacuation can cost $50,000+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Squaremouth</h2><p>Compare 30+ insurers in one quote. Free to use. Filter by &ldquo;senior friendly&rdquo; and pre-existing conditions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">InsureMyTrip</h2><p>Side-by-side comparison. Live phone support. Excellent for first-time buyers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Allianz TravelSmart</h2><p>App tracks flights, files claims with photos, finds nearby hospitals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to cover</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Trip cancellation</li><li>Medical & evacuation</li><li>Lost baggage</li><li>Pre-existing condition waiver</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Buy within 14 days</h2><p>Buy within 14 days of your first deposit to get the pre-existing condition waiver.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Read the policy aloud — if a word is unclear, call and ask. Agents are paid to explain.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
