import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorAutoApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Apps for Seniors — Senior Guide" description="Apps for car maintenance and shopping." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Apps</h1>
          <p className="text-lg text-muted-foreground">Help with the car.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AAA Mobile</h2><p>If a member, request roadside service. Tow truck on the way fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. CarMax</h2><p>Buy and sell cars. Get cash offer in 5 minutes from photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Carfax</h2><p>$40 vehicle history. Worth it before buying any used car.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. RepairPal</h2><p>Estimate fair price for any car repair. Avoid shop overcharges.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Geico/Progressive/USAA apps</h2><p>File claims fast. Photograph damage. Tow request from app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. AARP Driver Safety</h2><p>$25 online course. Most insurers give a 5-10% discount after.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Senior driving — check vision yearly. Doctor signs DMV form to keep license.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
