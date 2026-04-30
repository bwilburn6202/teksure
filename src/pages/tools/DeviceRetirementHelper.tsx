import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Recycle, Smartphone, Laptop, Tablet, Monitor, Tv,
  Trash2, Heart, Gift, ChevronRight, ExternalLink,
} from 'lucide-react';

type DeviceType = 'iphone' | 'android' | 'mac' | 'windows' | 'tablet' | 'tv';
type DeviceState = 'works' | 'broken' | 'unsure';

interface Path {
  title: string;
  icon: typeof Recycle;
  why: string;
  steps: string[];
  links: { label: string; href: string }[];
}

const WIPE_STEPS: Record<DeviceType, string[]> = {
  iphone: [
    'Open Settings → tap your name at the top → Find My → turn off "Find My iPhone".',
    'Back up first if you want to keep your photos: Settings → your name → iCloud → iCloud Backup → Back Up Now.',
    'Now wipe it: Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.',
    'Take the SIM card out before you hand it over.',
  ],
  android: [
    'Make sure you remember your Google account password — you will need it after the wipe.',
    'Back up first: Settings → Google → Backup → Back up now.',
    'Wipe it: Settings → System → Reset options → Erase all data (factory reset).',
    'Remove your SIM and any SD memory card before passing it on.',
  ],
  mac: [
    'Apple menu → System Settings → General → Transfer or Reset → Erase All Content and Settings.',
    'On older Macs without that option: restart, hold Command + R, open Disk Utility, erase the disk, then reinstall macOS from the Utilities menu.',
  ],
  windows: [
    'Settings → System → Recovery → Reset this PC → "Remove everything".',
    'When asked, choose "Clean drive" — slower, but it makes the data much harder to recover.',
  ],
  tablet: [
    'iPad: same as iPhone above. Settings → General → Transfer or Reset iPad → Erase All Content and Settings.',
    'Android tablet: Settings → System → Reset → Factory data reset.',
    'Pull out any SIM or memory card before handing it over.',
  ],
  tv: [
    'On most smart TVs: Settings → General (or System) → Reset → Factory Reset.',
    'Sign out of any streaming apps separately if the reset menu is missing — Netflix, YouTube, Prime Video each have a "sign out everywhere" in your account online.',
  ],
};

const DEVICES: { id: DeviceType; label: string; icon: typeof Smartphone }[] = [
  { id: 'iphone',  label: 'iPhone',          icon: Smartphone },
  { id: 'android', label: 'Android phone',   icon: Smartphone },
  { id: 'tablet',  label: 'iPad / tablet',   icon: Tablet },
  { id: 'mac',     label: 'Mac computer',    icon: Laptop },
  { id: 'windows', label: 'Windows computer', icon: Monitor },
  { id: 'tv',      label: 'Smart TV',         icon: Tv },
];

function buildPaths(device: DeviceType, state: DeviceState): Path[] {
  const wipe = WIPE_STEPS[device];

  if (state === 'broken') {
    return [
      {
        title: 'Recycle it for free',
        icon: Recycle,
        why: 'Old electronics contain materials that should not go in the trash. These places take broken devices for free.',
        steps: [
          'Take it to a Best Buy store — they recycle most consumer electronics for free, even if broken.',
          'Or check your county website for an e-waste drop-off day. Most US counties run them quarterly.',
          'Apple Stores will take any Apple product back at no charge.',
        ],
        links: [
          { label: 'Best Buy recycling',     href: 'https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c' },
          { label: 'Apple Trade In / recycle', href: 'https://www.apple.com/shop/trade-in' },
          { label: 'Find a local e-waste day', href: 'https://search.earth911.com/' },
        ],
      },
    ];
  }

  const paths: Path[] = [];

  paths.push({
    title: 'Wipe it before anything else',
    icon: Trash2,
    why: 'A working device still has your photos, contacts, saved passwords, and bank apps on it. Always wipe first.',
    steps: wipe,
    links: [],
  });

  paths.push({
    title: 'Trade it in',
    icon: Gift,
    why: 'Trade-in programs give you store credit even for devices that are several years old. Worth checking before you give it away.',
    steps: [
      device === 'iphone' || device === 'mac' || device === 'tablet'
        ? 'Apple Trade In is the easiest path for Apple products — they will quote you online.'
        : 'Best Buy and Amazon both run trade-in programs for phones, tablets, and laptops.',
      'Carriers (Verizon, AT&T, T-Mobile) also do trade-in for phone credit on a new line.',
    ],
    links: [
      { label: 'Apple Trade In',  href: 'https://www.apple.com/shop/trade-in' },
      { label: 'Best Buy Trade-In', href: 'https://tradein.bestbuy.com/' },
      { label: 'Amazon Trade-In',   href: 'https://www.amazon.com/tradein' },
    ],
  });

  paths.push({
    title: 'Donate it',
    icon: Heart,
    why: 'A working device you no longer use can be a lifeline for someone else. Several non-profits refurbish and pass them along.',
    steps: [
      'Cell Phones for Soldiers takes any working phone and turns it into prepaid cards for service members.',
      'World Computer Exchange and Computers with Causes refurbish laptops for students and non-profits.',
      'Local senior centers and women\'s shelters often take working phones — call your nearest one first.',
    ],
    links: [
      { label: 'Cell Phones for Soldiers',  href: 'https://www.cellphonesforsoldiers.com/' },
      { label: 'Computers with Causes',     href: 'https://www.computerswithcauses.org/' },
      { label: 'World Computer Exchange',   href: 'https://worldcomputerexchange.org/' },
    ],
  });

  paths.push({
    title: 'Hand it down to family',
    icon: Gift,
    why: 'A wiped device makes a great first phone for a grandkid or a backup tablet for the kitchen.',
    steps: [
      'After wiping, set it up fresh under their account, not yours.',
      'For a child\'s first phone, turn on parental controls before handing it over.',
      'See our Grandparent Device Setup guide for one-shared-tablet ideas.',
    ],
    links: [
      { label: 'Grandparent Device Setup', href: '/grandparent-device-setup' },
      { label: 'Kids Online Safety',       href: '/kids-online-safety' },
    ],
  });

  return paths;
}

export default function DeviceRetirementHelper() {
  const [device, setDevice] = useState<DeviceType | null>(null);
  const [state, setState] = useState<DeviceState | null>(null);

  const paths = useMemo(
    () => (device && state ? buildPaths(device, state) : []),
    [device, state],
  );

  const reset = () => { setDevice(null); setState(null); };

  return (
    <>
      <SEOHead
        title="Device Retirement Helper"
        description="Got an old phone, laptop, or tablet? Get clear next steps for wiping it, trading it in, donating it, or recycling it for free."
        path="/tools/device-retirement-helper"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Recycle className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Device Retirement Helper</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Got an old phone, laptop, or tablet sitting in a drawer? Get clear next steps in 30 seconds.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Device Retirement Helper' },
            ]}
          />

          {!device && (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-4">1. What kind of device?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {DEVICES.map(d => {
                    const Icon = d.icon;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setDevice(d.id)}
                        className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground mb-2" />
                        <p className="font-medium text-sm">{d.label}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {device && !state && (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-4">2. Does it still work?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {([
                    { id: 'works',  label: 'Yes, it still works', sub: 'Powers on, screen is fine' },
                    { id: 'broken', label: 'No, it is broken',     sub: 'Cracked, dead, or stuck' },
                    { id: 'unsure', label: 'Not sure',             sub: 'Has not been used in a while' },
                  ] as { id: DeviceState; label: string; sub: string }[]).map(s => (
                    <button
                      key={s.id}
                      onClick={() => setState(s.id === 'unsure' ? 'works' : s.id)}
                      className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                    >
                      <p className="font-medium text-sm">{s.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
                    </button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={reset} className="mt-4">Start over</Button>
              </CardContent>
            </Card>
          )}

          {device && state && (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{DEVICES.find(d => d.id === device)?.label}</Badge>
                    <Badge variant="outline">{state === 'broken' ? 'Broken' : 'Working'}</Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={reset}>Start over</Button>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {paths.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={i} className="border-border">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-base">{p.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{p.why}</p>
                          </div>
                        </div>
                        <ol className="space-y-2 mb-3 ml-1">
                          {p.steps.map((s, j) => (
                            <li key={j} className="flex gap-2 text-sm">
                              <span className="text-primary font-semibold shrink-0">{j + 1}.</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ol>
                        {p.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                            {p.links.map((l, k) => (
                              l.href.startsWith('/') ? (
                                <Link key={k} to={l.href}
                                  className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                                  {l.label} <ChevronRight className="h-3 w-3" />
                                </Link>
                              ) : (
                                <a key={k} href={l.href} target="_blank" rel="noreferrer"
                                  className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                                  {l.label} <ExternalLink className="h-3 w-3" />
                                </a>
                              )
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/device-age-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Age Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Should you replace it yet?</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up an old tablet for grandkids.</p>
              </Link>
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Clean up data tied to old accounts.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
