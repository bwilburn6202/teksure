import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function WithingsSmartScaleForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Withings Smart Scale for Seniors | TekSure" description="Track weight + heart health. Withings smart scale senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Withings Smart Scale</h1>
          <p className="text-lg text-muted-foreground">Track + sync to phone.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it tracks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Weight.</li><li>Body fat.</li><li>Heart rate (Body+ models).</li><li>Pulse wave velocity (BodyScan).</li><li>Auto-syncs phone.</li><li>Senior trends.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Models</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Body $80 — basic.</li><li>Body+ $100 — composition.</li><li>Body Cardio $150 — heart.</li><li>BodyScan $400 — premium.</li><li>Senior pick.</li><li>Body+ best value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Step on — auto syncs.</li><li>No buttons.</li><li>Trend graphs.</li><li>Multiple users.</li><li>Track for doctor visit.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">App features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Health Mate app.</li><li>iPhone + Android.</li><li>Apple Health integration.</li><li>Share with doctor.</li><li>Senior data.</li><li>Free forever.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sudden weight changes signal.</li><li>Heart medications affect weight.</li><li>Doctor wants daily data.</li><li>Senior heart failure tracking.</li><li>Catches early.</li><li>Doctor friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download Health Mate.</li><li>Pair via Bluetooth.</li><li>Wifi connects auto.</li><li>Step on daily.</li><li>Auto-records.</li><li>5-min setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 scale = senior heart watcher</h3><p className="text-sm text-muted-foreground">$100 Withings Body+ = senior weight tracking + heart rate trends. Step on, sync, done. App shares with doctor. Catches sudden weight gain (heart failure flag) early. Many seniors track daily for cardiologist. Best senior scale investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
