import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function FireSafetyChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Fire Safety Checklist | TekSure" description="Smoke alarms, escape plan, kitchen fire risks. Plain-English checklist to make your home truly fire-safe in one weekend." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fire Safety Checklist</h1>
          <p className="text-lg text-muted-foreground">3,400 fatal home fires/year. Simple steps prevent most.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smoke alarms (do this today)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One in EVERY bedroom + one outside each sleeping area + one per floor.</li>
              <li>Test monthly (push button).</li>
              <li>Replace batteries yearly (or use 10-year sealed alarms).</li>
              <li>Replace ENTIRE alarm every 10 years.</li>
              <li>Best buys: First Alert SCO5CN, Kidde i12060.</li>
              <li>Smart alarms (Nest Protect, Google) — phone alert if you&apos;re away.</li>
              <li><strong>Free smoke alarms</strong> — most fire departments give free ones to seniors. Call non-emergency number.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carbon monoxide (just as critical)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One CO alarm per floor.</li>
              <li>One outside each bedroom area.</li>
              <li>Combination smoke + CO alarms simplify things.</li>
              <li>Replace every 5-7 years (CO sensors degrade faster than smoke).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Escape plan</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>2 ways out of every room (door + window).</li>
              <li>Practice once a year. Especially with kids/grandkids visiting.</li>
              <li>Outside meeting spot — mailbox, neighbor&apos;s tree.</li>
              <li>Don&apos;t go back inside for anything. Call 911 from outside.</li>
              <li>Stay LOW — smoke rises.</li>
              <li>Door hot? Use second exit.</li>
              <li>If 2nd story — fire ladder under bed ($30-60). Practice unrolling.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kitchen — #1 fire risk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER leave stove unattended.</li>
              <li>Keep towels, oven mitts, paper away from burners.</li>
              <li>Grease fire — cover with lid + turn off burner. NEVER water on grease fire.</li>
              <li>Microwave fire — keep door SHUT, unplug if safe.</li>
              <li>Fire extinguisher in kitchen — Class A-B-C ($30 at Home Depot).</li>
              <li>Auto stove shut-off (iGuardStove) for memory issues — $400.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other fire risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dryer</strong> — clean lint trap EVERY load. Clean exterior vent yearly. Lint = fuel.</li>
              <li><strong>Space heaters</strong> — 3 feet from anything flammable. Turn off when leaving room or sleeping. Plug into wall, NOT power strip.</li>
              <li><strong>Candles</strong> — never unattended. Battery LED candles look real.</li>
              <li><strong>Smoking</strong> — outside only, deep ashtrays, water before tossing.</li>
              <li><strong>Holiday lights</strong> — replace if frayed. Never plug 3 strings together.</li>
              <li><strong>Christmas trees</strong> — water daily. Dead trees = catastrophic fires.</li>
              <li><strong>Lithium batteries (e-bikes, scooters)</strong> — charge in garage, never overnight inside.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Fire department free programs</h3>
            <p className="text-sm text-muted-foreground">Most departments do FREE home safety inspections — they walk through and identify risks. Often install free smoke alarms. Call non-emergency number. Especially good for seniors. Many also do "blanket the bed" program for mobility-impaired residents.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
