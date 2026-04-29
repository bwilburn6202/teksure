import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function WhenToStopDriving() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="When to Stop Driving | TekSure" description="Honest assessment for senior drivers. Plain-English signs it's time + alternatives to driving." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">When to Stop Driving</h1>
          <p className="text-lg text-muted-foreground">Hardest decision. Most important conversation.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Warning signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Other drivers honk often.</li>
              <li>Multiple recent fender-benders.</li>
              <li>Get lost in familiar areas.</li>
              <li>Confuse gas + brake.</li>
              <li>Drift between lanes.</li>
              <li>Miss stop signs / red lights.</li>
              <li>Trouble checking blind spots.</li>
              <li>Slow reactions to surprises.</li>
              <li>Family afraid to ride with you.</li>
              <li>Daytime sleepy + medication side effects.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-assessment tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AAA RoadWise Driver</strong> — free online assessment.</li>
              <li><strong>AARP Smart Driver Course</strong> — $25, may lower insurance.</li>
              <li><strong>Driver Rehabilitation Specialist</strong> — adriverdirectory.org. Professional eval.</li>
              <li><strong>Occupational Therapist</strong> — driving evaluation, may be Medicare covered.</li>
              <li><strong>Vision exam</strong> — annual after 65.</li>
              <li><strong>Hearing test</strong> — annual.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adjustments before stopping</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drive only daytime.</li>
              <li>Avoid highways + rush hour.</li>
              <li>No driving in rain/snow.</li>
              <li>Drive only in known neighborhoods.</li>
              <li>One destination per trip.</li>
              <li>Newer car with safety tech (see below).</li>
              <li>Limit distractions — no phone, radio low.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family conversation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Be honest, not confrontational.</li>
              <li>Bring concerns to doctor — they can &quot;prescribe&quot; not driving.</li>
              <li>Doctor letter to DMV in some states forces retest.</li>
              <li>Self-policing better than family confrontation.</li>
              <li>Don&apos;t shame — it&apos;s a loss of independence.</li>
              <li>Plan transportation alternatives FIRST.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives (essential)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Uber/Lyft</strong> — see /tools/rideshare-for-seniors.</li>
              <li><strong>GoGoGrandparent</strong> — call to book rideshare. No app.</li>
              <li><strong>Senior van services</strong> — Area Agency on Aging. Often FREE.</li>
              <li><strong>Volunteer driver programs</strong> — many local nonprofits.</li>
              <li><strong>Public transit</strong> — discounted senior fares.</li>
              <li><strong>Family + friends</strong> — establish weekly rides.</li>
              <li><strong>Grocery delivery</strong> — Instacart, Walmart+, Amazon Fresh.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save the savings</h3>
            <p className="text-sm text-muted-foreground">Cost of car: $7K-15K/year (insurance, gas, maintenance, depreciation). Skipping car pays for plenty of Uber + groceries delivered. AAA cost-of-driving calculator helps decide. Many seniors find life MORE social without driving — friends drive them, less isolated.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
