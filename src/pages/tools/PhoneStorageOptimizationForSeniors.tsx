import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function PhoneStorageOptimizationForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Storage Optimization for Seniors | TekSure" description="Free up phone storage. Senior step-by-step cleanup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Storage</h1>
          <p className="text-lg text-muted-foreground">Free up space.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Check storage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone — Settings → General → Storage.</li><li>Android — Settings → Storage.</li><li>See biggest apps.</li><li>Senior find cause.</li><li>Free.</li><li>30 seconds.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Optimize Photos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud Photos — On.</li><li>Optimize iPhone Storage.</li><li>Originals in iCloud.</li><li>Smaller on phone.</li><li>Senior 80% saved.</li><li>Auto.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Delete videos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos → Videos folder.</li><li>Videos huge.</li><li>Delete or save to cloud.</li><li>Senior big space.</li><li>Free GBs.</li><li>Quick win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Offload unused apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone — auto.</li><li>Settings → App Store.</li><li>Offload Unused Apps on.</li><li>Senior auto-cleanup.</li><li>Reinstall when use.</li><li>Free space saved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Clear browser cache</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Safari — Settings → Clear.</li><li>Chrome — same.</li><li>Frees GBs.</li><li>Senior easy.</li><li>Won&apos;t lose passwords.</li><li>Refreshes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Or upgrade phone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>If 64GB phone always full.</li><li>Buy 256GB+.</li><li>Senior space comfort.</li><li>Worth it long-term.</li><li>Or buy iCloud storage $1/mo.</li><li>Cheaper.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Optimize Photos = 80% saved</h3><p className="text-sm text-muted-foreground">iPhone &quot;Optimize iPhone Storage&quot; saves 80% photo space. Originals in iCloud. Plus delete videos manually — biggest space hogs. Plus offload unused apps. Senior 30 minutes = lots free space. Don&apos;t buy new phone yet.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
