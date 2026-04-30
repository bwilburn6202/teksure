import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Speaker, ChevronRight, ExternalLink, type LucideIcon,
  Smartphone, ShieldCheck,
} from 'lucide-react';

type Want = 'video-calls' | 'music-mostly' | 'cheap' | 'apple-house' | 'google-house' | 'amazon-shopping' | 'reading-aloud' | 'kitchen-screen' | 'low-vision';

interface Speaker {
  name: string;
  price: string;
  whyHere: string[];
  watchOut?: string;
  link: string;
  icon: LucideIcon;
}

const SPEAKERS: Record<string, Speaker> = {
  echoDot: {
    name: 'Amazon Echo Dot (5th Gen)',
    price: '$50',
    whyHere: ['Cheapest way to get Alexa', 'Great for music, timers, weather, the news'],
    link: 'https://www.amazon.com/dp/B09B8V1LZ3',
    icon: Speaker,
  },
  echoShow8: {
    name: 'Amazon Echo Show 8',
    price: '$130',
    whyHere: ['Has a video screen — perfect for video calls', 'Big text and big icons that older eyes can read', 'Photo frame mode shows family photos when not in use'],
    link: 'https://www.amazon.com/dp/B099F1DQYC',
    icon: Speaker,
  },
  echoShow15: {
    name: 'Amazon Echo Show 15',
    price: '$280',
    whyHere: ['15-inch screen — biggest in the line', 'Mounts on a wall like a small TV', 'Best for low vision'],
    link: 'https://www.amazon.com/dp/B08MQLDPK4',
    icon: Speaker,
  },
  nestMini: {
    name: 'Google Nest Mini',
    price: '$50',
    whyHere: ['Cheapest Google smart speaker', 'Better music quality than Echo Dot', 'Works smoothest if you use Google services'],
    link: 'https://store.google.com/us/product/google_nest_mini',
    icon: Speaker,
  },
  nestHub2: {
    name: 'Google Nest Hub (2nd Gen)',
    price: '$100',
    whyHere: ['Has a screen — great for video calls and recipes', 'Sleep tracking sensor (no camera)', 'Photo frame from Google Photos'],
    link: 'https://store.google.com/us/product/nest_hub_2nd_gen',
    icon: Speaker,
  },
  nestHubMax: {
    name: 'Google Nest Hub Max',
    price: '$230',
    whyHere: ['Bigger screen than Hub', 'Has a camera for video calls', 'Recognizes faces — different family members get different schedules'],
    link: 'https://store.google.com/us/product/nest_hub_max',
    icon: Speaker,
  },
  homepodMini: {
    name: 'Apple HomePod Mini',
    price: '$99',
    whyHere: ['Best if everyone in the house has iPhones', 'Excellent sound for the size', 'Works tightly with FaceTime, Apple Music, Reminders'],
    link: 'https://www.apple.com/shop/buy-homepod/homepod-mini',
    icon: Speaker,
  },
  homepod: {
    name: 'Apple HomePod (2nd Gen)',
    price: '$300',
    whyHere: ['Best music quality of any smart speaker', 'For Apple-house music lovers'],
    watchOut: 'No screen — for video calls you still need an iPhone or iPad in the room.',
    link: 'https://www.apple.com/shop/buy-homepod/homepod',
    icon: Speaker,
  },
};

function recommend(wants: Set<Want>): { picks: Speaker[]; reasoning: string[] } {
  const reasoning: string[] = [];
  const result: Speaker[] = [];
  const add = (s: Speaker, why: string) => {
    if (!result.find(r => r.name === s.name)) {
      result.push(s);
      reasoning.push(`${s.name}: ${why}`);
    }
  };

  if (wants.has('apple-house')) {
    if (wants.has('cheap')) add(SPEAKERS.homepodMini, 'Cheapest Apple option, works directly with iPhones for FaceTime and Apple Music.');
    else if (wants.has('music-mostly')) add(SPEAKERS.homepod, 'Best sound quality of any smart speaker, made for Apple-house music lovers.');
    else add(SPEAKERS.homepodMini, 'Apple-first home with normal needs — the Mini is the right call.');
  }

  if (wants.has('google-house')) {
    if (wants.has('video-calls') || wants.has('kitchen-screen')) add(SPEAKERS.nestHub2, 'Has a screen and a free Google Meet for video calls.');
    else add(SPEAKERS.nestMini, 'Cheap and best music for Google-services users.');
  }

  if (wants.has('amazon-shopping')) {
    if (wants.has('video-calls') || wants.has('kitchen-screen')) add(SPEAKERS.echoShow8, 'Echo Show with screen and a real Alexa for shopping is the right combo.');
    else add(SPEAKERS.echoDot, 'Cheapest Alexa for shopping, music, and timers.');
  }

  if (wants.has('low-vision')) {
    add(SPEAKERS.echoShow15, 'Biggest screen in the lineup, plus voice-first Alexa for hands-free use.');
  }

  if (wants.has('video-calls') && result.length === 0) {
    add(SPEAKERS.echoShow8, 'Best balance of price and screen size for video calls.');
    add(SPEAKERS.nestHub2, 'Google option for video calls with Google Meet built in.');
  }

  if (wants.has('music-mostly') && result.length === 0) {
    add(SPEAKERS.homepod, 'Best music sound, in any house with at least one iPhone.');
    add(SPEAKERS.nestMini, 'Cheapest path to good streaming music.');
  }

  if (wants.has('cheap') && result.length === 0) {
    add(SPEAKERS.echoDot, 'Cheapest of all — Echo Dot at $50.');
    add(SPEAKERS.nestMini, 'Same price, slightly better music.');
  }

  if (wants.has('reading-aloud') && result.length === 0) {
    add(SPEAKERS.echoDot, 'Alexa reads books from Audible and Kindle aloud — pair with a $15/mo Audible subscription for the full library.');
  }

  if (wants.has('kitchen-screen') && result.length === 0) {
    add(SPEAKERS.echoShow8, 'Right size for a kitchen counter, follows recipes, takes video calls, photo frame.');
  }

  // Default fallback
  if (result.length === 0) {
    add(SPEAKERS.echoShow8, 'A good default — screen for calls and recipes, Alexa for everything else.');
  }

  return { picks: result.slice(0, 3), reasoning };
}

const WANT_OPTIONS: { id: Want; label: string }[] = [
  { id: 'video-calls',     label: 'Video calls with family' },
  { id: 'music-mostly',    label: 'Music — that is the main thing' },
  { id: 'cheap',           label: 'Cheapest option that still works' },
  { id: 'apple-house',     label: 'Everyone here has iPhones' },
  { id: 'google-house',    label: 'I use Google for email / calendar / photos' },
  { id: 'amazon-shopping', label: 'I shop on Amazon a lot' },
  { id: 'reading-aloud',   label: 'I want it to read books to me' },
  { id: 'kitchen-screen',  label: 'I want a small screen on the kitchen counter' },
  { id: 'low-vision',      label: 'I have low vision — bigger screen helps' },
];

export default function SmartSpeakerPicker() {
  const [wants, setWants] = useState<Set<Want>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: Want) => {
    setWants(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { picks, reasoning } = useMemo(() => recommend(wants), [wants]);

  return (
    <>
      <SEOHead
        title="Smart Speaker Picker"
        description="Tell us what you actually want from a smart speaker and we will pick the right Echo, Nest, or HomePod for you. Plain-English costs and an honest comparison."
        path="/tools/smart-speaker-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Speaker className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Speaker Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Echo, Nest, or HomePod? Pick what matters to you, get one or two clear recommendations.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart Speaker Picker' }]} />

          {!submitted ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-3">What matters most? Pick anything that applies.</p>
                <div className="space-y-2 mb-5">
                  {WANT_OPTIONS.map(o => (
                    <label key={o.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        wants.has(o.id) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                      }`}>
                      <Checkbox checked={wants.has(o.id)} onCheckedChange={() => toggle(o.id)} />
                      <span className="font-medium text-sm">{o.label}</span>
                    </label>
                  ))}
                </div>
                <Button onClick={() => setSubmitted(true)} disabled={wants.size === 0} size="lg" className="gap-2 w-full sm:w-auto">
                  Show recommendations <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <Badge variant="outline">{picks.length} recommendation{picks.length !== 1 ? 's' : ''}</Badge>
                  <Button variant="outline" size="sm" onClick={() => { setWants(new Set()); setSubmitted(false); }}>Start over</Button>
                </CardContent>
              </Card>

              <div className="space-y-4 mb-6">
                {picks.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.name} className="border-border">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-base">{p.name}</p>
                            <Badge variant="outline" className="mt-1">{p.price}</Badge>
                          </div>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {p.whyHere.map((why, k) => (
                            <li key={k} className="flex gap-2 text-sm">
                              <span className="text-primary shrink-0">•</span>
                              <span>{why}</span>
                            </li>
                          ))}
                        </ul>
                        {p.watchOut && (
                          <div className="p-2 rounded bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs">
                            <strong className="text-amber-700 dark:text-amber-300">Watch out:</strong>{' '}
                            <span className="text-amber-700 dark:text-amber-300">{p.watchOut}</span>
                          </div>
                        )}
                        {reasoning[i] && (
                          <p className="text-xs text-muted-foreground mt-3 italic">Why for you: {reasoning[i].split(': ')[1]}</p>
                        )}
                        <a href={p.link} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                          View on official site <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Privacy basics for any smart speaker</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Mute the microphone with the physical button when you do not want it listening (every model has one).</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Turn off the camera shutter on Echo Show and Nest Hub Max if you are not on a call.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>In the app, set voice recordings to "auto-delete after 3 months" — none of these need to keep your voice for years.</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Skip the "purchase by voice" feature unless you genuinely use it. Set a 4-digit voice purchase PIN if you do.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair speaker with bulbs, plugs, doorbells.</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair the speaker with a tablet for grandparents.</p>
              </Link>
              <Link to="/tools/senior-friendly-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior-Friendly Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">Apps that work great with smart speakers.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <Smartphone className="h-3 w-3" /> Quick Tip: pick a speaker that matches the phones in your house. Mixed brands work, but the same brand is smoother.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
