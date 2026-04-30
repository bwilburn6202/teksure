import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function MaxHBOStreamingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Max (HBO) Streaming for Seniors | TekSure" description="Max streaming service explained for seniors. HBO shows, movies, plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Max (HBO)</h1>
          <p className="text-lg text-muted-foreground">Premium shows and movies. HBO quality.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Max?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Formerly called HBO Max.</li>
              <li>Owned by Warner Bros. Discovery.</li>
              <li>Premium quality — award-winning shows.</li>
              <li>HBO originals — the best TV dramas.</li>
              <li>Warner Bros. movies — same day as theaters.</li>
              <li>CNN, Discovery, HGTV, Food Network.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans + cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>With Ads — $9.99/month.</li>
              <li>Ad-Free — $15.99/month.</li>
              <li>Ultimate — $19.99/month (4K + downloads).</li>
              <li>Annual plans available — save about 16%.</li>
              <li>No senior discount currently.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best content for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Succession — family + power drama.</li>
              <li>Band of Brothers — WWII epic.</li>
              <li>The Sopranos — classic mob drama.</li>
              <li>HGTV shows — home improvement.</li>
              <li>Food Network + Magnolia Network.</li>
              <li>Ken Burns documentaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Max.com or download Max app.</li>
              <li>Create account with email.</li>
              <li>Choose plan + enter payment.</li>
              <li>Works on Roku, Fire Stick, Apple TV.</li>
              <li>TV, phone, tablet, computer.</li>
              <li>Up to 3 simultaneous streams.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Navigation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home — curated for your taste.</li>
              <li>Series + Movies tabs — browse all.</li>
              <li>My List — save for later.</li>
              <li>Continue Watching — resume shows.</li>
              <li>Search — type any title or person.</li>
              <li>Subtitles + audio description available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why it stands out</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Highest quality TV production.</li>
              <li>HGTV + Food Network great for at-home interest.</li>
              <li>New Warner Bros. movies quickly.</li>
              <li>Less content than Netflix but higher quality.</li>
              <li>CNN live news for news fans.</li>
              <li>Good for drama and documentary lovers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quality over quantity</h3>
            <p className="text-sm text-muted-foreground">Max has fewer total titles than Netflix but the quality is consistently higher. If you love HGTV, Food Network, or prestige dramas like The Sopranos or Succession, Max delivers. The $9.99 ad-supported plan is a good starting point. Ads are less frequent than regular TV — typically 4 minutes per hour.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
