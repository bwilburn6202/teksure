import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryWarning } from 'lucide-react';

export default function PhoneWontCharge() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Won&apos;t Charge — 7 Fixes | TekSure" description="Phone plugged in but not charging? Plain-English steps to diagnose: bad cable, dirty port, broken battery, or wall outlet." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryWarning className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Won\'t Charge</h1>
          <p className="text-lg text-muted-foreground">7 fixes — most don\'t cost a thing.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick fixes (try in order)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Try a different cable</strong>. Cables fail more than anything else.</li>
              <li><strong>Try a different power brick</strong>. Wall plug fails next-most.</li>
              <li><strong>Try a different wall outlet</strong>. Especially if other things plugged in stopped working.</li>
              <li><strong>Clean the charging port</strong>. Lint and dust accumulate. Power off phone first. Use a wooden toothpick (NOT metal) — gently scrape out lint.</li>
              <li><strong>Restart phone</strong>. Hold power button + volume → slide to power off → wait 30 sec → turn on.</li>
              <li><strong>Try wireless charging</strong> (if supported). If wireless works, the port is bad.</li>
              <li><strong>Charge with computer USB</strong>. If THAT works, your wall brick is bad.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If it charges slowly</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Old cable — replace with new.</li>
              <li>Underpowered brick — most modern phones need 18W+ for fast charge.</li>
              <li>USB-C to USB-A cable in old USB-A wall brick = slow.</li>
              <li>Phone is too hot — let it cool before charging.</li>
              <li>Battery very low (under 5%) — first 10% charges slowly to protect battery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy quality cables</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Apple Lightning / USB-C cables — buy from Apple Store / Best Buy.</li>
              <li>"MFi Certified" labels = Apple-approved.</li>
              <li>Anker, Belkin, Mophie — reliable third-party brands.</li>
              <li>Avoid no-name $5 cables from gas stations — die in 2-4 weeks.</li>
              <li>Better cables ($15-20) last 1-2 years vs cheap ones (1-3 months).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When the battery is dying (not charging issue)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone shuts off above 20% randomly.</li>
              <li>Drops from 100% to 50% in an hour.</li>
              <li>Old phone (3+ years).</li>
              <li>Settings → Battery → Battery Health (iPhone) — under 80%? Replace battery.</li>
              <li>Battery replacement: Apple $69-119, local shop $50-90.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Charge port repair</h3>
            <p className="text-sm text-muted-foreground">If everything else fails — port may be physically damaged. Apple charges $80-150 to replace; local repair shops $40-80. Often quickest fix to get years more life out of phone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
