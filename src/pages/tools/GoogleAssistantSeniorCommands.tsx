import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speech } from 'lucide-react';

export default function GoogleAssistantSeniorCommands() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Assistant Commands for Seniors | TekSure" description="Useful Google Assistant commands for senior Android users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speech className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Assistant</h1>
          <p className="text-lg text-muted-foreground">Voice-control your Android phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to wake it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Say &quot;Hey Google&quot; or &quot;OK Google.&quot;</li>
              <li>Or hold the home button.</li>
              <li>Or swipe up from corner on newer phones.</li>
              <li>Set up at Settings → Google → Assistant.</li>
              <li>Train it to recognize your voice.</li>
              <li>Works on phone, tablet, smart speakers, watches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calling + texting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Google, call Sarah.&quot;</li>
              <li>&quot;Send a text to Mom.&quot;</li>
              <li>&quot;Read my text messages.&quot;</li>
              <li>&quot;Reply &apos;running late&apos; to John.&quot;</li>
              <li>&quot;Call my last call back.&quot;</li>
              <li>&quot;Call my favorite contacts.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reminders + alarms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Remind me to take my pills at 9 AM.&quot;</li>
              <li>&quot;Set timer for 15 minutes.&quot;</li>
              <li>&quot;Set alarm for 7 tomorrow.&quot;</li>
              <li>&quot;What&apos;s on my schedule today?&quot;</li>
              <li>&quot;Remind me to water plants every Friday.&quot;</li>
              <li>&quot;Cancel my 9 AM alarm.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Information + facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;What&apos;s the weather today?&quot;</li>
              <li>&quot;How many tablespoons in a cup?&quot;</li>
              <li>&quot;Define resilience.&quot;</li>
              <li>&quot;Translate hello to Spanish.&quot;</li>
              <li>&quot;What&apos;s the latest news?&quot;</li>
              <li>&quot;Who won the World Series?&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Music + entertainment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Play Beatles music.&quot;</li>
              <li>&quot;Play [TV show name] on Netflix.&quot;</li>
              <li>&quot;Pause music.&quot;</li>
              <li>&quot;What song is playing?&quot;</li>
              <li>&quot;Tell me a joke.&quot;</li>
              <li>&quot;Read me a story.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart home + emergency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Turn on living room lights.&quot;</li>
              <li>&quot;Set thermostat to 72.&quot;</li>
              <li>&quot;Lock the front door.&quot;</li>
              <li>&quot;Call 911.&quot; (works on Android lock screen).</li>
              <li>&quot;Where am I?&quot;</li>
              <li>&quot;Find my phone.&quot; (from another Google device).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Built into your Android phone</h3>
            <p className="text-sm text-muted-foreground">If you have an Android phone, you already have Google Assistant. Just say &quot;Hey Google&quot; followed by what you want. Many seniors with arthritis or vision issues find voice commands easier than tapping. Practice 3 commands today: setting an alarm, calling a family member, and asking the weather. Within a week it&apos;ll feel natural.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
