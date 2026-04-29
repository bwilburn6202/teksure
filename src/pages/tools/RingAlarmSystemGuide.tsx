import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function RingAlarmSystemGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ring Alarm System for Seniors | TekSure" description="Ring home security alarm explained for seniors. Amazon ecosystem, plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ring Alarm</h1>
          <p className="text-lg text-muted-foreground">Amazon&apos;s home security system.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Ring Alarm?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home security from Ring (owned by Amazon).</li>
              <li>Works perfectly with Alexa.</li>
              <li>Works with Ring video doorbells + cameras.</li>
              <li>Professional monitoring available.</li>
              <li>Self-install — peel-and-stick sensors.</li>
              <li>No long-term contracts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Starter kit — around $199–$299.</li>
              <li>Self-monitoring — free.</li>
              <li>Ring Protect Pro — $20/month or $200/year.</li>
              <li>Includes professional monitoring + Alexa Guard.</li>
              <li>Often on sale during Amazon events.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What&apos;s included</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Base station + siren.</li>
              <li>Keypad for arming/disarming.</li>
              <li>Contact sensors (doors + windows).</li>
              <li>Motion detectors.</li>
              <li>Range extender included.</li>
              <li>Add Ring cameras + doorbells easily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alexa integration</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, arm Ring Alarm.&quot;</li>
              <li>&quot;Alexa, what&apos;s the status of my alarm?&quot;</li>
              <li>Alexa Guard Plus — listens for glass breaking, alarms.</li>
              <li>Echo Show displays camera feeds.</li>
              <li>Best if you already use Alexa.</li>
              <li>Voice control great for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ring app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See all sensors in one place.</li>
              <li>Arm and disarm remotely.</li>
              <li>Get alerts when motion detected.</li>
              <li>Share access with family members.</li>
              <li>View camera footage.</li>
              <li>Event history log.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ring vs SimpliSafe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ring — better if you have Alexa + Echo devices.</li>
              <li>SimpliSafe — better standalone system.</li>
              <li>Ring — great camera integration.</li>
              <li>SimpliSafe — works without internet reliably.</li>
              <li>Both affordable, no long contract.</li>
              <li>Both DIY install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you have a Fire Stick or Echo</h3>
            <p className="text-sm text-muted-foreground">Ring Alarm is a natural choice if your home already has Amazon devices. You can watch camera feeds on an Echo Show screen, arm and disarm by voice, and get doorbell alerts through your speakers. It&apos;s also frequently discounted during Amazon Prime Day. If you&apos;re not in the Amazon ecosystem, SimpliSafe may feel simpler.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
