import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet } from 'lucide-react';

export default function ExcelForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Excel for Seniors | TekSure" description="Master Excel basics. Plain-English Excel guide for senior budgets + lists." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sheet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Excel for Seniors</h1>
          <p className="text-lg text-muted-foreground">Budget tracking. Address books. Power tool.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Track monthly budget.</li>
              <li>Christmas card mailing list.</li>
              <li>Medication tracker (with dates).</li>
              <li>Family genealogy.</li>
              <li>Travel planning.</li>
              <li>Investment tracking.</li>
              <li>Recipe collection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 essential skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type in cells (click cell, type).</li>
              <li>Sum a column: =SUM(A1:A10).</li>
              <li>Average: =AVERAGE(B1:B10).</li>
              <li>Sort A-Z: Data → Sort.</li>
              <li>Filter to find: Data → Filter.</li>
              <li>That covers 80% of senior needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beginner template</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File → New — search &quot;budget.&quot;</li>
              <li>Free monthly budget template.</li>
              <li>Type in your numbers.</li>
              <li>Excel does math.</li>
              <li>See where money goes.</li>
              <li>Same for: invoice, expense report, calendar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Larger zoom (View → Zoom → 150%).</li>
              <li>Bigger column widths (drag column line).</li>
              <li>Bold headers — easier to read.</li>
              <li>Borders separate areas.</li>
              <li>Color cells (categorize income/expense).</li>
              <li>Print preview before printing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Sheets</strong> — same idea, FREE.</li>
              <li>Browser-based.</li>
              <li>Works on any device.</li>
              <li>Auto-saves.</li>
              <li>Share with family easily.</li>
              <li>Can open Excel files.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t over-learn</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t need to know macros, pivot tables, VLOOKUP. Most seniors live happily with: type data, =SUM, sort, filter, print. Add features as needed. Free YouTube tutorials abundant. Library classes too.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
