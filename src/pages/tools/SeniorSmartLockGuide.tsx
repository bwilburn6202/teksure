import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorSmartLockGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Locks for Seniors — TekSure" description="Keyless entry locks for seniors — never get locked out again." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Locks for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never fumble for keys again.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why install one</h2><p>Open the door with a code, your phone, or fingerprint. Give caregivers temporary codes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">August Wi-Fi</h2><p>$200. Fits over your existing deadbolt. Keeps your old key working too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Schlage Encode</h2><p>$280. Keypad with big numbers. Works without a hub.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yale Assure</h2><p>$240. Quiet motor. Auto-locks after 30 seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family codes</h2><p>Give each child a unique 4-6 digit code. See in the app who came and when.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Battery life</h2><p>Most last 6-12 months on AA batteries. App warns when low.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Hide a physical key with a trusted neighbor as a backup if batteries die.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
