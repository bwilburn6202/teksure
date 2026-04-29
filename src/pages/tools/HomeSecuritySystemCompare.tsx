import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function HomeSecuritySystemCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Security System Comparison for Seniors | TekSure" description="Compare SimpliSafe, Ring, ADT, Vivint for seniors. Plain-English guide to choosing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Security Systems</h1>
          <p className="text-lg text-muted-foreground">Compare top systems. Find the right fit.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SimpliSafe — best no-contract</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No contract — cancel anytime.</li>
              <li>Monitoring from $19.99/month.</li>
              <li>Works without internet (cellular backup).</li>
              <li>Easy DIY setup.</li>
              <li>Good customer support.</li>
              <li>Best for: seniors who want flexibility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ring Alarm — best for Amazon users</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Works with Alexa voice control.</li>
              <li>Monitoring from $20/month.</li>
              <li>Connects to Ring doorbells + cameras.</li>
              <li>No long-term contract.</li>
              <li>Great camera system.</li>
              <li>Best for: Alexa / Amazon households.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ADT — best professional install</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Oldest, most recognized brand.</li>
              <li>Professional installation included.</li>
              <li>Monitoring from $24.99/month.</li>
              <li>3-year contract typical — read carefully.</li>
              <li>24/7 monitoring with fast response.</li>
              <li>Best for: those who want professional setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vivint — best full-featured</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium smart home + security combo.</li>
              <li>Professional installation.</li>
              <li>Smart locks, lights, garage — all connected.</li>
              <li>Higher cost — $30–$50+/month.</li>
              <li>Multi-year contract typical.</li>
              <li>Best for: tech-comfortable seniors wanting full automation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Questions to ask before buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Is there a contract? How long?</li>
              <li>What is the cancellation policy?</li>
              <li>Does it work without internet?</li>
              <li>Is professional monitoring required?</li>
              <li>What happens if I move?</li>
              <li>Can family access the system remotely?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wyze cameras — cheap + decent.</li>
              <li>Blink cameras — low cost, Amazon-owned.</li>
              <li>Good locks + outdoor lighting — basics work.</li>
              <li>Neighborhood watch apps — Neighbors (Ring).</li>
              <li>Nextdoor — local community alerts.</li>
              <li>Sometimes basics enough for low-risk areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Recommendation for most seniors</h3>
            <p className="text-sm text-muted-foreground">SimpliSafe wins for most seniors. No contract means you&apos;re never trapped in a long-term bill, especially important if considering assisted living in the future. The system works when the internet goes down, which matters during storms. ADT is fine but the multi-year contract is a big commitment. Ring is great if you&apos;re already using Amazon devices.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
