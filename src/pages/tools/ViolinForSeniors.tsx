import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function ViolinForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Violin for Seniors | TekSure" description="Start violin at any age. Plain-English senior beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Violin for Seniors</h1>
          <p className="text-lg text-muted-foreground">Hardest instrument. Most rewarding.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest expectations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hardest instrument to learn.</li>
              <li>First 6 months sound bad.</li>
              <li>Never quit too early.</li>
              <li>Better at age 60+ than child (patience).</li>
              <li>3-5 years to play classical.</li>
              <li>1 year for folk / fiddle music.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First violin ($250-500)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cecilio CVN-300</strong> ($150) — entry kit.</li>
              <li><strong>Eastman</strong> series ($400-1000) — best beginner.</li>
              <li><strong>Stentor Student II</strong> ($200).</li>
              <li>Don&apos;t buy &quot;Strad&quot; from Amazon.</li>
              <li>Rent first ($30/mo) — try before buying.</li>
              <li>Check shop near you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lessons essential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Self-teaching = bad habits.</li>
              <li>Local teacher $40-80/wk.</li>
              <li>Suzuki method common.</li>
              <li>Online lessons OK with feedback.</li>
              <li>30 min/week minimum.</li>
              <li>Daily practice 20-30 min.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit while practicing OK.</li>
              <li>Shoulder rest reduces neck strain.</li>
              <li>Lighter bow.</li>
              <li>Practice mute (quiet for neighbors).</li>
              <li>Rest hands every 15 min.</li>
              <li>Stop if pain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Violin Lab Channel</strong> — YouTube.</li>
              <li><strong>FiddleHed</strong> — folk + fiddle.</li>
              <li><strong>Suzuki Method</strong> — books.</li>
              <li><strong>Mel Bay</strong> — books.</li>
              <li><strong>IMSLP.org</strong> — free public domain music.</li>
              <li>Library — violin books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First songs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Twinkle Twinkle Little Star.</li>
              <li>Lightly Row.</li>
              <li>Boil &apos;Em Cabbage Down.</li>
              <li>Camptown Races.</li>
              <li>Old Joe Clark.</li>
              <li>Fiddle tunes faster fun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior orchestra</h3>
            <p className="text-sm text-muted-foreground">Many cities have senior / community orchestras. New England Conservatory + most music schools have adult programs. Local string quartets need pickup players. Symphony chorus often free. Music theory community classes. Connect with other senior musicians = lifelong friendships.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
