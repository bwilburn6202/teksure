import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function GardenWeatherTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garden Weather Tools | TekSure" description="Frost alerts, planting calendars, soil temperature. Plain-English picks for weather apps and tools that help your garden thrive." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garden Weather Tools</h1>
          <p className="text-lg text-muted-foreground">Plant smarter. Lose fewer plants.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free zone + planting tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>USDA Plant Hardiness Zone Map</strong> — planthardiness.ars.usda.gov. Type zip — get zone.</li>
              <li><strong>Almanac.com Planting Calendar</strong> — when to plant for your zip code. Free.</li>
              <li><strong>Burpee planting calendar</strong> — also free, by zip.</li>
              <li><strong>Garden.org last-frost-date lookup</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather apps — gardener features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Weather Underground</strong> — frost alerts, hyperlocal stations.</li>
              <li><strong>AccuWeather</strong> — "MinuteCast" rain prediction.</li>
              <li><strong>Apple Weather</strong> — pollen, UV, sunrise/sunset.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plant ID apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iNaturalist</strong> — free, identifies plant + tells you if invasive/edible.</li>
              <li><strong>Seek by iNaturalist</strong> — kid-safe version, super fast.</li>
              <li><strong>PictureThis</strong> — $30/year. Premium accuracy + plant care.</li>
              <li><strong>PlantNet</strong> — free, scientific.</li>
              <li><strong>Google Lens</strong> — built into Google app, decent at common plants.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart garden tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart sprinkler</strong> — Rachio, Rain Bird Wi-Fi. Skips watering when rain forecast. Saves 30% water.</li>
              <li><strong>Smart soil sensor</strong> — XLUX (free, no app), or Vegetronix (with app).</li>
              <li><strong>Min-max thermometer</strong> — track overnight low ($15 at hardware store).</li>
              <li><strong>Rain gauge</strong> — $5-15.</li>
              <li><strong>Personal weather station</strong> — Davis, AcuRite. $150-500. Reports back to Weather Underground.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Frost protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cover with old sheets, frost cloth, or upturned buckets when overnight low &lt; 35°F.</li>
              <li>Container plants — move into garage or against house wall.</li>
              <li>Water plants thoroughly DAY BEFORE frost — wet soil holds heat.</li>
              <li>Christmas lights (incandescent only) under cover add 5-10°F.</li>
              <li>Frost cloth at hardware store — $10-30.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free local advice</h3>
            <p className="text-sm text-muted-foreground">Every county has a Cooperative Extension office (USDA). FREE Master Gardener phone hotline. Identify pests, diagnose plant problems, get planting advice for YOUR exact area. Search "[your county] cooperative extension".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
