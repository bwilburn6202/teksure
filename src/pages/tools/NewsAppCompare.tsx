import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

const APPS = [
  { name: 'Apple News', cost: 'FREE / $13/mo Plus', best: 'Built-in iPhone. Free reads NYT, WaPo, etc.', good: 'Best built-in.' },
  { name: 'Google News', cost: 'FREE', best: 'Free. Personalized. Works on iPhone + Android.', good: 'Best free overall.' },
  { name: 'NPR One', cost: 'FREE', best: 'Public radio + audio news. Trusted source.', good: 'Best audio.' },
  { name: 'AP News', cost: 'FREE', best: 'Associated Press. Just facts. Senior-favorite.', good: 'Best for facts.' },
  { name: 'BBC News', cost: 'FREE', best: 'British perspective on US. International coverage.', good: 'Best international.' },
  { name: 'Reuters', cost: 'FREE', best: 'Wire service. Global business + politics.', good: 'Best business.' },
];

export default function NewsAppCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="News App Compared for Seniors | TekSure" description="Apple News, NPR, AP, Reuters. Plain-English picks for unbiased news apps. Skip the algorithm rage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">News App Compare</h1>
          <p className="text-lg text-muted-foreground">Less rage. More facts.</p>
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
            <h2 className="font-bold text-xl mb-3">Most-trusted sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Associated Press (AP)</strong> — wire service. Used by everyone.</li>
              <li><strong>Reuters</strong> — same. Just facts.</li>
              <li><strong>NPR / PBS</strong> — public radio + TV. Mixed audience trust.</li>
              <li><strong>BBC</strong> — British, less polarized for US news.</li>
              <li><strong>Local newspaper</strong> — most trusted for local.</li>
              <li>SKIP partisan TV news for accurate info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce news anxiety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read news 1-2 times/day (not all day).</li>
              <li>Set time limit — 15 min morning, 15 min evening.</li>
              <li>Avoid notifications (kills focus + raises stress).</li>
              <li>Take 1 day a week off — "news Sabbath".</li>
              <li>Studies: 30+ min daily news = higher anxiety + depression.</li>
              <li>You don&apos;t miss anything — important news still reaches you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Print is OK</h3>
            <p className="text-sm text-muted-foreground">Many seniors prefer paper newspaper. Slower-paced. No notifications. Comfortable. Costs more, but real benefits. Don&apos;t feel obligated to "go digital".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
