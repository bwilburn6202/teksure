import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Target } from 'lucide-react';

const APPS = [
  { name: 'Streaks', cost: '$5 one-time', best: 'Daily habit tracking. Simple.', good: 'Best simple.' },
  { name: 'Habitica', cost: 'FREE', best: 'Game-style habit building.', good: 'Best fun.' },
  { name: 'Apple Health', cost: 'FREE', best: 'Built-in iPhone goals.', good: 'Best Apple.' },
  { name: 'Fitbit', cost: '$10/mo', best: 'Step/exercise/sleep goals.', good: 'Best fitness.' },
  { name: 'Notes / Reminders', cost: 'FREE', best: 'Simple list approach.', good: 'Best simple.' },
];

export default function NewYearGoalsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="New Year Goals Apps for Seniors | TekSure" description="Track resolutions + goals. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Target className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">New Year Goals</h1>
          <p className="text-lg text-muted-foreground">Apps to keep resolutions stick.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-realistic goals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk 30 min/day.</li>
              <li>Read 1 book/month.</li>
              <li>Call 1 friend/week.</li>
              <li>Drink 6 glasses water daily.</li>
              <li>Take meds same time daily.</li>
              <li>Sleep 7-8 hours.</li>
              <li>Stretch every morning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why apps work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visual progress motivates.</li>
              <li>Reminders so you don&apos;t forget.</li>
              <li>Tracks streaks — pride builds.</li>
              <li>See months of progress.</li>
              <li>Share with family — accountability.</li>
              <li>Studies show 50% better adherence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SMART goals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>S</strong>pecific — &quot;walk after breakfast&quot;.</li>
              <li><strong>M</strong>easurable — 30 minutes.</li>
              <li><strong>A</strong>chievable — start with 10 min.</li>
              <li><strong>R</strong>elevant — improves health.</li>
              <li><strong>T</strong>ime-bound — daily for 90 days.</li>
              <li>Avoid vague goals (&quot;lose weight&quot;).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build habit gradually</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start tiny — 5 minutes.</li>
              <li>Same time + place daily.</li>
              <li>Stack with existing routine.</li>
              <li>Don&apos;t miss two days in row.</li>
              <li>After 21 days = forming.</li>
              <li>After 90 days = habit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tech goals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Learn one tech skill/month.</li>
              <li>Try one new app weekly.</li>
              <li>Master Zoom / FaceTime.</li>
              <li>Set up password manager.</li>
              <li>Backup photos.</li>
              <li>Update tablet OS.</li>
              <li>Sign up for AARP tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family accountability</h3>
            <p className="text-sm text-muted-foreground">Share progress with family — group text. They cheer you on. Apple Watch can share fitness with family. Family member checks in weekly. 80% of resolutions fail by February — not yours. Tiny steps. Tracking. Family love. = success.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
