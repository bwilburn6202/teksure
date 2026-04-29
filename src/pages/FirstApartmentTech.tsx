import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Wifi,
  Shield,
  DollarSign,
  Tv,
  Lightbulb,
  Phone,
  Lock,
  Package,
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Home,
} from 'lucide-react';

const internetSetup = [
  {
    icon: Wifi,
    title: 'Setting up internet — step by step',
    description:
      'Call or visit your chosen provider\'s website, give your address, and pick a plan. Most apartments are served by 1–3 providers — search "internet providers at [your address]" to see your options. For one person, 100–200 Mbps is plenty. A technician will usually come within a week to install the modem. Ask if you can use your own router (saves the $10–$15/month equipment rental fee).',
  },
  {
    icon: Wifi,
    title: 'Choosing a router',
    description:
      'If your landlord or provider gives you a free router, use it for now. When you are ready to buy your own, the TP-Link Archer AX21 ($50) and the Eero 6 ($75) are reliable choices that cover a standard apartment. For a studio or one-bedroom, one router is enough. For a two-bedroom with walls that block signal, a mesh system (two or three small routers) works better.',
  },
  {
    icon: Lock,
    title: 'Secure your WiFi immediately',
    description:
      'Change the default WiFi password as soon as your router is set up. Use something long and memorable but hard to guess — three random words work well ("PurpleRocketCoffee"). Change the router\'s admin password too (it is different from the WiFi password). Write both down and keep them somewhere safe at home. Default passwords are publicly listed online and make your network easy to break into.',
  },
];

const mustHaveApps = [
  {
    icon: DollarSign,
    title: 'Budgeting — Mint or YNAB',
    description:
      'Mint (free) connects to your bank account and categorizes spending automatically. YNAB ($15/month) is more intentional — you assign every dollar a job. Either one will reveal where your money actually goes, which is usually different from where you think it goes. Set it up in the first week and look at it monthly.',
  },
  {
    icon: Package,
    title: 'Renter\'s insurance — do not skip it',
    description:
      'Renter\'s insurance covers your belongings if there is a fire, theft, or water damage. Average cost: $15–$25/month. Lemonade, State Farm, and your parent\'s insurer (ask about a bundle discount) all offer it. Many landlords now require it — and even if yours does not, a single incident without it can be financially devastating. Sign up before you move anything in.',
  },
  {
    icon: Phone,
    title: 'Emergency contacts and 911',
    description:
      'Add your building\'s maintenance number, nearest urgent care, and your emergency contact to your phone contacts. On iPhone, set up Medical ID (Health app → your name → Medical ID) so first responders can see your info without unlocking your phone. Know your exact apartment address — in an emergency, "I\'m at the big brick building on 5th" wastes critical seconds.',
  },
  {
    icon: Shield,
    title: 'Password manager — start now',
    description:
      'You will create 30–50 accounts in your first apartment year. A password manager (Bitwarden is free; 1Password is $3/month) stores all of them securely and fills them in automatically. Use a different, strong password for every account. This single habit prevents most account hacks. Set it up before you forget every password you just created.',
  },
];

const smartShopping = [
  {
    icon: Tv,
    title: 'Streaming instead of cable',
    description:
      'A $30 one-time antenna brings in local channels free (ABC, NBC, CBS, Fox). Add Netflix ($15/month) and one or two others and you have more to watch than you will ever get to. Avoid signing up for multiple services at once — try one for a month, then decide. Most have a free trial. You can cancel anytime.',
  },
  {
    icon: Lightbulb,
    title: 'Smart plugs before smart bulbs',
    description:
      'A $15 smart plug makes any lamp voice-controlled or schedule-controlled. Cheaper and more flexible than smart bulbs because it works with whatever lamp you already have. Start with one — for a bedside lamp or living room light. Add more only if the first one genuinely improves your life. Do not over-tech an apartment you might move out of in a year.',
  },
  {
    icon: Smartphone,
    title: 'Buy refurbished when you can',
    description:
      'Apple Certified Refurbished phones come with the same warranty as new ones at 15–20% off. Amazon Renewed and Back Market sell refurbished electronics with return policies. For your first apartment on a budget, buying last year\'s model refurbished is almost always the smarter financial choice over buying new.',
  },
  {
    icon: Home,
    title: 'Check before you buy smart home stuff',
    description:
      'Ask your landlord before installing anything that requires drilling, modifying an outlet, or changing the door lock. Smart thermostats require wiring that many apartments do not support. Smart locks may violate your lease. Wall-mounted TV brackets almost always need landlord approval. When in doubt, ask in writing and keep the response.',
  },
];

const safetyAndSecurity = [
  {
    icon: AlertTriangle,
    title: 'Smoke and CO detectors — check them',
    description:
      'Your landlord is required to provide working smoke and carbon monoxide detectors. Test them the day you move in by pressing the test button. If they do not beep, contact your landlord in writing immediately. Most detectors need a battery replacement every year — put it in your calendar. A detector with a dead battery is the same as no detector.',
  },
  {
    icon: CheckCircle,
    title: 'Video doorbell — for renters',
    description:
      'Battery-powered video doorbells (Ring Video Doorbell Battery, $70) require no wiring and work in most apartments — check your lease first. Screw-free mounting kits are available. You can see who is at the door from your phone, anywhere. The camera records motion, so you have video evidence if packages are stolen. Remove it when you move out.',
  },
  {
    icon: Lock,
    title: 'Package theft',
    description:
      'Package theft spikes in apartment buildings. Use "deliver to locker" options in the Amazon, UPS, and FedEx apps when available. Have packages delivered to work when possible. A Ring camera aimed at your door or the mail area deters and documents theft. For high-value items, require signature-required delivery.',
  },
];

export default function FirstApartmentTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="First Apartment Tech Guide | TekSure"
        description="Setting up tech in your first apartment — internet setup, essential apps, smart home basics, and security tips. A practical guide for renters starting fresh."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-green-50 to-background dark:from-green-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Home className="mr-1 h-3 w-3" />
              First Apartment
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Tech Setup for Your First Place
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Setting up internet, choosing what to stream, staying safe online, and avoiding the
              tech mistakes most first-time renters make.
            </p>
          </div>
        </div>
      </section>

      {/* Internet Setup */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Wifi className="mr-1 h-3 w-3" />
              Step 1: Internet
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Getting Online</h2>
            <p className="text-muted-foreground">
              Internet is the most important utility in your apartment. Set it up right from the
              start.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {internetSetup.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
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

      {/* Must-Have Apps */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Shield className="mr-1 h-3 w-3" />
                Essentials
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Apps and Services to Set Up First</h2>
              <p className="text-muted-foreground">
                These four things will save you money, stress, and headaches.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {mustHaveApps.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
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

      {/* Smart Shopping */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <DollarSign className="mr-1 h-3 w-3" />
              Smart Spending
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Tech Worth Buying (and What to Skip)</h2>
            <p className="text-muted-foreground">
              Your first apartment budget is tight. Spend on things that genuinely improve your day.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {smartShopping.map((item) => {
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

      {/* Safety */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <AlertTriangle className="mr-1 h-3 w-3" />
                Safety
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Safety Tech for Renters</h2>
              <p className="text-muted-foreground">
                Three things to check and set up before anything else.
              </p>
            </div>
            <div className="space-y-4">
              {safetyAndSecurity.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gradient-to-b from-green-50 to-background dark:from-green-950/30">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Home className="mx-auto mb-6 h-12 w-12 text-green-600 dark:text-green-400" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Have questions about any of this?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our guides walk through everything in plain language, and a 1-on-1 session means
              someone patient walks you through your specific setup.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/book">Book a setup session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/guides">Browse all guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
