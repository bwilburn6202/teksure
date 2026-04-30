import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function AlexaSkillsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Alexa Skills for Seniors | TekSure" description="Powerful free Alexa skills for senior life. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Alexa Skills</h1>
          <p className="text-lg text-muted-foreground">Voice-controlled = senior superpower.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily life skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, set timer 10 minutes&quot; — kitchen helper.</li>
              <li>&quot;Alexa, what&apos;s the weather?&quot;</li>
              <li>&quot;Alexa, add milk to shopping list.&quot;</li>
              <li>&quot;Alexa, remind me to take medication at 9am.&quot;</li>
              <li>&quot;Alexa, call [contact name].&quot;</li>
              <li>&quot;Alexa, play country music.&quot;</li>
              <li>&quot;Alexa, news flash.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Alexa Together</strong> — $20/mo. Family caregiver dashboard.</li>
              <li><strong>Ask My Buddy</strong> — emergency call to contacts.</li>
              <li><strong>Mayo Clinic First-Aid</strong> — guides through emergency.</li>
              <li><strong>Daily Affirmations</strong> — morning motivation.</li>
              <li><strong>Audible</strong> — read audiobooks.</li>
              <li><strong>Drop In</strong> — family talks to you anytime (with consent).</li>
              <li><strong>Smart Reminders</strong> — meds, appointments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Brain games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, let&apos;s play Jeopardy.&quot;</li>
              <li>&quot;Alexa, open Word of the Day.&quot;</li>
              <li>&quot;Alexa, trivia.&quot;</li>
              <li>&quot;Alexa, math facts.&quot;</li>
              <li>&quot;Alexa, true or false.&quot;</li>
              <li>&quot;Alexa, opening question.&quot; — for friend conversations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Routines (auto-actions)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, good morning&quot; → lights on, weather, news.</li>
              <li>&quot;Alexa, goodnight&quot; → lights off, alarm set.</li>
              <li>&quot;Alexa, I&apos;m leaving&quot; → lock doors, set thermostat.</li>
              <li>&quot;Alexa, I&apos;m home&quot; → lights, music.</li>
              <li>Set up in Alexa app.</li>
              <li>Saves time + complexity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Alexa devices for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Echo Show 8</strong> — $150. Screen + voice. Senior favorite.</li>
              <li><strong>Echo Show 5</strong> — $90. Bedside.</li>
              <li><strong>Echo Dot</strong> — $50. Voice only.</li>
              <li><strong>Echo Show 15</strong> — $280. Wall-mount.</li>
              <li>Display = bigger help (visual cues, video calls).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">Alexa records when wake word said. Settings in app to delete recordings. Mute button physically disables mic. Worth privacy trade-off for seniors with mobility/vision issues. Apple HomePod = better privacy alternative if iPhone user.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
