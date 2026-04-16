import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PhoneOff, ShieldCheck, CheckCircle, ChevronDown, ChevronUp, ExternalLink, Smartphone, AlertTriangle } from 'lucide-react';

type Carrier = 'att' | 'tmobile' | 'verizon' | 'other' | null;

interface CarrierInfo {
  name: string;
  app: string;
  appDescription: string;
  steps: string[];
}

const carrierData: Record<Exclude<Carrier, null | 'other'>, CarrierInfo> = {
  att: {
    name: 'AT&T',
    app: 'AT&T ActiveArmor',
    appDescription: 'Free app that blocks fraud calls and labels suspected spam. Available on the App Store and Google Play.',
    steps: [
      'Download "AT&T ActiveArmor" from the App Store (iPhone) or Google Play (Android).',
      'Open the app and sign in with your AT&T account (the same email and password you use to pay your bill).',
      'The app will ask for permission to access your phone and contacts — tap "Allow" for each.',
      'Turn on "Automatic Fraud Blocking" in the main settings screen.',
      'Turn on "Suspected Spam Labels" so you can see warnings on incoming calls.',
      'Optional: Add your own numbers to the "Block List" for specific callers you want to stop.',
    ],
  },
  tmobile: {
    name: 'T-Mobile',
    app: 'T-Mobile Scam Shield',
    appDescription: 'Free app that identifies and blocks scam calls. Works on all T-Mobile and Metro by T-Mobile plans.',
    steps: [
      'Download "Scam Shield" from the App Store (iPhone) or Google Play (Android).',
      'Open the app and sign in with your T-Mobile ID (the same account you use online or in the T-Mobile app).',
      'Tap "Enable Scam Block" — this will automatically block calls identified as scams.',
      'Turn on "Scam ID" to see a warning label on calls that might be spam.',
      'Optional: Turn on "Caller ID" to see the name of unknown callers (free on most plans).',
      'Check the "Blocked Calls" tab to see what the app has caught for you.',
    ],
  },
  verizon: {
    name: 'Verizon',
    app: 'Verizon Call Filter',
    appDescription: 'Free app that detects and filters spam calls. Comes included with every Verizon wireless plan.',
    steps: [
      'Download "Call Filter" from the App Store (iPhone) or Google Play (Android).',
      'Open the app and it will automatically detect your Verizon account.',
      'Tap "Activate" to turn on spam detection and blocking.',
      'Go to "Filter Level" and set it to "Block spam calls" for the strongest protection.',
      'Turn on "Silence Unknown Callers" within the app for an extra layer of protection.',
      'Check your "Spam List" regularly to make sure no important calls were blocked by mistake.',
    ],
  },
};

const universalTips = [
  {
    title: 'Register with the Do Not Call List',
    description: 'Add your phone number to the National Do Not Call Registry at donotcall.gov or by calling 1-888-382-1222. Legitimate telemarketers must stop calling within 31 days. This will not stop scammers, but it will reduce legal sales calls.',
  },
  {
    title: 'Turn on "Silence Unknown Callers" (iPhone)',
    description: 'Go to Settings, then Phone, then Silence Unknown Callers, and turn it on. Calls from numbers not in your contacts, recent calls, or Siri suggestions will go straight to voicemail.',
  },
  {
    title: 'Turn on spam filter (Android)',
    description: 'Open the Phone app, tap the three-dot menu, then Settings, then Caller ID & spam, and turn on "Filter spam calls." Suspected spam calls will be silently blocked.',
  },
  {
    title: 'Never press a number when prompted',
    description: 'If a robocall tells you to "press 1 to be removed from our list," hang up. Pressing any number confirms your number is active and you will get MORE calls.',
  },
  {
    title: 'Do not answer calls from unknown numbers',
    description: 'Let unknown calls go to voicemail. Legitimate callers will leave a message. If it is important, you can always call them back.',
  },
  {
    title: 'Report spam calls to the FTC',
    description: 'If you receive an unwanted call, report it at reportfraud.ftc.gov. This helps the FTC take action against illegal callers.',
  },
];

const testProtectionTips = [
  'When you get a spam call, check if your carrier app flagged it. If it did, your protection is working.',
  'Try calling yourself from a different phone — your carrier app should not block calls from real numbers.',
  'Check your voicemail after enabling spam filtering to make sure real messages are still getting through.',
  'If you are still getting many spam calls after 2 weeks, try increasing your filter level in your carrier app.',
];

export default function RobocallBlocker() {
  const [selectedCarrier, setSelectedCarrier] = useState<Carrier>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [completedTips, setCompletedTips] = useState<Set<number>>(new Set());
  const [showTestTips, setShowTestTips] = useState(false);

  const toggleStep = (key: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleTip = (index: number) => {
    setCompletedTips(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const carrierStepCount = selectedCarrier && selectedCarrier !== 'other'
    ? carrierData[selectedCarrier].steps.length
    : 0;

  const totalTasks = carrierStepCount + universalTips.length;
  const completedCount = completedSteps.size + completedTips.size;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <>
      <SEOHead
        title="Robocall Blocker Guide — Stop Spam Calls for Free | TekSure"
        description="Step-by-step guide to block robocalls and spam calls on AT&T, T-Mobile, Verizon, and any carrier. Set up free call blocking in minutes."
        path="/tools/robocall-blocker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Robocall Blocker' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                <PhoneOff className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Robocall Blocker Guide</h1>
            <p className="text-muted-foreground text-lg">
              Follow these steps to block robocalls and spam calls on your phone. Works with every major carrier.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Progress */}
          {totalTasks > 0 && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Your progress</span>
                  <span className="text-muted-foreground">{completedCount} of {totalTasks} steps done</span>
                </div>
                <Progress value={progressPercent} className="h-3" aria-label={`${progressPercent}% complete`} />
                {progressPercent === 100 && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Your phone is now protected against spam calls.
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 1: Select carrier */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Step 1: Select Your Carrier</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Which phone carrier do you use? This determines which free app to download.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {([['att', 'AT&T'], ['tmobile', 'T-Mobile'], ['verizon', 'Verizon'], ['other', 'Other']] as const).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={selectedCarrier === key ? 'default' : 'outline'}
                    onClick={() => { setSelectedCarrier(key); setCompletedSteps(new Set()); }}
                    className="h-auto py-3"
                    aria-pressed={selectedCarrier === key}
                  >
                    <Smartphone className="h-4 w-4 mr-2" aria-hidden="true" />
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Carrier-specific instructions */}
          {selectedCarrier && selectedCarrier !== 'other' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Step 2: Set Up {carrierData[selectedCarrier].app}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 text-sm">
                  <p className="font-medium text-blue-800 dark:text-blue-300">{carrierData[selectedCarrier].app}</p>
                  <p className="text-blue-700 dark:text-blue-400 mt-1">{carrierData[selectedCarrier].appDescription}</p>
                </div>
                <div className="space-y-2">
                  {carrierData[selectedCarrier].steps.map((step, i) => {
                    const key = `carrier-${i}`;
                    return (
                      <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <input
                          type="checkbox"
                          checked={completedSteps.has(key)}
                          onChange={() => toggleStep(key)}
                          className="mt-0.5 h-4 w-4 rounded"
                          aria-label={`Mark step ${i + 1} as done`}
                        />
                        <span className={completedSteps.has(key) ? 'line-through text-muted-foreground' : ''}>
                          <span className="font-medium">Step {i + 1}:</span> {step}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCarrier === 'other' && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm space-y-2">
                    <p className="font-medium">If your carrier is not listed, do not worry.</p>
                    <p className="text-muted-foreground">
                      The universal tips below work on every phone and carrier. You can also contact your carrier directly and ask if they offer a free spam call blocking service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Universal tips */}
          {selectedCarrier && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {selectedCarrier !== 'other' ? 'Step 3: ' : ''}Universal Protection Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground mb-3">These tips work on every phone, regardless of your carrier.</p>
                {universalTips.map((tip, i) => (
                  <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={completedTips.has(i)}
                      onChange={() => toggleTip(i)}
                      className="mt-0.5 h-4 w-4 rounded"
                      aria-label={`Mark "${tip.title}" as done`}
                    />
                    <div className={completedTips.has(i) ? 'text-muted-foreground' : ''}>
                      <p className={`font-medium ${completedTips.has(i) ? 'line-through' : ''}`}>{tip.title}</p>
                      <p className="text-muted-foreground mt-0.5">{tip.description}</p>
                    </div>
                  </label>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Test your protection */}
          {selectedCarrier && (
            <div className="rounded-2xl border p-6">
              <button onClick={() => setShowTestTips(!showTestTips)} className="flex items-center gap-3 w-full text-left">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold text-sm flex-1">Test Your Protection</span>
                {showTestTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {showTestTips && (
                <ul className="mt-4 space-y-2">
                  {testProtectionTips.map((tip, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Do Not Call link */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">National Do Not Call Registry</p>
                  <p className="text-sm text-muted-foreground mt-1">Register your phone number for free to reduce telemarketing calls.</p>
                </div>
                <a
                  href="https://www.donotcall.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline flex-shrink-0"
                  aria-label="Visit donotcall.gov (opens in a new tab)"
                >
                  donotcall.gov <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
