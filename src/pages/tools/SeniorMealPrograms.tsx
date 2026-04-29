import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorMealPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Meal Programs | TekSure" description="Meals on Wheels, congregate meals, SNAP. Plain-English guide to free + low-cost senior meal programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Meal Programs</h1>
          <p className="text-lg text-muted-foreground">Help eating well — for free or cheap.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Meals on Wheels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free or low-cost (donation-based) hot meals delivered to homebound seniors.</li>
              <li>Daily delivery + welfare check ("How are you today?").</li>
              <li>Find local: <strong>mealsonwheelsamerica.org</strong> or call your county.</li>
              <li>5,000+ programs nationwide. Funding from Older Americans Act.</li>
              <li>For homebound, isolated, or recovering-from-hospital seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Congregate meal programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free or $2-5 lunches at senior centers.</li>
              <li>Hot meal + companions + occasional activities.</li>
              <li>Federally funded. No income limits in most cases.</li>
              <li>Reduces isolation as much as nutrition.</li>
              <li>Find at local senior center, library, or YMCA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SNAP (food stamps)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most seniors don&apos;t know they qualify. 60+ have higher income limits.</li>
              <li>Average senior benefit: $130/month.</li>
              <li>Apply at <strong>fns.usda.gov/snap</strong>.</li>
              <li>SSI alone often qualifies you.</li>
              <li>Senior-only application form is shorter.</li>
              <li>Use online for groceries, farmers markets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free food</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior Farmers Market Coupons</strong> — $20-50/year for fresh produce.</li>
              <li><strong>CSFP (Commodity Supplemental Food)</strong> — monthly food box for low-income 60+.</li>
              <li><strong>Local food pantries</strong> — find at <strong>feedingamerica.org</strong>.</li>
              <li><strong>Hospital meal-after-discharge programs</strong> — Mom&apos;s Meals or similar.</li>
              <li><strong>VA</strong> — meals for vets in many circumstances.</li>
              <li><strong>211 hotline</strong> — call 211, ask for senior meal resources locally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare Advantage food benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many Medicare Advantage plans include "OTC + grocery" allowance — $50-200/quarter.</li>
              <li>Some provide post-hospital meals (Mom&apos;s Meals) FREE.</li>
              <li>Special Needs Plans (SNP) for diabetes/heart often have meal benefit.</li>
              <li>Check your plan or call SHIP (1-800-MEDICARE).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t feel ashamed</h3>
            <p className="text-sm text-muted-foreground">10 million US seniors are food-insecure. These programs were built for that. Using them is participating in your community, not "taking handouts." Senior centers especially welcome new faces.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
