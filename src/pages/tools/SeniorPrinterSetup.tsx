import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function SeniorPrinterSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Printer Setup for Seniors — TekSure" description="Set up wireless printers — HP, Brother, Epson — for iPhone, iPad, Mac, PC." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Printer Setup for Seniors</h1>
          <p className="text-lg text-muted-foreground">Print from any phone or computer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best printers</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Brother HL-L2350DW ($120) — most reliable</li><li>HP LaserJet M209dw ($180) — strong app</li><li>Epson EcoTank ($300) — no costly ink cartridges</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wi-Fi setup</h2><p>Plug in. Press WPS button on router. Press WPS on printer. Connected.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print from iPhone</h2><p>Open photo or doc → Share → Print. Pick your printer. Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid ink trap</h2><p>HP Instant Ink, Epson EcoTank — saves $200/year vs cartridges.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common problems</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Restart printer + router</li><li>Reinstall app</li><li>Same Wi-Fi network</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free help</h2><p>Most senior centers help with setup. Or call manufacturer support — patient with seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Buy one good printer once. Replace cheap ones every 2 years — laser printers last 10+.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
