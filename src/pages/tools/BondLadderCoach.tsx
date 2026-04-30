import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart } from 'lucide-react';

export default function BondLadderCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bond Ladder & Treasury Ladder Coach | TekSure" description="A simple way to lock in income for retirement. Plain-English guide to building a bond or Treasury ladder for predictable income." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LineChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bond Ladder Coach</h1>
          <p className="text-lg text-muted-foreground">Lock in safe income — for the next 5-10 years.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What a "bond ladder" is</h2>
            <p className="text-sm">Buying bonds (or CDs) that mature in different years. Like a literal ladder — each "rung" pays off in a different year. Predictable income, no need to time the market.</p>
            <p className="text-sm mt-2">Example: Buy 5 bonds maturing in 2026, 2027, 2028, 2029, 2030. Each year one matures and gives you cash. Reinvest if you want, or use for living expenses.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Predictable income</strong> — known cash on known dates.</li>
              <li><strong>Reduces interest-rate risk</strong> — some rungs renew at higher rates if rates rise.</li>
              <li><strong>No need to time the market</strong>.</li>
              <li><strong>Pairs with bucket strategy</strong> — bond ladder fills "Bucket 2" of the bucket retirement strategy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Building one — easiest path</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Decide how many years of expenses you want laddered (often 5-10).</li>
              <li>Pick the type:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li><strong>Treasury ladder</strong> — safest. Buy at TreasuryDirect.gov OR through your brokerage.</li>
                  <li><strong>CD ladder</strong> — same idea with bank CDs.</li>
                  <li><strong>I Bond ladder</strong> — inflation-adjusted, $10,000/yr/person max.</li>
                  <li><strong>Corporate bond ladder</strong> — slightly higher yield, slightly more risk.</li>
                </ul>
              </li>
              <li>Buy roughly equal amounts maturing in years 1, 2, 3, 4, 5...</li>
              <li>When year 1 matures, either spend or buy a new bond at the END of the ladder.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fidelity, Schwab, Vanguard</strong> — all have bond / CD ladder tools right in their platforms. Often most efficient.</li>
              <li><strong>TreasuryDirect.gov</strong> — direct from the US government. No fees but a separate account.</li>
              <li><strong>Your bank</strong> — for CD ladders. Usually higher rates online (Ally, Marcus).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vs bond funds (BND, VBTLX, etc.)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Bond funds — fluctuate daily, don\'t mature.</li>
              <li>Individual bonds — mature on a specific date, return par value.</li>
              <li>For retirees, individual bonds (laddered) provide more predictability.</li>
              <li>For most pre-retirees, bond funds are simpler.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">For a $200,000 ladder over 5 years, buy $40,000 each in Treasury bonds maturing in 2026, 2027, 2028, 2029, 2030. Yields 4-5% currently. Backed by US government. Predictable retirement income.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
