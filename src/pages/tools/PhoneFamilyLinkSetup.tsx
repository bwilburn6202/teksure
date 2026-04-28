import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, ExternalLink, AlertTriangle } from 'lucide-react';

type Platform = 'apple' | 'google' | 'amazon';

interface PlatformGuide {
  name: string;
  who: string;
  setup: string[];
  daily: string[];
  cost: string;
  ages: string;
  notes: string[];
  link: string;
}

const PLATFORMS: Record<Platform, PlatformGuide> = {
  'apple': {
    name: 'Apple Screen Time + Family Sharing',
    who: 'Best for: an iPhone or iPad you let the grandkids borrow, or a hand-me-down iPhone they now use as their own. Built into iOS — no extra app to install.',
    setup: [
      'Open Settings on your iPhone or iPad → tap your name at the top → Family Sharing.',
      'Tap "Add Member" → "Create Child Account" (under 13) or "Invite People" if the child already has an Apple ID.',
      'Follow the prompts — you will be asked for a parent or guardian credit card on file (Apple uses this to confirm an adult is setting it up; you are not charged).',
      'Once the child account is added, go back to Settings → Screen Time → Family → tap the child\'s name.',
      'Turn on "Screen Time" for that child, then set: Downtime (no apps after bedtime), App Limits (e.g. 1 hour of games), Communication Limits, and Content & Privacy Restrictions.',
      'Set a Screen Time passcode that the child does NOT know. Write it down somewhere safe.',
    ],
    daily: [
      'When a limit is hit, the child sees a screen asking permission to keep going.',
      'You get a notification on your iPhone — tap "Approve" or "Don\'t Approve".',
      'Open Settings → Screen Time anytime to see how much time was spent in each app yesterday and this week.',
      'Use "Ask to Buy" so any App Store download or in-app purchase needs your approval first.',
    ],
    cost: 'Free — built into every iPhone and iPad.',
    ages: 'Designed for children under 18. Restrictions are strictest under 13.',
    notes: [
      'Screen Time passcode is separate from your phone passcode. If you forget it, recovery requires your Apple ID password.',
      'A clever child can sometimes work around limits by changing the date/time. Lock that down: Screen Time → Content & Privacy Restrictions → "Date & Time" → Don\'t Allow.',
      'If you share the device, sign out of your Apple ID first or set up a separate user — Apple does not support multiple full users on one iPhone, but Screen Time profiles help.',
    ],
    link: 'https://support.apple.com/en-us/HT201304',
  },
  'google': {
    name: 'Google Family Link',
    who: 'Best for: an Android phone or tablet, or a Chromebook the grandkids use. Works with any Android device running Android 7 or newer.',
    setup: [
      'On YOUR phone (the grandparent\'s), install "Google Family Link" from the Play Store or App Store (it works from an iPhone too).',
      'Open Family Link → tap "+" → "Add a child" → follow prompts to create a Google Account for the child (under 13 needs parent consent — you give it).',
      'On the CHILD\'S phone or tablet, sign out of any other Google account → sign in with the new child account.',
      'Family Link will prompt you to set: daily screen-time limits, bedtime hours, app approvals, and content filters for YouTube and the Play Store.',
      'Approve or block specific apps from your phone — when the child tries to install something, you get a notification first.',
      'Turn on Location sharing if you want to see where the device is on a map.',
    ],
    daily: [
      'Open Family Link on your phone to see today\'s screen-time report and which apps were used.',
      'Tap an app → set a per-app limit (e.g. 30 min/day for TikTok).',
      'Use the "Lock now" button to remotely lock the device — for example at dinner time.',
      'Bedtime hours automatically lock the device until morning.',
    ],
    cost: 'Free.',
    ages: 'Default rules tighten for children under 13. Once a child turns 13, Google asks them whether they want to keep parental supervision on.',
    notes: [
      'Family Link does NOT block every website — it filters Google Search and YouTube Kids well, but a determined child using a non-Google browser can still find things. Pair it with a content filter at the home Wi-Fi level for stronger protection.',
      'On a Chromebook, Family Link controls the whole device including which Chrome extensions are allowed.',
      'If the child also has an iPhone, Family Link only manages screen-time and location on that phone — Apple\'s system controls actual app limits.',
    ],
    link: 'https://families.google.com/familylink/',
  },
  'amazon': {
    name: 'Amazon Kids+ (Fire Tablets and Echo)',
    who: 'Best for: families who already have a Fire tablet or want a low-cost dedicated kids device. Amazon Kids+ is the subscription that adds books, shows, and games — but the parental controls themselves are free on every Fire tablet.',
    setup: [
      'On the Fire tablet, swipe down from the top → tap Settings → "Profiles & Family Library" → "Add a Child".',
      'Enter the child\'s name, birthday, and pick a profile photo.',
      'Set a Parent Profile PIN — a 4-digit code that is required to leave the kid profile.',
      'Pick which apps, books, and videos from YOUR library the child can see.',
      'Set daily time limits: total screen time, time per category (reading vs. video vs. games), bedtime, and "learn first" rules (e.g. read 30 min before games unlock).',
      'If you subscribe to Amazon Kids+ (about $5/month for Prime members), thousands of age-graded books, shows, and games are added automatically.',
    ],
    daily: [
      'Hand the child the tablet — they automatically land in their kid profile, locked in.',
      'To check usage, swipe down → "Parent Dashboard" → enter your PIN. You see minutes per app, books read, videos watched.',
      'Tap "Add Time" or "Pause" if you want to give a reward or end screen time early.',
      'On Echo Show or Echo Dot Kids, the same controls apply through the Alexa app — set quiet hours and which skills can be used.',
    ],
    cost: 'Parental controls: free. Amazon Kids+ content subscription: about $5/month for Prime, $8/month for non-Prime.',
    ages: 'Designed for ages 3-12. Older kids will outgrow the kid catalog quickly.',
    notes: [
      'A Fire tablet locked in kid mode is the closest thing to a true "child-only" device. The child cannot install random apps, browse the open web, or buy things.',
      'Amazon Kids+ content is well-curated and ad-free. Regular Fire tablets in kid mode without the subscription have very limited content.',
      'The Fire Kids Edition tablet ships with a thick bumper case AND a 2-year worry-free guarantee — if the child breaks it, Amazon replaces it for free.',
    ],
    link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GTM3JDLBE7TGT89J',
  },
};

const PLATFORM_OPTIONS: { id: Platform; label: string }[] = [
  { id: 'apple',  label: 'Apple Screen Time + Family Sharing' },
  { id: 'google', label: 'Google Family Link (Android)' },
  { id: 'amazon', label: 'Amazon Kids+ (Fire Tablet)' },
];

export default function PhoneFamilyLinkSetup() {
  const [platform, setPlatform] = useState<Platform>('apple');
  const p = PLATFORMS[platform];

  return (
    <>
      <SEOHead
        title="Phone Parental Controls Setup for Grandkids"
        description="Set up Apple Screen Time, Google Family Link, or Amazon Kids+ on the phone or tablet your grandkids use. Step-by-step instructions for grandparents and shared-device families."
        path="/tools/phone-family-link-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Parental Controls for Grandkids</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Got a spare phone or tablet the grandkids use at your house? Set up screen-time limits and content filters in about 15 minutes — no extra apps to buy.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Phone Parental Controls Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which device do the grandkids use?</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {PLATFORM_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setPlatform(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      platform === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{p.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.who}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                <Badge variant="outline" className="text-xs justify-start">Cost: {p.cost}</Badge>
                <Badge variant="outline" className="text-xs justify-start">Ages: {p.ages}</Badge>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">First-time setup</p>
              <ol className="space-y-1.5 mb-4">
                {p.setup.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Day-to-day use</p>
              <ol className="space-y-1.5 mb-4">
                {p.daily.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1">
                {p.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>

              <a href={p.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Official help <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Screen-time limits are educational tools, not 100% blocks</p>
                <p className="text-muted-foreground">
                  Every system on this page can be worked around by a determined kid — by changing the device clock, using a friend{"'"}s phone, or finding a loophole the system has not patched yet. Treat these controls as a way to start a conversation about healthy phone use, not as a guarantee. The most reliable thing is still: keep the device in a shared room, sit with them sometimes, and ask what they{"'"}re watching.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five universal rules for shared-device families</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Sign yourself OUT of email, banking, and social-media apps before handing the device over. A grandkid does not need access to your inbox.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Set a separate parental-control PIN that the kids do not know — and write it down somewhere only adults see.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Turn off in-app purchases everywhere. One tap on the wrong button can cost real money.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Charge the device in the kitchen or living room overnight, not in a bedroom.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Talk with the parents first. Whatever rules you put on the device should match the parents{"'"} rules at home, or you create confusion.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get a spare phone or tablet ready to share.</p>
              </Link>
              <Link to="/tools/kids-online-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Kids Online Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wider safety habits beyond the device itself.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Teach grandkids to spot a fake text together.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
