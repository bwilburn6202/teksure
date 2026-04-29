import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

const APPS = [
  { name: 'Apple News', who: 'iPhone, iPad, Mac users', cost: 'Free; $13/month for News+ (premium magazines)', best: 'Cleanly designed, mix of free top stories and paid premium. Apple curates a balanced front page.' },
  { name: 'Google News', who: 'Anyone', cost: 'Free', best: 'Topics and "For You" tab pull from many sources. Strong local news.' },
  { name: 'AP News', who: 'Anyone wanting straight-news without slant', cost: 'Free', best: 'Associated Press is the world\'s most-cited wire service. Just facts.' },
  { name: 'Reuters', who: 'Same — straight news', cost: 'Free', best: 'Same as AP. Both are the gold standard for unbiased reporting.' },
  { name: 'BBC News', who: 'World news from outside the US', cost: 'Free', best: 'Useful for world perspective. Not American-centric.' },
  { name: 'NPR One', who: 'Audio + reading. Public radio.', cost: 'Free', best: 'Listen to news while you cook or walk. Also has top stories you can read.' },
  { name: 'Local newspaper app', who: 'Anyone', cost: 'Usually $5-15/month', best: 'Real local journalism that no national app covers. Worth supporting.' },
];

export default function NewsAppCurator() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best News Apps for Plain, Honest News | TekSure" description="Tired of Facebook outrage and clickbait? Plain-English picks for honest, calm news apps — free and paid options for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Newspaper className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">News App Curator</h1>
          <p className="text-lg text-muted-foreground">Replace Facebook outrage with calm, honest news.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Facebook and YouTube show what gets clicks — usually scary or angry stories. That's not news, that's outrage. Real news apps below show what actually happened, in plain language.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{a.who}</p>
                <p className="text-sm">{a.best}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">A balanced reading diet</h2>
            <p className="text-sm mb-2">If you want news without bias either way, mix these three:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>AP News</strong> for hard facts (free).</li>
              <li><strong>Reuters</strong> as a second-source check (free).</li>
              <li><strong>BBC News</strong> for global perspective (free).</li>
            </ul>
            <p className="text-sm mt-2">Read 15 minutes of those a day; you'll be better informed than 90% of cable news viewers.</p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Spot the slant</h3>
            <p className="text-sm">Free site <strong>AllSides.com</strong> labels every news outlet on a Left-Center-Right scale. Useful when you're not sure if a story is straight news or commentary. <strong>Ground News</strong> (free app) shows the same headline reported by left, center, and right outlets so you see the difference.</p>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — turn off most notifications</h3>
            <p className="text-sm text-muted-foreground">News apps default to "breaking news" alerts every 20 minutes. Almost none are urgent. Settings → Notifications → tap each news app → "Important only" or off. Read on your schedule, not theirs.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
