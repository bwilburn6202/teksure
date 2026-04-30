import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tv, ChevronRight, ExternalLink } from 'lucide-react';

type Service = 'netflix' | 'youtube' | 'amazon' | 'disney' | 'hulu';

interface Setup {
  name: string;
  cost: string;
  setupSteps: string[];
  shortcuts: { title: string; detail: string }[];
  link: string;
}

const SETUPS: Record<Service, Setup> = {
  netflix: {
    name: 'Netflix',
    cost: '$8 with ads / $18 standard / $25 premium',
    setupSteps: [
      'Go to netflix.com → "Sign Up".',
      'Pick a plan. With-ads is fine for many people; standard is the sweet spot.',
      'Enter email, password, payment.',
      'On smart TVs: open the Netflix app → "Sign in" → enter the code on netflix.com/tv.',
      'On phones / tablets: install the Netflix app → sign in.',
    ],
    shortcuts: [
      { title: 'Make a profile per family member', detail: 'Settings → Manage Profiles → Add. Each profile keeps its own watch history and recommendations. Stops grandkid cartoons from filling your suggestions.' },
      { title: 'Adjust autoplay', detail: 'Profile → Manage Profiles → toggle "Autoplay next episode" off if you want to stop binge-watching by accident.' },
      { title: 'Subtitles', detail: 'During play, tap the screen → Subtitles icon → English (or any language). Worth turning on by default — you catch lines you would have missed.' },
      { title: 'Download for offline', detail: 'On phone / tablet: tap a movie → Download icon. Watch on a plane or in a hotel.' },
    ],
    link: 'https://help.netflix.com/en/node/412',
  },
  youtube: {
    name: 'YouTube + YouTube Premium',
    cost: 'Free with ads / $14 Premium (no ads, downloads)',
    setupSteps: [
      'Go to youtube.com or open the YouTube app — already on most phones.',
      'Sign in with a Google account.',
      'For Premium: tap your profile → "Get YouTube Premium" → free 1-month trial.',
    ],
    shortcuts: [
      { title: 'Subscribe to channels you actually watch', detail: 'Tap the bell icon on any channel. New videos show up in "Subscriptions" tab. Stops the algorithm from controlling your life.' },
      { title: 'Restricted Mode for grandkid TVs', detail: 'Profile icon → Settings → General → "Restricted Mode" → ON. Hides most adult content.' },
      { title: 'Adjust playback speed', detail: 'Tap the gear icon during play → Playback Speed → 1.25x or 1.5x. After a week, normal feels slow.' },
      { title: 'YouTube Music included with Premium', detail: 'Your $14/mo Premium also includes YouTube Music — like Spotify but with music videos. Bonus value many people miss.' },
    ],
    link: 'https://support.google.com/youtube/answer/2976814',
  },
  amazon: {
    name: 'Amazon Prime Video',
    cost: 'Free with $15/mo Prime / $9 standalone',
    setupSteps: [
      'Comes free with Amazon Prime ($15/mo or $139/year).',
      'On a smart TV: install "Prime Video" app → sign in with your Amazon account.',
      'On phones: install "Amazon Prime Video".',
    ],
    shortcuts: [
      { title: 'Skip ads on Prime Video by paying $3 more/mo', detail: 'Prime Video shows ads by default since 2024. Settings → Account → "Ad-free option" — $3 extra removes them.' },
      { title: 'Watchlist + parental controls', detail: 'Settings → Parental Controls → set a 4-digit PIN to lock out adult content. Also use Watchlist to save things to come back to.' },
      { title: 'X-Ray feature', detail: 'During a show, tap up. X-Ray shows the cast, music playing in the scene, trivia. Surprisingly useful when you cannot remember an actor\'s name.' },
    ],
    link: 'https://www.primevideo.com/',
  },
  disney: {
    name: 'Disney+',
    cost: '$10 ad-supported / $16 ad-free',
    setupSteps: [
      'Go to disneyplus.com → "Sign Up".',
      'Pick a plan. Bundle option: Disney+ + Hulu + ESPN+ for $16 (huge savings if you want all three).',
      'Sign in on smart TV / phone with email + password.',
    ],
    shortcuts: [
      { title: 'Kid profile with PIN', detail: 'Add a profile → mark as Kids profile → ON. Auto-filters everything to kid-rated. Much easier than monitoring.' },
      { title: 'GroupWatch with family', detail: 'Up to 7 people watch the same show synchronized. Perfect for grandkids on Sundays. Tap the GroupWatch icon while playing.' },
      { title: 'Skip the recap intros', detail: 'Tap "Skip Intro" or "Skip Recap" at bottom-right when shown. Standard but often missed.' },
    ],
    link: 'https://help.disneyplus.com',
  },
  hulu: {
    name: 'Hulu',
    cost: '$10 ad-supported / $19 no ads',
    setupSteps: [
      'Go to hulu.com → "Start your free trial".',
      'Pick a plan. Most people pick the basic with-ads — Hulu has fewer ads than Prime Video.',
      'Sign in on TV / phone with email + password.',
    ],
    shortcuts: [
      { title: 'Best for next-day network TV', detail: 'New episodes of Saturday Night Live, Grey\'s Anatomy, This Is Us appear within 24 hours of airing on broadcast.' },
      { title: 'Bundle with Disney+ and ESPN+', detail: '$16 gets all three — far cheaper than buying Hulu standalone for $10 plus everything else.' },
      { title: 'Live TV add-on', detail: 'Hulu + Live TV ($83/mo) is a real cable replacement. Yet another option after you cut the cord.' },
    ],
    link: 'https://help.hulu.com',
  },
};

const SERVICES: { id: Service; label: string }[] = [
  { id: 'netflix', label: 'Netflix' },
  { id: 'youtube', label: 'YouTube / YouTube Premium' },
  { id: 'amazon',  label: 'Amazon Prime Video' },
  { id: 'disney',  label: 'Disney+' },
  { id: 'hulu',    label: 'Hulu' },
];

export default function StreamingServiceSetup() {
  const [s, setS] = useState<Service>('netflix');
  const setup = SETUPS[s];

  return (
    <>
      <SEOHead
        title="Streaming Service Setup"
        description="Sign up for Netflix, YouTube Premium, Amazon Prime Video, Disney+, or Hulu and get the most out of each. Setup steps and lesser-known shortcuts."
        path="/tools/streaming-service-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <Tv className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Streaming Service Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Sign up, set up profiles, and use the lesser-known features that make each one better.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Streaming Service Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick a service</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICES.map(o => (
                  <button key={o.id} onClick={() => setS(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      s === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{setup.name}</Badge>
              <Badge variant="outline" className="ml-2 mb-2">{setup.cost}</Badge>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Setup</p>
              <ol className="space-y-2 mb-4">
                {setup.setupSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Shortcuts most people miss</p>
              <div className="space-y-2">
                {setup.shortcuts.map((sc, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{sc.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{sc.detail}</p>
                  </div>
                ))}
              </div>

              <a href={setup.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Help center <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on price creep</p>
              <p className="text-xs text-muted-foreground">
                All these services have raised prices regularly. Check the Subscription Tracker tool every quarter — what you signed up for at $10/mo may now cost $18. Pause or cancel during slow seasons; most accept you back without losing your watchlist.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/cord-cutter-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Cord Cutter Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick the right combo of services.</p>
              </Link>
              <Link to="/tools/streaming-calculator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Streaming Calculator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Total monthly cost.</p>
              </Link>
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free streaming via your library.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
