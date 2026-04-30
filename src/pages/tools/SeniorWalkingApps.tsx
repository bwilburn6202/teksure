import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorWalkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Apps for Seniors | TekSure" description="Best walking apps for seniors. Track steps, find routes, audio-guided walks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Apps</h1>
          <p className="text-lg text-muted-foreground">Track your walks. Find new routes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why walking matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Best exercise for most seniors.</li>
              <li>30 min/day — proven longevity benefits.</li>
              <li>Free, no equipment needed.</li>
              <li>Easy on joints.</li>
              <li>Reduces depression + improves mood.</li>
              <li>Apps make it more engaging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Health (iPhone)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built into iPhone — free.</li>
              <li>Counts steps automatically.</li>
              <li>Tracks distance + flights climbed.</li>
              <li>Set daily goals.</li>
              <li>Family can share progress.</li>
              <li>No setup needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walking-specific apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AllTrails — find walking paths near you.</li>
              <li>MapMyWalk — track routes + pace.</li>
              <li>Walkmeter — basic tracking.</li>
              <li>Pacer — easy, simple step counter.</li>
              <li>Walk with a Doc — community walks.</li>
              <li>Most have free versions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audio-guided walks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Fitness+ Time to Walk — celebrity-narrated.</li>
              <li>Peloton outdoor walks.</li>
              <li>Audible walking-specific audiobooks.</li>
              <li>Make walks more engaging.</li>
              <li>Listen to story while walking.</li>
              <li>Time passes faster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walking with friends remotely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strava — share routes with friends.</li>
              <li>Apple Fitness+ — encourage friends&apos; activity rings.</li>
              <li>FaceTime audio while walking.</li>
              <li>Share screenshots of walks.</li>
              <li>Friendly competition motivates.</li>
              <li>Even far-away family stay connected.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step goal advice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10,000 steps myth — research shows 7,000–8,000 enough.</li>
              <li>Start where you are — even 3,000 steps better than 0.</li>
              <li>Increase by 500–1,000 weekly.</li>
              <li>Pace matters — try moderate intensity.</li>
              <li>30 minutes most days = ideal.</li>
              <li>Listen to body — rest if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Health is enough for most</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone, Apple Health (built-in) tracks steps automatically. No app to download. Just look at it. Set a goal of 7,000–8,000 daily steps. The simplicity matters — extra apps can complicate fitness. Combine with a 20-minute audio-guided walk from Apple Fitness+ or Peloton for variety. Walking + audiobooks = peak senior wellness.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
