import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function HiitForActiveSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HIIT for Active Seniors | TekSure" description="High-intensity interval training adapted for senior fitness. Safe + effective." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">HIIT for Seniors</h1>
          <p className="text-lg text-muted-foreground">Short bursts. Big benefits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why HIIT works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Short, intense intervals.</li>
              <li>Better cardio gains than steady-state.</li>
              <li>Improves blood pressure.</li>
              <li>Increases insulin sensitivity.</li>
              <li>Builds bone density.</li>
              <li>Research shows seniors benefit greatly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-adapted HIIT</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walking + jogging intervals — Norwegian 4x4.</li>
              <li>30 seconds fast, 30 seconds easy.</li>
              <li>Or 4 minutes hard, 3 minutes easy x 4.</li>
              <li>Get heart rate up.</li>
              <li>Bike, walk, swim — your choice.</li>
              <li>Always safe pace for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps for HIIT</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seven — 7 minute workouts.</li>
              <li>HIIT Workouts by FunctionApp.</li>
              <li>Apple Fitness+ — HIIT classes.</li>
              <li>Tabata Timer apps free.</li>
              <li>Set timer + go.</li>
              <li>Many gentle senior options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Doctor approval first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to doctor before HIIT.</li>
              <li>Heart conditions excluded.</li>
              <li>Recent surgery — wait.</li>
              <li>Stress test if recommended.</li>
              <li>HIIT not for everyone.</li>
              <li>Modified for your fitness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heart rate matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch tracks heart rate.</li>
              <li>Hit 70-85% max heart rate.</li>
              <li>Max = 220 - age.</li>
              <li>Recovery to under 60% between.</li>
              <li>Don&apos;t go to red zone.</li>
              <li>Listen to your body.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recovery + frequency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2-3 HIIT sessions per week max.</li>
              <li>Rest day between.</li>
              <li>Easy days for recovery.</li>
              <li>Sleep + nutrition support recovery.</li>
              <li>Older bodies need more recovery.</li>
              <li>Quality > quantity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Walk-jog intervals safest</h3>
            <p className="text-sm text-muted-foreground">For most seniors interested in HIIT, the safest version is walk-jog intervals. Walk 2 minutes, jog 30 seconds, repeat 6-8 times. Total 20 minutes including warmup/cooldown. Builds cardio without joint impact. Use Apple Watch to monitor heart rate. Skip HIIT if you have heart conditions — talk to doctor first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
