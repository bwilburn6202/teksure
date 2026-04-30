import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function PrintingFromPhone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print From Your Phone | TekSure" description="Print photos, recipes, documents from iPhone or Android. Plain-English steps for AirPrint, HP Smart, Staples." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print From Your Phone</h1>
          <p className="text-lg text-muted-foreground">No computer needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — AirPrint</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Make sure printer is AirPrint compatible (most modern printers are).</li>
              <li>Phone + printer on SAME WiFi.</li>
              <li>Open photo, document, email, web page.</li>
              <li>Tap Share button (square with up arrow).</li>
              <li>Scroll → tap "Print".</li>
              <li>Pick printer + number of copies.</li>
              <li>Tap Print.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — Cloud Print + apps</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Most printers have own app: HP Smart, Canon Print, Epson iPrint, Brother iPrint.</li>
              <li>Download printer app.</li>
              <li>Connect phone + printer to same WiFi.</li>
              <li>Open document → Share → printer app.</li>
              <li>Settings → Connected devices → Connect printer (newer Android).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No printer? Use these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Staples / Office Depot / FedEx</strong> — submit online + pick up.</li>
              <li><strong>Local library</strong> — many print free or 10-25 cents/page.</li>
              <li><strong>Costco Photo Center</strong> — best for large quantity.</li>
              <li><strong>Walgreens / CVS / Walmart</strong> — photo prints same-day.</li>
              <li><strong>UPS Store</strong> — premium, reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior printer recommendations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HP DeskJet 4255e</strong> ($100) — cheap, includes 6 months HP+ ink.</li>
              <li><strong>Brother HL-L2350DW</strong> ($150) — laser. Cheap toner. Best for documents only.</li>
              <li><strong>HP Tango</strong> — small, all-wireless.</li>
              <li><strong>Epson EcoTank</strong> — refillable ink (no cartridges). Best for high-volume.</li>
              <li>SKIP cheap printers under $50 — ink costs more than printer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Ink subscription</h3>
            <p className="text-sm text-muted-foreground">HP Instant Ink + Brother Refresh — printer auto-orders ink before you run out. $1-12/mo. Saves dashing to store. Best for seniors who print regularly. Cancel anytime.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
