import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Disc } from 'lucide-react';

export default function RecordPlayerStreaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Record Player + Streaming Setup | TekSure" description="Best modern record players that stream too. Plain-English picks for seniors loving vinyl + digital convenience." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Disc className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vinyl + Streaming Setup</h1>
          <p className="text-lg text-muted-foreground">Best of both worlds.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best record players (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Audio-Technica AT-LP60X</strong> ($150) — beginner-favorite. Auto-stop. Bluetooth options.</li>
              <li><strong>Audio-Technica AT-LP120XBT</strong> ($330) — Bluetooth + USB to digitize.</li>
              <li><strong>Pro-Ject Debut Carbon Evo</strong> ($600) — premium for serious listeners.</li>
              <li><strong>Crosley Cruiser</strong> ($60) — cute, but reportedly damages records over time. Skip.</li>
              <li><strong>Victrola</strong> models — same warning. Skip the $50-100 ones.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Modern setup combo</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Real turntable (above) → Bluetooth speaker OR home audio system.</li>
              <li>Stream Spotify on phone → same speaker via Bluetooth.</li>
              <li>One speaker, both vinyl + streaming.</li>
              <li>Sonos system best premium option.</li>
              <li>Echo/Sonos speakers for whole-house audio.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Digitize old vinyl</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USB turntable (Audio-Technica LP120) → computer → Audacity (free).</li>
              <li>Record song, save as MP3.</li>
              <li>Add to iTunes / Apple Music / Spotify (upload).</li>
              <li>Or pay service to digitize: ScanCafe, Legacybox.</li>
              <li>Best for irreplaceable family / rare records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local record store</strong> — best for community.</li>
              <li><strong>Discogs.com</strong> — biggest used market.</li>
              <li><strong>Half Price Books</strong> — surprising vinyl section.</li>
              <li><strong>Estate sales</strong> — gold mines.</li>
              <li><strong>Goodwill</strong> — sometimes amazing finds.</li>
              <li><strong>Amazon + Walmart</strong> — for new releases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quality matters with vinyl</h3>
            <p className="text-sm text-muted-foreground">$50-100 record players damage records over time (poor needles, wrong weight). $150+ Audio-Technica properly cared for plays records gently. Worth the upgrade if you have collection. Replace stylus every 1-2 years ($50).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
