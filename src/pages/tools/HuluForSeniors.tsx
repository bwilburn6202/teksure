import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function HuluForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hulu for Seniors | TekSure" description="Hulu streaming explained for seniors. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hulu</h1>
          <p className="text-lg text-muted-foreground">Current TV + movies + live TV option.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What makes Hulu different</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shows available next day after TV airing.</li>
              <li>Large library of current TV seasons.</li>
              <li>Movies — newer than Netflix often.</li>
              <li>Original shows exclusive to Hulu.</li>
              <li>Live TV add-on available (like cable).</li>
              <li>Owned by Disney.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans + cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hulu (with ads) — $7.99/month.</li>
              <li>Hulu (no ads) — $17.99/month.</li>
              <li>Hulu + Live TV — $82.99/month.</li>
              <li>Bundle with Disney+ + ESPN+ saves money.</li>
              <li>Student discount available.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best content for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Catch up on missed network TV episodes.</li>
              <li>Handmaid&apos;s Tale, The Bear — award winners.</li>
              <li>Classic TV shows — older seasons.</li>
              <li>News programs on Live TV plan.</li>
              <li>Documentaries + true crime.</li>
              <li>FX network shows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Hulu.com or download app.</li>
              <li>Create account with email.</li>
              <li>Choose plan + enter payment.</li>
              <li>Download on TV, phone, tablet.</li>
              <li>Works on Roku, Fire Stick, Apple TV.</li>
              <li>Sign into multiple devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Live TV option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace cable with Hulu + Live TV.</li>
              <li>ABC, CBS, NBC, Fox, CNN, ESPN included.</li>
              <li>50 hours cloud DVR included.</li>
              <li>Watch on multiple screens.</li>
              <li>Local channels included (most markets).</li>
              <li>Check your zip for local availability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>My Stuff — save shows + movies.</li>
              <li>Continue Watching — pick up where left off.</li>
              <li>Subtitles — tap CC during playback.</li>
              <li>Parental controls available.</li>
              <li>Download for offline (no-ads plan only).</li>
              <li>Search by actor name works well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cable replacement?</h3>
            <p className="text-sm text-muted-foreground">Hulu + Live TV is the best cable replacement for seniors who watch network TV. You get local channels, news, sports, and on-demand. At $82.99/month it&apos;s cheaper than most cable bills. The basic streaming-only plan at $7.99 is great if you just want current TV shows the day after they air.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
