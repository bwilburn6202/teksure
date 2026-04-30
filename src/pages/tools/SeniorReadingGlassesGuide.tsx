import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorReadingGlassesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reading Glasses Guide for Seniors | TekSure" description="Drugstore reading glasses, prescription readers, and which strength to buy for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reading Glasses</h1>
          <p className="text-lg text-muted-foreground">Drugstore vs prescription. What to buy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drugstore reading glasses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10–$30 at any pharmacy.</li>
              <li>Strengths +1.00 to +4.00.</li>
              <li>Both eyes same prescription.</li>
              <li>No prescription needed.</li>
              <li>Good for casual reading.</li>
              <li>Buy 3+ pairs — keep around the house.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which strength to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>40s: +1.00 to +1.50.</li>
              <li>50s: +1.50 to +2.00.</li>
              <li>60s: +2.00 to +2.50.</li>
              <li>70s+: +2.50 to +3.50.</li>
              <li>Try in store — find clearest reading distance.</li>
              <li>Strength may differ in each eye — see optometrist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need prescription</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Astigmatism — drugstore won&apos;t correct.</li>
              <li>Different strength each eye.</li>
              <li>Reading + distance both needed (progressives).</li>
              <li>Bifocals.</li>
              <li>Eye conditions — cataracts, etc.</li>
              <li>If drugstore feels &quot;off&quot; — see eye doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Multiple pairs — bedside, kitchen, car, purse.</li>
              <li>Magnetic neck holder — never lost.</li>
              <li>Reading glasses lanyard.</li>
              <li>Different strengths for different distances.</li>
              <li>Computer glasses (lower strength) for screens.</li>
              <li>Sunglass readers for outside.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best places to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CVS, Walgreens — pricey but convenient.</li>
              <li>Dollar Tree, Family Dollar — $1–$5 each, good for backup.</li>
              <li>Costco — quality readers in 3-packs.</li>
              <li>Amazon — wide selection, cheaper.</li>
              <li>Five Below — $5 reading glasses.</li>
              <li>Eyebobs — designer readers if budget allows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Computer glasses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slightly weaker than reading glasses.</li>
              <li>Designed for 18–24 inches (computer distance).</li>
              <li>Often blue-light filtering.</li>
              <li>Reduces eye strain.</li>
              <li>Helpful for hours of computer use.</li>
              <li>$20–$40 for blue-light readers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get a full eye exam first</h3>
            <p className="text-sm text-muted-foreground">Before stocking up on drugstore readers, get a full eye exam annually after age 60. Many seniors think they just need readers when they actually have early cataracts, glaucoma, or macular degeneration that need treatment. Once your eyes are checked, buy 5 pairs of $5 readers from the dollar store and scatter them throughout the house. The bedside, kitchen, and car pair will save you constant frustration.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
