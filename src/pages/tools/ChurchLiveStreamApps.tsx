import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function ChurchLiveStreamApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Church Live Streaming for Seniors | TekSure" description="Watch your church service from home. Best apps and platforms for senior worshippers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Church Live Streaming</h1>
          <p className="text-lg text-muted-foreground">Worship from home when you can&apos;t attend.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need home worship</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mobility issues prevent attendance.</li>
              <li>Recent surgery or illness.</li>
              <li>Bad weather days.</li>
              <li>Travel + still want home church.</li>
              <li>Caretaking responsibilities.</li>
              <li>Personal preference for privacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find your church online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most churches stream on YouTube or Facebook.</li>
              <li>Search church name + &quot;live stream.&quot;</li>
              <li>Subscribe to YouTube channel for notifications.</li>
              <li>Like Facebook page for live alerts.</li>
              <li>Some churches have own apps.</li>
              <li>Schedule typically same as in-person service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Better experience on big TV screen.</li>
              <li>Chromecast or smart TV with YouTube app.</li>
              <li>Cast from phone YouTube to TV.</li>
              <li>Apple TV with YouTube app.</li>
              <li>Roku with YouTube app.</li>
              <li>Stand or sing along comfortably.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Catholic Mass online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EWTN — daily Mass + Catholic programming.</li>
              <li>Daily TV Mass — old-time Catholic Mass.</li>
              <li>USCCB Daily Mass website.</li>
              <li>Many parishes stream their own Masses.</li>
              <li>Note: not a substitute for Sunday obligation when able.</li>
              <li>Helpful for those who can&apos;t attend.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Christian streaming services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pure Flix — Christian movies + shows, $10/month.</li>
              <li>RightNow Media — church curriculum.</li>
              <li>Bible.com (YouVersion) — daily devotional videos.</li>
              <li>Word On Fire — Catholic videos.</li>
              <li>Jewish Broadcasting Service for Jewish content.</li>
              <li>Some free, some paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintaining connection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Online doesn&apos;t fully replace in-person.</li>
              <li>Stay involved in small groups via Zoom.</li>
              <li>Phone call pastor or fellow members.</li>
              <li>Continue tithing online.</li>
              <li>Church often visits homebound members.</li>
              <li>Ask if church has Communion home delivery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up before you need it</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t wait until you&apos;re sick or unable to attend. This Sunday, find your church&apos;s online stream and bookmark it. Test casting to TV. Make sure you can find it easily when needed. Many seniors who unexpectedly couldn&apos;t attend church have struggled to find the right stream link in the moment. Set it up while you&apos;re well.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
