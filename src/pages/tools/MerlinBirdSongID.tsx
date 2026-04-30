import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function MerlinBirdSongID() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Merlin Bird Sound ID for Senior Birders | TekSure" description="Identify birds by their song. Merlin app from Cornell Lab — free + magical." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Merlin Sound ID</h1>
          <p className="text-lg text-muted-foreground">Identify birds by their song.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Magic feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold phone toward singing bird.</li>
              <li>App identifies in seconds.</li>
              <li>Highlights different birds singing simultaneously.</li>
              <li>Confidence ratings.</li>
              <li>From Cornell Lab of Ornithology.</li>
              <li>Free, no ads, no premium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other Merlin features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo ID — identify by photograph.</li>
              <li>Step-by-Step ID — answer questions.</li>
              <li>Free bird packs by region.</li>
              <li>Range maps + sound recordings.</li>
              <li>Photos by Cornell.</li>
              <li>Save sightings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair with eBird</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>eBird = sister app, also free.</li>
              <li>Log every bird you see.</li>
              <li>Build life list.</li>
              <li>Help citizen science.</li>
              <li>See what birds nearby see.</li>
              <li>Connect with birding community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for senior birders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hearing loss — see what bird is singing.</li>
              <li>Vision issues — sound ID without seeing.</li>
              <li>Backyard birding from window.</li>
              <li>Walking trails with phone in pocket.</li>
              <li>Natural mental engagement.</li>
              <li>Outdoor activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Merlin Bird ID free.</li>
              <li>Download bird pack for your region.</li>
              <li>Tap Sound ID button.</li>
              <li>Hold phone toward bird sound.</li>
              <li>Wait 5–10 seconds.</li>
              <li>Identification appears.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Birding becomes addictive</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many seniors discover birding via Merlin.</li>
              <li>Listen for birds even on errands.</li>
              <li>Trip planning becomes bird-focused.</li>
              <li>Connect with local Audubon.</li>
              <li>Active outdoor hobby.</li>
              <li>Lifelong learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test in your backyard today</h3>
            <p className="text-sm text-muted-foreground">Download Merlin Bird ID free, install bird pack for your region, then step into your backyard. Open Sound ID, point phone toward any bird sound. Within seconds, you&apos;ll know what bird you&apos;re hearing — perhaps for the first time in years. Many seniors are amazed that 5–10 different bird species visit their backyard daily.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
