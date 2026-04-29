import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CarPlayAndroidAuto() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CarPlay & Android Auto Coach — Phone on the Car Screen | TekSure" description="Use your phone safely on the car&apos;s screen. Plain-English setup for Apple CarPlay and Android Auto — maps, music, hands-free calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CarPlay & Android Auto</h1>
          <p className="text-lg text-muted-foreground">Your phone, on the car&apos;s screen. Hands-free.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What they do</h2>
            <p className="text-sm">CarPlay (iPhone) and Android Auto turn your car&apos;s screen into a phone screen. Maps, music, podcasts, texts, and calls — all controlled by voice or big buttons. Built into most cars 2017+.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up CarPlay (iPhone)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug the iPhone into the car\'s USB port with a Lightning or USB-C cable.</li>
              <li>Car asks: "Use CarPlay?" — Yes.</li>
              <li>Done. Maps, Music, Phone all on the car screen.</li>
              <li>For wireless CarPlay (some newer cars): Settings → General → CarPlay → set up.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up Android Auto</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Android Auto</strong> from Play Store (often pre-installed).</li>
              <li>Plug the phone into the car USB.</li>
              <li>App walks you through pairing.</li>
              <li>Wireless Android Auto on newer cars works similarly.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best things to do once it\'s working</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Hey Siri / Hey Google, take me home"</strong> — turn-by-turn directions on car screen.</li>
              <li><strong>"Send a text to Mary"</strong> — dictate hands-free; Siri / Google reads incoming texts aloud.</li>
              <li><strong>Spotify, Apple Music, Audible</strong> — controls all on the car screen.</li>
              <li><strong>Podcasts</strong> — Apple Podcasts, Spotify, Pocket Casts.</li>
              <li><strong>WhatsApp / Messages</strong> — read received texts, dictate replies.</li>
              <li><strong>Waze</strong> on Android Auto / CarPlay — real-time traffic and hazards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your car doesn\'t support it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aftermarket head units</strong> from Pioneer, Kenwood, Sony — $200-600 installed. Replaces your factory radio.</li>
              <li><strong>Best Buy / Crutchfield install</strong> — $50-100 install fee.</li>
              <li><strong>Carlinkit Box</strong> — $80-130 plug-in adapter that adds wireless CarPlay/Android Auto to cars that already have wired support.</li>
              <li><strong>Bluetooth-only solution</strong> — for older cars: pair phone to car via Bluetooth, use phone screen on a phone mount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Driving safety</h3>
            <p className="text-sm text-muted-foreground">Use VOICE for everything you can. Glancing at the screen is faster than fumbling for your phone, but voice is safest. Ask Siri or Google for directions, music, calls, texts. Set commands up before driving.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
