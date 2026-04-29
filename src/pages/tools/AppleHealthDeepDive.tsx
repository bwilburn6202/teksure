import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function AppleHealthDeepDive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Health App Deep Dive | TekSure" description="Use Apple Health for senior health tracking. Plain-English deep dive guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Health Deep Dive</h1>
          <p className="text-lg text-muted-foreground">Most powerful free health app you already have.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-tracked (no work)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Steps + walking distance.</li>
              <li>Flights climbed.</li>
              <li>Walking pace + asymmetry (fall risk).</li>
              <li>Sleep (with Apple Watch).</li>
              <li>Heart rate (with Apple Watch).</li>
              <li>Falls detected (Apple Watch).</li>
              <li>Headphone audio levels (hearing).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manual entries valuable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blood pressure (or auto from connected cuff).</li>
              <li>Weight (or auto from smart scale).</li>
              <li>Glucose (auto from CGM).</li>
              <li>Medications taken — set reminders.</li>
              <li>Mental wellbeing.</li>
              <li>Period tracking.</li>
              <li>Symptoms log.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior key features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Walking Steadiness</strong> — fall risk warning.</li>
              <li><strong>Medical ID</strong> — emergencies see your conditions.</li>
              <li><strong>Health records</strong> — sync with hospital portals.</li>
              <li><strong>Health Sharing</strong> — let family see select data.</li>
              <li><strong>Trends</strong> — see yearly patterns.</li>
              <li><strong>Print PDF</strong> — bring to doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up Medical ID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Health app → tap profile photo.</li>
              <li>Tap Medical ID → Edit.</li>
              <li>Add: medical conditions, allergies, medications.</li>
              <li>Add emergency contacts.</li>
              <li>Toggle ON &quot;Show When Locked&quot;.</li>
              <li>Toggle ON &quot;Share During Emergency Call.&quot;</li>
              <li>EMTs can see this even when phone locked.</li>
              <li>Could save your life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connect health records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health → Health Records → Add Account.</li>
              <li>Search for hospital / clinic.</li>
              <li>Log in with patient portal credentials.</li>
              <li>Lab results, prescriptions, immunizations all in one place.</li>
              <li>700+ US hospitals support.</li>
              <li>FREE.</li>
              <li>Better than juggling multiple portals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health → Sharing → Share with Someone.</li>
              <li>Choose what to share (steps, heart rate, etc.).</li>
              <li>Family member sees in their Health app.</li>
              <li>Notifications if you fall or other concern.</li>
              <li>Peace of mind for adult kids.</li>
              <li>You control what they see.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Android equivalent</h3>
            <p className="text-sm text-muted-foreground"><strong>Google Fit</strong> + <strong>Samsung Health</strong> — similar features for Android. <strong>MyChart</strong> — patient portal aggregator. <strong>Fitbit Premium</strong> ($10/mo) — health insights. iPhone Health most comprehensive currently. Big advantage of Apple ecosystem for seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
