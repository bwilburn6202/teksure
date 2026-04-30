import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface HomeTest {
  name: string;
  cost: string;
  what: string;
  how: string[];
  link: string;
}

const VISION_TESTS: HomeTest[] = [
  {
    name: 'Mimi Vision Test',
    cost: 'iPhone and Android — free',
    what: 'A quick on-screen vision check that estimates your visual sharpness and color sensitivity. Takes about 3 minutes per eye.',
    how: [
      'Download Mimi Vision from the App Store or Google Play.',
      'Hold the phone at the distance the app shows (usually 16 inches), cover one eye, and read the letters it displays.',
      'Repeat for the other eye and save your result for later comparison.',
    ],
    link: 'https://mimi.health/',
  },
  {
    name: 'EyeQue VisionCheck',
    cost: '$30 device + free app',
    what: 'A small plastic eyepiece that clips onto your phone screen. Walks you through a refraction test that estimates a glasses prescription.',
    how: [
      'Order the EyeQue VisionCheck from eyeque.com (about $30) and download the EyeQue app.',
      'Clip the eyepiece over your phone screen and tilt the phone until two colored lines line up — repeat for 9 angles, both eyes.',
      'The app gives you a refraction score you can take to an optician for glasses.',
    ],
    link: 'https://www.eyeque.com/',
  },
  {
    name: 'Amsler grid (paper test for macular degeneration)',
    cost: 'Free — printable',
    what: 'A simple square grid with a dot in the middle. Used by eye doctors for over 75 years to spot early signs of age-related macular degeneration (AMD).',
    how: [
      'Print the grid from the American Academy of Ophthalmology site (link below) and tape it to a wall at eye level, 14 inches away in good light.',
      'Wear your reading glasses if you use them. Cover one eye and stare at the center dot.',
      'If any lines look wavy, blurry, or missing — call an eye doctor that week, not next month.',
    ],
    link: 'https://www.aao.org/eye-health/tips-prevention/facts-about-amsler-grid-daily-vision-test',
  },
];

const HEARING_TESTS: HomeTest[] = [
  {
    name: 'Mimi Hearing Test',
    cost: 'iPhone and Android — free',
    what: 'A 6-minute hearing screening that gives you a personal hearing profile. Built with audiologists.',
    how: [
      'Download Mimi from the App Store or Google Play and plug in wired headphones (Bluetooth can throw off the test).',
      'Find a quiet room and tap the screen each time you hear a tone, even faint ones.',
      'Mimi shows your hearing age and a profile you can save or share with a doctor.',
    ],
    link: 'https://mimi.health/',
  },
  {
    name: 'HearingTracker.com online test',
    cost: 'Free — runs in your web browser',
    what: 'A 5-minute web-based hearing test from a respected hearing-aid review site. No app or download needed.',
    how: [
      'Open hearingtracker.com on your phone or computer and click the free Online Hearing Test button.',
      'Plug in headphones (wired works best) in a quiet room.',
      'Listen for tones at different pitches and tap when you hear each one. You get an audiogram-style chart you can email yourself.',
    ],
    link: 'https://www.hearingtracker.com/online-hearing-test',
  },
  {
    name: 'AARP free hearing test',
    cost: 'Free — phone or web',
    what: 'A 3-minute speech-in-noise test from AARP and the National Hearing Test. Plays sentences with background sound — closer to real life than tones in a silent room.',
    how: [
      'Visit nationalhearingtest.org or call 1-866-223-7575 and use the free AARP access code (renews every six months).',
      'Wear headphones in a quiet spot and repeat the numbers you hear — each ear is graded separately.',
      'You get a result by email with a recommendation on whether to see an audiologist.',
    ],
    link: 'https://www.aarp.org/health/conditions-treatments/free-hearing-test/',
  },
];

function TestCard({ test }: { test: HomeTest }) {
  return (
    <Card className="border-border"><CardContent className="p-5">
      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
        <p className="font-semibold text-base">{test.name}</p>
        <Badge variant="outline">{test.cost}</Badge>
      </div>
      <p className="text-sm mb-3">{test.what}</p>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to use it</p>
      <ol className="space-y-2 mb-4">
        {test.how.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <a href={test.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
        Visit official site <ExternalLink className="h-3 w-3" />
      </a>
    </CardContent></Card>
  );
}

export default function HomeVisionTest() {
  return (
    <>
      <SEOHead
        title="At-Home Vision & Hearing Self-Tests"
        description="Free and low-cost at-home vision and hearing tests — Mimi, EyeQue, Amsler grid, AARP, HearingTracker. Plain-English steps and an honest caveat about when to see a real doctor."
        path="/tools/home-vision-test"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-green-50 dark:from-blue-950/20 dark:to-green-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3"><div className="p-3 bg-blue-500/10 rounded-full"><Eye className="h-8 w-8 text-blue-600" /></div></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">At-Home Vision & Hearing Self-Tests</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Free and low-cost tests you can run on your phone, in plain English. A first check before you book an appointment.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Home Vision & Hearing Tests' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6"><CardContent className="p-5 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Read this first — these are screening tools, not a diagnosis</p>
              <p className="text-muted-foreground">Every test on this page is a screening. They give you a hint about whether something is off — they cannot replace a real eye doctor or audiologist. If a test shows a concern, if your vision changes suddenly, if you see flashes or floaters, or if you have ear pain, ringing, or sudden hearing loss in one ear, please book an in-person appointment that week. A home test is a first step, not the answer.</p>
            </div>
          </CardContent></Card>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">1. At-home vision tests</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Three picks: a free phone app, a low-cost device that estimates a glasses prescription, and a printable grid that catches early macular degeneration.
            </p>
            <div className="space-y-4">
              {VISION_TESTS.map(test => <TestCard key={test.name} test={test} />)}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">2. At-home hearing tests</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Three free picks. Wired headphones and a quiet room give you the most accurate result on any of them.
            </p>
            <div className="space-y-4">
              {HEARING_TESTS.map(test => <TestCard key={test.name} test={test} />)}
            </div>
          </div>

          <Card className="border-border bg-muted/30 mb-6"><CardContent className="p-5">
            <p className="text-sm font-semibold mb-2">When to skip the home test and call a real doctor</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">•</span><span>Sudden vision loss, flashes of light, a curtain across your view, or new floaters — call an eye doctor that day or go to urgent care.</span></li>
              <li className="flex gap-2"><span className="text-primary">•</span><span>Hearing loss in only one ear, ear pain, dizziness, or constant ringing — see an ENT or audiologist within a week.</span></li>
              <li className="flex gap-2"><span className="text-primary">•</span><span>Wavy lines on the Amsler grid or missing letters on a vision app — book an ophthalmologist.</span></li>
              <li className="flex gap-2"><span className="text-primary">•</span><span>Anyone with diabetes — get a yearly dilated eye exam regardless of what a home test says.</span></li>
            </ul>
          </CardContent></Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hearing-aid-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"><p className="font-medium text-sm">Hearing Aid Apps & OTC Aids</p><p className="text-xs text-muted-foreground mt-0.5">Free tests and a picker for over-the-counter aids.</p></Link>
              <Link to="/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"><p className="font-medium text-sm">Low-Vision Setup</p><p className="text-xs text-muted-foreground mt-0.5">Make your phone and computer easier to read.</p></Link>
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"><p className="font-medium text-sm">Telehealth Prep</p><p className="text-xs text-muted-foreground mt-0.5">Get ready for a video visit with your doctor.</p></Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: run the same home test every 3-6 months and save your result. A small change you would not notice day-to-day shows up clearly when you compare two screenshots.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
