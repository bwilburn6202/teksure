import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export default function SeniorYouTubeChannels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best YouTube Channels for Seniors | TekSure" description="Curated list of YouTube channels seniors love. Cooking, history, music, comedy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Youtube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior YouTube Channels</h1>
          <p className="text-lg text-muted-foreground">Quality + free. Worth following.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>America&apos;s Test Kitchen.</li>
              <li>Joshua Weissman — comprehensive.</li>
              <li>Pasquale Sciarappa — Italian grandpa.</li>
              <li>Preppy Kitchen — beautiful.</li>
              <li>Smokin and Grillin with AB.</li>
              <li>All free with ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">History</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mark Felton Productions — WWII.</li>
              <li>Real Time History.</li>
              <li>Tasting History with Max Miller.</li>
              <li>Sam O&apos;Nella Academy.</li>
              <li>The History Underground.</li>
              <li>Rich + entertaining.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Music + concerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tiny Desk Concerts (NPR).</li>
              <li>Like a Version (Triple J).</li>
              <li>Rick Beato — music analysis.</li>
              <li>Polyphonic — music history.</li>
              <li>Full concerts often free.</li>
              <li>Grateful Dead, etc. all available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY + home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>This Old House.</li>
              <li>Project Farm — tool reviews.</li>
              <li>Stumpy Nubs — woodworking.</li>
              <li>Home Repair Tutor.</li>
              <li>Pretty much any DIY question.</li>
              <li>Save plumber/electrician calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rick Steves Europe.</li>
              <li>The Dyrt — RV travel.</li>
              <li>Long Long Honeymoon — RVer couple.</li>
              <li>Drew Binsky — country travel.</li>
              <li>Mr. Ben Brown.</li>
              <li>See places before you go.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save favorite videos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subscribe to channels you love.</li>
              <li>Save to playlists.</li>
              <li>Cast to TV — Roku/Apple TV.</li>
              <li>Comments — read for context.</li>
              <li>YouTube Premium $14/mo — no ads.</li>
              <li>Free version fine for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Subscribe to 5 channels</h3>
            <p className="text-sm text-muted-foreground">Pick one channel from each category — cooking, history, music, DIY, travel. Subscribe (free). YouTube algorithm starts showing you similar content. Within a month you have endless quality entertainment + learning. Cast to TV via Roku/Apple TV for big-screen viewing. Free + better than most cable packages.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
