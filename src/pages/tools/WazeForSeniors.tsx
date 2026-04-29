import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function WazeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Waze for Senior Drivers | TekSure" description="Best driving app vs Apple/Google Maps. Plain-English Waze guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Waze for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free driving app. Beats Apple Maps + Google Maps.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Waze</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Real-time traffic</strong> from millions of drivers.</li>
              <li><strong>Police alerts</strong> — speed traps reported.</li>
              <li><strong>Crashes + hazards</strong> — avoid jams.</li>
              <li><strong>Fastest route</strong> — recalculates constantly.</li>
              <li><strong>Cheapest gas prices</strong> on route.</li>
              <li><strong>FREE</strong>.</li>
              <li>Owned by Google now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Waze vs Google Maps vs Apple Maps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Waze</strong> — best driving navigation. Most senior-friendly.</li>
              <li><strong>Google Maps</strong> — better for walking/transit + business info.</li>
              <li><strong>Apple Maps</strong> — built into iPhone. Cleaner interface. Improving.</li>
              <li>Use Waze for unfamiliar drives. Maps for everyday.</li>
              <li>All free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display → Larger text size.</li>
              <li>Enable voice commands (&quot;OK Waze&quot;).</li>
              <li>Avoid highways toggle — for seniors who prefer slower.</li>
              <li>Voice — pick gender + language you like.</li>
              <li>Change voice to celebrity if fun.</li>
              <li>Mount phone on dash — never hold while driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-helpful features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Avoid highways&quot; — slower country roads.</li>
              <li>&quot;Avoid difficult intersections.&quot;</li>
              <li>&quot;Avoid tolls.&quot;</li>
              <li>Voice navigation — don&apos;t need to look.</li>
              <li>Adjust speed warnings.</li>
              <li>Save home + work locations.</li>
              <li>Send arrival ETA to family automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tracks where you drive (Google).</li>
              <li>Settings → Privacy adjusts data sharing.</li>
              <li>Disable contacts integration if don&apos;t want.</li>
              <li>Location history can be deleted.</li>
              <li>Worth it for navigation, but understand.</li>
              <li>Apple Maps slightly better privacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Carplay + Android Auto</h3>
            <p className="text-sm text-muted-foreground">Most cars 2018+ support CarPlay (iPhone) + Android Auto. Plug phone in — Waze + Google Maps + Apple Maps shown on car&apos;s screen. Larger display = safer for seniors. Voice control while driving = both hands on wheel. Massive senior safety upgrade.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
