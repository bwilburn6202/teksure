import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility } from 'lucide-react';

export default function SsdiVsSsiCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SSDI vs SSI Coach — Disability Benefits | TekSure" description="Two different federal disability programs. Plain-English breakdown of SSDI (work history) vs SSI (low income). How to apply, common mistakes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Accessibility className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SSDI vs SSI Coach</h1>
          <p className="text-lg text-muted-foreground">Two different programs. Different rules. Plain English.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Quick difference</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>SSDI</strong> — for people who can\'t work due to disability AND have a work history (paid into Social Security).</li>
              <li><strong>SSI</strong> — for low-income disabled, blind, or seniors 65+ regardless of work history.</li>
              <li>You can sometimes get both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SSDI (Social Security Disability Insurance)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You worked at least 5 of the last 10 years.</li>
              <li>You can\'t do "substantial work" (under $1,620/month for 2025).</li>
              <li>Your disability has lasted (or is expected to last) 12+ months.</li>
              <li>Average benefit: $1,580/month (varies by your earnings history).</li>
              <li>After 24 months on SSDI → automatic Medicare eligibility (regardless of age).</li>
              <li>Converts to retirement Social Security at full retirement age.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SSI (Supplemental Security Income)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>For people 65+, blind, or disabled.</li>
              <li>Income limit: under ~$1,000/month per person.</li>
              <li>Asset limit: $2,000 individual, $3,000 couple (excluding home and one car).</li>
              <li>Maximum 2025 federal benefit: $943/month single, $1,415 couple. State may add a supplement.</li>
              <li>Recipients usually qualify for Medicaid, SNAP, housing assistance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to apply</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Apply online at <strong>ssa.gov/applyfordisability</strong>.</li>
              <li>Or call 1-800-772-1213.</li>
              <li>Or visit a local SSA office (long lines, but personal help).</li>
              <li>Application takes 3-5 hours — gather records first:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>Medical records, doctor names + addresses.</li>
                  <li>Work history (15+ years).</li>
                  <li>Names and dates of medications.</li>
                  <li>Job descriptions explaining what made the work hard.</li>
                </ul>
              </li>
              <li>Initial decision: 6-8 months. About 35% are approved on first try.</li>
              <li>If denied — APPEAL. Most successful claims get approved on appeal.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get help — fee is free if you don\'t win</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Disability lawyers</strong> — typically work on contingency. They get paid only if you win, capped at 25% of back-pay (max ~$7,200 in 2025). Look for "non-attorney representative" too — same idea, sometimes cheaper.</li>
              <li><strong>State Vocational Rehabilitation</strong> — free.</li>
              <li><strong>NOSSCR.org</strong> — find disability advocates by state.</li>
              <li><strong>Veterans</strong> — VFW/American Legion can help with VA disability AND SSDI.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common mistakes</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Not getting medical documentation before applying.</li>
              <li>Not telling doctors specifically what tasks you can\'t do.</li>
              <li>Working too much during application — even part-time work can disqualify you.</li>
              <li>Giving up after first denial — appeals win 50%+ of the time.</li>
              <li>Hiring "paperwork mills" advertised on TV — go with vetted advocates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you\'re close to retirement age</h3>
            <p className="text-sm text-muted-foreground">If you\'re within a few years of full retirement age, sometimes early retirement is faster than fighting for SSDI. SSDI converts to retirement at FRA anyway. A disability lawyer can help you decide which path is better for your situation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
