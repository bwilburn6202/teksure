import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SmartSmokeDetectorForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Smoke Detectors for Seniors | TekSure" description="Nest Protect + smart smoke alarms for senior homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Smoke Detectors</h1>
          <p className="text-lg text-muted-foreground">Senior fire safety.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Nest Protect</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$120 each.</li><li>Smoke + CO.</li><li>Voice alerts location.</li><li>Senior phone alerts.</li><li>10-year battery.</li><li>Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">First Alert Onelink</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$70.</li><li>Wifi alerts.</li><li>Combination smoke/CO.</li><li>Senior alternative.</li><li>HomeKit + Alexa.</li><li>Reliable brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Voice tells location of fire.</li><li>Phone alert away from home.</li><li>Family alerted.</li><li>Senior critical for solo.</li><li>Hearing-impaired flash.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hearing-impaired</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add bedside flasher.</li><li>$50 SafeAwake.</li><li>Wakes hearing-impaired.</li><li>Senior critical.</li><li>FCC required some buildings.</li><li>Worth extra.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test monthly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Press test button.</li><li>App reminder helpful.</li><li>10-year sealed batteries.</li><li>Senior easy maintenance.</li><li>Replace whole detector 10yr.</li><li>Best practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CO detection</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Carbon monoxide deadly silent.</li><li>Combination units worth it.</li><li>Senior gas appliances.</li><li>Heater + stove + dryer.</li><li>Annual furnace check.</li><li>Critical winter.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$120 Nest Protect = senior life saver</h3><p className="text-sm text-muted-foreground">$120 Nest Protect = senior phone alerts + voice tells fire location. Smoke + CO. Family + neighbors alerted away. Senior solo critical. Hearing-impaired add $50 bedside flasher. Best senior fire safety upgrade. Worth premium for life.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
