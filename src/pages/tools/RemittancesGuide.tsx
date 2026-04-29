import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

const SVCS = [
  { name: 'Wise (TransferWise)', cost: '0.5-2% fees', best: 'Cheapest international transfers. Real exchange rates.', good: 'Best overall.' },
  { name: 'Remitly', cost: '$0-4 + currency markup', best: 'Specialized for Latin America + Asia. Strong app.', good: 'Best for LatAm.' },
  { name: 'Western Union', cost: '$5-25', best: 'Old-school. Cash pickup at branches worldwide.', good: 'Best for cash pickup.' },
  { name: 'MoneyGram', cost: '$5-20', best: 'Same as Western Union — competitor.', good: 'Best alternate cash.' },
  { name: 'Xoom (PayPal)', cost: '$0-10', best: 'PayPal-owned. Bank deposit OR cash pickup.', good: 'Best with PayPal.' },
  { name: 'WorldRemit', cost: '$2-10', best: 'Mobile-first. Many destinations. Cash pickup or mobile money.', good: 'Best mobile-money.' },
];

export default function RemittancesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Remittances Guide | Guía de Remesas | TekSure" description="Send money home internationally. Plain-English (English + Spanish) picks for cheapest, safest international money transfers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Remittances Guide</h1>
          <p className="text-lg text-muted-foreground">Send money home cheaper.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to compare</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Check fees PLUS exchange rate markup. Both matter.</li>
              <li>Use <strong>monito.com</strong> or <strong>compareremit.com</strong> — free comparison sites.</li>
              <li>Test send small amounts first.</li>
              <li>First-time bonuses common — $0 fee on first send.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use major regulated services. Avoid sketchy "send agents".</li>
              <li>Verify recipient name + ID exactly — wrong letter = held money.</li>
              <li>Save tracking numbers + receipts.</li>
              <li>Tell recipient when expected.</li>
              <li>Report scams to FTC.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠ Romance + Family Scams</h2>
            <p className="text-sm">Many seniors lose $1,000s sending "to family in trouble overseas". Real family rarely needs urgent international wires. NEVER send via Western Union/MoneyGram unless you 100% verified by phone (call them). See /tools/grandparent-scam-defense + /tools/scam-dating-flags.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best fixed-amount option</h3>
            <p className="text-sm text-muted-foreground">For routine monthly remittances (e.g., support to family in Mexico) — Wise saves 50-80% vs Western Union over a year. $0 fee on small transfers if first time. Set up auto-recurring sends.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
