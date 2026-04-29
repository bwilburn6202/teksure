import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gavel } from 'lucide-react';

export default function FreeLegalAidForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Legal Aid for Seniors | TekSure" description="Free legal help for low-income seniors. Plain-English guide to legal aid programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gavel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Legal Aid</h1>
          <p className="text-lg text-muted-foreground">Help is available. Most don&apos;t know where.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">National resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Legal Services Corporation</strong> — lsc.gov. Find local LSC programs.</li>
              <li><strong>LawHelp.org</strong> — by state. Self-help + lawyer referrals.</li>
              <li><strong>Justice in Aging</strong> — justiceinaging.org. Senior-specific.</li>
              <li><strong>AARP Foundation Legal Counsel for Elderly</strong> — DC area.</li>
              <li><strong>Eldercare Locator</strong> — 1-800-677-1116. Refers to local legal help.</li>
              <li><strong>National Disability Rights Network</strong> — for disability cases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they help with (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wills + simple estate planning.</li>
              <li>Power of Attorney + advance directives.</li>
              <li>Medicaid + Medicare appeals.</li>
              <li>Social Security disputes.</li>
              <li>Landlord-tenant (eviction defense).</li>
              <li>Elder abuse cases.</li>
              <li>Consumer fraud + scams.</li>
              <li>Veterans benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Income limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most LSC programs: 125% of federal poverty.</li>
              <li>~$18,800/yr individual, $25,400 couple.</li>
              <li>Some go to 200% (~$30K/$40K).</li>
              <li>Senior-specific often higher limits.</li>
              <li>Don&apos;t assume you&apos;re too &quot;rich&quot; — apply.</li>
              <li>Sliding-scale options too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free for ALL seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SHIP</strong> — Medicare counseling. shiphelp.org.</li>
              <li><strong>SMP</strong> — Medicare fraud help. smpresource.org.</li>
              <li><strong>VA legal services</strong> — for veterans.</li>
              <li><strong>SSA local office</strong> — Social Security questions.</li>
              <li><strong>State Attorney General</strong> — consumer fraud.</li>
              <li><strong>Long-term Care Ombudsman</strong> — nursing home advocacy. ltcombudsman.org.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bar associations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most state bars offer Senior Lawyer Service.</li>
              <li>Free 30-min consults.</li>
              <li>Reduced fees for follow-up.</li>
              <li>Pro bono panels — free for income-eligible.</li>
              <li>Lawyer Referral Services — call your state bar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Court Forms Self-Help</strong> — most states have free forms.</li>
              <li><strong>Pro Se Help Centers</strong> — court staff help self-representers.</li>
              <li><strong>Library legal collections</strong> — research books + databases.</li>
              <li><strong>NCSC.org</strong> — court self-help.</li>
              <li>Don&apos;t self-represent in complex matters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hospice + nursing home</h3>
            <p className="text-sm text-muted-foreground">Many hospices include social workers who help with legal needs (Medicaid, advance directives, estate). Nursing home <strong>Long-term Care Ombudsman</strong> — your free advocate. Reports issues, fights for resident rights. Every state has one. Call 1-800-677-1116.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
