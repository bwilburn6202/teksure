import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PhoneOff, ExternalLink, AlertTriangle } from 'lucide-react';

type App = 'hiya' | 'truecaller' | 'robokiller' | 'nomorobo' | 'iphone-live-vm' | 'pixel-call-screen';

interface ScreenerApp {
  name: string;
  who: string;
  setup: string[];
  use: string[];
  cost: string;
  worksOn: string;
  notes: string[];
  link: string;
}

const APPS: Record<App, ScreenerApp> = {
  'hiya': {
    name: 'Hiya',
    who: 'Best for: people who want a free, well-known caller-ID and spam-blocking app. Powers the built-in caller ID on Samsung and AT&T phones.',
    setup: [
      'Install "Hiya: Caller ID & Block" from the App Store or Play Store.',
      'Open the app and grant phone and contacts permissions when asked.',
      'On iPhone: Settings > Phone > Call Blocking & Identification > turn on Hiya.',
      'On Android: set Hiya as your default caller-ID app when prompted.',
    ],
    use: [
      'Hiya labels incoming calls as "Spam Risk", "Fraud", or with the business name.',
      'Tap a missed call to report it as spam if it slipped through.',
      'Premium adds auto-block for known spam and a personal block list.',
    ],
    cost: 'Free tier covers most users. Premium runs around 4 dollars per month.',
    worksOn: 'iPhone and Android',
    notes: [
      'Does NOT upload your contacts. A reasonable privacy track record.',
      'Built into many Samsung Galaxy phones already (Smart Call is powered by Hiya).',
    ],
    link: 'https://www.hiya.com/products/hiya-app',
  },
  'truecaller': {
    name: 'Truecaller',
    who: 'Best for: identifying unknown numbers. Has the largest caller database in the world, but read the privacy notes below.',
    setup: [
      'Install "Truecaller" from the App Store or Play Store.',
      'Sign up with your phone number.',
      'Grant the permissions it asks for (this is where the privacy concern starts).',
      'Set Truecaller as your default caller-ID app when prompted.',
    ],
    use: [
      'Incoming calls show a name and a spam score.',
      'Tap any number to see community-reported spam reports.',
      'Premium removes ads and adds extra blocking.',
    ],
    cost: 'Free with ads. Premium around 4 dollars per month.',
    worksOn: 'iPhone and Android',
    notes: [
      'Privacy concern: historically, Truecaller has uploaded users contact lists to build its caller-ID database. That means your friends numbers may end up in their cloud without their consent.',
      'If privacy matters to you, Hiya or Nomorobo are safer picks.',
    ],
    link: 'https://www.truecaller.com',
  },
  'robokiller': {
    name: 'RoboKiller (with RoboShield)',
    who: 'Best for: people drowning in robocalls who want aggressive, automatic blocking. RoboShield is the lighter free version of the same product.',
    setup: [
      'Install "RoboKiller" from the App Store or Play Store.',
      'Sign up and pick a plan (there is a free trial).',
      'Follow the in-app steps to forward unanswered calls to RoboKiller (carrier-specific codes).',
      'On iPhone: Settings > Phone > Call Blocking & Identification > turn on RoboKiller.',
    ],
    use: [
      'Known spam calls get answered by Answer Bots that waste the scammers time.',
      'You see a daily summary of blocked calls.',
      'RoboShield (free version) gives basic spam labeling without the answer bots.',
    ],
    cost: 'About 5 dollars per month or 40 dollars per year. RoboShield is free.',
    worksOn: 'iPhone and Android',
    notes: [
      'The most aggressive blocker on this list. Sometimes blocks legitimate calls, so check the blocked list weekly.',
      'Voicemails get transcribed in the app, which is helpful for screening.',
    ],
    link: 'https://www.robokiller.com',
  },
  'nomorobo': {
    name: 'Nomorobo',
    who: 'Best for: people who want a quiet, no-fuss blocker. Originally a free landline service, now also a phone app.',
    setup: [
      'For landline (free): visit nomorobo.com and pick your phone carrier. Follow the simultaneous-ring setup steps.',
      'For mobile: install "Nomorobo Robocall Blocking" from the App Store or Play Store.',
      'Sign up for the 14-day free trial.',
      'On iPhone: Settings > Phone > Call Blocking & Identification > turn on Nomorobo.',
    ],
    use: [
      'Known robocalls are silenced automatically. Your phone barely rings.',
      'Real callers ring through normally.',
      'Tap any blocked call to report a false positive.',
    ],
    cost: 'Free for landlines. About 2 dollars per month for mobile.',
    worksOn: 'Landline, iPhone, Android',
    notes: [
      'Best landline option in the country. If a parent still has a home phone, set this up for them.',
      'Quieter approach than RoboKiller. No answer bots.',
    ],
    link: 'https://www.nomorobo.com',
  },
  'iphone-live-vm': {
    name: 'iPhone Live Voicemail',
    who: 'Best for: iPhone users on iOS 17 or newer. Built in. No app to install.',
    setup: [
      'Update to iOS 17 or newer (Settings > General > Software Update).',
      'Open Settings > Phone > Live Voicemail.',
      'Turn it on. That is the whole setup.',
    ],
    use: [
      'When a caller leaves a voicemail, you see a live transcript on the lock screen as they speak.',
      'If it is a real person you want to talk to, tap "Accept" to pick up mid-message.',
      'If it is a robocall or scam, ignore it and the message gets saved (or not).',
    ],
    cost: 'Free. Built into iOS 17+.',
    worksOn: 'iPhone (iOS 17 and newer)',
    notes: [
      'Pairs perfectly with "Silence Unknown Callers" (Settings > Phone). Together they handle most spam.',
      'No data leaves your phone. The transcription happens on-device.',
    ],
    link: 'https://support.apple.com/guide/iphone/live-voicemail-iphe35d02There/ios',
  },
  'pixel-call-screen': {
    name: 'Pixel Call Screen',
    who: 'Best for: Google Pixel owners. Built-in call screening that uses Google Assistant to answer for you.',
    setup: [
      'On a Pixel phone, open the Phone app.',
      'Tap the three-dot menu > Settings > Spam and Call Screen > Call Screen.',
      'Turn on "Unknown call settings" and pick how aggressive you want screening to be.',
      'Choose Automatically Screen for spam-suspected calls (recommended).',
    ],
    use: [
      'When an unknown number calls, Google Assistant answers and asks who is calling.',
      'You see a live transcript of what the caller says.',
      'Tap "Pick up", "Mark as spam", or let it go to voicemail.',
    ],
    cost: 'Free. Built into Pixel phones.',
    worksOn: 'Google Pixel phones only',
    notes: [
      'The single best built-in call-screening feature on any phone today.',
      'Most robocalls hang up the moment the Assistant answers.',
    ],
    link: 'https://support.google.com/phoneapp/answer/9118387',
  },
};

const APP_OPTIONS: { id: App; label: string }[] = [
  { id: 'hiya',              label: 'Hiya (free, trusted)' },
  { id: 'truecaller',        label: 'Truecaller (privacy concern)' },
  { id: 'robokiller',        label: 'RoboKiller / RoboShield' },
  { id: 'nomorobo',          label: 'Nomorobo (best for landlines)' },
  { id: 'iphone-live-vm',    label: 'iPhone Live Voicemail' },
  { id: 'pixel-call-screen', label: 'Pixel Call Screen' },
];

export default function CallScreenerSetup() {
  const [app, setApp] = useState<App>('hiya');
  const a = APPS[app];

  return (
    <>
      <SEOHead
        title="Call Screener Setup"
        description="Compare Hiya, Truecaller, RoboKiller, Nomorobo, iPhone Live Voicemail, and Pixel Call Screen. Set up the right call-screening tool for your phone in minutes."
        path="/tools/call-screener-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <PhoneOff className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Call Screener Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Stop answering robocalls. Pick the screener that fits your phone, then set it up in under five minutes.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Call Screener Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which screener do you want to set up?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {APP_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setApp(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      app === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {app === 'truecaller' && (
            <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
              <CardContent className="p-5 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Privacy heads-up about Truecaller</p>
                  <p className="text-muted-foreground">
                    Truecaller has a track record of uploading users contact lists to build its caller-ID database. Your friends numbers and names can end up in their cloud without their knowledge. If that bothers you, choose Hiya, Nomorobo, or your phones built-in option instead.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{a.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {a.who}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                <Badge variant="outline" className="text-xs justify-start">Cost: {a.cost}</Badge>
                <Badge variant="outline" className="text-xs justify-start">Works on: {a.worksOn}</Badge>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-1.5 mb-4">
                {a.setup.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to use it</p>
              <ol className="space-y-1.5 mb-4">
                {a.use.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1">
                {a.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">&bull;</span><span>{n}</span></li>
                ))}
              </ul>

              <a href={a.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Official help <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five universal call-screening habits</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Let unknown numbers go to voicemail. Real people leave a message.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Never press a number to "stop" a robocall. That confirms your line is active.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Add the doctor, pharmacy, and bank to your contacts so they ring through.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Turn on "Silence Unknown Callers" on iPhone for an extra layer.</span></li>
                <li className="flex gap-2"><span className="text-primary">&bull;</span><span>Report scam calls at reportfraud.ftc.gov so others get warned.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/caller-id-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Caller ID Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Show who is calling before you answer.</p>
              </Link>
              <Link to="/tools/robocall-blocker-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Robocall Blocker Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Block known robocallers automatically.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check if a text is a scam in seconds.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
