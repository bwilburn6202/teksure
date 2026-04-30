import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SupplementSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Supplement Safety for Seniors | TekSure" description="Safe supplements + interactions. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Supplement Safety</h1>
          <p className="text-lg text-muted-foreground">Not all supplements safe. Get smart.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FDA reality</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Supplements NOT FDA-approved like drugs.</li>
              <li>No safety testing required.</li>
              <li>Claims often unverified.</li>
              <li>Quality varies dramatically.</li>
              <li>Look for USP, NSF, ConsumerLab seals.</li>
              <li>Trust = quality brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trusted brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nature Made</strong> — USP-verified.</li>
              <li><strong>Centrum / One A Day</strong> — established.</li>
              <li><strong>Kirkland (Costco)</strong> — quality + price.</li>
              <li><strong>Pure Encapsulations</strong> — premium.</li>
              <li><strong>NOW Foods</strong> — independent testing.</li>
              <li>Avoid: unfamiliar online brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common dangerous interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Warfarin + vitamin K</strong> = bleeding.</li>
              <li><strong>Statins + grapefruit/red yeast</strong>.</li>
              <li><strong>Ginkgo + blood thinners</strong>.</li>
              <li><strong>St. John&apos;s Wort + antidepressants</strong>.</li>
              <li><strong>Calcium + iron</strong> = each blocks other.</li>
              <li><strong>Vitamin K + heart meds</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SKIP these dangerous</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kava</strong> — liver damage.</li>
              <li><strong>Comfrey</strong> — liver toxic.</li>
              <li><strong>Ephedra</strong> — banned but reappears.</li>
              <li><strong>Yohimbe</strong> — heart issues.</li>
              <li><strong>&quot;Testosterone boosters&quot;</strong> — risky.</li>
              <li><strong>&quot;Detox cleanses&quot;</strong> — fake science.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk to doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bring complete supplement list.</li>
              <li>Mention before procedures.</li>
              <li>2 weeks pre-surgery — stop most.</li>
              <li>Pharmacist great resource.</li>
              <li>Drugs.com interaction checker.</li>
              <li>Blood thinner = HIGH alert.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Generally safe + helpful</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vitamin D3</strong> — most seniors low.</li>
              <li><strong>Calcium</strong> — bones.</li>
              <li><strong>B12</strong> — energy + nerves.</li>
              <li><strong>Omega-3</strong> — heart + brain.</li>
              <li><strong>Magnesium</strong> — sleep + muscles.</li>
              <li><strong>Probiotic</strong> — gut.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Less is more</h3>
            <p className="text-sm text-muted-foreground">Most adults need 1-2 supplements at most. More = waste of money. Mega-doses dangerous. Whole foods first. ConsumerLab.com — independent testing reports. Don&apos;t fall for &quot;senior-specific&quot; marketing. Your doctor is best supplement advisor. Save money + stay safe.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
