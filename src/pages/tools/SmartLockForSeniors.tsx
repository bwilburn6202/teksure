import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SmartLockForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Locks for Seniors | TekSure" description="Keyless senior entry. Smart lock guide for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Locks</h1>
          <p className="text-lg text-muted-foreground">Keyless senior entry.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">August Smart Lock</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Replaces inside.</li><li>Outside same key.</li><li>Senior easy install.</li><li>Phone unlock.</li><li>Auto-lock.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schlage Encode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$280.</li><li>Keypad entry.</li><li>Wifi + Bluetooth.</li><li>Senior no phone needed.</li><li>Code-based.</li><li>Reliable brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No fumbling keys.</li><li>Arthritis-friendly.</li><li>Family code access.</li><li>Auto-lock at night.</li><li>Senior peace.</li><li>Caregiver entry.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Caregiver access</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Time-limited codes.</li><li>Cleaning service code.</li><li>Family member code.</li><li>Senior independence.</li><li>Track entries.</li><li>Better than spare key.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-lock</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Locks after 1-30 min.</li><li>Senior never forget.</li><li>Reduces anxiety.</li><li>Auto-unlock by phone.</li><li>Geo-fence option.</li><li>Senior peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Battery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>6-12 months typical.</li><li>App alerts low.</li><li>AA batteries.</li><li>Backup key still works.</li><li>Senior no lockout.</li><li>Keep batteries stocked.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 smart lock = senior arthritis fix</h3><p className="text-sm text-muted-foreground">$200 August or Schlage smart lock = senior arthritis no fumbling keys. Auto-lock peace of mind. Caregiver code access. Family emergency entry. Backup physical key works. Most senior daily-life upgrade. Worth investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
