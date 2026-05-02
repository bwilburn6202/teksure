import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function SeniorMyChartGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyChart for Seniors — TekSure" description="Use MyChart to message doctors, see lab results, and refill prescriptions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyChart for Seniors</h1>
          <p className="text-lg text-muted-foreground">Your medical records on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>App used by 35% of US hospitals. See your records, message doctors, refill meds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign up</h2><p>Ask at your next appointment for an &ldquo;activation code.&rdquo; Or sign up at your hospital&apos;s website.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">See lab results</h2><p>Often arrive within hours of testing. Results come even before doctor calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Message your doctor</h2><p>Free, secure messaging. Most doctors respond in 1-2 business days.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Refill prescriptions</h2><p>Tap Medications → Refill. Doctor approves. Pharmacy fills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family access</h2><p>Set up &ldquo;Proxy Access&rdquo; so a child or spouse can see your records too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print or PDF lab results before doctor visits — easier reference together.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
