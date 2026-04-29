import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

const PICKS = [
  { name: 'SofaBaton X1', price: '$200', best: 'Best Logitech Harmony replacement. Controls 60+ devices. Hub + remote design.', good: 'Most powerful current option.' },
  { name: 'SofaBaton U2', price: '$45', best: 'Cheaper SofaBaton. Just an IR remote — controls 15 devices. Great for "old-fashioned" remote replacement.', good: 'Best budget pick.' },
  { name: 'BroadLink RM4 Pro', price: '$50', best: 'Smart hub. Controls IR/Wi-Fi devices via app. Works with Alexa/Google.', good: 'For tech-comfortable users.' },
  { name: 'Apple TV 4K + Apple TV remote', price: '$130-150', best: 'Modern best — Apple TV 4K replaces multiple boxes. Remote controls TV power and volume too.', good: 'If you stream most content.' },
  { name: 'Phone-as-remote (Apple TV Remote / Google Home)', price: 'FREE', best: 'Use your phone instead of dedicated remote. Built into Control Center on iPhone.', good: 'Backup for lost remote.' },
  { name: 'Caavo / Switchable hubs', price: '$80-200', best: 'Discontinued. Used market only.', good: 'Skip — better current options exist.' },
];

export default function UniversalRemotePicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Universal Remote Picker — Logitech Harmony Replacement | TekSure" description="Logitech Harmony is gone. Plain-English picks for the best universal remotes that replace 5-10 separate remotes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Universal Remote Picker</h1>
          <p className="text-lg text-muted-foreground">Replace 5 confusing remotes with one.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Logitech Harmony is gone</h2>
            <p className="text-sm">Logitech retired Harmony in 2021. Existing Harmony remotes still work for now but updates have stopped. Time to plan a replacement.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For grandparents — KISS principle</h2>
            <p className="text-sm">Multi-remote setups are confusing. Best for seniors:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple TV 4K (or Roku) + simple remote</strong> — one device handles streaming. The Apple TV remote includes TV power and volume.</li>
              <li><strong>Big-button "Senior remote"</strong> — single remote for cable + TV. Best Buy carries options.</li>
              <li><strong>Voice-controlled</strong> — "Alexa, turn on TV" with Echo + Fire TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big-button senior remotes (TV only)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Flipper Big Button Universal</strong> — only 6 buttons. Made for memory loss.</li>
              <li><strong>Tek Pal TV Remote</strong> — extra-large buttons.</li>
              <li><strong>GE Big Button</strong> — Walmart, ~$10. Simple.</li>
              <li>Most cable companies will swap your default remote for a "simplified" one — call and ask.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — labels</h3>
            <p className="text-sm text-muted-foreground">Use clear nail polish or white-out to mark the "On", "Volume", and "Channel" buttons on any remote. Or stick large dots from the office store. Costs $1, makes any remote senior-friendly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
