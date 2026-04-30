import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function CPAPMaskForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CPAP Mask Tips for Seniors | TekSure" description="Senior-friendly CPAP masks + apps. Sleep apnea senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CPAP for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sleep apnea relief.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mask types</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nasal pillows — smallest.</li><li>Nasal mask — covers nose.</li><li>Full face — both.</li><li>Senior preference.</li><li>Try multiple.</li><li>Free trial often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SleepyHead/OSCAR</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free CPAP data analysis.</li><li>Track AHI.</li><li>See pressure events.</li><li>Senior optimize.</li><li>SD card from CPAP.</li><li>Open source.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">myAir app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ResMed CPAP.</li><li>Free.</li><li>Daily score.</li><li>Compliance tracking.</li><li>Insurance requires.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cleaning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily mask wipe.</li><li>Weekly soak.</li><li>Hose monthly.</li><li>Senior routine.</li><li>SoClean discontinued (FDA).</li><li>Vinegar + water.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance + Medicare</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Often covered.</li><li>90-day compliance.</li><li>4 hrs/night minimum.</li><li>Senior commitment.</li><li>Track via app.</li><li>Replace masks every 90 days.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Travel CPAP small.</li><li>Carry-on always.</li><li>Don&apos;t check.</li><li>Senior plane okay.</li><li>Insurance usually.</li><li>Letter from doctor.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">CPAP + apps = senior sleep transformed</h3><p className="text-sm text-muted-foreground">If senior diagnosed with sleep apnea, CPAP is life-changing. Free myAir app tracks compliance for insurance. OSCAR free analysis. Daily mask cleaning. Insurance covers most. Game-changing energy boost. Don&apos;t skip if prescribed.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
