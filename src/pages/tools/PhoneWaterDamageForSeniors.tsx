import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function PhoneWaterDamageForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Water Damage Recovery for Seniors | TekSure" description="Dropped phone in water? Senior step-by-step rescue guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Damage Rescue</h1>
          <p className="text-lg text-muted-foreground">Phone in water? Do this.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">First 30 seconds</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pull out fast.</li><li>Power off immediately.</li><li>Don&apos;t press buttons.</li><li>Don&apos;t plug in.</li><li>Wipe outside.</li><li>Senior calm.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t — common mistakes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t shake phone.</li><li>Don&apos;t use hair dryer (heat damage).</li><li>Don&apos;t put in oven.</li><li>Don&apos;t plug to charge.</li><li>Don&apos;t turn back on yet.</li><li>Patience saves phone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Rice myth</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rice doesn&apos;t work well.</li><li>Apple says don&apos;t.</li><li>Rice particles get inside.</li><li>Use silica gel packs instead.</li><li>Or just air dry.</li><li>Senior skip rice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best technique</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Place upright.</li><li>Open SIM tray for vent.</li><li>Air dry 48 hours.</li><li>Cool dry place.</li><li>Don&apos;t turn on early.</li><li>Patience pays.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone water-resistant</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone 7+ rated IP67.</li><li>iPhone 12+ rated IP68.</li><li>Resists splashes.</li><li>Not pool/shower long.</li><li>Quick splashes ok.</li><li>Senior reassuring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">If still broken</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Store appointment.</li><li>$99 service for liquid damage.</li><li>Or cheaper repair shop.</li><li>Backup data first if possible.</li><li>iCloud already backed up.</li><li>Senior next steps.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Phone in water: power off + 48hr dry</h3><p className="text-sm text-muted-foreground">Dropped phone in toilet/sink? Pull out, power off, open SIM tray, air dry 48 hours. Don&apos;t shake, blow dry, or plug in. Skip rice myth. Modern iPhone water-resistant — likely fine. iCloud backup ensures data safe regardless. Apple Store if still broken.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
