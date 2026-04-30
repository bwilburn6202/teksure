import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronRight, AlertTriangle } from 'lucide-react';

type Phone = 'iphone' | 'android';
type Scenario = 'in-house' | 'lost-out' | 'stolen';

interface Steps {
  scenario: string;
  steps: string[];
  callout?: string;
}

const FLOWS: Record<Phone, Record<Scenario, Steps>> = {
  iphone: {
    'in-house': {
      scenario: 'I think it is somewhere in the house',
      steps: [
        'On any other Apple device, ask Siri: "Hey Siri, where is my iPhone?"',
        'Or open the Find My app — tap the iPhone in the device list → tap "Play Sound". The phone rings even on silent.',
        'Or use any computer: go to icloud.com/find → sign in with your Apple ID → click your iPhone → "Play Sound".',
      ],
      callout: 'The "Play Sound" feature works even if the iPhone is on Silent. Worth knowing.',
    },
    'lost-out': {
      scenario: 'I think I left it somewhere out',
      steps: [
        'Open Find My on another Apple device, or icloud.com/find on any computer.',
        'Pick the iPhone — see its location on a map. Find My works for up to 24 hours after the battery dies, using a small backup signal.',
        'Tap "Mark As Lost" — locks the phone with your passcode and shows your message + phone number on the lock screen for someone to call you.',
        'Drive to the location. Use "Play Sound" once you are close.',
      ],
    },
    'stolen': {
      scenario: 'I think it was stolen',
      steps: [
        'Open Find My or icloud.com/find immediately.',
        'Tap the iPhone → "Mark As Lost" — locks it and disables Apple Pay.',
        'Call the police at the non-emergency line. Have the iPhone\'s serial number ready (on the original box, or under Settings → General → About).',
        'If you have AppleCare+ with Theft and Loss, file a claim at apple.com/support → Theft.',
        'Last-resort: "Erase This iPhone" — wipes everything remotely. Do this only after you give up on recovery.',
      ],
      callout: 'Do NOT remove the device from Find My before erasing — that lets the thief activate it.',
    },
  },
  android: {
    'in-house': {
      scenario: 'I think it is somewhere in the house',
      steps: [
        'On a computer or another phone, go to google.com/android/find.',
        'Sign in with the same Google account that was on the lost phone.',
        'Pick the phone → click "Play sound". It rings for 5 minutes even on silent.',
      ],
      callout: 'Or say "Hey Google, find my phone" on any Google Assistant device — Echo, Nest Hub, Pixel — and the lost phone rings.',
    },
    'lost-out': {
      scenario: 'I think I left it somewhere out',
      steps: [
        'Go to google.com/android/find → sign in.',
        'See the phone\'s location on a map.',
        'Click "Secure device" — locks it with your PIN and shows a message + phone number on the lock screen for someone to call.',
        'Drive to the location. Use "Play sound" when close.',
      ],
    },
    'stolen': {
      scenario: 'I think it was stolen',
      steps: [
        'Open google.com/android/find right away.',
        'Click "Secure device" — locks it.',
        'Call the police non-emergency line.',
        'For Samsung Galaxy phones: also use samsung.com/findmymobile for extra options.',
        'Last-resort: "Erase device" — wipes everything remotely.',
      ],
      callout: 'Most carriers can also disable the SIM card by phone, so the thief cannot make calls or use data on your line.',
    },
  },
};

export default function FindLostPhone() {
  const [phone, setPhone] = useState<Phone>('iphone');
  const [scenario, setScenario] = useState<Scenario>('in-house');

  const flow = FLOWS[phone][scenario];

  return (
    <>
      <SEOHead
        title="Find Your Lost Phone"
        description="Find a lost iPhone or Android in 60 seconds. Locate it on a map, ring it (even on silent), lock it, or wipe it remotely. Step-by-step for every scenario."
        path="/tools/find-lost-phone"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Lost Phone</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Misplaced it in the house. Left it at a restaurant. Or it was stolen. Each gets its own steps.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Find Your Lost Phone' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone and what happened</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                {([
                  { id: 'in-house' as Scenario, label: 'It is somewhere in the house' },
                  { id: 'lost-out' as Scenario, label: 'I left it somewhere outside' },
                  { id: 'stolen' as Scenario,   label: 'It was stolen' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setScenario(o.id)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      scenario === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{flow.scenario}</Badge>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Steps</p>
              <ol className="space-y-3">
                {flow.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              {flow.callout && (
                <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-blue-700 dark:text-blue-300"><strong>Worth knowing:</strong> {flow.callout}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Make sure Find My is ON before you ever lose your phone</p>
                <p className="text-muted-foreground">
                  iPhone: Settings → your name → Find My → Find My iPhone → ON. Android: Settings → Security → Find My Device → ON. Without this set up in advance, none of the steps work.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Prevent next time</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Add an emergency contact + medical info to your lock screen — see Fall Detection Setup.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>A Tile or AirTag on your phone case — even when the battery dies, the tracker works.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Phone-finder bracelet — Tile makes one shaped like a key fob. Press the button, your phone rings.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Always know where your spouse\'s phone is — use Find My family sharing or share location in Google Maps. Saves stress on both ends.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">For keys, wallet, bag.</p>
              </Link>
              <Link to="/tools/tech-buddy-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Buddy Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Have a buddy who can help find it.</p>
              </Link>
              <Link to="/tools/id-theft-recovery" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">ID Theft Recovery</p>
                <p className="text-xs text-muted-foreground mt-0.5">If it was stolen and accounts are at risk.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
