import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function BatteryDrainFix() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Battery Drains Too Fast — Fix | TekSure" description="Phone battery dies in hours? Plain-English steps to find the app eating battery and fix common drain causes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Battery Drain Fix</h1>
          <p className="text-lg text-muted-foreground">Find what\'s killing your battery and fix it.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Battery. Wait 10 sec for it to load.</li>
                <li>See list of apps + percent of battery used.</li>
                <li>If ONE app is over 30% — that\'s your culprit. Open it less.</li>
                <li>If "Activity" is mostly "Background" — turn off Background App Refresh: Settings → General → Background App Refresh → OFF.</li>
                <li>Settings → Battery → Battery Health → "Maximum Capacity". Under 80%? Time for replacement.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Battery → Battery usage.</li>
                <li>List of apps with % drain.</li>
                <li>Tap an app to see if it has "Background activity" — restrict if not needed.</li>
                <li>"Battery saver" mode — auto-engages at 20%.</li>
                <li>"Adaptive Battery" — Settings → Battery → Adaptive Battery → ON. Learns and limits unused apps.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common drain causes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Brightness too high</strong> — auto-brightness ON saves a lot.</li>
              <li><strong>Old apps</strong> running in background — uninstall ones you haven\'t used in months.</li>
              <li><strong>Location services</strong> for unnecessary apps — Settings → Privacy & Security → Location → check each app.</li>
              <li><strong>Email "push"</strong> — switch to "fetch every 30 min" instead.</li>
              <li><strong>Always-on display</strong> — significant drain. Turn off if not essential.</li>
              <li><strong>5G in poor signal</strong> — phone wastes power searching. Switch to LTE if 5G unstable.</li>
              <li><strong>Bluetooth + Wi-Fi + GPS all on</strong> when not needed — turn off when not using.</li>
              <li><strong>Apps with lots of notifications</strong> — fewer notifications = less wake-up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When battery is just dying</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Phone is 2-3+ years old.</li>
              <li>Used to last all day, now dies in 4-6 hours.</li>
              <li>Phone shuts off randomly above 20%.</li>
              <li>Capacity reading under 80%.</li>
              <li>Battery replacement is the answer. $69-150 — much cheaper than new phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip</h3>
            <p className="text-sm text-muted-foreground">For trips, keep phone in Low Power Mode (Settings → Battery). Reduces background activity. Adds 30-50% to daily life. Also bring a portable battery pack.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
