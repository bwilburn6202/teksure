import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

const APPS = [
  { name: 'Apple Podcasts', cost: 'FREE, built into iPhone/iPad/Mac', best: 'Default for iPhone users. Auto-syncs across devices. Subscribe with one tap.', good: 'No setup needed.' },
  { name: 'Spotify', cost: 'FREE with ads, $12/mo Premium', best: 'Music + podcasts in one app. Best if you already use Spotify for music.', good: 'Many shows are Spotify-exclusive now.' },
  { name: 'Overcast', cost: 'FREE, $1/mo Premium', best: 'iPhone-only. Made by an indie developer. Best audio quality, smart speed (chops silence), Voice Boost.', good: 'Ad-free, polished.' },
  { name: 'Pocket Casts', cost: 'FREE; $4/year for Plus', best: 'Cross-platform — same listening across iPhone, Android, web. Most-loved by power listeners.', good: 'Best for those who switch phones often.' },
  { name: 'Castro', cost: 'FREE', best: 'iPhone. Inbox-style — new episodes go to triage; you queue what you want. For people serious about podcast organization.', good: 'Niche but excellent.' },
];

export default function PodcastAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Podcast App Picker — Apple, Spotify, Pocket Casts | TekSure" description="Endless free conversations on every topic. Plain-English picks for the best podcast apps and where to start listening." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Podcast App Picker</h1>
          <p className="text-lg text-muted-foreground">Free shows for any interest. The best apps and where to start.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What podcasts are</h2>
            <p className="text-sm">Free audio shows you listen to like the radio — but on demand. Two million+ shows on every topic from history to gardening to medicine. Most are completely free, supported by ads or listener donations.</p>
          </CardContent>
        </Card>

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
            <h2 className="font-bold text-xl mb-3">Great podcasts to start with (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>This American Life</strong> — beloved storytelling on NPR. Always good.</li>
              <li><strong>The Daily (NYT)</strong> — 20-minute morning news catch-up.</li>
              <li><strong>Hidden Brain</strong> — psychology, simply explained.</li>
              <li><strong>Stuff You Should Know</strong> — explains anything, friendly tone.</li>
              <li><strong>Revisionist History (Malcolm Gladwell)</strong> — fascinating takes on famous events.</li>
              <li><strong>Hardcore History (Dan Carlin)</strong> — 4-hour deep dives. Free and famously good.</li>
              <li><strong>Fresh Air (Terry Gross)</strong> — author and celebrity interviews. NPR.</li>
              <li><strong>Conan O\'Brien Needs A Friend</strong> — funny, real conversations.</li>
              <li><strong>How I Built This</strong> — how famous companies started. Inspiring.</li>
              <li><strong>Old Time Radio</strong> — classic shows from the 1930s-60s. Tons of free apps and feeds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listening smart</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Speed up</strong> if you find the host slow — most apps offer 1.25x or 1.5x.</li>
              <li><strong>Download episodes over Wi-Fi</strong> for car trips with no signal.</li>
              <li><strong>Sleep timer</strong> — most apps stop after 20 minutes for bedtime listening.</li>
              <li><strong>Bluetooth in the car</strong> — pair phone, podcasts replace bad radio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-time tip</h3>
            <p className="text-sm text-muted-foreground">Open Apple Podcasts or Spotify and search a topic you love — gardening, WWII, baseball, knitting. Pick a show with 4+ stars and listen to one episode. If you like it, "subscribe" — new episodes auto-download.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
