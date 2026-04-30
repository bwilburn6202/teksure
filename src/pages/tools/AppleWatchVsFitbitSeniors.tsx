import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchVsFitbitSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch vs Fitbit for Seniors | TekSure" description="Compare Apple Watch and Fitbit for senior fitness tracking, fall detection, and health features." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smartwatch Comparison</h1>
          <p className="text-lg text-muted-foreground">Apple Watch vs Fitbit for senior wearers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch — best overall</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch SE — $249, best value.</li>
              <li>Apple Watch Series 10 — $399.</li>
              <li>Fall detection — calls 911 if you can&apos;t.</li>
              <li>Heart rate + ECG (Series 4+).</li>
              <li>Requires iPhone.</li>
              <li>Best for current iPhone users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fitbit — battery life</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fitbit Inspire 3 — $99, basic tracker.</li>
              <li>Fitbit Charge 6 — $159, more features.</li>
              <li>Fitbit Sense 2 — $299, full smartwatch.</li>
              <li>Battery lasts 7–10 days (vs Apple&apos;s 1–2).</li>
              <li>Works with iPhone + Android.</li>
              <li>Owned by Google now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health features for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple: Fall detection, ECG, blood oxygen, walking steadiness.</li>
              <li>Apple: AFib detection (FDA-cleared).</li>
              <li>Fitbit: Heart rate, sleep tracking, stress.</li>
              <li>Fitbit: Some models also have ECG.</li>
              <li>Both: step counting, exercise tracking.</li>
              <li>Both: female health tracking if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch fall detection works automatically.</li>
              <li>Detects hard fall via accelerometer.</li>
              <li>Asks if you&apos;re OK; calls 911 if no response.</li>
              <li>Texts your emergency contacts location.</li>
              <li>Most life-saving feature for seniors.</li>
              <li>Has saved hundreds of lives documented.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Garmin alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Garmin Vivosmart 5 — $150.</li>
              <li>Garmin Venu Sq 2 — $250.</li>
              <li>Excellent battery life (a week+).</li>
              <li>Strong GPS for outdoor activity.</li>
              <li>Less &quot;smartwatch&quot; — simpler interface.</li>
              <li>Some seniors prefer this simplicity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch — no subscription required.</li>
              <li>Apple Fitness+ optional ($9.99/month).</li>
              <li>Fitbit Premium optional ($9.99/month).</li>
              <li>Free tier of each is plenty for most.</li>
              <li>Don&apos;t feel obligated to subscribe.</li>
              <li>Garmin — no subscription needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Watch SE for fall detection alone</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone and any concerns about falling, the Apple Watch SE ($249) is the safest senior smartwatch you can buy. Fall detection has saved many lives. The 1-day battery is fine for most users — charge while showering. If you don&apos;t have iPhone, Fitbit Charge 6 ($159) is the better pick. Either way, you&apos;ll likely walk more once you&apos;re tracking steps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
