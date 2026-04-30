import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

const PICKS = [
  { name: 'TP-Link RE315', cost: '$30', best: 'Cheapest decent. Plug into outlet. Boost 1 weak room.', good: 'Best budget.' },
  { name: 'Netgear EAX15', cost: '$80', best: 'Strong WiFi 6. Larger coverage area.', good: 'Best mid-range.' },
  { name: 'Eero Beacon (extra)', cost: '$100', best: 'Adds to Eero mesh. Plug-in. Easy.', good: 'Best with Eero.' },
  { name: 'Wifi 6 mesh router', cost: '$200-400', best: 'Replace whole system instead of patching. Best long-term.', good: 'Best long-term.' },
];

export default function WifiExtenders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="WiFi Extenders for Seniors | TekSure" description="Boost weak WiFi to bedroom or basement. Plain-English picks for $30-100 WiFi extenders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WiFi Extenders</h1>
          <p className="text-lg text-muted-foreground">Fix dead spots. $30-100.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (15 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug extender into outlet HALFWAY between router + dead zone.</li>
              <li>Press WPS button on router AND extender.</li>
              <li>Lights solid = connected.</li>
              <li>Or use brand app for setup.</li>
              <li>Reconnect devices in dead zone — should now have signal.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Extender vs new mesh</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Extender</strong> — $30-100. Patches one weak area. Often slow + flaky.</li>
              <li><strong>New mesh router system</strong> — $200-400. Replaces old one. Whole house = strong.</li>
              <li>For 1 small dead zone: extender fine.</li>
              <li>For house-wide WiFi issues: upgrade router instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common dead-zone fixes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Move router to center of home (not closet, not attic, not behind TV).</li>
              <li>Update router firmware via app.</li>
              <li>Reduce wifi crowding — change channel in router settings.</li>
              <li>Use 5GHz for nearby devices (faster, shorter range).</li>
              <li>2.4GHz for far devices (slower, longer range).</li>
              <li>Restart router monthly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test signal first</h3>
            <p className="text-sm text-muted-foreground">Before buying anything — test speeds. Install <strong>fast.com</strong> in browser at router + dead zone. If both are slow — upgrade router. If router is fast but dead zone is slow — extender works.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
