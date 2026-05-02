import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorTSAGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA Tips for Senior Travelers — TekSure" description="TSA tips for 75+ — keep shoes on, easier screening, oxygen, meds." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA Tips for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier screening.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">75+ benefits</h2><p>Keep shoes on. Keep light jacket on. Special line at some airports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TSA Cares</h2><p>FREE. Call 855-787-2227 72 hrs ahead. Officer helps you through.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medications</h2><p>OK in carry-on. Don&apos;t need original bottles. Liquid meds allowed in any quantity.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pacemaker</h2><p>Skip body scanner. Get pat-down instead. Tell agent.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Oxygen</h2><p>Portable concentrators allowed. Print FAA approval letter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mobility devices</h2><p>Wheelchair, walker, cane all fine. Stay in own chair.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use TSA Cares 72 hrs before. Whole airport experience easier.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
