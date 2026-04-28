import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bus, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon,
  Smartphone, Train, MapPin, Phone, Building2, Heart,
} from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  cost: string;
  whoItFits: string;
  what: string;
  howToStart: string;
  link?: string;
  category: string;
}

const SERVICES: Service[] = [
  {
    name: 'Transit (best generic app)',
    icon: Bus,
    cost: 'Free',
    category: 'App — anywhere',
    whoItFits: 'Seniors who ride a mix of buses, trains, and light rail in any US city.',
    what: 'Big bold text, clear colors, and live arrival times for buses and trains in over 200 US cities. Works in cities of every size — not only the big ones. The "GO" button gives you turn-by-turn directions while you ride.',
    howToStart: 'App Store or Play Store, search "Transit" (orange icon). Open the app and it picks up your city. No sign-in required for most features.',
    link: 'https://transitapp.com',
  },
  {
    name: 'Citymapper (best for big urban areas)',
    icon: Train,
    cost: 'Free',
    category: 'App — big cities',
    whoItFits: 'Seniors in NYC, Boston, DC, Chicago, San Francisco, LA, Philadelphia, Seattle.',
    what: 'Compares every option side by side — bus, subway, walk, rideshare, bike — with door-to-door times and step counts. Shows which subway car to ride in for the fastest exit. Designed for dense cities where small choices save 15 minutes.',
    howToStart: 'App Store or Play Store, search "Citymapper". Choose your city on first launch.',
    link: 'https://citymapper.com',
  },
  {
    name: 'Moovit (free, widest US coverage)',
    icon: MapPin,
    cost: 'Free',
    category: 'App — anywhere',
    whoItFits: 'Seniors in smaller cities or rural areas where Transit and Citymapper do not reach.',
    what: 'Covers more US cities and small towns than any other app — over 3,500 areas. Shows live arrivals, station crowding, and step-free routes for riders with mobility needs. Owned by Intel.',
    howToStart: 'App Store or Play Store, search "Moovit". Allow location access so the app picks the right transit network.',
    link: 'https://moovitapp.com',
  },
  {
    name: 'Local agency apps (NYC OMNY, BART, MARTA, MUNI)',
    icon: Building2,
    cost: 'Free (fares vary)',
    category: 'Local agency',
    whoItFits: 'Seniors who ride mostly one transit system and want the official fare and senior discount tools.',
    what: 'Each major US transit agency has its own app with senior discount enrollment and contactless fare. New York: OMNY. San Francisco Bay Area: BART and MuniMobile. Atlanta: MARTA On The Go. DC: SmarTrip. Boston: MBTA mTicket. Chicago: Ventra.',
    howToStart: 'App Store or Play Store — search the agency name. Each app has a senior fare program. Apply once with proof of age (most accept driver\'s license).',
    link: 'https://www.apta.com/research-technical-resources/public-transportation-fact-book',
  },
  {
    name: 'GoGoGrandparent (rideshare without a smartphone)',
    icon: Phone,
    cost: '27 cents per minute + ride fare',
    category: 'Phone-based ride',
    whoItFits: 'Seniors who do not use a smartphone but want Uber or Lyft rides on demand.',
    what: 'Call one phone number and a real human dispatcher books an Uber or Lyft for you. No app, no account setup at the moment of the ride. The 27-cent-per-minute fee is added on top of the regular Uber or Lyft fare. Family members can be set up to receive ride updates by text.',
    howToStart: 'Call 1-855-464-6872. Sign up over the phone in about 10 minutes — give a credit card and a home address. After that, call the same number any time to book a ride.',
    link: 'https://gogograndparent.com',
  },
  {
    name: 'Area Agency on Aging — free senior transport',
    icon: Heart,
    cost: 'Free or donation-based',
    category: 'Free local ride',
    whoItFits: 'Seniors who need a ride to medical appointments, the grocery store, or the senior center.',
    what: 'Every US county has an Area Agency on Aging that runs free or donation-based door-to-door transport for seniors. Volunteer drivers, agency vans, or contracted taxis. Most often used for medical appointments — many cover senior center trips and grocery runs too.',
    howToStart: 'Visit eldercare.acl.gov, enter your zip code, and ask about "transportation services". Or call the Eldercare Locator at 1-800-677-1116.',
    link: 'https://eldercare.acl.gov',
  },
  {
    name: 'Google Maps (transit directions)',
    icon: Smartphone,
    cost: 'Free',
    category: 'App — anywhere',
    whoItFits: 'Seniors who already use Google Maps for driving and want one app for everything.',
    what: 'Tap the train icon when you search a place and Google Maps gives transit directions with live arrivals in most US cities. Not as polished as Transit or Citymapper for daily riders, but already on every Android phone and a quick install on an iPhone.',
    howToStart: 'Open Google Maps. Search for where you want to go. Tap the bus or train icon under the address. Pick the route with the fewest transfers.',
    link: 'https://maps.google.com',
  },
  {
    name: 'Apple Maps (transit on iPhone)',
    icon: Smartphone,
    cost: 'Free',
    category: 'App — iPhone',
    whoItFits: 'iPhone users who want transit directions without installing anything.',
    what: 'Apple Maps now has solid transit data for most large US cities. It runs on Apple Watch, which is helpful if reading a phone screen is hard. Apple Pay works as a contactless transit card on many systems (NYC OMNY, Chicago Ventra, Portland Hop).',
    howToStart: 'Open Maps, search for a destination, then tap the bus icon. Add your transit card to Apple Wallet for tap-to-pay on supported systems.',
    link: 'https://www.apple.com/maps/',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];

export default function SeniorTransitApps() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? SERVICES : SERVICES.filter(s => s.category === cat);

  return (
    <>
      <SEOHead
        title="Senior Transit Apps"
        description="Senior-friendly public transit apps and rides — Transit, Citymapper, Moovit, local agency apps, GoGoGrandparent, and free Area Agency on Aging transport. Plain-language guide."
        path="/tools/senior-transit-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Bus className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Senior Transit Apps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Buses, trains, and rides without the headache. Eight options that work — from the best apps to free county-run senior transport.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Senior Transit Apps' }]} />

          <Card className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2">Watch out for the "free senior ride" phone scam</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Scammers call seniors saying things like "you have qualified for free senior rides — give us your credit card to verify." This is fake. Real services like the Area Agency on Aging do not cold-call you. Real services do not need a credit card to "verify" a free ride.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    If a caller pressures you for payment info, hang up. You can always call eldercare.acl.gov or 1-800-677-1116 yourself to find real, free senior transport in your area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  cat === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            {filtered.map(s => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{s.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{s.cost}</Badge>
                          <Badge variant="outline">{s.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Who it fits:</strong> {s.whoItFits}</p>
                    <p className="text-sm text-muted-foreground mb-2">{s.what}</p>
                    <p className="text-xs text-muted-foreground mb-2"><strong>How to start:</strong> {s.howToStart}</p>

                    {s.link && (
                      <a href={s.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        Visit website <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick Tip: senior fare discounts</p>
              <p className="text-xs text-muted-foreground mb-3">
                Most US transit agencies offer half-price or better fares for riders 65+. The discount almost never applies automatically — you have to apply with proof of age. Once approved, the discount is loaded onto your fare card or app account. Worth the one-time paperwork — it can save hundreds of dollars a year for regular riders.
              </p>
              <a href="https://eldercare.acl.gov" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                Eldercare Locator <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/rideshare-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Rideshare Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up Uber and Lyft step by step.</p>
              </Link>
              <Link to="/tools/maps-navigation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Maps & Navigation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get directions you can read.</p>
              </Link>
              <Link to="/tools/government-benefits-portal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Government Benefits Portal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find federal and state senior benefits.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
