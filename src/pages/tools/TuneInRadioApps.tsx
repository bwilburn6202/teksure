import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

const APPS = [
  { name: 'TuneIn Radio', cost: 'FREE / $10/mo', best: '100,000+ live stations.', good: 'Best variety.' },
  { name: 'iHeartRadio', cost: 'FREE / $11/mo', best: 'Major US radio brands.', good: 'Best US brands.' },
  { name: 'SiriusXM', cost: '$12/mo', best: 'Premium curated channels.', good: 'Best premium.' },
  { name: 'Audible', cost: '$15/mo', best: 'Audiobooks + podcasts.', good: 'Best books.' },
  { name: 'NPR One', cost: 'FREE', best: 'Public radio + podcasts.', good: 'Best public.' },
];

export default function TuneInRadioApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TuneIn + Radio Apps for Seniors | TekSure" description="Live radio anywhere. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Radio Apps</h1>
          <p className="text-lg text-muted-foreground">Live radio + talk + music.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: TuneIn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free + 100K stations.</li>
              <li>Stations from your hometown.</li>
              <li>National + international.</li>
              <li>Sports radio.</li>
              <li>Talk radio (Rush, NPR).</li>
              <li>Music + comedy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listen to old hometown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search by city.</li>
              <li>Listen to home news.</li>
              <li>Stay connected with roots.</li>
              <li>Old favorite stations.</li>
              <li>Local sports broadcasts.</li>
              <li>Free + nostalgic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SiriusXM premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$12/mo with promo (often).</li>
              <li>Curated premium channels.</li>
              <li>50s on 5, 60s on 6, etc.</li>
              <li>Howard Stern.</li>
              <li>Sports networks.</li>
              <li>Used in cars also.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorite content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk radio — political, sports.</li>
              <li>Old time radio shows.</li>
              <li>Religious programming.</li>
              <li>Classical music.</li>
              <li>Big band / standards.</li>
              <li>Country classics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart speaker built-in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, play KOA Denver&quot;.</li>
              <li>&quot;Hey Google, play NPR&quot;.</li>
              <li>Echo + Google Home native.</li>
              <li>No app needed if smart speaker.</li>
              <li>Hands-free voice control.</li>
              <li>Background while cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">FREE always</h3>
            <p className="text-sm text-muted-foreground">Many senior-favorite stations free always — NPR, public radio. TuneIn free version great. No need to pay unless you want premium content. Old AM / FM portable radio still works ($30 Sangean). Don&apos;t lose touch with radio just because it&apos;s digital. Free voice + music + community always available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
