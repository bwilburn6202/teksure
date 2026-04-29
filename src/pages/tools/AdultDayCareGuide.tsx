import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function AdultDayCareGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adult Day Care Guide | TekSure" description="Adult day services help seniors + caregivers. Plain-English guide to costs, types, finding programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adult Day Care</h1>
          <p className="text-lg text-muted-foreground">Caregiver respite. Senior socialization. Both win.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is adult day care?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drop-off care 4-10 hrs/day, weekdays.</li>
              <li>Activities, meals, social time.</li>
              <li>Senior comes home at night.</li>
              <li>Caregiver gets break to work, errands, rest.</li>
              <li>Senior gets stimulation + new friends.</li>
              <li>Bridge between independent living + nursing home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 main types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Social model</strong> — for active seniors. Activities, meals, friends.</li>
              <li><strong>Medical model (ADHC)</strong> — for those needing nursing help. Medication management, PT.</li>
              <li><strong>Specialized dementia care</strong> — secure, dementia-trained staff.</li>
              <li>Pick based on your senior&apos;s needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average: $80-100/day. $20K-25K/year.</li>
              <li>1/3 cost of in-home aide.</li>
              <li>1/4 cost of assisted living.</li>
              <li>Medicaid covers in many states (PACE program).</li>
              <li>VA benefits cover for veterans.</li>
              <li>Long-term care insurance often covers.</li>
              <li>Sliding scale at non-profit centers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eldercare Locator</strong> — eldercare.acl.gov / 1-800-677-1116. FREE.</li>
              <li><strong>Area Agency on Aging</strong> — local list.</li>
              <li><strong>NADSA</strong> — nadsa.org. National directory.</li>
              <li><strong>PACE program</strong> — npaonline.org. Medicaid-funded.</li>
              <li>Tour 2-3 before deciding.</li>
              <li>Trial day before committing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tour checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Staff-to-client ratio (1:6 minimum, 1:4 for dementia).</li>
              <li>Staff training in dementia + first aid.</li>
              <li>Activities calendar — varied, engaging.</li>
              <li>Meals on site (look at menu).</li>
              <li>Transportation provided?</li>
              <li>Medical staff on site?</li>
              <li>Outdoor space.</li>
              <li>Cleanliness + smell.</li>
              <li>How residents look — engaged or sleeping?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">PACE: best-kept secret</h3>
            <p className="text-sm text-muted-foreground"><strong>PACE (Program of All-Inclusive Care for the Elderly)</strong> — Medicare/Medicaid program. Covers ALL care: doctor, day care, meals, transport, in-home help. For seniors who&apos;d otherwise need nursing home but stay home. 270+ programs in 32 states. npaonline.org to find. Often FREE if Medicaid-eligible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
