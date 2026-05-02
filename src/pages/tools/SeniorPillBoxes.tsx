import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorPillBoxes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Pill Boxes for Seniors — TekSure" description="Hero, MedMinder, weekly pill organizers for senior medication management." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Pill Boxes</h1>
          <p className="text-lg text-muted-foreground">Never miss a dose.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Basic weekly pill box</h2><p>$10. AM/PM compartments. Simple. Effective for most seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hero</h2><p>$50/month + $99 setup. Auto-dispenses correct pills at correct times.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MedMinder</h2><p>$60/month. Locked compartments. Beeps when time. Calls if missed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pillpack by Amazon</h2><p>FREE. Pre-sorted by dose time. Mailed monthly. Game-changer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone reminders</h2><p>Medisafe. Apple Reminders. Echo Show. Multiple alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Brown bag check</h2><p>Take ALL meds to pharmacist yearly. Spots interactions and old prescriptions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pillpack is best for seniors on 5+ medications. Free service.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
