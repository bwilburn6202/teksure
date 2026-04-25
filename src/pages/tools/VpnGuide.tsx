import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Shield, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle2, AlertTriangle, Globe, Lock, Smartphone,
  Laptop, Star,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface FAQItem { q: string; a: string; }
interface VpnOption { name: string; free: boolean; platforms: string[]; rating: number; note: string; }

const faqs: FAQItem[] = [
  {
    q: 'What is a VPN?',
    a: 'A VPN (Virtual Private Network) is a tool that hides your internet activity from others on the same network — like strangers at a coffee shop, your internet provider, or certain websites. Think of it as a private tunnel for your internet connection.',
  },
  {
    q: 'Do I really need a VPN?',
    a: 'A VPN is most useful when you connect to public Wi-Fi — airports, cafes, hotels. If you only use the internet at home on your own secured Wi-Fi, a VPN is less critical. It can also help if you want extra privacy from your internet provider.',
  },
  {
    q: 'Is a free VPN safe to use?',
    a: 'Some free VPNs are trustworthy (like Proton VPN\'s free tier), but many free VPNs make money by selling your browsing data to advertisers — the opposite of what you want. Stick to well-known, reputable options.',
  },
  {
    q: 'Will a VPN slow down my internet?',
    a: 'A good VPN slows your connection by only 10–20%, which most people don\'t notice for everyday browsing and streaming. Very cheap or free VPNs can be much slower.',
  },
  {
    q: 'Can I use a VPN on my phone?',
    a: 'Yes! Every major VPN has apps for iPhone and Android. They work the same way as on a computer. Just install the app and tap "Connect".',
  },
];

const vpnOptions: VpnOption[] = [
  { name: 'Proton VPN', free: true, platforms: ['Windows', 'Mac', 'iPhone', 'Android'], rating: 5, note: 'Best free option — no data limit, based in Switzerland, strong privacy policy.' },
  { name: 'Mullvad', free: false, platforms: ['Windows', 'Mac', 'iPhone', 'Android'], rating: 5, note: 'No account needed — pay anonymously. Exceptional privacy. €5/month.' },
  { name: 'ExpressVPN', free: false, platforms: ['Windows', 'Mac', 'iPhone', 'Android', 'TV'], rating: 4, note: 'Very fast and easy to use. Great for streaming. ~$8/month.' },
  { name: 'NordVPN', free: false, platforms: ['Windows', 'Mac', 'iPhone', 'Android'], rating: 4, note: 'Popular and reliable. Good balance of speed and privacy. ~$4/month.' },
];

const steps = [
  {
    icon: Shield,
    title: 'Choose a VPN',
    body: 'Pick one from our recommended list below. For most people, Proton VPN (free) or NordVPN (paid, ~$4/month) are excellent starting points.',
  },
  {
    icon: Laptop,
    title: 'Download the app',
    body: 'Go to the VPN\'s official website or your phone\'s app store. Search for the VPN name and install. Never download VPN software from random websites — always use the official source.',
  },
  {
    icon: Lock,
    title: 'Create an account',
    body: 'Sign up with your email address. For services like Mullvad, you don\'t even need an email — just generate an account number. Pay with a card or PayPal.',
  },
  {
    icon: Globe,
    title: 'Connect',
    body: 'Open the app and tap or click "Connect". The app will automatically pick the fastest server near you. That\'s it — you\'re now protected.',
  },
  {
    icon: CheckCircle2,
    title: 'Verify it\'s working',
    body: 'Visit whatismyip.com in your browser. Your IP address should now show a location from the VPN\'s server, not your home address. If it does, the VPN is working correctly.',
  },
];

export default function VpnGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="VPN Setup Guide – TekSure Tools"
        description="Learn what a VPN is, whether you need one, and how to set it up on your phone or computer in under 10 minutes."
        path="/tools/vpn-guide"
      />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">VPN Setup Guide</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">VPN Setup Guide</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                What it is, whether you need one, and how to set it up in under 10 minutes.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">

            {/* Quick verdict */}
            <div>
              <Card className="border-[hsl(var(--teksure-warning)/0.4)] bg-[hsl(var(--teksure-warning)/0.06)]">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[hsl(var(--teksure-warning))] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">When do you most need a VPN?</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Any time you use public Wi-Fi — coffee shops, airports, hotels, libraries. On your home Wi-Fi, it's optional but adds extra privacy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How to set it up */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>How to set up a VPN — 5 simple steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-sm">{step.title}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Recommended VPNs */}
            <div>
              <h2 className="text-xl font-bold mb-3">Recommended VPNs</h2>
              <div className="space-y-3">
                {vpnOptions.map((vpn, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold">{vpn.name}</span>
                            {vpn.free && <Badge variant="outline" className="bg-[hsl(var(--teksure-success)/0.1)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)] text-xs">Free tier</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{vpn.note}</p>
                          <div className="flex flex-wrap gap-1">
                            {vpn.platforms.map(p => (
                              <Badge key={p} variant="secondary" className="text-xs">{p}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-0.5 shrink-0">
                          {Array.from({ length: 5 }).map((_, si) => (
                            <Star key={si} className={`h-3.5 w-3.5 ${si < vpn.rating ? 'fill-[hsl(var(--teksure-warning))] text-[hsl(var(--teksure-warning))]' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                TekSure has no affiliate relationship with any VPN provider. These recommendations are based on independent privacy audits and community trust.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold mb-3">Common Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <Card key={i} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium text-sm">{faq.q}</span>
                        {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                      </div>
                      {openFaq === i && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next steps */}
            <div className="flex flex-col sm:flex-row gap-3 pb-4">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/tools/cyber-scorecard">Check My Cybersecurity Score</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/guides?category=safety-guides">Browse Safety Guides →</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
