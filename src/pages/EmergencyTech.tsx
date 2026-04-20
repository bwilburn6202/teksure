import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Siren,
  CheckCircle2,
  BatteryFull,
  Cloud,
  WifiOff,
  Flame,
  LifeBuoy,
  ArrowRight,
  ExternalLink,
  Sun,
  Car,
  Radio,
  Smartphone,
  MapPin,
  Heart,
} from 'lucide-react';

type Item = {
  title: string;
  description: string;
  link?: { to: string; label: string; external?: boolean };
};

const beforeChecklist: Item[] = [
  {
    title: 'Save emergency contacts to your phone — and write them on paper',
    description:
      'Phones die and get lost. Print a small card with three key numbers (a family member, a neighbor, and your doctor) and keep it in your wallet.',
  },
  {
    title: 'Set up Medical ID',
    description:
      'On iPhone, Medical ID shows your meds, allergies, and emergency contacts on the lock screen — even if your phone is locked. First responders are trained to look for it.',
    link: { to: '/guides/set-up-medical-id-iphone', label: 'How to set up Medical ID' },
  },
  {
    title: 'Enable Emergency SOS',
    description:
      'Hold the side and a volume button to call 911 and notify your emergency contacts with your location. Practice so muscle memory takes over when stressed.',
  },
  {
    title: 'Charge backup batteries now — not when the storm hits',
    description:
      'Stores sell out the day before any major weather event. Keep at least one 10,000 mAh power bank charged at all times — it covers 2–3 full phone charges.',
  },
  {
    title: 'Save important docs to cloud AND keep an offline copy',
    description:
      'Driver license, insurance cards, prescriptions, deed, and birth certificates. Scan to iCloud or Google Drive, then keep a USB stick or printed copy in a waterproof bag.',
  },
  {
    title: 'Set up "ICE" (In Case of Emergency) contacts',
    description:
      'Add the letters "ICE" before a contact name (ICE Mom, ICE Spouse). It is the universal signal for first responders going through your phone.',
  },
];

type Battery = {
  tier: string;
  product: string;
  price: string;
  notes: string;
};

const batteries: Battery[] = [
  {
    tier: 'Budget',
    product: 'Anker PowerCore 10000',
    price: '~$22',
    notes: 'Pocket-sized, ~3 phone charges, drops in a glove compartment without taking up space.',
  },
  {
    tier: 'Mid-range',
    product: 'Anker PowerCore 26800 PD',
    price: '~$70',
    notes: 'Charges phones, tablets, and most laptops. ~7 phone charges. Best single-purchase for most households.',
  },
  {
    tier: 'Whole-home',
    product: 'Jackery Explorer 500 / EcoFlow River 2',
    price: '$300–$500',
    notes: 'Power station that runs a CPAP, mini-fridge, lights, and dozens of phone charges. Pair with a small solar panel for multi-day outages.',
  },
];

const emergencyApps = [
  {
    name: 'FEMA',
    url: 'https://www.fema.gov/about/news-multimedia/mobile-app-text-messages',
    description: 'Real-time NWS alerts for up to 5 locations, shelter finder, disaster resources, and survival tips.',
  },
  {
    name: 'Red Cross Emergency',
    url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps.html',
    description: '40+ severe weather and emergency alerts, family-safety check-ins, and step-by-step "what to do" instructions.',
  },
  {
    name: 'NOAA Weather Radar',
    url: 'https://www.weather.gov/wrn/mobile-phone',
    description: 'Live radar, NWS alerts, and storm tracking direct from the National Weather Service.',
  },
  {
    name: 'Watch Duty',
    url: 'https://www.watchduty.org',
    description: 'Free, ad-free wildfire tracking app run by trained reporters. Real-time fire location, evacuation orders, and air quality.',
  },
  {
    name: 'Waze',
    url: 'https://www.waze.com',
    description: 'Driver-reported road closures, downed trees, gas-station availability — invaluable for evacuating around hazards.',
  },
];

const internetBackups = [
  {
    icon: Smartphone,
    title: 'Cellular hotspot from your phone',
    description:
      'Most US phone plans include hotspot — Settings → Personal Hotspot. Lets a laptop, tablet, or smart-home hub use your phone\'s cell connection when home internet is down.',
  },
  {
    icon: Siren,
    title: 'Satellite messaging (iPhone 14+)',
    description:
      'Emergency SOS via Satellite works when you have no cell signal at all. Free for at least 2 years on every iPhone 14 or newer. Newer iPhones also support iMessage via satellite.',
  },
  {
    icon: Heart,
    title: 'Physical meetup plans',
    description:
      'Pick two locations — one near home, one outside the neighborhood — where family will gather if phones fail. Practice it once a year with kids and grandparents.',
  },
  {
    icon: MapPin,
    title: 'Offline Google Maps',
    description:
      'Download your home region in Google Maps before disaster strikes (Profile → Offline maps). GPS still works without cell service — you just need the map data already saved.',
  },
  {
    icon: Cloud,
    title: 'Downloaded content',
    description:
      'Save Netflix shows, Spotify playlists, audiobooks, and a few movies to your phone before storm season. Outages are easier on kids and elderly family with familiar entertainment.',
  },
];

const wildfireResources = [
  {
    name: 'Watch Duty',
    url: 'https://www.watchduty.org',
    description: 'The single most trusted wildfire app in the western US. Free, ad-free, run by a non-profit with trained dispatchers.',
  },
  {
    name: 'Cal Fire',
    url: 'https://www.fire.ca.gov',
    description: 'For California residents — official incident map, evacuation orders, and Ready For Wildfire planning tools.',
  },
  {
    name: 'AirNow',
    url: 'https://www.airnow.gov',
    description: 'EPA air quality readings during smoke events. Tells you when to mask up or stay indoors.',
  },
  {
    name: 'Genasys (Zonehaven)',
    url: 'https://protect.genasys.com',
    description: 'Used by many western counties for evacuation zones. Find your zone now so an alert during a fire makes sense instantly.',
  },
];

const afterEvent = [
  {
    title: 'Find power and WiFi',
    description:
      'Libraries, big-box stores (Costco, Walmart, Target), Starbucks, and many municipal cooling/warming centers offer free outlets and WiFi after disasters.',
  },
  {
    title: 'Use FEMA\'s Disaster Recovery Center finder',
    description:
      'fema.gov/locations shows in-person help centers after federally declared disasters. Bring ID, insurance info, and a list of damages.',
  },
  {
    title: 'Register for FEMA Individual Assistance',
    description:
      'If your area is declared a disaster, register at disasterassistance.gov or call 1-800-621-3362. Eligible for grants for housing, repairs, and personal property.',
  },
  {
    title: 'Document damage with photos',
    description:
      'Take wide and close-up photos of every damaged item before you clean up or throw anything away. Insurance claims and FEMA both need visual evidence.',
  },
];

export default function EmergencyTech() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Emergency Tech Prep — Power Outages, Disasters & Staying Connected | TekSure"
        description="When things go wrong, tech can save you — if it's ready. Pre-disaster checklist, real product picks, the apps that matter, and what to do after the event."
        path="/emergency-tech"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Siren className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              When Things Go Wrong, Tech Can Save You — If It's Ready
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A practical guide to power outages, storms, wildfires, and staying connected when the grid goes down.
            </p>
          </div>
        </section>

        {/* Before */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">BEFORE DISASTER STRIKES</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Six things to do this weekend
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The work you do calmly today is what protects you in the chaos of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {beforeChecklist.map((item, idx) => (
              <Card key={item.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 w-9 h-9 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.link && (
                      <Button asChild variant="link" size="sm" className="px-0 h-auto gap-1.5 text-primary">
                        <Link to={item.link.to}>
                          {item.link.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Power Outage Prep */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <BatteryFull className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="outline" className="mb-3">POWER OUTAGE PREP</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                What actually keeps your phone alive
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real product picks at three price tiers. Pick one — anything is better than nothing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {batteries.map((b) => (
                <Card key={b.product} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="text-xs mb-2">{b.tier}</Badge>
                    <h3 className="font-semibold text-foreground mb-1">{b.product}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{b.price}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-3">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Solar chargers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Goal Zero Nomad 10 (~$80) or BigBlue 28W (~$70). Slow but works for days. Best as a top-up for a power station, not a primary phone charger.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-3">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Car chargers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Keep one USB-C and one USB-A car charger in your glove box at all times. Your car becomes a power source as long as you can run the engine 15 min an hour.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-3">
                    <Radio className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Hand-crank radio + charger</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Eton FRX3+ or Midland ER310 (~$50). NOAA weather alerts, AM/FM, USB phone charging, flashlight, and SOS siren. The single most useful disaster gadget.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border border-amber-300/40 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-900/50 mt-6">
              <CardContent className="p-5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">When storms are forecast: </span>
                  Charge every device to 80%+ the night before. Modern phones can ride out 3–4 days on Low Power Mode if you start full and don\'t stream video.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Storm/Hurricane Apps */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3">STORM & HURRICANE TECH</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              The apps to install before, not after
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All free. Download them now — app stores get jammed when everyone tries to install at once during a real event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {emergencyApps.map((a) => (
              <Card key={a.name} className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{a.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.description}</p>
                  <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                    <a href={a.url} target="_blank" rel="noopener noreferrer">
                      Get the app
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Internet backups */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <WifiOff className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="outline" className="mb-3">IF YOU LOSE INTERNET</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Backup ways to stay reachable
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cell, satellite, paper, and offline. Layer them — you only need one to work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {internetBackups.map((b) => (
                <Card key={b.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <div className="rounded-xl bg-primary/10 w-11 h-11 flex items-center justify-center mb-3">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wildfire */}
        <section className="container max-w-5xl py-12 md:py-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="outline" className="mb-3">WILDFIRE-SPECIFIC</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              For anyone in fire country
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fire moves faster than any other natural disaster. Real-time information is the difference between safe evacuation and being trapped.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {wildfireResources.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.description}</p>
                  <Button asChild variant="outline" size="sm" className="rounded-xl gap-2">
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* After */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-4xl py-12 md:py-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                <LifeBuoy className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="outline" className="mb-3">AFTER THE EVENT</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Recovery checklist
              </h2>
            </div>

            <div className="space-y-4">
              {afterEvent.map((a) => (
                <Card key={a.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-xl gap-2">
                <Link to="/free-resources">
                  See free resources & emergency tech grants
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
