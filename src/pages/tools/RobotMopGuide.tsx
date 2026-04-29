import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const PICKS = [
  { name: 'Roborock S8 Pro Ultra', cost: '$1,200', best: 'Vacuum + mop. Self-cleans, self-empties. Premium.', good: 'Best overall.' },
  { name: 'iRobot Roomba Combo j7+', cost: '$800', best: 'Vacuum + mop. Auto-empty. Pet hair good.', good: 'Best brand.' },
  { name: 'Eufy X10 Pro Omni', cost: '$800', best: 'Mid-price all-in-one. Self-cleaning mop.', good: 'Best value.' },
  { name: 'Shark Matrix Plus 2-in-1', cost: '$500', best: 'Mid-range. Gentle on senior carpets.', good: 'Best mid-price.' },
  { name: 'iRobot Braava Jet m6', cost: '$300', best: 'Mop only. Use with Roomba vacuum separately.', good: 'Best mop-only.' },
];

export default function RobotMopGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Mop Guide for Seniors | TekSure" description="Auto-mop floors. Plain-English picks for senior robot mops + vacuum combos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Mop Guide</h1>
          <p className="text-lg text-muted-foreground">Clean floors without bending.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Self-emptying base</strong> — go weeks without thinking.</li>
              <li><strong>Self-cleaning mop</strong> — don&apos;t hand-wash dirty pads.</li>
              <li><strong>Auto-fill water</strong> — top tier, premium.</li>
              <li><strong>Mapping</strong> — knows your home, skips rugs.</li>
              <li><strong>App schedule</strong> — runs while you nap or are out.</li>
              <li><strong>Voice control</strong> — &quot;Alexa, run the Roomba.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick up small rugs, cords, slippers before run.</li>
              <li>&quot;No-go zones&quot; in app for areas to skip.</li>
              <li>Charge daily — battery weakens over years.</li>
              <li>Empty water tank between mops (mold).</li>
              <li>Replace pads every 3-6 months ($10-15).</li>
              <li>Family member can troubleshoot via app remotely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When robot mop NOT enough</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heavy spills + sticky messes.</li>
              <li>Deep cleaning (2-4x/year still needed).</li>
              <li>Edges + corners (won&apos;t reach all).</li>
              <li>Stairs.</li>
              <li>Plush carpet (mop won&apos;t — set to vacuum only).</li>
              <li>Hire cleaner monthly for deep clean ($80-150).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Refurbished saves</h3>
            <p className="text-sm text-muted-foreground">Refurbished iRobot at iRobot.com — 40% off, full warranty. Costco often has best new prices. Black Friday + Prime Day deals 30%+ off. Robot mops are often 50% cheaper than new in fall sales.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
