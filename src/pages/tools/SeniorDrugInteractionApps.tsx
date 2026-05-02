import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorDrugInteractionApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drug Interaction Checker for Seniors — TekSure" description="Free apps to check medication interactions — Drugs.com, Medscape." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drug Interaction Checker</h1>
          <p className="text-lg text-muted-foreground">Free. Critical for senior safety.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drugs.com</h2><p>FREE. Type all your meds. Shows dangerous interactions instantly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medscape</h2><p>FREE. Doctor-quality. More detailed interaction info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">WebMD</h2><p>FREE. Drug interaction tool plus general info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Critical for seniors</h2><p>Average senior on 5+ meds. Interactions cause 100,000+ hospitalizations yearly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Include OTC and vitamins</h2><p>Tylenol, ibuprofen, fish oil all interact. Add everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pharmacist FREE check</h2><p>Bring everything to pharmacist annually. Best human check.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Check before adding any new med. Even &ldquo;harmless&rdquo; supplements interact.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
