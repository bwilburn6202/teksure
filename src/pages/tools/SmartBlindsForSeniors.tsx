import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Blinds } from 'lucide-react';

const PICKS = [
  { name: 'SwitchBot Curtain 3', cost: '$100/window', best: 'Attaches to existing curtains. No replace needed. App + voice.', good: 'Best retrofit.' },
  { name: 'SwitchBot Blind Tilt', cost: '$70/window', best: 'Solar-powered. Tilts existing blinds.', good: 'Best blinds.' },
  { name: 'Lutron Serena', cost: '$700+/window', best: 'Premium motorized shades. Pro install.', good: 'Best premium.' },
  { name: 'IKEA FYRTUR', cost: '$160/window', best: 'Affordable motorized blackout shade.', good: 'Best budget motorized.' },
  { name: 'Soma Smart Shades 2', cost: '$130/window', best: 'Solar power. Pulls existing chains.', good: 'Best solar.' },
];

export default function SmartBlindsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Blinds for Seniors | TekSure" description="Motorized shades + curtains. Plain-English picks for senior smart blind setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Blinds className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Blinds for Seniors</h1>
          <p className="text-lg text-muted-foreground">No more reaching or pulling cords.</p>
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
            <h2 className="font-bold text-xl mb-3">Why seniors love them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No reaching for cords (shoulder/back issues).</li>
              <li>No tripping on cords.</li>
              <li>Schedule sunrise opening — natural wake.</li>
              <li>Voice command from chair: &quot;Alexa, close kitchen blinds.&quot;</li>
              <li>Works while traveling — looks like home occupied.</li>
              <li>Better sleep — auto-close at sunset.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with 1-2 windows you struggle with.</li>
              <li>Bedroom + living room first — most use.</li>
              <li>Test smart curtain attaches BEFORE buying for whole house.</li>
              <li>Rod must be straight, no obstructions.</li>
              <li>Need WiFi network nearby (most are WiFi or Bluetooth).</li>
              <li>SwitchBot Hub Mini ($35) extends range + voice control.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice commands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, open bedroom blinds.&quot;</li>
              <li>&quot;Hey Google, close all the blinds.&quot;</li>
              <li>&quot;Alexa, set blinds to 50%.&quot; (some models)</li>
              <li>Group blinds — &quot;living room blinds&quot; = 4 windows.</li>
              <li>Schedule: &quot;Open at sunrise, close at sunset.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DIY vs professional install</h3>
            <p className="text-sm text-muted-foreground"><strong>SwitchBot products</strong> — DIY in 10 min per window. <strong>Lutron Serena</strong>, <strong>Hunter Douglas</strong> — pro install $200-500/window. Worth pro install for whole-house solution. Otherwise DIY savings huge.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
