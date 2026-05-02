import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorSmartLocks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Locks for Seniors — TekSure" description="August, Schlage, Yale — keyless entry for senior homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Locks for Seniors</h1>
          <p className="text-lg text-muted-foreground">No more lost keys.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">August Wi-Fi Smart Lock</h2><p>$200. Best fit-over-existing. Keep your keys working too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Schlage Encode</h2><p>$280. Big numbers keypad. Senior-easy. Most reliable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yale Assure</h2><p>$240. Quiet motor. Auto-locks 30 sec after closing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>No fumbling for keys</li><li>Family codes for visits</li><li>Lock from bed</li><li>See who came when</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Caregiver codes</h2><p>Different code per home health worker. Track entries.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-unlock</h2><p>Phone in pocket. Door unlocks as you approach. Senior-friendly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Hide a real key with a trusted neighbor. Backup if batteries die.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
