import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SeniorMedicalAlertSystems() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Alert Systems for Seniors — TekSure" description="Best medical alert pendants and watches — Lifeline, Bay Alarm, Medical Guardian." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Alert Systems</h1>
          <p className="text-lg text-muted-foreground">Help at the press of a button.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bay Alarm Medical</h2><p>$25/month. Pendant or watch. 24/7 US-based monitoring.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lifeline (by Philips)</h2><p>$30/month. Most established brand. Auto-fall detection extra.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medical Guardian</h2><p>$30/month. Mobile units work outside the home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch fall detection</h2><p>$249 one-time. Auto-detects falls. Calls 911 if no response.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare features</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Auto fall detection</li><li>Cellular vs landline</li><li>GPS tracking</li><li>Range from base</li><li>Waterproof rating</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No long contracts</h2><p>Best brands offer month-to-month. Try before committing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test your pendant monthly. Push the button, talk to the operator, confirm it&apos;s working.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
