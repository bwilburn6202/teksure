import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, ChevronRight, AlertTriangle } from 'lucide-react';

type System = 'carplay' | 'android-auto' | 'no-screen';

interface Setup {
  name: string;
  whoFor: string;
  steps: string[];
  features: string[];
}

const SETUPS: Record<System, Setup> = {
  'carplay': {
    name: 'Apple CarPlay',
    whoFor: 'iPhone owner with a car made 2016 or newer that supports CarPlay (most modern cars do).',
    steps: [
      'Connect your iPhone to the car via USB cable, or pair via Bluetooth (newer cars).',
      'On the car screen, "CarPlay" should pop up. Tap it.',
      'On the iPhone: Settings → General → CarPlay → tap your car name → reorder which apps appear.',
      'Move Maps, Phone, Messages, Music, and Podcasts to the front. Hide the rest.',
      'Disconnect once and reconnect to confirm everything works without prompting.',
    ],
    features: [
      'Hands-free Siri — say "Hey Siri, send a text to my daughter" while driving.',
      'Big-button maps that read directions aloud.',
      'Read incoming texts aloud, dictate replies — never look at the phone.',
      'Spotify, Audible, Apple Music all work.',
      'Phone screen stays off while CarPlay is active — no temptation to glance.',
    ],
  },
  'android-auto': {
    name: 'Android Auto',
    whoFor: 'Android phone with a CarPlay-compatible car (2016+, but check your specific model — some Android cars need a paid OS update).',
    steps: [
      'Install the Android Auto app from the Play Store (already on most newer Androids).',
      'Plug your phone into the car via USB cable, or pair Bluetooth + Wi-Fi for wireless.',
      'On the car screen, accept the Android Auto agreement and grant permissions.',
      'On your phone: Settings → Connected devices → Connection preferences → Android Auto → "Customise launcher" — pick your favourite apps.',
      'Test by saying "Hey Google, navigate to home" while parked.',
    ],
    features: [
      '"Hey Google" voice commands for everything.',
      'Google Maps with real-time traffic.',
      'Read and reply to texts by voice.',
      'Spotify, YouTube Music, Audible all work.',
      'Many cars support wireless Android Auto — phone stays in your pocket.',
    ],
  },
  'no-screen': {
    name: 'Older car (no smart screen)',
    whoFor: 'Pre-2016 cars or basic models. Use Bluetooth and a phone mount.',
    steps: [
      'Pair your phone via Bluetooth: phone Settings → Bluetooth → pair with car.',
      'Buy a phone mount for the dashboard or vent. Around $20 on Amazon — the magnetic ones are easiest.',
      'Mount the phone where you can see it but it does not block the view of the road.',
      'Open Maps before you start driving.',
      'Plug the phone into the cigarette lighter port for charging during long drives.',
    ],
    features: [
      'Calls and music still work through the car speakers via Bluetooth.',
      'Maps shows on your phone instead of a built-in screen.',
      'Voice control still works — say "Hey Siri" or "Hey Google" before unlocking.',
      'Cheaper option: a $50 dash-cam-style head unit with CarPlay/Android Auto can be added to almost any car.',
    ],
  },
};

const SAFETY_TIPS = [
  {
    title: 'Set everything BEFORE you start driving',
    detail: 'Pick the destination, queue up the playlist, send the first text. Looking down to set things up is when accidents happen.',
  },
  {
    title: 'Use Do Not Disturb While Driving',
    detail: 'iPhone: Settings → Focus → Driving → ON automatically when CarPlay connects. Android: Settings → Connected devices → Driving Mode. Texts get an auto-reply ("driving, will respond soon"); you stop seeing them while moving.',
  },
  {
    title: 'Keep a backup paper map for trips',
    detail: 'GPS cell coverage drops in mountains, tunnels, and rural areas. A printed Google Maps page or an old road atlas in the glove box rescues a long trip.',
  },
  {
    title: 'Charge the phone before long drives',
    detail: 'Maps + music + screen-on burns battery fast. A car charger is $10. Get one.',
  },
  {
    title: 'Add ICE (In Case of Emergency) contact',
    detail: 'Lock screen Medical ID — see our Fall Detection Setup guide. First responders look at the phone first if you cannot speak.',
  },
];

export default function CarPhoneSetup() {
  const [system, setSystem] = useState<System>('carplay');
  const setup = SETUPS[system];

  return (
    <>
      <SEOHead
        title="Car Phone Setup"
        description="Connect your iPhone or Android to the car — Apple CarPlay, Android Auto, or older cars with Bluetooth and a phone mount. Hands-free, safe, plain English."
        path="/tools/car-phone-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-zinc-50 dark:from-slate-950/20 dark:to-zinc-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-slate-500/10 rounded-full">
                <Car className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Car Phone Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Connect the phone to the car so you never look down again. Apple CarPlay, Android Auto, or older-car options.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Car Phone Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What do you have?</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'carplay' as System,      label: 'iPhone + modern car' },
                  { id: 'android-auto' as System, label: 'Android + modern car' },
                  { id: 'no-screen' as System,    label: 'Older car (no smart screen)' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setSystem(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      system === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{setup.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>For:</strong> {setup.whoFor}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-2 mb-5">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What you can do once connected</p>
              <ul className="space-y-1.5">
                {setup.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five safety habits worth building</p>
          <div className="space-y-3 mb-6">
            {SAFETY_TIPS.map(t => (
              <Card key={t.title} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on attention</p>
                <p className="text-muted-foreground">
                  CarPlay and Android Auto make driving safer than glancing at a phone — but they are not a free pass. Voice and big buttons still take attention. The single best move: set destination + music BEFORE you put the car in drive.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/voice-assistant-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voice Assistant Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Siri / Google Assistant.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Hands-free texting.</p>
              </Link>
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection</p>
                <p className="text-xs text-muted-foreground mt-0.5">Crash detection too (iPhone 14+).</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
