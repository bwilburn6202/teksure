import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  PhoneOff,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Phone,
  AlertTriangle,
} from 'lucide-react';

type Carrier = 'verizon' | 'att' | 'tmobile' | 'uscellular' | 'spectrum' | 'xfinity' | 'other';
type PhoneType = 'iphone' | 'android';

interface CarrierInfo {
  id: Carrier;
  name: string;
  freeService: string;
  freeServiceDetails: string;
  activation: string;
  premium?: string;
  appUrl?: string;
}

const CARRIERS: CarrierInfo[] = [
  {
    id: 'verizon',
    name: 'Verizon',
    freeService: 'Call Filter',
    freeServiceDetails:
      'Free basic version automatically blocks the highest-risk spam calls and labels others as "Potential Spam." Premium version ($3.99/mo per line) adds caller ID, personal block list, and a spam risk meter.',
    activation: 'Dial *86 from your Verizon phone, or download the Call Filter app from your app store and sign in with your My Verizon account.',
    premium: 'Call Filter Plus — $3.99/mo/line (or $7.99 for 3+ lines)',
    appUrl: 'https://www.verizon.com/solutions-and-services/call-filter/',
  },
  {
    id: 'att',
    name: 'AT&T',
    freeService: 'AT&T ActiveArmor',
    freeServiceDetails:
      'Free service (formerly AT&T Call Protect) that automatically blocks suspected fraud calls and warns about likely spam. Includes a personal block list and caller ID.',
    activation: 'Download the AT&T ActiveArmor Mobile Security app from the App Store or Google Play and sign in with your AT&T wireless account.',
    premium: 'ActiveArmor Advanced — $3.99/mo for reverse number lookup and enhanced caller ID',
    appUrl: 'https://www.att.com/security/',
  },
  {
    id: 'tmobile',
    name: 'T-Mobile',
    freeService: 'Scam Shield',
    freeServiceDetails:
      'Free service that blocks scam calls automatically and labels others as "Scam Likely." Includes free Caller ID and a monthly Scam Report.',
    activation: 'Dial #662# from your T-Mobile phone to enable Scam Block, or download the T-Mobile Scam Shield app.',
    premium: 'Scam Shield Premium — $4/mo for reverse number lookup and call categorization',
    appUrl: 'https://www.t-mobile.com/benefits/scam-shield',
  },
  {
    id: 'uscellular',
    name: 'US Cellular',
    freeService: 'Call Guardian',
    freeServiceDetails:
      'Free spam blocking and caller identification. Automatically blocks highest-risk calls and labels others as spam.',
    activation: 'Download the Call Guardian app from your app store and sign in with your US Cellular account.',
    appUrl: 'https://www.uscellular.com/support/call-guardian',
  },
  {
    id: 'spectrum',
    name: 'Spectrum Mobile',
    freeService: 'Spectrum Mobile Call Filter',
    freeServiceDetails:
      'Since Spectrum Mobile runs on Verizon\'s network, it offers a version of Call Filter. Basic filtering is free.',
    activation: 'Download Spectrum\'s Call Filter app (or Verizon Call Filter on Verizon-branded devices).',
    appUrl: 'https://www.spectrum.com/mobile',
  },
  {
    id: 'xfinity',
    name: 'Xfinity Mobile',
    freeService: 'Call Filter (Verizon)',
    freeServiceDetails:
      'Xfinity Mobile uses Verizon\'s network, so you get access to Verizon\'s Call Filter service for free.',
    activation: 'Download the Call Filter app from your app store and sign in using your Xfinity Mobile credentials.',
    appUrl: 'https://www.xfinity.com/mobile',
  },
  {
    id: 'other',
    name: 'Other / MVNO',
    freeService: 'Built-in phone settings + third-party apps',
    freeServiceDetails:
      'Smaller carriers (Mint, Visible, Cricket, Metro, Consumer Cellular, etc.) generally do not offer a full-featured carrier-level blocker. Your best options are your phone\'s built-in settings and a third-party app.',
    activation: 'Skip to the native phone settings and third-party app sections below.',
  },
];

interface ThirdPartyApp {
  name: string;
  pricing: string;
  notes: string;
  url: string;
}

const THIRD_PARTY_APPS: ThirdPartyApp[] = [
  {
    name: 'Nomorobo',
    pricing: '$1.99/mo on iOS (free for landlines & Android)',
    notes: 'Built from the FTC Robocall Challenge winner. Simple, effective, highly rated for older users.',
    url: 'https://www.nomorobo.com/',
  },
  {
    name: 'Hiya',
    pricing: 'Free with ads, Premium $14.99/yr',
    notes: 'Strong caller ID and spam detection. Free tier is often enough.',
    url: 'https://www.hiya.com/',
  },
  {
    name: 'RoboKiller',
    pricing: '$5.99/mo or $39.99/yr',
    notes: 'Uses "answer bots" that waste scammers\' time. Blocks the most calls of any app.',
    url: 'https://www.robokiller.com/',
  },
  {
    name: 'Truecaller',
    pricing: 'Free with ads, Premium $2.99/mo',
    notes: 'Huge crowdsourced database. Ad-supported free tier is usable.',
    url: 'https://www.truecaller.com/',
  },
];

export default function RobocallBlocker() {
  const [carrier, setCarrier] = useState<Carrier | null>(null);
  const [phoneType, setPhoneType] = useState<PhoneType | null>(null);

  const selectedCarrier = CARRIERS.find(c => c.id === carrier);

  return (
    <>
      <SEOHead
        title="Stop Robocalls — Step-by-Step Carrier Guide | TekSure"
        description="Get your exact carrier's instructions to stop robocalls. Free built-in tools from Verizon, AT&T, T-Mobile plus iPhone and Android settings and the best third-party apps."
        path="/tools/robocall-blocker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                <PhoneOff className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Stop Robocalls — Customized for Your Phone
            </h1>
            <p className="text-muted-foreground text-lg">
              Pick your carrier and phone type. We'll show you the exact steps to turn on every free robocall blocker available to you — from your carrier, your phone itself, and the best third-party apps.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section className="container py-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="text-xl font-bold">Select your phone carrier</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {CARRIERS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setCarrier(c.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium min-h-[48px] border text-center ${
                    carrier === c.id
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-background border-border hover:border-foreground/30'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </Card>

          {/* Step 2 */}
          {carrier && (
            <Card className="p-6 md:p-8 rounded-2xl mt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-bold">Select your phone type</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    ['iphone', 'iPhone'],
                    ['android', 'Android'],
                  ] as [PhoneType, string][]
                ).map(([v, label]) => (
                  <button
                    key={v}
                    onClick={() => setPhoneType(v)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium min-h-[48px] border ${
                      phoneType === v
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-background border-border hover:border-foreground/30'
                    }`}
                  >
                    <Smartphone className="h-4 w-4 inline mr-2" />
                    {label}
                  </button>
                ))}
              </div>
            </Card>
          )}
        </section>

        {/* Step 3: Instructions */}
        {carrier && phoneType && selectedCarrier && (
          <section className="container pb-12 max-w-3xl space-y-4">
            {/* 1. Carrier service */}
            <Card className="p-6 md:p-8 rounded-2xl border-rose-200 dark:border-rose-900">
              <div className="flex items-start gap-3 mb-3">
                <ShieldCheck className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Step 1 — Free carrier service
                  </Badge>
                  <h3 className="font-bold text-lg">{selectedCarrier.freeService}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {selectedCarrier.freeServiceDetails}
              </p>
              <div className="rounded-xl bg-muted p-4 mb-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  How to turn it on
                </div>
                <p className="text-sm">{selectedCarrier.activation}</p>
              </div>
              {selectedCarrier.premium && (
                <p className="text-xs text-muted-foreground italic mb-3">
                  Optional upgrade: {selectedCarrier.premium}
                </p>
              )}
              {selectedCarrier.appUrl && (
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <a href={selectedCarrier.appUrl} target="_blank" rel="noopener noreferrer">
                    Open carrier page <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
              )}
            </Card>

            {/* 2. Native phone setting */}
            <Card className="p-6 md:p-8 rounded-2xl">
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Step 2 — Your phone's built-in setting
                  </Badge>
                  <h3 className="font-bold text-lg">
                    {phoneType === 'iphone' ? 'Silence Unknown Callers' : 'Caller ID & Spam / Call Screen'}
                  </h3>
                </div>
              </div>
              {phoneType === 'iphone' ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    iOS has a built-in feature that sends any number not in your contacts straight to voicemail. It won't ring your phone, but legitimate calls still leave a voicemail so you don't miss anything important.
                  </p>
                  <ol className="space-y-2 text-sm pl-1">
                    <li className="flex gap-2">
                      <span className="font-bold text-rose-600">1.</span>
                      <span>Open <strong>Settings</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-rose-600">2.</span>
                      <span>Tap <strong>Apps</strong> → <strong>Phone</strong> (on iOS 18+) or just <strong>Phone</strong> on older iOS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-rose-600">3.</span>
                      <span>Scroll down and turn on <strong>Silence Unknown Callers</strong></span>
                    </li>
                  </ol>
                  <p className="text-xs text-muted-foreground italic">
                    Requires iOS 13 or later.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Android phones include call screening and spam filtering. The exact menu names depend on your manufacturer — here are the two most common.
                  </p>
                  <div className="rounded-xl bg-muted p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Google Pixel / stock Android
                    </div>
                    <p className="text-sm">
                      Open the <strong>Phone app</strong> → tap the three-dot menu → <strong>Settings</strong> → <strong>Caller ID & spam</strong> → turn on "Filter spam calls." On Pixel, also enable <strong>Call Screen</strong> so Google Assistant answers unknown calls for you.
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Samsung Galaxy
                    </div>
                    <p className="text-sm">
                      Open the <strong>Phone app</strong> → tap the three-dot menu → <strong>Settings</strong> → <strong>Block numbers</strong> → turn on "Block unknown/private numbers" and "Block spam and scam calls."
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* 3. Third party apps */}
            <Card className="p-6 md:p-8 rounded-2xl">
              <div className="flex items-start gap-3 mb-3">
                <Phone className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Step 3 — Third-party apps (optional)
                  </Badge>
                  <h3 className="font-bold text-lg">If you still get robocalls</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                These apps add an extra layer of protection. Most have free tiers that are good enough for most people.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {THIRD_PARTY_APPS.map(app => (
                  <div
                    key={app.name}
                    className="rounded-xl border p-4 flex flex-col"
                  >
                    <h4 className="font-semibold">{app.name}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{app.pricing}</p>
                    <p className="text-sm text-muted-foreground flex-1 mb-3">{app.notes}</p>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-rose-600 hover:underline inline-flex items-center gap-1"
                    >
                      Visit website <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* 4. DNC */}
            <Card className="p-6 md:p-8 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Step 4 — Join the National Do Not Call Registry
                  </Badge>
                  <h3 className="font-bold text-lg">Free, federal, 31 days to take effect</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Registering your number tells legitimate telemarketers to stop calling. It won't stop actual scammers (they already break the law), but it cuts way down on legal telemarketing calls.
              </p>
              <Button asChild className="rounded-xl bg-emerald-600 hover:bg-emerald-700">
                <a href="https://www.donotcall.gov/" target="_blank" rel="noopener noreferrer">
                  Register at donotcall.gov <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                </a>
              </Button>
            </Card>

            {/* Reporting */}
            <Card className="p-6 md:p-8 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-900">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Report bad calls to the feds</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Reporting helps the FTC and FCC track and prosecute illegal robocallers. Takes two minutes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer">
                    Report to FTC <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <a
                    href="https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FCC robocall guide <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
            </Card>
          </section>
        )}

        {!carrier && (
          <section className="container pb-24 max-w-3xl">
            <div className="text-center py-12 text-muted-foreground text-sm">
              Pick your carrier above to see your personalized instructions.
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
