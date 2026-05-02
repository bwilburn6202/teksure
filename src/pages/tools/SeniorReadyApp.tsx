import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorReadyApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ready.gov for Seniors — TekSure" description="FEMA Ready disaster prep — tailored senior preparedness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ready.gov for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free disaster preparedness.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ready.gov</h2><p>FREE. FEMA preparedness. Senior-specific resources.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior checklist</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>7-day medications</li><li>Mobility aids</li><li>Hearing aid batteries</li><li>Glasses backup</li><li>Medical info</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Emergency plan</h2><p>Where to meet family. Out-of-state contact. Meeting points.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Special Needs Registry</h2><p>FREE local. Tells emergency responders about your needs in advance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pets included</h2><p>Pet emergency plan. Carriers, food, vet records.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Practice annually</h2><p>Walk through emergency plan with family. Real preparedness.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sign up for local Special Needs Registry. Free. Saves lives.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
