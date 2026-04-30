import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Ear, ChevronRight, ExternalLink, Check } from 'lucide-react';

type Brand = 'phonak' | 'oticon' | 'starkey' | 'resound' | 'widex' | 'apple-airpods-pro' | 'jabra' | 'other';
type Phone = 'iphone' | 'android';

interface PairingGuide {
  brand: string;
  iphoneSteps: string[];
  androidSteps: string[];
  appName?: string;
  appLink?: string;
  notes?: string[];
}

const GUIDES: Record<Brand, PairingGuide> = {
  'phonak': {
    brand: 'Phonak',
    appName: 'myPhonak',
    appLink: 'https://www.phonak.com/en-us/global/myphonak-app',
    iphoneSteps: [
      'Put your Phonak hearing aids in their charger or turn them off, then back on. They are pairing-ready for the first 3 minutes after powering on.',
      'On your iPhone, open Settings → Accessibility → Hearing Devices.',
      'Wait for "Phonak" to appear under "MFI Hearing Devices". Tap it.',
      'Tap "Pair" twice (once for each ear) when iPhone asks.',
      'Done — you should see "Connected" next to each side.',
    ],
    androidSteps: [
      'Open Settings → Connected devices → "+" or "Pair new device".',
      'Power-cycle your hearing aids (off, then on) to make them discoverable.',
      'Tap your Phonak when it shows up under available devices.',
      'Repeat for the second ear if it does not pair automatically.',
    ],
    notes: [
      'Phonak Paradise and newer support direct calls and music on both iPhone and Android.',
      'For older Phonak models, only specific iPhones support direct streaming.',
    ],
  },
  'oticon': {
    brand: 'Oticon',
    appName: 'Oticon ON',
    appLink: 'https://www.oticon.com/support/oticon-on-app',
    iphoneSteps: [
      'Restart your Oticon hearing aids (open and close the battery door, or take them off the charger).',
      'On iPhone: Settings → Accessibility → Hearing Devices.',
      'Tap your Oticon name when it appears.',
      'Tap "Pair" for left and right.',
    ],
    androidSteps: [
      'Oticon Real, Intent, and More support direct Android pairing on Android 10+.',
      'Settings → Connected devices → Pair new device.',
      'Power-cycle the hearing aids to make them discoverable.',
      'Tap to pair.',
    ],
  },
  'starkey': {
    brand: 'Starkey',
    appName: 'My Starkey',
    appLink: 'https://www.starkey.com/hearing-aid-apps/my-starkey-app',
    iphoneSteps: [
      'Turn the hearing aids off, then on (open battery doors, then close — or place on, then off the charger).',
      'iPhone: Settings → Accessibility → Hearing Devices → tap your Starkey.',
      'Tap "Pair" on each side.',
    ],
    androidSteps: [
      'Newer Starkey models (Genesis AI, Edge AI) support direct Android pairing.',
      'Settings → Connected devices → Pair new device → select your Starkey.',
    ],
  },
  'resound': {
    brand: 'ReSound',
    appName: 'ReSound Smart 3D',
    appLink: 'https://www.resound.com/en-us/hearing-aids/apps',
    iphoneSteps: [
      'Power-cycle the hearing aids.',
      'iPhone: Settings → Accessibility → Hearing Devices.',
      'Tap "ReSound" → "Pair" for each side.',
    ],
    androidSteps: [
      'ReSound ONE and newer pair directly with Android 10+.',
      'Settings → Connected devices → Pair new device.',
      'Power-cycle and select your ReSound device.',
    ],
  },
  'widex': {
    brand: 'Widex',
    appName: 'Widex Moment',
    appLink: 'https://www.widex.com/en-us/hearing-aids/widex-app',
    iphoneSteps: [
      'Restart the hearing aids.',
      'iPhone: Settings → Accessibility → Hearing Devices.',
      'Tap your Widex device → Pair for each side.',
    ],
    androidSteps: [
      'Widex Moment Sheer and newer support Android Bluetooth LE Audio.',
      'Settings → Connected devices → Pair new device.',
    ],
  },
  'apple-airpods-pro': {
    brand: 'Apple AirPods Pro (used as hearing aids)',
    iphoneSteps: [
      'AirPods Pro 2 can act as a clinical-grade hearing aid since iOS 18.2.',
      'Open the AirPods case near your iPhone — tap "Connect" if prompted.',
      'Settings → Accessibility → Hearing → "Hearing Aid Feature" → run the hearing test.',
      'Your AirPods will boost speech and quiet background noise based on your test.',
    ],
    androidSteps: [
      'AirPods Pro hearing-aid mode is iPhone-only.',
      'On Android they still work as basic earbuds — open the case near your phone, then pair from Bluetooth settings.',
    ],
    notes: [
      'AirPods Pro hearing aid mode is FDA-cleared for mild-to-moderate loss.',
      'Costs about $250 — far less than prescription hearing aids if your loss is mild.',
    ],
  },
  'jabra': {
    brand: 'Jabra Enhance / Jabra hearing aids',
    appName: 'Jabra Enhance Pro',
    appLink: 'https://www.jabra.com/hearing/services/jabra-enhance-pro-app',
    iphoneSteps: [
      'Power-cycle the hearing aids.',
      'iPhone: Settings → Accessibility → Hearing Devices.',
      'Tap your Jabra Enhance device → Pair.',
    ],
    androidSteps: [
      'Settings → Connected devices → Pair new device.',
      'Power-cycle the device, select it from the list.',
    ],
  },
  'other': {
    brand: 'Other / not listed',
    iphoneSteps: [
      'Most modern hearing aids show up in the same place: Settings → Accessibility → Hearing Devices.',
      'Power-cycle the hearing aids first (they are only "discoverable" for a couple of minutes after restart).',
      'Tap your device when it appears, then "Pair" twice.',
      'If it does not show up, search "[brand name] iPhone pairing" — every brand has a 1-page guide.',
    ],
    androidSteps: [
      'Android 10 and newer support most major brands as ASHA (Audio Streaming for Hearing Aids).',
      'Settings → Connected devices → Pair new device.',
      'Power-cycle the hearing aids to make them discoverable.',
      'Older Android versions may need the manufacturer\'s own app.',
    ],
  },
};

const BRANDS: { id: Brand; label: string }[] = [
  { id: 'phonak', label: 'Phonak' },
  { id: 'oticon', label: 'Oticon' },
  { id: 'starkey', label: 'Starkey' },
  { id: 'resound', label: 'ReSound' },
  { id: 'widex', label: 'Widex' },
  { id: 'jabra', label: 'Jabra Enhance' },
  { id: 'apple-airpods-pro', label: 'Apple AirPods Pro' },
  { id: 'other', label: 'Other / not listed' },
];

export default function HearingAidPairingWizard() {
  const [brand, setBrand] = useState<Brand | null>(null);
  const [phone, setPhone] = useState<Phone>('iphone');

  const guide = brand ? GUIDES[brand] : null;
  const steps = guide ? (phone === 'iphone' ? guide.iphoneSteps : guide.androidSteps) : [];

  return (
    <>
      <SEOHead
        title="Hearing Aid Pairing Wizard"
        description="Pair Phonak, Oticon, Starkey, ReSound, Widex, Jabra, or AirPods Pro to your iPhone or Android — clear, brand-by-brand, plain-English steps."
        path="/tools/hearing-aid-pairing-wizard"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Ear className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Hearing Aid Pairing Wizard</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Connect your hearing aids to your phone for calls, music, and TV — without calling the audiologist back.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Hearing Aid Pairing Wizard' }]} />

          {!brand ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-3">Which brand are your hearing aids?</p>
                <p className="text-xs text-muted-foreground mb-4">Look on the case, the device itself, or in your audiologist&apos;s paperwork.</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {BRANDS.map(b => (
                    <button key={b.id} onClick={() => setBrand(b.id)}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                      <p className="font-medium text-sm">{b.label}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex flex-wrap items-center gap-3 justify-between">
                  <Badge variant="outline">{guide!.brand}</Badge>
                  <div className="flex gap-2">
                    {(['iphone', 'android'] as Phone[]).map(p => (
                      <Button key={p} size="sm" variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                        {p === 'iphone' ? 'iPhone' : 'Android'}
                      </Button>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setBrand(null)}>Change brand</Button>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Pairing steps for {phone === 'iphone' ? 'iPhone' : 'Android'}</p>
                  <ol className="space-y-3">
                    {steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  {guide!.appName && guide!.appLink && (
                    <div className="mt-5 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Companion app (optional, but helpful)</p>
                      <a href={guide!.appLink} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                        {guide!.appName} <ExternalLink className="h-4 w-4" />
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Lets you adjust volume, switch programs, and find lost hearing aids.</p>
                    </div>
                  )}

                  {guide!.notes && guide!.notes.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-border">
                      <ul className="space-y-2">
                        {guide!.notes.map((n, i) => (
                          <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                            <Check className="h-3 w-3 text-green-600 shrink-0 mt-0.5" />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Trouble pairing?</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Forget the device first: iPhone Settings → Accessibility → Hearing Devices → tap the device → "Forget".</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Make sure both Bluetooth and Wi-Fi are on — pairing uses both.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Restart your phone too, not just the hearing aids.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Hearing aid batteries low? Some pairing fails until they have a full charge.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hearing-aid-tech-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Tech Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Daily-use tips and troubleshooting.</p>
              </Link>
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">For sight as well as hearing.</p>
              </Link>
              <Link to="/accessibility" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accessibility Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">All accessibility resources.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Pairing only needs to happen once. After that, your hearing aids reconnect automatically every time they turn on.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
