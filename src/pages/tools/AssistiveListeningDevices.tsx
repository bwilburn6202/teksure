import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

const PICKS = [
  { name: 'Pocketalker Ultra', cost: '$170', best: 'Personal amplifier. Senior favorite. Senior centers love.', good: 'Best personal.' },
  { name: 'TV Ears 5.0', cost: '$130', best: 'Wireless TV listening. Doesn&apos;t bother family.', good: 'Best for TV.' },
  { name: 'Bose Hearphones', cost: '$250', best: 'Bluetooth amplification. Like AirPods Pro.', good: 'Best modern.' },
  { name: 'Sennheiser RS 175', cost: '$300', best: 'Premium TV headphones.', good: 'Best premium.' },
  { name: 'Apple AirPods Pro 2', cost: '$200', best: 'Live Listen feature = built-in amplifier.', good: 'Best with iPhone.' },
];

export default function AssistiveListeningDevices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Assistive Listening Devices for Seniors | TekSure" description="Beyond hearing aids. Plain-English ALD picks for senior hearing loss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Assistive Listening Devices</h1>
          <p className="text-lg text-muted-foreground">Augment hearing aids — or replace.</p>
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
            <h2 className="font-bold text-xl mb-3">When ALDs help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TV too loud for family but quiet for you.</li>
              <li>Hearing in noisy restaurants.</li>
              <li>Group conversations.</li>
              <li>Religious services.</li>
              <li>Meetings.</li>
              <li>Watching TV without disturbing spouse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AirPods Pro = secret weapon</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Live Listen feature — phone becomes microphone.</li>
              <li>AirPods amplify what phone hears.</li>
              <li>Place phone near speaker, listen via AirPods.</li>
              <li>FREE feature with $200 AirPods.</li>
              <li>Apple says NOT FDA-approved hearing aid.</li>
              <li>But many seniors find very effective.</li>
              <li>Settings → Accessibility → Audio → Live Listen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Loop systems (T-coil)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hearing loops&quot; in churches, theaters, courts.</li>
              <li>If hearing aid has T-coil — auto-connects.</li>
              <li>Audio direct to your hearing aid.</li>
              <li>Crystal clear in noisy venues.</li>
              <li>Look for &quot;hearing loop&quot; sign.</li>
              <li>Free if available.</li>
              <li>Ask audiologist if your aids have T-coil.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free for veterans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VA provides hearing aids + ALDs to eligible vets.</li>
              <li>VA hearing programs comprehensive.</li>
              <li>Apply through VA benefits.</li>
              <li>Many vets have service-connected hearing loss.</li>
              <li>Don&apos;t pay if eligible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Combine devices</h3>
            <p className="text-sm text-muted-foreground">Hearing aids for daily + Pocketalker for restaurants + TV Ears for TV + AirPods Pro for travel. Don&apos;t rely on one device. Each best for specific situation. Multi-tool approach = best senior hearing experience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
