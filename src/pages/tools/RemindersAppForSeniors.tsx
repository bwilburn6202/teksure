import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function RemindersAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reminders App for Seniors | TekSure" description="iPhone Reminders + Google Tasks. Use built-in reminder apps for senior memory help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reminders Apps</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t rely on memory.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Reminders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built into every iPhone.</li>
              <li>&quot;Hey Siri, remind me to take my pill at 8am.&quot;</li>
              <li>Time + location-based.</li>
              <li>Recurring reminders.</li>
              <li>Free, no setup.</li>
              <li>Apple Watch reminds you too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Tasks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with Google account.</li>
              <li>Within Gmail + Google Calendar.</li>
              <li>Simple list approach.</li>
              <li>Sync across devices.</li>
              <li>Recurring tasks.</li>
              <li>Easier than Todoist for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice command setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Siri, remind me to call doctor at 2pm.&quot;</li>
              <li>&quot;Hey Google, remind me to take pills daily at 8am.&quot;</li>
              <li>Auto-creates with right timing.</li>
              <li>Location-based: &quot;Remind me when I get home.&quot;</li>
              <li>Hands-free.</li>
              <li>Best feature seniors don&apos;t use enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-critical reminders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily medication doses.</li>
              <li>Doctor appointments + days before.</li>
              <li>Pet medications.</li>
              <li>Bill due dates.</li>
              <li>Watering plants.</li>
              <li>Trash day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recurring reminders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily — morning pills.</li>
              <li>Weekly — Sunday call mom.</li>
              <li>Monthly — bills due.</li>
              <li>Yearly — anniversaries.</li>
              <li>Set once, runs forever.</li>
              <li>Adjust as needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior memory aid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t fight memory issues.</li>
              <li>Externalize to phone.</li>
              <li>Brain doesn&apos;t need to remember everything.</li>
              <li>More peace of mind.</li>
              <li>Family can verify reminders set.</li>
              <li>Modern memory aid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voice setup is best</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t fumble with apps. Just say &quot;Hey Siri, remind me to take my blood pressure pill at 8am every morning.&quot; Done. Phone reminds you at 8am tomorrow + every day after. Same with Google Assistant. Voice command + reminders eliminate medication-missing problem for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
