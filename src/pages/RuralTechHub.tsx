import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Wheat,
  Wifi,
  Map,
  Gauge,
  Signal,
  CloudLightning,
  Tractor,
  Stethoscope,
  ShoppingCart,
  Building2,
  Video,
  ArrowRight,
  Zap,
  Radio,
  Phone,
} from 'lucide-react';

const internetOptions = [
  {
    rank: '1',
    name: 'Fiber (if available)',
    speed: '300 Mbps – 5 Gbps',
    price: '$50–$100/mo',
    notes:
      'Fastest and most reliable if it reaches your address. Check AT&T Fiber, Frontier Fiber, or your local rural co-op. Use broadbandmap.fcc.gov to see what is really available at your address.',
  },
  {
    rank: '2',
    name: 'Cable internet',
    speed: '100 Mbps – 1 Gbps',
    price: '$50–$90/mo',
    notes:
      'Spectrum, Xfinity, Optimum, Cox. Usually the fastest thing most rural towns can get. If the cable company serves your street, this is usually the best value.',
  },
  {
    rank: '3',
    name: 'Fixed wireless',
    speed: '50–300 Mbps',
    price: '$50/mo',
    notes:
      'T-Mobile Home Internet and Verizon 5G Home use cell towers. No contract, plug in and go. Great if you have decent cell coverage. Weather and trees can affect it.',
  },
  {
    rank: '4',
    name: 'Starlink (satellite)',
    speed: '50–250 Mbps',
    price: '$120/mo + $599 hardware',
    notes:
      'SpaceX satellite internet. Works almost anywhere with a clear view of the sky. The fastest satellite option by far. Brief slowdowns during heavy rain or snow.',
  },
  {
    rank: '5',
    name: 'HughesNet / Viasat',
    speed: '25–100 Mbps',
    price: '$60–$150/mo',
    notes:
      'Older satellite internet. Slower than Starlink and with data caps. Only consider if Starlink is not available or if you cannot afford the $599 upfront.',
  },
  {
    rank: '6',
    name: 'Cellular hotspot',
    speed: 'Varies',
    price: '$25–$110/mo',
    notes:
      'Your phone plan or a dedicated hotspot. Good as backup or primary if you have strong cell signal. Data plans vary — T-Mobile and Verizon both have rural-friendly options.',
  },
  {
    rank: '7',
    name: 'DSL',
    speed: '1–25 Mbps',
    price: '$40–$70/mo',
    notes:
      'Old phone-line internet. Slow, but sometimes the only wired option in very rural areas. Work with what you have while waiting for fiber or fixed wireless to arrive.',
  },
];

const slowInternetTips = [
  {
    icon: Gauge,
    title: 'Schedule big downloads for overnight',
    description:
      'Windows updates, phone backups, iCloud Photos uploads — let them run from 1am to 6am when nobody is using the connection. Set it and forget it.',
  },
  {
    icon: Video,
    title: 'Lower video quality when you video call',
    description:
      'On Zoom: Settings → Video → turn off HD. On FaceTime: it auto-adjusts. This alone can cut your data use in half without hurting the call much.',
  },
  {
    icon: Wifi,
    title: 'Use WiFi only for big things',
    description:
      'Phone on WiFi at home = no using cellular data for YouTube, photo backups, or app updates. Check your phone settings to make sure WiFi is the priority.',
  },
  {
    icon: ArrowRight,
    title: 'Compress email attachments',
    description:
      'A 10 MB photo attachment chokes slow email. Zip files, resize photos before sending, or use a link (Google Drive, Dropbox) instead of attaching.',
  },
];

const signalBoosters = [
  {
    name: 'weBoost Home MultiRoom',
    price: '~$500',
    description:
      'The most popular home cell booster. Covers up to 5,000 sq ft. Works with all US carriers. An outdoor antenna catches a weak signal, amplifies it, and rebroadcasts inside your home.',
  },
  {
    name: 'SureCall Flare',
    price: '~$400',
    description:
      'A little cheaper. Good for smaller homes (up to 3,500 sq ft). Easier to install yourself. Works well for a single room or floor.',
  },
  {
    name: 'WiFi Calling (free)',
    price: 'Free',
    description:
      'Every modern iPhone and Android supports WiFi Calling. When your cell signal is weak but WiFi is good, calls go through your internet instead. Turn it on in phone settings.',
  },
  {
    name: 'Google Voice / VoIP',
    price: 'Free – $10/mo',
    description:
      'If you have internet but no cell signal at all, a VoIP number (Google Voice, Ooma, Vonage) lets you make and receive calls from your computer or WiFi-connected phone.',
  },
];

const weatherApps = [
  {
    name: 'NOAA Weather Radio (free)',
    description:
      'The National Weather Service app. Government-run, no ads, always free. Sends warnings for your exact location. The most accurate source in America.',
  },
  {
    name: 'Watch Duty (free)',
    description:
      'Real-time wildfire alerts run by volunteer firefighters. Essential if you live in the western US or any wildfire-prone area. Free, non-profit, better than 911 updates.',
  },
  {
    name: 'Windy',
    description:
      'Best for farmers and ranchers. Shows wind patterns, radar, and storm tracking in a way that is useful for planning work outside.',
  },
  {
    name: 'Offline maps (Google Maps / Apple Maps)',
    description:
      'Download the maps of your county BEFORE you lose signal. On Google Maps: tap your profile → Offline maps. Works in the truck without cell service.',
  },
];

const farmTech = [
  {
    name: 'Climate FieldView',
    description:
      'Free basic version. Field mapping, rainfall tracking, yield data. Used by corn and soybean farmers across the Midwest.',
  },
  {
    name: 'AgriWebb',
    description:
      'Livestock record-keeping — mobs, health, breeding, pasture moves. Works offline and syncs when you get back in signal.',
  },
  {
    name: 'OnX Hunt / OnX Offroad',
    description:
      'Property boundaries, gates, and trails. Good for ranchers tracking their own land or mapping fence lines. Works without cell signal.',
  },
  {
    name: 'GasBuddy',
    description:
      'Fuel prices in your area. Real money savings when you are driving 30+ miles to a pump. Shows diesel prices too.',
  },
  {
    name: 'Ambient Weather stations',
    description:
      'Around $150–$300. Put a weather station on your property and get rainfall, wind, and temperature data on your phone. Smarter than the nearest airport reading.',
  },
];

const telehealthOptions = [
  {
    name: 'VA Telehealth',
    description:
      'Free for veterans. Primary care, mental health, specialty consults — all from home. The VA has been doing rural telehealth for years and does it well.',
  },
  {
    name: 'Project ECHO',
    description:
      'Connects your local doctor with specialists at big hospitals. You stay with your rural doctor but they get expert backup. Ask your doctor if they use ECHO.',
  },
  {
    name: 'CVS MinuteClinic Virtual',
    description:
      'Video visits for minor issues (sinus, pink eye, UTIs). $70 without insurance, often $0 with insurance. No driving 40 minutes to a clinic.',
  },
  {
    name: 'Walgreens Find Care',
    description:
      'Virtual urgent care with prescriptions sent to your local pharmacy. Useful when the nearest doctor is an hour away and you have a sore throat.',
  },
  {
    name: 'Teladoc / MDLive',
    description:
      'Big general telehealth services. Often free through your employer or insurance. Check before paying — you probably already have it.',
  },
];

const shoppingTips = [
  {
    name: 'Amazon Subscribe & Save',
    description:
      'Auto-delivery of staples (coffee, paper towels, dog food, vitamins) every 1–6 months. Save 5–15%. Perfect when the nearest Walmart is 45 minutes away.',
  },
  {
    name: 'Costco online',
    description:
      'Costco will ship almost everything to your rural address. Bulk prices, no driving to the warehouse. Some items are Costco-online-only with free 2-day shipping.',
  },
  {
    name: 'Chewy Autoship',
    description:
      'Pet food and supplies. Free shipping over $49, auto-delivery, and Chewy customer service is famous for rural flexibility (lost packages, delivery changes).',
  },
  {
    name: 'USPS delivery tricks',
    description:
      'If UPS or FedEx can not find your address, Amazon will often ship via USPS to the same address because USPS uses your route number. Check shipping options carefully.',
  },
];

const govHelp = [
  {
    name: 'USDA ReConnect Program',
    description:
      'Federal grants to build broadband in rural areas. If your county does not have good internet, check usda.gov/reconnect — your area may be in line for fiber soon.',
  },
  {
    name: 'FCC Lifeline',
    description:
      'Monthly discount ($9.25) on phone or internet service for qualifying low-income rural households. Works with Verizon, T-Mobile, and others. Apply at lifelinesupport.org.',
  },
  {
    name: 'State rural broadband offices',
    description:
      'Every US state has a broadband office that tracks which homes still need internet. They can sometimes point you to a local provider you did not know existed.',
  },
  {
    name: 'USDA Rural Development',
    description:
      'Grants and loans for home improvements, including internet infrastructure for farms and ranches. Talk to your local USDA Service Center.',
  },
];

const connectOptions = [
  {
    name: 'WhatsApp',
    description:
      'Uses very little data. Video calls work on slower connections. Great for staying in touch with family far away — especially if any of them live overseas.',
  },
  {
    name: 'FaceTime Audio',
    description:
      'For iPhone-to-iPhone calls, FaceTime Audio uses less data than video and sounds better than a regular phone call. Free through your WiFi.',
  },
  {
    name: 'Email + photos',
    description:
      'Sometimes an email with a photo is better than a video call on slow internet. Faster, easier to save, and grandparents love getting them.',
  },
  {
    name: 'Marco Polo',
    description:
      'Video messages you record and send — no live call needed. Perfect for slow or unreliable connections. You record when you have signal, they watch when they do.',
  },
];

export default function RuralTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Rural Tech Hub — Internet & Tech for the Countryside | TekSure"
        description="Practical tech guide for rural life — internet options by priority, signal boosters, weather apps, farm tools, telehealth, and government programs that help."
        path="/rural-tech-hub"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Wheat className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Tech for Life Outside the City
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Slow internet, no cell signal, long distances — rural life has its own tech
              challenges. Here's the complete guide.
            </p>
          </div>
        </section>

        {/* Internet Options */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">Priority order</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Your internet options, best to worst
            </h2>
            <p className="text-muted-foreground">
              Go down this list in order. The first one that is actually available at your
              address is usually the right answer.
            </p>
          </div>

          <div className="space-y-3">
            {internetOptions.map((opt) => (
              <Card key={opt.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0 font-bold text-primary">
                      {opt.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{opt.name}</h3>
                        <Badge variant="secondary" className="text-xs">{opt.speed}</Badge>
                        <Badge variant="outline" className="text-xs">{opt.price}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{opt.notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Check Availability */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-4xl py-12">
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-8">
                <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-4">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  Check what is really available at your address
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">FCC National Broadband Map</strong> —
                    broadbandmap.fcc.gov — the official government map. Enter your address and see
                    every provider that claims to serve you, with real speeds, not marketing.
                  </p>
                  <p>
                    <strong className="text-foreground">Starlink availability</strong> —
                    starlink.com — just enter your address and they will tell you if you can get
                    service today or if you are on a waitlist.
                  </p>
                  <p>
                    <strong className="text-foreground">T-Mobile Home Internet</strong> —
                    t-mobile.com/home-internet — enter your address to see if 5G Home is available
                    on your exact street.
                  </p>
                  <p>
                    <strong className="text-foreground">Your state broadband office</strong> —
                    search "[your state] broadband office" — these offices know about local
                    co-ops, new fiber projects, and programs most people do not.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Slow Internet Tips */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Making slow internet workable
            </h2>
            <p className="text-muted-foreground">
              Four habits that make a 25 Mbps connection feel like a 100 Mbps connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {slowInternetTips.map((tip) => (
              <Card key={tip.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5 flex gap-3">
                  <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center shrink-0">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cell Signal Boosters */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Signal className="h-7 w-7" />
                Getting a cell signal in the middle of nowhere
              </h2>
              <p className="text-muted-foreground">
                One bar of signal is better than no signal. Here is how to turn a weak signal
                into a usable one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {signalBoosters.map((b) => (
                <Card key={b.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Radio className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{b.name}</h3>
                      <Badge variant="secondary" className="text-xs">{b.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weather */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <CloudLightning className="h-7 w-7" />
              Weather preparedness
            </h2>
            <p className="text-muted-foreground">
              When the power goes out or a storm is coming, your phone becomes your lifeline.
              Have these ready before you need them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {weatherApps.map((w) => (
              <Card key={w.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{w.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-2xl border border-border bg-primary/5 mt-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backup power basics</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A $40 battery pack keeps your phone alive for 3 days. A $200 Jackery or EcoFlow
                    keeps the WiFi router, phone, and a light going for an overnight outage. A
                    generator handles multi-day storms. For rural homes, plan in layers — phone
                    first, communications second, appliances third.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Farm Tech */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Tractor className="h-7 w-7" />
                Farm and ranch tech
              </h2>
              <p className="text-muted-foreground">
                Practical tools that actually save time and money on a working farm or ranch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {farmTech.map((t) => (
                <Card key={t.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Telehealth */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Stethoscope className="h-7 w-7" />
              Telehealth for rural areas
            </h2>
            <p className="text-muted-foreground">
              When the nearest doctor is 40 miles away, telehealth is a real solution — not a
              downgrade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {telehealthOptions.map((t) => (
              <Card key={t.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{t.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Online Shopping */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <ShoppingCart className="h-7 w-7" />
                Online shopping for rural addresses
              </h2>
              <p className="text-muted-foreground">
                Getting packages delivered reliably when your address is a route number.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {shoppingTips.map((s) => (
                <Card key={s.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Programs */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Building2 className="h-7 w-7" />
              Government programs that actually help
            </h2>
            <p className="text-muted-foreground">
              Your tax dollars have been paying for rural tech help for decades. Here is how to
              claim some of it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {govHelp.map((g) => (
              <Card key={g.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{g.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Staying Connected */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Phone className="h-7 w-7" />
                Staying connected with family
              </h2>
              <p className="text-muted-foreground">
                Video calls on a slow connection can be frustrating. Pick the tool that fits your
                actual connection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {connectOptions.map((c) => (
                <Card key={c.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{c.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <Wheat className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Rural does not mean behind
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                With the right setup, a farm in Iowa can have internet as good as an apartment
                in Chicago. These guides walk you through getting there.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/guides">
                    Browse all guides
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/emergency-tech">Emergency tech prep</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
