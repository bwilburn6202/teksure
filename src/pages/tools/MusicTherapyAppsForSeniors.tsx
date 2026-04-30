import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music2 } from 'lucide-react';

export default function MusicTherapyAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Music Therapy Apps for Seniors | TekSure" description="Music for memory + mood. Senior music therapy apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Music Therapy</h1>
          <p className="text-lg text-muted-foreground">Music for senior memory.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Music + Memory</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Personalized playlists.</li><li>Songs from teen years.</li><li>Dementia memory aid.</li><li>Senior nostalgia powerful.</li><li>Studies-proven.</li><li>Free playlist creation.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Spotify playlists</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior teen years songs.</li><li>$10/month or family plan.</li><li>Free with ads.</li><li>Senior daily soundtrack.</li><li>Boost mood.</li><li>Reduce anxiety.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calm music</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Insight Timer free.</li><li>Calm app paid.</li><li>Sleep music.</li><li>Anxiety reduction.</li><li>Senior meditation aid.</li><li>Daily benefit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Singing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sing senior groups.</li><li>Karaoke at home.</li><li>YouTube karaoke.</li><li>Senior brain workout.</li><li>Lung benefit.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dementia + music</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reaches even late stage.</li><li>Familiar songs trigger memory.</li><li>Calm + connect.</li><li>Family song-shares.</li><li>Senior dignity.</li><li>Most powerful tool.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup playlist</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spotify or Apple Music.</li><li>10-30 favorite senior songs.</li><li>Save offline.</li><li>Daily play.</li><li>Senior mood boost.</li><li>Family share too.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Music = senior soul medicine</h3><p className="text-sm text-muted-foreground">Music from teen years reaches even dementia patients. $10/mo Spotify or free Pandora. Senior daily playlist boosts mood, lowers anxiety, slows cognitive decline. Most powerful free senior wellness tool. Family creates playlist with senior favorites.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
