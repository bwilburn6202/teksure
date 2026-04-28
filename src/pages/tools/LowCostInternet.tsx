import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon, DollarSign } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  speed: string;
  who: string;
  signup: string[];
  link: string;
  notes?: string[];
  icon: LucideIcon;
}

const PLANS: Plan[] = [
  {
    name: 'Lifeline (federal program)',
    price: '$9.25/mo discount',
    speed: 'Varies by carrier',
    who: 'Income at or below 135% of federal poverty line, or anyone on SNAP, Medicaid, SSI, Veterans Pension, Federal Public Housing, or Tribal programs.',
    signup: [
      'Go to LifelineSupport.org → "Apply Now".',
      'Sign in or create a National Verifier account.',
      'Upload proof (Medicaid card, SNAP letter, etc.).',
      'Pick a participating carrier — search by zip code.',
      'They apply the $9.25 discount to your monthly bill.',
    ],
    link: 'https://www.lifelinesupport.org',
    icon: DollarSign,
    notes: [
      'Cannot stack with other federal discounts. One Lifeline benefit per household.',
      'You can use it for either internet OR phone — your choice.',
    ],
  },
  {
    name: 'Comcast Internet Essentials',
    price: '$9.95/mo or $14.95/mo',
    speed: 'Up to 100 Mbps',
    who: 'Households with at least one person on government assistance (SNAP, Medicaid, public housing). Or families with kids on free/reduced school lunch.',
    signup: [
      'InternetEssentials.com → check eligibility.',
      'Apply with proof of qualifying program.',
      'Comcast ships a modem within 5-7 days.',
      'Free Wi-Fi router included.',
    ],
    link: 'https://www.internetessentials.com',
    icon: Wifi,
    notes: [
      'No credit check, no contract.',
      'They\'ll also offer a $150 computer if you have never had Comcast internet.',
    ],
  },
  {
    name: 'AT&T Access',
    price: '$5–$10/mo',
    speed: 'Up to 100 Mbps',
    who: 'Households with at least one person on SNAP or Supplemental Security Income (SSI).',
    signup: [
      'att.com/internet/access → enter zip code.',
      'Confirm eligibility (a quick income/program check).',
      'Choose a plan; AT&T installs or ships a modem.',
    ],
    link: 'https://www.att.com/internet/access/',
    icon: Wifi,
    notes: [
      'Available in 21 states where AT&T fiber or DSL exists.',
      'No credit check, no installation fee.',
    ],
  },
  {
    name: 'T-Mobile Project 10Million (kids)',
    price: 'Free',
    speed: '100 GB/year of cellular data',
    who: 'School-age kids in households on the National School Lunch Program (free/reduced lunch).',
    signup: [
      'Project10Million.com → school district enrolls.',
      'Family receives a hotspot device.',
      '100 GB of free mobile internet per year for 5 years.',
    ],
    link: 'https://www.t-mobile.com/business/community/project-10-million',
    icon: Wifi,
    notes: [
      'Specifically for K-12 students. Not for adults.',
      'Hotspot is free; the data is free; lasts 5 years.',
    ],
  },
  {
    name: 'Spectrum Internet Assist',
    price: '$24.99/mo',
    speed: '50 Mbps',
    who: 'Households with at least one senior 65+ on SSI, OR families on the National School Lunch Program.',
    signup: [
      'Call Spectrum at 1-844-525-1574 (the Internet Assist line).',
      'Provide proof of eligibility.',
      'They schedule install or ship the modem.',
    ],
    link: 'https://www.spectrum.com/internet/internet-assist',
    icon: Wifi,
    notes: [
      'No data cap, no contract.',
      'Modem rental is included.',
    ],
  },
  {
    name: 'Mint Mobile (cheap cell phone for hotspot)',
    price: '$15/mo for 5 GB',
    speed: 'LTE/5G cellular',
    who: 'Anyone — no qualification needed. Use the phone hotspot as home internet for light use.',
    signup: [
      'mintmobile.com → pick a plan.',
      'Bring your phone or buy a cheap one ($150).',
      'Phone arrives by mail, set up over Wi-Fi.',
      'Turn on hotspot — laptops and tablets connect to it.',
    ],
    link: 'https://www.mintmobile.com',
    icon: Wifi,
    notes: [
      'Light use only — checking email, news, video calls. Streaming Netflix uses the data fast.',
      'Backup option for someone who needs internet but does not qualify for the assistance programs.',
    ],
  },
];

export default function LowCostInternet() {
  return (
    <>
      <SEOHead
        title="Low-Cost Internet Helper"
        description="Free or under-$25 home internet programs for seniors, low-income households, and families. Lifeline, Internet Essentials, AT&T Access, Spectrum Internet Assist, T-Mobile Project 10Million."
        path="/tools/low-cost-internet"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Wifi className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Low-Cost Internet Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six real programs that cut home internet to $25 a month or less. Most people who qualify never apply.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Low-Cost Internet' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on the Affordable Connectivity Program (ACP)</p>
                <p className="text-muted-foreground">
                  The federal ACP that offered $30/month off internet ended in mid-2024 when Congress did not renew funding. The programs below are still active and worth applying for in its place.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {PLANS.map(p => {
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
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{p.price}</Badge>
                          <Badge variant="outline">{p.speed}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3"><strong>Who qualifies:</strong> {p.who}</p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to sign up</p>
                    <ol className="space-y-1.5 mb-3">
                      {p.signup.map((s, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>

                    {p.notes && (
                      <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                        {p.notes.map((n, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span><span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                      Apply / learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Other places to look</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Public library Wi-Fi:</strong> often works in the parking lot too. Many libraries also lend portable hotspots for free.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Senior centers and county Area Agency on Aging:</strong> often run free computer rooms.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span><strong>EveryoneOn.org:</strong> a non-profit that finds the best low-cost program for your zip code in 2 minutes.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/router-upgrade-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Router Upgrade</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop renting from your ISP.</p>
              </Link>
              <Link to="/tools/bill-negotiator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bill Negotiator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lower an existing bill.</p>
              </Link>
              <Link to="/tools/library-power-pack" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Library Power Pack</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free streaming and books.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
