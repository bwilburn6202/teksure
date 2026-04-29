import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function ConsultingSecondAct() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Consulting as Second Act for Senior Retirees | TekSure" description="Use career expertise as consultant. Plain-English consulting startup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Consulting Second Act</h1>
          <p className="text-lg text-muted-foreground">$50-300/hr. Best work of life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best second-act fields</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Healthcare</strong> — retired nurses, doctors, admins highly valued.</li>
              <li><strong>Finance</strong> — fractional CFO, bookkeeping for small biz.</li>
              <li><strong>HR</strong> — small businesses can&apos;t afford full-time.</li>
              <li><strong>Engineering</strong> — peer review, expert witness.</li>
              <li><strong>Education</strong> — curriculum, ed-tech, training.</li>
              <li><strong>Marketing</strong> — fractional CMO.</li>
              <li><strong>Tech</strong> — older systems / Cobol/AS400 actually high demand.</li>
              <li>Pre-existing network = clients ready.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup business</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LLC</strong> — protect personal assets ($100-300 setup).</li>
              <li>EIN from IRS — free.</li>
              <li>Business bank account.</li>
              <li>Liability insurance — Hiscox, Hartford ($300-1,000/yr).</li>
              <li>Accounting software (QuickBooks $30/mo).</li>
              <li>LinkedIn premium ($30/mo) — find clients.</li>
              <li>Simple website (Squarespace $16/mo).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find clients</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell EVERYONE in your network.</li>
              <li>Former employer often first client.</li>
              <li>LinkedIn — repost articles, comment thoughtfully.</li>
              <li><strong>Catalant</strong> — connects experts to companies.</li>
              <li><strong>Toptal</strong> — top consultants.</li>
              <li><strong>SCORE</strong> — also paid consulting through them.</li>
              <li>Speak at industry events — speakers get hired.</li>
              <li>Write LinkedIn articles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hourly = $50-300+ (your value).</li>
              <li>Flat fees often better — value-based.</li>
              <li>Monthly retainer = predictable income.</li>
              <li>Don&apos;t undercharge — establishes value.</li>
              <li>Take old salary / 1,800 hrs = baseline.</li>
              <li>Then DOUBLE — consultants earn more for same hour.</li>
              <li>Year 1 underpriced, year 2+ premium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decades of experience.</li>
              <li>Wide network.</li>
              <li>Pattern recognition (seen it all).</li>
              <li>No ladder-climbing politics.</li>
              <li>Clients value gray hair = wisdom.</li>
              <li>Schedule flexibility = parent + grandparent + travel.</li>
              <li>10-20 hrs/week often enough income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Self-employment tax 15.3%.</li>
              <li>Quarterly estimated taxes.</li>
              <li>Solo 401(k) — contribute up to $77K/yr (2026).</li>
              <li>SEP IRA easier alternative.</li>
              <li>Home office deduction.</li>
              <li>Health insurance premiums deductible.</li>
              <li>Talk to CPA — easily worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Encore career resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Encore.org</strong> — second-act careers focused on social impact. <strong>Senior PhDs</strong> — academic consulting. <strong>SCORE</strong> — small business mentoring (paid + volunteer). Best part: choose only projects that interest you. Skip the BS. Pure work.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
