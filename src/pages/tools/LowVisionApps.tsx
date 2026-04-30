import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ChevronRight, ExternalLink } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  whatItDoes: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'Be My Eyes',
    cost: 'Free',
    whatItDoes: 'Connects blind or low-vision users with a sighted volunteer over a live video call. Tap a button, a volunteer answers within seconds and helps with whatever you point the camera at.',
    bestFor: 'Anyone who needs occasional sighted help — reading mail, matching outfits, checking expiration dates, finding a dropped item.',
    pros: [
      'Completely free, forever. No ads, no upsell.',
      'Over 7 million volunteers worldwide — usually answered in under 30 seconds.',
      'Also has a "Be My AI" tab that uses GPT-4 to describe photos instantly.',
      'Volunteers are vetted and rated; calls can be ended anytime.',
    ],
    cons: ['Needs a stable internet connection.', 'You may feel awkward at first — most people get past it quickly.'],
    link: 'https://www.bemyeyes.com',
  },
  {
    name: 'Seeing AI',
    cost: 'Free',
    whatItDoes: 'A free Microsoft app that uses your phone camera to read printed text aloud, recognize faces, identify currency, scan barcodes, and describe scenes around you.',
    bestFor: 'Daily reading and identification tasks — mail, menus, product labels, photos, handwritten notes.',
    pros: [
      'Free with no ads and no account required.',
      'Reads short text in real time as you point the camera.',
      'Recognizes faces of people you save to the app.',
      'Available on iPhone and Android.',
    ],
    cons: ['Handwriting recognition is hit or miss.', 'Scene descriptions are short, not detailed.'],
    link: 'https://www.microsoft.com/en-us/ai/seeing-ai',
  },
  {
    name: 'Voice Dream Reader',
    cost: '$19.99 one-time (iOS) or $9.99/year (Android)',
    whatItDoes: 'A high-quality text-to-speech reader. Open a PDF, ebook, web article, or Word doc and have it read aloud in a natural voice you can speed up or slow down.',
    bestFor: 'People who want to "listen" to long reading — books, articles, reports, PDFs from the doctor.',
    pros: [
      'One of the best TTS voices on any platform — sounds human, not robotic.',
      'Works with Bookshare, Project Gutenberg, Dropbox, Google Drive.',
      'Highlights each word as it reads — helpful for low vision plus dyslexia.',
      'No subscription on iOS — pay once and own it.',
    ],
    cons: ['Not free.', 'Setup with Bookshare takes a few minutes the first time.'],
    link: 'https://www.voicedream.com',
  },
  {
    name: 'Aira',
    cost: 'Free for 5 minutes/call (unlimited free calls), or $29-$199/mo for longer sessions',
    whatItDoes: 'A live human guide service. Trained agents see through your phone camera and talk you through anything — airport navigation, grocery shopping, reading a long document.',
    bestFor: 'Travel, complex shopping trips, reading long forms, or anything where a 5-minute volunteer call is not enough.',
    pros: [
      'Agents are trained professionals, not volunteers — far more skilled at complex tasks.',
      'Free at hundreds of "Aira Access" locations: airports, Walmart, Target, Wegmans, many libraries.',
      'Available 24/7, average wait under 30 seconds.',
      'Privacy: agents are bound by confidentiality.',
    ],
    cons: ['Paid plans add up if you use it daily.', 'Be My Eyes covers most casual needs for free.'],
    link: 'https://aira.io',
  },
  {
    name: 'KNFB Reader (now Voice Dream Scanner)',
    cost: '$7.99 one-time',
    whatItDoes: 'Scans printed pages with your phone camera and reads them aloud. The original KNFB Reader was retired in 2021; the same engine now lives inside Voice Dream Scanner.',
    bestFor: 'Reading multi-page printed documents — books, bills, instruction manuals, restaurant menus.',
    pros: [
      'Best-in-class print recognition — handles columns, tables, and angled photos.',
      'Works offline once installed.',
      'One-time purchase, no subscription.',
      'Pairs with Voice Dream Reader for a full read-aloud workflow.',
    ],
    cons: ['Original "KNFB Reader" branding is gone — search for Voice Dream Scanner now.', 'Seeing AI does the same job free for short text.'],
    link: 'https://www.voicedream.com/scanner',
  },
  {
    name: 'Magnifier (built into iPhone)',
    cost: 'Free — already on your iPhone',
    whatItDoes: 'Apple\'s built-in magnifying glass. Zooms the camera up to 15x, adds high-contrast color filters, freezes the image so you can study it, and even detects people, doors, and text.',
    bestFor: 'Reading small print on the go — pill bottles, restaurant menus, price tags, thermostat displays.',
    pros: [
      'Already on every iPhone — no download needed.',
      'Add it to Control Center or triple-click the side button to open in one tap.',
      'Color filters help with macular degeneration and other contrast-sensitive conditions.',
      'Freeze-frame lets you snap a clear photo and zoom further.',
    ],
    cons: ['iPhone only — Android users should try the free "Magnifying Glass + Flashlight" app.', 'Takes a minute to set up the shortcut the first time.'],
    link: 'https://support.apple.com/guide/iphone/magnify-nearby-objects-iph9a67b057c/ios',
  },
];

export default function LowVisionApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Low Vision Apps and Services"
        description="Six free and paid apps for low-vision users — Be My Eyes, Seeing AI, Voice Dream Reader, Aira, Voice Dream Scanner, and the iPhone Magnifier. Honest comparison."
        path="/tools/low-vision-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Low Vision Apps and Services</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six picks that make daily life easier with low vision. Four are free. The two paid options are worth knowing about before you spend a dollar.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Low Vision Apps' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Start with Be My Eyes and Seeing AI</p>
              <p className="text-xs text-muted-foreground">
                These two apps are free and cover 80% of the daily needs people describe to us — reading mail, identifying products, finding dropped items, listening to a label. Install both before you consider any paid service.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>What it does:</strong> {p.whatItDoes}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Ask your eye doctor about state services</p>
              <p className="text-xs text-muted-foreground">
                Every state has a Bureau of Services for the Blind (sometimes called Vocational Rehab). Many provide free training, free magnifiers, and free copies of paid apps. A note from your ophthalmologist or optometrist usually opens the door.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Configure your phone, tablet, and TV for easier viewing.</p>
              </Link>
              <Link to="/tools/screen-reader-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Screen Reader Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First steps with VoiceOver, TalkBack, or NVDA.</p>
              </Link>
              <Link to="/accessibility" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accessibility Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Every accessibility guide in one place.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: install Be My Eyes and Seeing AI today, even if you do not need them yet. Practice on your mail when there is no pressure, so the apps feel familiar the day you really need them.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
