import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SiriCommandsCheatSheet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Siri Commands Cheat Sheet for Seniors | TekSure" description="Useful Siri commands every senior iPhone user should know." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Siri Cheat Sheet</h1>
          <p className="text-lg text-muted-foreground">100+ useful Siri commands for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wake Siri up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold side button on iPhone X+.</li>
              <li>Hold home button on older iPhones.</li>
              <li>Or just say &quot;Hey Siri&quot; (or &quot;Siri&quot; on iOS 17+).</li>
              <li>Apple Watch: raise wrist + speak.</li>
              <li>HomePod or AirPods: just speak.</li>
              <li>Set up at Settings → Siri.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calling + texting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Call John.&quot;</li>
              <li>&quot;FaceTime my daughter.&quot;</li>
              <li>&quot;Text Mary I&apos;m running late.&quot;</li>
              <li>&quot;Read my new messages.&quot;</li>
              <li>&quot;Call my last call back.&quot;</li>
              <li>&quot;Speakerphone&quot; (during call).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reminders + alarms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Remind me to take my pills at 8 AM.&quot;</li>
              <li>&quot;Set an alarm for 6:30 tomorrow.&quot;</li>
              <li>&quot;Set timer for 20 minutes.&quot;</li>
              <li>&quot;What&apos;s on my calendar today?&quot;</li>
              <li>&quot;Add doctor appointment Tuesday at 2.&quot;</li>
              <li>&quot;Remind me to call Mom when I get home.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Information + facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;What&apos;s the weather today?&quot;</li>
              <li>&quot;Will it rain this weekend?&quot;</li>
              <li>&quot;What&apos;s the score of the [team] game?&quot;</li>
              <li>&quot;What time is it in London?&quot;</li>
              <li>&quot;How many ounces in a cup?&quot;</li>
              <li>&quot;What&apos;s the news?&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Music + entertainment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Play Frank Sinatra.&quot;</li>
              <li>&quot;Play oldies music.&quot;</li>
              <li>&quot;Pause music.&quot; / &quot;Skip song.&quot;</li>
              <li>&quot;Volume up.&quot; / &quot;Volume down.&quot;</li>
              <li>&quot;What song is this?&quot;</li>
              <li>&quot;Play [TV show] on Apple TV.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health + emergency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Call 911.&quot; (works even when phone locked).</li>
              <li>&quot;Show my medical ID.&quot;</li>
              <li>&quot;What&apos;s my blood pressure today?&quot;</li>
              <li>&quot;Find the nearest pharmacy.&quot;</li>
              <li>&quot;Call my doctor.&quot;</li>
              <li>&quot;Where am I?&quot; (gives address).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use Siri for hands-free everything</h3>
            <p className="text-sm text-muted-foreground">If you have arthritis, vision issues, or just find phone screens frustrating, Siri can replace 80% of touch interactions. Setting alarms, sending texts, calling family, getting weather — all hands-free. Many seniors don&apos;t use Siri because they don&apos;t know what it can do. Try saying &quot;Hey Siri, what can you do?&quot; for a tour. Practice 5 commands today.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
