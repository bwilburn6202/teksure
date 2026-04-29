import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

const MACHINES = [
  { name: 'LectroFan Classic', cost: '$50', best: 'Fan sounds + white noise. Senior favorite.', good: 'Best overall.' },
  { name: 'Hatch Restore 2', cost: '$200', best: 'Sound + sunrise alarm + reading light.', good: 'Best premium.' },
  { name: 'Marpac Dohm', cost: '$50', best: 'Real fan inside, mechanical sound. Classic.', good: 'Best mechanical.' },
  { name: 'Magicteam Sound Machine', cost: '$25', best: 'Budget pick. 20+ sounds.', good: 'Best budget.' },
  { name: 'Snooz', cost: '$80', best: 'Real fan, app control.', good: 'Best app-enabled.' },
];

export default function WhiteNoiseGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="White Noise Guide for Seniors | TekSure" description="Block traffic + snoring + tinnitus. Plain-English picks for senior sound machines." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">White Noise for Seniors</h1>
          <p className="text-lg text-muted-foreground">Block noise. Help tinnitus. Sleep deeper.</p>
        </div>

        <div className="space-y-3 mb-6">
          {MACHINES.map(m => (
            <Card key={m.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <span className="text-sm font-semibold text-primary">{m.cost}</span>
                </div>
                <p className="text-sm">{m.best}</p>
                <p className="text-sm text-muted-foreground">{m.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Snoring spouse.</li>
              <li>Tinnitus (ringing in ears) — masks the ringing.</li>
              <li>Apartment / shared walls.</li>
              <li>Light sleeper — masks small sounds that wake you.</li>
              <li>Travel — keeps sleep routine consistent.</li>
              <li>Daytime nap when neighborhood is loud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YouTube — &quot;10 hours white noise&quot; — free.</li>
              <li>Apple iPhone — Settings → Accessibility → Audio → Background Sounds. FREE.</li>
              <li>Spotify / Apple Music — many free white noise tracks.</li>
              <li>Old box fan — analog, $20.</li>
              <li>Calm + Headspace apps — free trials with sleep sounds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sound types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>White noise</strong> — all frequencies. Most popular.</li>
              <li><strong>Pink noise</strong> — softer. Better for some.</li>
              <li><strong>Brown noise</strong> — deepest. Trending for ADHD/seniors.</li>
              <li><strong>Fan sound</strong> — mechanical drone.</li>
              <li><strong>Rain/ocean</strong> — natural sounds.</li>
              <li>Try each — different brains prefer different.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tinnitus relief</h3>
            <p className="text-sm text-muted-foreground">For tinnitus, look up &quot;tinnitus masker&quot; sound — specific frequencies designed to mask ringing. American Tinnitus Association (ata.org) has free guides. Hearing aids with masking feature also help. Talk to audiologist.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
