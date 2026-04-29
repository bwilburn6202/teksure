import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function GoogleHomeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Home Basics for Seniors | TekSure" description="Just got a Google Nest speaker? Plain-English starter commands, routines, and tips for new Google Home users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Home Basics</h1>
          <p className="text-lg text-muted-foreground">Talk to your house.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily commands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Hey Google, what&apos;s the weather?"</li>
              <li>"Hey Google, set timer for 10 minutes."</li>
              <li>"Hey Google, play classical music."</li>
              <li>"Hey Google, call mom." (works after pairing your contacts)</li>
              <li>"Hey Google, remind me to take my pills at 8 PM."</li>
              <li>"Hey Google, what&apos;s on my calendar today?"</li>
              <li>"Hey Google, how do you spell rhubarb?"</li>
              <li>"Hey Google, news brief."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Google Home app on phone.</li>
              <li>Tap your speaker → settings gear.</li>
              <li><strong>Voice and Match</strong> — train it to recognize YOUR voice. Personalized responses.</li>
              <li><strong>Voice speed</strong> — slow it down (0.8x easier to follow).</li>
              <li><strong>Volume</strong> — set max to 80% so it doesn&apos;t startle.</li>
              <li><strong>Ambient EQ</strong> — adjusts speaker volume to room noise.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Routines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"OK Google, good morning"</strong> — turns on lights, reads weather + calendar.</li>
              <li><strong>"OK Google, bedtime"</strong> — turns off lights, sets thermostat, plays sleep sounds.</li>
              <li><strong>"OK Google, I&apos;m leaving"</strong> — locks doors, lights off, away mode.</li>
              <li>Set up under Google Home app → Routines tab.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calls without a phone</h2>
            <p className="text-sm">Set up Duo or Google Voice. Then say "Hey Google, call John." Speaker dials. Works hands-free — great for arthritis or low vision.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Google speakers (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nest Mini</strong> ($35-50) — small, audio only. Bedside.</li>
              <li><strong>Nest Audio</strong> ($100) — bigger sound. Living room or kitchen.</li>
              <li><strong>Nest Hub (2nd gen)</strong> ($100) — 7" screen. Photo frame, recipes, video calls.</li>
              <li><strong>Nest Hub Max</strong> ($229) — 10" screen + camera for video calls + face match.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">Google says it doesn&apos;t record until it hears "Hey Google". To erase what it&apos;s heard, say "Hey Google, delete what I said today" or open Google Home app → Settings → Activity. You can also turn off the mic with the switch on the back.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
