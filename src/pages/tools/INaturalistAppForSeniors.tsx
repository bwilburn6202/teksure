import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function INaturalistAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iNaturalist for Senior Naturalists | TekSure" description="Identify plants, insects, animals with photos. iNaturalist app for senior nature lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iNaturalist</h1>
          <p className="text-lg text-muted-foreground">Identify any plant or animal.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph anything natural.</li>
              <li>App identifies in seconds.</li>
              <li>Plants, insects, mushrooms, animals.</li>
              <li>Marine life, reptiles, fungi.</li>
              <li>Free.</li>
              <li>2 million users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Citizen science</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your photos help research.</li>
              <li>Used by scientists worldwide.</li>
              <li>Track species ranges + populations.</li>
              <li>Document climate change effects.</li>
              <li>Participate in BioBlitzes.</li>
              <li>Make a real contribution.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Seek by iNaturalist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Simpler version for kids + casual users.</li>
              <li>No account needed.</li>
              <li>No location data uploaded.</li>
              <li>Earn badges for IDs.</li>
              <li>Family-friendly.</li>
              <li>Great with grandkids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open iNaturalist app.</li>
              <li>Tap camera button.</li>
              <li>Photograph close-up.</li>
              <li>App suggests species.</li>
              <li>Read about the species.</li>
              <li>Save to your observations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Identify mystery plants in yard.</li>
              <li>Show grandkids amazing nature.</li>
              <li>Document insects on flowers.</li>
              <li>Identify mushrooms (don&apos;t eat without expert).</li>
              <li>Wildflowers on hikes.</li>
              <li>Ocean creatures at beach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Combined with other apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Merlin — birds specifically.</li>
              <li>PictureThis — plants only.</li>
              <li>iNaturalist — everything else.</li>
              <li>All free.</li>
              <li>Use the right one for the situation.</li>
              <li>Together — universal nature ID.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Backyard discovery</h3>
            <p className="text-sm text-muted-foreground">Spend 30 minutes in your backyard with iNaturalist. Photograph 10 different things — flowers, weeds, insects, mushrooms. App identifies them all. Many seniors discover dozens of fascinating species in their own yard. Great mental engagement + outdoor activity. Free and educational. Wonderful with visiting grandchildren.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
