import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorMedicalEvacInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Evacuation Insurance for Seniors — TekSure" description="Med-evac insurance — Medjet, Global Rescue. Critical for senior travel." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Evacuation</h1>
          <p className="text-lg text-muted-foreground">Get home if injured abroad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Medical flight Europe to US: $50,000-$100,000. Most travel insurance covers limited.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medjet</h2><p>$300/year individual. $475 family. Choose hospital. Senior favorite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Global Rescue</h2><p>$300+/year. More adventure-focused. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multi-trip plan</h2><p>If traveling 2+ times/year, annual plan saves money vs per-trip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Age limits</h2><p>Some have 75 or 80 max age. Check before subscribing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hospital quality</h2><p>Medjet helps you transfer to better hospital, not just home.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $300/year is cheap insurance. Med-evac alone saved seniors&apos; lives.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
