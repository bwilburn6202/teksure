import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scan } from 'lucide-react';

const APPS = [
  { name: 'Apple Notes (built-in)', cost: 'FREE', best: 'Open Notes → camera icon → "Scan Documents". Auto-detects edges, makes PDF.', good: 'Best free for iPhone.' },
  { name: 'Google Drive (built-in)', cost: 'FREE', best: 'Drive app → + → Scan. Auto-detects + saves PDF to Drive.', good: 'Best free for Android.' },
  { name: 'Microsoft Lens', cost: 'FREE', best: 'Cleans up + crops perfectly. OCR (turns text into searchable). Saves to OneDrive/Word.', good: 'Best OCR.' },
  { name: 'Adobe Scan', cost: 'FREE / $10/mo Pro', best: 'Best image quality + edits. Pro adds password-protected PDFs.', good: 'Best quality.' },
  { name: 'CamScanner', cost: 'FREE / $5/mo', best: 'Long-time popular. WARNING — privacy concerns + ads. Use only for non-sensitive docs.', good: 'Skip — privacy issues.' },
  { name: 'Genius Scan', cost: '$8 one-time / $15/yr', best: 'No subscription. Strong batch scanning. Privacy-respecting.', good: 'Best paid privacy.' },
];

export default function ScannerAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scanner Apps — Built-in Beats Paid | TekSure" description="Scan receipts, documents, recipes with your phone. Plain-English picks for free scanner apps already on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scanner App Picks</h1>
          <p className="text-lg text-muted-foreground">Phone is already a scanner.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Notes scanner — step by step</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Notes. Tap "+" to make new note.</li>
              <li>Tap camera icon → "Scan Documents".</li>
              <li>Hold phone over document. App auto-detects edges + scans.</li>
              <li>Multiple pages — scan each, app combines into one PDF.</li>
              <li>Tap "Save".</li>
              <li>Share → email, save to Files, print, or save to iCloud.</li>
              <li>Free, fast, private, ad-free.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — Google Drive scanner</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Google Drive.</li>
              <li>Tap "+" → Scan.</li>
              <li>Take photo of document.</li>
              <li>App auto-crops + cleans up.</li>
              <li>"+" to add more pages, or "Save" to finish.</li>
              <li>Saves PDF to Drive automatically.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use scanner apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Insurance receipts.</li>
              <li>Medical records to share with family.</li>
              <li>Legal documents to email.</li>
              <li>Recipes from grandma&apos;s notebook.</li>
              <li>Tax-related receipts.</li>
              <li>Warranty receipts to file digitally.</li>
              <li>Important mail to keep digital + shred paper.</li>
              <li>Emergency contact lists / will (digital backup).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t buy a scanner</h3>
            <p className="text-sm text-muted-foreground">Standalone scanners $50-200 — mostly unnecessary now. Phone scanner apps make a sharper PDF in 5 seconds. The exception: bulk archiving (1000+ photos), where Epson FastFoto is faster. For occasional household needs, your phone is enough.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
