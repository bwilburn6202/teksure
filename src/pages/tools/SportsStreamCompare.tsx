import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function SportsStreamCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sports Streaming Compared | TekSure" description="ESPN+, Paramount+, Peacock, MLB.tv. Plain-English breakdown of where to watch each sport without cable." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trophy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sports Streaming</h1>
          <p className="text-lg text-muted-foreground">Cut cable. Still watch the game.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">By sport (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NFL</strong> — most games on antenna (free) + Paramount+ (CBS) + Peacock (NBC) + Amazon Prime (Thursday). NFL Sunday Ticket via YouTube ($350/yr) for out-of-market.</li>
              <li><strong>NBA</strong> — ESPN+ + ABC + TNT (now on Max). NBA League Pass for all games ($100-200/yr).</li>
              <li><strong>MLB</strong> — MLB.tv ($150/yr). Local team blackouts unless via cable. Apple TV+ Friday games.</li>
              <li><strong>NHL</strong> — ESPN+ has every out-of-market game ($11/mo).</li>
              <li><strong>College football</strong> — ESPN+ + ABC + CBS (free with antenna).</li>
              <li><strong>Soccer</strong> — Apple TV+ MLS, Paramount+ Champions League, Peacock English Premier League, FuboTV for variety.</li>
              <li><strong>Tennis</strong> — Tennis Channel app ($110/yr) + ESPN+.</li>
              <li><strong>Golf</strong> — Peacock + ESPN+ + GOLF Channel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best "everything sports" services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FuboTV</strong> — $80/mo. Most live sports channels. Cable replacement.</li>
              <li><strong>YouTube TV</strong> — $73/mo. Lots of sports. Cable replacement.</li>
              <li><strong>Sling TV Orange</strong> — $40/mo. ESPN + many basics. Cheaper basic.</li>
              <li><strong>Hulu + Live TV</strong> — $77/mo. ESPN + Disney+ + Hulu bundle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save with bundles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Disney Bundle</strong> — Disney+ + Hulu + ESPN+ for $15/mo.</li>
              <li><strong>Apple TV+ free</strong> with select Comcast/Verizon plans.</li>
              <li><strong>Verizon FiOS</strong> includes some sports streaming.</li>
              <li><strong>T-Mobile</strong> includes free Apple TV+ and Netflix Basic on some plans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free sports</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local NFL (Sunday) on antenna — your home team almost always free.</li>
              <li>Local college football on antenna.</li>
              <li>Olympics on Peacock + NBC (NBC free with antenna).</li>
              <li>March Madness — CBS free with antenna.</li>
              <li>Minor league games via team websites + MiLB.tv ($30/yr cheap).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t pay year-round</h3>
            <p className="text-sm text-muted-foreground">Many sports streamers can be subscribed only for the season. NBA League Pass for the season, then cancel. NFL Sunday Ticket, then cancel. MLB.tv, then cancel. $200/yr targeted beats $1,200/yr for cable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
