import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function SeniorMagicKeyboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Magic Keyboard — Senior Guide" description="Pair Apple Magic Keyboard with Mac and iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Magic Keyboard</h1>
          <p className="text-lg text-muted-foreground">Apple's wireless keyboard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Standalone</h2><p>$100. Wireless. Pair with iMac, MacBook, iPad, even iPhone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Number pad version</h2><p>$130. Better for spreadsheets and bookkeeping.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Touch ID version</h2><p>$130. Login with fingerprint. Speeds up password entry.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. USB-C charging</h2><p>One charge lasts a month. Charge with iPhone cable.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pairing</h2><p>Plug in once. Mac auto-pairs. Works wirelessly forever after.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Switch devices</h2><p>Bluetooth menu. Switch keyboard between Mac and iPad in 2 clicks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Better feel than most keyboards. Worth the price for daily writers.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
