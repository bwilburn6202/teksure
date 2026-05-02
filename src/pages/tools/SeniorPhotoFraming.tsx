import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Frame } from 'lucide-react';

export default function SeniorPhotoFraming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print &amp; Frame Photos for Seniors — TekSure" description="Print favorite photos — Framebridge, Mixtiles, Walgreens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Frame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print &amp; Frame Photos</h1>
          <p className="text-lg text-muted-foreground">Phone photos to walls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walgreens 1-hour</h2><p>$5-$15. Pickup in 1 hour. Fast for seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mixtiles</h2><p>$15 each. Sticky tiles. No frame, no nails. Senior-easy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Framebridge</h2><p>$60-$200. Custom framing. Upload from phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shutterfly</h2><p>Wall art deals. Often 50% off. Watch for sales.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print monthly</h2><p>1 favorite per month. 12 photos a year. Wall full.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo books</h2><p>Apple Books. Shutterfly. $20-$80 hardcover. Easy gifts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mixtiles are senior-friendly. Just stick on. Move anytime.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
