import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function MedicarePartDPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Part D Picker — Pick the Right Drug Plan | TekSure" description="Open Enrollment is October-December every year. Picking the right Part D plan can save thousands. Plain-English walkthrough using medicare.gov." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Part D Picker</h1>
          <p className="text-lg text-muted-foreground">Pick the right drug plan. Save thousands. Free official tool.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Part D plans change every year. The plan that was best last year may have raised premiums, dropped your medication, or added restrictions. Most people who never re-shop are overpaying by $500-$2,000 a year. Open Enrollment is <strong>Oct 15 - Dec 7</strong> every year.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use the official Medicare Plan Finder (free)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-primary underline">medicare.gov/plan-compare</a>.</li>
              <li>Click "Find Drug & Health Plans" or "Compare 2026 plans".</li>
              <li>Type your zip code.</li>
              <li>Choose "Drug plan (Part D)".</li>
              <li>Enter EVERY medication you take — exact names, doses, how often.</li>
              <li>Pick your preferred pharmacy. (Walmart, CVS, Walgreens, etc. — costs vary by plan.)</li>
              <li>The site shows EVERY available plan with: annual cost, monthly premium, what each drug costs.</li>
              <li>Sort by "Lowest drug + premium cost".</li>
              <li>Pick the cheapest — that's your plan.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Important:</strong> This requires creating a free Medicare.gov account. Use Login.gov to sign up.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What "annual cost" includes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Monthly premium x 12.</li>
              <li>Annual deductible (what you pay before the plan kicks in).</li>
              <li>Each prescription's copay or coinsurance for the whole year.</li>
              <li>Any "donut hole" coverage gap costs.</li>
            </ul>
            <p className="text-sm mt-2">A plan with a $25/month premium might be more expensive overall than a $75/month plan if your meds aren\'t in its formulary. The Plan Finder does this math for you.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Things to check on each plan</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Are ALL my drugs on the formulary?</strong> If even one isn\'t, that drug costs full price.</li>
              <li><strong>Tier:</strong> Most generics are Tier 1 ($0-3). Brand-name drugs Tier 2-3 ($30-80). Specialty drugs Tier 4-5 (much more).</li>
              <li><strong>Pharmacy network:</strong> "Preferred" pharmacy = lowest copay. "Standard" = higher. Some plans only cover at certain chains.</li>
              <li><strong>Prior authorization:</strong> Some drugs need extra paperwork to get covered. Look for the "PA" mark.</li>
              <li><strong>Star rating:</strong> 1 to 5 stars. 4-5 means good customer service and accuracy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your prescription costs are high</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Extra Help</strong> (Low-Income Subsidy) — if you have less than $23,895 income, you qualify for big premium and copay reductions. Apply at SSA.gov.</li>
              <li><strong>State pharmaceutical assistance</strong> — many states have programs. Check at <strong>medicarerights.org</strong> or your state\'s SHIP office.</li>
              <li><strong>Manufacturer assistance</strong> — for expensive brand drugs, search the drug name + "patient assistance program".</li>
              <li><strong>The new $2,000 cap (2025+):</strong> Total out-of-pocket on Part D drugs is capped at $2,000/year. Big help for people on expensive medications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground">SHIP — your State Health Insurance Assistance Program — offers free, unbiased Medicare counseling. They\'ll sit with you and run the Plan Finder. Find yours at <strong>shiphelp.org</strong> or call 1-877-839-2675.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
