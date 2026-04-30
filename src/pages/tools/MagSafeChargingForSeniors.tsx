import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function MagSafeChargingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MagSafe Wireless Charging for Seniors | TekSure" description="Drop iPhone on charger - no plugging in. MagSafe senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MagSafe Charging</h1>
          <p className="text-lg text-muted-foreground">Drop + charge.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wireless magnetic charging.</li><li>iPhone 12+.</li><li>$30-$40 charger.</li><li>Drop phone on disc.</li><li>No fumbling cord.</li><li>Senior big win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No tiny port to find.</li><li>No worn cable jack.</li><li>Arthritis-friendly.</li><li>Bedside charging easy.</li><li>Seniors love it.</li><li>Game changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best chargers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple MagSafe — $40.</li><li>Anker MagSafe-compatible.</li><li>Belkin BoostCharge.</li><li>15W fast charging.</li><li>USB-C cable + power.</li><li>Senior options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bedside stand</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Belkin 3-in-1 — $99.</li><li>Charges iPhone, Watch, AirPods.</li><li>One spot bedside.</li><li>Senior organize.</li><li>Less cord clutter.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Car MagSafe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Belkin/Apple car mounts.</li><li>$50-$80.</li><li>Drive + charge + GPS.</li><li>Magnet holds firm.</li><li>Senior drive senior.</li><li>Hands-free GPS.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Slower than wired</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wired = 20W fast.</li><li>MagSafe = 15W.</li><li>Slightly slower.</li><li>OK overnight.</li><li>Senior doesn&apos;t care.</li><li>Convenience wins.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$40 = senior charging arthritis fix</h3><p className="text-sm text-muted-foreground">Many seniors with arthritis fumble Lightning/USB-C cables. $40 MagSafe charger = drop phone on disc, charges. No tiny port to find. Bedside stand $99 charges phone + watch + AirPods. Most senior-loved iPhone 12+ accessory.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
