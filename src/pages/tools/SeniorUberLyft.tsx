import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorUberLyft() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Uber & Lyft for Seniors — TekSure" description="How seniors use rideshare safely — request rides, share trips, save money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Uber &amp; Lyft for Seniors</h1>
          <p className="text-lg text-muted-foreground">A ride at the tap of a button.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pick one app</h2><p>Uber and Lyft work the same way. Try both and pick your favorite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First-time setup</h2><p>Download the app. Enter your name, email, phone, and credit card. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Request a ride</h2><p>Type destination. Pick &ldquo;UberX&rdquo; (cheapest). See price up front. Tap &ldquo;Confirm.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verify driver</h2><p>App shows car make, color, license plate. Always check before getting in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share your trip</h2><p>Tap &ldquo;Share trip&rdquo; to text a family member your live route.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior options</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>GoGoGrandparent — call to book a ride, no app needed</li><li>Lyft Senior phone-based booking</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tipping is in the app — no cash needed. 15-20% standard.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
