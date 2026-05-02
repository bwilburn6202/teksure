import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorEmergencyKit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Kit for Seniors — TekSure" description="3-day emergency kit for seniors — Ready.gov, water, meds, lights." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Emergency Kit</h1>
          <p className="text-lg text-muted-foreground">3 days. Self-sufficient.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Water</h2><p>1 gallon per person per day. 3 days = 3 gallons. Replace yearly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Food</h2><p>3 days non-perishable. Canned soup, peanut butter, granola bars. Manual can opener.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medications</h2><p>7-day supply. Original bottles. Prescription list.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Light + radio</h2><p>NOAA weather radio with hand crank ($30). Flashlights with extra batteries.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Power bank</h2><p>10,000 mAh+ ($25). Charges phone 2-3 times.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Documents</h2><p>Copies of ID, insurance, Medicare card in waterproof bag.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ready.gov has free senior emergency checklists. Print and check.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
