import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorIRSCallScams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRS Phone Scams for Seniors — TekSure" description="Spot IRS, Medicare, SSA phone scams — government never calls demanding money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Government Phone Scams</h1>
          <p className="text-lg text-muted-foreground">Government NEVER calls demanding money.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">IRS RULE</h2><p>IRS never calls. Always sends letters first. Never asks for gift cards.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Social Security RULE</h2><p>Never calls about &ldquo;suspended benefits.&rdquo; Always letters by mail.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare RULE</h2><p>Never asks for Medicare number on phone. Hangs up if you didn&apos;t initiate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If they threaten arrest</h2><p>It&apos;s a SCAM. Real government never threatens immediate arrest by phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spoofed numbers</h2><p>Caller ID can fake any number. Even if it shows IRS, hang up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verify directly</h2><p>Call IRS 1-800-829-1040. SSA 1-800-772-1213. Confirm any letter.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tell family you got a scam call. They can warn other seniors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
