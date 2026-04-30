import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fish } from 'lucide-react';

export default function OmegaFishOilGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Omega-3 Fish Oil Guide for Seniors | TekSure" description="Omega-3 benefits + picks. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Omega-3 Fish Oil</h1>
          <p className="text-lg text-muted-foreground">Heart, brain, joints. The senior superfood.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart disease — reduces death.</li>
              <li>Brain — slows dementia decline.</li>
              <li>Joints — reduces arthritis pain.</li>
              <li>Eye — macular degeneration prevention.</li>
              <li>Mood — reduces depression.</li>
              <li>Cholesterol — lowers triglycerides.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best food sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Salmon</strong> — wild-caught best.</li>
              <li><strong>Sardines</strong> — cheap, sustainable.</li>
              <li><strong>Mackerel</strong>.</li>
              <li><strong>Anchovies</strong>.</li>
              <li><strong>Trout</strong>.</li>
              <li><strong>Walnuts</strong> — plant source.</li>
              <li><strong>Flax seeds</strong>.</li>
              <li>2 servings/week fish ideal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Supplement picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nordic Naturals</strong> — purity tested.</li>
              <li><strong>Carlson Labs</strong> — pharmaceutical grade.</li>
              <li><strong>Kirkland Costco</strong> — half price quality.</li>
              <li><strong>Nature Made</strong> — USP-verified.</li>
              <li>Look for: 1,000mg+ EPA + DHA.</li>
              <li>Avoid: cheap drugstore brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1,000mg combined EPA + DHA daily.</li>
              <li>Heart conditions — 2,000mg+ (doctor okay).</li>
              <li>Higher doses prescription-only (Vascepa).</li>
              <li>Take with meals = better absorption.</li>
              <li>Refrigerate after opening.</li>
              <li>Burping = take with food.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quality concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mercury — wild salmon has less than tuna.</li>
              <li>Rancidity — smell test (fishy = old).</li>
              <li>Heavy metals — purity certified.</li>
              <li>IFOS, USP, NSF labels.</li>
              <li>Pregnant women — limit tuna.</li>
              <li>Most senior diets safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drug interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blood thinners (Coumadin, Plavix) — increased bleeding.</li>
              <li>Aspirin daily — same risk.</li>
              <li>Stop 1 week pre-surgery.</li>
              <li>Tell doctor before procedures.</li>
              <li>Pharmacist can review.</li>
              <li>Drugs.com has checker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vegan alternatives</h3>
            <p className="text-sm text-muted-foreground">If you don&apos;t eat fish: Algae oil supplements (Ovega-3) — same omega-3s as fish. Walnuts, flaxseed, chia provide ALA — body converts to EPA/DHA poorly. Algae is best vegetarian option. Mediterranean diet rich in omega-3 sources. Studies confirm benefits whether food or supplement.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
