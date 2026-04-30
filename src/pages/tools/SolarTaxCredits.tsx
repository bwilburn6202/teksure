import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SolarTaxCredits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Solar Tax Credits for Seniors | TekSure" description="30% federal tax credit. Plain-English solar incentives for senior homeowners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Solar Tax Credits</h1>
          <p className="text-lg text-muted-foreground">30% federal credit. Don&apos;t miss it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal credit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30% off solar install costs.</li>
              <li>Includes panels, battery, inverters.</li>
              <li>Tax credit (not rebate) — reduces taxes owed.</li>
              <li>2026 still 30%.</li>
              <li>Drops 26% in 2033, 22% in 2034.</li>
              <li>Use TurboTax Form 5695.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">State + utility rebates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many states add 5-30% more.</li>
              <li>NY, MA, CA — generous.</li>
              <li>Net metering — sell excess to utility.</li>
              <li>SREC programs in some states.</li>
              <li>DSIRE (dsireusa.org) — state incentive search.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it for seniors?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cost: $15K-30K typical 6-10 kW system.</li>
              <li>After credits: $10K-20K.</li>
              <li>Saves $1,500-3,000/yr electricity.</li>
              <li>Payback 5-12 years.</li>
              <li>Worth it if: long-term homeowner, sunny location.</li>
              <li>Less worth: shaded roof, planning to move.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income-tax-credit only — must owe taxes.</li>
              <li>Carry forward unused credit.</li>
              <li>Adds home value (sometimes).</li>
              <li>20-30 year roof needed.</li>
              <li>Fixed income benefits more.</li>
              <li>Adds complexity if home sold.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick installer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get 3+ quotes.</li>
              <li>NABCEP-certified installer.</li>
              <li>Local + been in business 5+ years.</li>
              <li>NEVER lease — own outright.</li>
              <li>Avoid pushy door-to-door salespeople.</li>
              <li>Read EnergySage reviews.</li>
              <li>Don&apos;t finance via solar company (high rates).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Solar leases = avoid</h3>
            <p className="text-sm text-muted-foreground">Solar leases / PPAs lock you in 20+ years. Tax credits go to LEASING company. Hard to sell home with lease attached. Senior tip: only OWN solar. Pay cash if can. Solar loan with credit union if not. Run from leases.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
