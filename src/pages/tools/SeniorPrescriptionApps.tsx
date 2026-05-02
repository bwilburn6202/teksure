import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorPrescriptionApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prescription Apps for Seniors — TekSure" description="Manage refills and find lowest prices — CVS, Walgreens, GoodRx, Cost Plus." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prescription Apps</h1>
          <p className="text-lg text-muted-foreground">Refill faster. Pay less.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CVS / Walgreens / Walmart</h2><p>Free apps from your pharmacy. Refill, transfer, set reminders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GoodRx</h2><p>Free. Compare prices at every nearby pharmacy. Show coupon at counter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost Plus Drugs</h2><p>Mark Cuban&apos;s pharmacy. Often 50-90% cheaper than retail.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mail order</h2><p>Medicare Part D often allows 90-day mail order. No copay sometimes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reminder apps</h2><p>Medisafe, MyTherapy. Different from pharmacy app — for taking pills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drug interactions</h2><p>Drugs.com Drug Interaction Checker is free. Check before adding new meds.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Compare GoodRx vs your insurance for every prescription. Sometimes GoodRx wins.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
