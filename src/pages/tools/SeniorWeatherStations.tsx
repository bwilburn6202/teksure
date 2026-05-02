import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorWeatherStations() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Weather Stations for Seniors — TekSure" description="Track your backyard weather — AcuRite, Tempest, Davis weather stations." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Weather Stations</h1>
          <p className="text-lg text-muted-foreground">Your backyard weather, always known.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AcuRite Atlas</h2><p>$200. Most popular home weather station. Wi-Fi connected.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tempest</h2><p>$330. No moving parts. Most reliable. Phone app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Davis Vantage Pro</h2><p>$700. Used by hobbyists and farmers. Most accurate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Indoor temp matters for health. Outdoor for gardening. Frost warnings save plants.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap option</h2><p>$50 indoor/outdoor thermometer. Big display. No Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share weather</h2><p>Tempest and AcuRite can share to Weather Underground. Help neighbors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Weather station + smart sprinkler = efficient watering.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
