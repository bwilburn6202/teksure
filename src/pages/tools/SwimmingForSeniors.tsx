import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Waves } from 'lucide-react';

export default function SwimmingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Swimming for Seniors | TekSure" description="Swim for fitness. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Waves className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Swimming for Seniors</h1>
          <p className="text-lg text-muted-foreground">No-impact exercise. Joint paradise.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why swim?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zero impact on joints.</li>
              <li>Cardio + strength.</li>
              <li>Buoyancy supports body weight.</li>
              <li>Cools while exercising.</li>
              <li>Low-injury risk.</li>
              <li>Studies — swimmers live longer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to swim</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YMCA — most affordable.</li>
              <li>Community pools (rec centers).</li>
              <li>SilverSneakers eligible pools.</li>
              <li>Senior centers.</li>
              <li>Swim clubs — pricier.</li>
              <li>Beach + lake — seasonal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy starter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aquasize / water aerobics</strong> — chest-deep walking.</li>
              <li><strong>Lap swimming</strong> — easy pace, breaks OK.</li>
              <li><strong>Pool walking</strong> — alone or with buddy.</li>
              <li><strong>Kickboard</strong> — assist legs.</li>
              <li><strong>Pull buoy</strong> — assist arms.</li>
              <li>Don&apos;t need to be strong swimmer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Swim suit</strong> — comfortable fit.</li>
              <li><strong>Goggles</strong> ($20) — chlorine protection.</li>
              <li><strong>Swim cap</strong> — hair protection.</li>
              <li><strong>Pool sandals</strong> — slip protection.</li>
              <li><strong>Microfiber towel</strong> — quick dry.</li>
              <li><strong>Earplugs</strong> — water in ear prevention.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Arthritis relief.</li>
              <li>Better cardiovascular health.</li>
              <li>Improves balance + flexibility.</li>
              <li>Lung capacity.</li>
              <li>Mental health boost.</li>
              <li>Diabetic-friendly exercise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Take swim lessons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult swim lessons available.</li>
              <li>Most YMCAs offer.</li>
              <li>Group or 1-on-1.</li>
              <li>Never too late to learn.</li>
              <li>Refresh strokes after years away.</li>
              <li>Senior swim teachers patient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Safety first</h3>
            <p className="text-sm text-muted-foreground">Never swim alone — even strong swimmers. Tell pool staff if first time. Stay shallow until comfortable. Hydration despite water exercise. Sunscreen for outdoor pools. Hearing aids — remove or use waterproof. Insurance card with you. Senior swimmers often live to 90+.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
