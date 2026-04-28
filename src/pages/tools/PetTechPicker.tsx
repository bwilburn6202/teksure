import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PawPrint, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface PetDevice {
  category: string;
  name: string;
  price: string;
  whatItDoes: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const DEVICES: PetDevice[] = [
  {
    category: 'GPS Tracker',
    name: 'Tractive GPS',
    price: '$50 device + $5/month',
    whatItDoes: 'Clips to the collar and shows your pet on a live map any time, anywhere in the country.',
    whoFor: 'Outdoor cats, dogs that bolt, or any pet that has wandered off before.',
    pros: [
      'Real-time location with no distance limit (uses cell towers).',
      'Works on a regular phone app — Apple or Android.',
      'Battery lasts 2-7 days on a charge.',
      'Cheapest monthly fee of the major trackers.',
    ],
    cons: [
      'Monthly fee never goes away — about $60/year.',
      'Needs a charge every few days.',
      'Slightly bulky on small dogs or cats under 9 lbs.',
    ],
    link: 'https://tractive.com/en/',
  },
  {
    category: 'GPS Tracker',
    name: 'Fi Series 3 Smart Collar',
    price: '$150 collar + $99-$189/year',
    whatItDoes: 'A full collar (not an attachment) with built-in GPS, activity tracking, and escape alerts.',
    whoFor: 'Active dog owners who want one collar that does everything.',
    pros: [
      'Battery lasts up to 3 months between charges.',
      'Tracks daily steps and sleep — like a Fitbit for dogs.',
      'Sends an alert the moment your dog leaves the yard.',
      'Tough collar built for swimming and rough play.',
    ],
    cons: [
      'Higher upfront cost than Tractive.',
      'Yearly subscription required to use GPS at all.',
      'Dog-only — no cat collar option.',
    ],
    link: 'https://tryfi.com/',
  },
  {
    category: 'GPS Tracker',
    name: 'Apple AirTag (indoor pets only)',
    price: '$29 (no subscription)',
    whatItDoes: 'A Bluetooth tag that pings off other Apple devices nearby. No live tracking.',
    whoFor: 'Indoor cats or dogs you only worry about if they slip out the front door.',
    pros: [
      'No monthly fee, ever.',
      'Battery lasts about a year.',
      'Tiny and lightweight.',
    ],
    cons: [
      'NOT a real-time tracker. It only updates when an iPhone passes nearby.',
      'Useless in rural areas with few iPhones around.',
      'No alert when your pet leaves the yard.',
      'iPhone owners only — no Android support.',
    ],
    link: 'https://www.apple.com/airtag/',
  },
  {
    category: 'Automatic Feeder',
    name: 'PETLIBRO Granary Automatic Feeder',
    price: '$90',
    whatItDoes: 'Drops a measured portion of dry food at scheduled times. Works for one pet at a time.',
    whoFor: 'Single-pet households where you travel, sleep in, or want consistent feeding times.',
    pros: [
      'Holds about 17 cups of food — a full week or more.',
      'Wi-Fi version lets you feed from your phone.',
      'Battery backup keeps it running during a power outage.',
      'Voice recording — your pet hears your voice at mealtime.',
    ],
    cons: [
      'Dry food only. No wet food, no treats.',
      'Some smart pets figure out how to tip it.',
      'Wi-Fi setup takes 10-15 minutes the first time.',
    ],
    link: 'https://petlibro.com/products/automatic-pet-feeder',
  },
  {
    category: 'Automatic Feeder',
    name: 'Sure Petcare Microchip Feeder',
    price: '$150',
    whatItDoes: 'Only opens when the right pet (matched by microchip) walks up to it.',
    whoFor: 'Multi-pet homes where one pet steals the others food, or a pet on a special diet.',
    pros: [
      'Reads your pets existing vet microchip — no special collar needed.',
      'Works with wet food, dry food, or both.',
      'Stops one pet from eating the others meal.',
      'Battery powered — sits anywhere on the floor.',
    ],
    cons: [
      'Manual portioning — you fill the bowl yourself.',
      'No scheduled feeding times.',
      'Only works with microchipped pets.',
      'Pricey for a single-pet home.',
    ],
    link: 'https://www.surepetcare.com/en-us/pet-feeder/microchip-pet-feeder',
  },
  {
    category: 'Pet Camera',
    name: 'Furbo 360 Dog Camera',
    price: '$210 (subscription optional)',
    whatItDoes: 'A camera with a treat launcher you control from your phone. Spins to follow your pet.',
    whoFor: 'Dog owners who feel guilty leaving home and want to check in (and toss a treat).',
    pros: [
      'Treat tossing — your dog learns the sound and runs over.',
      '360-degree spinning view follows your dog around the room.',
      'Two-way audio — talk to your pet, hear them back.',
      'Barking alerts sent to your phone.',
    ],
    cons: [
      'Premium features (smart alerts, video history) require a $7/month plan.',
      'Treats jam if they are too small or oddly shaped.',
      'Treats only — no food bowl version.',
    ],
    link: 'https://furbo.com/',
  },
  {
    category: 'Pet Camera',
    name: 'Petcube Cam (budget alternative)',
    price: '$40',
    whatItDoes: 'A simple Wi-Fi camera for checking in on your pet from your phone.',
    whoFor: 'Cat owners or anyone who wants a basic check-in camera without the treat feature.',
    pros: [
      'Five times cheaper than Furbo.',
      'Two-way audio so you can talk to your pet.',
      'Works with Alexa for hands-free viewing.',
      'No subscription needed for live view.',
    ],
    cons: [
      'No treat tossing.',
      'Camera does not move — fixed angle.',
      'Cloud video history needs a paid plan.',
    ],
    link: 'https://petcube.com/cam/',
  },
  {
    category: 'Smart Pet Door',
    name: 'SureFlap Microchip Pet Door',
    price: '$150',
    whatItDoes: 'A pet door that only unlocks for your pet (using their vet microchip). Keeps strays and raccoons out.',
    whoFor: 'Anyone with a cat or small dog who wants outdoor access without leaving the door open to wildlife.',
    pros: [
      'Reads the microchip your pet already has from the vet.',
      'Stops neighborhood cats, raccoons, and possums from coming in.',
      'Battery powered — no wiring.',
      'Set night-time curfews to keep your pet inside after dark.',
    ],
    cons: [
      'Installation cuts a hole in your door or wall — not for renters.',
      'Batteries (4 AA) last about 6 months.',
      'Only works with microchipped pets.',
      'Larger pets need the bigger model (about $250).',
    ],
    link: 'https://www.surepetcare.com/en-us/pet-doors/microchip-pet-door',
  },
  {
    category: 'Litter Robot',
    name: 'Litter-Robot 4',
    price: '$650',
    whatItDoes: 'A self-cleaning litter box. Cycles after each use, dropping waste into a sealed drawer below.',
    whoFor: 'Cat owners with limited mobility, multiple cats, or anyone tired of daily scooping.',
    pros: [
      'You empty the drawer once a week instead of scooping every day.',
      'Far less smell — waste seals away after every use.',
      'App tracks how often each cat goes (early warning for health issues).',
      'Whisper-quiet on the latest model.',
    ],
    cons: [
      'Expensive — the highest cost on this page.',
      'Some cats refuse to use it for the first week or two.',
      'Big footprint — needs about 2 feet of floor space.',
      'Power outage means manual cleaning until it comes back.',
    ],
    link: 'https://www.litter-robot.com/litter-robot-4.html',
  },
];

export default function PetTechPicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Pet Tech Picker"
        description="Pick the right pet gadget — GPS trackers, automatic feeders, pet cameras, smart pet doors, and litter robots. Honest pros and cons for senior pet owners."
        path="/tools/pet-tech-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <PawPrint className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Pet Tech Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Find the right gadget for your dog or cat. Five categories, honest pros and cons, no fluff.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Pet Tech Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Pet tech can help — if you pick the right thing</p>
              <p className="text-xs text-muted-foreground mb-3">
                For senior pet owners, the right gadget can take pressure off daily routines: a feeder that handles breakfast on a tough morning, a camera that lets the grandkids wave at the dog, a tracker that takes the panic out of a slipped leash. The wrong gadget gathers dust on a shelf. Below: five common categories, what each one actually does, and which type of household it fits.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? DEVICES : DEVICES.slice(0, 4)).map(d => (
              <Card key={d.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <div>
                      <Badge variant="secondary" className="mb-1.5">{d.category}</Badge>
                      <p className="font-semibold text-base">{d.name}</p>
                    </div>
                    <Badge variant="outline">{d.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>What it does:</strong> {d.whatItDoes}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {d.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {d.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {d.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={d.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 9 picks</Button>
            )}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for subscription creep</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Many pet gadgets look cheap on the box and then quietly add a monthly fee. A Tractive GPS at $5/month is $60 a year. A Fi collar plan can run $189 a year. Furbo charges $7/month for the smart features most owners want. Add a pet camera, a tracker, and a feeder, and you can be paying $200+ a year in fees on top of the device cost. Before you buy, check the fine print: which features stop working without the subscription? Add up the first three years total cost — device plus fees — and compare it to a no-subscription option like an AirTag (indoors) or PETLIBRO feeder.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick decision guide</p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li><strong>Outdoor cat or runaway dog?</strong> Tractive (cheaper monthly) or Fi (better battery).</li>
                <li><strong>Indoor pet only?</strong> AirTag is plenty — no monthly fee.</li>
                <li><strong>Travel a lot or sleep in?</strong> PETLIBRO automatic feeder.</li>
                <li><strong>Two pets, one steals food?</strong> Sure Petcare microchip feeder.</li>
                <li><strong>Want to check in from work?</strong> Furbo if you have a dog, Petcube if you have a cat.</li>
                <li><strong>Tired of scooping the litter box?</strong> Litter-Robot 4 — pricey but life-changing.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">Trackers for keys, wallets, and more.</p>
              </Link>
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">First steps into connected gadgets.</p>
              </Link>
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Phones and tablets made simple.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: ask your vet to confirm your pet has a working microchip before buying any microchip-based device. About 1 in 10 chips have shifted under the skin or stopped reading.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
