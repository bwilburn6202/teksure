import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function PetMedicationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Medication Apps for Seniors | TekSure" description="Track senior pet meds. Apps for pet medication management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Medication</h1>
          <p className="text-lg text-muted-foreground">Track pet meds.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">11pets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Pet medication reminders.</li><li>Vet visit history.</li><li>Senior pet records.</li><li>Multiple pets.</li><li>Comprehensive.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pet First Aid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Red Cross app.</li><li>Free.</li><li>Emergency procedures.</li><li>Senior peace.</li><li>What to do guide.</li><li>Vet hospital finder.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chewy auto-ship</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-deliver meds.</li><li>10% off subscribe.</li><li>Senior never run out.</li><li>Free shipping $49.</li><li>Senior aging-in-place.</li><li>Best pet med supply.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Walmart Pet Rx</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$4 generic options.</li><li>Cheap thyroid + heart.</li><li>Senior pet on budget.</li><li>Vet writes Rx.</li><li>Walmart fills.</li><li>Save $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calendar reminders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone calendar recurring.</li><li>Vet visits annual.</li><li>Heartworm monthly.</li><li>Flea treatment.</li><li>Senior never miss.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pet first aid kit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bandages, gauze.</li><li>Tweezers ticks.</li><li>Activated charcoal poison.</li><li>Senior emergency ready.</li><li>$30 prepared kit.</li><li>Vet number saved.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">11pets + Chewy auto = senior pet care</h3><p className="text-sm text-muted-foreground">Free 11pets app for medication reminders + Chewy auto-ship for delivery = senior pet medication management solved. Plus Red Cross Pet First Aid free. Walmart $4 generics for senior pet budget. Most under-set-up senior pet system.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
