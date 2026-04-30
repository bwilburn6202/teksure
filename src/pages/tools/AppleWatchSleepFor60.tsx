import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchSleepFor60() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Sleep Tracking for Seniors | TekSure" description="Use Apple Watch to track senior sleep. Free, comprehensive data, doctor-shareable." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Sleep</h1>
          <p className="text-lg text-muted-foreground">Built-in sleep tracking.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup sleep tracking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health app on iPhone.</li>
              <li>Tap &quot;Sleep&quot; → &quot;Get Started.&quot;</li>
              <li>Set sleep goal hours.</li>
              <li>Set wind-down + wake times.</li>
              <li>Wear watch to bed.</li>
              <li>Watch tracks automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it tracks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sleep duration.</li>
              <li>Sleep stages (REM, Deep, Light).</li>
              <li>Heart rate during sleep.</li>
              <li>Breathing rate.</li>
              <li>Wrist temperature.</li>
              <li>Wake-up times.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wind Down mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set bedtime — phone goes Do Not Disturb.</li>
              <li>Sleep screen activates.</li>
              <li>Reduce blue light.</li>
              <li>Notifications muted.</li>
              <li>Better sleep ritual.</li>
              <li>Customize wind-down hour.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Battery management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch needs daily charging.</li>
              <li>Charge during shower or breakfast.</li>
              <li>Or charge before bed nightly.</li>
              <li>Sleep tracking uses some battery.</li>
              <li>Most watches make it through night.</li>
              <li>Series 9+ have better battery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health app exports sleep data.</li>
              <li>PDF report for doctor.</li>
              <li>Identify sleep apnea symptoms.</li>
              <li>Track changes over months.</li>
              <li>Helpful for sleep medication adjustments.</li>
              <li>Bring to next checkup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apnea detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Newer watches detect breathing disturbances.</li>
              <li>Early warning sign.</li>
              <li>Show doctor for evaluation.</li>
              <li>Sleep study may follow.</li>
              <li>Critical for senior heart health.</li>
              <li>Could save your life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you have Apple Watch — use it</h3>
            <p className="text-sm text-muted-foreground">If you have an Apple Watch, sleep tracking is free + comprehensive. Track 2 weeks to identify patterns. Share with doctor at checkup. Especially valuable if you snore or feel un-rested. Newer watches catch breathing issues that suggest apnea — important for senior heart health.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
