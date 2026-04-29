import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

const APPS = [
  { name: 'SingFit', cost: 'FREE', best: 'Music therapy for dementia + caregivers.', good: 'Best for dementia.' },
  { name: 'Spotify', cost: '$11/mo', best: 'Custom playlists for mood.', good: 'Best library.' },
  { name: 'Apple Music', cost: '$11/mo', best: 'Apple users + lyric singalong.', good: 'Best Apple.' },
  { name: 'Pandora', cost: 'FREE / $5/mo', best: 'Genre stations. Senior-favorite.', good: 'Best radio-style.' },
  { name: 'Calm', cost: '$70/yr', best: 'Sleep stories + meditative music.', good: 'Best meditation.' },
];

export default function MusicTherapyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Music Therapy Apps for Seniors | TekSure" description="Music for memory + mood. Plain-English picks for senior music therapy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Music Therapy</h1>
          <p className="text-lg text-muted-foreground">Music heals. Use intentionally.</p>
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
            <h2 className="font-bold text-xl mb-3">Music + dementia</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Familiar music last memories preserved.</li>
              <li>Songs from teens-20s most powerful.</li>
              <li>Triggers memories + emotions.</li>
              <li>Reduces agitation.</li>
              <li>Music + Memory program (free).</li>
              <li>Caregivers play in care facilities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mood + sleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slower music = relaxation.</li>
              <li>Classical proven to lower BP.</li>
              <li>Spotify sleep playlists.</li>
              <li>Calm app + lullabies.</li>
              <li>Replace TV before bed.</li>
              <li>Morning upbeat music = energy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pain + chronic conditions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music reduces perceived pain.</li>
              <li>Listened during procedures.</li>
              <li>Reduces anxiety.</li>
              <li>Enhances exercise.</li>
              <li>Improves stroke recovery.</li>
              <li>Free intervention.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Make playlists</h3>
            <p className="text-sm text-muted-foreground">Make playlist for each mood: morning, walking, calming, dancing. Family member helps create. Spotify has &quot;Made for You&quot; algorithm. Music + walking = double brain benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
