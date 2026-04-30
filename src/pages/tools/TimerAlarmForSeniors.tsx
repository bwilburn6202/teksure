import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function TimerAlarmForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Timer + Alarm for Seniors | TekSure" description="Multiple timers + smart alarms. Senior phone clock guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Timers + Alarms</h1>
          <p className="text-lg text-muted-foreground">Senior phone clock.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multiple timers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 17+.</li><li>Set 3 simultaneously.</li><li>Pasta + chicken + rice.</li><li>Senior cooking.</li><li>Each named.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice timers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Hey Siri, 10-min pasta timer.&quot;</li><li>Hands-free.</li><li>Multiple at once.</li><li>Senior cook + clean.</li><li>&quot;Cancel pasta timer.&quot;</li><li>Free magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multiple alarms</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wake-up alarm.</li><li>Pill alarm.</li><li>Appointment reminder.</li><li>Different sounds.</li><li>Senior medication tracker.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sleep alarm</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS Health → Sleep.</li><li>Bedtime + wake.</li><li>Senior sleep schedule.</li><li>Track nightly.</li><li>Wake gently.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">World clock</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See family timezones.</li><li>Avoid late calls.</li><li>Senior international family.</li><li>Add favorites.</li><li>Free.</li><li>Built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alexa alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, 5 min timer.&quot;</li><li>Multiple via voice.</li><li>Hands-free senior.</li><li>Cooking + cleaning.</li><li>Free.</li><li>Best in kitchen.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Multiple voice timers = senior cook</h3><p className="text-sm text-muted-foreground">&quot;Hey Siri, 10-min pasta timer&quot; + &quot;25-min chicken timer&quot; = simultaneous senior cooking. iOS 17+ supports multiple. Or Alexa Echo. Free. Plus medication alarms with names. Most under-used senior phone feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
