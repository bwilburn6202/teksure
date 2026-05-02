import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorTireInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Insurance &amp; Roadside for Seniors — TekSure" description="Auto club apps — AAA, Allstate, Geico for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Roadside help. Insurance claims.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AAA app</h2><p>FREE for members. Roadside service request. Hotel discounts. TripTik maps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Allstate Drivewise</h2><p>FREE app. Track driving for safe-driver discounts. 10-25% off premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Geico Drive Easy</h2><p>FREE. Same idea as Allstate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">State Farm Drive Safe</h2><p>FREE. Up to 30% discount for safe seniors who drive less.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">File claims by phone</h2><p>All major insurers have apps. Photos of damage. Faster settlement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior discounts</h2><p>Most insurers offer 5-10% senior discount. Just ask.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many seniors save $300+/year switching from full to safe-driver tracked plans.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
