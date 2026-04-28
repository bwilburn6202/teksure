import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Monitor, ChevronRight, ExternalLink } from 'lucide-react';

interface Pick {
  name: string;
  price: string;
  fits: string;
  why: string;
  pros: string[];
  cons: string[];
}

interface Category {
  id: string;
  title: string;
  summary: string;
  picks: Pick[];
}

const CATEGORIES: Category[] = [
  {
    id: 'monitor',
    title: 'Monitor',
    summary: 'A larger screen for reading documents and showing your face on video calls.',
    picks: [
      {
        name: 'LG 27UR550 — 27" 4K',
        price: 'around $300',
        fits: 'Daily remote workers, anyone reading long documents or spreadsheets.',
        why: 'A roomy 27 inches and sharp 4K text — words look crisp instead of blurry.',
        pros: [
          'Big enough to fit two windows side by side.',
          'Tilts and raises to a comfortable height.',
          'Plugs straight into a modern laptop with one cable.',
        ],
        cons: [
          'Older laptops may need an adapter for 4K output.',
          'Larger desk footprint than a 24-inch model.',
        ],
      },
      {
        name: 'Dell P2422H — 24" 1080p budget',
        price: 'around $170',
        fits: 'Light home use, occasional video calls, retirees who do not work full-time at the desk.',
        why: 'A reliable, no-frills business monitor that fits any laptop without hassle.',
        pros: [
          'Fits in tight spaces.',
          'Solid stand with height and tilt adjustment.',
          'Three-year warranty from Dell.',
        ],
        cons: [
          'Text is not as sharp as a 4K screen.',
          'Only 1080p — small fonts can look soft.',
        ],
      },
    ],
  },
  {
    id: 'chair',
    title: 'Chair',
    summary: 'The single most important purchase for back, hips, and shoulders during long sitting sessions.',
    picks: [
      {
        name: 'Steelcase Series 1',
        price: 'around $420',
        fits: 'Anyone sitting more than 4 hours a day. Built to last 10+ years.',
        why: 'Well-reviewed lumbar support and adjustable arms — your back will thank you.',
        pros: [
          'Adjustable arm height, seat depth, and lumbar.',
          'Built to last a decade or more.',
          '12-year warranty.',
        ],
        cons: [
          'Higher upfront cost.',
          'Assembly takes about 30 minutes.',
        ],
      },
      {
        name: 'Hbada Ergonomic Office Chair',
        price: 'around $170',
        fits: 'Light desk users — a couple of hours a day, hobby work, paying bills online.',
        why: 'A capable budget chair with mesh back and decent lumbar.',
        pros: [
          'Good value for occasional use.',
          'Mesh back stays cool.',
          'Arrives ready to assemble in 20 minutes.',
        ],
        cons: [
          'Padding flattens after a year or two of daily use.',
          'Fewer adjustments than a high-end chair.',
        ],
      },
    ],
  },
  {
    id: 'desk',
    title: 'Desk',
    summary: 'Pick adjustable height if you ever feel stiff after sitting. Otherwise a flat desk is fine.',
    picks: [
      {
        name: 'Flexispot Standing Desk (E7 or EC1)',
        price: 'around $300',
        fits: 'Anyone with back, hip, or knee stiffness who would benefit from standing for part of the day.',
        why: 'Push a button — desk goes from sitting height to standing height.',
        pros: [
          'Memory presets for sitting and standing heights.',
          'Quiet motor.',
          'Holds a monitor, laptop, and printer with room to spare.',
        ],
        cons: [
          'Heavier to assemble — get a friend to help with the frame.',
          'Costs about twice as much as a flat desk.',
        ],
      },
      {
        name: 'IKEA Bekant',
        price: 'around $150',
        fits: 'Anyone who is comfortable sitting and does not need a height-adjustable desk.',
        why: 'A solid, plain desk at a fair price from a brand you can find a replacement part for.',
        pros: [
          'Wide enough for two monitors if needed later.',
          'Simple assembly.',
          'Easy to find at a local store.',
        ],
        cons: [
          'No height adjustment.',
          'Plain look — not a statement piece.',
        ],
      },
    ],
  },
  {
    id: 'lighting',
    title: 'Lighting',
    summary: 'Front-facing light so your face is bright on video calls instead of a dark silhouette.',
    picks: [
      {
        name: 'BenQ ScreenBar',
        price: 'around $120',
        fits: 'Anyone on video calls weekly, or doing detailed paperwork at the desk.',
        why: 'Clips onto the top of your monitor, lights the desk and face without glaring on the screen.',
        pros: [
          'Saves desk space — no lamp footprint.',
          'Auto-adjusts brightness with a sensor.',
          'Warm or cool light at the touch of a dial.',
        ],
        cons: [
          'Higher price than a basic lamp.',
          'Needs a monitor with a flat top edge to clip onto.',
        ],
      },
      {
        name: 'Anker LED Desk Lamp',
        price: 'around $35',
        fits: 'Light home use, occasional video calls, reading mail at the desk.',
        why: 'A capable LED lamp at a friendly price — does the basics well.',
        pros: [
          'Multiple brightness levels.',
          'Long-lasting LED bulb.',
          'Plain, sturdy build.',
        ],
        cons: [
          'Takes up desk space.',
          'No auto-brightness sensor.',
        ],
      },
    ],
  },
  {
    id: 'webcam',
    title: 'Webcam',
    summary: 'A standalone webcam looks far better than the laptop camera on grandkid video calls.',
    picks: [
      {
        name: 'Logitech C920',
        price: 'around $60',
        fits: 'Anyone who wants a clear, sharp image on Zoom or FaceTime.',
        why: 'The standard plug-and-play webcam since 2012 — works on any computer.',
        pros: [
          'Plug it in by USB and it works — no software install needed.',
          'Sharp 1080p picture.',
          'Built-in microphone good enough for casual calls.',
        ],
        cons: [
          'Picture can look grainy in low light.',
          'No 4K — can look soft on a large monitor.',
        ],
      },
      {
        name: 'Logitech Brio 4K',
        price: 'around $170',
        fits: 'Frequent video meetings, presentations, or anyone with a poorly lit room.',
        why: 'Higher-end sensor handles low light well and gives a 4K image.',
        pros: [
          'Excellent low-light performance.',
          'Wide-angle option for fitting two people in frame.',
          '4K detail for important meetings.',
        ],
        cons: [
          'Costs nearly three times the C920.',
          'Most apps still cap at 1080p — full 4K rarely shows.',
        ],
      },
    ],
  },
  {
    id: 'microphone',
    title: 'Microphone',
    summary: 'A standalone mic so people on the call hear you clearly, not as muffled and far away.',
    picks: [
      {
        name: 'Logitech Litra Glow (light with a clip-on mic option)',
        price: 'around $80',
        fits: 'Anyone who wants better light and basic audio in one purchase.',
        why: 'Pairs nicely with a webcam — a small, USB light that improves how you look and sound.',
        pros: [
          'Doubles as a small video-call light.',
          'USB plug-and-play.',
          'Compact on the desk.',
        ],
        cons: [
          'Microphone is good, not pro-grade.',
          'Not the right pick if you record podcasts or sing.',
        ],
      },
      {
        name: 'Blue Yeti Nano',
        price: 'around $100',
        fits: 'Frequent meetings, family video chats, or recording voice memos.',
        why: 'A capable USB microphone that picks up your voice clearly without picking up the dishwasher.',
        pros: [
          'Big upgrade in voice clarity.',
          'Mute button right on top.',
          'Headphone jack for live monitoring.',
        ],
        cons: [
          'Takes up desk space.',
          'Needs a stand or boom arm if you want it close to your mouth.',
        ],
      },
    ],
  },
  {
    id: 'printer',
    title: 'Printer (the one that actually works)',
    summary: 'Honest pick: most printers are frustrating. Pay a bit more once and avoid yearly headaches.',
    picks: [
      {
        name: 'Brother HL-L2400D — black-and-white laser',
        price: 'around $180',
        fits: 'Anyone printing tax documents, recipes, boarding passes, or letters.',
        why: 'Toner lasts years, prints in seconds, and the connection rarely drops.',
        pros: [
          'Toner cartridges last 1-2 years for typical home use.',
          'Wi-Fi setup walks you through with a clear app.',
          'Reliable — does not refuse to print over a missing color.',
        ],
        cons: [
          'Black and white only.',
          'Not a photo printer.',
        ],
      },
      {
        name: 'Epson EcoTank ET-2400 — color all-in-one',
        price: 'around $230',
        fits: 'Households printing color photos, kids art, or anything with images.',
        why: 'Refillable ink bottles instead of cartridges — you stop dreading the price of ink.',
        pros: [
          'Two years of ink in the box.',
          'Scans and copies as well as prints.',
          'Color photos look good on plain paper.',
        ],
        cons: [
          'Slower than a laser printer.',
          'Slightly higher upfront price.',
        ],
      },
    ],
  },
];

export default function HomeOfficeSetup() {
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Home Office Setup"
        description="Set up a senior-friendly home office with a comfortable monitor, ergonomic chair, lighting, webcam, microphone, and a printer that actually works. Honest tradeoffs and US prices."
        path="/tools/home-office-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-sky-50 dark:from-indigo-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <Monitor className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Home Office Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A comfortable, senior-friendly home office for retirees and remote workers. Honest tradeoffs, US prices, and one clear pick at every level.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Home Office Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-1">How to use this page</p>
              <p className="text-xs text-muted-foreground">
                Each section below has two picks: a well-reviewed mid-priced option and a budget option that still does the job. Tick the box once you have made your choice in that category — your progress saves while you read.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {CATEGORIES.length} categories decided</p>

          <div className="space-y-4 mb-6">
            {CATEGORIES.map(cat => (
              <Card key={cat.id} className={`border-border ${done.has(cat.id) ? 'bg-green-50/40 dark:bg-green-950/10' : ''}`}>
                <CardContent className="p-5">
                  <label className="flex items-start gap-3 mb-4 cursor-pointer">
                    <Checkbox
                      checked={done.has(cat.id)}
                      onCheckedChange={() => toggle(cat.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <p className={`font-semibold text-lg ${done.has(cat.id) ? 'line-through text-muted-foreground' : ''}`}>
                        {cat.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">{cat.summary}</p>
                    </div>
                  </label>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.picks.map((pick, i) => (
                      <div key={i} className="rounded-lg border border-border p-4 bg-card">
                        <p className="font-semibold text-sm">{pick.name}</p>
                        <Badge variant="outline" className="mt-1 mb-2">{pick.price}</Badge>
                        <p className="text-xs text-muted-foreground mb-2">
                          <span className="font-semibold text-foreground">Fits: </span>{pick.fits}
                        </p>
                        <p className="text-xs mb-3">{pick.why}</p>

                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Pros</p>
                        <ul className="space-y-1 mb-3">
                          {pick.pros.map((p, j) => (
                            <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                              <span className="text-green-600">+</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cons</p>
                        <ul className="space-y-1">
                          {pick.cons.map((c, j) => (
                            <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                              <span className="text-amber-600">-</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-indigo-300 bg-indigo-50/60 dark:bg-indigo-950/20 mb-6">
            <CardContent className="p-5">
              <p className="font-semibold mb-2">Cheapest practical setup — around $700</p>
              <p className="text-sm text-muted-foreground mb-3">
                The full home office on a tight budget, picking the lower option in every category. Comfortable, capable, and good for years of light-to-medium use.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Dell P2422H 24" monitor</span>
                  <span className="text-muted-foreground">$170</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Hbada office chair</span>
                  <span className="text-muted-foreground">$170</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>IKEA Bekant desk</span>
                  <span className="text-muted-foreground">$150</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Anker LED desk lamp</span>
                  <span className="text-muted-foreground">$35</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Logitech C920 webcam</span>
                  <span className="text-muted-foreground">$60</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Built-in laptop microphone</span>
                  <span className="text-muted-foreground">free</span>
                </li>
                <li className="flex justify-between border-b border-border pb-1">
                  <span>Brother HL-L2400D laser printer</span>
                  <span className="text-muted-foreground">$180</span>
                </li>
                <li className="flex justify-between font-semibold pt-1">
                  <span>Total</span>
                  <span>~$765</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                You can shave $65 by skipping the printer and using a library or office store for the few pages a year you actually print, bringing the total to about $700.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="font-semibold mb-2">A note on cables and outlets</p>
              <p className="text-sm text-muted-foreground">
                Add a $25 surge protector with USB ports — protects all this gear from a power surge during a storm and gives you spots to charge a phone or tablet without crawling under the desk. Belkin and APC are the brands to look for.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/new-computer-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">New Computer Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up the laptop or PC that goes on this desk.</p>
              </Link>
              <Link to="/tools/router-upgrade-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Router Upgrade Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">A reliable Wi-Fi signal at the desk.</p>
              </Link>
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Telehealth Prep</p>
                <p className="text-xs text-muted-foreground mt-0.5">Use the same webcam and mic for doctor visits.</p>
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: buy the chair first. A good chair fixes back pain that no monitor or webcam can.
          </p>

          <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
            <ExternalLink className="h-3 w-3" /> Prices are US averages as of 2026 — check current price at the retailer before buying.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
