import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function GiftIdeasForGrandkids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tech Gift Ideas for Grandkids | TekSure" description="Best tech gifts for grandchildren by age. Plain-English picks for thoughtful, lasting gifts that aren&apos;t junk." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Gifts for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Lasting. Thoughtful. Not junk.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ages 2-5</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yoto Player</strong> ($100) — audio storyteller. Cards = stories. No screen.</li>
              <li><strong>Toniebox</strong> ($100) — same but with figurines.</li>
              <li><strong>Osmo Little Genius</strong> ($79) — physical pieces + iPad. Reading + counting games.</li>
              <li><strong>Big-button kids camera</strong> — $30. Real photos, no apps.</li>
              <li><strong>Kindle Kids</strong> ($120) — picture books. Indestructible case.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ages 6-9</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nintendo Switch Lite</strong> ($200) — best kid console. Family games.</li>
              <li><strong>Amazon Echo Show 8 Kids</strong> ($150) — kid mode video calls + games.</li>
              <li><strong>Magnatiles or Lego City</strong> — physical (no screens).</li>
              <li><strong>National Geographic Kids subscription</strong> — $30/yr.</li>
              <li><strong>Kindle Paperwhite Kids</strong> ($170) — for reader-types.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ages 10-13</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple AirTag pack</strong> — track stuff. ($99 for 4-pack)</li>
              <li><strong>Bose / Sony kids headphones</strong> — $50-100. Volume-limited.</li>
              <li><strong>Switch Sports + Joy-Cons</strong> — physical games.</li>
              <li><strong>Books from your favorites</strong> — Wrinkle in Time, Ranger&apos;s Apprentice.</li>
              <li><strong>Drone (Tello)</strong> — $99. Fly + phone control.</li>
              <li><strong>Coding kit (Sphero, Wonder Workshop)</strong> — $80-150.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ages 14-17 (teens)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cash gift</strong> — let them pick. Honestly the best at this age.</li>
              <li><strong>Polaroid camera</strong> — $80. Instant prints feel special.</li>
              <li><strong>Wireless earbuds (AirPods or Galaxy Buds)</strong> — $80-200.</li>
              <li><strong>Subscription</strong> — Spotify, Audible, NYT Games — $5-15/mo.</li>
              <li><strong>External battery pack</strong> — $30. Useful daily.</li>
              <li><strong>Concert tickets</strong> — experience over things.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better than tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trip together</strong> — overnight, weekend, museum visit.</li>
              <li><strong>"Museum membership"</strong> — kids visit free with grandparent.</li>
              <li><strong>Magazine subscription</strong> — National Geographic Kids, Highlights.</li>
              <li><strong>Letter + photo book</strong> — your story for them.</li>
              <li><strong>"Date night"</strong> coupon — they redeem when ready.</li>
              <li><strong>Money to 529 college fund</strong> — practical + meaningful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Ask parents first</h3>
            <p className="text-sm text-muted-foreground">Always ask parents before tech gifts. Family rules vary widely. Some don&apos;t want screens. Some have allowed devices already. Coordinate to avoid duplicates + respect house rules.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
