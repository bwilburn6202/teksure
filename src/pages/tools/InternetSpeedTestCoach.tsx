import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gauge, ExternalLink } from 'lucide-react';

export default function InternetSpeedTestCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Internet Speed Test Coach — How Fast Is Yours? | TekSure" description="Are you getting the internet speed you\'re paying for? Free speed tests and a plain-English guide to what speeds you actually need." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gauge className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Internet Speed Test Coach</h1>
          <p className="text-lg text-muted-foreground">Is your internet as fast as you\'re paying for?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Run a free test</h2>
            <p className="text-sm mb-3">Most accurate: stand near your router with a laptop or phone connected to your home Wi-Fi.</p>
            <div className="grid sm:grid-cols-2 gap-2">
              <Button asChild variant="outline"><a href="https://fast.com" target="_blank" rel="noopener noreferrer">Fast.com (by Netflix) <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
              <Button asChild variant="outline"><a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">Speedtest.net <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
            </div>
            <p className="text-sm mt-3">Both run a speed test in your browser. Free, no signup. Run it 2-3 times — different times of day, different rooms.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Read your numbers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Download speed (Mbps)</strong> — how fast info comes IN. The big number. Streaming and browsing.</li>
              <li><strong>Upload speed (Mbps)</strong> — how fast info goes OUT. Matters for video calls, posting photos.</li>
              <li><strong>Ping or latency (ms)</strong> — delay. Lower is better. Most matters for gaming and video calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What speeds do you really need?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>10 Mbps</strong> — email, web browsing, one HD video stream.</li>
              <li><strong>25 Mbps</strong> — comfortable for one household, including HD streaming and Zoom.</li>
              <li><strong>50-100 Mbps</strong> — multiple devices streaming simultaneously, 4K video.</li>
              <li><strong>300+ Mbps</strong> — large household with multiple TVs, gaming kids, working-from-home.</li>
              <li><strong>Gigabit (1000 Mbps)</strong> — overkill for most. The internet companies push it because the margin is high.</li>
            </ul>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Most senior households are over-paying.</strong> If you only have a TV, a phone or two, and check email — 25-50 Mbps is plenty. Consider downgrading.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your speed is much lower than promised</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Test wired vs wireless.</strong> Connect a laptop directly to the modem with an Ethernet cable. Test again. If wired is fast but Wi-Fi is slow — your router/Wi-Fi is the problem.</li>
              <li><strong>Restart the modem.</strong> Unplug for 30 seconds, plug back in. Solves a surprising amount.</li>
              <li><strong>Check for a "modem upgrade" need.</strong> Old modems can\'t deliver new speeds. Call your ISP.</li>
              <li><strong>Check the actual cable plan you\'re paying for.</strong> Some "boosts" expire after 6 months and you\'re stuck on the slow plan.</li>
              <li><strong>Move the router.</strong> Central in the home, off the floor, away from microwave and big metal objects.</li>
              <li><strong>Mesh Wi-Fi</strong> if your home is large or has dead zones. (See our Mesh Wi-Fi Picker.)</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior internet discounts</h3>
            <p className="text-sm text-muted-foreground">Many providers (Comcast Internet Essentials, AT&T Access, Spectrum Internet Assist) offer $10-30/month plans for low-income or senior customers. Speeds vary but often 50-100 Mbps. Eligibility: usually if you receive SNAP, Medicaid, or live below certain income thresholds. Worth asking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
