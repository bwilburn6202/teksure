import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fan } from 'lucide-react';

const FANS = [
  { name: 'Hunter Apache 54&quot;', cost: '$300', best: 'Wi-Fi + remote. Senior-friendly install.', good: 'Best overall.' },
  { name: 'Big Ass Fans Haiku L', cost: '$700', best: 'Premium. Whisper quiet. SenseME tech.', good: 'Best premium.' },
  { name: 'Lutron Caseta switch', cost: '$90', best: 'Add smart control to existing fan. No replace.', good: 'Best retrofit switch.' },
  { name: 'Bond Bridge', cost: '$90', best: 'Makes any remote-control fan smart.', good: 'Best for old fans.' },
  { name: 'Modern Forms Lotus', cost: '$500', best: 'Smart fan with light. App control.', good: 'Best with light.' },
];

export default function SmartCeilingFanGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Ceiling Fan Guide for Seniors | TekSure" description="Smart fans + retrofits. Plain-English picks for senior smart fan setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Ceiling Fans</h1>
          <p className="text-lg text-muted-foreground">No more pulling chains.</p>
        </div>

        <div className="space-y-3 mb-6">
          {FANS.map(f => (
            <Card key={f.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <span className="text-sm font-semibold text-primary">{f.cost}</span>
                </div>
                <p className="text-sm">{f.best}</p>
                <p className="text-sm text-muted-foreground">{f.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Retrofit (don&apos;t replace fan)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bond Bridge</strong> ($90) — works with most existing remote-control fans.</li>
              <li><strong>Lutron Caseta fan switch</strong> — replace wall switch only.</li>
              <li><strong>Treatlife smart fan switch</strong> — $25-50, in-wall replacement.</li>
              <li>Cheap upgrade — keep your existing fan.</li>
              <li>Most retrofits = under $100 + 30 min install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No more reaching for chain or wall switch.</li>
              <li>Voice control: &quot;Alexa, turn on bedroom fan.&quot;</li>
              <li>Schedule: auto-on/off morning/night.</li>
              <li>Multi-speed by voice.</li>
              <li>Phone control from anywhere.</li>
              <li>Run fan to hide tinnitus / mask noise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hire electrician — $150-300 for new fan + smart switch.</li>
              <li>Don&apos;t DIY ceiling fan unless experienced — falls + electric risk.</li>
              <li>Ask electrician about fan-rated junction box (heavier).</li>
              <li>Get them to install dimmable smart switch too — bonus.</li>
              <li>Costco often best fan + install pricing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice commands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, turn on the bedroom fan.&quot;</li>
              <li>&quot;Hey Google, set the fan to medium.&quot;</li>
              <li>&quot;Alexa, turn off all fans.&quot;</li>
              <li>&quot;Set the bedroom fan timer for 30 minutes.&quot;</li>
              <li>Routines: &quot;Goodnight&quot; turns on fan + lights off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Energy savings</h3>
            <p className="text-sm text-muted-foreground">Ceiling fan + AC at 78°F = same comfort as 72°F AC alone. Saves $100-300/yr cooling. Reverse direction in winter (clockwise) — pushes warm air down, saves heat. Most smart fans have winter mode.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
