import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck } from 'lucide-react';

export default function SeniorAdvanceCarePlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Advance Care Planning for Seniors — TekSure" description="Five Wishes, healthcare proxy, living will — make wishes clear." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Advance Care Planning</h1>
          <p className="text-lg text-muted-foreground">Make your wishes clear.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Five Wishes</h2><p>$5. Most popular advance directive. Plain English.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Living will</h2><p>FREE state forms at AARP.org. Says what treatments you want/don&apos;t.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Healthcare proxy</h2><p>Designate trusted person to make decisions if you can&apos;t. FREE form.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">POLST</h2><p>Physician Orders for Life-Sustaining Treatment. Specific medical orders. Doctor signs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tell family</h2><p>Don&apos;t hide documents. Tell adults kids where to find them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update every 5 years</h2><p>Wishes change. Review and update.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ask doctor if they support advance care planning. Most do.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
