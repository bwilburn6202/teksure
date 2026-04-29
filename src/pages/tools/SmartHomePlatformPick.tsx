import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

const PLATFORMS = [
  { name: 'Amazon Alexa (Echo)', cost: 'Echo $40-250', best: 'Biggest device library — almost anything works with Alexa. Best voice assistant for routines.', good: 'Best for most homes.' },
  { name: 'Google Home / Nest', cost: 'Nest devices $50-300', best: 'Best for those in Google ecosystem. Strong on questions ("when does CVS close?").', good: 'If you Google everything, pick Google Home.' },
  { name: 'Apple HomeKit / Home app', cost: 'Need an Apple device as hub', best: 'Best privacy and security. Locks down with Apple ID. Great if you have iPad / Apple TV.', good: 'Premium feel, fewer devices.' },
  { name: 'Samsung SmartThings', cost: 'Hub $50-100', best: 'Strong for Samsung Galaxy phone owners. Big device support.', good: 'Best if you have Samsung products.' },
  { name: 'Matter (the new universal standard)', cost: 'Built into newer Apple/Google/Amazon hubs', best: 'NEW: a universal standard so devices work with any platform. Look for "Matter compatible" on packaging.', good: 'Future-proof — buy Matter devices.' },
];

export default function SmartHomePlatformPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Home Platform Pick — Alexa, Google, HomeKit | TekSure" description="Starting a smart home? Plain-English guide to Alexa vs Google vs Apple HomeKit vs SmartThings — which platform fits which family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Home Platform Pick</h1>
          <p className="text-lg text-muted-foreground">Pick ONE before buying multiple devices.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why pick one</h2>
            <p className="text-sm">If your bulb works with Alexa but your thermostat works with Google — you\'re stuck juggling two apps and two voice assistants. Pick a platform first, then buy devices that work with it. The "Matter" standard is fixing this slowly, but for now — pick one.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PLATFORMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Match platform to your phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone user</strong> → Apple HomeKit (most private) OR Alexa (most devices).</li>
              <li><strong>Samsung Galaxy user</strong> → SmartThings (built in) or Alexa.</li>
              <li><strong>Google Pixel / Android</strong> → Google Home or Alexa.</li>
              <li><strong>Mixed family</strong> → Alexa (works equally on iPhone and Android).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start small — first 3 things</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>One smart speaker</strong> — Echo Dot ($20-50) or Nest Mini ($30) for voice control.</li>
              <li><strong>2-3 smart bulbs</strong> — for the lamps you use most.</li>
              <li><strong>Smart plug</strong> ($10-20) — turns ANY device into a "smart" device. Plug a coffee maker into it, schedule "on" at 7 AM.</li>
            </ol>
            <p className="text-sm mt-2">Total: $80-150. Test if smart home is right for you before going bigger.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-favorite features</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"Alexa, turn off all the lights" before bed.</li>
              <li>"Alexa, set a timer for 10 minutes" while cooking.</li>
              <li>"Alexa, drop in on Mom" — instant intercom to family with Echo.</li>
              <li>"Alexa, what\'s the weather?" — without finding a phone.</li>
              <li>Smart bulbs that auto-light at sunset (no fumbling in the dark).</li>
              <li>Smart locks that auto-lock at night.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
