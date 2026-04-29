import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

const APPS = [
  { name: 'Spotify', cost: 'Free with ads, $12/mo Premium', best: 'Easiest to use. Best playlists. Most podcasts. Works on every device.', good: 'Free version is genuinely usable.' },
  { name: 'Apple Music', cost: '$11/mo, free 1-month trial', best: 'iPhone/Mac users. Tight integration with Siri. Same library as iTunes if you bought music in the past.', good: 'Family plan $17/month for 6 people.' },
  { name: 'Amazon Music', cost: 'Free with Prime, $11/mo unlimited', best: 'If you have Amazon Prime, you get a smaller library FREE. Echo speakers work great with it.', good: 'Free Prime tier covers most popular songs.' },
  { name: 'Pandora', cost: 'Free with ads, $5/mo ad-free, $10/mo full', best: 'Old-school radio-style. Type a song you like, get a station of similar songs. Less work for the listener.', good: 'Best for people who want music without curating.' },
  { name: 'YouTube Music', cost: 'Free with ads, $11/mo', best: 'Comes with YouTube Premium ($14/mo) — ad-free YouTube + Music together.', good: 'Has obscure tracks others don\'t (live recordings, covers).' },
  { name: 'SiriusXM', cost: '$10-22/mo', best: 'In the car. Curated channels by genre — Howard Stern, the Beatles channel, classical, oldies.', good: 'Most new cars include 6-12 months free.' },
];

export default function MusicAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Music App Picker — Spotify, Apple Music, Pandora | TekSure" description="Streaming music made simple. Plain-English picks for Spotify, Apple Music, Amazon, Pandora, and SiriusXM." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Music App Picker</h1>
          <p className="text-lg text-muted-foreground">Millions of songs in your pocket. Pick the right app.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discounts seniors miss</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Spotify Premium</strong> — no specific senior plan, but the free tier is fine. Family plan ($20/month for 6) splits cheap.</li>
              <li><strong>Amazon Music</strong> — included free with Prime (which seniors get for $7/month on Prime Access).</li>
              <li><strong>Apple Music</strong> — free 1 year for college student grandkid; older relatives can join their family plan.</li>
              <li><strong>SiriusXM</strong> — call to renew. They almost always offer 50%+ discounts to keep you. Don\'t pay sticker price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you have Amazon Prime — Amazon Music is already paid for. Open it. If you have an iPhone — try Apple Music\'s 1-month free trial. Otherwise, Spotify Free is the easiest first step.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
