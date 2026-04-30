import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function AppleHomeKitForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple HomeKit for Seniors | TekSure" description="Apple&apos;s smart home platform for senior iPhone users. Privacy-focused, simple to use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple HomeKit</h1>
          <p className="text-lg text-muted-foreground">Smart home for iPhone users.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is HomeKit?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple&apos;s smart home platform.</li>
              <li>Built into Home app on iPhone.</li>
              <li>Works with HomeKit-compatible devices.</li>
              <li>Privacy-focused — Apple doesn&apos;t see your data.</li>
              <li>Control by Siri voice commands.</li>
              <li>Free, built into iOS.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lutron Caseta — easiest smart light switches.</li>
              <li>Philips Hue — color smart bulbs.</li>
              <li>Ecobee thermostat — auto temperature control.</li>
              <li>August smart lock — keyless entry.</li>
              <li>Logitech Circle View doorbell.</li>
              <li>All work with HomeKit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice control with Siri</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Siri, turn on living room lights.&quot;</li>
              <li>&quot;Set thermostat to 70.&quot;</li>
              <li>&quot;Lock front door.&quot;</li>
              <li>&quot;Good night&quot; — runs evening scene.</li>
              <li>&quot;Show me the front door camera.&quot;</li>
              <li>Hands-free for arthritis or mobility issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hub options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple TV — best HomeKit hub.</li>
              <li>HomePod or HomePod mini — also acts as hub.</li>
              <li>iPad set up as Home Hub.</li>
              <li>Hub allows remote control + automation.</li>
              <li>$99 HomePod mini + $25 smart bulb = simple start.</li>
              <li>Without hub, only works on local network.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Automations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;When I arrive home, turn on lights.&quot;</li>
              <li>&quot;At sunset, turn on porch light.&quot;</li>
              <li>&quot;When I leave, lock door + turn off thermostat.&quot;</li>
              <li>Daily routines automated.</li>
              <li>Set in Home app — simple if-then logic.</li>
              <li>Saves energy + improves safety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Invite family members to home in Home app.</li>
              <li>They control devices remotely.</li>
              <li>Adult children can check in on parents.</li>
              <li>Verify lights on, doors locked.</li>
              <li>Works across the country.</li>
              <li>Privacy-respected (you control access).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with one bulb + HomePod mini</h3>
            <p className="text-sm text-muted-foreground">A great starter HomeKit setup for $130: HomePod mini ($99) + Lutron Caseta starter kit ($30 for one switch). Plug in HomePod mini, install switch (or have electrician do it), and say &quot;Hey Siri, turn on lights.&quot; That simple. Once comfortable, add more bulbs, thermostats, locks. Most seniors find HomeKit much simpler than Alexa for Apple users.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
