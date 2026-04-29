import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

const SENSORS = [
  { name: 'Govee Wifi Water Sensor (3-pack)', cost: '$30-50', good: 'Cheapest reliable. Phone alerts. Long battery life.', best: 'Best budget.' },
  { name: 'Aqara Water Leak Sensor', cost: '$15 each (needs hub)', good: 'Tiny, reliable, work with HomeKit/Alexa/Google. Hub costs $30-60.', best: 'Best smart-home.' },
  { name: 'YoLink Water Leak (4-pack)', cost: '$80', good: 'Mile-long range. No wifi cluttering. Great for vacation homes.', best: 'Best long-range.' },
  { name: 'Moen Flo / Phyn Plus', cost: '$300-700', good: 'Whole-house — installs at main water line. Detects ANY leak. Auto-shuts off water.', best: 'Best whole-home.' },
];

export default function LeakDetectionSensors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Leak Sensors — Save $10K in Damage | TekSure" description="$30 in sensors can save $10,000 in water damage. Plain-English picks for under-sink, water-heater, and whole-home leak detection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Leak Sensors</h1>
          <p className="text-lg text-muted-foreground">Stop a $10K disaster with $30 in sensors.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why now</h2>
            <p className="text-sm">Water damage = #1 home insurance claim. Average $11,000 per incident. Most leaks happen slowly — pinhole in pipe, water heater drip, washer hose. By the time you notice, drywall and floors are ruined.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SENSORS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.good}</p>
                <p className="text-sm text-muted-foreground">{s.best}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to put sensors</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Under kitchen sink</strong> — slow drips most common.</li>
              <li><strong>Under bathroom sinks</strong> (each one).</li>
              <li><strong>Under water heater</strong> — when it dies, it dies wet.</li>
              <li><strong>Behind/under washing machine</strong> — hose burst = flood in minutes.</li>
              <li><strong>Behind toilet</strong> — wax-ring leaks rot floors.</li>
              <li><strong>Under refrigerator with ice maker</strong>.</li>
              <li><strong>Sump pump pit</strong> — alerts if pump fails during storm.</li>
              <li><strong>Basement floor near floor drain</strong>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How they work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Battery-powered. 1-3 year life.</li>
              <li>Two metal contacts on bottom. Water completes the circuit.</li>
              <li>Sensor connects to your wifi.</li>
              <li>App pings phone within seconds when water detected.</li>
              <li>Many also beep loudly at the sensor itself.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Whole-house auto-shutoff</h2>
            <p className="text-sm">For premium protection — Moen Flo or Phyn Plus install at your main water line. Detects ANY leak in the house and SHUTS OFF the water automatically. $300-700 + plumber install. Many home insurance companies give 5-10% discount.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vacation peace of mind</h3>
            <p className="text-sm text-muted-foreground">Heading south for the winter? Add 4-6 sensors before you leave + a smart valve. Phone gets alert from 2,000 miles away — call neighbor or plumber before damage spreads. Cheaper than a new floor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
