import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses } from 'lucide-react';

export default function VRForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VR for Seniors | TekSure" description="VR headsets for travel + memory + therapy. Plain-English guide for senior VR users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Glasses className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VR for Seniors</h1>
          <p className="text-lg text-muted-foreground">Travel without leaving home. Therapeutic + fun.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best headsets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Meta Quest 3S</strong> — $300. Best for first VR.</li>
              <li><strong>Meta Quest 3</strong> — $500. More premium.</li>
              <li><strong>Apple Vision Pro</strong> — $3,500. Premium.</li>
              <li><strong>Pico Neo 4</strong> — alternative to Meta.</li>
              <li>Wireless = best (no PC needed).</li>
              <li>Charges like phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Travel</strong> — Wander app: visit Paris, Egypt, Hawaii.</li>
              <li><strong>Concerts</strong> — front-row Beatles, Pavarotti, etc.</li>
              <li><strong>Memory therapy</strong> — Rendever for dementia (revisit childhood home).</li>
              <li><strong>Pain therapy</strong> — proven distraction from chronic pain.</li>
              <li><strong>Exercise</strong> — Supernatural, Beat Saber.</li>
              <li><strong>Social</strong> — meet other seniors in VR worlds.</li>
              <li><strong>Mental fitness</strong> — brain games.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wander</strong> — Google Street View VR. $10. Travel anywhere.</li>
              <li><strong>National Geographic Explore</strong> — Antarctica, Machu Picchu.</li>
              <li><strong>Meta Quest TV</strong> — movies on giant virtual screen.</li>
              <li><strong>Brink Traveler</strong> — guided travel experiences.</li>
              <li><strong>YouTube VR</strong> — 360° videos free.</li>
              <li><strong>Beat Saber</strong> — fun rhythm exercise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for first time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit DOWN first time — prevents falls.</li>
              <li>Start with stationary apps (travel, movies).</li>
              <li>Avoid motion sickness — start slow.</li>
              <li>10-15 min sessions max at first.</li>
              <li>Take breaks.</li>
              <li>Build up tolerance over weeks.</li>
              <li>Family member nearby first sessions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care facility VR</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rendever</strong> — VR for memory care.</li>
              <li>Many senior living facilities have VR.</li>
              <li>Group VR experiences.</li>
              <li>Virtual outings impossible in real life.</li>
              <li>Reduces depression in studies.</li>
              <li>Ask if your facility has.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glaucoma — don&apos;t use (pressure).</li>
              <li>Inner ear / vertigo issues — avoid motion games.</li>
              <li>Eye strain — limit sessions.</li>
              <li>Don&apos;t use if mobility unstable (sitting only).</li>
              <li>Talk to eye doctor if concerns.</li>
              <li>Privacy — Meta collects data; check settings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try before buy</h3>
            <p className="text-sm text-muted-foreground">Best Buy, Costco let you try. Apple stores demo Vision Pro. Many libraries lend Meta Quests free. Try 10 minutes — different than expected. Some seniors love, others don&apos;t. Family with VR? Borrow theirs first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
