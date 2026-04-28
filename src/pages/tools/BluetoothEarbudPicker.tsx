import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Headphones, ExternalLink, Ear, Check, X, ShieldCheck } from 'lucide-react';

interface Earbud {
  name: string;
  price: string;
  whoFits: string;
  pros: string[];
  cons: string[];
  link: string;
  highlight?: string;
}

const EARBUDS: Earbud[] = [
  {
    name: 'AirPods Pro 2 (USB-C)',
    price: '$249',
    whoFits: 'Best with iPhone. Built-in hearing-aid mode (FDA-cleared) for mild-to-moderate hearing loss.',
    highlight: 'Top pick for iPhone users',
    pros: [
      'Hearing aid feature reads your hearing test and tunes audio for you',
      'Strong noise cancellation and a clear "Conversation Boost" mode',
      'Pair once with your Apple ID — every Apple device sees them',
    ],
    cons: [
      'Pricey at full retail',
      'Hearing aid mode needs an iPhone running iOS 18 or newer',
    ],
    link: 'https://www.apple.com/shop/buy-airpods/airpods-pro',
  },
  {
    name: 'AirPods 4 (with ANC)',
    price: '$179',
    whoFits: 'Cheaper Apple option for iPhone users who want the Apple feel without the Pro price.',
    pros: [
      'Open-fit design — nothing pushes inside the ear canal',
      'Same one-tap pairing with iPhone, iPad, Mac',
      'Lighter than the Pro and good for long wear',
    ],
    cons: [
      'No silicone tips — they can fall out during walks',
      'No hearing aid mode (that is Pro 2 only)',
    ],
    link: 'https://www.apple.com/shop/buy-airpods/airpods-4',
  },
  {
    name: 'Bose QuietComfort Earbuds (2nd Gen)',
    price: '$229',
    whoFits: 'Best comfort and noise cancellation. Great for travel, planes, noisy households.',
    highlight: 'Most comfortable for long wear',
    pros: [
      'Quietest noise cancellation of any earbud — blocks engines, fans, talking',
      'Soft tips in 4 sizes — finds a fit even for narrow ears',
      'Works equally with iPhone or Android',
    ],
    cons: [
      'Battery life shorter than AirPods Pro (about 6 hours)',
      'Larger case than most',
    ],
    link: 'https://www.bose.com/p/earbuds/bose-quietcomfort-earbuds-ii',
  },
  {
    name: 'Beats Studio Buds Plus',
    price: '$170',
    whoFits: 'A middle-ground pick that pairs cleanly with both iPhone and Android.',
    pros: [
      'One-tap pair on iPhone (Beats is owned by Apple) and on Android with the Beats app',
      'Clear-finish case and buds that look modern',
      '9-hour battery — longer than AirPods',
    ],
    cons: [
      'Noise cancellation is mild compared to Bose',
      'No wireless charging case',
    ],
    link: 'https://www.beatsbydre.com/earphones/studio-buds-plus',
  },
  {
    name: 'Jabra Elite 8 Active',
    price: '$199',
    whoFits: 'Active lifestyles — walks, yardwork, gym. Sweat- and dust-proof.',
    pros: [
      'Toughest waterproof rating (IP68) of any pick here',
      'Stays put during walks and exercise',
      'Connects to two devices at once (phone and tablet)',
    ],
    cons: [
      'Jabra is winding down its consumer earbud line — future support unclear',
      'Sound is good, not class-leading',
    ],
    link: 'https://www.jabra.com/bluetooth-headsets/jabra-elite-8-active',
  },
  {
    name: 'Anker Soundcore Liberty 4',
    price: '$100',
    whoFits: 'Budget pick under one hundred dollars with most of the features of premium pairs.',
    highlight: 'Best for tight budgets',
    pros: [
      'Heart rate sensor built in — surprising at this price',
      'Long 9-hour battery and wireless charging case',
      'Solid noise cancellation for the cost',
    ],
    cons: [
      'App setup is a few more steps than AirPods',
      'Sound and ANC are not on the Bose or AirPods Pro level',
    ],
    link: 'https://us.soundcore.com/products/soundcore-liberty-4',
  },
];

export default function BluetoothEarbudPicker() {
  return (
    <>
      <SEOHead
        title="Bluetooth Earbud Picker for Seniors"
        description="Compare the best Bluetooth earbuds for seniors — AirPods Pro 2 with hearing-aid mode, Bose QuietComfort, Beats, Jabra, and budget Anker. Plain-English pros, cons, and prices."
        path="/tools/bluetooth-earbud-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Headphones className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Bluetooth Earbud Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six earbuds compared in plain English. Find the right pair for your ears, your phone, and your budget.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Bluetooth Earbud Picker' }]} />

          <div className="space-y-4 mb-6">
            {EARBUDS.map((e) => (
              <Card key={e.name} className="border-border"><CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3 flex-wrap">
                  <div className="p-2 bg-primary/10 rounded-lg"><Headphones className="h-5 w-5 text-primary" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base">{e.name}</p>
                    <div className="flex gap-2 mt-1 flex-wrap"><Badge variant="outline">{e.price}</Badge>{e.highlight && <Badge className="bg-cyan-600">{e.highlight}</Badge>}</div>
                  </div>
                </div>
                <p className="text-sm mb-3"><span className="font-semibold">Who it fits: </span>{e.whoFits}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1.5 flex items-center gap-1"><Check className="h-3 w-3" />Pros</p>
                    <ul className="space-y-1">{e.pros.map((p, k) => (<li key={k} className="flex gap-2 text-xs"><span className="text-green-600 shrink-0">+</span><span>{p}</span></li>))}</ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1.5 flex items-center gap-1"><X className="h-3 w-3" />Cons</p>
                    <ul className="space-y-1">{e.cons.map((c, k) => (<li key={k} className="flex gap-2 text-xs"><span className="text-amber-600 shrink-0">-</span><span>{c}</span></li>))}</ul>
                  </div>
                </div>
                <a href={e.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">View on official site <ExternalLink className="h-3 w-3" /></a>
              </CardContent></Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30 mb-6"><CardContent className="p-5">
            <p className="text-sm font-semibold mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Quick tips before you buy</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {['Match the brand to your phone — AirPods with iPhone, anything else works fine on Android.', 'Try at least two ear-tip sizes. The right tip gives good bass and noise blocking, not the price.', 'If hearing loss is a real concern, AirPods Pro 2 hearing-aid mode is the best starting point at this price.', 'Check the return window — a 30-day "try it" return policy is normal at Apple, Bose, and Best Buy.'].map((t, i) => (<li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{t}</span></li>))}
            </ul>
          </CardContent></Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { to: '/tools/hearing-aid-pairing-wizard', t: 'Hearing Aid Pairing Wizard', d: 'Pair real hearing aids with your phone.' },
                { to: '/tools/podcast-starter', t: 'Podcast Starter', d: 'Your first podcasts for new earbuds.' },
                { to: '/tools/music-streaming-picker', t: 'Music Streaming Picker', d: 'Pick the right music app to pair with them.' },
              ].map(r => (
                <Link key={r.to} to={r.to} className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <p className="font-medium text-sm">{r.t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.d}</p>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1"><Ear className="h-3 w-3" /> Quick Tip: silicone tips block more sound than open-fit AirPods 4 — better for noisy rooms, worse if you want to hear the doorbell.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
