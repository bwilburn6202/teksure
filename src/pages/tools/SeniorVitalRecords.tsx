import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorVitalRecords() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vital Records for Seniors — TekSure" description="Order birth certificates, marriage licenses online — vital records." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vital Records</h1>
          <p className="text-lg text-muted-foreground">Birth, marriage, death certificates.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VitalChek</h2><p>Official online service. $30-$60. Mailed to you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">State Vital Records</h2><p>Cheaper than VitalChek. Each state has own site.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common needs</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Real ID requires birth certificate</li><li>Pension claims</li><li>Estate planning</li><li>Spouse death claims</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Order extras</h2><p>2-3 certified copies. Need fresh ones for various agencies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch scams</h2><p>Pay only state vital records sites. Many fake sites overcharge.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Death certificates</h2><p>Funeral home orders typically. 6-12 copies for various agencies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Always start at YourState.gov vital records. Avoid fee scammers.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
