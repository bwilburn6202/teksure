import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HandCoins } from 'lucide-react';

export default function CharityScamCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Charity Scam Check for Seniors | TekSure" description="Verify charities before donating. Plain-English guide to avoid fake charity scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandCoins className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Charity Scam Check</h1>
          <p className="text-lg text-muted-foreground">Verify before you donate.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verification sites (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Charity Navigator</strong> — charitynavigator.org. Star ratings.</li>
              <li><strong>GuideStar / Candid</strong> — candid.org. Tax forms + transparency.</li>
              <li><strong>BBB Wise Giving Alliance</strong> — give.org. Standards.</li>
              <li><strong>CharityWatch</strong> — charitywatch.org. Tough A-F grades.</li>
              <li><strong>IRS Tax Exempt Search</strong> — apps.irs.gov/app/eos. Verify 501(c)(3).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common charity scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Names sound LIKE real charities — &quot;Police Officers Federation&quot; vs real Fraternal Order.</li>
              <li>Cold call for veterans, police, firefighters.</li>
              <li>Disaster scams after hurricanes / fires.</li>
              <li>GoFundMe scams — often unverifiable.</li>
              <li>&quot;Cancer kids&quot; — emotional bait, fake.</li>
              <li>Door-to-door collecting cash.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pressure to give immediately.</li>
              <li>Cash, gift card, or wire only.</li>
              <li>Won&apos;t share name + address.</li>
              <li>&quot;Thanks for your previous donation&quot; — you didn&apos;t donate.</li>
              <li>Vague mission — &quot;helping kids,&quot; &quot;supporting troops.&quot;</li>
              <li>Most money goes to &quot;administration&quot; not cause.</li>
              <li>No website or just a Facebook page.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart giving</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You start the donation — you call them.</li>
              <li>Pay by check or credit card (NEVER cash/wire).</li>
              <li>Get receipt for tax deduction.</li>
              <li>Pick 2-3 favorite charities. Give regularly.</li>
              <li>Look for 75%+ goes to programs (not admin).</li>
              <li>Local charities often more impact + transparent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">QCD: senior tax win</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Qualified Charitable Distribution from IRA.</li>
              <li>Age 70½+ — direct from IRA to charity.</li>
              <li>Counts toward RMD.</li>
              <li>Excludes from taxable income.</li>
              <li>Up to $108,000/year in 2026.</li>
              <li>Tell IRA custodian you want QCD.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Report charity fraud</h3>
            <p className="text-sm text-muted-foreground"><strong>State Attorney General</strong> — most have charity fraud divisions. <strong>FTC</strong> — reportfraud.ftc.gov. <strong>BBB</strong> — bbb.org/scamtracker. <strong>IRS</strong> — Form 13909 reports tax-exempt abuse. Also tell family — protect community.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
