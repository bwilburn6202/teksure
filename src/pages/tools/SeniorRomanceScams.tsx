import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorRomanceScams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Romance Scams for Seniors — TekSure" description="Identify online dating scams — protect your heart and money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Romance Scams</h1>
          <p className="text-lg text-muted-foreground">Stolen $1.3 BILLION yearly from seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Red flags</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Loves&rdquo; you in 1 week</li><li>Won&apos;t video call</li><li>Always too busy/abroad to meet</li><li>Asks for money for emergency</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reverse image search</h2><p>Save their photo. Google Images search. Often catches stolen photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NEVER send money</h2><p>If they ask for money — STOP. No real love asks for money online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common stories</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Military deployed</li><li>Doctor in Africa</li><li>Oil rig worker</li><li>Stuck in customs</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell family</h2><p>Don&apos;t hide online relationships. Family can spot scams faster than you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Report</h2><p>FTC: reportfraud.ftc.gov. AARP Fraud Watch: 877-908-3360.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Real love is patient. Anyone rushing to &ldquo;love&rdquo; in days is suspicious.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
