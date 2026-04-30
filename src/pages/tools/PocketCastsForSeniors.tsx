import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function PocketCastsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pocket Casts for Senior Podcast Lovers | TekSure" description="Pro podcast app for seniors. Pocket Casts vs Apple Podcasts compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pocket Casts</h1>
          <p className="text-lg text-muted-foreground">Pro features for serious listeners.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + Premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free — most features.</li>
              <li>Premium $4/month — extra polish.</li>
              <li>Sync across iPhone + Android + Mac.</li>
              <li>Better than Apple Podcasts for power users.</li>
              <li>Beautiful interface.</li>
              <li>Used by serious podcast fans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pro features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trim Silence — auto-skip silent parts.</li>
              <li>Volume Boost — quiet podcasts louder.</li>
              <li>Smart Speed — slightly faster without distortion.</li>
              <li>Skip intros automatically.</li>
              <li>Custom playback per podcast.</li>
              <li>Auto-download new episodes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Volume Boost helps hearing loss.</li>
              <li>Trim Silence saves time.</li>
              <li>Sleep timer for bedtime.</li>
              <li>Apple CarPlay support.</li>
              <li>Apple Watch listening.</li>
              <li>Easier than Apple Podcasts in some ways.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cross-platform</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Works iPhone + Android + Mac + PC.</li>
              <li>Sync progress across devices.</li>
              <li>Apple Podcasts only on Apple devices.</li>
              <li>Pocket Casts wins for mixed households.</li>
              <li>Web app for browser listening.</li>
              <li>Take subscriptions everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other premium podcast apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Overcast — iPhone only, $10/year.</li>
              <li>Castro — beautiful, queue-focused.</li>
              <li>Castbox — Android favorite.</li>
              <li>All have similar pro features.</li>
              <li>Try Pocket Casts free first.</li>
              <li>Switch when free features lacking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to upgrade</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If listen 1+ hour daily.</li>
              <li>Subscribe to 10+ podcasts.</li>
              <li>Want Smart Speed + Volume Boost.</li>
              <li>Cross-device syncing matters.</li>
              <li>Apple Podcasts feels limiting.</li>
              <li>Pro features worth $4/month.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Podcasts for most</h3>
            <p className="text-sm text-muted-foreground">For most senior listeners, Apple Podcasts (free, built-in) is plenty. Pocket Casts only worth $4/month if you&apos;re a power listener wanting Volume Boost, Smart Speed, or cross-platform sync. Try Pocket Casts free version first — if features feel important, upgrade. Don&apos;t complicate podcast listening.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
