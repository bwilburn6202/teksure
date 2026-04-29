import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ghost } from 'lucide-react';

export default function HalloweenSafetySeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Halloween Safety for Seniors | TekSure" description="Halloween safe for senior homes. Plain-English tech guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ghost className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Halloween Safety</h1>
          <p className="text-lg text-muted-foreground">Welcoming + safe. Tech makes easier.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Welcoming trick-or-treaters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Porch light on = welcome.</li>
              <li>Light off = no candy.</li>
              <li>Bowl on porch — leave self-serve.</li>
              <li>Ring doorbell — see who&apos;s coming.</li>
              <li>Sit on porch — most rewarding.</li>
              <li>Costco / Target — bulk candy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart tech help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ring Doorbell</strong> — see who&apos;s at door.</li>
              <li><strong>Smart bulbs</strong> — orange/purple Halloween lights.</li>
              <li><strong>Smart speakers</strong> — &quot;Alexa, play spooky music.&quot;</li>
              <li><strong>Outdoor cameras</strong> — driveway visibility.</li>
              <li><strong>Motion lights</strong> — illuminate path.</li>
              <li>Keep walkway clear + lit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Battery candles — no fire risk.</li>
              <li>LED string lights — cheaper electricity.</li>
              <li>Remove tripping hazards.</li>
              <li>Don&apos;t leave decorations after.</li>
              <li>Lock back gate — only front access.</li>
              <li>Turn off porch light when done.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay-home options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Trunk or Treat&quot; at church / school.</li>
              <li>Senior center Halloween parties.</li>
              <li>Skip if mobility-limited — no shame.</li>
              <li>&quot;Sorry, no candy&quot; sign + light off.</li>
              <li>Post on Nextdoor — kids skip.</li>
              <li>Watch Halloween classics — Disney+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connect with grandkids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FaceTime — see costumes!</li>
              <li>Send Halloween cards.</li>
              <li>Bake cookies, mail decorated.</li>
              <li>Mail Halloween activity book.</li>
              <li>Online costume contest.</li>
              <li>Watch Charlie Brown together remotely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fake costume sites — only known retailers.</li>
              <li>Suspicious &quot;decoration deals&quot; ads.</li>
              <li>Unknown trick-or-treaters at non-Halloween hours.</li>
              <li>Vandalism — call non-emergency police.</li>
              <li>Photograph any property damage.</li>
              <li>Don&apos;t open door at very late hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior costume ideas</h3>
            <p className="text-sm text-muted-foreground">No costume needed if not visited. Easy ones: pajamas + sleep mask = &quot;just woke up&quot;. T-shirt with name = &quot;costume&quot;. Witch hat + black clothes = classic. Football jersey = sports fan. Costco sells senior-comfort costumes. Amazon — endless options. Comfort &gt; complexity.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
