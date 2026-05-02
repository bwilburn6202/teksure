import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flower } from 'lucide-react';

export default function SeniorPlantIdentify() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plant ID Apps — Senior Guide" description="Apps that identify plants from a photo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flower className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant ID Apps</h1>
          <p className="text-lg text-muted-foreground">Snap a photo. Know the plant.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. PictureThis</h2><p>$30/year. Most accurate. Identifies 17,000+ plants with care tips.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. PlantNet</h2><p>Free. Open-source. Less polished but still accurate for common plants.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Google Lens</h2><p>Free. Built into most Android phones. Aim camera at a plant.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Apple Visual Lookup</h2><p>Free on iPhone. Tap any photo, then the info icon. Identifies plants automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Care reminders</h2><p>Most apps remind you to water and fertilize each plant on a schedule.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sick plant diagnosis</h2><p>Photograph a sick plant. Apps suggest pests, diseases, or watering issues.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Try free first. If happy, then upgrade. PictureThis offers a 7-day free trial.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
