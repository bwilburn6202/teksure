import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function PandoraForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pandora for Seniors | TekSure" description="Radio-style music. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pandora</h1>
          <p className="text-lg text-muted-foreground">Type artist. Get radio station.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Pandora?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easy as old radio.</li>
              <li>Don&apos;t pick every song.</li>
              <li>Type artist — get whole genre.</li>
              <li>Senior-favorite for simplicity.</li>
              <li>Free tier ad-supported.</li>
              <li>Premium $5/mo no ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type artist or song.</li>
              <li>Pandora plays similar.</li>
              <li>Thumbs up = more like that.</li>
              <li>Thumbs down = avoid.</li>
              <li>Learns your taste.</li>
              <li>&quot;Frank Sinatra Radio&quot; = endless similar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing tiers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free</strong> — ads, limited skips.</li>
              <li><strong>Pandora Plus</strong> — $5/mo, no ads.</li>
              <li><strong>Pandora Premium</strong> — $11/mo, on-demand.</li>
              <li>Free tier OK for seniors.</li>
              <li>Plus = best value.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorite stations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Frank Sinatra Radio.</li>
              <li>Beatles Radio.</li>
              <li>50s Hits.</li>
              <li>60s Folk Rock.</li>
              <li>Classical Light.</li>
              <li>Country Classics.</li>
              <li>Christmas (year-round!).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup easy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Pandora app.</li>
              <li>Sign up email.</li>
              <li>Type artist name.</li>
              <li>Tap &quot;Create Station&quot;.</li>
              <li>Listen + train.</li>
              <li>Multiple stations OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Compatible devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phones + tablets.</li>
              <li>Smart TVs.</li>
              <li>Echo, Google Home.</li>
              <li>Cars (Bluetooth, CarPlay).</li>
              <li>Smart speakers.</li>
              <li>&quot;Alexa, play Pandora&quot;.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for &quot;set + forget&quot;</h3>
            <p className="text-sm text-muted-foreground">Senior pick if don&apos;t want to manage playlists. Pandora discovers new music for you. Like 1950s radio — DJ picks. Friends discover similar. Many seniors pair with Echo for full background music. While cooking, gardening, reading. Free tier endless. No commitment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
