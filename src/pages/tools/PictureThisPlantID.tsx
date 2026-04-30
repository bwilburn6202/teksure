import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function PictureThisPlantID() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PictureThis Plant Identification for Seniors | TekSure" description="Identify any plant by photo. PictureThis and free alternatives explained for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant ID Apps</h1>
          <p className="text-lg text-muted-foreground">Snap a photo. Know what you grew.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What plant ID apps do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take photo of leaf, flower, or whole plant.</li>
              <li>App identifies species in seconds.</li>
              <li>Tells you care needs, water schedule, sun needs.</li>
              <li>Warns about toxic plants (pets, grandkids).</li>
              <li>Diagnoses disease and pest problems.</li>
              <li>Works on indoor and outdoor plants.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PictureThis (most popular)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 billion+ photos identified.</li>
              <li>Free with limits — paid: $29.99/year.</li>
              <li>Highly accurate — 1 million+ species.</li>
              <li>Care reminders included.</li>
              <li>Disease diagnosis with treatment tips.</li>
              <li>Available iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>PlantNet — 100% free, citizen-science based.</li>
              <li>Seek by iNaturalist — completely free.</li>
              <li>Google Lens — built into Android, very accurate.</li>
              <li>iPhone Visual Look Up — built in, point camera.</li>
              <li>All free options handle most common plants.</li>
              <li>Try free first before paying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app, tap camera button.</li>
              <li>Photograph the leaf or flower clearly.</li>
              <li>Good light helps — avoid shadows.</li>
              <li>App shows top match in seconds.</li>
              <li>Read about care, sun, water needs.</li>
              <li>Save to your &quot;garden&quot; collection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disease + pest help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph the affected leaf.</li>
              <li>App diagnoses common problems.</li>
              <li>Suggests organic + chemical treatments.</li>
              <li>Won&apos;t replace local nursery advice.</li>
              <li>But helpful first step.</li>
              <li>Many free options now match paid quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Identify mystery plant grandkids find.</li>
              <li>Check if backyard plant is toxic to dog.</li>
              <li>Identify poison ivy before touching.</li>
              <li>Check mushrooms — but don&apos;t eat any without expert.</li>
              <li>Identify weeds before pulling.</li>
              <li>Know what your spouse planted years ago.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Google Lens first</h3>
            <p className="text-sm text-muted-foreground">Before paying for PictureThis, try Google Lens (free, built into most phones). Open Google app, tap camera icon, point at plant. Free, no app to install, works on most plants. If you want care reminders and disease diagnosis, then PictureThis is worth $30/year. PlantNet is the best 100% free dedicated plant ID app.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
