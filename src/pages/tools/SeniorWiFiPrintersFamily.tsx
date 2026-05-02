import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function SeniorWiFiPrintersFamily() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Photo Printers for Seniors — TekSure" description="Send family photos to a senior's printer instantly — HP+, Canon, Polaroid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Photo Printers</h1>
          <p className="text-lg text-muted-foreground">Family texts photos. Printer prints them. Magic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">HP Tango</h2><p>$200. Email-to-print. Family texts/emails photos to a print address.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Canon PIXMA TR8620</h2><p>$200. Built-in scanner. AirPrint and Google Cloud Print.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mini photo printers</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Canon Selphy QX10 ($150)</li><li>HP Sprocket ($110)</li><li>Polaroid Hi-Print ($150)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">HP Instant Ink</h2><p>$3-$10/month for ink delivered. Never run out.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip the printer</h2><p>Aura digital frame. Family sends photos. Frame displays them. No paper.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easiest setup</h2><p>HP Smart app sends photos straight from phone. 30 seconds.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Buy this for grandparents. Photos magically appear in their kitchen.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
