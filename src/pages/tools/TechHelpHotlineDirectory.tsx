import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Phone,
  Search,
  Printer,
  Apple,
  Smartphone,
  Wifi,
  CreditCard,
  HeartPulse,
  ShieldCheck,
  Library,
  Tv,
  Laptop,
  Mail,
  AlertCircle,
} from 'lucide-react';

interface Hotline {
  name: string;
  number: string;
  url?: string;
  hours: string;
  notes: string;
  free: boolean;
  category:
    | 'Apple'
    | 'Microsoft / Windows'
    | 'Google / Android'
    | 'Phone Carriers'
    | 'Internet Providers'
    | 'Banks & Cards'
    | 'Government & Civic'
    | 'Senior Tech Help'
    | 'Streaming & TV'
    | 'Scams & Fraud';
  icon: typeof Phone;
}

const HOTLINES: Hotline[] = [
  // Apple
  {
    name: 'Apple Support (iPhone, iPad, Mac, Apple Watch)',
    number: '1-800-275-2273',
    url: 'https://support.apple.com',
    hours: '24/7',
    notes: 'For any Apple device. Free for hardware in warranty; software help is always free. Spanish available.',
    free: true,
    category: 'Apple',
    icon: Apple,
  },
  {
    name: 'Apple ID Recovery',
    number: '1-800-275-2273',
    url: 'https://iforgot.apple.com',
    hours: '24/7',
    notes: 'Use the website first — it walks through recovery automatically. Call only if the website cannot help.',
    free: true,
    category: 'Apple',
    icon: Apple,
  },

  // Microsoft / Windows
  {
    name: 'Microsoft Support (Windows, Office, Outlook)',
    number: '1-800-642-7676',
    url: 'https://support.microsoft.com',
    hours: 'Mon-Fri 5am-9pm PT, Sat-Sun 6am-3pm PT',
    notes: 'For any Microsoft software issue. Microsoft account recovery is also handled here. Spanish available.',
    free: true,
    category: 'Microsoft / Windows',
    icon: Laptop,
  },
  {
    name: 'Microsoft Account Recovery',
    number: '1-800-642-7676',
    url: 'https://account.live.com/acsr',
    hours: '24/7 (web form); phone hours above',
    notes: 'For lost Microsoft, Outlook, or Hotmail passwords. Use the website first — phone is for unusual cases.',
    free: true,
    category: 'Microsoft / Windows',
    icon: Laptop,
  },

  // Google / Android
  {
    name: 'Google Pixel Support',
    number: '1-855-836-3987',
    url: 'https://support.google.com/pixelphone',
    hours: 'Mon-Fri 6am-8pm PT, weekends 7am-6pm PT',
    notes: 'For Pixel phone hardware and Android software. Free chat 24/7 on the website.',
    free: true,
    category: 'Google / Android',
    icon: Smartphone,
  },
  {
    name: 'Samsung Support',
    number: '1-800-726-7864',
    url: 'https://samsung.com/us/support',
    hours: '24/7',
    notes: 'For any Samsung phone, tablet, or TV. Spanish available.',
    free: true,
    category: 'Google / Android',
    icon: Smartphone,
  },
  {
    name: 'Google Account Recovery',
    number: 'Web only',
    url: 'https://accounts.google.com/recovery',
    hours: '24/7',
    notes: 'Google does not have a phone line for account recovery — only the website. Beware: numbers claiming to be Google Support are scams.',
    free: true,
    category: 'Google / Android',
    icon: Smartphone,
  },

  // Phone Carriers
  {
    name: 'Verizon Wireless Customer Service',
    number: '1-800-922-0204',
    url: 'https://verizon.com/support',
    hours: '24/7',
    notes: 'For Verizon mobile accounts. Spanish available.',
    free: true,
    category: 'Phone Carriers',
    icon: Phone,
  },
  {
    name: 'AT&T Wireless Customer Service',
    number: '1-800-331-0500',
    url: 'https://att.com/support',
    hours: '24/7',
    notes: 'For AT&T mobile accounts. Dial 611 from an AT&T phone for direct connection.',
    free: true,
    category: 'Phone Carriers',
    icon: Phone,
  },
  {
    name: 'T-Mobile Customer Service',
    number: '1-800-937-8997',
    url: 'https://t-mobile.com/support',
    hours: '24/7',
    notes: 'For T-Mobile mobile accounts. Dial 611 from a T-Mobile phone.',
    free: true,
    category: 'Phone Carriers',
    icon: Phone,
  },
  {
    name: 'Consumer Cellular',
    number: '1-888-345-5509',
    url: 'https://consumercellular.com',
    hours: 'Mon-Fri 6am-8pm CT, Sat-Sun 6am-4pm CT',
    notes: 'US-based customer service rated highly by AARP. Spanish available.',
    free: true,
    category: 'Phone Carriers',
    icon: Phone,
  },

  // Internet Providers
  {
    name: 'Comcast Xfinity Customer Service',
    number: '1-800-934-6489',
    url: 'https://xfinity.com/support',
    hours: '24/7',
    notes: 'For internet, TV, and phone. Spanish available.',
    free: true,
    category: 'Internet Providers',
    icon: Wifi,
  },
  {
    name: 'Spectrum (Charter) Customer Service',
    number: '1-855-707-7328',
    url: 'https://spectrum.net/support',
    hours: '24/7',
    notes: 'For internet, TV, and Spectrum Mobile.',
    free: true,
    category: 'Internet Providers',
    icon: Wifi,
  },
  {
    name: 'AT&T Internet (Fiber/DSL) Customer Service',
    number: '1-800-288-2020',
    url: 'https://att.com/support/internet',
    hours: '24/7',
    notes: 'For AT&T home internet, fiber, and U-verse.',
    free: true,
    category: 'Internet Providers',
    icon: Wifi,
  },

  // Senior Tech Help (the big ones)
  {
    name: 'AARP Tech Wise Help Line',
    number: '1-877-908-2587',
    url: 'https://aarp.org/home-family/personal-technology',
    hours: 'Mon-Fri 7am-11pm ET',
    notes: 'Free 1-on-1 help with any tech question for anyone 50+. AARP membership NOT required. The single best resource for general tech help.',
    free: true,
    category: 'Senior Tech Help',
    icon: HeartPulse,
  },
  {
    name: 'Senior Planet (AARP)',
    number: '1-920-666-1959',
    url: 'https://seniorplanet.org',
    hours: 'Mon-Fri 9am-5pm ET',
    notes: 'Free online tech classes (Zoom-based) for 60+. Real human helps you sign up. Veterans track available.',
    free: true,
    category: 'Senior Tech Help',
    icon: HeartPulse,
  },
  {
    name: 'GetSetUp',
    number: '1-888-559-1614',
    url: 'https://getsetup.io',
    hours: 'Mon-Fri 8am-9pm ET',
    notes: 'Free live tech classes taught by older adults. Phone support to help you sign up. Many state Medicaid programs cover advanced features at no cost.',
    free: true,
    category: 'Senior Tech Help',
    icon: HeartPulse,
  },

  // Government & Civic
  {
    name: 'Medicare General Information',
    number: '1-800-633-4227',
    url: 'https://medicare.gov',
    hours: '24/7',
    notes: '1-800-MEDICARE. For all Medicare benefit questions, claims, and account help. Spanish available.',
    free: true,
    category: 'Government & Civic',
    icon: ShieldCheck,
  },
  {
    name: 'Social Security Administration',
    number: '1-800-772-1213',
    url: 'https://ssa.gov',
    hours: 'Mon-Fri 8am-7pm ET',
    notes: 'For Social Security accounts, my Social Security login problems, and benefit questions. TTY 1-800-325-0778.',
    free: true,
    category: 'Government & Civic',
    icon: ShieldCheck,
  },
  {
    name: 'IRS Customer Service',
    number: '1-800-829-1040',
    url: 'https://irs.gov',
    hours: 'Mon-Fri 7am-7pm local time',
    notes: 'For tax questions, refund status, and IRS online account help. Long hold times — try the website first.',
    free: true,
    category: 'Government & Civic',
    icon: ShieldCheck,
  },
  {
    name: 'VA Video Connect Help Desk (Veterans)',
    number: '1-866-651-3180',
    url: 'https://va.gov/connectedcare',
    hours: 'Mon-Fri 7am-11pm ET',
    notes: 'Free help for veterans setting up video appointments with the VA. Walks you through every step.',
    free: true,
    category: 'Government & Civic',
    icon: ShieldCheck,
  },

  // Banks & Cards
  {
    name: 'Chase Customer Service',
    number: '1-800-935-9935',
    url: 'https://chase.com',
    hours: '24/7',
    notes: 'For Chase bank accounts and Chase credit cards.',
    free: true,
    category: 'Banks & Cards',
    icon: CreditCard,
  },
  {
    name: 'Bank of America',
    number: '1-800-432-1000',
    url: 'https://bankofamerica.com',
    hours: '24/7',
    notes: 'For Bank of America accounts and online banking issues.',
    free: true,
    category: 'Banks & Cards',
    icon: CreditCard,
  },
  {
    name: 'Wells Fargo',
    number: '1-800-869-3557',
    url: 'https://wellsfargo.com',
    hours: '24/7',
    notes: 'For Wells Fargo accounts. Spanish available.',
    free: true,
    category: 'Banks & Cards',
    icon: CreditCard,
  },
  {
    name: 'American Express',
    number: '1-800-528-4800',
    url: 'https://americanexpress.com',
    hours: '24/7',
    notes: 'For all Amex cards. Card on the back has the phone number too.',
    free: true,
    category: 'Banks & Cards',
    icon: CreditCard,
  },

  // Streaming & TV
  {
    name: 'Netflix Customer Service',
    number: '1-844-505-2993',
    url: 'https://netflix.com/help',
    hours: '24/7',
    notes: 'For Netflix billing, login, and streaming problems. Live chat also available 24/7.',
    free: true,
    category: 'Streaming & TV',
    icon: Tv,
  },
  {
    name: 'Roku Support',
    number: '1-816-272-8106',
    url: 'https://support.roku.com',
    hours: 'Mon-Sat 6am-6pm CT',
    notes: 'For Roku devices. Free chat and email support 24/7 on the website.',
    free: true,
    category: 'Streaming & TV',
    icon: Tv,
  },
  {
    name: 'Amazon Prime Video Support',
    number: '1-888-280-4331',
    url: 'https://amazon.com/help',
    hours: '24/7',
    notes: 'For Prime Video streaming, Fire TV, and Amazon account questions.',
    free: true,
    category: 'Streaming & TV',
    icon: Tv,
  },

  // Scams & Fraud
  {
    name: 'AARP Fraud Watch Helpline',
    number: '1-877-908-3360',
    url: 'https://aarp.org/fraudwatchnetwork',
    hours: 'Mon-Fri 8am-8pm ET',
    notes: 'Talk to a fraud specialist. Help if you have been scammed or want to verify if something is a scam. Free for everyone — AARP membership NOT required.',
    free: true,
    category: 'Scams & Fraud',
    icon: AlertCircle,
  },
  {
    name: 'FTC Consumer Reporting (ReportFraud.ftc.gov)',
    number: '1-877-382-4357',
    url: 'https://reportfraud.ftc.gov',
    hours: 'Mon-Fri 9am-8pm ET',
    notes: 'Report any fraud or scam. The website is faster than the phone for most reports.',
    free: true,
    category: 'Scams & Fraud',
    icon: AlertCircle,
  },
  {
    name: 'FBI Internet Crime Complaint Center (IC3)',
    number: 'Web only',
    url: 'https://ic3.gov',
    hours: '24/7',
    notes: 'Report online fraud and cybercrime to the FBI. Use this in addition to the FTC for any major loss.',
    free: true,
    category: 'Scams & Fraud',
    icon: AlertCircle,
  },
  {
    name: 'Identity Theft Recovery (IdentityTheft.gov)',
    number: '1-877-438-4338',
    url: 'https://identitytheft.gov',
    hours: 'Mon-Fri 9am-8pm ET',
    notes: 'FTC-run service that builds a personalized recovery plan if your identity has been stolen. The website is the best place to start.',
    free: true,
    category: 'Scams & Fraud',
    icon: AlertCircle,
  },
];

const CATEGORIES = [
  'All',
  'Senior Tech Help',
  'Apple',
  'Microsoft / Windows',
  'Google / Android',
  'Phone Carriers',
  'Internet Providers',
  'Government & Civic',
  'Banks & Cards',
  'Streaming & TV',
  'Scams & Fraud',
] as const;

type Category = (typeof CATEGORIES)[number];

export default function TechHelpHotlineDirectory() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return HOTLINES.filter((h) => {
      if (activeCategory !== 'All' && h.category !== activeCategory) return false;
      if (!term) return true;
      return (
        h.name.toLowerCase().includes(term) ||
        h.notes.toLowerCase().includes(term) ||
        h.number.toLowerCase().includes(term) ||
        h.category.toLowerCase().includes(term)
      );
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, Hotline[]>();
    for (const h of filtered) {
      const existing = map.get(h.category) ?? [];
      existing.push(h);
      map.set(h.category, existing);
    }
    return map;
  }, [filtered]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      <SEOHead
        title="Free Tech Help Hotline Directory — Real Phone Numbers | TekSure"
        description="A printable directory of legitimate, free tech help phone numbers — Apple, Microsoft, AARP, Medicare, banks, scam reporting. No paid services."
        path="/tools/tech-help-hotline-directory"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Phone className="h-8 w-8 text-amber-600" aria-hidden="true" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-3">Free Directory · Print &amp; save</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Tech Help Hotline Directory
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real phone numbers for legitimate, free tech help. Apple, Microsoft, AARP, Medicare,
              your bank, scam reporting — all in one printable directory. No paid "support
              services" included.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="print:hidden">
            <PageBreadcrumb
              segments={[
                { label: 'Tools', href: '/tools' },
                { label: 'Hotline Directory' },
              ]}
            />
          </div>

          {/* Search + filters */}
          <Card className="print:hidden">
            <CardContent className="p-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  type="search"
                  placeholder="Search for Apple, Medicare, your bank..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                  aria-label="Search hotlines"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card border-border hover:bg-muted'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
                <span>
                  Showing {filtered.length} of {HOTLINES.length} numbers
                </span>
                <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
                  <Printer className="h-3.5 w-3.5" aria-hidden="true" /> Print this directory
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Print header */}
          <div className="hidden print:block">
            <h1 className="text-3xl font-bold mb-2">Tech Help Hotline Directory</h1>
            <p className="text-sm mb-4">Printed from TekSure.com — current as of 2026</p>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  No matches. Try a different search term or category.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Results grouped by category */}
          {[...grouped.entries()].map(([category, hotlines]) => (
            <Card key={category} className="break-inside-avoid">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {category}
                </h2>
                <div className="space-y-4">
                  {hotlines.map((h) => {
                    const Icon = h.icon;
                    return (
                      <div
                        key={h.name}
                        className="rounded-xl border bg-card p-4 break-inside-avoid"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold leading-tight">{h.name}</h3>
                            <a
                              href={`tel:${h.number.replace(/[^\d]/g, '')}`}
                              className="text-lg font-mono font-bold text-primary hover:underline mt-1 inline-block print:no-underline"
                            >
                              {h.number}
                            </a>
                          </div>
                          {h.free && (
                            <Badge variant="secondary" className="flex-shrink-0">Free</Badge>
                          )}
                        </div>
                        <div className="ml-8 space-y-1 text-sm">
                          <p className="text-muted-foreground">
                            <span className="font-medium">Hours:</span> {h.hours}
                          </p>
                          <p className="text-muted-foreground">{h.notes}</p>
                          {h.url && (
                            <p className="text-xs">
                              <a
                                href={h.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-primary hover:underline print:text-foreground"
                              >
                                {h.url.replace(/^https?:\/\//, '')}
                              </a>
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Scam warning */}
          <Card className="border-amber-200 dark:border-amber-900/40 print:break-inside-avoid">
            <CardContent className="p-6 bg-amber-50/40 dark:bg-amber-950/10">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Watch for fake "tech support" numbers</h3>
                  <p className="text-sm leading-relaxed">
                    Scammers buy ads in search results that pretend to be Apple, Microsoft, or your
                    bank. The phone numbers in this directory come directly from each company\'s
                    official .com or .gov website. If a number you find online does not match the
                    one here, do not call it. Real Apple, Microsoft, and Google never display a
                    phone number in a pop-up window.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related links */}
          <Card className="print:hidden">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Related help</h3>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/scam-defense">Scam Defense Center</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/tools/scam-message-decoder">Scam Message Decoder</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/tools/two-factor-recovery-plan">2FA Recovery Plan</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/free-resources">Free Tech Programs</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/tekbrain">Ask TekBrain</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground text-center max-w-prose mx-auto">
            All numbers verified against the listed company\'s or agency\'s official website as of
            May 2026. Hours of operation can change — call to confirm current availability.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
