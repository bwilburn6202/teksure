import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorPlantCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plant Care Apps for Seniors — Senior Guide" description="Keep houseplants and gardens healthy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant Care Apps</h1>
          <p className="text-lg text-muted-foreground">Greener thumb with phone help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Planta</h2><p>Free version. Reminds you when to water each plant. Premium $35/year for full features.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. PictureThis</h2><p>$30/year. Identifies plants. Diagnoses sick leaves.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Garden Answers</h2><p>Free. Snap photo of plant. Get expert ID and care info.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. From Seed</h2><p>Free planting calendar based on your zip code. Plan vegetable garden timing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Seek by iNaturalist</h2><p>Free. Kid-friendly. Great with grandkids identifying flowers in the yard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. AeroGarden app</h2><p>Indoor garden kit. App reminds when to water and add nutrients.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Gardening reduces stress and improves cognitive function in older adults. App help makes it easier.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
