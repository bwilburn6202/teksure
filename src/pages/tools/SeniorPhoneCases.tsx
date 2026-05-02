import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorPhoneCases() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Cases for Seniors — TekSure" description="Protect senior phones — drop-proof cases, grippy designs, screen protectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Cases for Seniors</h1>
          <p className="text-lg text-muted-foreground">Drop-proof. Grippy. Big buttons.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OtterBox Defender</h2><p>$60. Most protective. Drops up to 6 feet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PopSocket</h2><p>$10. Stick to back. Hold phone with one finger. Easier on arthritis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ring grip case</h2><p>$15. Ring on back. Slip finger through. Phone won&apos;t drop.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wallet cases</h2><p>$20. Holds 3 cards + ID. Less to carry.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Glass screen protector</h2><p>$15. Saves $300 in screen replacement.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Loud speaker case</h2><p>If hearing-impaired: amplifier cases boost ringtone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Bright color makes phone easy to find. Black phones disappear.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
