import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorVaccineSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Vaccine Schedule — TekSure" description="Recommended vaccines for seniors — flu, shingles, RSV, pneumonia, COVID." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Vaccine Schedule</h1>
          <p className="text-lg text-muted-foreground">Free with Medicare. Critical.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual flu shot</h2><p>FREE Medicare. High-dose for 65+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shingles (Shingrix)</h2><p>50+. 2 shots. FREE under Medicare Part D 2023+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pneumonia</h2><p>65+. 1 shot. Long-lasting protection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RSV</h2><p>60+. New vaccine. Single dose. FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">COVID-19</h2><p>Annual. FREE through Medicare.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tdap</h2><p>Every 10 years. Tetanus, pertussis, diphtheria.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pharmacy gives most vaccines. CVS, Walgreens. Often same day.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
