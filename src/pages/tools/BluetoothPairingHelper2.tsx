import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Bluetooth, ChevronRight, AlertTriangle, type LucideIcon,
  Link2Off, Headphones, Volume2, Search, RefreshCw,
} from 'lucide-react';

type Symptom = 'wont-pair' | 'drops' | 'one-earbud' | 'echo' | 'cant-find';

interface Step {
  title: string;
  detail: string;
}

const FIXES: Record<Symptom, Step[]> = {
  'wont-pair': [
    { title: 'Put the device into pairing mode', detail: 'Most headphones and speakers need a long press on the power button (5-10 seconds) until the light flashes blue and red, or red and white. Check the manual for the exact pattern. Pairing mode usually only lasts 2-3 minutes.' },
    { title: 'Forget the device on your phone first', detail: 'On iPhone: Settings -> Bluetooth -> tap the (i) next to the device -> Forget This Device. On Android: Settings -> Connected devices -> gear icon -> Unpair. This clears any old pairing data that may be blocking a fresh connection.' },
    { title: 'Turn Bluetooth off and back on', detail: 'On your phone, swipe down to open Control Center or Quick Settings. Toggle Bluetooth off, wait 10 seconds, then toggle it back on. This resets the radio.' },
    { title: 'Restart both devices', detail: 'Power your phone fully off and back on. Power the Bluetooth device off and back on. A clean restart on both ends fixes most stubborn pairing issues.' },
    { title: 'Move within 3 feet of each other', detail: 'Bluetooth has a 30-foot range in theory, but pairing works best when devices are very close. Stay within arms reach during the first connection.' },
  ],
  'drops': [
    { title: 'Check the battery on the Bluetooth device', detail: 'Low battery is the number one cause of dropped connections. Charge to at least 50% before troubleshooting further. If it drops with a full battery, the battery may be worn out.' },
    { title: 'Move away from Wi-Fi routers and microwaves', detail: 'Bluetooth uses the same 2.4 GHz band as Wi-Fi and microwave ovens. Sit at least 10 feet from your router and never use a microwave during a Bluetooth call.' },
    { title: 'Forget and re-pair the device', detail: 'On iPhone: Settings -> Bluetooth -> (i) -> Forget This Device. On Android: Settings -> Connected devices -> gear -> Unpair. Then put the device in pairing mode and connect fresh.' },
    { title: 'Update your phone software', detail: 'iPhone: Settings -> General -> Software Update. Android: Settings -> System -> Software update. Bluetooth fixes ship in nearly every monthly update.' },
    { title: 'Reset network settings as a last step', detail: 'iPhone: Settings -> General -> Transfer or Reset iPhone -> Reset -> Reset Network Settings. This wipes Wi-Fi passwords too, so save them first. Often clears years of stuck pairings.' },
  ],
  'one-earbud': [
    { title: 'Put both earbuds back in the case', detail: 'Close the lid for 15 seconds. Open it. Take both out at the same time. They should re-sync to each other automatically.' },
    { title: 'Forget the earbuds on your phone', detail: 'Settings -> Bluetooth -> tap (i) or gear next to the earbuds -> Forget. This removes the broken pairing entirely.' },
    { title: 'Reset the earbuds to factory', detail: 'AirPods: hold the case button until the light flashes amber then white. Galaxy Buds: hold both touch pads. Most other brands: hold both earbuds buttons for 15-30 seconds. Check the manual for your model.' },
    { title: 'Re-pair as a fresh device', detail: 'Open the case near your phone. The pairing prompt should appear. Tap Connect. Both earbuds should now play together.' },
    { title: 'Clean the charging contacts', detail: 'Earwax and lint on the gold contacts inside the case stop one earbud from charging properly. Wipe with a dry cotton swab. Do not use water or alcohol on the speaker mesh.' },
  ],
  'echo': [
    { title: 'Lower the volume on both devices', detail: 'Echo on calls is often caused by your voice coming out of the headphones loud enough that the microphone picks it up again. Drop the volume to about 50%.' },
    { title: 'Move the microphone closer to your mouth', detail: 'On headsets with a boom mic, point it toward your chin. On earbuds, the mic is usually on the stem or the bottom of the bud. The closer the mic, the less room sound it picks up.' },
    { title: 'Disable any second audio output', detail: 'If the call is also playing through a speaker or your laptop, turn the speaker off. Two outputs at once create echo loops. Use one device at a time during calls.' },
    { title: 'Check for an audio codec mismatch', detail: 'On Android: Settings -> Connected devices -> gear next to the device -> tap the device name -> try switching from HD Audio to standard, or vice versa. On iPhone this is automatic, no action needed.' },
    { title: 'Forget and re-pair the device', detail: 'A corrupt pairing profile can cause audio routing problems. Forget the device, restart the phone, and pair fresh.' },
  ],
  'cant-find': [
    { title: 'Confirm the device is in pairing mode', detail: 'A blinking light is not always pairing mode. Pairing usually shows a fast alternating blue and red, or all-white blinking. A solid light means the device is already connected to something else.' },
    { title: 'Check that no other device owns it', detail: 'If a Bluetooth device is paired to another phone, tablet, or computer in the room, your phone cannot see it. Turn Bluetooth off on every other device nearby, or move to a different room.' },
    { title: 'Toggle Bluetooth and reopen the menu', detail: 'On iPhone: Settings -> Bluetooth, swipe down on the list to refresh. On Android: Connected devices -> Pair new device. The scan often misses devices on the first pass.' },
    { title: 'Restart the phone', detail: 'A full restart clears the Bluetooth cache. iPhone: hold side + volume down. Android: hold power -> Restart. Bluetooth scanning works much better on a fresh boot.' },
    { title: 'Reset the Bluetooth device', detail: 'If your phone still cannot find it, the device may be stuck. Look up "factory reset [your device model]" online. Most have a 10-30 second button hold combination that wipes pairings and starts over.' },
  ],
};

const SYMPTOMS: { id: Symptom; label: string; icon: LucideIcon; tag: string }[] = [
  { id: 'wont-pair',  label: 'Device will not pair at all', icon: Link2Off,    tag: 'No connection' },
  { id: 'drops',      label: 'Connection keeps dropping',   icon: RefreshCw,   tag: 'Unstable' },
  { id: 'one-earbud', label: 'Only one earbud works',       icon: Headphones,  tag: 'Earbuds' },
  { id: 'echo',       label: 'Audio echoes on calls',       icon: Volume2,     tag: 'Audio' },
  { id: 'cant-find',  label: 'Phone cannot find the device', icon: Search,     tag: 'Discovery' },
];

export default function BluetoothPairingHelp2() {
  const [symptom, setSymptom] = useState<Symptom>('wont-pair');
  const [done, setDone] = useState<Set<string>>(new Set());

  const steps = FIXES[symptom];

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const switchSymptom = (s: Symptom) => {
    setSymptom(s);
    setDone(new Set());
  };

  return (
    <>
      <SEOHead
        title="Bluetooth Pairing Help"
        description="Fix common Bluetooth problems on your phone, headphones, earbuds, and speakers. Step-by-step fixes for pairing failures, dropped audio, and one-sided earbuds."
        path="/tools/bluetooth-pairing-help"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Bluetooth className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Bluetooth Pairing Help</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the symptom. Get the fix. Walk through the steps until your device works.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Bluetooth Pairing Help' }]} />

          <Alert className="mb-6 border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-sm text-amber-900 dark:text-amber-200">
              <strong>Most important step:</strong> Bluetooth devices commonly need to be "forgotten" from your phone settings before they re-pair correctly. If a device used to work and now will not, that is the first thing to try.
            </AlertDescription>
          </Alert>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What is going wrong?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SYMPTOMS.map(s => {
                  const Icon = s.icon;
                  return (
                    <button key={s.id} onClick={() => switchSymptom(s.id)}
                      className={`p-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                        symptom === s.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                      }`}>
                      <Icon className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{s.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.tag}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {steps.length} done</p>

          <div className="space-y-3 mb-6">
            {steps.map((s, i) => {
              const isDone = done.has(`${symptom}-${i}`);
              return (
                <Card key={i} className={`border-border ${isDone ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                  <CardContent className="p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox checked={isDone} onCheckedChange={() => toggle(`${symptom}-${i}`)} className="mt-1" />
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${isDone ? 'line-through text-muted-foreground' : ''}`}>{i + 1}. {s.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                      </div>
                    </label>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Step-by-step for hearing aids.</p>
              </Link>
              <Link to="/tools/bluetooth-earbud-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bluetooth Earbud Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find the right earbuds.</p>
              </Link>
              <Link to="/tools/car-phone-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Car Phone Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair your phone to your car.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: when in doubt, forget the device, restart your phone, then pair fresh.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
