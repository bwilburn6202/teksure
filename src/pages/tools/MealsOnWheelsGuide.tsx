import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';

export default function MealsOnWheelsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meals on Wheels Guide for Seniors | TekSure" description="Free or low-cost meal delivery for seniors. Plain-English Meals on Wheels guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UtensilsCrossed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meals on Wheels</h1>
          <p className="text-lg text-muted-foreground">Hot meal + wellness check. Often free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hot meals delivered to seniors at home.</li>
              <li>Volunteer brings + checks on you.</li>
              <li>Daily wellness check = safety bonus.</li>
              <li>Mon-Fri usually, some weekends.</li>
              <li>Special diets accommodated.</li>
              <li>Free or low-cost (donation-based often).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Usually age 60+.</li>
              <li>Homebound (can&apos;t shop / cook regularly).</li>
              <li>NO income limit at most programs.</li>
              <li>Don&apos;t need to be poor — wellness program.</li>
              <li>Suggested donation $3-5/meal (waived if can&apos;t pay).</li>
              <li>Application + brief assessment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find local at <strong>mealsonwheelsamerica.org/find-meals</strong>.</li>
              <li>Or call Eldercare Locator 1-800-677-1116.</li>
              <li>Many waitlists — apply early.</li>
              <li>Some communities have multiple providers.</li>
              <li>Some special-diet only programs.</li>
              <li>Process: phone call → home visit → meals start.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior congregate meals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers serve lunch daily.</li>
              <li>Free or $3-5 suggested donation.</li>
              <li>Hot, balanced meals.</li>
              <li>Social activity bonus.</li>
              <li>Bingo, classes, games after.</li>
              <li>Find at Eldercare Locator.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free food programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SNAP (food stamps)</strong> — many seniors qualify, don&apos;t apply.</li>
              <li><strong>Senior Farmers Market Program</strong> — $20-50 vouchers.</li>
              <li><strong>Commodity Supplemental Food Program</strong> — monthly food boxes.</li>
              <li><strong>Food banks</strong> — feedingamerica.org. Free.</li>
              <li><strong>Religious community pantries</strong>.</li>
              <li><strong>Brown Bag Program</strong> — local, free groceries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Volunteer to deliver</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Active retirees love delivering.</li>
              <li>1-2 hr/day commitment.</li>
              <li>Meet seniors in your community.</li>
              <li>Sense of purpose.</li>
              <li>Often a route 5-10 stops.</li>
              <li>Apply via local Meals on Wheels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t hesitate to apply</h3>
            <p className="text-sm text-muted-foreground">No shame in this. Many wealthy seniors use it for safety check + nutritious meal. Family across country = peace of mind. Cooking for one is hard. Funded by Older Americans Act = your tax dollars. Use what&apos;s available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
