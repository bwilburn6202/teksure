import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function HomeWarrantyReality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Warranty Reality Check | TekSure" description="Are home warranty plans worth $50/month? Plain-English honest take on what they cover, what they deny, and when they actually pay off." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Warranty Reality Check</h1>
          <p className="text-lg text-muted-foreground">$600/year — does the math work?</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The honest take</h2>
            <p className="text-sm">Home warranties (American Home Shield, Choice, Cinch, etc.) cover repairs to appliances and home systems. Most consumer studies show they pay out less than premiums. Better Business Bureau ratings tend to be poor. <strong>Self-insurance (savings account) usually beats them.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How they work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay $40-70/month premium ($480-840/year).</li>
              <li>When something breaks, pay $75-125 service call fee.</li>
              <li>Warranty company sends THEIR contractor — you don&apos;t pick.</li>
              <li>Contractor diagnoses. May or may not cover it.</li>
              <li>If approved → they pay for repair (with limits).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common denial reasons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Pre-existing condition"</strong> — broken when you signed up.</li>
              <li><strong>"Improper maintenance"</strong> — you didn&apos;t change filters etc.</li>
              <li><strong>"Code violation"</strong> — needs a permit/code upgrade.</li>
              <li><strong>"Not covered" item</strong> — refrigerant, ductwork, code upgrades, modifications.</li>
              <li><strong>Capped payouts</strong> — $1,500 cap on AC compressors, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When a warranty makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You bought an older home (10+ years) and don&apos;t know condition of HVAC.</li>
              <li>Your appliances are 8-15 years old — multiple breakdowns expected.</li>
              <li>You don&apos;t want to vet contractors yourself.</li>
              <li>You have $0 emergency savings — predictable monthly cost helps.</li>
              <li>It came free with home purchase — use the first year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to skip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Newer home (under 10 years) with newer appliances.</li>
              <li>You have $5,000+ emergency savings — self-insure.</li>
              <li>You have a trusted local handyman or HVAC contractor.</li>
              <li>You&apos;ve had bad past experience with denied claims.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The math</h3>
            <p className="text-sm text-muted-foreground">$600/year × 10 years = $6,000. New AC = $5,000-8,000. New furnace = $4,000-6,000. New fridge = $1,500. Statistically you&apos;d come out about even — IF claims aren&apos;t denied. Most aren&apos;t. Better: open a high-yield savings account, deposit the same $50/month. After 10 years you have $7,000+ with interest. <strong>You</strong> pick the contractor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
