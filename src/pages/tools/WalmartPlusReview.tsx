import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function WalmartPlusReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walmart+ Review for Seniors | TekSure" description="Walmart+ vs Amazon Prime. Plain-English review for seniors comparing benefits + cost." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walmart+ Review</h1>
          <p className="text-lg text-muted-foreground">$98/yr. Worth it for many seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free grocery delivery</strong> over $35 (huge for seniors).</li>
              <li><strong>Free shipping</strong> — no minimum on Walmart.com.</li>
              <li><strong>Same-day delivery</strong> in many areas.</li>
              <li><strong>Gas discount</strong> — $0.10/gal at Walmart, Sam&apos;s, Exxon, Mobil.</li>
              <li><strong>Paramount+ Essential</strong> — included free ($60/yr value).</li>
              <li><strong>Scan &amp; Go</strong> in store — skip checkout lines.</li>
              <li><strong>Returns from home</strong> — Walmart picks up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walmart+ vs Prime</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Walmart+ wins for</strong>: groceries, gas, in-store shopping, lower price.</li>
              <li><strong>Prime wins for</strong>: general merchandise, books/music/video, photo storage.</li>
              <li><strong>Both</strong> — fast delivery + savings.</li>
              <li>Try both for 30 days free.</li>
              <li>Stack benefits — many people keep both.</li>
              <li>Walmart+ $13/mo monthly option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors who...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Want grocery delivery instead of shopping.</li>
              <li>Live in Walmart trade area (most rural / suburban areas).</li>
              <li>Drive a lot (gas savings).</li>
              <li>Like store-brand value (Great Value).</li>
              <li>Watch CBS/Paramount shows.</li>
              <li>Hate Amazon ecosystem.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walmart pharmacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$4 generic prescriptions (4 dozen common drugs).</li>
              <li>Walmart+ members get more discounts.</li>
              <li>Free Rx delivery for Walmart+.</li>
              <li>Pet meds also discounted.</li>
              <li>Rivals GoodRx prices on many drugs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App easier to use than Amazon for seniors.</li>
              <li>Larger text + simpler navigation.</li>
              <li>Schedule recurring grocery orders.</li>
              <li>Same items each time — saves time.</li>
              <li>Curbside pickup if you don&apos;t want delivery.</li>
              <li>Phone customer service real people.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try free first</h3>
            <p className="text-sm text-muted-foreground">30-day free trial — try grocery delivery 4-5 times. If saved time + happy = keep. If only used 1-2x = cancel + use Walmart pickup (free) instead. Many seniors find Walmart+ more practical than Prime for daily life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
