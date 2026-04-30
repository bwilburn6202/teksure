import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

export default function VivinoWineApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vivino Wine App for Senior Connoisseurs | TekSure" description="Snap wine label, see ratings + reviews. Vivino app for senior wine lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vivino</h1>
          <p className="text-lg text-muted-foreground">Snap label. See ratings. Buy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph wine label.</li>
              <li>Shows ratings, reviews, prices.</li>
              <li>50 million users.</li>
              <li>Free app.</li>
              <li>Find best deals at stores.</li>
              <li>Track your wine drinking history.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Vivino app.</li>
              <li>Tap camera icon.</li>
              <li>Photograph wine label.</li>
              <li>App identifies the wine in seconds.</li>
              <li>See average rating from drinkers.</li>
              <li>Read tasting notes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for senior wine lovers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick wine in store with confidence.</li>
              <li>See what others think before buying.</li>
              <li>Discover wines similar to ones you like.</li>
              <li>Track preferences over time.</li>
              <li>Recall wines you enjoyed years ago.</li>
              <li>Build personal wine library.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy through Vivino</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order wine direct in app.</li>
              <li>Often cheaper than retail.</li>
              <li>Delivered to door.</li>
              <li>Curated bundles available.</li>
              <li>Wine club subscription option.</li>
              <li>State-by-state shipping rules apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Premium features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vivino Premium — $30/year.</li>
              <li>Detailed taste profile.</li>
              <li>Vintage chart for years.</li>
              <li>Unlimited wine list scans.</li>
              <li>Personalized recommendations.</li>
              <li>Free version sufficient for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other wine apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CellarTracker — for serious collectors.</li>
              <li>Delectable — pretty interface.</li>
              <li>Wine.com app — direct shipping.</li>
              <li>Total Wine app — finds nearest store.</li>
              <li>Each has unique strengths.</li>
              <li>Vivino easiest for casual users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Restaurant menu trick</h3>
            <p className="text-sm text-muted-foreground">When dining out, photograph the restaurant&apos;s wine list with Vivino. App scans every wine and shows ratings. Pick the highest-rated affordable option in seconds. Many senior wine lovers say this single trick has dramatically improved their restaurant wine experiences. Free with Vivino, no expertise required.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
