import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorDentalInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dental Insurance for Seniors — TekSure" description="Dental coverage for seniors — Medicare doesn't cover. Plans, options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dental Insurance for Seniors</h1>
          <p className="text-lg text-muted-foreground">Medicare doesn&apos;t cover dental.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Advantage</h2><p>Many plans include dental. Check yours. Often $1,000-$2,000/year coverage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stand-alone dental</h2><p>$15-$60/month. Delta Dental, Aetna, Humana common.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Discount plans</h2><p>$10/month. Not insurance. Just discounts at participating dentists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dental schools</h2><p>50-70% off. Supervised by professors. Quality care.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free clinics</h2><p>Mission of Mercy events. Local United Way.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mexican dental tourism</h2><p>Major work for less. Crowns $300 vs $1,500. Research carefully.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cleaning twice yearly. Cheap. Prevents $5,000 of future problems.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
