import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function DmvOnlineServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DMV Online — Skip the Line | TekSure" description="Renew driver license, registration, real ID online. Plain-English picks for state DMV online services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DMV Online</h1>
          <p className="text-lg text-muted-foreground">Skip the line. Save the day.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What can you do online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Renew driver&apos;s license (most states).</li>
              <li>Renew vehicle registration.</li>
              <li>Order replacement / duplicate license.</li>
              <li>Update address.</li>
              <li>Pay tickets / fees.</li>
              <li>Check status of items.</li>
              <li>Schedule in-person appointments (often required).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real ID required May 2025</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After May 7, 2025 — Real ID required for domestic flights + federal buildings.</li>
              <li>Star or flag in corner = Real ID compliant.</li>
              <li>If yours doesn&apos;t have it — make appointment NOW.</li>
              <li>Need: Birth certificate, Social Security card, 2 proofs of address.</li>
              <li>Or US passport works as alternative — but DMV upgrade is cheaper.</li>
              <li>Check your state&apos;s DMV site for "Real ID".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior license renewal rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many states have shorter renewal periods for 65+ (4 yrs vs 8 yrs).</li>
              <li>Some require eye test for renewal at 65/70/75.</li>
              <li>Some require road test at 75/80.</li>
              <li>Most can do online renewal at least once.</li>
              <li>Check your state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find your state DMV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search "[your state] DMV online".</li>
              <li>Always go to OFFICIAL .gov site.</li>
              <li>Avoid "DMV-help" sites that charge fees for free services.</li>
              <li>Save site to home screen for next time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best appointment trick</h3>
            <p className="text-sm text-muted-foreground">DMV appointments fill up. Try first thing in the morning OR last hour. Tuesday + Wednesday slowest days. AAA members can do many DMV transactions at AAA office.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
