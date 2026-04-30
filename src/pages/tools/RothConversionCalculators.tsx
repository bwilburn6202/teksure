import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function RothConversionCalculators() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roth Conversion Calculators for Retirees | TekSure" description="Should you convert traditional IRA to Roth? Free calculators for retirement decisions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roth Conversions</h1>
          <p className="text-lg text-muted-foreground">Calculate tax-smart retirement moves.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Roth conversion?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Move money from Traditional IRA to Roth IRA.</li>
              <li>Pay taxes on conversion now.</li>
              <li>Tax-free growth + withdrawals later.</li>
              <li>No RMDs on Roth.</li>
              <li>Can pass tax-free to heirs.</li>
              <li>Often beneficial in low-income years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free calculators</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fidelity Roth Conversion calculator — free.</li>
              <li>Schwab Roth IRA Conversion — free.</li>
              <li>NewRetirement.com — free + paid.</li>
              <li>BankRate Roth calculator.</li>
              <li>All free with simple inputs.</li>
              <li>Try several for comparison.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When conversion makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income lower in retirement than working years.</li>
              <li>Years between retirement + 73 (RMD age).</li>
              <li>Want to leave tax-free inheritance.</li>
              <li>Enough cash to pay conversion tax.</li>
              <li>Expect higher taxes in future.</li>
              <li>Have many years of compound growth ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When NOT to convert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Need to pay taxes from IRA itself (defeats purpose).</li>
              <li>Already in highest tax bracket.</li>
              <li>Plan to leave to charity (charity pays no tax).</li>
              <li>Short life expectancy.</li>
              <li>State taxes very high.</li>
              <li>Bumps you into higher Medicare premium bracket.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch IRMAA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income-Related Monthly Adjustment Amount.</li>
              <li>High income raises Medicare premiums.</li>
              <li>Big Roth conversions can trigger.</li>
              <li>Two-year lookback.</li>
              <li>Calculator should account for this.</li>
              <li>Consult financial advisor before big conversions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk to professional</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free consultations from Fidelity/Schwab/Vanguard.</li>
              <li>Or pay fee-only fiduciary advisor.</li>
              <li>One-time advice often worth $500–$1,500.</li>
              <li>Mistakes here cost tens of thousands.</li>
              <li>Don&apos;t DIY without research.</li>
              <li>Get a second opinion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pre-RMD years are golden</h3>
            <p className="text-sm text-muted-foreground">For most retirees, the years between retirement (62–67) and RMDs (73) are the prime Roth conversion window. Lower income years before Social Security maximizes. Convert just enough each year to fill up your current tax bracket. Run Fidelity&apos;s free calculator. Talk to a fee-only advisor for personalized strategy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
