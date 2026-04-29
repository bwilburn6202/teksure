import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function MotionSensorLightsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Motion Sensor Lights for Seniors | TekSure" description="Motion sensor lights for home safety explained. Indoor and outdoor options for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Motion Sensor Lights</h1>
          <p className="text-lg text-muted-foreground">Lights that turn on when you move.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why they matter for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Prevent nighttime falls — lights come on automatically.</li>
              <li>No fumbling for switches in the dark.</li>
              <li>Deter intruders — they dislike sudden light.</li>
              <li>Save electricity — only on when needed.</li>
              <li>Great for hallways, bathrooms, stairs.</li>
              <li>No smart home required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Indoor motion lights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug-in night lights with motion — under $15.</li>
              <li>Battery-powered — no wiring needed.</li>
              <li>Stick anywhere — closet, hallway, bathroom.</li>
              <li>Stair lights — light each step.</li>
              <li>Under-bed lights — great for nighttime.</li>
              <li>Cabinet lights — kitchen or bathroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outdoor motion lights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Driveway lights — see who&apos;s arriving.</li>
              <li>Front porch lights — safe entry at night.</li>
              <li>Back yard lights — deter intruders.</li>
              <li>Solar-powered outdoor options — no wiring.</li>
              <li>Flood lights with cameras — Ring, Wyze.</li>
              <li>Motion + camera combo great value.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart bulb option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart bulbs (Philips Hue, LIFX) have motion rules.</li>
              <li>Set to turn on when entering a room.</li>
              <li>Works with Alexa: &quot;motion detected in hallway.&quot;</li>
              <li>Motion sensor sold separately — pairs to bulb.</li>
              <li>More setup but very flexible.</li>
              <li>Good if already have smart bulbs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Simple setup steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug-in type: plug into outlet, aim sensor.</li>
              <li>Battery type: peel backing, stick to wall.</li>
              <li>Outdoor wired: have electrician install.</li>
              <li>Solar outdoor: stake in ground, aim panel at sun.</li>
              <li>Test by walking past — light should trigger.</li>
              <li>Adjust sensitivity dial if too/not sensitive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best budget picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>GE plug-in night light — around $8.</li>
              <li>Mr. Beams battery LED — around $20 for 2-pack.</li>
              <li>BAXIA solar outdoor — around $25 for 2-pack.</li>
              <li>Ring Floodlight Cam — around $99 (smart + camera).</li>
              <li>Maxxima stair lights — around $30 for 4-pack.</li>
              <li>All available at Amazon or Home Depot.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with the bathroom</h3>
            <p className="text-sm text-muted-foreground">Falls at night are a leading cause of injury for seniors, and most happen on the way to the bathroom. A simple $8 plug-in motion night light in the hallway and bathroom makes a huge difference. You never have to find a light switch in the dark. It&apos;s one of the simplest and most impactful safety upgrades a senior can make.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
