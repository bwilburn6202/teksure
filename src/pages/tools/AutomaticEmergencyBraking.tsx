import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function AutomaticEmergencyBraking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Emergency Braking + Senior Safety Tech | TekSure" description="Modern car safety tech that protects senior drivers. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Driver Safety Tech</h1>
          <p className="text-lg text-muted-foreground">Modern cars catch what we miss.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Must-have features for senior drivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AEB (Auto Emergency Braking)</strong> — stops car if you don&apos;t.</li>
              <li><strong>Forward Collision Warning</strong> — alerts before AEB triggers.</li>
              <li><strong>Backup camera</strong> — required by law on new cars.</li>
              <li><strong>Cross-traffic alert</strong> — beeps for cars in blind spot when backing.</li>
              <li><strong>Blind spot monitor</strong> — light in mirror for cars beside you.</li>
              <li><strong>Lane departure warning</strong> — vibrates if drifting.</li>
              <li><strong>Adaptive cruise</strong> — auto-adjusts speed to traffic.</li>
              <li><strong>360° camera</strong> — top-down view for parking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most cars 2020+ have these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2020+ models — most include AEB + lane assist standard.</li>
              <li>Federal 2022 mandate for AEB.</li>
              <li>Don&apos;t need fancy car — even Honda Accord, Toyota Camry have full suite.</li>
              <li>Used 2020+ = great senior cars.</li>
              <li>Test drive ALL features — make sure they work in your daily driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best safety-rated cars 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Subaru Forester / Outback</strong> — EyeSight system. Senior favorite.</li>
              <li><strong>Honda CR-V</strong> — Honda Sensing standard.</li>
              <li><strong>Toyota RAV4</strong> — Toyota Safety Sense.</li>
              <li><strong>Mazda CX-5</strong> — i-Activsense.</li>
              <li><strong>Volvo XC60</strong> — premium safety leader.</li>
              <li>IIHS Top Safety Pick+ list — iihs.org. Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Retrofit older cars</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Backup camera retrofit</strong> — $100-300 install. See /tools/backup-camera-retrofit.</li>
              <li><strong>Mobileye 8 Connect</strong> — adds AEB warning to old cars. $1,000-2,000 install.</li>
              <li><strong>Dashcam with AI</strong> — Garmin DriveAssist, $300. Forward collision alerts.</li>
              <li><strong>Blind spot mirrors</strong> — $10 stick-on. Always good idea.</li>
              <li>Big upgrades = newer car often more cost-effective.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t over-rely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tech is BACKUP, not replacement for attention.</li>
              <li>Phantom braking — system thinks something there.</li>
              <li>Sensors miss in fog, heavy rain, snow.</li>
              <li>Don&apos;t text/distract because &quot;car will catch it.&quot;</li>
              <li>Still drive defensively.</li>
              <li>Self-driving NOT yet ready — Tesla Autopilot still requires hands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance discounts</h3>
            <p className="text-sm text-muted-foreground">Most insurers discount 5-15% for cars with AEB + safety tech. Take AARP Smart Driver course = additional 5-10% senior discount most states. Combined = 20%+ off auto insurance. Updated cars = safer + cheaper to insure.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
