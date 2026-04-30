import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Box } from 'lucide-react';

export default function HelloFreshSeniorReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HelloFresh + Meal Kit Reviews for Seniors | TekSure" description="Are meal kits worth it for seniors? HelloFresh, Blue Apron, and senior-specific options compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Box className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Kits for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pre-portioned ingredients delivered weekly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What are meal kits?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Box delivered weekly with recipes + ingredients.</li>
              <li>Everything pre-measured for each meal.</li>
              <li>Just cook + eat — no menu planning needed.</li>
              <li>Skip weeks anytime, cancel anytime.</li>
              <li>Try new cuisines without buying odd ingredients.</li>
              <li>Keeps portion sizes correct.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HelloFresh — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Around $9–11 per serving.</li>
              <li>2 or 4 person portions.</li>
              <li>3–6 meals per week.</li>
              <li>Variety of cuisines + diet options.</li>
              <li>30-minute recipes typical.</li>
              <li>Frequent first-week discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other meal kit options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blue Apron — chef-quality recipes.</li>
              <li>Home Chef — more variety, customization.</li>
              <li>EveryPlate — cheapest, $5/serving.</li>
              <li>Sunbasket — organic + healthy focus.</li>
              <li>Green Chef — gluten-free, paleo, keto.</li>
              <li>Most have similar pricing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Silver Cuisine by BistroMD — heart-healthy, $10/meal.</li>
              <li>Mom&apos;s Meals — Medicare/Medicaid covered for some.</li>
              <li>Magic Kitchen Senior — simple reheat meals.</li>
              <li>BistroMD — diet-specific (diabetic, low sodium).</li>
              <li>Daily Harvest — smoothies + bowls, easy prep.</li>
              <li>Frozen meals require zero cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pros + cons for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pro: no menu planning or shopping.</li>
              <li>Pro: portion control built in.</li>
              <li>Pro: try new foods + cuisines.</li>
              <li>Con: more expensive than home cooking.</li>
              <li>Con: lots of packaging waste.</li>
              <li>Con: still requires actual cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When meal kits make sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recently widowed — restart cooking habit.</li>
              <li>Recovering from illness or surgery.</li>
              <li>Cooking for one feels overwhelming.</li>
              <li>Tired of same recipes.</li>
              <li>Want to cook but planning is exhausting.</li>
              <li>Try one box — pause anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one week with sign-up discount</h3>
            <p className="text-sm text-muted-foreground">All meal kit companies offer 50%+ off your first box — usually around $5–6 per serving. Try ONE week of HelloFresh or EveryPlate (cheapest) to see if you like the format. If yes, continue. If no, cancel before next box ships. For seniors who feel cooking has become a chore, meal kits can rekindle the joy of cooking without the planning burden.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
