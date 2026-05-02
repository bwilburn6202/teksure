import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorSmartLocks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Locks for Seniors — Senior Guide" description="Pick a smart lock for the front door." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Locks</h1>
          <p className="text-lg text-muted-foreground">No more lost keys.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Schlage Encode</h2><p>$250. Built-in Wi-Fi. Open from anywhere via app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Yale Assure</h2><p>$200-300. Keypad codes. Touchscreen. Battery lasts a year.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. August Lock</h2><p>$200. Mounts on existing deadbolt inside. Keeps your keys outside too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Why useful</h2><p>Code for cleaning person, dog walker, family. No copying keys.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Safety tip</h2><p>Skip cheap unbranded smart locks. Hackers crack them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery alerts</h2><p>App warns when batteries get low. No surprise lockouts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always keep a backup physical key hidden somewhere safe outside. Tech can fail.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
