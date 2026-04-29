import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

export default function AlexaRoutinesPrimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa Routines for Seniors | TekSure" description="Make Alexa work harder. Plain-English starter routines: morning briefing, bedtime, &quot;I&apos;m home&quot;, medication reminders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa Routines</h1>
          <p className="text-lg text-muted-foreground">One phrase = many actions.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a routine is</h2>
            <p className="text-sm">A routine bundles multiple actions under one phrase. Say "Alexa, good morning" and she turns on lights, reads the news, gives weather, and starts your coffee — all from one command.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 routines worth setting up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Good morning"</strong> — turns on lights, reads weather, news brief, today&apos;s calendar.</li>
              <li><strong>"Goodnight"</strong> — turns off all lights, locks doors, sets thermostat to 68°.</li>
              <li><strong>"I&apos;m leaving"</strong> — turns off lights, sets thermostat to away, arms cameras.</li>
              <li><strong>"I&apos;m home"</strong> — lights on, thermostat to 72°, plays jazz.</li>
              <li><strong>"Take my pills"</strong> — sets a 5-minute reminder if you don&apos;t confirm. Texts family if you forget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Alexa app on phone.</li>
              <li>Tap "More" (bottom-right) → "Routines".</li>
              <li>Tap "+" to create new routine.</li>
              <li>Name it (e.g. "Good morning").</li>
              <li>Pick trigger: voice phrase OR specific time OR sunrise/sunset.</li>
              <li>Add actions: lights, news, music, thermostat, etc.</li>
              <li>Pick which Echo to play sound from.</li>
              <li>Save. Test by saying the phrase.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly routines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Daily check-in</strong> — Alexa says "Good morning, how are you?" each morning. If you don&apos;t respond by 11 AM, sends family a text.</li>
              <li><strong>Medication routine</strong> — 8 AM: "Time for morning meds. Say done when finished." If no "done" in 15 min, repeats.</li>
              <li><strong>Lost phone</strong> — say "Find my phone" and Alexa rings it.</li>
              <li><strong>Help routine</strong> — say "Drop in on Sarah" — instantly video-calls your daughter on her Echo.</li>
              <li><strong>Emergency</strong> — say "Call 911" or "Help" — Alexa calls 911 or your designated emergency contact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alexa Together (paid)</h2>
            <p className="text-sm">$20/month. Adult kids get an app showing parent activity (echo activity, no audio). Includes 24/7 emergency response button + fall detection support. Removes "I don&apos;t want to bother them" guilt while keeping family connected.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best Echo for seniors</h3>
            <p className="text-sm text-muted-foreground"><strong>Echo Show 8</strong> ($150) — screen, video calls, photo frame, recipes. <strong>Echo Show 10</strong> ($250) — same with auto-rotating screen. Audio-only Echo Dot ($50) is cheaper but no video calling.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
