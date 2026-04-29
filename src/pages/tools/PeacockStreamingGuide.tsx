import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function PeacockStreamingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Peacock Streaming for Seniors | TekSure" description="Peacock TV explained for seniors. NBC content, free tier, plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Play className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Peacock</h1>
          <p className="text-lg text-muted-foreground">NBC&apos;s streaming service. Partly free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Peacock?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Streaming service from NBCUniversal.</li>
              <li>Has a free tier — unusual for streaming.</li>
              <li>NBC shows, movies, sports.</li>
              <li>Next-day NBC episodes.</li>
              <li>Classic TV — The Office, Cheers, Frasier.</li>
              <li>Live news from NBC + MSNBC.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans + cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free — limited content, more ads.</li>
              <li>Premium — $5.99/month with ads.</li>
              <li>Premium Plus — $11.99/month, fewer ads.</li>
              <li>Annual plans save about 17%.</li>
              <li>Free tier enough for casual viewers.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Office — all 9 seasons.</li>
              <li>Frasier — all 11 seasons.</li>
              <li>Law + Order — classic episodes.</li>
              <li>NBC Nightly News live + archived.</li>
              <li>Saturday Night Live library.</li>
              <li>Olympics coverage (when applicable).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to PeacockTV.com or download app.</li>
              <li>Create free account — email required.</li>
              <li>Choose free or paid plan.</li>
              <li>Works on Roku, Fire Stick, Apple TV.</li>
              <li>Also on phone, tablet, computer.</li>
              <li>Free plan — no credit card needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Live TV on Peacock</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Live NBC broadcast (local channel).</li>
              <li>MSNBC live news all day.</li>
              <li>CNBC business news.</li>
              <li>Golf, soccer, NFL some games.</li>
              <li>24/7 channels — curated programming.</li>
              <li>Premium plan required for most live.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Navigation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home — personalized picks.</li>
              <li>Browse — all content by category.</li>
              <li>My Stuff — saved titles.</li>
              <li>Search — type show or actor name.</li>
              <li>Subtitles — CC button in player.</li>
              <li>Resume watching auto-saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start free</h3>
            <p className="text-sm text-muted-foreground">Peacock is one of the few streaming services with a genuinely useful free tier. If you love classic NBC shows — The Office, Frasier, Law and Order — start with the free plan. You&apos;ll see more ads but pay nothing. Upgrade to Premium only if you want fewer interruptions or the live NBC channel.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
