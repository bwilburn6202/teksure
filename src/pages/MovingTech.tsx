import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Truck,
  Wifi,
  Mail,
  CalendarDays,
  Box,
  Home,
  Camera,
  HardDrive,
  Cable,
  Battery,
  AlertCircle,
  Phone,
  Heart,
  Building2,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ClipboardList,
} from 'lucide-react';

const sixWeeks = [
  {
    title: 'Check internet options at new address',
    description:
      'Type the new address into BroadbandNow.com or the FCC Broadband Map (broadbandmap.fcc.gov). See which providers actually serve the address before you commit. Cable, fiber, and 5G home internet are not always available everywhere they advertise.',
  },
  {
    title: 'Schedule internet transfer or new install',
    description:
      'Install windows fill up fast in busy moving season (May-September). Book the install for the day after you take possession, not the day of. Movers and installers in the house at the same time is a recipe for delay.',
  },
  {
    title: 'Get moving quotes',
    description:
      'Compare full-service movers, U-Haul (uhaul.com), and PODS (pods.com). The Updater app (updater.com) is bundled into many leases now and aggregates moving services in one place.',
  },
];

const fourWeekUpdates = [
  { name: 'USPS mail forwarding', url: 'https://moversguide.usps.com', note: '$1.10 identity-verification fee. Forwards first-class mail for 12 months.' },
  { name: 'DMV — license & registration', url: 'https://www.usa.gov/state-motor-vehicle-services', note: 'Most states give you 30 days after the move to update.' },
  { name: 'Voter registration', url: 'https://vote.gov', note: 'Update through your new state, or use vote.gov as a starting point.' },
  { name: 'IRS (Form 8822)', url: 'https://www.irs.gov/forms-pubs/about-form-8822', note: 'Required if you want refund checks and notices to follow you.' },
  { name: 'Social Security Administration', url: 'https://www.ssa.gov/myaccount', note: 'Sign in to "my Social Security" to update your address online.' },
  { name: 'Medicare / Medicaid', url: 'https://www.medicare.gov/account/login', note: 'Update at Medicare.gov. Medicaid is state-by-state — start at your state portal.' },
  { name: 'Bank accounts', url: null, note: 'Each bank separately. Most can be done in the mobile app under Profile or Settings.' },
  { name: 'Credit cards', url: null, note: 'Statements, fraud alerts, and new-card mailings all use this address. Update every card.' },
  { name: 'Insurance (auto, home, health)', url: null, note: 'Auto rates change with ZIP. Home/renters needs a new policy at the new address. Health may need an in-network check.' },
  { name: "Doctor's offices", url: null, note: 'Update through patient portals (MyChart, FollowMyHealth, etc.) so prescriptions and lab results follow you.' },
  { name: 'Pharmacy', url: null, note: 'Transfer prescriptions to a pharmacy near the new address. CVS and Walgreens can do this from the app.' },
  { name: 'Employer / HR', url: null, note: 'Affects W-2, paychecks, and tax withholding. Some states require new tax forms.' },
  { name: 'Online shopping accounts', url: null, note: 'Amazon, Target, Walmart, eBay, Etsy. The default shipping address is the one to fix.' },
];

const twoWeeks = [
  {
    icon: Camera,
    title: 'Take photos of electronics setup',
    description:
      'Before you unplug the TV, the router, or the desk computer, photograph the back of each device. Cables in the new place will not match the diagram in your head — the photo will save you 30 minutes per device.',
  },
  {
    icon: HardDrive,
    title: 'Back up computers',
    description:
      'External drive backup or cloud (iCloud, Google Drive, OneDrive, Backblaze). Boxes get lost. Drives get dropped. The backup is the insurance.',
  },
  {
    icon: Cable,
    title: 'Return cable equipment',
    description:
      'If you are switching providers, return the modem and router to the original provider in person at a store. Get a receipt. Phantom equipment fees are one of the most common post-move surprise charges.',
  },
  {
    icon: AlertCircle,
    title: 'Cancel services not transferring',
    description:
      'Lawn care, gym, alarm monitoring, water delivery, local subscriptions, and any service tied to the old ZIP. Schedule cancellations for moving day, not before — you will need them right up to the end.',
  },
];

const movingDay = [
  {
    icon: Battery,
    title: 'Emergency tech bag',
    description:
      'Pack a small bag separately from the moving truck: every charger you own, a 20,000 mAh power bank, USB-C and Lightning cables, a multi-port wall charger, headphones, and an HDMI cable. This bag goes in your car, not the truck.',
  },
  {
    icon: Box,
    title: 'Label cable bags',
    description:
      'Bag the cables for each device with the device, or in a single labeled bag ("TV cables", "router/modem", "office"). Loose cables in a moving box are unidentifiable cables.',
  },
  {
    icon: Wifi,
    title: 'Set up WiFi at new place first thing',
    description:
      'Before you unpack a single box, plug in the modem and router and confirm the connection. Everything that follows — smart locks, thermostats, doorbell, smart speakers — needs WiFi to set up.',
  },
];

const firstWeek = [
  {
    icon: AlertCircle,
    title: 'Test smoke detectors',
    description:
      'Every detector in the new place. Push the test button. Replace any 9V batteries that chirp. The previous tenant probably did not.',
  },
  {
    icon: Home,
    title: 'Set up smart home devices',
    description:
      'Smart locks, thermostats (Nest, Ecobee), doorbell cameras (Ring, Nest, Arlo), smart speakers, and any Hue/LIFX bulbs. Each one needs to rejoin the new WiFi — most can do this from the app without a full factory reset.',
  },
  {
    icon: MapPin,
    title: 'Update location on phone',
    description:
      'Settings → Privacy → Location Services. Set Home and Work in Maps to the new addresses so navigation and "time to leave" suggestions work.',
  },
  {
    icon: ClipboardList,
    title: 'Update weather and news apps',
    description:
      'Default city in Weather, AccuWeather, local news app. Saves you from getting alerts for the old neighborhood for the next year.',
  },
  {
    icon: Phone,
    title: 'Find closest emergency services',
    description:
      'Save the new urgent care, ER, vet, and non-emergency police line in your phone. Look up the local utility (gas, electric) emergency numbers. Add to favorites.',
  },
];

const specialSituations = [
  {
    icon: Heart,
    title: 'Moving with an aging parent',
    description:
      'Move their device settings before the move (large text, high contrast, simplified home screen). Set up remote help (TeamViewer or Apple Family Sharing) so you can troubleshoot from your house. Pre-program emergency contacts in the new neighborhood.',
    cta: { to: '/caregiver-hub', label: 'Caregiver Hub' },
  },
  {
    icon: Phone,
    title: 'Moving alone (tech help resources)',
    description:
      'AARP Tech Tutorials (free, all ages welcome), Senior Planet, the local library (most have free tech help by appointment), and Geek Squad in-home setup ($99-$199 per visit) all help with the post-move setup.',
    cta: { to: '/free-resources', label: 'Free tech resources' },
  },
  {
    icon: Building2,
    title: 'Moving to a senior community',
    description:
      'Most communities have shared WiFi, but speeds vary. Ask the property manager about WiFi quality and whether you need a personal router. Some communities also have IT help included — find out who and how to reach them.',
    cta: null,
  },
  {
    icon: MapPin,
    title: 'Moving states',
    description:
      'New driver\'s license (within 30-90 days depending on state), new vehicle registration, new voter registration, possible new insurance carrier (auto rates change with ZIP), and a new state tax withholding form at work.',
    cta: null,
  },
];

export default function MovingTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Moving House Tech Checklist — Internet, Mail, Everything | TekSure"
        description="A complete moving tech checklist: 6 weeks out, internet setup, address updates, moving day essentials, and the first week in your new place. Nothing forgotten."
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Truck className="mr-1 h-3 w-3" />
              Moving Checklist
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Moving? Here's Your Tech Checklist So You Don't Forget Anything
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              The week-by-week list of every account, address, and device you need to update —
              plus what to bring in your car so the first night in the new place is not a disaster.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Weeks Before */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">
              <CalendarDays className="mr-1 h-3 w-3" />
              6 Weeks Before
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Lock in the big logistics</h2>
            <p className="mt-2 text-muted-foreground">
              These three things take time and have waitlists. Start them first.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sixWeeks.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Weeks Before — Address Updates */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3">
                <CalendarDays className="mr-1 h-3 w-3" />
                4 Weeks Before
              </Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Update your address everywhere</h2>
              <p className="mt-2 text-muted-foreground">
                The complete list. Print it, work through it one row at a time, and check off as
                you go.
              </p>
            </div>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {fourWeekUpdates.map((item) => (
                    <li key={item.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <p className="ml-6 mt-1 text-sm text-muted-foreground">{item.note}</p>
                      </div>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-6 inline-flex items-center gap-1 text-sm text-primary hover:underline sm:ml-0"
                        >
                          Open <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2 Weeks Before */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">
              <CalendarDays className="mr-1 h-3 w-3" />
              2 Weeks Before
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Prep the devices</h2>
            <p className="mt-2 text-muted-foreground">
              Photos, backups, returns, cancellations. The boring stuff that prevents the worst
              regrets.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {twoWeeks.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moving Day */}
      <section className="border-y bg-amber-50/40 dark:bg-amber-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <Badge variant="outline" className="mb-3">
                <Truck className="mr-1 h-3 w-3" />
                Moving Day
              </Badge>
              <h2 className="text-3xl font-bold md:text-4xl">The day-of essentials</h2>
              <p className="mt-2 text-muted-foreground">
                Three things that make moving day go from "frantic" to "manageable."
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {movingDay.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* First Week */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Badge variant="outline" className="mb-3">
              <Home className="mr-1 h-3 w-3" />
              First Week in New Home
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Settle the new place in</h2>
            <p className="mt-2 text-muted-foreground">
              The first week is when small fixes prevent large headaches later.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {firstWeek.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setting Up New Internet */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="mb-3">
                <Wifi className="mr-1 h-3 w-3" />
                New Internet
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Setting Up New Internet</h2>
              <p className="text-muted-foreground">
                Before you sign a 2-year contract, compare what is actually available at the new
                address. Two free tools we built for this:
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Internet Plan Comparator</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Compare home internet plans by speed, price, and contract length. Cuts through
                    the marketing noise to show actual cost per Mbps.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/tools/internet-plan-comparator">
                      Open the tool
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Phone Plan Comparator</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    A move is a great moment to re-shop your phone plan. Coverage, price, and data
                    needs may have changed. Side-by-side comparison.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/tools/phone-plan-comparator">
                      Open the tool
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Situations */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Special Situations</h2>
            <p className="text-muted-foreground">
              When your move has an extra layer — caregiving, going solo, or crossing state lines.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {specialSituations.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                    {item.cta && (
                      <Button asChild variant="outline" size="sm">
                        <Link to={item.cta.to}>
                          {item.cta.label}
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need help with the tech setup?</h2>
            <p className="mb-6 text-muted-foreground">
              Browse our free guides on setting up routers, smart home devices, and new computers
              — or book a 1-on-1 session if you would rather have someone walk you through it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/guides">Browse all guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/book">Book tech help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
