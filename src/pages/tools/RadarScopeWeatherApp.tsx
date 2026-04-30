import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudLightning } from 'lucide-react';

export default function RadarScopeWeatherApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RadarScope Weather App for Senior Storm Watchers | TekSure" description="Pro-level weather radar app for senior storm trackers and tornado-prone areas." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudLightning className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RadarScope</h1>
          <p className="text-lg text-muted-foreground">Pro weather radar. Used by chasers + meteorologists.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is RadarScope?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Professional NEXRAD radar app.</li>
              <li>$10 one-time purchase (no subscription).</li>
              <li>Same radar weathermen use.</li>
              <li>Detailed storm tracking.</li>
              <li>Tornado vortex signatures visible.</li>
              <li>Hail size detection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these areas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tornado Alley (TX, OK, KS, NE).</li>
              <li>Florida hurricane areas.</li>
              <li>Anywhere with severe weather.</li>
              <li>Want to know when storm is RIGHT over you.</li>
              <li>Better than TV weather.</li>
              <li>Local + zoom in detail.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NWS app (National Weather Service) — free official.</li>
              <li>Weather Channel — free with ads.</li>
              <li>AccuWeather — free with ads.</li>
              <li>Apple Weather (iPhone built-in).</li>
              <li>Free options sufficient for most.</li>
              <li>RadarScope for serious storm watchers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tornado warnings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FEMA app — official government alerts.</li>
              <li>Wireless Emergency Alerts (built into phone).</li>
              <li>NWS app — official watches/warnings.</li>
              <li>Storm Shield app — voice alerts.</li>
              <li>Local TV station apps — county alerts.</li>
              <li>NOAA Weather Radio backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storm Shield</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Voice alerts wake you up.</li>
              <li>Tornado warning audio alarm.</li>
              <li>$10/year subscription.</li>
              <li>Critical for sleeping during storms.</li>
              <li>Better than relying on phone vibrate.</li>
              <li>Saves lives in nighttime tornadoes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hurricane apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>National Hurricane Center app — official tracks.</li>
              <li>Hurricane Hub — comprehensive.</li>
              <li>Spaghetti models for path predictions.</li>
              <li>Free.</li>
              <li>Required for Florida + Gulf Coast residents.</li>
              <li>Watch + warning alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">FEMA + NWS apps free</h3>
            <p className="text-sm text-muted-foreground">For most seniors, the free FEMA app + free NWS app cover all weather alert needs. RadarScope is for weather enthusiasts who want professional-grade radar. Storm Shield&apos;s voice alerts are worth $10/year if you live in tornado-prone areas and want to be woken up by storms. Always have multiple alert sources.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
