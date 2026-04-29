import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function BenefitsCheckUpTool() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="BenefitsCheckUp.org for Seniors | TekSure" description="Free tool finds benefits you qualify for. Plain-English NCOA guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BenefitsCheckUp.org</h1>
          <p className="text-lg text-muted-foreground">Free tool. Find $1,000s in benefits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free service from National Council on Aging.</li>
              <li>Asks questions about you.</li>
              <li>Matches you to 2,500+ benefit programs.</li>
              <li>Federal, state, local programs.</li>
              <li>Average senior qualifies for $5,000+/yr in unused benefits.</li>
              <li>Takes 15-30 min.</li>
              <li>Anonymous if want.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Programs it finds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SNAP (food stamps).</li>
              <li>Medicare Savings Programs.</li>
              <li>Medicare Extra Help (drug costs).</li>
              <li>LIHEAP (energy bills).</li>
              <li>Property tax relief.</li>
              <li>State pharmaceutical programs.</li>
              <li>Senior employment.</li>
              <li>Transportation.</li>
              <li>Housing assistance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to benefitscheckup.org.</li>
              <li>FREE — no signup required.</li>
              <li>Enter ZIP code.</li>
              <li>Answer income + situation questions.</li>
              <li>See list of programs you qualify for.</li>
              <li>Print results.</li>
              <li>Apply for each one (takes time).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most-missed benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SNAP</strong> — many seniors qualify, don&apos;t apply.</li>
              <li><strong>Medicare Savings Programs</strong> — pays Part B premium.</li>
              <li><strong>Extra Help</strong> — drug subsidies.</li>
              <li><strong>Property tax exemptions</strong> — most states.</li>
              <li><strong>LIHEAP</strong> — utility bill help.</li>
              <li><strong>Veterans Aid + Attendance</strong> — for vets needing care.</li>
              <li>Apply for ALL — programs don&apos;t auto-enroll.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free application help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eldercare Locator</strong> — 1-800-677-1116.</li>
              <li><strong>Area Agency on Aging</strong> — local office helps.</li>
              <li><strong>SHIP</strong> — Medicare-specific.</li>
              <li><strong>2-1-1</strong> — local social services hotline.</li>
              <li>Many programs assigned through aging services.</li>
              <li>Don&apos;t pay for application help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Higher income limits</h3>
            <p className="text-sm text-muted-foreground">Many seniors think they&apos;re too &quot;rich&quot; for benefits. Income limits often higher than expected. Many seniors with $40-60K/yr qualify for programs. Asset limits often EXCLUDE home + 1 car. Check — could save $5K+/year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
