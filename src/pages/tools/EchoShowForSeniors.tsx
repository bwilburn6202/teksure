import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function EchoShowForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Echo Show for Seniors | TekSure" description="Echo Show with screen — the best smart device for seniors. Video calls, photos, recipes, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Echo Show</h1>
          <p className="text-lg text-muted-foreground">Best smart device for many seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Echo Show?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon&apos;s smart speaker WITH screen.</li>
              <li>Echo Show 5 ($85), Echo Show 8 ($150), Echo Show 15 ($280).</li>
              <li>Voice + touch control.</li>
              <li>Video calls family.</li>
              <li>Display photos.</li>
              <li>Read recipes hands-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Video call grandkids — &quot;Drop In&quot; feature.</li>
              <li>Display rotating photos.</li>
              <li>Watch recipe videos in kitchen.</li>
              <li>Daily news briefing.</li>
              <li>Calendar + reminders on screen.</li>
              <li>Weather + sports + traffic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drop In feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family video calls without answer needed.</li>
              <li>Connects automatically.</li>
              <li>Like a video intercom.</li>
              <li>Helps check on isolated parents.</li>
              <li>You can disable if you want privacy.</li>
              <li>Adult children love this for elderly parents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo display</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Connect Amazon Photos.</li>
              <li>Family uploads photos to your account.</li>
              <li>Latest photos auto-display when idle.</li>
              <li>Like a digital photo frame, but smart.</li>
              <li>Show grandkid photos automatically.</li>
              <li>Family shares photos remotely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Large text mode.</li>
              <li>Voice control everything.</li>
              <li>Color contrast options.</li>
              <li>Audio descriptions of screen.</li>
              <li>Subtitles on videos.</li>
              <li>Read books aloud (Audible).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Echo Hub for big families</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Echo Hub ($180) — wall-mounted control center.</li>
              <li>8-inch screen.</li>
              <li>Smart home control center.</li>
              <li>See all cameras, lights, thermostats.</li>
              <li>Mounted in central location.</li>
              <li>Great for whole-house smart home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Echo Show 8 hits sweet spot</h3>
            <p className="text-sm text-muted-foreground">For most senior homes, the Echo Show 8 ($150 or often $100 on sale) is the right pick. Bigger screen than Show 5 makes video calls genuinely usable. Smaller than Show 15 for kitchen counter or bedside. Combined with Drop In for family check-ins, it&apos;s the most-recommended smart device for seniors. Great gift from adult children to parents.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
