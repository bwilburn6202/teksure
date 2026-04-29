import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function NursingHomeChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nursing Home Checklist | TekSure" description="Pick a quality nursing home. Plain-English checklist + Medicare star ratings + tour questions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nursing Home Checklist</h1>
          <p className="text-lg text-muted-foreground">Most stressful decision. Get it right.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1: Medicare Care Compare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>medicare.gov/care-compare — FREE.</li>
              <li>Star ratings 1-5.</li>
              <li>Health inspections, staffing, quality measures.</li>
              <li>Pick 4-5 star locations only.</li>
              <li>Check most recent inspection report.</li>
              <li>Avoid &quot;Special Focus Facilities&quot; (worst).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tour visit checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smell</strong> — clean? Or strong cleaner masking?</li>
              <li><strong>Residents</strong> — engaged or sleeping in chairs?</li>
              <li><strong>Staff</strong> — chatting with residents? Rushed?</li>
              <li><strong>Call lights</strong> — answered quickly?</li>
              <li><strong>Food</strong> — eat lunch there. Real food or processed?</li>
              <li><strong>Activities</strong> — varied calendar? Posted?</li>
              <li><strong>Outdoor space</strong> — accessible?</li>
              <li><strong>Rooms</strong> — clean? Private bathroom?</li>
              <li>Visit 2-3 times unannounced including weekends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Questions to ask</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Staff-to-resident ratio (day + night)?</li>
              <li>RN coverage 24/7?</li>
              <li>Staff turnover rate (lower = better)?</li>
              <li>How are bedsores prevented?</li>
              <li>How handle dementia behaviors?</li>
              <li>Falls prevention program?</li>
              <li>How handle urgent medical issues?</li>
              <li>Doctor visits — scheduled or as-needed?</li>
              <li>Transfer hospital partners?</li>
              <li>Cost + what&apos;s included?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost + payment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average: $9,000-12,000/month nationally.</li>
              <li>Medicare covers 100 days post-hospital ONLY.</li>
              <li>Medicaid covers long-term once savings spent down.</li>
              <li>Long-term care insurance — check policy.</li>
              <li>VA Aid &amp; Attendance — for veterans.</li>
              <li>Self-pay until Medicaid eligible.</li>
              <li>5-year look-back on Medicaid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Once admitted</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit OFTEN — best advocate.</li>
              <li>Get to know aides + nurses by name.</li>
              <li>Watch for changes (skin breakdown, weight loss).</li>
              <li>Be present at care meetings.</li>
              <li>Document concerns in writing.</li>
              <li>Long-term care ombudsman = free advocate. ltcombudsman.org.</li>
              <li>Switch facilities if quality declines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Alternatives first</h3>
            <p className="text-sm text-muted-foreground">Most seniors want to stay home. Consider in-home care + adult day care + assisted living before nursing home. Nursing home best for those needing 24/7 medical care. PACE program (see /tools/adult-day-care-guide) — alternative for Medicaid-eligible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
