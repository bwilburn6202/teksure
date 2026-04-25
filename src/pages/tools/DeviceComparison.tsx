import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Scale,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Speaker,
  Store,
  Lightbulb,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

type ComparisonId =
  | 'phones'
  | 'computers'
  | 'tablets'
  | 'watches'
  | 'speakers';

interface Category {
  id: string;
  label: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'price', label: 'Price range', icon: '' },
  { id: 'ease', label: 'Ease of use', icon: '' },
  { id: 'privacy', label: 'Privacy & security', icon: '' },
  { id: 'apps', label: 'App / software selection', icon: '' },
  { id: 'ecosystem', label: 'Ecosystem fit', icon: '' },
  { id: 'support', label: 'Customer support', icon: '' },
  { id: 'longevity', label: 'Repair & longevity', icon: '' },
  { id: 'audience', label: 'Who it\'s best for', icon: '' },
];

interface Comparison {
  id: ComparisonId;
  label: string;
  shortLabel: string;
  Icon: typeof Smartphone;
  description: string;
  columns: string[];
  rows: Record<string, string[]>;
  takeaway: string[];
  decision: {
    question: string;
    options: { label: string; leans: string }[];
  }[];
}

const comparisons: Comparison[] = [
  {
    id: 'phones',
    label: 'iPhone vs Android',
    shortLabel: 'Phones',
    Icon: Smartphone,
    description:
      'The two big phone choices in 2026. iPhones are made only by Apple. Android phones come from Samsung, Google, Motorola, OnePlus, and many others.',
    columns: ['iPhone', 'Android'],
    rows: {
      price: [
        'New: $430 (iPhone SE 4) to $1,600+ (Pro Max). Most people spend $800-$1,000. Refurbished starts around $300.',
        'New: $200 (budget) to $1,800+ (Galaxy Z Fold). Huge range — a solid mid-range Samsung or Pixel runs $500-$700.',
      ],
      ease: [
        'Very consistent from model to model. Settings rarely move. Friends and family likely know how to help you since most use iPhone.',
        'Setup and menus differ by brand (Samsung, Google Pixel, Motorola). Once you learn one, the basics carry over — but help from friends can be hit-or-miss.',
      ],
      privacy: [
        'Strong default privacy. App Tracking Transparency blocks apps from following you across the web. Data is encrypted on device.',
        'Gets better every year, especially on Pixel and Samsung. More customization for privacy-conscious users, but more settings to understand.',
      ],
      apps: [
        'Every major app is on the App Store. Some apps even launch on iPhone first.',
        'Google Play Store has nearly everything too. More free and sideloaded apps available, but with a bit more risk if you go outside the Play Store.',
      ],
      ecosystem: [
        'Best if you already have a Mac, iPad, Apple Watch, or AirPods. iMessage, FaceTime, AirDrop, and Handoff all "just work."',
        'Best if you use Google services (Gmail, Calendar, Photos, Drive) or have a Chromebook or Google smart-home gear.',
      ],
      support: [
        'Apple Stores and authorized repair shops in most cities. You can walk in and talk to a human. Phone and chat support is strong.',
        'Support depends on the brand. Samsung has good service centers; Google Pixel offers mail-in repair; budget brands often have slow or online-only support.',
      ],
      longevity: [
        'Apple now supports iPhones with software updates for 5-6 years or more. Batteries are replaceable at Apple stores for $80-$100. Resale value is very high.',
        'Samsung and Google now promise 7 years of updates on flagship models. Battery replacement varies by brand. Resale value is lower than iPhone.',
      ],
      audience: [
        'People who want "it just works," Apple ecosystem owners, privacy-minded users, people who call family on FaceTime.',
        'People who want choice (size, folding phones, extra features), budget shoppers, tinkerers, Google service users.',
      ],
    },
    takeaway: [
      'iPhone is the better pick if you already own Apple devices, value consistency, or want help to be easy (family and stores know iPhone).',
      'Android is the better pick if you want more choice in price, size, or features — or if you already live in Google\'s world.',
      'Both are excellent in 2026. Neither is "safer" or "better" in any meaningful way for most everyday tasks.',
    ],
    decision: [
      {
        question: 'Do you already own other Apple devices (Mac, iPad, Apple Watch)?',
        options: [
          { label: 'Yes', leans: 'iPhone — the ecosystem will save you real time' },
          { label: 'No', leans: 'Either works — keep reading' },
        ],
      },
      {
        question: 'Does simplicity matter more than customization?',
        options: [
          { label: 'Yes, simple wins', leans: 'iPhone' },
          { label: 'I like to tweak things', leans: 'Android' },
        ],
      },
      {
        question: 'Is budget the main factor?',
        options: [
          { label: 'Yes, I want the cheapest good phone', leans: 'Android (more options under $400)' },
          { label: 'Budget is flexible', leans: 'Either works' },
        ],
      },
    ],
  },
  {
    id: 'computers',
    label: 'Mac vs Windows PC',
    shortLabel: 'Mac vs PC',
    Icon: Laptop,
    description:
      'Mac computers are made only by Apple. Windows PCs come from Dell, HP, Lenovo, ASUS, Microsoft (Surface), and many others.',
    columns: ['Mac', 'Windows PC'],
    rows: {
      price: [
        'Starts around $1,000 (MacBook Air M4). Sweet spot is $1,200-$1,500. Refurbished from Apple is reliable and starts around $800.',
        'Huge range. A solid everyday laptop starts around $500. High-end gaming and workstation PCs can go over $3,000.',
      ],
      ease: [
        'Clean, consistent interface that doesn\'t change dramatically between updates. Less pre-installed junk.',
        'More customizable but more to learn. Comes with more pre-installed manufacturer software (which can be cleaned up).',
      ],
      privacy: [
        'Strong defaults. Apple heavily markets privacy as a feature. Minimal tracking built into the system.',
        'Better than it used to be. Windows 11 has more privacy settings to walk through on first setup, and some telemetry is turned on by default.',
      ],
      apps: [
        'All major productivity software (Microsoft Office, Adobe, Zoom) runs on Mac. Fewer games. A handful of niche business apps are Windows-only.',
        'Biggest software library of any platform. Runs almost everything — business apps, games, specialized tools.',
      ],
      ecosystem: [
        'Best if you have an iPhone or iPad. Messages, FaceTime, AirDrop, and Continuity are real time-savers.',
        'Works best with Android phones and Microsoft services (Outlook, OneDrive, Xbox). Better for mixed-device households.',
      ],
      support: [
        'Apple Stores for walk-in help. AppleCare adds a year of coverage and phone support. One point of contact for hardware and software.',
        'Varies by manufacturer. Microsoft supports Windows itself, but hardware repairs go through the laptop brand. Geek Squad and local repair shops are widespread.',
      ],
      longevity: [
        'Macs typically last 7-10 years with software support. Repair options are limited — most parts are not user-replaceable. Resale value is excellent.',
        'A well-built PC lasts 5-8 years. Parts are often replaceable (RAM, storage, battery on some models). Resale value is lower.',
      ],
      audience: [
        'Creatives, iPhone owners, people who value long lifespan, anyone who hates dealing with computer problems.',
        'Gamers, people with specific business software needs, budget shoppers, anyone who wants to upgrade parts down the road.',
      ],
    },
    takeaway: [
      'Mac is the better pick for iPhone owners, people who value consistency, and those who want a computer that "just works" for 7+ years.',
      'PC is the better pick for gaming, specialized Windows software, tighter budgets, or if you want to upgrade parts later.',
      'Both platforms can do 95% of the same things. The choice often comes down to what you already own and what software you need.',
    ],
    decision: [
      {
        question: 'Is gaming important to you?',
        options: [
          { label: 'Yes — a lot', leans: 'Windows PC' },
          { label: 'Not really', leans: 'Either works' },
        ],
      },
      {
        question: 'Do you need specific Windows-only software (e.g. QuickBooks Desktop, certain CAD tools)?',
        options: [
          { label: 'Yes', leans: 'Windows PC' },
          { label: 'No, I use common apps', leans: 'Either works' },
        ],
      },
      {
        question: 'Is budget the main factor?',
        options: [
          { label: 'Yes, under $700', leans: 'Windows PC' },
          { label: 'Flexible', leans: 'Mac for longevity' },
        ],
      },
      {
        question: 'Do you own an iPhone or iPad?',
        options: [
          { label: 'Yes', leans: 'Mac — the integration is real' },
          { label: 'No', leans: 'Either works' },
        ],
      },
    ],
  },
  {
    id: 'tablets',
    label: 'iPad vs Android Tablet vs Chromebook',
    shortLabel: 'Tablets',
    Icon: Tablet,
    description:
      'Three different ideas of what a "tablet" should be. iPads and Android tablets are touch-first. Chromebooks are laptops that sometimes flip into tablets and run in the Chrome browser.',
    columns: ['iPad', 'Android Tablet', 'Chromebook'],
    rows: {
      price: [
        'Starts around $350 (base iPad). iPad Pro goes over $1,000.',
        'Wide range: $150 (basic) to $1,200 (Samsung Galaxy Tab Ultra).',
        'Starts at $250. Most good Chromebooks are $400-$700.',
      ],
      ease: [
        'Very consistent. Same basic flow across every iPad.',
        'Varies by brand. Samsung\'s One UI is polished; cheaper brands can feel clunky.',
        'Simple if you already use Chrome and Google services. Boots in seconds.',
      ],
      privacy: [
        'Strong privacy defaults, same as iPhone.',
        'Varies by brand. Samsung is solid; unbranded tablets on sites like Amazon can have concerning preinstalled software.',
        'Google sees a lot of what you do — which is the trade-off for how cheap and easy it is.',
      ],
      apps: [
        'Huge, high-quality tablet app library. Best for creative apps like Procreate and Notability.',
        'Most apps run, but many weren\'t designed for tablet screens and look like stretched-out phone apps.',
        'Runs Chrome extensions, web apps, and most Android apps. Not great for heavy creative software.',
      ],
      ecosystem: [
        'Best for Apple users. Works seamlessly with iPhone and Mac.',
        'Best for Samsung or Google phone users.',
        'Best for Google / Gmail / Google Classroom households.',
      ],
      support: [
        'Apple Store walk-in service.',
        'Samsung has strong support; off-brand tablets often have none.',
        'Google offers online support; hardware support comes from the brand (Acer, Lenovo, HP).',
      ],
      longevity: [
        '6-8 years of software updates. Batteries not user-replaceable. Great resale value.',
        'Varies wildly. Samsung supports tablets for 5-7 years; budget tablets often stop after 2-3.',
        '10 years of automatic updates on newer models. Cheap to replace.',
      ],
      audience: [
        'Creatives, iPhone owners, students using digital notes, anyone who wants a "forever" tablet.',
        'Samsung phone owners, readers, people who want a bigger screen for Netflix without spending iPad money.',
        'Students (especially K-12), seniors who only need email and web, anyone on a tight budget.',
      ],
    },
    takeaway: [
      'iPad is the best all-around tablet — but it costs more.',
      'A Samsung Galaxy Tab is a great Android option and often runs cheaper than iPad with comparable quality.',
      'A Chromebook is the smartest choice if you mostly live in a web browser and want something simple for under $400.',
    ],
    decision: [
      {
        question: 'What will you mostly do with it?',
        options: [
          { label: 'Creative work (drawing, notes)', leans: 'iPad' },
          { label: 'Watch shows and browse', leans: 'iPad or Android tablet' },
          { label: 'Email, docs, web', leans: 'Chromebook' },
        ],
      },
      {
        question: 'What\'s your budget?',
        options: [
          { label: 'Under $300', leans: 'Chromebook or Android tablet' },
          { label: '$350-$600', leans: 'Base iPad or mid-range Samsung' },
          { label: '$700+', leans: 'iPad Air or iPad Pro' },
        ],
      },
    ],
  },
  {
    id: 'watches',
    label: 'Apple Watch vs Fitbit vs Galaxy Watch',
    shortLabel: 'Smartwatches',
    Icon: Watch,
    description:
      'Three different approaches to a watch on your wrist. Apple Watch is a mini-computer. Fitbit is a focused fitness tracker. Galaxy Watch is Samsung\'s answer to Apple Watch.',
    columns: ['Apple Watch', 'Fitbit', 'Galaxy Watch'],
    rows: {
      price: [
        '$249 (SE) to $799+ (Ultra). Most people spend $250-$400.',
        '$80 (basic tracker) to $300 (Fitbit Sense or Charge).',
        '$300 to $500.',
      ],
      ease: [
        'Simple if you already use iPhone. A lot to learn if it\'s your first smartwatch.',
        'The easiest to set up and use. Designed around fitness, not apps.',
        'Similar to Apple Watch. Cleaner than older Galaxy Watches.',
      ],
      privacy: [
        'Health data stays on-device and in encrypted iCloud. Strong privacy.',
        'Owned by Google. Health data ties to your Google account.',
        'Samsung-run health platform. Can integrate with Google Health too.',
      ],
      apps: [
        'Huge app library. Can replace your phone for calls, texts, music, and Apple Pay.',
        'Very limited. Focused on fitness tracking, not apps.',
        'Good app selection through Google Play on Wear OS.',
      ],
      ecosystem: [
        'Only works with iPhone. Pairs deeply with iPhone, Mac, AirPods.',
        'Works with both iPhone and Android, but limited features on iPhone.',
        'Only works with Android phones.',
      ],
      support: [
        'Apple Store walk-in.',
        'Online and phone support only.',
        'Samsung service centers and online.',
      ],
      longevity: [
        '4-6 years of software updates. Battery replacement $99.',
        '3-5 years. Batteries not replaceable.',
        '4-5 years. Battery replacement available.',
      ],
      audience: [
        'iPhone owners who want all-day smartwatch features and heart-health tracking.',
        'People who mainly want a fitness tracker and better battery life (up to 10 days).',
        'Samsung phone owners who want an Apple-Watch-like experience.',
      ],
    },
    takeaway: [
      'Apple Watch is the best smartwatch for iPhone owners. Period.',
      'Fitbit is the most focused and simplest — best for people who mostly want step counting, sleep, and heart rate.',
      'Galaxy Watch is the Apple Watch equivalent for Android owners.',
    ],
    decision: [
      {
        question: 'What phone do you use?',
        options: [
          { label: 'iPhone', leans: 'Apple Watch or Fitbit' },
          { label: 'Android', leans: 'Galaxy Watch or Fitbit' },
        ],
      },
      {
        question: 'How important is multi-day battery life?',
        options: [
          { label: 'Very important', leans: 'Fitbit (up to 10 days)' },
          { label: 'Don\'t mind charging daily', leans: 'Apple Watch or Galaxy Watch' },
        ],
      },
    ],
  },
  {
    id: 'speakers',
    label: 'Alexa vs Google Home vs Apple HomePod',
    shortLabel: 'Smart Speakers',
    Icon: Speaker,
    description:
      'Voice assistants in a speaker. Each one works better with certain phones, TVs, and smart-home gear.',
    columns: ['Amazon Alexa', 'Google Home / Nest', 'Apple HomePod'],
    rows: {
      price: [
        '$50 (Echo Dot) to $250 (Echo Show 10).',
        '$50 (Nest Mini) to $230 (Nest Audio + display).',
        '$99 (HomePod mini) to $299 (HomePod).',
      ],
      ease: [
        'Setup is straightforward. Works with the most third-party devices.',
        'Strong voice recognition, especially at understanding questions.',
        'Easiest for iPhone owners. Set up takes seconds.',
      ],
      privacy: [
        'Amazon stores voice recordings unless you opt out. Most to-do-list options to tighten.',
        'Google also records by default. Strong "Auto-delete" options now exist.',
        'Apple processes most voice requests on-device and does not tie them to your Apple ID by default.',
      ],
      apps: [
        'Largest "skills" library and best third-party compatibility.',
        'Strong Google service integration (Calendar, Gmail).',
        'Smaller third-party skill library. Works best with Apple services.',
      ],
      ecosystem: [
        'Works with more smart-home brands than anyone else.',
        'Best if you\'re already in Google services.',
        'Best for iPhone / Mac / Apple TV households.',
      ],
      support: [
        'Online and phone support from Amazon.',
        'Online support from Google.',
        'Apple Store walk-in support.',
      ],
      longevity: [
        '4-6 years. Affordable to replace.',
        '4-6 years. Affordable to replace.',
        '5-7 years. Higher build quality; costs more.',
      ],
      audience: [
        'Households who want the most smart-home options for the least money.',
        'Google service users and those who ask a lot of web questions.',
        'Apple households wanting the best sound quality and privacy.',
      ],
    },
    takeaway: [
      'Alexa is the best choice if you want lots of compatible smart-home gear without fuss.',
      'Google Home is the best choice if you\'re deep in Gmail, Google Calendar, and Google Maps.',
      'HomePod is the best choice for iPhone owners who care about privacy and sound quality — at a higher price.',
    ],
    decision: [
      {
        question: 'What\'s most important to you?',
        options: [
          { label: 'Cheap and works with everything', leans: 'Alexa' },
          { label: 'Best answers to questions', leans: 'Google Home' },
          { label: 'Privacy and sound quality', leans: 'Apple HomePod' },
        ],
      },
      {
        question: 'What phone do you use?',
        options: [
          { label: 'iPhone', leans: 'HomePod or Alexa' },
          { label: 'Android', leans: 'Google Home or Alexa' },
        ],
      },
    ],
  },
];

export default function DeviceComparison() {
  const [activeId, setActiveId] = useState<ComparisonId>('phones');
  const active = useMemo(
    () => comparisons.find((c) => c.id === activeId)!,
    [activeId]
  );

  return (
    <>
      <SEOHead
        title="iPhone vs Android, Mac vs PC — Honest Comparison Guide | TekSure"
        description="Side-by-side honest comparisons of the biggest tech choices — iPhone vs Android, Mac vs Windows, iPad vs Chromebook, Apple Watch vs Fitbit, and more."
        path="/tools/device-comparison"
      />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                <Scale className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Device Comparison
            </h1>
            <p className="text-muted-foreground text-lg">
              Honest, side-by-side comparisons of the biggest tech decisions. No "winners" — just clear trade-offs so you can pick what fits your life.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-5xl">
          {/* Comparison selector */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3">Choose a comparison:</p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Comparison options"
            >
              {comparisons.map((c) => {
                const Icon = c.Icon;
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${
                      isActive
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-background text-foreground/70 border-border hover:border-foreground/30'
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {c.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Intro */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <active.Icon className="h-6 w-6 text-foreground/70" aria-hidden="true" />
                {active.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{active.description}</p>
            </CardContent>
          </Card>

          {/* Comparison table */}
          <Card className="mb-6 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Side-by-Side</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px] min-w-[180px]">Category</TableHead>
                      {active.columns.map((col) => (
                        <TableHead key={col} className="min-w-[220px] font-semibold text-foreground">
                          {col}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((cat) => {
                      const row = active.rows[cat.id];
                      if (!row) return null;
                      return (
                        <TableRow key={cat.id} className="align-top">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <span aria-hidden="true">{cat.icon}</span>
                              <span>{cat.label}</span>
                            </div>
                          </TableCell>
                          {row.map((cell, i) => (
                            <TableCell key={i} className="text-sm leading-relaxed text-foreground/80">
                              {cell}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Takeaway */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden="true" />
                The honest takeaway
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {active.takeaway.map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Decision helper */}
          <Card className="mb-6 bg-muted/30 border-dashed">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-foreground/70" aria-hidden="true" />
                Decision Helper
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-sm text-muted-foreground">
                Answer these in your head. If most answers lean the same way, that's probably the right pick for you.
              </p>
              {active.decision.map((d, i) => (
                <div key={i} className="space-y-2">
                  <p className="font-medium text-sm">
                    {i + 1}. {d.question}
                  </p>
                  <ul className="space-y-1 text-sm pl-4">
                    {d.options.map((opt, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-foreground/40 mt-1">→</span>
                        <span>
                          <strong className="text-foreground">{opt.label}:</strong>{' '}
                          <span className="text-muted-foreground">{opt.leans}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* When in doubt */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Store className="h-6 w-6 text-foreground/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">When in doubt, visit a store</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specs only tell you so much. Holding a phone, typing on a laptop, or listening to a speaker in person is the best way to know if it feels right. Apple Stores, Best Buy, and major carrier stores let you try before you buy — no pressure to purchase that day.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/tools/device-chooser">
                        Try the Device Chooser
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/guides">
                        Read our device guides
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
