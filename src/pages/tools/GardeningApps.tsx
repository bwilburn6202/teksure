import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

const APPS = [
  { name: 'Planta', cost: 'Free; $36/yr Premium', best: 'Reminds you when each plant needs water. Light-meter tool checks if your plant gets enough sun. Beautiful interface.', good: 'Free version is solid.' },
  { name: 'Vera by Bloomscape', cost: 'Free', best: 'Diagnostic — take a photo of a sick plant, get likely problem and fix.', good: 'No subscription.' },
  { name: 'PictureThis', cost: 'Free trial; $30/yr', best: 'Identifies any plant + tells you how to care for it. (Also good for outdoor wildflowers.)', good: 'Combines ID + care.' },
  { name: 'Gardenia', cost: 'Free', best: 'Plant info + companion planting suggestions for vegetable gardens.', good: 'Best free pick for veggie growers.' },
  { name: 'Almanac.com / Old Farmer\'s Almanac', cost: 'Free', best: 'When to plant, when to harvest, frost dates by zip code. Vegetables, herbs, flowers.', good: 'A treasure of plain-English garden wisdom.' },
];

export default function GardeningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gardening Apps — Plant Care, ID, Watering Reminders | TekSure" description="Plant care reminders, sick plant diagnosis, when to plant. The best gardening apps and free websites for green thumbs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flower2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gardening Apps</h1>
          <p className="text-lg text-muted-foreground">Stop forgetting to water. Diagnose sick plants. Plant at the right time.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free gardening references</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>USDA Plant Hardiness Zone Map</strong> — type your zip code at planthardiness.ars.usda.gov to find your zone. Tells what survives winter.</li>
              <li><strong>Old Farmer\'s Almanac (almanac.com)</strong> — when to plant tomatoes, peppers, etc., for your zone.</li>
              <li><strong>Your county Extension office</strong> — most US counties have a free Cooperative Extension service. Free advice from real horticulturists. Search "[your county] cooperative extension".</li>
              <li><strong>Master Gardener volunteers</strong> — free help via the same Extension offices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart garden gear worth knowing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart sprinkler controller (Rachio, Rain Bird LNK Wi-Fi)</strong> — $100-200. Skips watering on rainy days. Can save 30% on water bill.</li>
              <li><strong>Soil moisture meter</strong> — $20 stick that tells you whether to water. Cheap and surprisingly accurate.</li>
              <li><strong>Smart bird feeder camera</strong> — $150-300 (Bird Buddy, Birdfy). Identifies birds and emails you photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you forget to water — start with <strong>Planta\'s free version</strong>. If you want to grow vegetables — bookmark <strong>almanac.com</strong> and look up your zone\'s frost dates. If a plant is sick — open <strong>Vera</strong> (free) and let it diagnose.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
