import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchAccessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Accessibility for Seniors | TekSure" description="Apple Watch features that help seniors with vision, hearing, hands. Customize for accessibility." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Accessibility</h1>
          <p className="text-lg text-muted-foreground">Customize Apple Watch for senior needs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big text + larger touch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display + Brightness → Text Size.</li>
              <li>Slide to largest size.</li>
              <li>Settings → Accessibility → Bold Text ON.</li>
              <li>Easier to read at a glance.</li>
              <li>Reduces eye strain significantly.</li>
              <li>Try Display Zoom for extra magnification.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vibration alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Sounds + Haptics.</li>
              <li>Set Haptic Strength to &quot;Strong&quot;.</li>
              <li>Or set to &quot;Prominent&quot; for tap alerts.</li>
              <li>Helps if hearing-impaired.</li>
              <li>Doesn&apos;t miss notifications.</li>
              <li>Customize for different alert types.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch Series 4+ have fall detection.</li>
              <li>Detects hard fall — buzzes wrist for 60 seconds.</li>
              <li>If no response — auto-calls 911.</li>
              <li>Sends location to emergency contacts.</li>
              <li>Default ON for users 55+.</li>
              <li>Has saved many lives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency SOS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press + hold side button for 5 seconds.</li>
              <li>Auto-calls 911 in your location.</li>
              <li>Sends GPS location to emergency contacts.</li>
              <li>Works without phone nearby (cellular models).</li>
              <li>Works internationally.</li>
              <li>Set up at Apple Watch app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heart + health alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Atrial fibrillation alerts.</li>
              <li>High + low heart rate notifications.</li>
              <li>ECG when symptomatic.</li>
              <li>Sleep tracking.</li>
              <li>Walking steadiness alerts (fall risk).</li>
              <li>Loud sound alerts (hearing protection).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VoiceOver + dictation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VoiceOver — reads everything aloud.</li>
              <li>Dictate replies — no typing.</li>
              <li>Walkie-talkie feature.</li>
              <li>AssistiveTouch — control with one hand.</li>
              <li>Tap watch face with knuckle.</li>
              <li>Settings → Accessibility for full options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth $250 for fall detection alone</h3>
            <p className="text-sm text-muted-foreground">For seniors at risk of falls or living alone, Apple Watch SE ($250) provides fall detection, emergency SOS, heart monitoring, and GPS location sharing with family. It&apos;s essentially a medical alert device that also tells time and runs apps. Cellular version ($300) works even without phone nearby. Many adult children gift Apple Watch to parents for the safety features alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
