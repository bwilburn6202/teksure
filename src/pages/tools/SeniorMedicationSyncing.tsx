import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorMedicationSyncing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medication Syncing for Seniors — TekSure" description="Sync all prescriptions to one pickup date — saves trips for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Syncing</h1>
          <p className="text-lg text-muted-foreground">All meds. One pickup date.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ask pharmacist</h2><p>Most pharmacies offer FREE syncing. CVS, Walgreens, Walmart. Just ask.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">90-day supply</h2><p>Pickup quarterly instead of monthly. 4 trips/year vs 12.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Adherence boost</h2><p>Studies show synced patients adhere better. Less missed doses.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Combine with delivery</h2><p>Sync + delivery = zero pharmacy trips. Free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior simplicity</h2><p>Easier to remember when all pills due same day.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set up phone</h2><p>Ask pharmacist to call phone before refill. Removes effort.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Free service. Saves seniors hours yearly. Just ask pharmacist.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
