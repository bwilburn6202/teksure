import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PhoneOff, ChevronRight, ExternalLink, CheckCircle2 } from 'lucide-react';

type Carrier = 'verizon' | 'att' | 'tmobile' | 'spectrum' | 'xfinity' | 'other';

interface CarrierGuide {
  name: string;
  appName: string;
  appLink: string;
  freeFeatures: string[];
  steps: string[];
  callToReport: string;
}

const CARRIERS: Record<Carrier, CarrierGuide> = {
  verizon: {
    name: 'Verizon',
    appName: 'Call Filter',
    appLink: 'https://www.verizon.com/solutions-and-services/call-filter/',
    freeFeatures: [
      'Spam call screening',
      'Spam alerts on your screen',
      'Auto-block of high-risk numbers',
    ],
    steps: [
      'Open the My Verizon app on your phone, or download Call Filter free from the App Store / Play Store.',
      'Sign in with your Verizon phone number.',
      'Tap "Settings" → turn on "Block Spam" and "Filter calls in voicemail".',
      'Set the spam protection level to "High" (it auto-rejects the worst offenders).',
    ],
    callToReport: '*611',
  },
  att: {
    name: 'AT&T',
    appName: 'AT&T ActiveArmor',
    appLink: 'https://www.att.com/security/security-apps/',
    freeFeatures: [
      'Automatic fraud blocking',
      'Spam risk warnings',
      'Personal block list',
    ],
    steps: [
      'Download "AT&T ActiveArmor Mobile Security" from the App Store or Play Store.',
      'Sign in with your AT&T account.',
      'Tap "Calls" → turn on "Block all fraud calls" and "Spam call alerts".',
      'Add any number you want to block under "Personal Block List".',
    ],
    callToReport: '7726 (SPAM)',
  },
  tmobile: {
    name: 'T-Mobile',
    appName: 'Scam Shield',
    appLink: 'https://www.t-mobile.com/customers/scam-shield',
    freeFeatures: [
      'Free Scam ID and Scam Block',
      'Caller ID for unknown numbers',
      'Send unknown to voicemail',
    ],
    steps: [
      'Dial #662# from your T-Mobile phone — this turns on Scam Block right away. You will hear a confirmation.',
      'Or download the "Scam Shield" app for full controls.',
      'In the app, turn on "Block Scam Likely calls" and "Caller ID".',
      '"Send unknown to voicemail" is a strong option if you only want to hear from saved contacts.',
    ],
    callToReport: '7726 (SPAM)',
  },
  spectrum: {
    name: 'Spectrum (home phone)',
    appName: 'Nomorobo (3rd-party, free)',
    appLink: 'https://www.nomorobo.com/',
    freeFeatures: [
      'Stops most robocalls before they ring',
      'Works on Spectrum home phone (free)',
    ],
    steps: [
      'Go to nomorobo.com and click "Sign Up". Pick "Spectrum" as your carrier.',
      'Enter your home phone number and email — they walk you through the rest.',
      'On Spectrum mobile, the carrier itself does not have an app yet. Use the iPhone or Android steps lower on this page.',
    ],
    callToReport: '7726 (SPAM)',
  },
  xfinity: {
    name: 'Xfinity (home phone)',
    appName: 'Xfinity Voice Advanced Call Forwarding',
    appLink: 'https://www.xfinity.com/support/articles/advanced-call-forwarding',
    freeFeatures: [
      'Built-in spam blocking on Xfinity Voice',
      'Anonymous Call Rejection',
    ],
    steps: [
      'Sign in at xfinity.com/myaccount.',
      'Open "Voice" → "Settings" → "Calling Features".',
      'Turn on "Anonymous Call Rejection" — this kills any caller who hides their number.',
      'Turn on "Call Screening" and add the worst repeat offenders to your block list.',
    ],
    callToReport: '7726 (SPAM)',
  },
  other: {
    name: 'Any phone',
    appName: 'iPhone & Android built-in tools',
    appLink: 'https://www.consumer.ftc.gov/articles/0259-how-stop-unwanted-calls',
    freeFeatures: [
      'iPhone: Silence Unknown Callers (free, built-in)',
      'Android: Caller ID & Spam Protection (free, built-in)',
      'Add yourself to the Do Not Call Registry',
    ],
    steps: [
      'iPhone: Settings → Phone → "Silence Unknown Callers" → turn ON. Calls from anyone not in your contacts will go straight to voicemail.',
      'Android: Open the Phone app → tap the three dots top-right → Settings → Caller ID & Spam → turn ON "Filter spam calls".',
      'Register your number free at donotcall.gov — covers landlines and mobile.',
    ],
    callToReport: '7726 (SPAM)',
  },
};

export default function RobocallBlockerSetup() {
  const [carrier, setCarrier] = useState<Carrier | null>(null);
  const guide = carrier ? CARRIERS[carrier] : null;

  return (
    <>
      <SEOHead
        title="Robocall Blocker Setup"
        description="Stop robocalls and spam calls in 5 minutes. Step-by-step setup for Verizon, AT&T, T-Mobile, Spectrum, Xfinity, iPhone, and Android."
        path="/tools/robocall-blocker-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <PhoneOff className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Robocall Blocker Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Stop the &quot;Scam Likely&quot; calls in five minutes. Pick your carrier — we will walk you through the free tools you already have.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Robocall Blocker Setup' },
            ]}
          />

          {!carrier && (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-4">Which carrier are you on?</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(Object.keys(CARRIERS) as Carrier[]).map(c => (
                    <button
                      key={c}
                      onClick={() => setCarrier(c)}
                      className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                    >
                      <p className="font-medium text-sm">{CARRIERS[c].name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Free: {CARRIERS[c].appName}</p>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Not sure? Pick &quot;Any phone&quot; — those steps work on every iPhone and Android, regardless of carrier.
                </p>
              </CardContent>
            </Card>
          )}

          {guide && (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <Badge variant="outline" className="mb-1">{guide.name}</Badge>
                    <p className="text-sm font-semibold">{guide.appName}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setCarrier(null)}>Change carrier</Button>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Free protection you can turn on today</p>
                  <ul className="space-y-2 mb-5">
                    {guide.freeFeatures.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
                  <ol className="space-y-3 mb-5">
                    {guide.steps.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      <strong>Bonus:</strong> When a spam text comes in, forward it to <strong>{guide.callToReport}</strong>. It is free, takes 5 seconds, and helps your carrier block more of them for everyone.
                    </p>
                  </div>

                  <a href={guide.appLink} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline">
                    Open {guide.name}&apos;s official setup page <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Add yourself to the Do Not Call Registry</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Free, run by the FTC. Real telemarketers must stop within 31 days. (Scammers ignore it — that is what the carrier tools above are for.)
                  </p>
                  <a href="https://www.donotcall.gov/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    donotcall.gov <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Got a weird text? Check it here.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Report a Scam Call</p>
                <p className="text-xs text-muted-foreground mt-0.5">Build an FTC report.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">All scam protection in one place.</p>
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> No carrier app collects your call list — these are free tools your carrier already runs on the network.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
