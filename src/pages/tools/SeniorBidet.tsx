import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorBidet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bidets for Seniors — TekSure" description="Bidet attachments and toilets — better hygiene for seniors with mobility issues." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bidets for Seniors</h1>
          <p className="text-lg text-muted-foreground">Better hygiene. Easier on hands.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">TUSHY</h2><p>$80. Attaches to existing toilet. Cold water only. Easy install.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Toto Washlet</h2><p>$400+. Heated water. Heated seat. Premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Easier than wiping with arthritis</li><li>Better hygiene for incontinence</li><li>Saves toilet paper money</li><li>Reduces hemorrhoid issues</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Brondell SwashClean</h2><p>$200. Mid-range. Heated water + dryer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance</h2><p>FSA/HSA covers if doctor prescribes for medical condition.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save toilet paper</h2><p>$200/year less TP. Pays for itself in year.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try $80 TUSHY first. If you love it, upgrade later.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
