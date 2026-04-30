import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function GoogleAssistantRoutinesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Assistant Routines for Seniors | TekSure" description="One command, many actions. Google Routines senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Settings className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Routines</h1>
          <p className="text-lg text-muted-foreground">Custom voice automations.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One phrase = many actions.</li><li>&quot;Hey Google, good morning.&quot;</li><li>Lights on, news, weather.</li><li>Free.</li><li>Senior simplifier.</li><li>Google Home app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior good morning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lights on.</li><li>Coffee maker plug on.</li><li>Weather.</li><li>News briefing.</li><li>Calendar.</li><li>One phrase.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bedtime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lights off.</li><li>Thermostat 68.</li><li>Lock doors.</li><li>Set alarm.</li><li>Sleep sounds.</li><li>Senior night routine.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Home app.</li><li>Routines.</li><li>+ New.</li><li>Add starter phrase.</li><li>Add actions.</li><li>Save.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Forget multiple commands.</li><li>One phrase = whole house.</li><li>Adult kid sets up.</li><li>Senior just speaks.</li><li>Smart home unlocked.</li><li>Cognitive load reduced.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alexa equivalent</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alexa Routines same.</li><li>Echo speakers.</li><li>Pick ecosystem.</li><li>Don&apos;t mix unless needed.</li><li>Senior consistency.</li><li>Adult kid help setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family-set Routines = senior power</h3><p className="text-sm text-muted-foreground">Adult kids set up Google Routines for senior parents. &quot;Hey Google, good morning&quot; = lights, weather, news. &quot;Bedtime&quot; = lights off, doors locked. Senior magic without learning many commands. Most under-set-up senior smart home feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
