import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function GuitarForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Guitar for Seniors | TekSure" description="Start guitar at any age. Plain-English senior beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Guitar for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never too late. 5 chords = 100 songs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter guitar ($150-300)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yamaha FG800</strong> ($230) — best beginner.</li>
              <li><strong>Fender CD-60S</strong> ($200).</li>
              <li><strong>Yamaha APX600</strong> ($350) — easier neck.</li>
              <li>3/4 size for smaller hands.</li>
              <li>Classical (nylon strings) easier on fingers.</li>
              <li>Buy used — Guitar Center, Reverb.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 5 chords</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>G, C, D, Em, Am</strong>.</li>
              <li>These = thousands of songs.</li>
              <li>Practice changing between them.</li>
              <li>Master = first songs possible.</li>
              <li>30 days of 15-min/day = noticeable progress.</li>
              <li>Don&apos;t learn theory yet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>JustinGuitar.com</strong> — FREE, gold standard.</li>
              <li><strong>YouTube</strong> — Marty Schwartz beginner.</li>
              <li><strong>Yousician</strong> — app, gamified.</li>
              <li><strong>Fender Play</strong> — $10/mo.</li>
              <li><strong>Local lessons</strong> — $30-50/wk.</li>
              <li>Senior centers often free lessons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Light gauge strings (less finger pain).</li>
              <li>Acoustic-electric — easier on body.</li>
              <li>Strap — sit straight, don&apos;t hold up.</li>
              <li>Capo — change keys easily.</li>
              <li>Sit comfortably with foot rest.</li>
              <li>Stop if hand pain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy first songs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Knockin&apos; on Heaven&apos;s Door.</li>
              <li>Sweet Caroline.</li>
              <li>Wagon Wheel.</li>
              <li>Country Roads.</li>
              <li>Three Little Birds — Bob Marley.</li>
              <li>Folsom Prison Blues.</li>
              <li>Most use just 3-4 chords.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hand dexterity.</li>
              <li>Brain new pathways.</li>
              <li>Stress relief.</li>
              <li>Memory exercise (chord changes).</li>
              <li>Social — guitar circles.</li>
              <li>Sing along = lung exercise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Be patient</h3>
            <p className="text-sm text-muted-foreground">First 4-6 weeks fingers hurt — calluses form. Push through. Most quit too early. After 90 days you&apos;ll be playing real songs. After year you&apos;ll be playing for family. Family member learns alongside = bonding. Library has guitar books. Free + lifetime hobby.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
