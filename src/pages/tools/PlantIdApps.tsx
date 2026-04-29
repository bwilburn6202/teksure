import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

const APPS = [
  { name: 'Seek by iNaturalist', cost: 'FREE, no ads', best: 'Made by the California Academy of Sciences. Point and identify any plant, bug, bird, or animal.', good: 'Best free option, no signup needed, kid-safe.' },
  { name: 'PlantNet', cost: 'FREE', best: 'Open-source from a French research consortium. Big database of wild plants.', good: 'Best for accuracy on wildflowers and weeds.' },
  { name: 'PictureThis', cost: 'Free trial then $30/year', best: 'Most polished app. Identifies the plant + tells you watering, sunlight, when to plant. Plant care reminders.', good: 'Worth the trial if you have a sick houseplant.' },
  { name: 'iNaturalist', cost: 'FREE', best: 'For serious nature lovers. Your photos contribute to real scientific research. Community of experts confirms IDs.', good: 'Citizen science.' },
  { name: 'Apple\'s Visual Look Up', cost: 'FREE, built into iPhone', best: 'Just tap any photo in your camera roll → swipe up → if it sees a plant, the leaf icon appears → tap for ID.', good: 'No app to install if you already have iPhone with iOS 15+.' },
  { name: 'Google Lens', cost: 'FREE, built into Android', best: 'Open Google app → tap the lens icon → point at a plant.', good: 'Works on iPhone too via the Google app.' },
];

export default function PlantIdApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plant Identification Apps — Name Any Plant on a Walk | TekSure" description="Point your phone at a flower, get its name in 2 seconds. Free apps for plant ID, plus paid options with care reminders. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant Identification Apps</h1>
          <p className="text-lg text-muted-foreground">"What is that flower?" Answered in 2 seconds.</p>
        </div>

        <div className="space-y-3">
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

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for accurate ID</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Take 2-3 photos from different angles — leaves, flower, full plant.</li>
              <li>Get close. Apps need detail, not the whole forest.</li>
              <li>Daylight is best.</li>
              <li>Leaves are often more diagnostic than flowers.</li>
              <li>For a sick plant, photograph the affected leaves AND a healthy one for comparison.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground"><strong>Seek</strong> for free, ad-free identification. <strong>PictureThis</strong> if you want plant care reminders for houseplants and a polished interface — start with the free trial, decide if it\'s worth $30/year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
