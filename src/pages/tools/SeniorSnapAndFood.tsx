import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorSnapAndFood() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior SNAP & Food Assistance — Free Money for Groceries | TekSure" description="Only 48% of eligible seniors use SNAP food benefits. Plain-English guide to qualifying, applying, and other food assistance programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior SNAP & Food Assistance</h1>
          <p className="text-lg text-muted-foreground">Money for groceries you may have already qualified for.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The shocking truth</h2>
            <p className="text-sm">Only about 48% of eligible adults 60+ actually use SNAP. Many feel embarrassed to apply. Many don\'t know they\'d qualify. The average senior gets $179/month in benefits. Free money for groceries.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SNAP eligibility (60+)</h2>
            <p className="text-sm mb-2">Special senior rules — easier than for younger adults:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Single 60+: gross income up to $2,510/month (2025).</li>
              <li>Couple both 60+: $3,408/month.</li>
              <li>Higher allowed for people with disability income.</li>
              <li>Can deduct medical expenses over $35/month (a big help for many).</li>
              <li>Asset limits often waived or higher for seniors.</li>
            </ul>
            <p className="text-sm mt-2">Even if you think you don\'t qualify — APPLY. The medical deduction lifts many seniors over the line.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to apply</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to your state\'s SNAP page. Search "[state] SNAP application".</li>
              <li>Or use the federal "Apply for SNAP" page at fns.usda.gov.</li>
              <li>Or call your local <strong>Area Agency on Aging</strong> — they help seniors apply for free.</li>
              <li>Application: 30-60 minutes. Income, expenses, household.</li>
              <li>You may need a phone interview.</li>
              <li>Decision usually in 30 days.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other food programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Commodity Supplemental Food Program (CSFP)</strong> — monthly free food box for low-income seniors 60+. $15,000-30,000 income limit. Search "[state] CSFP".</li>
              <li><strong>Meals on Wheels</strong> — home-delivered meals for housebound seniors. Free or low-cost.</li>
              <li><strong>Senior congregate meals</strong> — meals at senior centers, often free or $2-5 donation.</li>
              <li><strong>Food banks</strong> — find local at <strong>feedingamerica.org</strong>. No income test for many.</li>
              <li><strong>Brown Bag Programs</strong> — monthly groceries for seniors. Many cities.</li>
              <li><strong>Soup kitchens</strong> — free hot meal, no questions asked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use SNAP at most stores</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Walmart, Aldi, Kroger, Publix, Whole Foods.</li>
              <li>Most local grocery stores.</li>
              <li><strong>Online groceries</strong> — Walmart+, Amazon, Whole Foods, Aldi all accept SNAP for delivery and pickup.</li>
              <li>Farmers markets — many accept SNAP and DOUBLE the value with "Double Up" programs.</li>
              <li>Restaurants in CA, AZ, FL, IL, RI, MD, KY, NJ — RMP (Restaurant Meals Program) for seniors and disabled.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help applying</h3>
            <p className="text-sm text-muted-foreground"><strong>Eldercare Locator</strong> — 1-800-677-1116 or eldercare.acl.gov. Connects you to your local Area Agency on Aging, who help seniors apply for SNAP, CSFP, Meals on Wheels, and everything else for free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
