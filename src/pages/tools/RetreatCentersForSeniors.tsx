import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function RetreatCentersForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retreat Centers for Senior Reset | TekSure" description="Spiritual + meditation retreats for seniors. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retreat Centers</h1>
          <p className="text-lg text-muted-foreground">Reset. Reflect. Reconnect.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buddhist / meditation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Insight Meditation Society (Massachusetts)</strong> — silent meditation retreats.</li>
              <li><strong>Spirit Rock (California)</strong> — Buddhist meditation.</li>
              <li><strong>Plum Village (worldwide)</strong> — Thich Nhat Hanh tradition.</li>
              <li><strong>Vipassana Centers</strong> — donation-based, 10-day silent.</li>
              <li>$50-300/day typical.</li>
              <li>Some donation-based.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Christian retreats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trappist monasteries</strong> — silent retreats welcome guests.</li>
              <li><strong>Catholic retreat centers</strong> — most dioceses have.</li>
              <li><strong>Jesuit retreats</strong> — Ignatian spirituality.</li>
              <li><strong>Episcopal retreat houses</strong>.</li>
              <li><strong>Cursillo / Walk to Emmaus</strong> — weekend programs.</li>
              <li>Often $50-200/day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yoga + wellness retreats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kripalu (Massachusetts)</strong> — yoga + wellness.</li>
              <li><strong>Esalen (California)</strong> — Big Sur, healing arts.</li>
              <li><strong>Omega Institute (NY)</strong> — varied programs.</li>
              <li><strong>Canyon Ranch</strong> — luxury wellness.</li>
              <li>$150-1,000+/day.</li>
              <li>Many senior-specific weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific retreats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Road Scholar retreats</strong> — educational + spiritual.</li>
              <li><strong>Sage-ing International</strong> — conscious aging programs.</li>
              <li><strong>Encore Adventures</strong> — second-act retreats.</li>
              <li><strong>Modern Elder Academy</strong> — &quot;midlife wisdom school.&quot;</li>
              <li>Several days, focused on aging well.</li>
              <li>Combine with travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why retreat?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Break from routine.</li>
              <li>Process big life changes (retirement, loss).</li>
              <li>Deepen meditation / spiritual practice.</li>
              <li>Disconnect from news / phone / TV.</li>
              <li>Meet like-minded people.</li>
              <li>Quiet time to think.</li>
              <li>3-7 days = recommended length.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local + free options</h3>
            <p className="text-sm text-muted-foreground">No need to travel. <strong>Local Buddhist temples</strong> often have weekend retreats. <strong>Catholic monasteries</strong> welcome day visitors free. <strong>Quaker silent meetings</strong> — totally free. Even a 24-hour personal retreat at hotel — phone off, journal, walk = transformative. Try once a year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
