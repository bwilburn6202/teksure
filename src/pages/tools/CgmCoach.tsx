import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function CgmCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Continuous Glucose Monitor (CGM) Coach — Dexcom & FreeStyle Libre | TekSure" description="No more finger sticks. Continuous glucose monitors track blood sugar 24/7 from a tiny sensor on your arm. Plain-English guide to Dexcom and FreeStyle Libre." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CGM Coach</h1>
          <p className="text-lg text-muted-foreground">Continuous glucose monitors — no more finger sticks.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What a CGM is</h2>
            <p className="text-sm">A small disposable sensor (size of a quarter) you wear on your upper arm or belly for 10-15 days. It measures glucose every minute and sends the reading to your phone via Bluetooth. No more finger sticks, no more guessing.</p>
            <p className="text-sm mt-2">For people with Type 1, Type 2, or pre-diabetes — these are life-changing.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top picks (FDA-approved, prescription needed for some)</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Dexcom G7 (and G6)</p>
                <p>10-day sensor. Real-time alerts (high/low). Most accurate. Often covered by Medicare for insulin users.</p>
              </div>
              <div>
                <p className="font-bold">FreeStyle Libre 3 (and Libre 2)</p>
                <p>14-day sensor. Cheapest CGM. Available over-the-counter (Libre Rio) for non-diabetics in 2024+.</p>
              </div>
              <div>
                <p className="font-bold">Stelo (by Dexcom)</p>
                <p>Over-the-counter, no prescription. Aimed at non-diabetics curious about how food and exercise affect their glucose. Still under FDA approval — verify availability.</p>
              </div>
              <div>
                <p className="font-bold">Lingo (by Abbott)</p>
                <p>Same as Stelo — non-diabetic version of FreeStyle Libre.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost & coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>With insurance + on insulin:</strong> Most plans now cover Dexcom and FreeStyle Libre. Copays $0-$50/month.</li>
              <li><strong>With Medicare:</strong> Covered if you take insulin (Type 1 or insulin-using Type 2). Get prescription, then through DME suppliers.</li>
              <li><strong>Without insurance:</strong> $200-$300/month out of pocket. Many manufacturers offer savings programs.</li>
              <li><strong>Non-diabetic curiosity:</strong> Stelo or Lingo about $50/sensor (2 weeks).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App setup (any brand)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install the brand\'s app from the App Store or Play Store (Dexcom, FreeStyle Libre, Stelo, Lingo).</li>
              <li>Create an account.</li>
              <li>Apply the sensor — most have a one-button applicator. Slight pinch, doesn\'t hurt.</li>
              <li>Phone shows current glucose, trend arrow (rising/falling), and a graph of the last 24 hours.</li>
              <li>Set alarms — high glucose alert (above 180) and low (below 70) for safety.</li>
              <li>Some brands let family see your readings remotely (great for caregivers).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you\'ll learn fast</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Which foods spike YOUR glucose (everyone\'s different — pasta does it for some, not others).</li>
              <li>How a 20-minute walk after dinner blunts the spike.</li>
              <li>How stress and bad sleep raise fasting glucose.</li>
              <li>If you\'re going low overnight while on insulin — the alarm wakes you up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">A real conversation with your doctor</h3>
            <p className="text-sm text-muted-foreground">If you have Type 2 diabetes or pre-diabetes and have never tried a CGM, ask your doctor at your next visit. Show them this page. Many doctors don\'t bring it up unless asked, but most are happy to prescribe one if you\'re interested. The data you\'ll learn from 30 days of CGM beats anything an A1C test can show.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
