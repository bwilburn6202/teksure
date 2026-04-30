import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ContinuousGlucoseMonitorForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Continuous Glucose Monitors for Seniors | TekSure" description="No-finger-stick glucose monitoring. Dexcom + Libre senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CGM Devices</h1>
          <p className="text-lg text-muted-foreground">No more finger sticks.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sensor on arm.</li><li>Reads glucose every 5 min.</li><li>Phone shows readings.</li><li>14 days per sensor.</li><li>No finger sticks.</li><li>Senior diabetes game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Dexcom G7 — 10-day sensor.</li><li>Freestyle Libre 3 — 14-day.</li><li>Stelo — OTC ($89/mo).</li><li>Senior choice.</li><li>Doctor prescribes.</li><li>Or OTC Stelo.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare covers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>For insulin users.</li><li>Type 1 + Type 2.</li><li>Doctor prescription.</li><li>$0-$50/month copay.</li><li>Senior savings huge.</li><li>Ask cardiologist.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stelo OTC</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$89/month.</li><li>No prescription.</li><li>Pre-diabetic seniors.</li><li>See food impact on glucose.</li><li>Senior wellness.</li><li>Approved 2024.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No painful finger sticks.</li><li>See glucose 24/7.</li><li>Catch lows during night.</li><li>See food impact.</li><li>Family monitoring.</li><li>Better A1C.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sensor sticks to arm.</li><li>Painless application.</li><li>App scans/auto-reads.</li><li>14-day cycle.</li><li>Replace yourself.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">CGM = senior diabetes revolution</h3><p className="text-sm text-muted-foreground">CGM ends finger sticks for diabetic seniors. Dexcom/Libre often Medicare-covered for insulin users. Stelo OTC $89/mo for pre-diabetic. See glucose 24/7. Catch overnight lows. Better A1C control. Most life-changing senior diabetes tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
