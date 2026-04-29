import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function TaiChiBeginner() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tai Chi for Senior Beginners | TekSure" description="Reduce falls 35%. Plain-English Tai Chi guide for seniors with free + paid options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tai Chi for Beginners</h1>
          <p className="text-lg text-muted-foreground">Best senior exercise. Proven. Gentle.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Tai Chi for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces falls 30-50% (proven studies).</li>
              <li>Improves balance + posture.</li>
              <li>Lowers BP.</li>
              <li>Reduces arthritis pain.</li>
              <li>Calming for anxiety.</li>
              <li>Low impact — joint friendly.</li>
              <li>Can be done from chair if needed.</li>
              <li>Brain + body coordination.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to start FREE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tai Chi for Health Institute</strong> — proven program. taichiforhealthinstitute.org.</li>
              <li><strong>YMCA</strong> — Tai Chi for Arthritis classes.</li>
              <li><strong>Senior centers</strong> — most have free classes.</li>
              <li><strong>Community parks</strong> — many morning groups.</li>
              <li><strong>SilverSneakers</strong> — free Tai Chi if eligible.</li>
              <li><strong>YouTube Dr. Paul Lam</strong> — free senior Tai Chi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-person vs YouTube</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>In-person better — instructor corrects form.</li>
              <li>Group practice = consistent + social.</li>
              <li>YouTube great for daily practice between classes.</li>
              <li>Combine both ideal.</li>
              <li>Free park groups morning everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start simple</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10-min daily better than 1-hour weekly.</li>
              <li>Yang style most beginner-friendly.</li>
              <li>Tai Chi for Arthritis program — designed for seniors.</li>
              <li>Wear loose comfortable clothes.</li>
              <li>Flat shoes (not sneakers usually).</li>
              <li>Breathe deeply throughout.</li>
              <li>Slow movements — easier than fast.</li>
              <li>Years of practice possible — never &quot;done.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps + DVDs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tai Chi Step by Step</strong> — app, beginner-friendly.</li>
              <li><strong>Dr. Paul Lam DVDs</strong> — gold standard, $30-50.</li>
              <li><strong>Tai Chi for Arthritis</strong> book + DVD.</li>
              <li><strong>YouTube</strong> — search &quot;Tai Chi for seniors beginners.&quot;</li>
              <li><strong>Cosmic Kids</strong> — gentle yoga (also good for seniors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Daily 15-min routine</h3>
            <p className="text-sm text-muted-foreground">15 min/day Tai Chi over 6 months = measurable balance improvement, fewer falls. Better than complicated gym programs. Cumulative effect. Many seniors continue 20+ years. Joint health, balance, calm mind. Best senior exercise discovery many say.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
