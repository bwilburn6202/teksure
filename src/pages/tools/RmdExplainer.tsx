import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarClock, AlertTriangle } from 'lucide-react';

export default function RmdExplainer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Required Minimum Distribution (RMD) Explained | TekSure" description="Turning 73? The IRS makes you start taking money out of retirement accounts. Plain-English guide to RMDs, deadlines, and how to calculate." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarClock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Required Minimum Distribution (RMD)</h1>
          <p className="text-lg text-muted-foreground">Don't get stuck with a 25% penalty. The plain-English version.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What is an RMD?</h2>
            <p className="text-sm">After you turn <strong>73</strong> (under current law), the IRS requires you to start taking money out of your traditional 401(k), traditional IRA, 403(b), and similar retirement accounts every year. They want their tax money. The amount is calculated based on your age and account balance.</p>
            <p className="text-sm mt-2"><strong>Roth IRAs are exempt</strong> while you're alive. Roth 401(k)s used to require RMDs but no longer (as of 2024).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When do RMDs start?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Born 1951-1959:</strong> RMDs start at age 73.</li>
              <li><strong>Born 1960 or later:</strong> RMDs start at age 75.</li>
              <li><strong>Born before 1951:</strong> You\'ve already started.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Key deadlines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your first RMD:</strong> You can wait until April 1 of the year AFTER you turn 73. (But this means doing two in one calendar year — most people just take it the year they turn 73 to avoid that.)</li>
              <li><strong>Every RMD after:</strong> December 31 each year. Don't wait until December 30 — banks get backed up.</li>
              <li><strong>Best practice:</strong> Take it in early November. Plenty of buffer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h3 className="font-bold mb-2">The penalty if you miss it</h3>
                <p className="text-sm">Used to be 50%. Now <strong>25%</strong> of the missed amount (and only 10% if you fix it within 2 years). Still — costly. Set yourself a calendar reminder.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much do you have to take?</h2>
            <p className="text-sm mb-2">Formula: Account balance on Dec 31 of the prior year ÷ a number from the IRS table based on your age.</p>
            <p className="text-sm mb-2">Examples (using IRS Uniform Lifetime Table):</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Age 73 → divide by 26.5 → about 3.8% of balance</li>
              <li>Age 75 → divide by 24.6 → about 4.1%</li>
              <li>Age 80 → divide by 20.2 → about 5.0%</li>
              <li>Age 85 → divide by 16.0 → about 6.3%</li>
              <li>Age 90 → divide by 12.2 → about 8.2%</li>
            </ul>
            <p className="text-sm mt-3">For example, $500,000 in a traditional IRA at age 73: $500,000 ÷ 26.5 = $18,868 RMD that year.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to actually take it</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign into your retirement account (Fidelity, Vanguard, Schwab, or wherever).</li>
              <li>Look for "Required Minimum Distribution" or "RMD" in the menu. They calculate it for you.</li>
              <li>Pick how to take it: bank transfer, check, or move to another taxable account.</li>
              <li>Withhold federal tax (typically 10-20%). State tax too if your state taxes retirement income.</li>
              <li>Keep the confirmation. Add it to your tax records.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart RMD moves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Qualified Charitable Distribution (QCD):</strong> Send up to $105,000 from your IRA directly to a charity. It counts toward your RMD AND is tax-free. Best for the charitably inclined.</li>
              <li><strong>Combine accounts:</strong> If you have multiple traditional IRAs, you can take the total RMD from any one of them.</li>
              <li><strong>Multiple 401(k)s</strong> have to be taken separately — RMD from each.</li>
              <li><strong>Roth conversions before age 73</strong> reduce future RMDs because Roths don\'t have them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get help</h3>
            <p className="text-sm text-muted-foreground">RMDs aren't complicated, but the rules around early withdrawals, inheriting accounts, and penalty waivers ARE. A fee-only fiduciary advisor (one-time consult, $300-500) can save you thousands. Look at NAPFA.org. Or call your broker — Fidelity and Vanguard offer free 30-minute calls about RMDs to account holders.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
