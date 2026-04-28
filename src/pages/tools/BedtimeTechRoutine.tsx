import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Moon, AlertTriangle } from 'lucide-react';

type Section = 'phone' | 'tracking' | 'automation';

interface Setup {
  name: string;
  whoFor: string;
  steps: string[];
  features: string[];
}

const SETUPS: Record<Section, Setup> = {
  phone: {
    name: 'Phone bedtime mode',
    whoFor: 'Anyone who keeps a phone within reach at night and wants the screen quiet from a set hour until morning.',
    steps: [
      'iPhone — open Settings → Focus → Sleep. Tap "Set a Schedule" and pick your wind-down time (say 9:30 PM) and wake time (6:30 AM).',
      'iPhone — turn on "Dim Lock Screen" and "Show on Lock Screen" so notifications go silent and the display stays dark.',
      'Android (Pixel/Samsung) — Settings → Digital Wellbeing → Bedtime mode → Set a schedule. Pick the same hours.',
      'Android — turn on "Grayscale" and "Do Not Disturb" inside Bedtime mode. Calls from a starred contact (spouse, kids) still ring through.',
      'On both phones — add favorite contacts to the "Allowed People" list so an emergency call from family will still come through.',
      'Test it: at the scheduled hour the screen dims, notifications go quiet, and a moon icon appears at the top.',
    ],
    features: [
      'Screen dims to a warm tone after sundown — easier on tired eyes.',
      'Texts and app pings stop until morning — no 2 AM buzzes.',
      'Alarm still works normally inside Sleep mode.',
      'Starred contacts always break through, so a family emergency reaches you.',
      'Wind-Down screen on iPhone shows tomorrow’s alarm and a calm shortcut to a meditation app.',
    ],
  },
  tracking: {
    name: 'Sleep tracking on a watch',
    whoFor: 'Apple Watch (Series 6 or newer) or Pixel Watch / Fitbit owners who want a nightly sleep score without paying a subscription.',
    steps: [
      'Apple Watch — make sure watchOS is current (Watch app on iPhone → General → Software Update).',
      'Apple Watch — set up Sleep Focus on the iPhone first. The watch picks up the same schedule automatically.',
      'Wear the watch to bed with at least 30% battery. Charge it during your morning coffee instead of overnight.',
      'Pixel Watch / Fitbit — open the Fitbit app → You → Sleep tile → set bedtime goal. Tracking starts on its own when you go still.',
      'Check results in the morning: iPhone Health app → Sleep, or Fitbit app → Sleep. You will see total time, time in bed, and wake-ups.',
      'Give it a week. Sleep numbers swing night to night — the trend over 7 days is what matters.',
    ],
    features: [
      'Total sleep, time in bed, and number of wake-ups — all free.',
      'Apple Watch shows respiratory rate and wrist temperature trends (Series 8 and up).',
      'Pixel Watch / Fitbit show sleep stages (light, deep, REM) free of charge.',
      'No need to keep the phone on the nightstand — the watch handles tracking on its own.',
      'Morning summary appears on the watch face — glance and you have your number.',
    ],
  },
  automation: {
    name: '"Good Night" automation',
    whoFor: 'Anyone with smart bulbs (Philips Hue, Kasa, Wyze) and an Echo, Google Nest, or Apple HomePod.',
    steps: [
      'Echo / Alexa — open the Alexa app → More → Routines → "+" → name it "Good Night".',
      'Set the trigger: "When you say: Alexa, good night."',
      'Add actions: turn off bedroom lamp, turn off living-room lights, set bedroom thermostat to 67°F, set an alarm for 6:30 AM, play rain sounds for 60 minutes.',
      'Smart bulbs — set a sunset routine in the Hue or Kasa app: lights fade to a warm amber at 8 PM, off at 10:30 PM. This cues the body that night is coming.',
      'Google Home equivalent — Routines → Add → "Bedtime". Same idea: trigger phrase "Hey Google, good night" runs the whole list.',
      'Test it once. Stand in the living room and say the phrase. If a light misses, open the routine and re-add it.',
    ],
    features: [
      'One phrase shuts down the whole house — no walking room to room flipping switches.',
      'Lights fade slowly instead of snapping off — gentler on the eyes.',
      'Thermostat drops a few degrees automatically (cooler rooms help most adults sleep).',
      'White noise or rain sounds run on a 60-minute timer, then fade out.',
      'Morning Routine ("Alexa, good morning") can mirror the reverse — lights up gently, news headlines, weather.',
    ],
  },
};

const BEDTIME_HABITS = [
  {
    title: 'Charge the phone in the bathroom or hallway, not bedside',
    detail: 'Keeps the late-night doom-scroll out of reach and removes the temptation to check the time at 3 AM. A $10 charging shelf in the hallway works fine.',
  },
  {
    title: 'Set Do Not Disturb hours every night, not by hand',
    detail: 'A scheduled focus is consistent. Manual on/off gets forgotten. Pick 9:30 PM to 7 AM and let the phone handle it.',
  },
  {
    title: 'Dim the screen at sundown',
    detail: 'iPhone: Settings → Display → Night Shift → Sunset to Sunrise. Android: Settings → Display → Night Light → Sunset to sunrise. Warm screen tones in the evening help melatonin.',
  },
  {
    title: 'No TV news after 9 PM',
    detail: 'Late-night cable news raises stress and disrupts sleep. Swap in a calm podcast, an audiobook on Libby (free with library card), or a music station instead.',
  },
  {
    title: 'Use the watch alarm, not the phone alarm',
    detail: 'A wrist tap wakes you without waking a partner. Apple Watch and Pixel Watch both have a quiet haptic alarm. The phone can stay across the room.',
  },
  {
    title: 'Turn off "Always-On" displays in the bedroom',
    detail: 'Apple Watch: Settings → Display → Always On → Off. iPhone (14 Pro and up): same path. Removes glow from the nightstand.',
  },
  {
    title: 'Pick one wind-down app and stick with it',
    detail: 'Calm and Headspace are the big paid ones (around $70/year). Free options: Insight Timer, the YouTube channels "Jason Stephenson" and "Michael Sealey" (sleep stories, no ads after the first), and the built-in Apple Music sleep playlists.',
  },
  {
    title: 'Smart-bulb sunset cue at 8 PM',
    detail: 'A slow fade from bright to amber tells the body that night is starting — even before you head to bed. Set it once in the Hue or Kasa app and forget it.',
  },
];

export default function BedtimeTechRoutine() {
  const [section, setSection] = useState<Section>('phone');
  const setup = SETUPS[section];

  return (
    <>
      <SEOHead
        title="Bedtime Tech Routine"
        description="Senior-friendly bedtime tech setup. iPhone Sleep Focus, Android Bedtime mode, Apple Watch and Pixel Watch sleep tracking, smart-bulb sunset routines, Alexa good-night automations."
        path="/tools/bedtime-tech-routine"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-slate-50 dark:from-indigo-950/20 dark:to-slate-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <Moon className="h-8 w-8 text-indigo-700 dark:text-indigo-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Bedtime Tech Routine</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Quiet the phone, track sleep on a watch, and let one phrase shut down the house. Plain English, free options first.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Bedtime Tech Routine' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Three pieces of a calm bedtime</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'phone' as Section,      label: 'Phone bedtime mode' },
                  { id: 'tracking' as Section,   label: 'Sleep tracking' },
                  { id: 'automation' as Section, label: 'Good-night routine' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setSection(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      section === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{setup.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>For:</strong> {setup.whoFor}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-2 mb-5">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What you get out of it</p>
              <ul className="space-y-1.5">
                {setup.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Eight bedtime habits worth building</p>
          <div className="space-y-3 mb-6">
            {BEDTIME_HABITS.map(t => (
              <Card key={t.title} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on paid sleep apps</p>
                <p className="text-muted-foreground">
                  Some sleep-tracking subscriptions run pricey — Whoop, Oura, AutoSleep Premium, and SleepWatch Pro all land in the $60 to $130 per year range. For most people, the free Apple Health Sleep app or the free tier of the Fitbit app covers what you actually need: how long you slept, how often you woke up, and the weekly trend. Skip the subscription unless a doctor specifically asked for the extra data.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First bulb, plug, and speaker.</p>
              </Link>
              <Link to="/tools/fitness-tracker-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fitness Tracker Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick the right watch.</p>
              </Link>
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Phone or tablet, ready to go.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
