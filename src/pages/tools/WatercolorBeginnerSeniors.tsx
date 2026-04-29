import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function WatercolorBeginnerSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Watercolor for Beginner Seniors | TekSure" description="Start watercolor painting in retirement. Plain-English supplies + tutorials guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Watercolor for Beginners</h1>
          <p className="text-lg text-muted-foreground">$30 supplies. Years of joy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why watercolor for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cheap to start.</li>
              <li>Quick cleanup (water-based).</li>
              <li>Mistakes part of charm.</li>
              <li>Light-weight supplies.</li>
              <li>Can paint outdoors anywhere.</li>
              <li>No fumes (vs oil paint).</li>
              <li>Many seniors find it meditative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter kit ($30)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beginner watercolor set ($15) — Prima Marketing or similar.</li>
              <li>Round brushes — sizes 4, 8, 12 ($10 set).</li>
              <li>140lb watercolor paper pad ($8).</li>
              <li>2 jars water + paper towels.</li>
              <li>Pencil + eraser.</li>
              <li>That&apos;s it. Start painting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First lessons (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — &quot;Watercolor for absolute beginners.&quot;</li>
              <li><strong>Sarah Cray (Let&apos;s Make Art)</strong> — most senior-popular YouTube.</li>
              <li><strong>The Mind of Watercolor</strong> — Steve Mitchell.</li>
              <li><strong>Anna Mason</strong> — botanical realism.</li>
              <li><strong>Domestika</strong> — affordable courses $30-50.</li>
              <li>Hours of free instruction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy first projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Color swatches (test colors).</li>
              <li>Simple flowers — daisies, tulips.</li>
              <li>Abstract sky / sunset washes.</li>
              <li>Christmas / birthday cards.</li>
              <li>Loose botanicals.</li>
              <li>Landscapes from photos.</li>
              <li>Pet portraits (intermediate).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easel reduces back/neck strain.</li>
              <li>Bigger brushes easier than tiny ones.</li>
              <li>Big paper less precise = less stressful.</li>
              <li>Don&apos;t aim for perfection.</li>
              <li>Frame your &quot;mistakes&quot; — abstract art.</li>
              <li>30 min daily = real progress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior art classes</h3>
            <p className="text-sm text-muted-foreground">Local: senior centers, community colleges, libraries often offer FREE / low-cost art classes. Senior + watercolor especially popular pairing. Social + creative. Many art schools have senior weeks. Find on Eldercare Locator.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
