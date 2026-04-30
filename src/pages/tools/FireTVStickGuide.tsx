import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function FireTVStickGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Fire TV Stick for Seniors | TekSure" description="Fire TV Stick setup and review for seniors. Compare to Roku, learn voice features." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fire TV Stick</h1>
          <p className="text-lg text-muted-foreground">Amazon&apos;s streaming stick explained.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Fire TV Stick?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon&apos;s competitor to Roku.</li>
              <li>HDMI plug-in for any TV.</li>
              <li>Voice control through Alexa.</li>
              <li>$30–$60 typical price.</li>
              <li>Frequent Amazon sales.</li>
              <li>Best if you&apos;re an Amazon Prime subscriber.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Models compared</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fire TV Stick — $30, basic HD.</li>
              <li>Fire TV Stick 4K — $50, sharper picture.</li>
              <li>Fire TV Stick 4K Max — $60, fastest.</li>
              <li>Fire TV Cube — $140, premium with Alexa speaker.</li>
              <li>Stick 4K best value for seniors.</li>
              <li>All include voice remote.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug stick into TV HDMI port.</li>
              <li>Plug power cable into wall.</li>
              <li>Switch TV to that HDMI input.</li>
              <li>Sign in with Amazon account.</li>
              <li>Connect to WiFi.</li>
              <li>Add streaming apps you use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alexa voice control</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press microphone on remote.</li>
              <li>&quot;Alexa, play Yellowstone.&quot;</li>
              <li>&quot;Alexa, pause.&quot;</li>
              <li>&quot;Alexa, what&apos;s the weather?&quot;</li>
              <li>&quot;Alexa, dim the lights&quot; (with smart bulbs).</li>
              <li>Voice control more natural than typing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fire TV vs Roku</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fire TV — better voice control + Alexa integration.</li>
              <li>Roku — simpler interface, no Amazon account needed.</li>
              <li>Fire TV — pushes Amazon Prime content harder.</li>
              <li>Roku — more neutral, treats all apps equally.</li>
              <li>Both have all major apps.</li>
              <li>Pick based on existing accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closed captions — Settings → Accessibility.</li>
              <li>Text-to-speech reads menus.</li>
              <li>Magnifier — zoom in on screen.</li>
              <li>Voice remote eliminates typing.</li>
              <li>Fire TV app on phone backup remote.</li>
              <li>Connect to Echo for room-fill audio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get Fire TV if you have Echo</h3>
            <p className="text-sm text-muted-foreground">If you have Amazon Echo speakers in your house, Fire TV Stick is the natural choice — your Echo can control the TV by voice, even from another room. &quot;Alexa, watch the news on Fire TV.&quot; If you don&apos;t use Alexa, Roku is simpler. Both cost similarly. Watch Amazon Prime Day for steep discounts on Fire TV Stick.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
