import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function GoogleAssistantTraining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Assistant for Seniors | TekSure" description="Master Google Assistant on phone + speaker. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Assistant Training</h1>
          <p className="text-lg text-muted-foreground">&quot;Hey Google&quot; opens up the world.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Activate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Android</strong> — &quot;Hey Google&quot; built in.</li>
              <li><strong>iPhone</strong> — install Google Assistant app.</li>
              <li><strong>Nest devices</strong> — built in.</li>
              <li>Train your voice (Settings → Voice Match).</li>
              <li>Knows YOUR voice = personalized.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily commands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Google, what&apos;s 25% of $80?&quot;</li>
              <li>&quot;Hey Google, set alarm 7am.&quot;</li>
              <li>&quot;Hey Google, call mom.&quot;</li>
              <li>&quot;Hey Google, what&apos;s on my calendar?&quot;</li>
              <li>&quot;Hey Google, navigate to grocery store.&quot;</li>
              <li>&quot;Hey Google, what&apos;s the news?&quot;</li>
              <li>&quot;Hey Google, define [word].&quot;</li>
              <li>&quot;Hey Google, translate to Spanish: hello friend.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health + safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Google, call 911&quot; — works hands-free.</li>
              <li>&quot;Hey Google, find nearest pharmacy.&quot;</li>
              <li>&quot;Hey Google, am I out of groceries?&quot; (if shopping list set up).</li>
              <li>&quot;Hey Google, remind me to take medicine at 9am.&quot;</li>
              <li>Set up Emergency SOS with Trusted Contact.</li>
              <li>&quot;Hey Google, what time is it?&quot; — useful for low vision.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hand-free helper</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cooking? &quot;Hey Google, set timer 30 min.&quot;</li>
              <li>Driving? &quot;Hey Google, navigate home.&quot;</li>
              <li>Hands wet/messy? Voice control.</li>
              <li>Mobility issues? Don&apos;t need to find phone.</li>
              <li>Set up Routines for common sequences.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slow down speech in settings.</li>
              <li>Larger text on screen results.</li>
              <li>Continue Conversation — don&apos;t need &quot;Hey Google&quot; every time.</li>
              <li>Turn off Activity tracking if privacy concerned.</li>
              <li>Pick male or female voice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Practice helps</h3>
            <p className="text-sm text-muted-foreground">First week — try 5 commands a day. By week 4 — using daily for many tasks. Senior tech win — voice removes complexity. Family member can help set up Routines for common needs (medication times, exercise reminders, etc.).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
