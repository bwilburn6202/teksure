import { Link } from 'react-router-dom';
import { Wifi, ExternalLink, Lightbulb, ArrowRight, Gauge, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const speedRanges = [
  {
    range: 'Under 5 Mbps',
    color: 'text-red-600',
    bg: 'bg-red-50 border-red-200',
    emoji: '🔴',
    meaning: 'May have trouble with video calls or streaming. Web pages may load slowly.',
  },
  {
    range: '5–25 Mbps',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50 border-yellow-200',
    emoji: '🟡',
    meaning: 'Good for most activities — email, browsing the web, and video calls.',
  },
  {
    range: '25–100 Mbps',
    color: 'text-green-600',
    bg: 'bg-green-50 border-green-200',
    emoji: '🟢',
    meaning: 'Great for streaming, video calls, and using multiple devices at the same time.',
  },
  {
    range: '100+ Mbps',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
    emoji: '🔵',
    meaning: 'Excellent — more than enough for everything you would want to do online.',
  },
];

const slowInternetTips = [
  {
    emoji: '🔄',
    title: 'Restart your router',
    desc: 'Unplug the power cable from your router, wait 30 seconds, then plug it back in. This fixes most slowdowns.',
  },
  {
    emoji: '📡',
    title: 'Move closer to your router',
    desc: 'Walls, floors, and distance weaken your Wi-Fi signal. Try moving to the same room as the router.',
  },
  {
    emoji: '📺',
    title: 'Check if other devices are using the internet',
    desc: 'If someone else is streaming a movie or downloading a large file, it can slow things down for everyone.',
  },
  {
    emoji: '🔌',
    title: 'Try a wired connection',
    desc: 'If your computer has an Ethernet port, plugging in a cable directly to the router gives a faster, more stable connection.',
  },
  {
    emoji: '📞',
    title: 'Contact your internet provider',
    desc: 'If speeds stay slow after trying the steps above, call your provider. They can check for outages or problems on their end.',
  },
  {
    emoji: '📈',
    title: 'Consider upgrading your plan',
    desc: 'If you have added more devices or started streaming more, you may need a faster internet plan. Ask your provider about options.',
  },
];

const WifiSpeed = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="WiFi Speed Test — Check Your Internet Speed | TekSure"
        description="Test your internet speed instantly and get tips to improve slow Wi-Fi. No app download needed."
        path="/tools/wifi-speed"
      />
      <Navbar />

      <section className="border-b">
        <div className="container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <Wifi className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">WiFi Speed Test</h1>
            <p className="text-lg opacity-80">Check your internet speed instantly — no app needed.</p>
          </div>
        </div>
      </section>

      <section className="container py-12 max-w-2xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/quick-fixes">Tools</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>WiFi Speed Test</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Speed test link */}
        <Card className="mb-10 overflow-hidden">
          <CardContent className="pt-6 text-center space-y-4">
            <h2 className="text-lg font-semibold">Test Your Internet Speed</h2>
            <p className="text-muted-foreground text-sm">
              This speed test is powered by <strong>Fast.com</strong>, a free tool made by Netflix.
              It is a trusted, independent website — it does not require a sign-up or download.
              When you click the button below, Fast.com will open in a new tab and automatically
              measure how fast your internet connection is.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="https://fast.com" target="_blank" rel="noopener noreferrer">
                Open Fast.com Speed Test <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Opens Fast.com in a new tab (a third-party website by Netflix). Free, no sign-up required.
            </p>
          </CardContent>
        </Card>

        {/* What the numbers mean */}
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          What Your Speed Test Numbers Mean
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          After you run the speed test on Fast.com, you will see a number measured in <strong>Mbps</strong> (megabits per second).
          This tells you how fast your internet connection is. Here is what different speeds mean for everyday use:
        </p>
        <div className="space-y-3 mb-12">
          {speedRanges.map((item) => (
            <Card key={item.range} className={`border ${item.bg}`}>
              <CardContent className="pt-5 pb-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className={`font-semibold text-base ${item.color}`}>{item.range}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.meaning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What to do if your internet is slow */}
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          What to Do If Your Internet Is Slow
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          If your speed test result is lower than expected, try these steps one at a time.
          After each step, run the speed test again to see if things improved.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {slowInternetTips.map((tip, i) => (
            <div key={i}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-5">
                  <span className="text-2xl mb-2 block">{tip.emoji}</span>
                  <h3 className="font-semibold text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Common US ISPs */}
        <Card className="mb-12 border-blue-100 bg-blue-50/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Common Internet Providers in the US
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              If you need to call your internet provider for help, here are the major ones.
              Your provider name is usually on your monthly internet bill.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Comcast / Xfinity</li>
              <li>AT&T Internet</li>
              <li>Spectrum (Charter)</li>
              <li>Verizon Fios</li>
              <li>T-Mobile Home Internet</li>
              <li>Cox Communications</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-b overflow-hidden">
          <CardContent className="py-8 text-center">
            <h2 className="text-xl font-bold mb-2">Still having WiFi issues?</h2>
            <p className="opacity-80 mb-4 text-sm">Our verified techs can diagnose and fix your network.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/signup">Get Expert Help <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default WifiSpeed;
