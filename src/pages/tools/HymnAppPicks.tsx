import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

const APPS = [
  { name: 'Hymnal Hub (Lifeway)', cost: 'FREE', best: 'Largest free hymn library. Lyrics + audio. Baptist Hymnal core, ecumenical extras.', good: 'Best free.' },
  { name: 'YouVersion Bible (also has hymns)', cost: 'FREE', best: 'Bible app + sermon library + many hymn videos.', good: 'Best Bible+hymn combo.' },
  { name: 'Pandora — Classic Hymns Radio', cost: 'FREE / $5/mo', best: 'Streaming hymn stations. Background music while doing other things.', good: 'Best background.' },
  { name: 'Spotify hymn playlists', cost: 'FREE / $11/mo', best: '"Classic Hymns", "Modern Hymns", "Gospel Hymns" — all curated.', good: 'Best variety.' },
  { name: 'YouTube — Selah, Cantus Christi, Hymncharts', cost: 'FREE', best: 'Beautiful hymn renditions. Lyric videos. Sing along.', good: 'Best with words.' },
];

export default function HymnAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hymn Apps — Sing Along at Home | TekSure" description="Hymn libraries, lyric videos, streaming hymn radio. Plain-English picks for free hymn apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hymn Apps</h1>
          <p className="text-lg text-muted-foreground">Sing along at home.</p>
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
            <h2 className="font-bold text-xl mb-3">By tradition</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Baptist</strong> — Lifeway Hymnal Hub, Baptist Hymnal app.</li>
              <li><strong>Catholic</strong> — Catholic Hymnal app, GIA Music app.</li>
              <li><strong>Methodist</strong> — UMC Hymnal, Discipleship Ministries.</li>
              <li><strong>Lutheran</strong> — ELW (Evangelical Lutheran Worship) app.</li>
              <li><strong>Episcopal</strong> — Hymnal 1982 app.</li>
              <li><strong>Presbyterian</strong> — Glory to God hymnal.</li>
              <li><strong>African American Heritage</strong> — Lift Every Voice hymnal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For dementia + memory care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hymns from age 16-25 stay in memory long after other words.</li>
              <li>Singing reduces agitation in dementia patients.</li>
              <li>Free YouTube playlists — search "[hymn name] lyrics".</li>
              <li>Music &amp; Memory nonprofit — free curated playlists for nursing homes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bedtime hymn playlist</h3>
            <p className="text-sm text-muted-foreground">Spotify and YouTube both have "Sleep Hymns" / "Peaceful Hymns" playlists. 8 hours of gentle hymns. Help fall asleep, sense of comfort. Free with ad-supported tier.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
