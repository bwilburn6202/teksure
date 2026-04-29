import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

const PICKS = [
  { name: 'Brother HL-L2350DW', price: '$160', best: 'Black-and-white laser. Cheap toner lasts 1,200 pages. Perfect for occasional printing.', good: 'Best for "I just want to print a label or letter".' },
  { name: 'Brother MFC-L2750DW', price: '$300', best: 'Same brand, all-in-one (print/scan/copy/fax). Wireless.', good: 'Best B&W all-in-one.' },
  { name: 'Epson EcoTank ET-2850', price: '$300', best: 'Color! Refillable INK TANKS. 2 years of ink in the box. No more $50 cartridges.', good: 'Best for color photo printing.' },
  { name: 'HP LaserJet Pro M283fdw', price: '$400', best: 'Color laser. Fast. Cheap toner. Perfect for those who print a lot.', good: 'For higher-volume needs.' },
  { name: 'HP Tango (with Instant Ink)', price: '$80 + $1-3/mo subscription', best: 'Cheapest printer + ink subscription. Auto-orders ink before you run out.', good: 'For light users who hate ink errands.' },
];

export default function SeniorPrinterPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Printer for Seniors — Brother, Epson EcoTank | TekSure" description="Tired of paying $50 for ink? Plain-English picks for printers that won&apos;t bankrupt you on ink. Laser vs Eco-Tank vs subscription." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Printer Picker</h1>
          <p className="text-lg text-muted-foreground">Avoid the "$30 printer with $50 ink" trap.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The trap</h2>
            <p className="text-sm">Cheap printers are sold at a loss — manufacturers make their money on overpriced ink. Buy a $40 printer, pay $50/year in ink. Better to spend more upfront on a printer with cheap consumables.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Black-and-white laser is best for most</h2>
            <p className="text-sm">Most seniors print: shipping labels, letters, recipes, tickets, photos of grandkids occasionally. A B&W laser printer like the Brother HL-L2350DW prints 1,200 pages on $50 of toner. Letters cost <strong>$0.04 each</strong> vs $0.20+ on inkjet.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When color matters</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Lots of grandkid photo printing — get an Epson EcoTank.</li>
              <li>Occasional color (church bulletins, color signs) — keep a B&W laser, use Walgreens or CVS for color photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>$30-50 inkjet printers from Walmart</strong> — ink will cost you 5x the printer in 1 year.</li>
              <li><strong>Printers that REQUIRE you to use brand ink</strong> — they brick when 3rd-party ink is detected.</li>
              <li><strong>"Wireless only" printers without USB option</strong> — when Wi-Fi fails, you\'re stuck.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don\'t need a printer often?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>FedEx Office / UPS Store</strong> — print a few pages from email, $0.20-1.00 each.</li>
              <li><strong>Public library</strong> — usually free or $0.10/page.</li>
              <li><strong>CVS / Walgreens</strong> — for photos.</li>
              <li>Printer apps on phone — email document to your local store, pick up the print.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Top recommendation</h3>
            <p className="text-sm text-muted-foreground"><strong>Brother HL-L2350DW</strong> ($160) for B&W. <strong>Epson EcoTank ET-2850</strong> ($300) if you need color. Skip the $50 inkjet printers — guaranteed to disappoint.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
