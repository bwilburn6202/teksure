import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorFriendlyPhoneCases() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior-Friendly Phone Cases | TekSure" description="Best phone cases for seniors. Drop protection + grip + style." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Cases</h1>
          <p className="text-lg text-muted-foreground">Senior-friendly picks.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OtterBox Defender</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Toughest case.</li><li>$40-$60.</li><li>Drop test 6 ft.</li><li>Heavy duty.</li><li>Senior klutz protection.</li><li>Bulky but secure.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wallet case</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stores cards + ID.</li><li>$25-$40.</li><li>Senior travel friendly.</li><li>Less to carry.</li><li>Lost phone = lost cards too.</li><li>Trade-off.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Silicone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50.</li><li>Soft grip.</li><li>MagSafe compatible.</li><li>Senior friendly feel.</li><li>Decent drop protection.</li><li>Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tempered glass</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15 set.</li><li>Stick on screen.</li><li>Replaces if cracked.</li><li>Saves $329 screen repair.</li><li>Senior must-have.</li><li>Replace yearly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lanyards</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone around neck.</li><li>$15.</li><li>Walk + secure.</li><li>Senior outdoor secure.</li><li>Don&apos;t lose phone.</li><li>Increasingly popular.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Where to buy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon — wide selection.</li><li>Apple Store.</li><li>Best Buy.</li><li>Carrier stores.</li><li>Senior trusted.</li><li>Read reviews first.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60 case + glass = senior screen saver</h3><p className="text-sm text-muted-foreground">$45 OtterBox case + $15 tempered glass = senior phone fortress. Saves $329 screen repair. Or Apple Silicone $50 if want premium feel + MagSafe. Plus PopSocket = grip. Total $60-$90 protection beats $329 repair.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
