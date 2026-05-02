import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function SeniorAirQualityApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Quality Apps for Seniors — TekSure" description="Check air quality before going outside — AirNow, IQAir, BreezoMeter." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Quality Apps</h1>
          <p className="text-lg text-muted-foreground">Especially important for asthma and COPD.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AirNow (EPA)</h2><p>FREE official US Government app. Most accurate for US.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">IQAir</h2><p>FREE. Real-time pollution from 10,000+ sensors. Includes pollen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BreezoMeter</h2><p>FREE. Hyperlocal air quality (street-level accuracy).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical for seniors</h2><p>Asthma, COPD, heart conditions all worsen with bad air. AQI over 100 = stay indoors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wildfire smoke</h2><p>Apps track wildfire smoke spread. Crucial in West and California.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pollen tracking</h2><p>Pollen.com app — alerts when allergens are high.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: AQI over 150 = wear N95 mask outside. Saves lung damage.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
