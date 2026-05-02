import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBPMonitorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior BP Monitor Apps | TekSure" description="Bluetooth blood pressure cuffs + tracking apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BP Monitors</h1>
          <p className="text-lg text-muted-foreground">Senior heart tracking.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Omron Platinum</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$130.</li><li>Bluetooth syncs phone.</li><li>Senior auto-tracks.</li><li>Doctor share.</li><li>Most accurate consumer.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">QardioArm</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100.</li><li>Wireless cuff.</li><li>Senior travel-friendly.</li><li>Family share readings.</li><li>App tracks trends.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Health auto</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bluetooth syncs.</li><li>Senior history.</li><li>PDF for doctor.</li><li>Free.</li><li>Trends visible.</li><li>Best dashboard.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sit calmly 5 min before.</li><li>Same time daily.</li><li>Cuff bare arm.</li><li>Senior accurate readings.</li><li>2 readings average.</li><li>Worth process.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When concerning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>180+ systolic = ER.</li><li>140+ multiple readings.</li><li>Senior call doctor.</li><li>Don&apos;t panic single high.</li><li>Trends matter.</li><li>Doctor decides.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance covers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare may cover.</li><li>Senior ask doctor.</li><li>Free with prescription.</li><li>Worth checking.</li><li>Don&apos;t pay if covered.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 Omron + Apple Health = senior BP tracking</h3><p className="text-sm text-muted-foreground">$80 Omron Platinum Bluetooth + Apple Health auto-sync = senior heart tracking. Doctor share PDF. Same time daily, calmly. Trends matter — single high not panic. Medicare may cover with prescription. Most senior heart health setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
