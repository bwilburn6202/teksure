import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Ear, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface TestApp {
  name: string;
  platform: string;
  what: string;
  how: string[];
  worksWhen: string;
  doesNotWorkWhen: string;
  link: string;
}

interface OtcAid {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const TEST_APPS: TestApp[] = [
  {
    name: 'Mimi Hearing Test',
    platform: 'iPhone and Android — free',
    what: 'A 6-minute hearing screening that gives you a personal hearing profile. Mimi was designed with audiologists and is used by Beyerdynamic and Loewe TVs to tune sound to your ears.',
    how: [
      'Download Mimi from the App Store or Google Play.',
      'Plug in wired headphones (not Bluetooth — wireless can throw off the test).',
      'Find a quiet room. No TV, no fan, no traffic noise.',
      'Tap the screen each time you hear a tone, even faint ones.',
      'Mimi shows your hearing age and a profile you can save or share with a doctor.',
    ],
    worksWhen: 'Good for a first check at home if you suspect hearing loss but have not seen an audiologist yet.',
    doesNotWorkWhen: 'Not a medical diagnosis. If results show moderate or worse loss, see a real audiologist for a full audiogram.',
    link: 'https://mimi.health/',
  },
  {
    name: 'SonicCloud',
    platform: 'iPhone and Android — free for the test, paid for personalized audio',
    what: 'A hearing test plus a sound personalization service. SonicCloud tunes the audio coming out of your phone, calls, and apps to match your hearing profile.',
    how: [
      'Download SonicCloud from the App Store or Google Play.',
      'Use wired headphones in a quiet room.',
      'Tap when you hear each tone — both ears tested separately.',
      'Save your profile. Phone calls and audio in supported apps will then sound clearer.',
      'For boosted call audio across all apps, the paid plan is around $15-$20 a month.',
    ],
    worksWhen: 'Helpful if calls and videos sound muddy and you want clearer audio without buying hearing aids yet.',
    doesNotWorkWhen: 'Does nothing for in-person conversations or TV audio that does not run through your phone.',
    link: 'https://www.soniccloud.com/',
  },
];

const OTC_AIDS: OtcAid[] = [
  {
    name: 'Apple AirPods Pro 2 (Hearing Aid mode)',
    price: '$250',
    whoFor: 'Best starting point if you already have an iPhone and your hearing loss is mild. FDA-cleared as a hearing aid.',
    pros: [
      'A quarter the price of most OTC hearing aids.',
      'Built-in hearing test runs right on your iPhone.',
      'Works as everyday earbuds for music and calls.',
      'No appointments, no fittings, no audiologist trip.',
    ],
    cons: [
      'iPhone required for the hearing-aid mode (iOS 18.2 or newer).',
      'Battery is 6 hours per charge — not all-day wear.',
      'Visible in your ears (not discreet like in-canal aids).',
    ],
    link: 'https://www.apple.com/airpods-pro/',
  },
  {
    name: 'Sony CRE-C10',
    price: '$1,000',
    whoFor: 'Best for people who want a discreet, in-canal device that disappears in your ear and lasts all day.',
    pros: [
      'Tiny — sits deep in the ear canal, almost invisible.',
      'Battery lasts about 70 hours (single-use, no charging).',
      'Self-fitting through the Sony Hearing Control app.',
      'Sold by Costco and Best Buy with return policies.',
    ],
    cons: [
      'No Bluetooth streaming for calls or music.',
      'Disposable batteries mean ongoing cost (about $5-$10 a month).',
      'No volume buttons on the device — adjust through the app only.',
    ],
    link: 'https://electronics.sony.com/hearing-solutions/p/crec10-b',
  },
  {
    name: 'Jabra Enhance Plus / Select',
    price: '$799 and up',
    whoFor: 'Best for people who want a real audiology experience without the audiologist office. Jabra Enhance includes 3 years of remote care from a licensed hearing professional.',
    pros: [
      'Includes 3 years of video calls with a real hearing specialist.',
      'Bluetooth streaming for phone calls.',
      'Rechargeable — no fiddling with tiny batteries.',
      '100-day return window.',
    ],
    cons: [
      'Pricier than the Sony or AirPods options.',
      'Behind-the-ear style is more visible.',
      'App is required for fine-tuning.',
    ],
    link: 'https://www.jabraenhance.com/',
  },
  {
    name: 'Eargo SE',
    price: '$1,850',
    whoFor: 'Best for people who want the most discreet device possible and have moderate budget. Eargo SE sits fully in the canal and uses soft silicone tips.',
    pros: [
      'Nearly invisible — a clear thread is the only thing you see.',
      'Rechargeable case, all-day battery.',
      'Lifetime support from Eargo specialists.',
      '45-day return policy.',
    ],
    cons: [
      'High price — close to entry-level prescription aids.',
      'No Bluetooth streaming.',
      'Tiny — quick to drop or lose.',
    ],
    link: 'https://www.eargo.com/',
  },
  {
    name: 'Lexie B2 Powered by Bose',
    price: '$999',
    whoFor: 'Best for people who want a name-brand audio company and a strong app. Bose stopped selling its own hearing aids and now licenses the technology to Lexie.',
    pros: [
      'Bose-tuned sound quality.',
      'Self-fit through the Lexie app — no clinic visit.',
      'Bluetooth for streaming calls and audio.',
      'Sold at Walgreens and Best Buy with in-person returns.',
    ],
    cons: [
      'Behind-the-ear, more visible than in-canal options.',
      'Subscription option ($49/month for 2 years) costs more long-term.',
      'App-required setup may be tough without a tech-comfortable family member.',
    ],
    link: 'https://lexiehearing.com/us/product/lexie-b2',
  },
];

interface BrandApp {
  brand: string;
  app: string;
  link: string;
  what: string;
}

const BRAND_APPS: BrandApp[] = [
  {
    brand: 'Phonak',
    app: 'myPhonak',
    link: 'https://www.phonak.com/en-us/global/myphonak-app',
    what: 'Adjust volume and bass/treble, switch programs (restaurant, music, quiet), and find lost hearing aids on a map.',
  },
  {
    brand: 'Oticon',
    app: 'Oticon ON',
    link: 'https://www.oticon.com/support/oticon-on-app',
    what: 'Volume, mute, change programs, check battery, and connect to IFTTT for smart-home triggers (lights blink when phone rings).',
  },
  {
    brand: 'ReSound',
    app: 'ReSound Smart 3D',
    link: 'https://www.resound.com/en-us/hearing-aids/apps',
    what: 'Fine-tune sound for any room, save favorite spots (your kitchen, your church), and get remote tuning from your audiologist.',
  },
];

export default function HearingAidApps() {
  const [showAllAids, setShowAllAids] = useState(false);

  return (
    <>
      <SEOHead
        title="Hearing Aid Apps & OTC Aids"
        description="Free hearing-test apps, brand-specific hearing aid apps, and a plain-English picker for over-the-counter hearing aids — AirPods Pro, Sony, Jabra, Eargo, Lexie."
        path="/tools/hearing-aid-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Ear className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Hearing Aid Apps & OTC Aids</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Free hearing tests on your phone, plus a plain-English picker for over-the-counter hearing aids you can buy today.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Hearing Aid Apps' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Read this first — who OTC hearing aids are for</p>
                <p className="text-muted-foreground">
                  Over-the-counter (OTC) hearing aids and hearing-test apps are designed for adults with mild-to-moderate hearing loss only. If you struggle to hear even loud voices, hear a constant ringing, have ear pain or sudden loss, or have lost hearing in only one ear, please see a licensed audiologist or ENT doctor. Moderate-to-severe loss needs a professional fitting and prescription aids — the wrong device can make hearing worse.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">1. Free hearing-test apps</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Start here. A test app on your phone takes 5-10 minutes and tells you whether you have a hearing concern at all — before you spend a dime on aids.
            </p>

            <div className="space-y-4">
              {TEST_APPS.map(app => (
                <Card key={app.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <p className="font-semibold text-base">{app.name}</p>
                      <Badge variant="outline">{app.platform}</Badge>
                    </div>
                    <p className="text-sm mb-3">{app.what}</p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to use it</p>
                    <ol className="space-y-2 mb-4">
                      {app.how.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                        <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">When it works</p>
                        <p className="text-xs">{app.worksWhen}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                        <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">When it does not</p>
                        <p className="text-xs">{app.doesNotWorkWhen}</p>
                      </div>
                    </div>

                    <a href={app.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      Visit official site <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border bg-muted/30 mt-5">
              <CardContent className="p-5">
                <p className="text-sm font-semibold mb-2">Brand-specific hearing aid apps (if you already have aids)</p>
                <p className="text-xs text-muted-foreground mb-3">
                  If you already wear prescription hearing aids, the manufacturer has a free app that controls them. These do not replace your audiologist — they let you make small adjustments yourself.
                </p>
                <div className="space-y-2">
                  {BRAND_APPS.map(b => (
                    <div key={b.brand} className="border-t border-border pt-2 first:border-t-0 first:pt-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="text-sm font-medium">{b.brand} — {b.app}</p>
                        <a href={b.link} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                          Official link <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{b.what}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">2. Over-the-counter hearing aid picker</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Since 2022, the FDA allows OTC hearing aids — no prescription needed for adults with mild-to-moderate loss. Five honest picks, ranked from cheapest to most expensive.
            </p>

            <div className="space-y-4 mb-4">
              {(showAllAids ? OTC_AIDS : OTC_AIDS.slice(0, 3)).map(aid => (
                <Card key={aid.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <p className="font-semibold text-base">{aid.name}</p>
                      <Badge variant="outline">{aid.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {aid.whoFor}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                        <ul className="space-y-0.5">
                          {aid.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                        <ul className="space-y-0.5">
                          {aid.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                        </ul>
                      </div>
                    </div>

                    <a href={aid.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      View on official site <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            {!showAllAids && (
              <Button variant="outline" onClick={() => setShowAllAids(true)}>Show all 5 OTC picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A few rules before you buy</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Always check the return window. 30-100 days is normal — anything shorter is a red flag.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Costco, Best Buy, and Walgreens carry OTC aids in person. Trying before buying helps.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Medicare does not cover OTC aids, but some Medicare Advantage plans do — call your plan to ask.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>If you have moderate-to-severe loss or hearing trouble in only one ear, see an audiologist before spending on OTC.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hearing-aid-pairing-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hearing Aid Pairing Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Connect your aids to iPhone or Android.</p>
              </Link>
              <Link to="/tools/low-vision-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Low-Vision Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Sight tools to pair with hearing.</p>
              </Link>
              <Link to="/accessibility" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Accessibility Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">All accessibility resources.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: book a baseline hearing test with an audiologist once a year after age 60, even if you feel fine. Catching loss early makes any device — OTC or prescription — work better.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
