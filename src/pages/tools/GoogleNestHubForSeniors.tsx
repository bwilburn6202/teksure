import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function GoogleNestHubForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Nest Hub for Seniors | TekSure" description="Smart display for seniors. Photos, recipes, video calls, voice control." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Nest Hub</h1>
          <p className="text-lg text-muted-foreground">Smart display for kitchen.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>7-inch screen.</li><li>Photo frame mode.</li><li>Voice assistant.</li><li>Video calls.</li><li>Recipes + timers.</li><li>News + weather.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nest Hub 2 — $100.</li><li>Nest Hub Max — $230.</li><li>Often on sale.</li><li>One-time purchase.</li><li>No subscription needed.</li><li>Senior-affordable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo frame</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-shows family photos.</li><li>From Google Photos.</li><li>Family adds to album.</li><li>You see latest.</li><li>Senior favorite feature.</li><li>Always-on screen.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice + screen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Hey Google, set timer 10 min.&quot;</li><li>Shows recipe steps.</li><li>Plays music with cover art.</li><li>Weather visual.</li><li>Calendar shows.</li><li>Senior-friendly answers.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Video calls (Hub Max)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hub Max has camera.</li><li>Google Duo calls.</li><li>Hands-free.</li><li>&quot;Hey Google, call Mary.&quot;</li><li>Senior-perfect.</li><li>Family connection.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug in.</li><li>Google Home app on phone.</li><li>Connect to wifi.</li><li>Sign in.</li><li>15 minutes total.</li><li>Family can help.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 Nest Hub = senior kitchen helper</h3><p className="text-sm text-muted-foreground">Family adds photos to shared album → Nest Hub shows them all day. Recipes hands-free while cooking. Video calls grandkids hands-free. Set timers, play music, get weather. Senior-friendly always-on screen. Often best $100 senior kitchen tech ever bought.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
