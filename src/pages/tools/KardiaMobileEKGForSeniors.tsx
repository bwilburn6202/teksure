import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function KardiaMobileEKGForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="KardiaMobile EKG for Seniors | TekSure" description="Take EKG at home. AliveCor KardiaMobile senior heart guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">KardiaMobile EKG</h1>
          <p className="text-lg text-muted-foreground">Heart check at home.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pocket EKG device.</li><li>$80-$150.</li><li>Place fingers — 30 sec.</li><li>App reads result.</li><li>FDA-cleared.</li><li>Senior heart awareness.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Detects</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Atrial fibrillation.</li><li>Bradycardia (slow).</li><li>Tachycardia (fast).</li><li>Normal sinus rhythm.</li><li>Senior alert if abnormal.</li><li>Send to doctor.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Watch — 1-lead EKG.</li><li>Kardia 6L — 6-lead more accurate.</li><li>Both FDA-cleared.</li><li>Watch — $400.</li><li>Kardia 6L — $150.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heart palpitations.</li><li>Dizziness episodes.</li><li>AFib history.</li><li>Send results to cardiologist.</li><li>Senior peace.</li><li>Travel with it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium $10/mo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cardiac advisor reviews.</li><li>Cardiologist analysis.</li><li>Unlimited recordings.</li><li>$120/year.</li><li>Senior peace if AFib history.</li><li>Optional.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Doctor sharing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PDF export.</li><li>Email to doctor.</li><li>Better than describe.</li><li>Senior catch issues early.</li><li>Document patterns.</li><li>Peace of mind.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 EKG = senior heart watcher</h3><p className="text-sm text-muted-foreground">$80 KardiaMobile = pocket EKG when seniors feel palpitations. 30 seconds, app reads. PDF to cardiologist. Many seniors catch AFib early using this. FDA-cleared. Cheaper than $400 Apple Watch and more accurate. Worth it for at-risk seniors.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
