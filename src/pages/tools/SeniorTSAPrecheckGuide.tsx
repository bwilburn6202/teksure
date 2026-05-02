import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorTSAPrecheckGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA PreCheck for Seniors — TekSure" description="How seniors can apply for TSA PreCheck and breeze through airport security." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA PreCheck for Seniors</h1>
          <p className="text-lg text-muted-foreground">Skip the long line. Keep your shoes on.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>$78 for 5 years. Faster security line at 200+ U.S. airports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apply online</h2><p>Visit tsa.gov/precheck. Fill the form, then visit an enrollment center for fingerprints.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bring to enrollment</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Driver&apos;s license or passport</li><li>Birth certificate</li><li>Proof of address</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Approval time</h2><p>Most travelers approved within 3-5 days. Your Known Traveler Number arrives by mail or email.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use it</h2><p>Add your Known Traveler Number to every airline reservation. Look for &ldquo;TSA Pre&rdquo; on your boarding pass.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior tip</h2><p>Travelers 75+ already get some benefits without PreCheck — but PreCheck still saves time.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Some credit cards reimburse the $78 PreCheck fee.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
