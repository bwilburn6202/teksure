import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function WalkingProgramFreshStart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Program for Seniors | TekSure" description="Start walking from zero. Plain-English 12-week plan + apps for senior walkers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Program</h1>
          <p className="text-lg text-muted-foreground">Best exercise. Free. Anytime, anywhere.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why walking is best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE — no gym membership.</li>
              <li>Joint-friendly (vs running).</li>
              <li>Anywhere — neighborhood, mall, treadmill.</li>
              <li>Reduces dementia risk 30%+.</li>
              <li>Lowers BP + diabetes risk.</li>
              <li>Better mood + sleep.</li>
              <li>Even 20 min/day = significant benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">12-week beginner program</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Week 1-2</strong> — 10 min/day, 3 days/week.</li>
              <li><strong>Week 3-4</strong> — 15 min/day, 4 days/week.</li>
              <li><strong>Week 5-6</strong> — 20 min/day, 5 days/week.</li>
              <li><strong>Week 7-8</strong> — 25 min/day, 5 days/week.</li>
              <li><strong>Week 9-10</strong> — 30 min/day, 5 days/week.</li>
              <li><strong>Week 11-12</strong> — 30-45 min/day, 6 days/week.</li>
              <li>Goal: 7,500-10,000 steps daily.</li>
              <li>Listen to body — back off if hurts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free walking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Health / Google Fit</strong> — auto-tracks. Free.</li>
              <li><strong>MapMyWalk</strong> — routes + tracking. Free.</li>
              <li><strong>Pacer</strong> — step + calorie tracker. Free.</li>
              <li><strong>Charity Miles</strong> — walk = donate to charity.</li>
              <li><strong>Action for Happiness</strong> — daily walking + mindfulness.</li>
              <li>Apps motivate streaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best places to walk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mall walking</strong> — climate controlled, safe, social. Many open early for walkers.</li>
              <li><strong>Neighborhood</strong> — convenience.</li>
              <li><strong>Park trails</strong> — beautiful + flat.</li>
              <li><strong>Treadmill</strong> — bad weather. Set incline 1-2%.</li>
              <li><strong>Track</strong> — measured + flat.</li>
              <li><strong>Beach</strong> — soft sand burns 50% more calories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walking shoes matter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace every 300-500 miles or 6-12 months.</li>
              <li>Brooks Ghost / Hoka Bondi / New Balance 880 — senior favorites.</li>
              <li>Get fitted at running store (free).</li>
              <li>Cushioning matters most for seniors.</li>
              <li>Wide toe box if bunions.</li>
              <li>Replace insoles every 3 months for arch support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add intensity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hills / inclines.</li>
              <li>Walking poles (Nordic walking) — works upper body.</li>
              <li>Weighted vest (5-10 lbs).</li>
              <li>Faster pace intervals.</li>
              <li>Longer distance.</li>
              <li>Vary terrain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free walking groups</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP Walk Group</strong> — local groups. <strong>Mall walkers clubs</strong> — most malls have. <strong>Walk With Ease</strong> (Arthritis Foundation) — free 6-week program. <strong>Senior centers</strong> often have walking groups. Social + accountability + fun. Don&apos;t walk alone if possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
