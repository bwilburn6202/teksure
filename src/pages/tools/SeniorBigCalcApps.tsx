import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorBigCalcApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big Calculator Apps for Seniors — TekSure" description="Senior-friendly calculators — big buttons, voice, financial." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calculator Apps</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Senior-friendly.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Built-in</h2><p>FREE iPhone/Android. Big buttons in landscape mode.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calzy 3</h2><p>$3. Big buttons. Memory functions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice math</h2><p>&ldquo;Hey Siri, what&apos;s 30% of $80?&rdquo; Hands-free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tip calculator</h2><p>Built into calculator apps. 15-20% tip in seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Currency converter</h2><p>XE Currency. FREE. Travel-essential.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Loan calculator</h2><p>FREE. Mortgage, car loan calculations.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Turn iPhone sideways. Calculator gets way bigger.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
