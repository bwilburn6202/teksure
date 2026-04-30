import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function AgingInPlaceModifications() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aging-in-Place Home Modifications | TekSure" description="Grab bars, walk-in tubs, ramps. Plain-English picks for senior home modifications + free programs that pay for them." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aging-in-Place Modifications</h1>
          <p className="text-lg text-muted-foreground">Make home senior-safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bathroom — most important</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Grab bars</strong> next to toilet + in shower ($30-100 each + install).</li>
              <li><strong>Walk-in shower</strong> — replaces tub. $5K-15K.</li>
              <li><strong>Walk-in tub</strong> — for those who really love a bath. $5K-20K.</li>
              <li><strong>Raised toilet seat</strong> ($30-100) — easier on hips.</li>
              <li><strong>Non-slip mat</strong> in shower + outside ($15-30).</li>
              <li><strong>Shower seat / bench</strong> — sit while bathing.</li>
              <li><strong>Handheld shower head</strong> with long hose.</li>
              <li>60% of senior falls happen in bathroom. Spend money here first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Throughout the home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Brighter lighting</strong> — dimmer eyes need 2x light.</li>
              <li><strong>Motion-sensor night lights</strong> in halls + bathroom.</li>
              <li><strong>Lever-style door handles</strong> — easier than knobs (arthritis).</li>
              <li><strong>Stair handrails</strong> on BOTH sides.</li>
              <li><strong>Remove throw rugs</strong> — trip hazards.</li>
              <li><strong>Wider doorways</strong> for walker (32" minimum).</li>
              <li><strong>Single-floor living</strong> — convert ground floor to bedroom + bath.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kitchen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pull-out pantry shelves.</li>
              <li>Lever-style faucets.</li>
              <li>Lower microwave (counter level, not over stove).</li>
              <li>Auto shut-off for stove (iGuardStove $400).</li>
              <li>Induction cooktop — safer (no flame, surface stays cool).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + low-cost help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Habitat for Humanity Aging-in-Place</strong> — free repairs for low-income.</li>
              <li><strong>Rebuilding Together</strong> — free annual repair days.</li>
              <li><strong>Veterans</strong> — VA HISA grant up to $6,800 for home modifications.</li>
              <li><strong>Older Americans Act funds</strong> — through Area Agency on Aging.</li>
              <li><strong>USDA Section 504 Loans</strong> — low-interest rural senior repairs.</li>
              <li><strong>State Medicaid HCBS waiver</strong> — pays for some mods.</li>
              <li><strong>Tax deductions</strong> — medically-required mods may be deductible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire CAPS contractor</h2>
            <p className="text-sm">"CAPS" = Certified Aging-in-Place Specialist. Trained for senior modifications. Find at NAHB.org. Often costs same as regular contractor + actually understands senior needs.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free home assessment</h3>
            <p className="text-sm text-muted-foreground">Many Area Agencies on Aging do FREE in-home safety assessments. Catch hazards you don&apos;t notice. <strong>aarp.org/homefit</strong> also has free guide. <strong>1-800-677-1116</strong> Eldercare Locator finds your local AAA.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
