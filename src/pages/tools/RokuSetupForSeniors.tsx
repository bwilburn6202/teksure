import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function RokuSetupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roku Setup for Seniors | TekSure" description="Make any TV smart with a Roku. Step-by-step setup for senior viewers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roku Setup</h1>
          <p className="text-lg text-muted-foreground">Make any TV smart. Plain English.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is a Roku?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Small device — turns any TV into smart TV.</li>
              <li>Plays Netflix, Hulu, YouTube, all major apps.</li>
              <li>Plug into HDMI port on back of TV.</li>
              <li>$30 to $130 depending on model.</li>
              <li>Cheaper than buying new smart TV.</li>
              <li>Easiest streaming device for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Roku models</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Roku Express — $30, basic HD.</li>
              <li>Roku Streaming Stick 4K — $50, popular pick.</li>
              <li>Roku Ultra — $100, fastest + voice remote.</li>
              <li>Roku Voice Remote Pro — bigger remote, finds itself.</li>
              <li>Avoid Roku TVs (built-in) — separate device better.</li>
              <li>Stick or Express enough for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup step by step</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find HDMI port on back of TV.</li>
              <li>Plug Roku stick into HDMI.</li>
              <li>Plug power cable into wall outlet.</li>
              <li>Turn TV to that HDMI input.</li>
              <li>Use TV remote &quot;Input&quot; or &quot;Source&quot; button.</li>
              <li>Roku setup screen appears.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connecting to WiFi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Roku finds nearby WiFi networks.</li>
              <li>Pick yours from list.</li>
              <li>Type WiFi password using on-screen keyboard.</li>
              <li>Roku tests connection.</li>
              <li>If no WiFi — Roku also has wired Ethernet option (Ultra model).</li>
              <li>Use Roku app on phone to type password faster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adding apps (channels)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Roku &quot;channels&quot; = streaming apps.</li>
              <li>Search for Netflix, Hulu, etc. in Channel Store.</li>
              <li>Add free.</li>
              <li>Sign in with your subscription account.</li>
              <li>Repeat for each service you have.</li>
              <li>Free channels: Tubi, PlutoTV, YouTube, Crackle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Voice remote — say &quot;Find Frank Sinatra&quot; instead of typing.</li>
              <li>Roku app on phone — better keyboard, find lost remote.</li>
              <li>Headphone jack on remote — private listening.</li>
              <li>Closed captions — Settings → Captions.</li>
              <li>Increase text size in settings.</li>
              <li>Most-watched channels on home screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Roku Ultra worth the upgrade</h3>
            <p className="text-sm text-muted-foreground">For seniors, the Roku Ultra ($100) is worth the extra over the basic stick. Faster, voice remote with headphone jack (private listening when spouse sleeps), and the &quot;find my remote&quot; button when it slides between couch cushions. The Roku app on your phone is also a backup remote with better keyboard. Many seniors say it&apos;s the easiest streaming device they&apos;ve used.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
