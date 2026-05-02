import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudRain } from 'lucide-react';

export default function SeniorWeatherAlerts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather Alert Apps for Seniors — TekSure" description="Free weather warning apps for seniors — tornado, flood, heat alerts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudRain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather Alerts</h1>
          <p className="text-lg text-muted-foreground">Never miss a storm warning.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless Emergency Alerts</h2><p>Free, automatic. Tornado and AMBER alerts already turned on for most phones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Weather.gov</h2><p>Official National Weather Service. Free. No ads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RadarScope</h2><p>$10 once. Best radar app. Used by storm chasers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FEMA app</h2><p>Free. Disaster info, shelter locator, recovery resources.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heat warnings</h2><p>NWS HeatRisk shows danger levels. Critical for seniors during summer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Backup radio</h2><p>NOAA Weather Radio costs $30 — works during power outages.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sign up for your county&apos;s emergency text alerts at your sheriff&apos;s website.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
