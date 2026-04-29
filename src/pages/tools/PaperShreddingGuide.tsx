import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

export default function PaperShreddingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="What to Shred — Paper Records Guide | TekSure" description="What to keep, what to shred, and where to shred safely. Plain-English guide to paper records and identity protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trash2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paper Shredding Guide</h1>
          <p className="text-lg text-muted-foreground">Shred smart. Keep less. Stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Always SHRED</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anything with Social Security number.</li>
              <li>Bank statements over 1 year old (digital copies fine).</li>
              <li>Credit card statements over 1 year old.</li>
              <li>Pay stubs over 1 year (after W-2 received).</li>
              <li>Old utility bills.</li>
              <li>Pre-approved credit card offers — daily.</li>
              <li>Medical bills after paid + 1 year.</li>
              <li>Old insurance documents (after replaced).</li>
              <li>ATM receipts after reconciled.</li>
              <li>Old voided checks.</li>
              <li>Convenience checks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">KEEP forever (paper or scan)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birth/death/marriage certificates.</li>
              <li>Social Security card.</li>
              <li>Passports (current + recent expired).</li>
              <li>Will, trust, power of attorney.</li>
              <li>Property deeds.</li>
              <li>Vehicle titles.</li>
              <li>Military discharge papers (DD-214).</li>
              <li>Adoption papers.</li>
              <li>Diplomas + transcripts.</li>
              <li>Pension documents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Keep TEMPORARILY</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tax returns</strong> — 7 years (IRS audit window).</li>
              <li><strong>Tax-supporting docs</strong> — receipts, donation logs — 7 years.</li>
              <li><strong>Home improvement receipts</strong> — until you sell + 3 years.</li>
              <li><strong>Vehicle records</strong> — until you sell.</li>
              <li><strong>Pay stubs</strong> — until W-2 received.</li>
              <li><strong>Major purchase receipts</strong> — for warranty period.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to shred</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Home shredder</strong> — $40-150 cross-cut. Brands: Fellowes, AmazonBasics. Skip strip-cut (less secure).</li>
              <li><strong>FREE community shred days</strong> — banks, credit unions, AARP host these spring/fall. Search "[your city] free shred day".</li>
              <li><strong>Staples / Office Depot / UPS Store</strong> — $1-2/lb shredding service.</li>
              <li><strong>Iron Mountain Shred Day</strong> — major free events.</li>
              <li>Don&apos;t forget to remove paper clips + staples — most modern shredders handle them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Go digital</h3>
            <p className="text-sm text-muted-foreground">Scan and save important docs digitally. Most banks and brokerages let you opt out of paper statements — just download yearly tax PDFs. After 3 months, you&apos;ll generate 80% less paper. See /tools/scanner-app-picks for free scanning apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
