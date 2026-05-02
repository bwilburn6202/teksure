import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorMedicationManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Medication Management | TekSure" description="Pill organizers, reminders, refills for senior med routine." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Med Management</h1>
          <p className="text-lg text-muted-foreground">Senior pill routine.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medisafe app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Premium.</li><li>Pill reminders.</li><li>Drug interactions.</li><li>Senior peace.</li><li>Family alerts missed dose.</li><li>Most popular.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hero auto-dispenser</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30/month.</li><li>Auto-dispenses pills.</li><li>Senior never wrong dose.</li><li>Family monitor.</li><li>Caregiver favorite.</li><li>Worth complex regimens.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pill organizer $10</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Weekly box.</li><li>Senior visual check.</li><li>Multiple times daily.</li><li>Sunday fill ritual.</li><li>Cheap + effective.</li><li>Worth basics.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-refill</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>CVS, Walgreens automatic.</li><li>Senior never run out.</li><li>Free service.</li><li>Pickup or delivery.</li><li>Worth setup.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mail order pharmacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>90-day supply.</li><li>Cheaper $10-$30/mo savings.</li><li>Senior less trips.</li><li>Insurance often prefers.</li><li>Worth switching.</li><li>Express Scripts, OptumRx.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Med list updated</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Notes app or printed.</li><li>Senior carry to doctor.</li><li>Update yearly.</li><li>Family knows for ER.</li><li>Free.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Medisafe + $10 organizer = senior med routine</h3><p className="text-sm text-muted-foreground">Free Medisafe app + $10 weekly pill organizer + auto-refills CVS/Walgreens = senior med routine. Family alerts missed doses. Mail order $10-$30/mo savings. Hero auto-dispenser $30/mo if complex. Med list updated for ER critical.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
