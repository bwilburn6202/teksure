import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Headphones, ChevronRight, ExternalLink } from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Setup {
  app: string;
  steps: string[];
  features: string[];
}

const APPS: Record<Phone, Setup> = {
  iphone: {
    app: 'Apple Podcasts (built-in)',
    steps: [
      'Open the purple Podcasts app — already on your iPhone.',
      'Tap "Browse" or "Search" at the bottom.',
      'Search by name, topic, or browse charts (Top Shows).',
      'Tap "Subscribe" or "Follow" — new episodes download automatically.',
      'Tap "Listen Now" tab to play the latest from anything you follow.',
    ],
    features: [
      'Sleep timer — Now Playing → "Sleep Timer" → 15/30/60 min.',
      'Adjust speed — tap "1x" while playing → 0.5x to 2x.',
      'Play in the car automatically when CarPlay connects.',
    ],
  },
  android: {
    app: 'Pocket Casts (free, recommended) or Spotify',
    steps: [
      'Install "Pocket Casts" from the Play Store. Free version is plenty.',
      'Open the app → Search.',
      'Find a show → tap "Subscribe".',
      'Episodes appear in the "Up Next" or "Listen Now" tab.',
      'Or use Spotify if you already have it — Spotify has all major podcasts under "Your Library".',
    ],
    features: [
      'Sleep timer + playback speed.',
      'Skip silence + volume boost (great for long-form interviews).',
      'Cross-device sync if you sign in.',
    ],
  },
};

interface PodcastPick {
  title: string;
  category: string;
  about: string;
  why: string;
}

const PICKS: PodcastPick[] = [
  { title: 'The Daily (NYT)',                      category: 'News',           about: '20 minutes a day. One news story explained well.', why: 'Best one-stop news podcast. Lands in your feed every morning.' },
  { title: 'Up First (NPR)',                        category: 'News',           about: '15 minutes. Three top stories, every weekday.',   why: 'Faster than The Daily. Same morning routine.' },
  { title: '60-Second Science (Scientific American)',category: 'Education',     about: 'A minute of science a day.',                       why: 'Smallest possible step into podcasts. Hooks you fast.' },
  { title: 'Stuff You Should Know',                 category: 'Education',     about: 'Two hosts explain everything from concrete to ant colonies.', why: 'Funny, casual, conversational. The best gateway show.' },
  { title: 'Radiolab',                              category: 'Education',     about: 'Beautifully produced storytelling about science and the world.', why: 'High production value. Listen with headphones.' },
  { title: 'Death, Sex & Money',                    category: 'Stories',       about: 'Honest interviews about the topics most podcasts skip.', why: 'WNYC public radio quality. Often life-changing episodes.' },
  { title: 'This American Life',                    category: 'Stories',       about: 'Hour-long stories from real people, themed weekly.', why: 'The grandfather of all narrative podcasts. Almost always great.' },
  { title: 'How I Built This (NPR)',                category: 'Business',      about: 'Founders tell the story of how their company started.', why: 'Inspiring, low-fluff. Great for retirees who built businesses themselves.' },
  { title: 'AARP The Perfect Scam',                 category: 'Senior life',   about: 'Real scam survivors share what happened — so you do not.', why: 'Senior-targeted, extremely useful pattern recognition.' },
  { title: 'Hidden Brain (NPR)',                    category: 'Senior life',   about: 'Psychology and human behavior for general audiences.', why: 'Calm narration, fascinating topics, no shouting.' },
  { title: 'Wait Wait... Don\'t Tell Me!',           category: 'Comedy',        about: 'NPR news quiz — funny take on the week\'s headlines.', why: 'Laugh-out-loud while staying informed.' },
  { title: 'You Are Not So Smart',                  category: 'Education',     about: 'How your own brain fools you — psychology made fun.', why: 'Short episodes. Each one teaches you something about how you think.' },
];

const CATEGORIES = ['All', ...Array.from(new Set(PICKS.map(p => p.category)))];

export default function PodcastStarter() {
  const [phone, setPhone] = useState<Phone>('iphone');
  const [cat, setCat] = useState('All');

  const setup = APPS[phone];
  const filtered = cat === 'All' ? PICKS : PICKS.filter(p => p.category === cat);

  return (
    <>
      <SEOHead
        title="Podcast Starter Guide"
        description="Start listening to podcasts on iPhone or Android. App setup, twelve great shows for older adults, sleep-timer and playback-speed tricks."
        path="/tools/podcast-starter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Headphones className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Podcast Starter Guide</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Free audio shows on every topic. Like radio, but on demand. Start in 5 minutes.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Podcast Starter' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Step 1 — App: {setup.app}</p>
              <ol className="space-y-2 mb-5">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tricks worth knowing</p>
              <ul className="space-y-1.5">
                {setup.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Step 2 — Twelve shows worth subscribing to</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  cat === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            {filtered.map(p => (
              <Card key={p.title} className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                    <p className="font-semibold text-sm">{p.title}</p>
                    <Badge variant="outline" className="text-xs">{p.category}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground"><strong>About:</strong> {p.about}</p>
                  <p className="text-xs text-muted-foreground mt-1"><strong>Why:</strong> {p.why}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Listening tips that make a difference</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Pair with chores or walks. The audio fills time you would not otherwise spend listening to anything.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Try 1.25x or 1.5x speed for talkier shows. After a week, normal speed sounds slow.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Bluetooth headphones (cheap pair, $30 on Amazon) make hour-long listens far better than phone speaker.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>If a podcast is dull in the first 10 minutes, skip. There are too many great ones to suffer.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Audiobooks via Libby, free.</p>
              </Link>
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stream podcasts to hearing aids.</p>
              </Link>
              <Link to="/tools/podcast-directory" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Podcast Directory</p>
                <p className="text-xs text-muted-foreground mt-0.5">Browse more shows by category.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: subscribe to two news podcasts and one fun one. The variety keeps the queue feeling fresh.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
