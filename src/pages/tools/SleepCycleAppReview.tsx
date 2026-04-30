import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bed } from 'lucide-react';

export default function SleepCycleAppReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Cycle App for Seniors | TekSure" description="Track sleep + smart alarm for seniors. Sleep Cycle reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Cycle</h1>
          <p className="text-lg text-muted-foreground">Smart sleep tracker.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tracks sleep using phone microphone.</li>
              <li>No watch needed.</li>
              <li>Smart alarm — wakes during light sleep.</li>
              <li>Detects snoring + sleep talking.</li>
              <li>Free with optional Premium.</li>
              <li>Premium $40/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart alarm</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set 30-minute window.</li>
              <li>Wakes at lightest sleep within window.</li>
              <li>Feel more rested.</li>
              <li>Not abrupt waking.</li>
              <li>Wake naturally feeling better.</li>
              <li>Best feature for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep stages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tracks deep + light sleep.</li>
              <li>REM detection.</li>
              <li>Sleep score 1-100.</li>
              <li>Trends over time.</li>
              <li>Identify what affects sleep.</li>
              <li>Educational about own sleep.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch tracks sleep too.</li>
              <li>Built into Health app.</li>
              <li>Free with watch.</li>
              <li>Stages + heart rate.</li>
              <li>If you have watch — use that.</li>
              <li>Sleep Cycle if no watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Snoring detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Records snoring overnight.</li>
              <li>Listen to recording next day.</li>
              <li>Identify if you snore.</li>
              <li>Show doctor if concerned.</li>
              <li>Sleep apnea screening.</li>
              <li>Premium feature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior sleep insights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Track caffeine effect.</li>
              <li>Test alcohol&apos;s impact.</li>
              <li>Late-day napping.</li>
              <li>Bedroom temperature ideal.</li>
              <li>Use data to improve sleep.</li>
              <li>Take to doctor for sleep issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Smart alarm transforms mornings</h3>
            <p className="text-sm text-muted-foreground">If you wake up groggy or feel un-rested, smart alarm could help. Sleep Cycle wakes you during lightest sleep within 30-min window — feel less groggy. Free version sufficient for most. If you have Apple Watch, use built-in instead. Track 2 weeks to see patterns.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
