import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function OuraRingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oura Ring + Smart Rings for Seniors | TekSure" description="Smart rings vs watches. Plain-English guide for senior health tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Rings for Seniors</h1>
          <p className="text-lg text-muted-foreground">All-day tracking. No screen distractions.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart ring options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Oura Ring 4</strong> — $349 + $6/mo membership. Best.</li>
              <li><strong>Samsung Galaxy Ring</strong> — $400, no subscription.</li>
              <li><strong>Ultrahuman Ring Air</strong> — $349, no subscription.</li>
              <li><strong>RingConn</strong> — $300, cheapest.</li>
              <li>All measure: heart rate, sleep, activity, body temp.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why ring vs watch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lighter — no wrist fatigue.</li>
              <li>Battery 4-7 days (watches 1-2).</li>
              <li>Sleep tracking better (worn comfortably to bed).</li>
              <li>Looks like jewelry.</li>
              <li>NO notifications / distractions.</li>
              <li>Doesn&apos;t replace watch — many wear both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it tells you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sleep score</strong> — quality + duration.</li>
              <li><strong>Readiness</strong> — how recovered today.</li>
              <li><strong>Heart rate variability</strong> — stress + recovery.</li>
              <li><strong>Resting heart rate</strong> — fitness over time.</li>
              <li><strong>Body temperature</strong> — illness early warning.</li>
              <li><strong>Steps + activity</strong> — daily movement.</li>
              <li><strong>Period tracking</strong> — for women.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Detects illness before symptoms (temp + HR rises).</li>
              <li>Tracks sleep apnea patterns.</li>
              <li>Gentle movement reminders.</li>
              <li>Long-term trends — show doctor.</li>
              <li>Motivation to stay active.</li>
              <li>Peace of mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sizing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order free sizing kit FIRST.</li>
              <li>Wear cardboard ring 24 hrs.</li>
              <li>Then order real ring.</li>
              <li>Index finger most popular.</li>
              <li>Slightly snug for accurate readings.</li>
              <li>Get sized at jeweler if not sure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch SE</strong> — $250. Best mix of features + cost.</li>
              <li><strong>Fitbit Inspire 3</strong> — $100. Basic but great.</li>
              <li><strong>Garmin Vivosmart 5</strong> — $150. Long battery.</li>
              <li><strong>Phone alone</strong> — Apple Health / Google Fit free.</li>
              <li>Ring is luxury — phone tracks too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Caution + privacy</h3>
            <p className="text-sm text-muted-foreground">Health data extremely sensitive. Read privacy policy. Oura had data breach 2024 — consider risks. Don&apos;t share with insurance companies (some incentivize, but data could affect premiums later). Use device for YOUR awareness, not sharing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
