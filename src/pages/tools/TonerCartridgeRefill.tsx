import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function TonerCartridgeRefill() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cheap Printer Ink Tricks for Seniors | TekSure" description="Stop paying $40 for ink. Plain-English picks for refills, generics, EcoTank printers, ink subscriptions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cheap Printer Ink</h1>
          <p className="text-lg text-muted-foreground">Stop paying $40/cartridge.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real cost of ink</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brand-name ink ($30-50/cartridge) is among most expensive liquids on Earth.</li>
              <li>$3,000-5,000/gallon equivalent.</li>
              <li>Generic / refilled ink works fine for most seniors&apos; printing.</li>
              <li>Or: switch to EcoTank printer (ink wells, not cartridges).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Generic / compatible cartridges</strong> — Amazon, $5-15/cartridge. 80% of brand quality.</li>
              <li><strong>HP Instant Ink subscription</strong> — $1-12/month based on print volume.</li>
              <li><strong>Brother Refresh subscription</strong> — toner sent automatically.</li>
              <li><strong>Costco / Sam&apos;s Club ink refill</strong> — local stations, often half-price.</li>
              <li><strong>Sell empty cartridges</strong> — Staples gives $2 each rewards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best printer = lowest ink cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Epson EcoTank ET-2800</strong> ($200) — refillable ink wells. 2 years of ink included. ~$0.01/page printing.</li>
              <li><strong>Brother HL-L2350DW</strong> ($150) — laser. Toner $20-30 lasts 3,000 pages.</li>
              <li><strong>Canon MegaTank</strong> — same idea as EcoTank.</li>
              <li>Skip cheap inkjet ($40) — ink costs $40+ per refill.</li>
              <li>Lifetime cost: EcoTank $200 + $50 ink/yr. Cheap inkjet $40 + $200 ink/yr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Print less</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read on screen instead of printing.</li>
              <li>"Print to PDF" + save to phone — instead of paper.</li>
              <li>Print only essential — boarding passes, recipes, important docs.</li>
              <li>Library prints 10-25 cents/page if rare need.</li>
              <li>FedEx / UPS Store for occasional large jobs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Rare-print households</h3>
            <p className="text-sm text-muted-foreground">If you print less than 50 pages/month — DON&apos;T own a printer. Costs more in ink-drying-up than printing. Use library or FedEx. Or buy a cheap laser printer ($150 Brother).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
