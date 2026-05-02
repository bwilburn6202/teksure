import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function SeniorMedicationLists() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Medication Lists — TekSure" description="Keep updated medication list — for ER, doctor visits, family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Lists</h1>
          <p className="text-lg text-muted-foreground">Save your life in ER.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to include</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Drug name + dose</li><li>How often</li><li>What for</li><li>Allergies</li><li>OTC meds, vitamins</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where to keep</h2><p>Phone Medical ID. Wallet card. Magnet on fridge. Multiple locations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Care2u app</h2><p>FREE. Phone wallet for meds. Share with family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CareZone</h2><p>FREE. Photo of pill bottle auto-fills info. Save time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vial of Life</h2><p>FREE program. Form on fridge. EMTs find in emergency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update at every doctor visit</h2><p>Don&apos;t leave doctor without updated list. Most have free templates.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: ER staff can save your life only with accurate med list. Have it ready.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
