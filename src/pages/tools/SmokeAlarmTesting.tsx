import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SmokeAlarmTesting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smoke Alarm Testing + Replacement | TekSure" description="Test, replace, troubleshoot smoke alarms. Plain-English steps for keeping your home safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smoke Alarm Maintenance</h1>
          <p className="text-lg text-muted-foreground">Test monthly. Replace every 10 years.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test monthly</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Press TEST button. Hold 5 seconds.</li>
              <li>Should beep loudly + lights flash.</li>
              <li>If silent or weak — battery may be dead, OR alarm is past its life.</li>
              <li>Beep beep, pause, beep beep — battery low.</li>
              <li>Beep beep beep beep continuous — fire detected (treat as real).</li>
              <li>Alarm 3 quick beeps = CO detected (different tone).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Replace every 10 years</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sensor degrades — even with fresh battery, it can&apos;t detect smoke.</li>
              <li>Manufacture date on back of unit.</li>
              <li>Replace ENTIRE alarm, not just battery.</li>
              <li>10-year sealed battery alarms eliminate yearly battery changes.</li>
              <li>$15-25 each at hardware store.</li>
              <li>Many fire departments install free for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Chirp won&apos;t stop"</h2>
            <p className="text-sm">Single chirp every 30 seconds = battery low. Replace battery (or whole alarm if 10+ years old). If chirp continues after new battery — alarm is dead. Replace.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free smoke alarms for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many fire departments give FREE smoke alarms to seniors (call non-emergency line).</li>
              <li>American Red Cross "Sound the Alarm" — free install events.</li>
              <li>Some states (CA, FL) have programs specific to 65+.</li>
              <li>Veterans + low-income often qualify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart smoke alarms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nest Protect</strong> — $120. Voice tells you which room. Phone alert if away. Self-tests.</li>
              <li><strong>Kidde Smart</strong> — $50. Cheaper smart option.</li>
              <li><strong>First Alert OneLink</strong> — $80-130. Apple HomeKit.</li>
              <li>Smart alarms WHOLE-HOUSE link — one alerts, all alert. Important if hearing-impaired.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set a calendar reminder</h3>
            <p className="text-sm text-muted-foreground">First Sunday of each month — test alarms. Daylight saving time changes — change batteries. November + March. Most fire deaths happen in homes with non-working smoke alarms. 60 seconds saves lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
