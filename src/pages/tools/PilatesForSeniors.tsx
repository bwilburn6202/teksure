import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function PilatesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pilates for Seniors | TekSure" description="Pilates at any age. Plain-English senior beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pilates for Seniors</h1>
          <p className="text-lg text-muted-foreground">Core strength + flexibility. Low-impact.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why pilates?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Builds core = better balance.</li>
              <li>Low-impact — no joint pounding.</li>
              <li>Improves posture.</li>
              <li>Increases flexibility.</li>
              <li>Lengthens spine.</li>
              <li>Better breathing capacity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mat vs reformer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mat</strong> — floor-based, equipment-free, home-friendly.</li>
              <li><strong>Reformer</strong> — machine, gym/studio.</li>
              <li>Reformer easier on body.</li>
              <li>Springs assist movement.</li>
              <li>Mat is FREE at home.</li>
              <li>Try both — pick what works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Equipment basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yoga mat ($20).</li>
              <li>Resistance bands ($15).</li>
              <li>Small ball ($15).</li>
              <li>Sturdy chair (have one).</li>
              <li>Pilates ring ($25) — optional.</li>
              <li>Total $50 = home setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pilates Anytime</strong> — $20/mo, all levels.</li>
              <li><strong>YouTube</strong> — Move with Nicole, Lottie Murphy.</li>
              <li><strong>Glo</strong> — yoga + pilates app.</li>
              <li><strong>Fitness Blender</strong> — free.</li>
              <li><strong>Local studios</strong> — first class often free.</li>
              <li>SilverSneakers includes some.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior modifications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chair pilates — no floor.</li>
              <li>Standing version available.</li>
              <li>Pillow support.</li>
              <li>Slow down — quality over speed.</li>
              <li>Stop if knee or back pain.</li>
              <li>Tell instructor about conditions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Studios + classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local pilates studios — search Yelp.</li>
              <li>$20-30/class typical.</li>
              <li>Senior discount common.</li>
              <li>YMCA + community centers.</li>
              <li>SilverSneakers compatible studios.</li>
              <li>Look for &quot;55+&quot; or &quot;senior&quot; classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Real benefits</h3>
            <p className="text-sm text-muted-foreground">Studies — pilates reduces falls 50% in elderly. Better posture = less back pain. Core strength = independent living. Joseph Pilates designed for rehab. Fits senior bodies. Most love it after 4 weeks. Even 3x/week makes difference. Free YouTube alternative if cost concern.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
