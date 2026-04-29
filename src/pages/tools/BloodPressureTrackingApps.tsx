import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function BloodPressureTrackingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Tracking Apps for Seniors | TekSure" description="Track your blood pressure at home. Best apps and monitors for seniors explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blood Pressure Tracking</h1>
          <p className="text-lg text-muted-foreground">Monitor your BP at home and share with doctor.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why track at home?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor&apos;s office readings often higher — &quot;white coat&quot; effect.</li>
              <li>Home readings show real daily pattern.</li>
              <li>Catch high readings before next appointment.</li>
              <li>Trending data helps doctor adjust medication.</li>
              <li>Empowers you to manage your health.</li>
              <li>Most recommended by cardiologists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best home BP monitors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Omron Platinum — gold standard, app-connected.</li>
              <li>Withings BPM Connect — Bluetooth, syncs to Apple Health.</li>
              <li>Omron Silver — simpler, no app, stores 80 readings.</li>
              <li>Qardio Arm — compact, connects to smartphone.</li>
              <li>All upper-arm cuffs are more accurate than wrist.</li>
              <li>Prices: $50–$100 for a good monitor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best tracking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Omron Connect — pairs with Omron devices.</li>
              <li>Apple Health — records readings, shows charts.</li>
              <li>Heart Habit — log readings + medication together.</li>
              <li>Blood Pressure Monitor — simple manual logging.</li>
              <li>MyHeart — track + share report with doctor.</li>
              <li>All free — some offer PDF export for doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to measure correctly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit quietly for 5 minutes first.</li>
              <li>No caffeine or exercise 30 minutes before.</li>
              <li>Sit with back supported, feet flat on floor.</li>
              <li>Arm at heart level — on table or armrest.</li>
              <li>Take 2–3 readings, 1 minute apart.</li>
              <li>Record all readings — average them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Understanding your numbers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Normal: below 120/80 mmHg.</li>
              <li>Elevated: 120–129 / below 80.</li>
              <li>High (Stage 1): 130–139 / 80–89.</li>
              <li>High (Stage 2): 140+ / 90+.</li>
              <li>Crisis: 180+ / 120+ — call doctor immediately.</li>
              <li>Share log with doctor at every appointment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing with your doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Export data from app as PDF.</li>
              <li>Email to doctor&apos;s office before appointment.</li>
              <li>Apple Health: share with provider directly.</li>
              <li>Bring phone — show doctor the charts.</li>
              <li>Note symptoms alongside readings.</li>
              <li>Doctors love home data — better than once-yearly office visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Omron Platinum with app is the standard</h3>
            <p className="text-sm text-muted-foreground">The Omron Platinum ($80) is what most cardiologists and pharmacists recommend for home monitoring. It pairs to the Omron Connect app via Bluetooth, stores all your readings with timestamps, and lets you email a PDF report to your doctor. If Bluetooth feels complicated, the Omron Silver ($55) stores 80 readings without any app — just write them down in a notebook.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
