import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  Lock,
  KeyRound,
  CreditCard,
  UserMinus,
  MessageCircle,
  Smartphone,
  Database,
  Megaphone,
  Users,
  Eye,
  Bug,
  ExternalLink,
  ArrowRight,
  Apple,
  Monitor,
  Globe,
  CheckCircle2,
  BookOpen,
  Clock,
} from 'lucide-react';

type QuickWin = {
  icon: typeof Shield;
  title: string;
  time: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

const quickWins: QuickWin[] = [
  {
    icon: Lock,
    title: 'Turn on 2FA on your email',
    time: '5 min',
    description:
      'Your email is the master key to every account you own. Two-factor authentication makes it nearly impossible for someone to break in even if they steal your password.',
  },
  {
    icon: KeyRound,
    title: 'Use a password manager',
    time: '15 min one time',
    description:
      'Stop reusing the same three passwords everywhere. A password manager remembers a unique, strong password for every site — and saves hours of resets later.',
  },
  {
    icon: CreditCard,
    title: 'Freeze your credit at all 3 bureaus',
    time: '20 min — free',
    description:
      'A credit freeze blocks new accounts from being opened in your name. Free at Equifax, Experian, and TransUnion. The single most powerful anti-identity-theft step.',
  },
  {
    icon: UserMinus,
    title: 'Opt out of top data brokers',
    time: '30 min',
    description:
      'Sites like Whitepages, Spokeo, and BeenVerified publish your address, phone number, and family for anyone to see. You can request removal from each.',
    link: '/data-broker-removal',
    linkLabel: 'See the removal guide',
  },
  {
    icon: MessageCircle,
    title: 'Switch to Signal or iMessage for sensitive chats',
    time: '2 min',
    description:
      'SMS texts are not encrypted — your carrier and anyone with the right tools can read them. Signal and iMessage scramble your messages so only the recipient can read them.',
  },
  {
    icon: Smartphone,
    title: 'Review app permissions on your phone',
    time: '10 min',
    description:
      'Most apps ask for far more than they need — location, contacts, microphone. Pull back permissions for any app that does not absolutely need them.',
  },
];

type Threat = {
  icon: typeof Database;
  name: string;
  description: string;
};

const threats: Threat[] = [
  {
    icon: Database,
    name: 'Data brokers',
    description:
      'Companies that buy and sell your personal information — name, address, phone, family, income, shopping history. You never gave them permission directly, but they have you anyway, often pulled from public records and other sites you used.',
  },
  {
    icon: Megaphone,
    name: 'Ad networks',
    description:
      'Hidden trackers embedded on most websites that follow you across the internet. They build a profile of what you read, buy, and search, and sell it to advertisers. This is why an ad for shoes follows you for a week after one click.',
  },
  {
    icon: Users,
    name: 'Social media platforms',
    description:
      'Facebook, Instagram, TikTok, and X are free because you are the product. Every like, scroll, and pause is logged. The data is then sold or used to keep you scrolling longer.',
  },
  {
    icon: Eye,
    name: 'Government surveillance',
    description:
      'In the US, agencies can request data from phone and internet providers, often without a warrant. Knowing what is collected — call records, location data, search history — helps you make informed choices about what to put online.',
  },
  {
    icon: Bug,
    name: 'Hackers and breaches',
    description:
      'Companies get breached almost every week — Yahoo, Equifax, T-Mobile, Marriott. When they do, your email, password, address, and sometimes Social Security Number end up for sale. Strong unique passwords and 2FA limit the damage.',
  },
];

type PlatformStep = {
  feature: string;
  description: string;
};

type Platform = {
  id: string;
  label: string;
  icon: typeof Apple;
  intro: string;
  steps: PlatformStep[];
  externalLink?: { url: string; label: string };
};

const platforms: Platform[] = [
  {
    id: 'iphone',
    label: 'iPhone',
    icon: Apple,
    intro: 'Apple has the most built-in privacy tools of any phone maker. Most are off by default — turn them on.',
    steps: [
      {
        feature: 'App Tracking Transparency',
        description:
          'Settings → Privacy & Security → Tracking. Turn off "Allow Apps to Request to Track" so apps cannot follow you across other apps and websites.',
      },
      {
        feature: 'Mail Privacy Protection',
        description:
          'Settings → Mail → Privacy Protection. Hides your IP address and prevents senders from seeing if and when you opened their email.',
      },
      {
        feature: 'Hide My Email',
        description:
          'Settings → [your name] → iCloud → Hide My Email (requires iCloud+). Generates a unique throwaway email for any site so your real address stays private.',
      },
      {
        feature: 'Advanced Data Protection',
        description:
          'Settings → [your name] → iCloud → Advanced Data Protection. End-to-end encrypts almost everything in iCloud — even Apple cannot read it.',
      },
    ],
  },
  {
    id: 'android',
    label: 'Android',
    icon: Smartphone,
    intro: 'Android privacy lives mostly inside your Google account. Tighten it once and the changes carry across every device signed in.',
    steps: [
      {
        feature: 'Google Dashboard',
        description:
          'Visit myaccount.google.com/dashboard for a single view of every Google service tied to you and the data each one stores.',
      },
      {
        feature: 'Activity Controls',
        description:
          'myaccount.google.com/activitycontrols. Turn off Web & App Activity, Location History, and YouTube History — or set them to auto-delete.',
      },
      {
        feature: 'Auto-delete',
        description:
          'In Activity Controls, set each category to delete after 3 months. You keep the convenience without the long-term profile.',
      },
      {
        feature: 'App permissions',
        description:
          'Settings → Privacy → Permission Manager. See every app that has access to your camera, mic, location, and contacts. Revoke anything that does not need it.',
      },
    ],
    externalLink: { url: 'https://myaccount.google.com/data-and-privacy', label: 'Open Google Data & Privacy' },
  },
  {
    id: 'mac',
    label: 'Mac',
    icon: Apple,
    intro: 'Mac privacy controls live in System Settings. The defaults are reasonable but worth a tightening pass.',
    steps: [
      {
        feature: 'System Settings → Privacy & Security',
        description:
          'Click each category — Location Services, Contacts, Calendars, Photos, Camera, Microphone — and turn off any app that does not need it.',
      },
      {
        feature: 'Analytics & Improvements',
        description:
          'Privacy & Security → Analytics & Improvements. Turn off "Share Mac Analytics" if you do not want diagnostic data sent to Apple.',
      },
      {
        feature: 'Apple Advertising',
        description:
          'Privacy & Security → Apple Advertising. Turn off "Personalized Ads" so Apple does not use your activity to target ads in the App Store and News.',
      },
      {
        feature: 'FileVault',
        description:
          'Privacy & Security → FileVault → Turn On. Encrypts your entire drive so no one can read your files if your Mac is stolen.',
      },
    ],
  },
  {
    id: 'windows',
    label: 'Windows',
    icon: Monitor,
    intro: 'Windows ships with the most invasive defaults of any platform. The privacy settings menu is long but worth the walk-through.',
    steps: [
      {
        feature: 'Settings → Privacy & Security → General',
        description:
          'Turn off the advertising ID, app launch tracking, and language list sharing. None of these are required for the OS to work.',
      },
      {
        feature: 'Diagnostics & Feedback',
        description:
          'Set diagnostic data to "Required" rather than "Optional". Turn off tailored experiences so Microsoft does not personalize ads and tips from your activity.',
      },
      {
        feature: 'App permissions',
        description:
          'Scroll the left side of Privacy & Security to walk through Camera, Microphone, Location, Contacts, and more. Toggle off any app that should not have access.',
      },
      {
        feature: 'Activity history',
        description:
          'Privacy & Security → Activity history. Turn off "Store my activity history on this device" and clear what is already stored.',
      },
    ],
  },
  {
    id: 'google',
    label: 'Google Account',
    icon: Globe,
    intro: 'Even if you never use Android, your Google Account probably knows more about you than your spouse does. Run the privacy checkup.',
    steps: [
      {
        feature: 'Privacy Checkup',
        description:
          'Visit myaccount.google.com/privacycheckup for a guided tour through every privacy setting — sharing, ads, history, and account access.',
      },
      {
        feature: 'My Activity',
        description:
          'myactivity.google.com shows every search, video watched, and place visited. Delete the past, then set auto-delete going forward.',
      },
      {
        feature: 'Ad personalization',
        description:
          'adssettings.google.com. Turn off ad personalization so Google stops using your activity to target you across YouTube, Search, and partner sites.',
      },
      {
        feature: 'Connected apps',
        description:
          'myaccount.google.com/permissions. Revoke access for any third-party app or site that no longer needs to be tied to your Google login.',
      },
    ],
    externalLink: { url: 'https://myaccount.google.com/data-and-privacy', label: 'Open Google Data & Privacy' },
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: Users,
    intro: 'Facebook tracks you even when you are not on Facebook. Run the Privacy Checkup, then go further with Off-Facebook Activity.',
    steps: [
      {
        feature: 'Privacy Checkup',
        description:
          'facebook.com/privacy/checkup. Walks you through who can see your posts, who can find you, and how your data is used for ads.',
      },
      {
        feature: 'Off-Facebook Activity',
        description:
          'facebook.com/off_facebook_activity. Shows every site and app that has reported your activity to Facebook. Clear the history and turn off future tracking.',
      },
      {
        feature: 'Ad preferences',
        description:
          'facebook.com/adpreferences. Remove every interest and advertiser you do not recognize. Turn off ads based on data from partners.',
      },
      {
        feature: 'Apps and websites',
        description:
          'facebook.com/settings?tab=applications. Remove any third-party app that has Facebook login access — most you signed up for years ago and forgot.',
      },
    ],
  },
];

type Tool = {
  name: string;
  category: string;
  url: string;
  description: string;
  free: boolean;
};

const tools: Tool[] = [
  {
    name: 'Bitwarden',
    category: 'Password manager',
    url: 'https://bitwarden.com',
    description:
      'Open-source password manager. Free tier covers everything most people need across phone, computer, and browser. Premium is $10/year.',
    free: true,
  },
  {
    name: 'Signal',
    category: 'Messaging',
    url: 'https://signal.org',
    description:
      'End-to-end encrypted messaging and calls. Free, no ads, run by a non-profit. The most privacy-respecting chat app in everyday use.',
    free: true,
  },
  {
    name: 'Firefox',
    category: 'Browser',
    url: 'https://firefox.com',
    description:
      'Mozilla browser with strong tracker blocking turned on by default. Run by a non-profit, with no ad business of its own to protect.',
    free: true,
  },
  {
    name: 'Brave Browser',
    category: 'Browser',
    url: 'https://brave.com',
    description:
      'Built on the same engine as Chrome but blocks ads and trackers out of the box. Built-in Tor window for extra-private browsing.',
    free: true,
  },
  {
    name: 'DuckDuckGo',
    category: 'Search engine',
    url: 'https://duckduckgo.com',
    description:
      'Search engine that does not log your queries or build a profile on you. Same useful results as Google for most everyday searches.',
    free: true,
  },
  {
    name: 'ProtonMail',
    category: 'Email',
    url: 'https://proton.me',
    description:
      'End-to-end encrypted email from a Swiss company. Free tier gives you 1 GB. Paid plans add a calendar, VPN, and cloud storage.',
    free: true,
  },
  {
    name: 'Have I Been Pwned',
    category: 'Breach checker',
    url: 'https://haveibeenpwned.com',
    description:
      'Type in your email to see every known data breach it has appeared in. Sign up for alerts so you know the moment you are exposed.',
    free: true,
  },
];

const furtherReading = [
  {
    name: 'FTC Consumer Privacy',
    url: 'https://consumer.ftc.gov/identity-theft-and-online-security/online-privacy-and-security',
    description: 'Federal Trade Commission guides on online privacy, kids online, and stopping unwanted calls.',
  },
  {
    name: 'Electronic Frontier Foundation',
    url: 'https://www.eff.org',
    description: 'Non-profit defending digital rights. Their "Surveillance Self-Defense" guide is the gold standard.',
  },
  {
    name: 'PrivacyGuides.org',
    url: 'https://www.privacyguides.org',
    description: 'Community-maintained list of privacy-respecting tools and services for every category.',
  },
];

export default function PrivacyHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Privacy Hub — Take Control of Your Personal Data | TekSure"
        description="Practical steps to reclaim your online privacy. Quick wins, threat explainers, platform-by-platform settings, and the tools that actually help — all in plain English."
        path="/privacy-hub"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Your Data Is Not a Product Here
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Practical steps to reclaim your online privacy. No tech degree required.
            </p>
          </div>
        </section>

        {/* Quick Wins */}
        <section className="container max-w-6xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">QUICK WINS</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Six high-impact privacy actions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each one takes under thirty minutes. Together, they shut down most of the ways your data leaks today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickWins.map((win, idx) => (
              <Card
                key={win.title}
                className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                      <win.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="text-xs mb-1">
                        {idx + 1}. <Clock className="h-3 w-3 inline mx-1" />
                        {win.time}
                      </Badge>
                      <h3 className="font-semibold text-foreground leading-tight">
                        {win.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
                    {win.description}
                  </p>
                  {win.link && (
                    <Button asChild variant="outline" size="sm" className="rounded-xl gap-2 self-start">
                      <Link to={win.link}>
                        {win.linkLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Threat Map */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-6xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-3">THE PRIVACY THREAT MAP</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Who actually wants your data — and why
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You cannot protect yourself from threats you do not understand. Here is what is collecting on you, in plain English.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {threats.map((threat) => (
                <Card key={threat.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-3">
                      <threat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{threat.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {threat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy by Platform */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">PRIVACY BY PLATFORM</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              The exact menus to open right now
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick your device or service. Each tab walks you through the settings that matter most.
            </p>
          </div>

          <Tabs defaultValue="iphone" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/40 p-2 rounded-2xl">
              {platforms.map((p) => (
                <TabsTrigger key={p.id} value={p.id} className="rounded-xl gap-2">
                  <p.icon className="h-4 w-4" />
                  {p.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {platforms.map((p) => (
              <TabsContent key={p.id} value={p.id} className="mt-6">
                <Card className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-6 md:p-8">
                    <p className="text-muted-foreground mb-6">{p.intro}</p>
                    <div className="space-y-4">
                      {p.steps.map((s) => (
                        <div key={s.feature} className="flex items-start gap-3">
                          <div className="rounded-lg bg-primary/10 p-1.5 mt-0.5 shrink-0">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{s.feature}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {p.externalLink && (
                      <Button asChild variant="outline" className="rounded-xl gap-2 mt-6">
                        <a href={p.externalLink.url} target="_blank" rel="noopener noreferrer">
                          {p.externalLink.label}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Tools That Help */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-6xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-3">TOOLS THAT HELP</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Privacy-respecting apps we actually recommend
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Free or low-cost tools that put you back in control. None of these are paying us — they are just the best in their category.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <Card key={tool.name} className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{tool.name}</h3>
                        <p className="text-xs text-muted-foreground/80">{tool.category}</p>
                      </div>
                      {tool.free && <Badge variant="secondary" className="text-xs">Free</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        Visit site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="container max-w-4xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Further reading</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted, free resources to go deeper at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {furtherReading.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {r.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
