import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function EatingWindowAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Intermittent Fasting Apps for Seniors | TekSure" description="Eating windows + IF apps. Senior IF guide with caution." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IF Tracking Apps</h1>
          <p className="text-lg text-muted-foreground">Eating window timers.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Zero app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + premium.</li><li>16:8 timer.</li><li>Body timer.</li><li>Health stats.</li><li>Senior simple.</li><li>Most popular IF.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior caution</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Talk to doctor.</li><li>Diabetes risk.</li><li>Medications timing.</li><li>Muscle loss risk.</li><li>Senior careful.</li><li>Not for everyone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common windows</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>16:8 — fast 16 hrs.</li><li>14:10 — gentler senior.</li><li>12:12 — start here.</li><li>Eat noon-8pm typical.</li><li>Senior pick gentle.</li><li>Build slowly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Studies</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mixed evidence seniors.</li><li>Younger studies.</li><li>May help blood sugar.</li><li>Weight loss possible.</li><li>Senior consult doc first.</li><li>Not magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When NOT for seniors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Diabetes meds.</li><li>Frail or low weight.</li><li>Eating disorder history.</li><li>Heart conditions.</li><li>Senior risks.</li><li>Doctor approve first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Better senior approach</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3 balanced meals.</li><li>Protein each meal.</li><li>Don&apos;t skip breakfast.</li><li>Senior stable energy.</li><li>Walk after meals.</li><li>Less restrictive.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior IF — talk to doctor first</h3><p className="text-sm text-muted-foreground">Intermittent fasting trendy but risky for seniors. Diabetes meds, frail bodies, muscle loss concerns. Doctor consult first. If approved, start gentle 12:12 window. Free Zero app tracks. Most seniors better with 3 balanced meals. Don&apos;t follow trends blindly.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
